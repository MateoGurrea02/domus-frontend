import axios from "axios";
import { useState, useRef, useEffect } from "react";
import { getLocalStorage } from "../utils/myLocalStorage";
import Header from "../../components/Header";
import { Container } from "../../components/container/Container";
import { Link } from "react-router-dom";

const NewProperty = () => {
  const [formData, setFormData] = useState({
    direccion: '',
    montoPorMes: '',
    descripcion: '',
    tipoPropiedad: '',
    tipoContrato: '',
    dimension: '',
  });

  const descripcionRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === "descripcion") {
      autoResizeTextarea();
    }
  };

  useEffect(()=> {console.log(formData);
  }, [formData])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const data = {
        address: formData.direccion,
        propertyType: parseInt(formData.tipoPropiedad), 
        price: formData.montoPorMes,
        status: parseInt(formData.tipoContrato),  
        description: formData.descripcion,
        size: formData.dimension,
      }
      console.log(getLocalStorage('user').token);
      
      const response = await axios.post('http://localhost:4000/api/properties/', data, {
        headers: {
          'Authorization': getLocalStorage('user').token,
        }
      })
      
      if (response?.status === 201){
        console.log('creado correctamente');
      }
      else{
        console.log('error');
      }
    } catch(error){
      console.log(error);
    }
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
     
        <Link to={'/admin/properties/'}>
          <button type="button" className="text-black bg-gray-200 hover:bg-gray-400 focus:ring-4 font-medium rounded-lg text-sm px-4 py-2 text-center">Volver</button>
        </Link>
      
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
                <option value={2}>Departamento</option>
                <option value={1}>Casa</option>
                <option value={3}>Local Comercial</option>
                </select>

                <select
                name="tipoContrato"
                value={formData.tipoContrato}
                onChange={handleChange}
                id="tipoContrato"
                className="border border-gray-300 p-2 rounded-md flex-1 h-12"
                >
                <option value="">Seleccionar Tipo de Contrato</option>
                <option value={3}>Alquiler</option>
                <option value={2}>Venta</option>
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
                  type="text"
                  name="dimension"
                  placeholder="Dimension en m2"
                  value={formData.dimension}
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

