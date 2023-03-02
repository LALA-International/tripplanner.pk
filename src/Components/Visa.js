import React, {useState, useEffect} from "react";
import Navbar from "../Components/Navbar";
import '../Components/tripplanner.css';
import '../Components/styles.css';
import {Link} from "react-router-dom";
import CompaniesLogo from "../Components/CompaniesLogo";
import Footer from "../Components/Footer";
import HomeCarousal from "../Components/HomeCarousal";
import '../Components/HomeCarousal.css';
import {popularDestination} from "./ProductData/popularDestination";
import "../Components/Visa/VisaSearchResultThailand";
import "../Components/Visa/VisaSearchResultMalaysia";
const Visa = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Visa | Tripplanner";
    }, [])

    const popularDestination = [
        {
            "UID": "1",
            "image": "../../assets/img/visa-img-2.png",
            "country": "Thiland",
            "price": "254",
            "currency": "SAR",
            "path": "/visa-search-resul-thailand"
        },
        {
            "UID": "2",
            "image": "../../assets/img/visa-img-3.png",
            "country": "India",
            "price": "254",
            "currency": "SAR",
            "path": "/visa-search-resul-malayshia"
        },
        {
            "UID": "3",
            "image": "../../assets/img/visa-img-4.png",
            "country": "China",
            "price": "254",
            "currency": "SAR",
        },
        {
            "UID": "4",
            "image": "../../assets/img/visa-img-5.png",
            "country": "Italy",
            "price": "254",
            "currency": "SAR",
        },
        {
            "UID": "5",
            "image": "../../assets/img/visa-img-6.png",
            "country": "Pakistan",
            "price": "254",
            "currency": "SAR",
        },
        {
            "UID": "6",
            "image": "../../assets/img/visa-img-7.png",
            "country": "United State of America",
            "price": "254",
            "currency": "SAR",
        },
        {
            "UID": "7",
            "image": "../../assets/img/visa-img-8.png",
            "country": "Thailand",
            "price": "254",
            "currency": "SAR",
        },


    ]
    return (
        <div>
            <Navbar/>

            <header className="masthead main-header visa-header mob-header-visa">
                <div className="container d-flex h-100 align-items-center">

                    <div className="search-form w-100 mob-margin-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12 col-lg-12 col-md-7 mb-md-2 mb-sm-0 mb-0">
                                    <div className="custom-dropdown cus-down-arrow pr-0">
                                        <button className="dropbtn">Return<i class="fa fa-angle-down"
                                                                             aria-hidden="true"></i></button>
                                        <div className="dropdown-content">
                                            <a href="#">Ony Way</a>
                                        </div>
                                    </div>

                                    <div className="custom-dropdown cus-down-arrow pr-0">
                                        <button className="dropbtn">Economy<i class="fa fa-angle-down"
                                                                              aria-hidden="true"></i></button>
                                        <div className="dropdown-content">
                                            <a href="#">Business</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-lg-12 col-md-12 col-12">
                                    <div className="row g-3 needs-validation main-search p-4 mt-2" novalidate>
                                        <div className="col-xl-3 col-lg-3 col-md-6 col-12 pt-lg-0 pt-4">
                                            <label className="form-label pl-3">Country Of Residence</label>
                                            <select className="form-control option">
                                                <option className="option">City Name</option>
                                                <option className="option">City Name</option>
                                                <option className="option">City Name</option>
                                            </select>
                                        </div>
                                        <div className="col-xl-2 col-lg-2 col-md-6 col-12 pt-lg-0 pt-4">
                                            <label className="form-label pl-3">Nationality</label>
                                            <select className="form-control option">
                                                <option>Pakistani</option>
                                                <option>Pakistani</option>
                                                <option>Pakistani</option>
                                            </select>
                                        </div>
                                        <div className="col-xl-3 col-lg-3 col-md-4 col-12 pt-lg-0 pt-4">
                                            <label className="form-label pl-3">Destintaion</label>
                                            <select className="form-control option">
                                                <option>Jeddah to Makkah</option>
                                                <option>Jeddah to Makkah</option>
                                                <option>Jeddah to Makkah</option>
                                            </select>
                                        </div>
                                        <div className="col-xl-2 col-lg-2 col-md-4 col-12 pt-lg-0 pt-4">
                                            <label className="form-label pl-3">Type of Visa</label>
                                            <select className="form-control option">
                                                <option>Type of Visa</option>
                                                <option>Type of Visa</option>
                                                <option>Type of Visa</option>
                                            </select>
                                        </div>
                                        <div className="col-xl-2 col-lg-2 col-md-4 col-12 pb-lg-0">
                                            <Link to="/visa-search-result">
                                                <button className="search-btn btn-primary w-100" type="submit">SEARCH
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </header>


            <section className="flight-det hotel-page visa-detail">
                <div className="container">
                    <h1 className="pb-5 text-center">we offer best visa services</h1>
                    <div className="row">
                        {popularDestination.map((trip, index) => (

                            <div className="col-lg-3 col-md-4 col-12">
                                <div className=""><img
                                    className="w-100"
                                    src={trip.image}
                                    alt=""
                                />
                                </div>
                                <div className="title mt-1 ml-1">{trip.country} - {trip.price} {trip.currency}</div>
                                <div className="sub-txt ml-1">UNITED STATE OF AMERICA</div>
                                {/*<Link to="{trip.link}">*/}
                                    <Link to={trip.path} key={trip.path}>
                                    <div className="book-now ml-1 mt-2 mb-5">
                                        <button>Book Now</button>
                                    </div>
                                </Link>
                            </div>

                        ))
                        }
                    </div>
                    {/*<div className="col-lg-3 col-md-4 col-12">*/}
                    {/*  <div className=""> <img className="w-100" src="../../assets/img/visa-img-2.png" /></div>*/}
                    {/*  <div className="title mt-1 ml-1">London  -  254 SAR</div>*/}
                    {/*  <div className="sub-txt ml-1">UNITED KINGDOM</div>*/}
                    {/*  <Link to="/visa-search-result"><div className="book-now ml-1 mt-2 mb-5"><button>Book Now</button></div> </Link>*/}
                    {/*</div>*/}
                    {/*<div className="col-lg-3 col-md-4 col-12">*/}
                    {/*  <div className=""> <img className="w-100" src="../../assets/img/visa-img-3.png" /></div>*/}
                    {/*  <div className="title mt-1 ml-1">Russia  -  254 SAR</div>*/}
                    {/*  <div className="sub-txt ml-1">UNITED STATE OF AMERICA</div>*/}
                    {/*  <Link to="/visa-search-result"><div className="book-now ml-1 mt-2 mb-5"><button>Book Now</button></div> </Link>*/}
                    {/*</div>*/}
                    {/*<div className="col-lg-3 col-md-4 col-12">*/}
                    {/*  <div className=""> <img className="w-100" src="../../assets/img/visa-img-4.png" /></div>*/}
                    {/*  <div className="title mt-1 ml-1">Canada  -  254 SAR</div>*/}
                    {/*  <div className="sub-txt ml-1">UNITED KINGDOM</div>*/}
                    {/*  <Link to="/visa-search-result"><div className="book-now ml-1 mt-2 mb-5"><button>Book Now</button></div> </Link>*/}
                    {/*</div>*/}
                    {/*<div className="col-lg-3 col-md-4 col-12 mt-lg-5 mt-md-0">*/}
                    {/*  <div className=""> <img className="w-100" src="../../assets/img/visa-img-5.png" /></div>*/}
                    {/*  <div className="title mt-1 ml-1">Greece  -  254 SAR</div>*/}
                    {/*  <div className="sub-txt ml-1">UNITED STATE OF AMERICA</div>*/}
                    {/*  <Link to="/visa-search-result"><div className="book-now ml-1 mt-2 mb-5"><button>Book Now</button></div> </Link>*/}
                    {/*</div>*/}
                    {/*<div className="col-lg-3 col-md-4 col-12 mt-lg-5 mt-md-0">*/}
                    {/*  <div className=""> <img className="w-100" src="../../assets/img/visa-img-6.png" /></div>*/}
                    {/*  <div className="title mt-1 ml-1">malaysia  -  254 SAR</div>*/}
                    {/*  <div className="sub-txt ml-1">Southeast Asia</div>*/}
                    {/*  <Link to="/visa-search-result"><div className="book-now ml-1 mt-2 mb-5"><button>Book Now</button></div> </Link>*/}
                    {/*</div>*/}
                    {/*<div className="col-lg-3 col-md-4 col-12 mt-5">*/}
                    {/*  <div className=""> <img className="w-100" src="../../assets/img/visa-img-7.png" /></div>*/}
                    {/*  <div className="title mt-1 ml-1">switzerland  -  254 SAR</div>*/}
                    {/*  <div className="sub-txt ml-1">Central Europe</div>*/}
                    {/*  <Link to="/visa-search-result"><div className="book-now ml-1 mt-2 mb-5"><button>Book Now</button></div> </Link>*/}
                    {/*</div>*/}
                    {/*<div className="col-lg-3 col-md-4 col-12 mt-5">*/}
                    {/*  <div className=""> <img className="w-100" src="../../assets/img/visa-img-8.png" /></div>*/}
                    {/*  <div className="title mt-1 ml-1">sweden  -  254 SAR</div>*/}
                    {/*  <div className="sub-txt ml-1">UNITED KINGDOM</div>*/}
                    {/*  <Link to="/visa-search-result"><div className="book-now ml-1 mt-2 mb-5"><button>Book Now</button></div> </Link>*/}
                    {/*</div>*/}


                </div>

                <CompaniesLogo/>

            </section>

            <Footer/>

        </div>
    )
}

export default Visa;

