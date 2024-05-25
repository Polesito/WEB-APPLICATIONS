import Warning from "@/components/Warning";
import Link from "next/link";

export default function Home() {
  const msg = "This is the message";
  let paragraph = <p>This is a paragraph</p>;
  return (
    <main className="p-2">
      <h1>Home Page</h1>
      <Warning>{paragraph}</Warning>
      {paragraph}
      {[1, 2, <div>333</div>]}

      <footer className="h-60"></footer>
    </main>
  );
}
