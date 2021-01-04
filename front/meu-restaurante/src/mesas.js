import React from 'react'
import {useParams, Link} from 'react-router-dom'
import api from './api'


const Mesas = (props) => {
  const [mesas, setMesas] = React.useState([]);

  const getMesas = React.useCallback( async () => {
    const response = await api.get("/mesas");
    console.log(response);
    const data = await response.json();
    setMesas(data);
  }, []);

  React.useEffect( () => {
    getMesas();
  }, []);


  return (
    <>
      {mesas.map( (m,i) => 
        <Link key={i} to={`pedidos/${m._id}`}>Mesa {m.numero} - {m.status}</Link> 
      )}
    </>
  )
}

export default Mesas;