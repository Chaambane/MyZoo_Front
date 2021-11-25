import React, {Component} from 'react';
import Navbar from '../../Components/UI/Navbar/Navbar';
import { Switch, Route} from 'react-router-dom';
import Home from './Home/Home';
import Error404 from '../../Components/UI/Error/Error404/Error404';
class Main extends Component {
    render() {
        return (
            <>
                <Navbar/>
                <main>
                    <Switch>
                        <Route path="/" exact render={() => <Home/> }/>
                        <Route path="/contact" exact render={() => <h1>Contact</h1>}/>
                        <Route path="*" exact component={Error404}/>
                    </Switch>
                </main>
            </>
        )
    };
}

export default Main;