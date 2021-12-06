import React from 'react';
import Button from '../../../Components/UI/Button/Button';
import { withFormik } from 'formik';
import * as Yup from 'yup';

const form = (props) => (
    <>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Nom :</label>
            <input type="text" 
                className="form-control"
                id="name" 
                placeholder="Mon nom..."
                name="name"
                onChange={props.handleChange}
                value={props.values.name}
                onBlur={props.handleBlur} // Change the value of touched
            />
            {
                props.touched.name && props.errors.name &&
                <span className="text-danger fw-bold">{props.errors.name}</span>
            }
        </div>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email :</label>
            <input type="email" 
                className="form-control"
                id="email" 
                placeholder="nom@example.com"
                name="email"
                onChange={props.handleChange}
                value={props.values.email}
                onBlur={props.handleBlur}
            />
            {
                props.touched.email && props.errors.email &&
                <span className="text-danger fw-bold">{props.errors.email}</span>
            }
        </div>
        <div className="mb-3">
            <label htmlFor="message" className="form-label">Message :</label>
            <textarea className="form-control" id="message" rows="3"
                name="message"
                onChange={props.handleChange}
                value={props.values.message}
                onBlur={props.handleBlur}
            ></textarea>
            {
                props.touched.message && props.errors.message &&
                <span className="text-danger fw-bold">{props.errors.message}</span>
            }
        </div>
        <div className="d-grid gap-2">
            <Button btnClr="btn-info btn-lg"
                clic={props.handleSubmit}
            >Envoyer</Button>
        </div>
    </>
);

export default withFormik ({
    mapPropsToValues: () => ({
        name: "",
        email: "",
        message: ""
    }),
    validationSchema: Yup.object().shape({
        name:Yup.string()
            .min(5, "minimum 5 charactères")
            .required("Le nom est obligatoire"),
        email: Yup.string()
            .email("Le format n'est pas reconnu")
            .required("L'email est obligatoire"),
        message: Yup.string()
            .min(50, "minimum 50 charactère")
            .max(250, "maximum 250 charactère")
            .required("Le message est obligatoire"),


    }),
    handleSubmit: (values) => {
        alert("Message Envoyé");
    }
})(form);