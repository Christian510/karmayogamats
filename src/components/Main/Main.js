import React from 'react';
import { Link } from 'react-router-dom';
// import '../../../src/assets/KYM-logo.png';
import '../../components/Button/button.sass';
import './Main.sass';
// import Button from '../Button/button';
import PhotoOne from '../../assets/yoga_photos/Yoga1.jpg';
import YogaClass from '../../assets/yoga_photos/Yoga15.jpg';
import PhotoFive from '../../assets/yoga_photos/Yoga5.jpg';

function Main() {
    return (
        <div>
            <div className="home-container">
                <section className="hero flex-center-col">
                    <h1>Build Your Yoga Class</h1>
                    <p>Put your class together today</p>
                    <div>
                        <button className="button-outlined">
                            <Link to={'/about'}  >Learn More</Link>
                        </button>
                        <button className={"button-solid"}>
                            <Link to={'/register'} >Start Building</Link>
                        </button>

                    </div>
                </section>
                <section className="get-started flex-center-col">
                    <h1>Loving it is easy</h1>
                    <div className="flex-center-row">
                        <div className="headings">
                            <img className="lg-dot" src={YogaClass} alt="Yoga Class" ></img>
                            <h2>Create</h2>
                            <p>Create yoga sequences for a class or personal use.</p>
                        </div>
                        <div className="headings">
                            <img className="lg-dot" src={PhotoFive} alt="Yoga with IPad" ></img>
                            <h2>Customize</h2>
                            <p>48 poses to choose from.</p>
                        </div>
                        <div className="headings">
                            <img className="lg-dot" src={PhotoOne} alt="Yoga Pose" ></img>
                            <h2>Save and Share</h2>
                            <p>Create and save up to 10 sequences.</p>
                        </div>
                    </div>
                    <button className={"button-solid"}>
                        <Link to={'/register'} >Start Building</Link>
                    </button>
                </section>
                <section className="content flex-center-col">
                    <h1>How It Works</h1>
                    <div className="flex-center-row">
                        <span className="sm-dot"></span>
                        <div className="how-it-works">
                            <h2>Step 1</h2>
                            <p>Sign up for a new account.</p>
                            <p>lorem ipsom lorem ipsom</p>
                        </div>
                    </div>
                    <div className="flex-center-row">
                        <span className="sm-dot"></span>
                        <div className="how-it-works">
                            <h2>Step 2</h2>
                            <p>Create your first yoga sequence</p>
                            <p>lorem ipsom lorem ipsom</p>
                        </div>
                    </div>
                    <div className="flex-center-row">
                        <span className="sm-dot"></span>
                        <div className="how-it-works">
                            <h2>Step 3</h2>
                            <p>Save it and do yoga</p>
                            <p>lorem ipsom lorem ipsom</p>
                        </div>
                    </div>
                    <div id="content-bt">
                        <button className={"button-solid"} >
                            <Link to={'/register'}>Build Your First Class</Link>
                        </button>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Main;