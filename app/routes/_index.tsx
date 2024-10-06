import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="text-center">
      <h1 className="text-6xl font-bold text-white mb-4 animate-pulse">
        Hello World!!
      </h1>
      <p className="text-xl text-white">
        Welcome to your beautiful Remix app with Tailwind CSSA
      </p>
    </div>
  );
}