import { useState } from "react";

export default function ModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Mas sobre ti?
      </button>
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-[#f7f4f4a8] bg-opacity-50 z-50"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-[#fdcff7] p-10 border-4 border-[#ff80df] w-130 relative mx-20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-xl"
            >
              &times;
            </button>
            <p className="text-black font-semibold">
              Soy Oscar Eduardo Montoya Vergara y soy de bogotá Colombia, Soy alguien muy apacionado por 
              el desarrollo web y la tegnologia en general;  Me gusta ayudar a las personas con mis habilidades
              tecnicas y blandas que he aprendido a lo largo de mi vida.
            </p>
            <p className="text-black font-semibold">
              Me gusta bastante jugar videojuegos con amigos, salir a caminar ademas me gusta cocinar.
            </p>
            <p className="mb-4 text-black font-semibold">
              Mi meta a corto plazo es conseguir un trabajo como desarrollador web y seguir aprendiendo nuevas tecnologias.
            </p>
            <div className="flex justify-center">
                <button
                onClick={() => setIsOpen(false)}
                className="bg-none text-2xl font-extrabold text-[#ff9dfa] hover:text-[#fdaff9] transition"
                >
                OK
                </button>
            </div>
            <div className="absolute">
                <p className=" mt-5 mr-7 text-[0.5rem]">Inspirado de DDLC</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
