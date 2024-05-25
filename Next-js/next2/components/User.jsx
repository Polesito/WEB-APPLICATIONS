/* React component: a function that recives a single oject parametre
called "props" that returns a piece of JSX*/

import Image from "next/image";

export default function User({ user }) {
  return (
    <div className="border-2 p-1 px-2 rounded-full bg-white">
      <Image
        src={user.picture.thumbnail}
        width={50}
        height={60}
        alt="Users Avatars"
      />
      <div>
        <h3 className="font-bold">
          {user.name.first} {user.name.last}
        </h3>
        <p className="text-gray-500">{user.dob.age}</p>
        <p className="font-mono text-xs text-gray-500"></p>
      </div>
    </div>
  );
}
