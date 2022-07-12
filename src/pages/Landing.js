import React from 'react';
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <Logo />
            </nav>
            <div className="container page">
                <div className="info">
                    <h1>job <span>tracking</span> app</h1>
                    <p>
                        DIY vice praxis vinyl, keffiyeh YOLO paleo skateboard messenger bag. Kitsch yr af, post-ironic man bun humblebrag church-key banh mi synth lumbersexual yes plz cardigan selvage. Tofu messenger bag helvetica hoodie lumbersexual aesthetic freegan, church-key gluten-free. Hexagon taiyaki photo booth health goth microdosing cornhole vexillologist vaporware palo santo gentrify.
                    </p>
                    <Link to='/register' className='btn btn-hero'>
                        Login / Register
                    </Link>
                </div>
                <img src={main} alt="job hunt" className='img main-img' />
            </div>
        </Wrapper>
    );
};

export default Landing;