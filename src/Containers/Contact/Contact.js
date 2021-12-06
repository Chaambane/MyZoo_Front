import React, {Component} from 'react';
import Title from '../../Components/UI/Title/Title';
import Form from './Form/Form';
import axios from 'axios';

class Contact extends Component {
    componentDidMount = () => {
        document.title = "Page de contact"
    }

    handleSendMail = (message) => {
        axios.post('http://localhost:8090/SERVEUR_ANIMAUX/front/postMessage', message)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        return (
            <>  
                <Title bgClr="bg-success">Contactez Nous</Title>
                <div className="container">
                    <div className="mb-3">
                        <div className="fs-1">Adresse : </div>
                        XXXXXXXXXXXXXXXX
                        <div className="fs-1">Téléphone : </div>
                        XXXXXXXXXXXXXXXX
                        <div className="fs-1">Vous préférez nous écrire ?</div>
                        XXXXXXXXXXXXXXXX
                    </div>
                    <Form sendMail = {this.handleSendMail}/>
                </div>
            </>
        )
    };
}

export default Contact;