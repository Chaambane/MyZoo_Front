import React from 'react';
import Fb from '../../../Assets/images/footer/fb.png';
import Twitter from '../../../Assets/images/footer/twitter.png';
import Youtube from '../../../Assets/images/footer/youtube.png';
import { NavLink } from 'react-router-dom';

const footer = (props) => (
    <footer className="bg-secondary container-fluid">
        <div className="text-white text-center">
            My Zoo - 2021
            <div className="row no-gutters align-items-center text-center pt-2">
                <div className="col-3">
                    <a href="https://www.facebook.com" className="d-block" target="_blank" rel="noreferrer">
                        <img src={Fb} alt="facebook" className="wImgFooter" />
                    </a>
                </div>
                <div className="col-3">
                    <a href="https://www.twitter.com" className="d-block" target="_blank" rel="noreferrer">
                        <img src={Twitter} alt="twitter" className="wImgFooter" />
                    </a>
                </div>
                <div className="col-3">
                    <a href="https://www.youtube.com" className="d-block" target="_blank" rel="noreferrer">
                        <img src={Youtube} alt="youtube" className="youtFooter" />
                    </a>
                </div>
                <div className="col-3">
                    <NavLink to="/mentionsLegales" className="nav-link mtFooter m-0 p-0">Mentions Légales</NavLink>
                </div>
            </div>
        </div>
    </footer>
);

export default footer;