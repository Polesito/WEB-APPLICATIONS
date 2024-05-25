import User from "@/components/User";

export const metadata = {
  title: "Users Page - NextJS and React Demo",
  description: "A simple demo of the basic features of NextJS and React",
};

export default async function page() {
  const response = await fetch(`https://randomuser.me/api?`);
  const { results } = await response.json();
  const users = results;
  return (
    <main className="p-2">
      <h1>Users Page</h1>
      {users.length}
      {users.map((user) => (
        <User key={user.mail} user={user} />
      ))}
    </main>
  );
}
