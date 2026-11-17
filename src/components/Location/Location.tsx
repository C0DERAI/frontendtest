import { useRef, useState } from "react";
import MapDialog from "./MapDialog";
import chefImage from "../../assets/img/asignpost-img.jpg";
import "./Location.scss";

export default function Location() {
  const [isMapOpen, setIsMapOpen] = useState(false);

  const mapButtonRef = useRef<HTMLButtonElement>(null);

  function openMap() {
    setIsMapOpen(true);
  }

  function closeMap() {
    setIsMapOpen(false);
    mapButtonRef.current?.focus();
  }

  return (
    <>
      <section
        className="location"
        id="find-us"
        aria-labelledby="location-heading"
      >
        <div className="location__container container">
          <div className="location__content">
            <h2 className="location__heading" id="location-heading">
              Our Story
            </h2>

            <p className="location__description">
              Phasellus ultrices, massa vel commodo maximus, ex metus accumsan
              ante, id maximus turpis augue id lacus. Nullam porttitor mauris
              nec fermentum fermentum. Pellentesque habitant morbi
            </p>

            <button
              ref={mapButtonRef}
              className="location__map-button"
              type="button"
              aria-haspopup="dialog"
              onClick={openMap}
            >
              View Map
            </button>
          </div>

          <div className="location__media">
            <img
              className="location__image"
              src={chefImage}
              alt="Chef preparing pizza beside the restaurant oven"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <MapDialog isOpen={isMapOpen} onClose={closeMap} />
    </>
  );
}
