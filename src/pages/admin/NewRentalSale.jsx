import Header from "../../components/Header";
import { Container } from "../../components/container/Container";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { setLocalStorage, getLocalStorage } from "../../utils/myLocalStorage";
import Toast from "../../components/Toast"; // Importa el componente Toast

const NewRentalSale = () => {
  const baseURL = 'http://127.0.0.1:4000/api';
  const [clients, setClients] = useState([]);
  const [properties, setProperties] = useState([]);
  const [formData, setFormData] = useState({
    property: '',
    client: '',
    startDate: '',
    finishDate: '',
    monthlyAmount: '',
    status: 2,
  });
  const [toast, setToast] = useState({ show: false, message: '', type: '' }); // Estado para el Toast
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${baseURL}/rents`, formData, {
        headers: {
          'Authorization': `${getLocalStorage('user').token}`
        }
      });
      console.log('Alquiler registrado:', response.data);

      // Mostrar el Toast de éxito
      setToast({ show: true, message: 'Alquiler registrado exitosamente', type: 'success' });

      // Redirigir después de 3 segundos
      setTimeout(() => {
        navigate('/admin/properties/');
      }, 3000);

    } catch (error) {
      console.error('Error al registrar el alquiler:', error);

      // Mostrar el Toast de error
      setToast({ show: true, message: 'Error al registrar el alquiler', type: 'error' });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const clientResponse = async () => {
    const response = await axios.get(`${baseURL}/clients`, {
      headers: {
        'Authorization': `${getLocalStorage('user').token}`
      }
    });
    setClients(response.data);
  };

  const propertyResponse = async () => {
    const response = await axios.get(`${baseURL}/properties`, {
      headers: {
        'Authorization': `${getLocalStorage('user').token}`
      }
    });
    setProperties(response.data);
  };

  useEffect(() => {
    clientResponse();
    propertyResponse();
  }, []);

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
              Registrar Nuevo Alquiler
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <select
                  name="property"
                  value={formData.property}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 rounded-md flex-1"
                >
                  <option value="">Seleccionar Propiedad</option>
                  {properties.map((property) => (
                    property.PropertyStatus.id == 1?
                    <option key={property.id} value={property.id}>{`${property.title} (${property.address})`}</option>
                    :''
                  ))}
                </select>

                <select
                  name="client"
                  onChange={handleChange}
                  className="border border-gray-300 p-2 rounded-md flex-1"
                >
                  <option value="">Seleccionar Cliente</option>
                  {clients.map((client) => (
                    <option key={client.id} value={client.id}>{client.User.name}</option>
                  ))}
                </select>

                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 rounded-md flex-1"
                />

                <input
                  type="date"
                  name="finishDate"
                  value={formData.finishDate}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 rounded-md flex-1"
                />

                <input
                  type="number"
                  name="monthlyAmount"
                  placeholder="Monto Mensual"
                  value={formData.monthlyAmount}
                  onChange={handleChange}
                  min="0"
                  className="border border-gray-300 p-2 rounded-md flex-1"
                />
              </div>

              <div className="flex justify-center mt-4">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 mt-10 rounded-md hover:bg-blue-600 transition"
                >
                  Registrar Alquiler
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Mostrar el Toast solo si está activo */}
        {toast.show && (
          <Toast
            type={toast.type}
            message={toast.message}
            onClose={() => setToast({ ...toast, show: false })}
          />
        )}
      </Container>
    </>
  );
};

export default NewRentalSale;

