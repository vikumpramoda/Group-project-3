import './App.css';
import {BrowserRouter as  Router,Switch, Route} from 'react-router-dom'
import Test_Homepage from './Pages/Test_Homepage';
import DropDown from './Pages/DropDownlist';

function App() {
  return (
    <>
    <Router>

      <Switch>

       
          <Route path='/' component={DropDown}/>


      </Switch>

    </Router>
    </>
  );
}

export default App;
