import Home from './Home';
import About from './About';
import Dinning from './Dinning';
import Accommodation from './Accommodation';
import Contact from './Contact';
import Facilities from './Facilities';
import Menu from './Menu';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import './Style.css';

function App() {
  return (
   <div className='App'>
     
     <Menu/>
     <Router>
    <Switch>
    <Route exact path="/" component={Home}/>
   <Route  exact path="/about" component={About}/>
   <Route exact path="/accommodation"  component={Accommodation}/>
   <Route exact path="/dinning"  component={Dinning}/>
   <Route exact path="/facilities"  component={Facilities}/>
   <Route exact path="/contact"  component={Contact}/>
    </Switch>
    </Router>
   
   </div>
  
  );
}

export default App;
