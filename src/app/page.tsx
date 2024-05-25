import About from "@/components/home/About";
import Header from "@/components/home/Header";
import LostItems from "@/components/home/LostItems";
import Navbar from "@/components/shared/Navbar";
import Testimonial from "@/components/home/Testimonial";
import Image from "next/image";
import Footer from "@/components/shared/Footer";
import { baseUrl } from "@/services/constant";

export default async function Home() {
  const data = await getRecentLostItems();
  return (
    <>
      <div>
        <Navbar></Navbar>
        <Header></Header>
        <About></About>
        <LostItems items={data}></LostItems>
        <Testimonial></Testimonial>
        <Footer></Footer>
      </div>
    </>
  );
}
export const getRecentLostItems = async () => {
  try {
    const response = await fetch(`${baseUrl}/items/lost/recent`, {
      cache: "no-store",
    });

    const responseJson = await response.json();
    return responseJson.data || [];
  } catch (error: any) {
    console.error("Error fetching recent lost item:", error.message);
    return null;
  }
};
