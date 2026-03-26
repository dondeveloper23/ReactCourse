import Image from "next/image";
import styles from "./page.module.css";
import FeaturedProducts from "@/components/FeaturedProducts";
import Search from "@/components/SearchBar";
import SearchBar from "@/components/SearchBar";

export default async function Home({searchParams }) {
  const params = await searchParams;
  const query = params.q


  return (
    <div>

      

    </div>
  );
}
