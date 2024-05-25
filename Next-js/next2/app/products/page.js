import Product from "@/components/Product";
import Link from "next/link";
import id3photo from "./id3.jpeg";
import polophoto from "./polo.jpeg";

export const metadata = {
  title: "Products Page - NextJS and React Demo",
  description: "A simple demo of the basic features of NextJS and React",
};

export default function page() {
  return (
    <main>
      <h1>List of Products</h1>

      <Product
        name="Volkswagen ID3"
        price={45000}
        description="Electric car"
        photo={id3photo}
      />
      <Product
        name="Volkswagen Polo"
        price={25000}
        description="El Polito"
        photo={polophoto}
      />
    </main>
  );
}
