import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import BarReveal from "@/components/BarReveal";
import StoryStrip from "@/components/StoryStrip";
import ClassicCocktails from "@/components/ClassicCocktails";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <BarReveal />
        <StoryStrip />
        <ClassicCocktails />
        <Menu />
      </main>
      <Footer />
    </>
  );
}
