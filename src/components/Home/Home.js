
import React, { Component } from 'react';
import LoginNav from '../Nav/LoginNav';
import '../Home/Home.sass'
import Button from '../Button/button';
import Footer from '../Footer/Footer';

class Home extends Component {

    render() {
        return (
            <div>
                <div>
                    <LoginNav />
                </div>
                <div className="home-container">
                    <section className="hero flex-center-col">
                        <h1>Build Your Yoga Class</h1>
                        <p>Put your class together today</p>
                        <div>
                            <Button kind={"button-outlined"} name={"Learn More"} onClick={() => console.log('clicked!')} />
                            <Button kind={"button-solid"} name={"Start Building"} onClick={() => console.log('clicked!')} />
                        </div>
                    </section>
                    <section className="get-started flex-center-col">
                        <h1>Loving it is easy</h1>
                        <div className="flex-center-row">
                            <div className="headings">
                                <span className="lg-dot"></span>
                                <h2>Heading 1</h2>
                                <p>lorem ipsom</p>
                            </div>
                            <div className="headings">
                                <span className="lg-dot"></span>
                                <h2>Heading 2</h2>
                                <p>lorem ipsom</p>
                            </div>
                            <div className="headings">
                                <span className="lg-dot"></span>
                                <h2>Heading 3</h2>
                                <p>lorem ipsom</p>
                            </div>
                        </div>
                        <Button kind={"button-solid"} name={"Start Building"} onClick={() => console.log('clicked!')} />
                    </section>
                    <section className="content flex-center-col">
                        <h1>How It Works</h1>
                        <div className="flex-center-row">
                            <span className="sm-dot"></span>
                            <div className="pad-content">
                                <h2>Step 1</h2>
                                <p>lorem ipsom lorem ipsom</p>
                                <p>lorem ipsom lorem ipsom</p>
                            </div>
                        </div>
                        <div className="flex-center-row">
                            <span className="sm-dot"></span>
                            <div className="pad-content">
                                <h2>Step 2</h2>
                                <p>lorem ipsom lorem ipsom</p>
                                <p>lorem ipsom lorem ipsom</p>
                            </div>
                        </div>
                        <div className="flex-center-row">
                            <span className="sm-dot"></span>
                            <div className="pad-content">
                                <h2>Step 3</h2>
                                <p>lorem ipsom lorem ipsom</p>
                                <p>lorem ipsom lorem ipsom</p>
                            </div>
                        </div>
                        <div id="content-bt">
                            <Button kind={"button-sol-wd"} name={"Build Your First Class"} />
                        </div>
                    </section>
                    <section className="carousel">
                        Carousel
                </section>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        )
    }
}
export default Home;