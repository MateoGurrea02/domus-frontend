import Header from '../../components/Header'
import MyTable from '../../components/MyTable'
import TitlePage from '../../components/title/Title'
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
      <TitlePage title='Lista de Alquileres'/>
      <MyTable titleList={titleList} data={data}/>
    </>
  )
}

export default RentalList