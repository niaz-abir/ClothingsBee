import BaseBall from "@/components/Baseball";
import Footer from "@/components/Footer";
import Hoodie from "@/components/Hoodie";
import ProductCap from "@/components/ProductCap";
import Record from "@/components/Record";
import Review from "@/components/Review";
import Shirt from "@/components/Shirt";

import Testimonial from "@/components/Testimonial";
import { Banner } from "@/components/banner";
import ChooseUs from "@/components/chooseUs";
import Services from "@/components/services";

export default function Home() {
  return (
    <section className="pl-0 lg:pl-6">
      <Banner />
      <Record />
      <Review/>
      <ProductCap />
      <BaseBall />
      <Shirt />
      <Hoodie />
      <Services />
      <Testimonial />
      <ChooseUs />
      <Footer />
    </section>
  );
}
