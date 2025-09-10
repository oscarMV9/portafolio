import { useEffect, useState } from "react";

const colores = {
  azulOscuro: "#11243D",
  azulMedio: "#2245B5",
  azulClaro: "#72ABF2",
};

const otrosColores = {
  blanco: "#ffffff",
  gris: "#808080",
};

const listaColores = Object.values(colores);

export default function Navegacion() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="w-full m-0 h-20 backdrop-blur-md bg-[#2665D1]/30  border-b-2 border-b-amber-50 flex justify-between items-center px-6 text-amber-50 fixed z-20"
    >
      <div className="text-xl font-mono hover:text-[#1a1a1a]">Oscar(Dev);</div> 
      <div className="md:hidden">
        <button
          className="p-4 rounded-md bg-blue-900 hover:bg-blue-600 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>
      <ul
        className="hidden md:flex gap-6 p-2 rounded-lg bg-[#3a3e77] hover:border-2 border-[#ffff]"
      >
        <li>
          <a href="#quienSoy">
            <button className="bg-blue-900 py-2.5 px-6 border font-semibold border-slate-300 rounded-lg hover:bg-blue-600 transition">
              ¿Quién soy?
            </button>
          </a>
        </li>
        <li>
          <a href="#GraficoHabilidades">
            <button className="bg-blue-900 py-2.5 px-6 border font-semibold border-slate-300 rounded-lg hover:bg-blue-600 transition">
              Mis Habilidades
            </button>
          </a>
        </li>
        <li>
          <a href="#lineaTiempo">
            <button className="bg-blue-900 py-2.5 px-6 border font-semibold border-slate-300 rounded-lg hover:bg-blue-600 transition">
              Mis estudios
            </button>
          </a>
        </li>
        <li>
          <a href="#Contactame">
          <button className="bg-blue-900 py-2.5 px-6 border font-semibold border-slate-300 rounded-lg hover:bg-blue-600 transition">
            Contáctame!
          </button>
          </a>
        </li>
      </ul>
      {isOpen && (
        <ul
          className="absolute backdrop-blur-sm bg-white/30 top-20 left-0 w-full flex flex-col gap-8 p-6 shadow-lg md:hidden"
        >
          <li>
            <a href="#quienSoy" className="p-2 bg-[#23449e] rounded-lg" onClick={() => setIsOpen(false)}>
              ¿Quién soy?
            </a>
          </li>
          <li>
            <a href="#GraficoHabilidades" className="p-2 bg-[#23449e] rounded-lg" onClick={() => setIsOpen(false)}>
              Mis Habilidades
            </a>
          </li>
          <li>
            <a href="#lineaTiempo" className="p-2 bg-[#23449e] rounded-lg" onClick={() => setIsOpen(false)}>
              Mis estudios
            </a>
          </li>
          <li>
            <a href="#Contactame" className="p-2 bg-[#23449e] rounded-lg" onClick={() => setIsOpen(false)}>
              Contáctame!
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

