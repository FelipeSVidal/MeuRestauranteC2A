import React from 'react'
import {useParams, useHistory} from 'react-router-dom'

import {
  Button
} from '@material-ui/core'
import api from './api'


const Pedido = (props) => {
  const {id} = useParams();
  const [pedido, setPedido] = React.useState([]);
  const history = useHistory();

  const getMesa = React.useCallback(async () => {
    const response = await api.get(`/mesas/${id}`);
    const data = await response.data;
    setPedido(data);
  }, [props])

  React.useEffect( () => {
    getMesa();
  }, []);

  const handleBaiao = async () => {
    await api.get(`pedidos/${id}/0`);
    window.location.reload();
  }

  const handleBatata = async () => {
    await api.get(`pedidos/${id}/1`);
    window.location.reload();
  }

  const handleRefri = async () => {
    await api.get(`pedidos/${id}/2`);
    window.location.reload();
  }

  const handleClose = async () => {
    await api.get(`mesas/close/${id}`);
    history.push("/");
  }

  const back = () => {
    history.push("/");
  }

  return (
    <>
      {pedido?.items?.map( (item, i ) => (
        <h6>{item.qtd}x - {item.nome} - {item.preco} - {item.qtd * item.preco}</h6>
      ))}
      <Button onClick={handleBaiao}>Adicionar Baião</Button>
      <Button onClick={handleBatata}>Adicionar Batata</Button>
      <Button onClick={handleRefri}>Adicionar Refrigerante</Button>
      <Button onClick={handleClose}>Fechar conta</Button>
      <Button onClick={back}>Voltar</Button>
    </>
  )
}

export default Pedido;