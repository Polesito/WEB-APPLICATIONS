import Image from "next/image";

export default function Product({ name, price, photo, description }) {
  return (
    <div className="border rounded shadow-md w-48 h-72 relative inline-flex flex-col mr-5">
      <Image
        src={photo}
        alt="Product Image"
        fit={true}
        className="object-cover aspect-square"
      />
      <div className="p-2 relative flex-1">
        <h3 className="font-bold text-lg">{name}</h3>
        <p>{description}</p>
        <div className="absolute bottom-0 right-2 text-gray-900">{price}€</div>
      </div>
    </div>
  );
}
