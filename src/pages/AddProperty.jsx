import Header from "../components/Header";
import { Container } from "../components/container/Container";
import { useState, useRef } from "react";

const NewProperty = () => {
  const [formData, setFormData] = useState({
    direccion: '',
    montoPorMes: '',
    descripcion: '',
    tipoPropiedad: '',
    tipoContrato: '',
  });

  const descripcionRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === "descripcion") {
      autoResizeTextarea();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para manejar el envío del formulario
    console.log(formData);
  };

  const autoResizeTextarea = () => {
    const textarea = descripcionRef.current;
    if (textarea) {
      textarea.style.height = 'auto'; // Resetea el alto para calcular el nuevo
      textarea.style.height = `${textarea.scrollHeight}px`; // Ajusta el alto al contenido
    }
  };

  return (
    <>
      <Header />
      <Container>
        <div className="flex justify-center mt-5">
          <div className="bg-white p-8 shadow-lg rounded-md w-full">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Registrar Nueva Propiedad
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <select
                name="tipoPropiedad"
                value={formData.tipoPropiedad}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded-md flex-1 h-12"
                >
                <option value="">Seleccionar Tipo de Propiedad</option>
                <option value="departamento">Departamento</option>
                <option value="casa">Casa</option>
                <option value="local_comercial">Local Comercial</option>
                </select>

                <select
                name="tipoContrato"
                value={formData.tipoContrato}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded-md flex-1 h-12"
                >
                <option value="">Seleccionar Tipo de Contrato</option>
                <option value="alquiler">Alquiler</option>
                <option value="venta">Venta</option>
                </select>   
                
                <input
                  type="text"
                  name="direccion"
                  placeholder="Dirección"
                  value={formData.direccion}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 rounded-md flex-1 h-12"
                />

                <input
                  type="number"
                  name="montoPorMes"
                  placeholder="Monto por Mes"
                  value={formData.montoPorMes}
                  onChange={handleChange}
                  min="0"
                  className="border border-gray-300 p-2 rounded-md flex-1 h-12"
                />

                <textarea
                  ref={descripcionRef}
                  name="descripcion"
                  placeholder="Descripción"
                  value={formData.descripcion}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 rounded-md flex-1 h-12 resize-none w-full md:w-96"
                  style={{ overflow: 'hidden' }}
                />
              </div>

              <div className="flex justify-center mt-4">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 mt-10 rounded-md hover:bg-blue-600 transition"
                >
                  Registrar Propiedad
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default NewProperty;

