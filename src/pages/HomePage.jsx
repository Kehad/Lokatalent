import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Service from "../components/service/service";
import Testimonial from "../components/testimonial/testimonial";
import Works from "../components/works/works";


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
