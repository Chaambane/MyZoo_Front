import React, {Component} from 'react';
import Title from '../../Components/UI/Title/Title';
import axios from 'axios';
import Animal from './Animal/Animal';
import Button from '../../Components/UI/Button/Button';


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
            // console.log(response.data);
            this.setState({DataParc: Object.values(response.data)})
        }) 
        .catch(error => {
            console.log(error);
        })
    }

    // Filtre sur la famille des animaux
    handleFamilySelect = (family) => {
        // console.log(family);
        this.setState({filterFamille: family});
    }

    // Filtre sur les continents ou ces animaux sont présent
    handleContinentSelect = (continent) => {
        // console.log(continent);
        this.setState({filterContinent: continent});
    }

    // Reset le filtre famille
    handleResetFilterFamily = () => {
        this.setState({filterFamille: null});
    }

    // Reset le filtre continent
    handleResetFilterContinent = () => {
        this.setState({filterContinent: null});
    }


    render() {
        return(
            <>
                <Title bgClr="bg-success">Animaux dans le parc</Title>
                <div className="container">
                    {
                        (this.state.filterFamille || this.state.filterContinent) && <span className="fw-bold">Filtres : </span>
                    }
                    {
                        this.state.filterFamille &&
                        <Button 
                            btnClr="btn-outline-success"
                            clic={this.handleResetFilterFamily}
                        >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                        </svg> &nbsp;
                        {this.state.filterFamille}
                        </Button>
                    }
                    {
                        this.state.filterContinent &&
                        <Button 
                            btnClr="btn-outline-success"
                            clic={this.handleResetFilterContinent}
                        >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                        </svg> &nbsp;
                        {this.state.filterContinent}</Button>
                    }
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