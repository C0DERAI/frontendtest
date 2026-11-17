import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Menu from "./components/Menu/Menu";
import Story from "./components/Story/Story";
import Promotion from "./components/Promotion/Promotion";

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
      </main>
    </>
  );
}

export default App;
