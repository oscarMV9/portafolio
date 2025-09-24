import emailjs from "emailjs-com";
import React, { useRef } from "react";

const Github = (props) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path fill="#000000" fillRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974c0 4.406 2.857 8.145 6.821 9.465c.499.09.679-.217.679-.481c0-.237-.008-.865-.011-1.696c-2.775.602-3.361-1.338-3.361-1.338c-.452-1.152-1.107-1.459-1.107-1.459c-.905-.619.069-.605.069-.605c1.002.07 1.527 1.028 1.527 1.028c.89 1.524 2.336 1.084 2.902.829c.091-.645.351-1.085.635-1.334c-2.214-.251-4.542-1.107-4.542-4.93c0-1.087.389-1.979 1.024-2.675c-.101-.253-.446-1.268.099-2.64c0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336a9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021c.545 1.372.203 2.387.099 2.64c.64.696 1.024 1.587 1.024 2.675c0 3.833-2.33 4.675-4.552 4.922c.355.308.675.916.675 1.846c0 1.334-.012 2.41-.012 2.737c0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974C22 6.465 17.535 2 12.026 2z" clipRule="evenodd"></path>
        </svg>
)

const Gmail = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path fill="#000000" d="m18.73 5.41l-1.28 1L12 10.46L6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64z"></path>
</svg>
    )

const Linkedin = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 432 432" {...props}>
        <path fill="#000000" d="M319 221.5q-8-10.5-30-10.5q-27 0-38 16t-11 45v146q0 5-3 8t-8 3h-76q-4 0-7.5-3t-3.5-8V148q0-4 3.5-7.5t7.5-3.5h74q4 0 6.5 2t3.5 6v5q1 2 1 7q28-27 76-27q53 0 83 27t30 79v182q0 5-3.5 8t-7.5 3h-78q-4 0-7.5-3t-3.5-8V254q0-22-8-32.5zM88 91.5Q73 107 51.5 107T15 91.5t-15-37T15 18T51.5 3T88 18t15 36.5t-15 37zm13 56.5v270q0 5-3.5 8t-7.5 3H14q-5 0-8-3t-3-8V148q0-4 3-7.5t8-3.5h76q4 0 7.5 3.5t3.5 7.5z"></path>
    </svg>
)

const Whatsapp = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 432 432" {...props}>
        <path fill="#000000" d="M364.5 65Q427 127 427 214.5T364.5 364T214 426q-54 0-101-26L0 429l30-109Q2 271 2 214q0-87 62-149T214 3t150.5 62zM214 390q73 0 125-51.5T391 214T339 89.5T214 38T89.5 89.5T38 214q0 51 27 94l4 6l-18 65l67-17l6 3q42 25 90 25zm97-132q9 5 10 7q4 6-3 25q-3 8-15 15.5t-21 9.5q-18 2-33-2q-17-6-30-11q-8-4-15.5-8.5t-14.5-9t-13-9.5t-11.5-10t-10.5-10.5t-8.5-9.5t-7-8.5t-5.5-7t-3.5-5L128 222q-22-29-22-55q0-24 19-44q6-7 14-7q6 0 10 1q8 0 12 9q2 3 6 13l7 17.5l3 8.5q3 5 1 9q-3 7-5 9l-3 3l-3 3.5l-2 2.5q-6 6-3 11q13 22 30 37q13 11 43 26q7 3 11-1q12-15 17-21q4-6 12-3q6 3 36 17z"></path>
    </svg>
)

const Cv = (props) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20" {...props}>
    <g fill="#000000">
        <path d="M7.8 6.35c.56 0 1.01-.45 1.01-1.01S8.36 4.33 7.8 4.33s-1.01.45-1.01 1.01s.45 1.01 1.01 1.01Z"></path>
        <path fillRule="evenodd" d="M9.83 8.55c0-1.08-.91-1.86-2.03-1.86c-1.12 0-2.03.78-2.03 1.86v.51c0 .09.04.18.1.24c.06.06.15.1.24.1h3.38c.09 0 .18-.04.24-.1c.06-.06.1-.15.1-.24v-.51ZM5.75 11.5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75Zm0 3a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75Z" clipRule="evenodd"></path>
        <path fillRule="evenodd" d="M2.5 2.5c0-1.102.898-2 2-2h6.69c.562 0 1.092.238 1.465.631l.006.007l4.312 4.702c.359.383.527.884.527 1.36v10.3c0 1.102-.898 2-2 2h-11c-1.102 0-2-.898-2-2v-15Zm8.689 0H4.5v15h11V7.192l-4.296-4.685l-.003-.001a.041.041 0 0 0-.012-.006Z" clipRule="evenodd"></path>
        <path fillRule="evenodd" d="M11.19.5a1 1 0 0 1 1 1v4.7h4.31a1 1 0 1 1 0 2h-5.31a1 1 0 0 1-1-1V1.5a1 1 0 0 1 1-1Z" clipRule="evenodd"></path>
    </g>
