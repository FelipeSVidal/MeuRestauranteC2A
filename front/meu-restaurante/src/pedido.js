import React from 'react'
import {useParams} from 'react-router-dom'


const Pedido = (props) => {
  const {id} = useParams();
  const [pedido, setPedido] = React.useState([]);

  React.useEffect( () => {
    (async () => {
      const response = await fetch(`/mesas/${id}`);
      const data = await response.json();
      setPedido(data);
    })
  }, []);

  return (
    <>
      {pedido.items.map( (item, i ) => (
        <h6>{item.qtd}x - {item.nome} - {item.preco} - {item.qtd * item.preco}</h6>
      ))}
    </>
  )
}

export default Pedido;