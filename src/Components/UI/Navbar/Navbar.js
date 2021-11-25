import React from 'react';
import LogoMyZoo from '../../../Assets/images/logo.png';

const navbar = (props) => (
    <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src={LogoMyZoo} alt="logo my zoo" width="55rem" className="rounded" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" href="top">Accueil</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </header>
);

export default navbar;