import { BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Bar, Cell } from "recharts";

const datosFrameworks = [
  { nombre: "Django", XP: 245 },
  { nombre: "React", XP: 250 },
  { nombre: "Tailwind CSS", XP: 278 },
];

const colores = [ "#0e583c", "#61DAFB", "#38BDF8" ];

const Grafico2 = () => {
    return (
        <div className="p-6 max-w-full mx-auto flex flex-gap-6 flex-row gap-6 max-md:flex-col bg-gradient-to-r from-[#041649] to-[#4372ca]">
            <div className="w-[100%] h-[400px] flex flex-col items-center justify-center bg-[#0c0f1d] shadow-2x1 rounded-lg p-4 transform-3d transition duration-400 hover:scale-105">
                <div className=" w-full flex justify-center text-2xl text-white font-semibold">
                    <h1 className="max-md: text-2xl">Frameworks Trabajados</h1>
                </div>
                <ResponsiveContainer>
                    <BarChart
                        data={datosFrameworks}
                        width={500}
                        margin={{ top: 60, bottom: 10 }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="nombre" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="XP">
                        {datosFrameworks.map((entity, index) => (
                        <Cell key={`cell-${index}`} fill={colores[index]}/>
                        ))}
                    </Bar>
                    </BarChart>
                    </ResponsiveContainer>
            </div>
            <div className="w-full bg-[#1f1f30] content-center text-white rounded-xl p-6 shadow-inner transform-3d transition duration-400 hover:scale-105 hover:bg-[#263159]">
        <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
            Mis habilidades con Frameworks y Librerias
        </h2> 
        <p className="text-lg leading-relaxed">
          Eh trabajado algunos frameworks y librerias como <strong className="text-[#0e583c]">Django</strong> para desarrollo backend con Python, 
          <strong className="text-[#61DAFB]">React.js</strong> para desarrollo frontend, y <strong className="text-[#38BDF8]">Tailwind CSS</strong> para estilos rapidos y 
          responsivos asi como este portafolio :D
        </p>
        <p className="text-lg leading-relaxed">
            Aunque tambien Trabaje con Frameworks como laravel con PHP y Spring Boot con Java
        </p>
        <div className="flex flex-wrap items-center gap-2 mt-4">
          <h1>Django</h1>
          <div className="w-8 py-2 px-6 mr-4 bg-[#0e583c] rounded-lg"></div>
          <h1>React js</h1>
          <div className="w-8 py-2 px-6 mr-4 bg-[#61DAFB] rounded-lg"></div>
          <h1>Tailwind css</h1>
          <div className="w-8 py-2 px-6 mr-4 bg-[#38BDF8] rounded-lg"></div>
        </div>
      </div>
        </div>
    );
};

export default Grafico2;

