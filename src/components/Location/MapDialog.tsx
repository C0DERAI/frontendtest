import { useEffect, useRef } from "react";
import type { MouseEvent, RefObject } from "react";
import "./MapDialog.scss";

interface MapDialogProps {
  isOpen: boolean;
  onClose: () => void;
  triggerRef: RefObject<HTMLButtonElement | null>;
}

const MAP_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1615.9254597722654!2d-1.1339286902650432!3d52.63915745447631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb7314784b68c14c0!2sUn.titled!5e0!3m2!1sen!2suk!4v1575994684235!5m2!1sen!2suk";

export default function MapDialog({
  isOpen,
  onClose,
  triggerRef,
}: MapDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) {
      dialog.showModal();
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  const handleClose = () => {
    onClose();
    triggerRef.current?.focus();
  };

  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    // The Map modal closes when the user clicks outside of the modal content area (the backdrop)
    if (event.target === event.currentTarget) {
      dialogRef.current?.close();
    }
  };

  return (
    <dialog
      ref={dialogRef}
      id="location-map-dialog"
      className="map-dialog"
      aria-label="Izza Pizza location map"
      onClose={handleClose}
      onClick={handleBackdropClick}
    >
      <div className="map-dialog__content">
        {isOpen && (
          <iframe
            className="map-dialog__iframe"
            src={MAP_URL}
            title="Google Map showing Izza Pizza in Leicester"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        )}
      </div>
    </dialog>
  );
}
