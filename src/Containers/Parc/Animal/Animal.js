import React from 'react';
import Button from '../../../Components/UI/Button/Button';

const animal = (props) => (
    <div className="card">
        <h2 className="card-header text-center fw-bold">
            {props.id} - {props.nom}
        </h2>
        <div className="card-body text-center">
            <div className="card-text">{props.description}</div>
            <div>
                <img src={props.image} className="img-fluid h-100" width="80px" alt={props.nom} />
            </div>
            <h3 className="card-text p-2">Famille: <Button 
                    clic={() => props.filterFamily(props.famille.idFamille)} 
                    btnClr="btn-secondary"
                >{props.famille.libelleFamille.toUpperCase()}</Button></h3>
            <p className="card-text p-2">{props.famille.descriptionFamille}</p>
            {props.continents.map(continent => {
                let colorBtn = "";
                switch(continent.idContinent) {
                    case "1": colorBtn = "btn-secondary";
                    break;
                    case "2": colorBtn = "btn-info";
                    break;
                    case "3": colorBtn = "btn-primary";
                    break;
                    case "4": colorBtn = "btn-warning";
                    break;
                    case "5": colorBtn = "btn-danger";
                    break;
                    default: return null;
                }
                return(
                    <Button btnClr={colorBtn} 
                        cssM="me-1" 
                        key={continent.idContinent}
                        clic={() => props.filterContinent(continent.idContinent)} 
                    >{continent.libelleContinent}</Button>
                )
            })}
        </div>
    </div>
);

export default animal;