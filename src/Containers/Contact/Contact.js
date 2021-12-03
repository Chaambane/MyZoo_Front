import React, {Component} from 'react';
import Title from '../../Components/UI/Title/Title';
import Form from './Form/Form';

class Contact extends Component {
    componentDidMount = () => {
        document.title = "Page de contact"
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
                    <Form/>
                </div>
            </>
        )
    };
}

export default Contact;