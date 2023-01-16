import './App.css';
import Navbar from './components/navbar.js';
import Home from './components/home.js';
import AboutView from './components/about.js';
import { Switch, Route } from 'react-router-dom';



function App() {
    return (
        <div>
            
                <Navbar />
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/about" component={AboutView}/>
                </Switch>
            
        </div>
    );
}

export default App;