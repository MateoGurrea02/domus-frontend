import Header from "../components/Header";
import { Container } from "../components/container/Container";
import { useEffect, useState } from "react";
import axios from "axios";
import { getLocalStorage } from "../utils/myLocalStorage";

const NewClient = () => {
  const [formData, setFormData] = useState({
    dni: '',
    telefono: '',
    user: '',
  });
  const [list, setList] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    
  };

  useEffect(() => {
    console.log(formData);
    
  }, [formData])

  useEffect(()=>{
    userList()
  },[])

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try{
      const data = {
        dni: formData.dni,
        phoneNumber: formData.telefono,
        user: formData.user,
      }
      const response = await axios.post('http://localhost:4000/api/clients/', data,{
        headers: {
          'Authorization': getLocalStorage('user').token,
        }
      })
      if (response?.status === 201){
        console.log('creado correctamente');
        alert('Cliente Registrado')
      }
      else{
        console.log('error');
      }
    } catch(error){
      console.log(error);
    }
  };
  
  const userList = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/users',{
        headers: {
          'Authorization': `${await getLocalStorage('user').token}`
        }})
      if (response.status === 200){
        setList(response.data)
      }
      else{
        console.log('error');
      }
    } catch (error) {
      console.log(error);
    }
  }

  


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
                  name="user"
                  value={formData.user}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 rounded-md flex-1"
                >
                  <option value="">Seleccionar Usuario</option>
                  {list ?list.map((user)=>{
                    if(user.type <= 3){
                      return ''
                    }
                    return <option key={user.id} value={user.id}>{user.name}</option>
                  }):''}
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
