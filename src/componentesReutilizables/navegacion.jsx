import { useEffect, useState } from "react";

const colores = {
    azulOscuro: "#11243D",
    azulMedio: "#2245B5",
    azulClaro: "#72ABF2",
}

const otrosColores = {
    blanco: "#ffffff",
    gris: "#808080",
};

const listaColores = Object.values(colores);

const Navegacion = () => {
    const [colorFondo, setColorFondo] = useState(colores.azulOscuro);

    useEffect(() => {
        const colorAleatorio = listaColores[Math.floor(Math.random() * listaColores.length)]
        setColorFondo(colorAleatorio);
    }, []);

    const colorBarra = colorFondo === colores.azulOscuro ? otrosColores.blanco : otrosColores.gris;

    return(
        <nav className="w-full m-0 h-24 border-b-2 border-b-amber-50 flex justify-between items-center p-8 text-amber-50 fixed z-20" style={{backgroundColor: colorFondo}}>
            <ul className="w-full h-0.5 px-4 flex justify-around items-center" style={{backgroundColor: colorBarra}}>
                <div className="flex justify-around w-3/5">
                    <div className="px-4" style={{backgroundColor: colorFondo}}>
                        <a href="#quienSoy">
                        <button className="bg-blue-900 py-2.5 px-6 border font-serif border-slate-300 rounded-lg hover:bg-blue-600 transition">¿Quien soy?</button>
                        </a>
                    </div>
                    <div className="px-4" style={{backgroundColor: colorFondo}}>
                        <a href="#GraficoHabilidades">                 
                        <button className="bg-blue-900 py-2.5 px-6 border border-slate-300 rounded-lg hover:bg-blue-600 transition">Mis Habilidades</button>
                        </a>
                    </div>
                    <div className="px-4" style={{backgroundColor: colorFondo}}>
                        <a href="#lineaTiempo">
                        <button className="bg-blue-900 py-2.5 px-6 border border-slate-300 rounded-lg hover:bg-blue-600 transition">Mis estudios</button>
                        </a>
                    </div>
                    <div className="px-4" style={{backgroundColor: colorFondo}}>
                        <button className="bg-blue-900 py-2.5 px-6 border border-slate-300 rounded-lg hover:bg-blue-600 transition">Contactame!</button>
                    </div>
                </div>
            </ul>
        </nav>
    )
}

export default Navegacion;