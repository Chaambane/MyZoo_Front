import React, {Component} from 'react';
import Title from '../../Components/UI/Title/Title';

class Parc extends Component {
    render() {
        return(
            <>
                <Title bgClr="bg-success">Animaux dans le parc</Title>
                <div className="container">
                    Les animaux du parc
                </div>
            </>
        )
    }
};

export default Parc;