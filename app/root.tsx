import {
  Links,
  Meta,
  Outlet,
  Scripts,
} from "@remix-run/react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  {
    rel : "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&display=swap" // <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&display=swap" rel="stylesheet">
  }
];

export const meta: MetaFunction = () => {
  return [
    { charset: "utf-8" },
    { title: "Muhamad Apriansyah Ramadhan"},
    { viewport: "width=device-width,initial-scale=1"}
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen">
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}