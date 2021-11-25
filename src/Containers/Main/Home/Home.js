import React, {Component} from 'react';
import Title from '../../../Components/UI/Title/Title';
import Banner from '../../../Assets/images/banderole.png';
import Logo from '../../../Assets/images/logo.png';

class Home extends Component {
    render() {
        return (
            <div>
                <img src={Banner} alt="banderole" className="img-fluid" />
                <Title bgClr="bg-info">Venez visiter le parc myZoo !!!</Title>
                <section className="container text-dark">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem tenetur ut voluptate iure debitis. Expedita laboriosam, voluptatem molestias amet nemo repellendus eligendi fugit dignissimos at voluptate tempora autem minus quidem.
                    </p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem tenetur ut voluptate iure debitis. Expedita laboriosam, voluptatem molestias amet nemo repellendus eligendi fugit dignissimos at voluptate tempora autem minus quidem.
                    </p>
                    <article className="row no-gutters">
                        <div className="col-12 col-md-6">
                            <img src={Logo} alt="logo" className="img-fluid"/>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptatibus incidunt itaque dicta quos est, placeat quis. Alias iure sunt eaque, voluptates ex voluptate obcaecati aperiam quos, quo, dicta soluta!
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptatibus incidunt itaque dicta quos est, placeat quis. Alias iure sunt eaque, voluptates ex voluptate obcaecati aperiam quos, quo, dicta soluta!
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptatibus incidunt itaque dicta quos est, placeat quis. Alias iure sunt eaque, voluptates ex voluptate obcaecati aperiam quos, quo, dicta soluta!
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptatibus incidunt itaque dicta quos est, placeat quis. Alias iure sunt eaque, voluptates ex voluptate obcaecati aperiam quos, quo, dicta soluta!
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <img src={Logo} alt="logo" className="img-fluid"/>
                        </div>
                    </article>
                </section>
            </div>
        )
    };
}

export default Home;