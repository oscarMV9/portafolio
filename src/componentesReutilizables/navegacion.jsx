import { useEffect, useState } from "react";

const colores = {
    azulOscuro: "#11243D",
    azulMedio: "#2245B5",
    azulClaro: "#72ABF2",
    amarilloClaro: "#fef3c7",
    amarilloMedio: "#fbbf24",
    amarilloOscuro: "#b45309",
    grisClaro: "#d1d5db",
    grisMedio: "#6b7280",
    grisOscuro: "#374151",
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
        <nav className="w-full h-20 border-b-2 border-b-amber-50 flex justify-between items-center p-8 text-amber-50 fixed" style={{backgroundColor: colorFondo}}>
            <ul className="w-full h-0.5 px-4 flex justify-around items-center" style={{backgroundColor: colorBarra}}>
                <div className="flex justify-around w-3/5">
                    <div className="px-4" style={{backgroundColor: colorFondo}}>
                        <button className="bg-blue-900 p-1.5 border border-slate-300 rounded hover:bg-amber-800">¿Quien soy?</button>
                    </div>
                    <div className="px-4" style={{backgroundColor: colorFondo}}>                 
                        <button className="bg-blue-900 p-1.5 border border-slate-300 rounded hover:bg-amber-800">Mis proyectos</button>
                    </div>
                    <div className="px-4" style={{backgroundColor: colorFondo}}>
                        <button className="bg-blue-900 p-1.5 border border-slate-300 rounded hover:bg-amber-800">Mis estudios</button>
                    </div>
                    <div className="px-4" style={{backgroundColor: colorFondo}}>
                        <button className="bg-blue-900 p-1.5 border border-slate-300 rounded hover:bg-amber-800">Contactame!</button>
                    </div>
                </div>
            </ul>
        </nav>
    )
}

export default Navegacion;