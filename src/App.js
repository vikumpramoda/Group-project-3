import './App.css';
import {BrowserRouter as  Router,Switch, Route} from 'react-router-dom'
import Test_Homepage from './Pages/Test_Homepage';
import DropDown from './Pages/DropDownlist';
import Chart from './Pages/chart';

function App() {
  return (
    <>
    <Router>

      <Switch>

       
          <Route path='/' component={DropDown}/>
          <Route path='/chart' component={Chart}/>


      </Switch>

    </Router>
    </>
  );
}

export default App;
