import React,{useEffect,useState} from "react";
import axios from "axios";
import { setLocalStorage, getLocalStorage } from "../utils/myLocalStorage";



const MyTableUsers = () => {
  const [data, setData] = useState([]);

  const getUsers = async ()=>{
    const data = (await axios.get(`http://127.0.0.1:4000/api/users`,{
      headers: {
        'Authorization': getLocalStorage('user').token
      }
    }
    ).then())

    setData(data.data)
  }

  useEffect(() => {
    getUsers()
  }, []);

  let titleList = ['Nombre','Correo','Rol']
  
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
                      {data ? data.map((item)=>{
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
                            {item.name}
                          </p>
                        </td>
                        <td className="p-4 align-middle text-start w-max border-b-[1px] py-5 pl-5 pr-4 border-white/10">
                          <p className="text-sm font-medium">
                            {item.email}
                          </p>
                        </td>
                        <td className="p-4 align-middle text-start w-max border-b-[1px] py-5 pl-5 pr-4 border-white/10">
                          <p className="text-sm font-medium">
                            {item.type}
                          </p>
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

export default MyTableUsers;