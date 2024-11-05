import Header from "../../components/Header";
import { Container } from "../../components/container/Container";
import { useEffect, useState } from "react";
import axios from "axios";
import { getLocalStorage } from "../../utils/myLocalStorage";
import { Link, useNavigate, useParams } from "react-router-dom";

const AddAgents = () => {
  const [formData, setFormData] = useState({
    user: '',
  });
  const [list, setList] = useState('')
  const {id, isFromEdition} = useParams()
  const navigate = useNavigate();


  useEffect(() => {
    async function fetchData(){
      try{
        const response = await axios.get(`http://localhost:4000/api/agents/${id}`, {
          headers: {
            'Authorization': getLocalStorage('user').token,
          }
        })
        const data = response?.data;
        console.log(data);
        setFormData((prevFormData) => ({
          ...prevFormData,
          user: data.User.id,
        }));
      }
      catch(error){
        console.log(error);
      }
    }
    if (isFromEdition){
      fetchData()
    }
  }, [isFromEdition])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    
  };

  useEffect(()=>{
    userList()
  },[])

  const handleCreate = async (e) => {
    e.preventDefault();
    console.log(formData);
    try{
      const data = {
        user: formData.user,
      }
      const response = await axios.post('http://localhost:4000/api/agents/', data,{
        headers: {
          'Authorization': getLocalStorage('user').token,
        }
      })
      if (response?.status === 201){
          alert('Agente Registrado')
        navigate(-1)
        console.log('creado correctamente');
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
        <Link to={'/admin/agents/'}>
          <button type="button" className="text-black bg-gray-200 hover:bg-gray-400 focus:ring-4 font-medium rounded-lg text-sm px-4 py-2 text-center">Volver</button>
        </Link>
        <div className="flex justify-center mt-5">
          <div className="bg-white p-8 shadow-lg rounded-md w-full">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Registrar Nuevo Agente
            </h2>
            <form onSubmit={handleCreate} className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <select
                  name="user"
                  value={formData.user}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 rounded-md flex-1"
                >
                  <option value="">Seleccionar Usuario</option>
                  {list ?list.map((user)=>{
                    if(user.UserType.id == 3 ||user.UserType.id == 4){
                      return <option key={user.id} value={user.id}>{user.name}</option>
                    }else{
                      return ''
                    }
                  }):''}
                </select>
              </div>

              <div className="flex justify-center mt-4">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 mt-10 rounded-md hover:bg-blue-600 transition"
                >
                Registrar Agente
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default AddAgents;
