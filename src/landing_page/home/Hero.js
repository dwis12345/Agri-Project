import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return ( 
        
        <div className="container text-center mb-5" style={{ marginTop: "100px" }}>
            <div className="hover-underline heading">“Join India’s Growing Agri Community”<br></br>
                </div>
            <p className="hero-subtitle">
                A platform for farmers, students, and plant enthusiasts to learn, monitor crops, and make smarter decisions with weather insights.
            </p>
            <div className="row up-image">
                <div className="col-4" id="img">
                    <img src="/media/images/farm01.jpg" 
                    alt="image01" style={{ width: "18rem", height: "12rem" }}></img>
                </div>
                <div className="col-4 ps-3" id="img">
                    <img src="/media/images/farm02.jpg" 
                    alt="image02" style={{ width: "18rem", height: "12rem" }}></img>
                </div>
                <div className="col-4 ps-4" id="img">
                    <img src="/media/images/farm03.avif" 
                    alt="image03" style={{ width: "18rem", height: "12rem" }}></img>
                </div>
            </div>
            <div className="row down-image">
                <div className="col-4" id="img">
                    <img src="/media/images/farm04.jpeg" 
                    alt="image04" style={{ width: "18rem", height: "12rem" }}></img>
                </div>
                <div className="col-4 ps-3" id="img">
                    <img src="/media/images/farm05.webp" 
                    alt="image05" style={{ width: "18rem", height: "12rem" }}></img>
                </div>
                <div className="col-4 ps-4" id="img">
                    <img src="/media/images/farm06.jpg" 
                    alt="image06" style={{ width: "18rem", height: "12rem" }}></img>
                </div>
            </div>
            
            <div className="row mt-5">
                <div className="col-12 text-center">
                    <Link to="/new" className="btn btn-success btn-lg px-5 py-3 fs-5 shadow rounded-pill" style={{ fontWeight: 600, transition: 'all 0.3s ease-in-out' }} onMouseOver={(e) => { e.target.style.transform = 'translateY(-3px)'; e.target.style.boxShadow = '0 6px 12px rgba(40, 167, 69, 0.3)'; }} onMouseOut={(e) => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)'; }}>
                        Start Detecting Plant Disease &rarr;
                    </Link>
                </div>
            </div>

        </div>
     );
}

export default Hero;