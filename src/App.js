import './App.css';
import Header from './components/Header';

import Home  from './pages/Home';
import About from './pages/About';
import Kek  from './pages/Kek';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
   
    <div>
        <Header/>
        <Switch>
          <Route exact path="/home" component={Home}>

          </Route>
          <Route path="/about" component={About}>
            
          </Route>
          <Route path="/kek" component={Kek}>
            
          </Route>

        </Switch>
    
         
    </div>
 
    
  );
}

export default App;
