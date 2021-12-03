import React from 'react';
import Button from '../../../Components/UI/Button/Button';

const form = (props) => (
    <>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Nom :</label>
            <input type="email" 
                className="form-control"
                id="name" 
                placeholder="Mon nom..."
            />
        </div>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email :</label>
            <input type="email" 
                className="form-control"
                id="email" 
                placeholder="nom@example.com"
            />
        </div>
        <div className="mb-3">
            <label htmlFor="message" className="form-label">Message :</label>
            <textarea className="form-control" id="message" rows="3"></textarea>
        </div>
        <div className="d-grid gap-2">
            <Button btnClr="btn-info btn-lg"
            >Envoyer</Button>
        </div>
    </>
);

export default form;