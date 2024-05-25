import Image from "next/image";

function Homestr(msg) {
  return `<div><h1>${msg}</h1></div>`;
}

function HomeDom(msg) {
  const div = document.createElement("div");
  const h1 = document.createElement("h1");
  h1.textContent = msg;
  div.append(h1);
  return div;
}

// JSX
export default function Home() {
  const msg = "Hello";
  const title = <h1>{msg}</h1>;
  for (let i = 0; i < 10; i++) {
    paragraph.push(<p>{`xyz${i}`.repeat(10)}</p>);
  }

  const URL = "https://www.upc.edu/ca";

  const words = ["to", "be", "or", "not", "to"];

  return (
    <div>
      {title}
      <a ref={URL}>Some Link</a>
      {/* paragraph */}
      <p>True: {True}</p>
      <p>Null: {Null}</p>
      <p>Array: {[1, 2, 3]}</p>

      {words.map((w) => (
        <p>{w}</p>
      ))}
    </div>
  );
}
