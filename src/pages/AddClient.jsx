import Header from "../components/Header";
import { Container } from "../components/container/Container";
import { useEffect, useState } from "react";
import axios from "axios";

const NewClient = () => {
  const [formData, setFormData] = useState({
    dni: '',
    telefono: '',
    rol: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    
  };

  useEffect(() => {
    console.log(formData);
    
  }, [formData])

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try{
      const data = {
        dni: formData.dni,
        phoneNumber: formData.telefono,
        user: formData.rol,
      }
      const response = await axios.post('http://localhost:4000/api/clients/', data)
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

  return (
    <>
      <Header />
      <Container>
        <div className="flex justify-center mt-5">
          <div className="bg-white p-8 shadow-lg rounded-md w-full">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Registrar Nuevo Cliente
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <input
                  type="text"
                  name="dni"
                  placeholder="DNI"
                  value={formData.dni}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 rounded-md flex-1"
                />

                <input
                  type="tel"
                  name="telefono"
                  placeholder="Teléfono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 rounded-md flex-1"
                />

                <select
                  name="rol"
                  value={formData.rol}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 rounded-md flex-1"
                >
                  <option value="">Seleccionar Rol</option>
                  <option value="administrador">Administrador</option>
                  <option value="usuario">Usuario</option>
                  <option value="invitado">Invitado</option>
                </select>
              </div>

              <div className="flex justify-center mt-4">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 mt-10 rounded-md hover:bg-blue-600 transition"
                >
                  Registrar Cliente
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default NewClient;
