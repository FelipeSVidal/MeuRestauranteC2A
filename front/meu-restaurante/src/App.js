import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Mesas from './mesas'
import Pedido from './pedido'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Mesas} />
          <Route exact path="/pedidos/:id" component={Pedido} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
