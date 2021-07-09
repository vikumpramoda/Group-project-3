
import './App.css';
import {BrowserRouter as  Router,Switch, Route} from 'react-router-dom'
import Test_Homepage from './Test_Homepage';

function App() {
  return (
    <>
    <Router>

      <Switch>

        <Route path= '/' component = {Test_Homepage}/>

      </Switch>

    </Router>
    </>
  );
}

export default App;