</svg>
)

const FormularioContacto = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(
            (result) => {
                alert("mensaje enviado con exito, espera que oscar te contacte :) Gracias por tu interes");
            },
            (error) => {
                alert("ups, hubo un error");
            }
        );
    };

    return (
        <div class="bg-gradient-to-r from-[#041649] to-[#4372ca] w-auto p-2 flex items-center justify-center max-lg:flex-col">
            <div className="backdrop-blur-md bg-white/30 border border-gray-200 p-8 w-full max-w-lg m-10 rounded-2xl shadow-xl text-center">
                <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
                    ¿Podemos hablar? <span className="text-[#0b256e]">¡No temas, es Gratis!</span>
                </h1>
                <p className="text-[#0a0909] font-medium">
                    Nunca juzgues a alguien porque no tiene experiencia, 
                    a lo mejor puede superar tus expectativas 😃
                </p>
                <p className="text-[#0a0909] mb-8 font-medium">
                    Puedes encontrarme o contactarme en los siguientes enlaces o ver mi CV y luego hacerlo.. o bien llena el formulario y yo directamente te hablaré..
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    <button className="bg-[#fff] text-black px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-[#949494] transition">
                        <a href="https://github.com/oscarMV9" class="i-github" target="_blank">
                            <Github/>
                        </a>
                    </button>
                    <button className="bg-[#f32424] text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-[#f73434] transition">
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=oscarmontoya119@gmail.com" target="_blank">
                            <Gmail/>
                        </a>
                    </button>
                    <button className="bg-[#0d63b3] text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-[#0a315e] transition">
                        <a href="https://www.linkedin.com/in/oscarmontoyadev" target="_blank">
                            <Linkedin/>
                        </a>
                    </button>
                    <button className="bg-white text-black px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-[#cacaca] transition">
                        <a href="https://profile.magneto365.com/pl/oscarmontoya119-8568155?utm_source=app-magneto-sharing&utm_medium=display&utm_campaign=clipboard" target="_blank">
                            <Cv />
                        </a>
                    </button>
                    <button className="bg-[#20e040] text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-[#1e7429] transition">
                        <a href="https://wa.link/gkd4jp">
                        <Whatsapp/>
                        </a>
                    </button>
                </div>

            </div>
            <div class="bg-[#211B18] w-full max-w-lg m-10 rounded-lg shadow-lg">
                <div class="w-auto py-1 px-2 bg-[#080808] border-b rounded-t-lg flex">
                    <div class="p-1.5 m-1 bg-red-400 rounded-full"></div>
                    <div class="p-1.5 m-1 bg-yellow-400 rounded-full"></div>
                    <div class="p-1.5 m-1 bg-green-400 rounded-full"></div>
                </div>
                <div class="h-auto py-10">
                    <form class="m-6" ref={form} onSubmit={sendEmail}>    
                        <div class="relative z-0 w-full mb-5 group">
                            <input type="email" name="user_email" class="block py-2.5 px-0 w-full text-sm text-[#dddd] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tu correo electronico</label>
                        </div>
                        <div class="grid md:grid-cols-2 md:gap-6">
                            <div class="relative z-0 w-full mb-5 group">
                                <input type="text" name="user_firstname" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-[#dddd] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Primer Nombre</label>
                            </div>
                            <div class="relative z-0 w-full mb-5 group">
                                <input type="text" name="user_lastname" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-[#dddd] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Primer apellido</label>
                            </div>
                        </div>
                        
                        <div class="grid md:grid-cols-2 md:gap-6">
                            <div class="relative z-0 w-full mb-5 group">
                                <input type="tel" name="user_phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-[#dddd] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">telefono (000-000-0000)</label>
                            </div>
                            <div class="relative z-0 w-full mb-5 group">
                                <input type="text" name="user_company" id="floating_company" class="block py-2.5 px-0 w-full text-sm text-[#dddd] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Empresa o persona natural</label>
                            </div>
                        </div>
                        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enviar!</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormularioContacto;