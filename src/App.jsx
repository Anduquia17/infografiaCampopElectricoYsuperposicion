import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="relative min-h-screen flex items-start justify-center p-4 sm:p-6 lg:p-8 xl:p-10 2xl:p-12 overflow-hidden">
      {/* Fondo dinámico con auroras */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-purple-400 to-indigo-600 animate-gradient-x"></div>
      <div className="absolute inset-0 bg-white/20 backdrop-blur-md"></div>

      {/* Rayos eléctricos animados */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-24 bg-gradient-to-b from-yellow-300 to-yellow-500 opacity-40"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.7,
            ease: "easeInOut",
          }}
          style={{
            left: `${20 + i * 15}%`,
            top: `${Math.random() * 60 + 10}%`,
          }}
        />
      ))}

      {/* Partículas flotantes mejoradas */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full shadow-lg"
          style={{
            background: i % 2 === 0 ? "#ffffff" : "#facc15",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{ opacity: 0.3, scale: 0.5 }}
          animate={{
            y: [0, -60, 0],
            opacity: [0.2, 1, 0.2],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: 6 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 4,
          }}
        />
      ))}

      {/* Contenido principal */}
      <div className="relative z-10 w-full max-w-7xl xl:max-w-[90%] 2xl:max-w-[80%] grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
        {/* Columna izquierda */}
        <div className="flex flex-col h-full gap-6">
          {/* Título */}
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold text-center text-blue-900 mb-4 leading-snug drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] px-2"
          >
            ⚡ CAMPO ELÉCTRICO <br className="hidden sm:block" /> Y PRINCIPIO DE
            SUPERPOSICIÓN ⚡
          </motion.h1>

          {/* Cajones izquierda */}
          <div className="flex flex-col flex-1 gap-6">
            {/* Concepto */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="bg-gradient-to-br from-white via-blue-50 to-blue-100 shadow-lg hover:shadow-blue-500/50 rounded-2xl p-4 sm:p-6 xl:p-8 flex-1 hover:scale-[1.04] transition-transform"
            >
              <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-blue-900 mb-3">
                CONCEPTO DE CAMPO ELÉCTRICO
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-10">
                {/* Imagen animada */}
                <div className="flex justify-center items-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    className="relative w-32 h-32 sm:w-40 sm:h-40 xl:w-56 xl:h-56 flex items-center justify-center"
                  >
                    {/* Líneas concéntricas */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute rounded-full border-2 border-blue-400 opacity-60"
                        style={{
                          width: `${120 + i * 40}px`,
                          height: `${120 + i * 40}px`,
                        }}
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ repeat: Infinity, duration: 3 + i, ease: "easeInOut" }}
                      />
                    ))}

                    {/* Carga central */}
                    <motion.div
                      animate={{
                        y: [0, -8, 0],
                        boxShadow: [
                          "0 0 15px #facc15",
                          "0 0 35px #fde047",
                          "0 0 15px #facc15",
                        ],
                      }}
                      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                      className="w-12 h-12 sm:w-16 sm:h-16 xl:w-20 xl:h-20 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl xl:text-3xl font-bold shadow-md z-10"
                    >
                      +
                    </motion.div>

                    {/* Barras azules */}
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ y: [0, -6, 0] }}
                        transition={{
                          repeat: Infinity,
                          duration: 2,
                          delay: i * 0.1,
                          ease: "easeInOut",
                        }}
                        className="absolute"
                        style={{ transform: `rotate(${i * 45}deg) translateY(-70px)` }}
                      >
                        <div className="w-1 h-12 xl:h-16 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full shadow-md"></div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Texto */}
                <div className="text-gray-700 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed">
                  <p>🔹 Región donde una carga ejerce fuerza sobre otras.</p>
                  <p className="mt-2">🔹 Se representa con <b>líneas de campo</b>.</p>
                  <p className="mt-2">🔹 La intensidad disminuye con la distancia.</p>
                </div>
              </div>
              <div className="text-center mt-4">
                <motion.span
                  animate={{
                    scale: [1, 1.1, 1],
                    boxShadow: [
                      "0 0 15px #facc15",
                      "0 0 35px #facc15",
                      "0 0 15px #facc15",
                    ],
                  }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="bg-yellow-100 border border-yellow-400 px-3 py-2 rounded-lg font-mono text-lg sm:text-xl lg:text-2xl xl:text-3xl"
                >
                  E = kq / r²
                </motion.span>
              </div>
            </motion.div>

            {/* Superposición */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="bg-gradient-to-br from-white via-indigo-50 to-purple-100 shadow-lg hover:shadow-indigo-400/50 rounded-2xl p-4 sm:p-6 xl:p-8 flex-1 hover:scale-[1.04] transition-transform"
            >
              <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-blue-900 mb-3">
                PRINCIPIO DE SUPERPOSICIÓN
              </h2>
              <p className="text-gray-700 mb-4 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed text-justify">
                🔹 El campo total es la <b>suma vectorial</b> de los campos producidos por cada carga.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm sm:text-base lg:text-lg xl:text-xl">
                <motion.div
                  animate={{ y: [0, -6, 0], boxShadow: ["0 0 15px #fb923c", "0 0 30px #fb923c", "0 0 15px #fb923c"] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white shadow"
                >
                  +
                </motion.div>
                <span className="text-xl sm:text-2xl lg:text-3xl">+</span>
                <motion.div
                  animate={{ y: [0, -6, 0], boxShadow: ["0 0 15px #3b82f6", "0 0 30px #3b82f6", "0 0 15px #3b82f6"] }}
                  transition={{ repeat: Infinity, duration: 2, delay: 0.5, ease: "easeInOut" }}
                  className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center text-white shadow"
                >
                  -
                </motion.div>
                <span className="text-xl sm:text-2xl lg:text-3xl">=</span>
                <div className="text-base sm:text-lg lg:text-xl xl:text-2xl text-blue-900 font-bold">
                  Campo Resultante
                </div>
              </div>
            </motion.div>

            {/* Fuerza */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="bg-yellow-100 shadow-lg hover:shadow-yellow-400/50 rounded-2xl p-4 sm:p-6 xl:p-8 flex-1 hover:scale-[1.04] transition-transform"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1], color: ["#000", "#1e40af", "#000"] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="text-center font-mono text-lg sm:text-xl lg:text-2xl xl:text-3xl mb-3"
              >
                F = (q₁ q₂) / r²
              </motion.div>
              <p className="text-gray-800 text-justify text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed">
                🔹 La fuerza eléctrica es proporcional al producto de las cargas e inversamente proporcional a la distancia².  
                🔹 <b>Igual signo → repulsiva</b>.  
                🔹 <b>Signo contrario → atractiva</b>.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Columna derecha */}
        <div className="flex flex-col h-full gap-6">
          {[
            {
              title: "EJEMPLO 1",
              text: "📌 Una carga positiva de +2 μC ejerce un campo a 1 m.  E = (9×10⁹)(2×10⁻⁶)/(1²) = 1.8×10⁴ N/C",
            },
            {
              title: "EJEMPLO 2",
              text: "📌 Dos cargas de igual magnitud y signo opuesto se ubican simétricamente. El campo en un punto se obtiene por el principio de superposición.",
            },
            {
              title: "EJEMPLO 3",
              text: "📌 En un átomo, los electrones sienten la fuerza de atracción hacia el núcleo cargado positivamente.",
            },
            {
              title: "APLICACIONES",
              text: "🔹 Electrónica: capacitores y circuitos. 🔹 Física médica: rayos X y aceleradores. 🔹 Ingeniería: alta tensión. 🔹 Telecomunicaciones.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.2 + i * 0.2 }}
              className="bg-gradient-to-br from-white via-blue-50 to-indigo-100 shadow-lg hover:shadow-blue-400/50 rounded-2xl p-4 sm:p-6 xl:p-8 flex-1 hover:scale-[1.04] transition-transform"
            >
              <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-blue-900 mb-3">
                {item.title}
              </h2>
              <p className="text-gray-700 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}