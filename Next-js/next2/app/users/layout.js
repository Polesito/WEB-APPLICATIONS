export default function layout({ children }) {
  return (
    <div className="flex flex-row h-screen">
      <div className=" w-24 bg-green-300">Side Bar</div>
      {children}
    </div>
  );
}
