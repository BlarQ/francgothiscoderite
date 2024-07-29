import Body from "./components/SlideOne";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import SlideOne from "./components/SlideOne";
import SlideTwo from "./components/SlideTwo";
import Wishes from "./components/Wishes";
import ShortStory from "./components/ShortStory";
import GratitudeSlide from "./components/GratitudeSlide";

export const metadata = {
  title: "Nassy & Franc",
  description: "A Story of Love",
};

export default function Home() {
  return (
    <main>
      {/* <Header /> */}
      <HomePage />
      <SlideOne />
      <SlideTwo />
      <ShortStory />
      <Wishes />
      <GratitudeSlide />
      
    </main>
  );
}
