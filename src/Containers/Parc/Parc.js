import React, {Component} from 'react';
import Title from '../../Components/UI/Title/Title';
import axios from 'axios';
import Animal from './Animal/Animal';


class Parc extends Component {
    state= {
        DataParc: null,
        filterFamille: null,
        filterContinent: null
    }

    componentDidMount = () => {
        this.loadData();
    }

    componentDidUpdate = (oldProps, oldState) => {
        if(oldState.filterFamille !== this.state.filterFamille || oldState.filterContinent !== this.state.filterContinent) {
            this.loadData();
        }
    }

    loadData = () => { // Récupère les données dans l'API PHP
        let family = this.state.filterFamille ? this.state.filterFamille : "-1";
        let continent = this.state.filterContinent ? this.state.filterContinent : "-1";
        axios.get(`http://localhost:8090/SERVEUR_ANIMAUX/front/animaux/${family}/${continent}`)
        .then(response => {
            console.log(response.data);
            this.setState({DataParc: Object.values(response.data)})
        }) 
        .catch(error => {
            console.log(error);
        })
    }

    handleFamilySelect = (family) => {
        console.log(family);
        this.setState({filterFamille: family});
    }

    handleContinentSelect = (continent) => {
        console.log(continent);
        this.setState({filterContinent: continent});
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
                                            <Animal {...animal}
                                                filterFamily = {this.handleFamilySelect}
                                                filterContinent = {this.handleContinentSelect}
                                            />
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