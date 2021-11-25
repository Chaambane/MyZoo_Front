import React, {Component} from 'react';
import Title from '../../../Components/UI/Title/Title';

class Home extends Component {
    render() {
        return (
            <div className="container">
                <Title bgClr="bg-info">MyZoo</Title>
                Page d'Accueil
            </div>
        )
    };
}

export default Home;