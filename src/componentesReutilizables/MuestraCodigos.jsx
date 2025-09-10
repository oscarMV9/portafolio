import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function DemoCounter() {
  const [count, setCount] = useState(0);

  const codeString = `
    import { useState } from "react";

    export default function Counter() {
      const [count, setCount] = useState(0);

      return (
        <div className="bg-[#272727] p-2 shadow flex flex-col items-center justify-center h-full">
          <h1 className="text-xl font-bold mb-4 text-[#e9d1d1]">Mi Pequeño contador React + Tailwind css</h1>
          <h2 className="text-xl font-bold mb-4 text-[#e9d1d1]">Contador: {count}</h2>
          <div className="flex gap-3">
            <button
              onClick={() => setCount(count + 1)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Incrementar
            </button>
            <button
              onClick={() => setCount(0)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Reiniciar
            </button>
          </div>
        </div>
      );
    }
      `;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gradient-to-r from-[#041649] to-[#4372ca]">
      <div className="bg-[#1e1e2f] rounded-lg p-4 text-white">
        <SyntaxHighlighter language="javascript" style={oneDark}>
          {codeString}
        </SyntaxHighlighter>
      </div>
      <div className="flex flex-col bg-black rounded-t-lg h-auto max-md: min-h-120">
        <div className="flex flex-row justify-start items-center my-2">
          <div class="p-1.5 ml-2.5 mr-1 bg-red-400 rounded-full"></div>
          <div class="p-1.5 m-1 bg-yellow-400 rounded-full"></div>
          <div class="p-1.5 m-1 bg-green-400 rounded-full"></div>
        </div>
        <div className="bg-[#272727] p-2 shadow flex flex-col items-center justify-center h-full">
          <h1 className="text-xl font-bold mx-4 my-2 text-center text-[#e9d1d1]">Mi Pequeño contador React + Tailwind css</h1>
          <h2 className="text-xl font-bold mx-4 my-2 text-[#e9d1d1]">Contador: {count}</h2>
          {count >= 500 && (
            <h1 className="text-xl font-bold mb-4 text-[#e9d1d1]">llegaste mas de 500</h1>
          )}
          <div className="flex gap-3 my-4">
            <button
              onClick={() => setCount(count + 1)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Incrementar
            </button>
            <button
              onClick={() => setCount(0)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Reiniciar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
