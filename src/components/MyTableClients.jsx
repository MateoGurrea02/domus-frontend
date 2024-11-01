import React,{useEffect,useState} from "react";
import axios from "axios";
import { setLocalStorage, getLocalStorage } from "../utils/myLocalStorage";
import { useNavigate } from "react-router-dom";



const MyTableProperty = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const handleEdit = (id) => {  
    navigate(`/new-client/${id}/${true}`)
  }
  
  const handleDelete = async (e)=>{
    let id = await e.target.id
    let confirmar = confirm('Estas seguro que deseas eliminar el cliente?')
    if(confirmar){
      await axios.delete(`http://127.0.0.1:4000/api/clients/${id}`,{
      headers: {
          'Authorization': getLocalStorage('user').token
        }
      }).then(
        getClients()
      )
      .catch(error => console.error(error))
      window.location.reload()

    }
  }

  const getClients = async ()=>{
    const data = (await axios.get(`http://127.0.0.1:4000/api/clients`,{
      headers: {
        'Authorization': getLocalStorage('user').token
      }
    }
    ).then())

    setData(data.data)
  }

  useEffect(() => {
    getClients()
  }, []);

  let titleList = ['Nombre','Documento Identidad','Teléfono','Acciones']
  
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mx-auto flex w-full flex-col justify-center px-5 md:max-w-[92%]  lg:max-w-[80%]">
        <div className="relative flex w-full flex-col ">
          <div className="h-full w-full rounded-lg">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm h-full w-full p-0 border-zinc-800 sm:overflow-auto">
              <div>
                <div className="relative w-full overflow-auto">
                  <table className="caption-bottom text-sm w-full">
                    <thead className="[&amp;_tr]:border-b border-b-[1px] p-6 border-zinc-800">
                      <tr className="border-zinc-800">
                        <th
                          className="h-12 px-4 align-middle font-medium text-muted-foreground  cursor-pointer pl-5 pr-4 pt-2 text-start border-zinc-800"
                          colSpan="1"
                        >
                          <div className="flex max-w-max items-center">
                            <button
                              type="button"
                              role="checkbox"
                              aria-checked="false"
                              data-state="unchecked"
                              value="on"
                              className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                            ></button>
                          </div>
                        </th>
                        {titleList.map((title, index) => (
                          <th
                            className={`h-20 px-4 ${title === 'Acciones' ? 'text-center' :' text-start'} font-medium text-muted-foreground  cursor-pointer pl-5 pr-4 pt-2 align-middle border-zinc-800`}
                            colSpan="1"
                          >
                            <p className="text-xs md:text-base font-semibold">
                              {title}
                            </p>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="[&amp;_tr:last-child]:border-0">
                      {data ? data.map((item,index)=>{
                        return(
                      <tr className="border-b border-zinc-800 transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted px-6 dark:hover:bg-gray-100">
                        <td className="p-4 align-middle  w-max border-b-[1px] py-5 pl-5 pr-4 border-white/10">
                          <div className="flex max-w-max items-center">
                            <button
                              type="button"
                              role="checkbox"
                              aria-checked="false"
                              data-state="unchecked"
                              value="on"
                              className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                            ></button>
                          </div>
                        </td>
                        <td className="p-4 align-middle text-start w-max border-b-[1px] py-5 pl-5 pr-4 border-white/10">
                          <p className="text-sm font-medium">
                            {item.User.name}
                          </p>
                        </td>
                        <td className="p-4 align-middle text-start w-max border-b-[1px] py-5 pl-5 pr-4 border-white/10">
                          <p className="text-sm font-medium">
                            {item.dni}
                          </p>
                        </td>
                        <td className="p-4 align-middle text-start w-max border-b-[1px] py-5 pl-5 pr-4 border-white/10">
                          <p className="text-sm font-medium">
                            {item.phoneNumber}
                          </p>
                        </td>
                        <td className="align-middle text-end border-b-[1px] py-5 pl-5  border-white/10">
                          <div className="flex justify-around">
                              <button className="hover:scale-110" onClick={() => handleEdit(item.id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="blue" className="size-6">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                </svg>
                              </button>
                              <button 
                                className="hover:scale-110" 
                                onClick={handleDelete}       
                              >
                                <svg id={item.id} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="size-6">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                              </button>
                          </div>
                        </td>
                      </tr>
                     )}):''} 
                    </tbody>
                  </table>
                </div>
                <div className="mt-2 flex h-20 w-full items-center justify-between px-6">
                  <div className="flex items-center gap-3">
                    <p className="text-sm font-medium ">
                      Pagina 1
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      className="whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 flex items-center justify-center rounded-lg p-2 text-lg transition duration-200 text-white hover:bg-transparent active:bg-transparent"
                      disabled=""
                    >
                      <svg
                        stroke="currentColor"
                        fill="black"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
                      </svg>
                    </button>
                    <button className="whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 flex min-w-[34px] items-center justify-center rounded-lg p-2 text-lg transition duration-200 text-white hover:bg-transparent active:bg-transparent">
                      <svg
                        stroke="currentColor"
                        fill="black"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTableProperty;
