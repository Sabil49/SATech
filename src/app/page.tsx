import Header from "./Header/page";
import Banner from "./Banner/page";
import Services from "./Services/page";
import AnimatedTestimonialsDemo from "./Reviews/testimonials";
import "./globals.css";

export default function Page() {
  return (
    <>
      <Header />
      <Banner />
      <Services />
      <AnimatedTestimonialsDemo />
    </>
  );
}