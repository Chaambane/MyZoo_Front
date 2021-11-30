import React, {Component} from 'react';
import Title from '../../Components/UI/Title/Title';
import axios from 'axios';
import Animal from './Animal/Animal';


class Parc extends Component {
    state= {
        DataParc: null
    }

    componentDidMount = () => {
        axios.get('http://localhost:8090/SERVEUR_ANIMAUX/front/animaux')
            .then(response => {
                console.log(response.data);
                this.setState({DataParc: Object.values(response.data)})
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        return(
            <>
                <Title bgClr="bg-success">Animaux dans le parc</Title>
                <div className="container">
                    {
                        this.state.DataParc &&
                        <div className="row no-gutters">
                            {
                                this.state.DataParc.map(animal => {
                                    return(
                                        <div className="col-12 col-md-6 mt-2 mb-2" key={animal.id}>
                                            <Animal {...animal}/>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    }
                </div>
            </>
        )
    }
};

export default Parc;