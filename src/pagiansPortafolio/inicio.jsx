import Navegacion from "../componentesReutilizables/navegacion";
import Graficos from "../componentesReutilizables/seccionGrafico1";
import fotoPerfil from "../assets/imagenes/PhotoProfile.jpeg";
import { SiPython, SiJavascript, SiPhp, SiDjango, SiPostgresql, SiMongodb } from "react-icons/si";
import { DiReact, DiMysql } from "react-icons/di";
import { FaJava } from "react-icons/fa";
import { RiTailwindCssLine } from "react-icons/ri";
import Grafico1 from "../componentesReutilizables/seccionGrafico1";
import Grafico2 from "../componentesReutilizables/seccionGrafico2";

const Index = () => {

const fechaNaciemiento = new Date("2005-07-21");
const hoy = new Date();
let edad = hoy.getFullYear() - fechaNaciemiento.getFullYear();
const mes = hoy.getMonth() - fechaNaciemiento.getMonth();

if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
    edad--;
};

    return (
        <>
        <Navegacion/>
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#041649] to-[#4372ca] py-28" id="quienSoy">
            <div className="max-w-4xl mx-auto mt-7 flex flex-col md:flex-row items-center gap-8 px-4">
                <div className="">
                    <img
                        src={fotoPerfil}
                        alt="Tu foto"
                        className="w-40 h-40 md:w-48 md:h-48 rounded-full shadow-lg border-4 border-blue-500"
                    />
                    </div>
                <div className="text-center md:text-left">
                    <h1 className="text-3xl md:text-4xl font-bold text-white">
                        Hola, soy <span className="text-blue-600">Oscar Montoya</span>
                    </h1>

                <p className="mt-4 text-base md:text-lg text-white">
                    Soy tecnologo en{" "}
                    <span className="font-semibold text-blue-300">
                    Analisis y desarrollo de software
                    </span>{" "}
                    cursado en el{" "}
                    <span className="font-semibold text-green-500">SENA.</span>
                </p>

                <p className="mt-2 text-base md:text-lg text-white">
                    Actualmente tengo {edad} años y me apaciona mucho el desarrollo web.
                </p>

                <p className="mt-2 text-base md:text-lg text-blue-400">
                    Mis habilidades aprendidas a la fecha:
                </p>

                <h2 className="mt-2 text-base md:text-lg text-white font-semibold">
                    - Lenguajes de Programación
                </h2>
                    <div className="mt-4 flex flex-wrap gap-3 justify-center md:justify-start">
                        <div className="flex items-center gap-2 px-4 py-2 bg-[#D95E0D] rounded-lg text-black font-semibold shadow-lg hover:scale-105 transition">
                            <FaJava size={20} />
                            Java
                        </div>
                        <div className="group flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#EFFA14] to-[#3d4199] rounded-lg text-black font-semibold shadow-lg hover:scale-105 transition">
                            <SiPython size={20} />
                            Python
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-[#4F5B93] rounded-lg text-black font-semibold shadow-lg hover:scale-105 transition">
                            <SiPhp size={20} />
                            PHP
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#bba91f] to-[#f7f44b] rounded-lg text-black font-semibold shadow-lg hover:scale-105 transition">
                            <SiJavascript size={20} />
                            JavaScript
                        </div>
                    </div>
                    <h2 className="mt-4 text-base md:text-lg text-white font-semibold">
                    - Frameworks y Librerias: 
                    </h2>
                    <div className="mt-4 flex flex-wrap gap-3 justify-center md:justify-start">
                        <div className="flex items-center gap-2 px-4 py-2 bg-[#61DAFB] rounded-lg text-black font-semibold shadow-lg hover:scale-105 transition">
                            <DiReact size={20} />
                            React
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-[#0e583c] rounded-lg text-black font-semibold shadow-lg hover:scale-105 transition">
                            <SiDjango size={20} />
                            Django
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#38BDF8] to-[#06B6D4] rounded-lg text-black font-semibold shadow-lg hover:scale-105 transition">
                            <RiTailwindCssLine size={20} />
                            Tailwind CSS
                        </div>
                    </div>
                    <h2 className="mt-4 text-base md:text-lg text-white font-semibold">
                        - Bases de Datos:
                    </h2>
                    <div className="mt-4 flex flex-wrap gap-3 justify-center md:justify-start">
                        <div className="flex items-center gap-2 px-4 py-2 bg-[#0e94b9] rounded-lg text-black font-semibold shadow-lg hover:scale-105 transition">
                            <DiMysql size={20} />
                            MySQL
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-[#192bca] rounded-lg text-black font-semibold shadow-lg hover:scale-105 transition">
                            <SiPostgresql size={20} />
                            PostgreSQL
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r bg-[#00d81d] rounded-lg text-black font-semibold shadow-lg hover:scale-105 transition">
                            <SiMongodb size={20} />
                            MongoDB
                        </div>
                    </div>                
                </div>
            </div>
        </section>
        <section id="GraficoHabilidades" >
            <Grafico1/>
        </section>
        <section>
            <Grafico2/>
        </section>
        </>
    );
}

export default Index;