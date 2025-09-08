import {
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Bar,
  Cell,
} from "recharts";

const datosLengajes = [
  { nombre: "Java", XP: 100 },
  { nombre: "Python", XP: 300 },
  { nombre: "PHP", XP: 200 },
  { nombre: "JavaScript", XP: 250 },
];

const colores = [ "#ff8042", "#404D94", "#5B3B94", "#D5FF00" ];

const Grafico1 = () => {

  return (
    <div className="p-6 max-w-full mx-auto flex flex-gap-6 flex-row gap-6 max-md:flex-col bg-gradient-to-r from-[#041649] to-[#4372ca]">
      <div className="w-full bg-[#1f1f30] content-center text-white rounded-xl p-6 shadow-inner transform-3d transition duration-400 hover:scale-105 hover:bg-[#263159]">
        <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
            Mis habilidades en un lenguaje de programacion
        </h2> 
        <p className="text-lg leading-relaxed">
          Aunque mi fuerte principal en un lenguaje de programación es <strong className="text-[#112b5c]">Python</strong>, 
          tambien eh trabajado otros lenguajes como <strong className="text-[#d1362b]">Java</strong>, y <strong className="text-[#481d80]">PHP</strong>.
          y tambien tengo conocimientos en <strong className="text-[#f0db4f]">JavaScript</strong> y sus librerias como React.js.
        </p>
        <div className="flex flex-wrap items-center gap-2 mt-4">
          <h1>Java</h1>
          <div className="w-8 py-2 px-6 mr-4 bg-[#ff8042] rounded-lg"></div>
          <h1>Python</h1>
          <div className="w-8 py-2 px-6 mr-4 bg-[#404D94] rounded-lg"></div>
          <h1>PHP</h1>
          <div className="w-8 py-2 px-6 mr-4 bg-[#5B3B94] rounded-lg"></div>
          <h1>JavaScript</h1>
          <div className="w-8 py-2 px-6 mr-4 bg-[#D5FF00] rounded-lg"></div>
        </div>
      </div>
      <div className="w-[100%] h-[400px] flex flex-col items-center justify-center bg-[#0c0f1d] shadow-2x1 rounded-lg p-4 transform-3d transition duration-400 hover:scale-105">
        <div className=" w-full flex justify-center text-2xl text-white font-semibold">
          <h1 className="max-md: text-2xl">Lenguajes de programacion</h1>
        </div>
        <ResponsiveContainer>
          <BarChart
            data={datosLengajes}
            width={500}
            margin={{ top: 60, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="nombre" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="XP">
              {datosLengajes.map((entity, index) => (
                <Cell key={`cell-${index}`} fill={colores[index]}/>
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Grafico1;

