import { useState } from 'react';
import { useLoaderData } from '@remix-run/react';
import type { LoaderFunction } from '@remix-run/node';

export const loader: LoaderFunction = async () => {
  return {
    name: "MUHAMAD APRIANSYAH RAMADHAN",
    menuItems: [
      { id: '01', name: 'Ihwal' },
      { id: '02', name: 'Blog' },
      { id: '03', name: 'Portofolio' },
      { id: '04', name: 'Kontak' },
    ],
    profileImageUrl: "/kocheng.jpg"
  };
};

export default function Index() {
  const { name, menuItems, profileImageUrl } = useLoaderData<typeof loader>();
  const [activeItem, setActiveItem] = useState('');

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6 bg-gray-900 bg-opacity-80">
        <h1 className="text-lg md:text-xl font-serif">
          {name}
        </h1>
      </header>

      <div className="pt-20 flex items-center justify-center min-h-screen p-4">
        <div className="max-w-5xl w-full flex flex-col md:flex-row items-center md:items-start gap-12">
          <div className="w-72 h-72 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={profileImageUrl}
              alt="Profile picture"
              className="w-full h-full object-cover"
            />
          </div>
          <nav className="flex flex-col gap-6 text-4xl md:text-5xl font-light">
            {menuItems.map((item : any) => (
              <div 
                key={item.id}
                className="flex items-center gap-4 group"
              >
                <span className="text-sm text-gray-500 group-hover:text-purple-400 transition-colors">{item.id}</span>
                <a 
                  href="#" 
                  className="relative overflow-hidden text-white hover:text-purple-400 transition-colors"
                  onClick={() => setActiveItem(item.name)}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </a>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}