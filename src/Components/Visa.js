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
import myImage1 from '../../src/Components/Visa/VisaImages/VisaBookingImages/new/thailand-visit-visa.jpg';
import myImage2 from '../../src/Components/Visa/VisaImages/VisaBookingImages/new/malaysia-visit-visa.jpg';
import myImage3 from '../../src/Components/Visa/VisaImages/VisaBookingImages/new/dubai-visit-visa.jpg';
import myImage4 from '../../src/Components/Visa/VisaImages/VisaBookingImages/new/azerbaijan-visit-visa.jpg';
import myImage5 from '../../src/Components/Visa/VisaImages/VisaBookingImages/new/bahrain-visit-visa.jpg';
import myImage6 from '../../src/Components/Visa/VisaImages/VisaBookingImages/new/singapore-visit-visa.jpg';
import myImage7 from '../../src/Components/Visa/VisaImages/VisaBookingImages/new/kenya-evisa.jpg';
import myImage8 from '../../src/Components/Visa/VisaImages/VisaBookingImages/new/nepal-visa-from -pakistan.jpg';
import myImage9 from '../../src/Components/Visa/VisaImages/VisaBookingImages/new/seychelles-visa.jpg';
import myImage10 from '../../src/Components/Visa/VisaImages/VisaBookingImages/new/Ivory-Coast-e-visa.jpg';
import myImage11 from '../../src/Components/Visa/VisaImages/VisaBookingImages/new/saudi-arabia-visit-visa.jpg';

const Visa = () => {

      const myImage1 = require('../../src/Components/Visa/VisaImages/VisaBookingImages/new/thailand-visit-visa.jpg');
      const myImage2 = require('../../src/Components/Visa/VisaImages/VisaBookingImages/new/malaysia-visit-visa.jpg');
      const myImage3 = require('../../src/Components/Visa/VisaImages/VisaBookingImages/new/dubai-visit-visa.jpg');
      const myImage4 = require('../../src/Components/Visa/VisaImages/VisaBookingImages/new/azerbaijan-visit-visa.jpg');
      const myImage5 = require('../../src/Components/Visa/VisaImages/VisaBookingImages/new/bahrain-visit-visa.jpg');
      const myImage6 = require('../../src/Components/Visa/VisaImages/VisaBookingImages/new/singapore-visit-visa.jpg');
      const myImage7 = require('../../src/Components/Visa/VisaImages/VisaBookingImages/new/kenya-evisa.jpg');
      const myImage8 = require('../../src/Components/Visa/VisaImages/VisaBookingImages/new/nepal-visa-from -pakistan.jpg');
      const myImage9 = require('../../src/Components/Visa/VisaImages/VisaBookingImages/new/seychelles-visa.jpg');
      const myImage10 = require('../../src/Components/Visa/VisaImages/VisaBookingImages/new/Ivory-Coast-e-visa.jpg');
      const myImage11 = require('../../src/Components/Visa/VisaImages/VisaBookingImages/new/saudi-arabia-visit-visa.jpg');
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Visa | Tripplanner";
    }, [])

    const popularDestination = [
        {
            "UID": "1",
            "image": myImage1,
            "country": "Thiland",
            "price": "254",
            "currency": "SAR",
            "path": "/visa-search-resul-thailand"
        },
        {
            "UID": "2",
            "image": myImage2,
            "country": "Malaysia",
            "price": "254",
            "currency": "SAR",
            "path": "/visa-search-resul-malayshia"
        },
        {
            "UID": "3",
            "image": myImage3,
            "country": "Dubai",
            "price": "254",
            "currency": "SAR",
            "path": "/visa-search-resul-dubai"
        },
        {
            "UID": "4",
            "image": myImage4,
            "country": "Azerbaijan",
            "price": "254",
            "currency": "SAR",
            "path": "/visa-search-resul-azerbaijan"

        },
        {
            "UID": "5",
            "image": myImage5,
            "country": "Bahrain",
            "price": "254",
            "currency": "SAR",
            "path": "/visa-search-resul-bahrain"
        },
        {
            "UID": "6",
            "image": myImage6,
            "country": "Singapore",
            "price": "254",
            "currency": "SAR",
            "path": "/visa-search-resul-singapore"
        },
        {
            "UID": "7",
            "image": myImage7,
            "country": "Kenya",
            "price": "254",
            "currency": "SAR",
            "path": "/visa-search-resul-kenya"
        },
        {
            "UID": "7",
            "image": myImage8,
            "country": "Nepal",
            "price": "254",
            "currency": "SAR",
            "path": "/visa-search-resul-nepal"

        },
        {
            "UID": "7",
            "image": myImage9,
            "country": "Seychelles",
            "price": "254",
            "currency": "SAR",
            "path": "/visa-search-resul-seychelles"

        }, {
            "UID": "7",
            "image": myImage10,
            "country": "Ivory",
            "price": "254",
            "currency": "SAR",
            "path": "/visa-search-resul-ivory"

        },{
            "UID": "7",
            "image": myImage11,
            "country": "Saudi Arabia",
            "price": "254",
            "currency": "SAR",
            "path": "/visa-search-resul-ivory-saudi-rabia"
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
                                    style={{ height: '350px',  }}
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

