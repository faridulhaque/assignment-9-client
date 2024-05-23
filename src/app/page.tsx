import About from "@/components/home/About";
import Header from "@/components/home/Header";
import LostItems from "@/components/home/LostItems";
import Navbar from "@/components/home/Navbar";
import Testimonial from "@/components/home/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <Header></Header>
        <About></About>
        <LostItems></LostItems>
        <Testimonial></Testimonial>
      </div>
    </>
  );
}
