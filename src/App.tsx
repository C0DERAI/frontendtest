import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Menu from "./components/Menu/Menu";
import Story from "./components/Story/Story";
import Promotion from "./components/Promotion/Promotion";
import Location from "./components/Location/Location";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div id="top" />
      <Header />

      <main>
        <Hero />
        <Menu />
        <Story
          socialLinks={[
            {
              label: "Twitter",
              url: "https://www.instagram.com",
            },
            {
              label: "Instagram",
              url: "https://www.instagram.com",
            },
            {
              label: "Facebook",
              url: "https://www.facebook.com",
            },
          ]}
        />
        <Promotion
          label="Exclusive offer"
          title="Sign up to our news letter for exclusive offers for 2020"
          ctaText="Read more"
          ctaHref="#"
        />
        <Location />
      </main>
      <Footer
        phoneNumber="01234 567890"
        socialLinks={[
          {
            label: "Facebook",
            href: "https://www.facebook.com/YOUR_PROFILE",
          },
          {
            label: "Instagram",
            href: "https://www.instagram.com/YOUR_PROFILE",
          },
          {
            label: "X",
            href: "https://x.com/YOUR_PROFILE",
          },
          {
            label: "LinkedIn",
            href: "https://www.linkedin.com/company/YOUR_COMPANY",
          },
        ]}
        attribution="Made by Williams Commerce"
      />
    </>
  );
}

export default App;
