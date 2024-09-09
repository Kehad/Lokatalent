import Footer from "../components/HomePageComponenent/footer/footer";
import Header from "../components/HomePageComponenent/header/header";
import Service from "../components/HomePageComponenent/service/service";
import Testimonial from "../components/HomePageComponenent/testimonial/testimonial";
import Works from "../components/HomePageComponenent/works/works";


function HomePage() {
  return (
    <>
        <Header />
        <Works />
        <Service />
        <Testimonial />
        <Footer />
    </>
  );
}

export default HomePage;
