import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Menu from "./components/Menu/Menu";
import Story from "./components/Story/Story";

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
      </main>
    </>
  );
}

export default App;
