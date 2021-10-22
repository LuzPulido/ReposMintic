import Index from 'Pages/Index';
import Girasol from 'Pages/Girasol';
import Cartucho from 'Pages/Cartucho';
import Geranios from 'Pages/Geranios';
import Otros from 'Pages/Otros';
import 'styles/App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Layout from 'Components/Layout';

function App() {
  return (

    <div className="App">
      <Router>
        <Switch>
          <Layout>
          <Route path="/Girasol" exact ><Girasol/></Route>
          <Route path="/Cartucho" exact ><Cartucho/></Route>
          <Route path="/Geranios" exact ><Geranios/></Route>
          <Route path="/Otros" exact ><Otros/></Route>
          <Route path="/" exact ><Index /></Route>
          </Layout> 
        </Switch>
      </Router>
    </div>
  )
}
export default App;
