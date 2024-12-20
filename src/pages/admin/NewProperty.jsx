import axios from "axios";
import { useState, useRef, useEffect } from "react";
import { getLocalStorage } from "../../utils/myLocalStorage";
import Header from "../../components/Header";
import { Container } from "../../components/container/Container";
import { Link, useNavigate, useParams } from "react-router-dom";

const NewProperty = () => {
  const [propertyType, setPropertyType] = useState()
  const [statusType, setStatusType] = useState()
  const [formData, setFormData] = useState({
    direccion: '',
    montoPorMes: '',
    descripcion: '',
    tipoPropiedad: '',
    tipoContrato: '',
    dimension: '',
    titulo: '',
    puntuacion: '',
    habitaciones: '',
    banios: '',
    maxHabitantes: '',
  });
  const [formDataImage, setFormDataImage] = useState({
    image:'',
    property:''
  })
  const [imageList,setImageList] =useState({
    image:''
  })
  const {id, isFromEdition} = useParams();
  const navigate = useNavigate();
// address', 'price', 'description', 'size', 'title', 'rating', 'bedrooms', 'bathrooms', 'maxResidents'
  
  useEffect(() => {
    getDataSelect()
    async function fetchData(){
      try{
        const response = await axios.get(`http://localhost:4000/api/properties/find/${id}`, {
          headers: {
            'Authorization': getLocalStorage('user').token,
          }
        })
        const data = response?.data;
        console.log(data);
        setFormData((prevFormData) => ({
          ...prevFormData,
          montoPorMes: data.price,
          direccion: data.address,
          descripcion: data.description,
          tipoPropiedad: data.PropertyType.id,
          tipoContrato: data.PropertyStatus.id,
          dimension: data.size,
          titulo: data.title,
          puntuacion: data.rating,
          habitaciones: data.bedrooms,
          banios: data.bathrooms,
          maxHabitantes: data.maxResidents,
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

  const descripcionRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === "descripcion") {
      autoResizeTextarea();
    }
  }; 

  const handleChangeImage = (e) =>{
    setImageList(
      {...imageList, [e.target.name]: e.target.files}
    )
    // console.log(formDataImage.image)
    
  }

  useEffect(() => {
    console.log(formDataImage);
    
  },[formDataImage])


  const createProperty = async (e) => {
    e.preventDefault();
    try{
      const data = {
        address: formData.direccion,
        propertyType: parseInt(formData.tipoPropiedad), 
        price: formData.montoPorMes,
        status: parseInt(formData.tipoContrato),  
        description: formData.descripcion,
        size: formData.dimension,
        title: formData.titulo,
        rating: parseInt(formData.puntuacion),
        bedrooms: parseInt(formData.habitaciones),
        bathrooms: parseInt(formData.banios),
        maxResidents: parseInt(formData.maxHabitantes),
      }      
      const response = await axios.post('http://localhost:4000/api/properties/', data, {
        headers: {
          'Authorization': getLocalStorage('user').token,
        }
      })      
      if (response?.status === 201){
        uploadPropertyImage(response.data.id,imageList.image[0])
        uploadPropertyImage(response.data.id,imageList.image[1])
        uploadPropertyImage(response.data.id,imageList.image[2])
        uploadPropertyImage(response.data.id,imageList.image[3])
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

  const uploadPropertyImage = async (idProperty,image) => {
    try{
      formDataImage.property = idProperty      
      formDataImage.image = image
      
      const response = await axios.post('http://localhost:4000/api/image', formDataImage, {
        headers: {
          'Authorization': getLocalStorage('user').token,
          'Content-Type': 'multipart/form-data',
        }
      })
      
      if (response?.status === 201){
        console.log('creado correctamente');
        // navigate(-1)
      }
      else{
        console.log('error');
      }
    } catch(error){
      console.log(error);
    }
  };
  
  const editProperty = async (e) => {
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
      const response = await axios.put(`http://localhost:4000/api/properties/update/${id}`, data, {
        headers: {
          'Authorization': getLocalStorage('user').token,
        }
      })
      
      if (response?.status === 200){
        console.log('editado correctamente');
        navigate(-1)
      }
      else{
        console.log('error');
      }
    } catch(error){
      console.log(error);
    }
  };

  const getDataSelect= async ()=>{
    const propertyType = await axios.get(`http://localhost:4000/api/propertyType`, {
      headers: {
        'Authorization': getLocalStorage('user').token,
      }
    })
    if(propertyType?.status === 200){
      setPropertyType(propertyType.data);
    }
    const propertyStatus = await axios.get('http://localhost:4000/api/propertyStatus',{
        headers: {
          'Authorization': getLocalStorage('user').token,
        }
    })
    if(propertyStatus?.status === 200){
      setStatusType(propertyStatus.data);
    }
  }

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
            <form onSubmit={isFromEdition ? editProperty : createProperty} className="space-y-4" encType='multipart/form-data'>
              <div className="flex flex-wrap gap-4">
                <select
                name="tipoPropiedad"
                value={formData.tipoPropiedad}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded-md flex-1 h-12"
                >
                <option value="">Seleccionar Tipo de Propiedad</option>
                {propertyType ? propertyType.map((type)=>{
                    return(
                      <option value={type.id}>{type.type}</option>
                )
                })
                :''}
                </select>

                <select
                name="tipoContrato"
                value={formData.tipoContrato}
                onChange={handleChange}
                id="tipoContrato"
                className="border border-gray-300 p-2 rounded-md flex-1 h-12"
                >
                <option value="">Seleccionar Tipo de Contrato</option>
                {statusType ? statusType.map((status)=>{
                    return(
                      <option value={status.id}>{status.status}</option>
                )
                })
                :''}
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
                  className="border border-gray-300 p-2 rounded-md resize-none w-full md:w-96 h-12"
                  style={{ overflow: 'hidden' }}
                />
                <input
                  type="text"
                  name="titulo"
                  placeholder="Titulo"
                  value={formData.titulo}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 rounded-md flex-1 h-12"
                />
                <input
                  type="number"
                  name="puntuacion"
                  placeholder="Puntuacion"
                  value={formData.puntuacion}
                  onChange={handleChange}
                  min="0"
                  className="border border-gray-300 p-2 rounded-md flex-1 h-12"
                />
                <input
                  type="number"
                  name="habitaciones"
                  placeholder="Habitaciones"
                  value={formData.habitaciones}
                  onChange={handleChange}
                  min="0"
                  className="border border-gray-300 p-2 rounded-md flex-1 h-12"
                />
                <input
                  type="number"
                  name="banios"
                  placeholder="Baños"
                  value={formData.banios}
                  onChange={handleChange}
                  min="0"
                  className="border border-gray-300 p-2 rounded-md flex-1 h-12"
                />
                <input
                  type="number"
                  name="maxHabitantes"
                  placeholder="Residentes"
                  value={formData.maxHabitantes}
                  onChange={handleChange}
                  min="0"
                  className="border border-gray-300 p-2 rounded-md flex-1 h-12"
                />
                {isFromEdition?
                ''
                :<>
                <label for="fileInput" className="border border-gray-300 p-3 cursor-pointer rounded-md flex-1 h-12">Seleccione 4 imagenes</label>
                <input placeholder="Seleccione 4 imagenes" multiple type="file" id="fileInput" name="image" files={formDataImage.image} onChange={handleChangeImage} className="hidden" />
                </>
                }
                </div>
              <div className="flex justify-center mt-4">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 mt-10 rounded-md hover:bg-blue-600 transition"
                >
                  {isFromEdition ? 'Guardar Edicion' : 'Registrar Nueva Propiedad'}
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

