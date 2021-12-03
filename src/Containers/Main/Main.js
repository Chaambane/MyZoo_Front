import React, {Component} from 'react';
import Navbar from '../../Components/UI/Navbar/Navbar';
import { Switch, Route} from 'react-router-dom';
import Home from './Home/Home';
import Error404 from '../../Components/UI/Error/Error404/Error404';
import Footer from '../../Components/UI/Footer/Footer';
import Parc from '../Parc/Parc';
import Contact from '../Contact/Contact';
class Main extends Component {
    render() {
        return (
            <>
                <div className="monSite">
                    <Navbar/>
                    <main>
                        <Switch>
                            <Route path="/" exact render={() => <Home/> }/>
                            <Route path="/parc" exact render={() => <Parc/> }/>
                            <Route path="/contact" exact render={() => <Contact/>}/>
                            <Route path="*" exact component={Error404}/>
                        </Switch>
                    </main>
                    <div className="minSite"></div>
                </div>
                <Footer/>
            </>
        )
    };
}

export default Main;