import { motion } from "framer-motion";

const timelineData = [
  {
    year: "JULIO 2023",
    title: "Inicio de mi etapa de aprendizaje con el SENA",
    description: "Comenze mi aprendizaje en el desarrollo web con tegnologias Java, Python y PHP",
  },
  {
    year: "NOVIEMBRE 2023",
    title: "Primer Proyecto Personal",
    description: "Desarrollé mi primer proyecto personal utilizando Django y React gracias a los conocimientos adquiridos.",
  },
  {
    year: "MARZO 2024",
    title: "Aprendizaje Autodidacta",
    description: "He estado aprendiendo de manera autodidacta sobre desarrollo web fullstack, enfocándome en React para el frontend y Django para el backend.",
  },
  {
    year: "OCTUBRE 2024",
    title: "Primer Proyecto Freelance",
    description: "desarrolle mi primera landing page para una tienda de ropa, aplicando mis conocimientos en React, Tailwind CSS y Django.",
  },
  {
    year: "ABRIL 2025",
    title: "Primer Contrato Laboral",
    description: "Termine mi etapa de aprendizaje con el SENA y consegui mi primer contrato laboral como pasante de desarrollador en Davivienda.",
  },
  {
    year: "SEPTIEMBRE 2025 - ???",
    title: "seguir aprendiendo y mejorando",
    description: "Ya en etapas finales de mi contrato, sigo aprendiendo y mejorando mis habilidades en desarrollo web y otras tecnologias.",
  },
];

export default function Timeline() {
  return (
    <div className="p-6 max-w-full mx-auto flex flex-gap-6 flex-col gap-6 max-md:flex-col bg-gradient-to-r from-[#041649] to-[#4372ca]">
      <h2 className="text-3xl font-bold mb-12 text-center">Mi recorrido por la vida del desarrollo...</h2>

      <div className="relative border-l border-gray-300 dark:border-gray-600 px-8">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            className="mb-10 ml-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 ring-8 ring-white dark:ring-gray-900 text-white text-sm font-bold">
              {index + 1}
            </span>
            <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
              <span className="block mb-2 text-sm font-medium text-blue-600">{item.year}</span>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
