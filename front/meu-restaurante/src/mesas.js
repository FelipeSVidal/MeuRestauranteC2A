import React from 'react'
import {useParams, Link} from 'react-router-dom'


const Mesas = (props) => {
  const [mesas, setMesas] = React.useState([]);

  React.useEffect( () => {
    (async () => {
      const response = await fetch("/mesas");
      const data = await response.json();
      setMesas(data);
    })
  }, []);


  return (
    <>
      {data.map( (m,i) => 
        <Link key={i} to={`pedidos/${m._id}`}>Mesa {m.numero} - {m.status}</Link> 
      )}
    </>
  )
}

export default Mesas;