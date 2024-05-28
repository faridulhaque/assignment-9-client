import About from "@/components/home/About";
import Header from "@/components/home/Header";
import LostItems from "@/components/home/LostItems";
import Navbar from "@/components/shared/Navbar";
import Testimonial from "@/components/home/Testimonial";
import Footer from "@/components/shared/Footer";

export default async function Home() {
  // const data = await getRecentLostItems();
  return (
    <>
      <div>
        <Navbar></Navbar>
        <Header></Header>
        <About></About>
        <LostItems ></LostItems>
        <Testimonial></Testimonial>
        <Footer></Footer>
      </div>
    </>
  );
}

