import Header from '../../components/Header'
import MyTable from '../../components/MyTable'
const RentalList = ()=>{
  let titleList = ['Propiedad','Cliente','Fecha Inicio','Fecha Fin','Monto Mensual','Estado','Acciones']
  let data = [
    { 
    username:'MateoGurrea',
    client:true,
    dateStart:'30/06/2024',
    dateEnd:'30/06/2025',
    monthlyPayment:5000,
    state:'active',
    },
    { 
      username:'MateoGurrea',
      client:false,
      dateStart:'30/06/2024',
      dateEnd:'30/06/2025',
      monthlyPayment:5000,
      state:'active',
      },
      { 
        username:'MateoGurrea',
        client:false,
        dateStart:'30/06/2024',
        dateEnd:'30/06/2025',
        monthlyPayment:5000,
        state:'active',
        },
        { 
          username:'MateoGurrea',
          client:false,
          dateStart:'30/06/2024',
          dateEnd:'30/06/2025',
          monthlyPayment:5000,
          state:'active',
          },
          { 
            username:'MateoGurrea',
            client:false,
            dateStart:'30/06/2024',
            dateEnd:'30/06/2025',
            monthlyPayment:5000,
            state:'active',
            },
            { 
              username:'MateoGurrea',
              client:false,
              dateStart:'30/06/2024',
              dateEnd:'30/06/2025',
              monthlyPayment:5000,
              state:'active',
              },
              { 
                username:'MateoGurrea',
                client:false,
                dateStart:'30/06/2024',
                dateEnd:'30/06/2025',
                monthlyPayment:5000,
                state:'active',
                },
                { 
                  username:'MateoGurrea',
                  client:false,
                  dateStart:'30/06/2024',
                  dateEnd:'30/06/2025',
                  monthlyPayment:5000,
                  state:'active',
                  },
                  { 
                    username:'MateoGurrea',
                    client:false,
                    dateStart:'30/06/2024',
                    dateEnd:'30/06/2025',
                    monthlyPayment:5000,
                    state:'active',
                    },
                    { 
                      username:'MateoGurrea',
                      client:false,
                      dateStart:'30/06/2024',
                      dateEnd:'30/06/2025',
                      monthlyPayment:5000,
                      state:'active',
                      },
                        
  ]
  return(
    <>
      <Header/>
      <h2 className='text-4xl font-semibold ml-5 md:ml-40 m-5 md:m-20'>Lista de Alquileres</h2>
      <MyTable titleList={titleList} data={data}/>
    </>
  )
}

export default RentalList