
export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center p-8 bg-blue-50">
      
      {/* Título */}
      <h1 className="text-3xl font-extrabold text-center text-blue-900 mb-6">
        CAMPO ELÉCTRICO <br /> Y PRINCIPIO DE SUPERPOSICIÓN
      </h1>

      {/* Sección Concepto */}
      <div className="bg-white shadow-md rounded-2xl p-6 w-full max-w-3xl mb-6">
        <h2 className="text-xl font-bold text-blue-900 mb-2">
          CONCEPTO DE CAMPO ELÉCTRICO
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex justify-center items-center">
            <div className="relative w-24 h-24 flex items-center justify-center">
              <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center text-white text-2xl font-bold">+</div>
              {[...Array(8)].map((_, i) => (
                <div key={i} className="absolute w-full h-full flex justify-center">
                  <div
                    className="w-1 h-8 bg-blue-500"
                    style={{
                      transform: `rotate(${i * 45}deg) translateY(-50%)`,
                      transformOrigin: "bottom center",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="text-gray-700">
            <p>🔹 El campo eléctrico es el vector que describe la fuerza en el espacio alrededor de una carga.</p>
            <p>🔹 Se representa con <b>líneas de campo</b>.</p>
          </div>
        </div>
        <div className="text-center mt-4">
          <span className="bg-yellow-100 border border-yellow-400 px-4 py-2 rounded-lg font-mono text-xl">
            E = kq / r²
          </span>
        </div>
      </div>

      {/* Sección Principio */}
      <div className="bg-white shadow-md rounded-2xl p-6 w-full max-w-3xl mb-6">
        <h2 className="text-xl font-bold text-blue-900 mb-2">PRINCIPIO DE SUPERPOSICIÓN</h2>
        <p className="text-gray-700 mb-4">
          El campo total en un punto es la <b>suma vectorial</b> de los campos producidos por cada carga individual.
        </p>
        <div className="flex items-center justify-center gap-4">
          <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center text-white">+</div>
          <span className="text-2xl">+</span>
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">-</div>
          <span className="text-2xl">=</span>
          <div className="text-lg text-blue-900 font-bold">Campo Resultante</div>
        </div>
      </div>

      {/* Sección Fuerza */}
      <div className="bg-yellow-100 shadow-md rounded-2xl p-6 w-full max-w-3xl">
        <div className="text-center font-mono text-xl mb-3">
          F = (q₁ q₂) / r²
        </div>
        <p className="text-gray-800 text-justify">
          La fuerza eléctrica entre dos cargas <b>q₁</b> y <b>q₂</b> es directamente proporcional al producto de las cargas 
          e inversamente proporcional al cuadrado de la distancia que las separa.
        </p>
      </div>
    </div>
  );
}
