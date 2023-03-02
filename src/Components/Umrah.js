import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import '../Components/tripplanner.css';
import '../Components/styles.css';
import { Link } from "react-router-dom";
import CompaniesLogo from "../Components/CompaniesLogo";
import Footer from "../Components/Footer";
import HomeCarousal from "../Components/HomeCarousal";
import '../Components/HomeCarousal.css';
import $ from 'jquery';
import Date from "../Components/Date";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Axios from "axios";
import {  useNavigate } from "react-router-dom";


const Umrah = () => {



    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Umrah | Tripplanner ";
    }, [])
     let navigate = useNavigate();
    const [bgColor, setBgColor] = useState(true);
    const [bgColor2, setBgColor2] = useState(false);
    const [bgColor3, setBgColor3] = useState(false);
    const [bgColor4, setBgColor4] = useState(false);
    const [bgColor5, setBgColor5] = useState(false);
    const [bgColor6, setBgColor6] = useState(false);


    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [show, setShow] = useState(false);
    const [departure, setDeparture] = useState([]);
    const [arrival, setArrival] = useState([]);
    const [visaYes, setVisaYes] = useState([]);
    const [visaNo, setVisaNo] = useState([]);
    const [wheelChairYes, setWheelChairYes] = useState([]);
    const [wheelChairNo, setWheelChairNo] = useState([]);
    const [ noOfTravelers, setNoOfTravelers] = useState([]);
    const [ yourCity, setYourCity] = useState([]);
    const [ nationality, setNationality] = useState([]);
    const [ noOfNights, setNoOfNights] = useState([]);
    const [ transportType, setTransportType] = useState([]);
    const [ YourNationality, setYourNationality] = useState([]);
    const [ starYourCity, setStarYourCity] = useState([]);

    const starSearchedItems = {YourNationality,starYourCity}

    const umraSearchedItems = {origin,destination,visaYes,visaNo,wheelChairYes,wheelChairNo,noOfTravelers,yourCity,nationality,noOfNights,transportType}
          const proceedItems = (key)=>{
            navigate(`/hotel-search-result`, { state: { key, umraSearchedItems } });
          }
          const SearchPackageItems = (key)=>{
            navigate(`/umrah-packages`, { state: { key, starSearchedItems } });
          }

    const activeStep = () => {
        setBgColor(true);
        setBgColor2(false);
        setBgColor3(false);
        setBgColor4(false);
        setBgColor5(false);
        setBgColor6(false);
    }


    const activeStep2 = () => {
        setBgColor(false);
        setBgColor2(true);
        setBgColor3(false);
        setBgColor4(false);
        setBgColor5(false);
        setBgColor6(false);
    }

    const activeStep3 = () => {
        setBgColor(false);
        setBgColor3(true);
        setBgColor2(false);
        setBgColor4(false);
        setBgColor5(false);
        setBgColor6(false);
    }
    const activeStep4 = () => {
        setBgColor(false);
        setBgColor2(false);
        setBgColor3(false);
        setBgColor4(true);
        setBgColor5(false);
        setBgColor6(false);
    }

    const activeStep5 = () => {
        setBgColor(false);
        setBgColor2(false);
        setBgColor3(false);
        setBgColor4(false);
        setBgColor5(true);
        setBgColor6(false);


    }


    const activeStep6 = () => {
        setBgColor(false);
        setBgColor2(false);
        setBgColor3(false);
        setBgColor4(false);
        setBgColor5(false);
        setBgColor6(true);
    }



    const [adult, setAdult] = useState(1);
    const [child, setChild] = useState(1);
    const [infant, setInfant] = useState(1);

    const adultMinus = () => {
        if (adult > 1) {
            setAdult(adult - 1);
        }
    }
    const adultPlus = () => {
        setAdult(adult + 1);
    }
    //    Child
    const childMinus = () => {
        if (child > 1) {
            setChild(child - 1);
        }
    }
    const childPlus = () => {
        setChild(child + 1);
    }

    const infantMinus = () => {
        if (infant > 1) {
            setInfant(infant - 1);
        }
    }
    const infantPlus = () => {
        setInfant(infant + 1);
    }





    const [noOfRows, setNoOfRows] = useState(1);
    const [deleteButton, setDeleteButton] = useState(false);


    const Increment = () => {
        setNoOfRows(noOfRows + 1);

        if (noOfRows >= 1) {
            setDeleteButton(true);
        }

    }


    const Decrement = () => {

        if (noOfRows == 1) {
            setNoOfRows(noOfRows - 0);
            setDeleteButton(false);
        }
        else {
            setNoOfRows(noOfRows - 1);
        }
    }



    const [noOfTransport, setNoOfTransport] = useState(1);
    const [deleteTransport, setDeleteTransport] = useState(false);


    const IncrementTransport = () => {
        setNoOfTransport(noOfTransport + 1);

        if (noOfTransport >= 1) {
            setDeleteTransport(true);
        }

    }


    const DecrementTransport = () => {

        if (noOfTransport == 1) {
            setNoOfTransport(noOfTransport - 0);
            setDeleteTransport(false);
        }
        else {
            setNoOfTransport(noOfTransport - 1);
        }
    }



    const [noOfFlight, setNoOfFlight] = useState(1);
    const [deleteFlight, setDeleteFlight] = useState(false);


    const IncrementFlight = () => {
        setNoOfFlight(noOfFlight + 1);

        if (noOfFlight >= 1) {
            setDeleteFlight(true);
        }

    }


    const DecrementFlight = () => {

        if (noOfFlight == 1) {
            setNoOfFlight(noOfFlight - 0);
            setDeleteFlight(false);
        }
        else {
            setNoOfFlight(noOfFlight - 1);
        }
    }

    const [activeBtn, setActiveBtn] = useState(false);

    const active = () => {
        setActiveBtn(true);
    }


    const [bgColorBtn, setBgColorBtn] = useState(true);
    const [bgColorBtn2, setBgColorBtn2] = useState(false);

    const activeBtn1 = () => {
        setBgColorBtn(true);
        setBgColorBtn2(false);
    }


    const activeBtn2 = () => {
        setBgColorBtn(false);
        setBgColorBtn2(true);

    }

    useEffect(() => {
        const url = "https://api.tripplanner.ae/web/airports?key=UXVpUGVja0BBUElAS0VZQEZPUkBEQVRBQE1JTklORzkxNTY2";
        Axios.post(url).then(function (result) {
            setDeparture(result.data.data);
            setArrival(result.data.data);
        });
    }, [])


    return (
        <div>
            <Navbar />

            <header className="masthead main-header umrah-header ">
                <div className="container" >
                    <div className="row pb-2">
                        <div className="col-lg-6 col-md-6 col-12 mb-5">
                            <div className="umrah-pack-type" >
                                <ul className="nav nav-pills umrah-nav-pills ml-0 ml-lg-3 ml-md-3 " role="tablist">
                                    <li role="presentation" className="nav-item">
                                        <a className={bgColorBtn ? "nav-link  active" : "nav-link nav-bg"} onClick={activeBtn1} href="#home1" role="tab" data-toggle="tab" aria-expanded="true">Customize Umrah</a>
                                    </li>
                                    <li className="nav-item dp-sm-none" >
                                        <a className={bgColorBtn2 ? "nav-link  active" : "nav-link nav-bg"} onClick={activeBtn2} href="#menu1" role="tab" data-toggle="tab" aria-expanded="false">Umrah Package</a>
                                    </li>
                                </ul>
                                { /*        <ul className="nav nav-pills umrah-nav-pills ml-0 ml-lg-3 ml-md-3 ">
                                       <li className="nav-item t-white">
                                           <a className="nav-link tab-nav-link tab-pad active t-white"  data-toggle="pill" href="#home1">Customize Umrah</a>
                                       </li>
                                       <li className="nav-item tab-nav-item t-white"  >
                                           <a className="nav-link tab-nav-link tab-pad"   data-toggle="pill" href="#menu1">Umrah Package
                                           </a>
                                       </li>
                                   </ul>
 */}
                            </div>
                        </div>

                    </div>
                    <div className="tab-content">
                        <div id="home1" className="tab-pane active">

                            <div className="search-form w-100 umrah-search-frm mt-0 ">
                                <div className="row d-flex justify-content-center active" >
                                    <div className="col-md-12 " >
                                        <div className="container">
                                            <div className="wizard ">

                                                <div className="wizard-inner" >
                                                    <div className="connecting-line"></div>
                                                    <ul className="nav nav-tabs text-center" role="tablist">
                                                        <li role="presentation" onClick={activeStep} className={bgColor ? "active" : "disabled text-center"} >
                                                            <a href="#step1" data-toggle="tab" aria-controls="step1" role="tab" aria-expanded="true">
                                                                <span className="round-tab">1</span>
                                                                <i>City</i>
                                                            </a>
                                                        </li>
                                                        <li role="presentation" onClick={activeStep2} className={bgColor2 ? "active" : "disabled text-center"} >
                                                            <a href="#step2" data-toggle="tab" aria-controls="step2" role="tab" aria-expanded="false">
                                                                <span className="round-tab">2</span>
                                                                <i>Your Stay</i></a>
                                                        </li>
                                                        <li role="presentation" onClick={activeStep3} className={bgColor3 ? "active" : "disabled text-center"} >
                                                            <a href="#step3" data-toggle="tab" aria-controls="step3" role="tab"><span className="round-tab">3</span> <i>Transport</i></a>
                                                        </li>
                                                        <li role="presentation" onClick={activeStep4} className={bgColor4 ? "active" : "disabled text-center"} >
                                                            <a href="#step4" data-toggle="tab" aria-controls="step4" role="tab"><span className="round-tab">4</span> <i>Flight</i></a>
                                                        </li>
                                                        <li role="presentation" onClick={activeStep5} className={bgColor5 ? "active" : "disabled text-center"} >
                                                            <a href="#step5" data-toggle="tab" aria-controls="step5" role="tab"><span className="round-tab">5</span> <i>Visa</i></a>
                                                        </li>
                                                        <li role="presentation" onClick={activeStep6} className={bgColor6 ? "active" : "disabled text-center"} >
                                                            <a href="#step6" data-toggle="tab" aria-controls="step6" role="tab"><span className="round-tab">6</span> <i>Other Services</i></a>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <form role="form" action="index.html" className="login-box " method="post">
                                                    <div className="tab-content" id="main_form" >
                                                        <div className="tab-pane active step1" role="tabpanel" id="step1" style={{ marginTop: "148px" , marginBottom: "10%" }} >
                                                            <div className="search-form2 w-100 umrah-main-search2 " >
                                                                <div className="container">
                                                                    <div className="header-main-heading pb-2">Departure City</div>
                                                                    <div className="row">
                                                                        <div className="col-lg-12 col-md-12 col-12">
                                                                            <div className="row g-3 needs-validation main-search p-4 mt-2"  novalidate>
                                                                                <div className="col-xl-4 col-lg-4 col-md-4 col-12 pt-lg-0 pt-4">
                                                                                    <label className="form-label pl-3">Your City</label>
                                                                                    {/*<input type="text" name="city" placeholder="Enter City Name" className="form-control" />*/}
                                                                                    {/*<Autocomplete*/}
                                                                                    {/*    disablePortal*/}
                                                                                    {/*    id="combo-box-demo"*/}
                                                                                    {/*    options={top100Films}*/}
                                                                                    {/*    sx={{ width: 300 }}*/}
                                                                                    {/*    renderInput={(params) => <TextField {...params} label="name" />}*/}
                                                                                    {/*/>*/}
                                                                                    <Stack spacing={2} >
                                                                                        <Autocomplete
                                                                                            onChange={(e) => setYourCity(e.target.value)}
                                                                                            id="free-solo-demo"
                                                                                            freeSolo
                                                                                            options={top100Films.map((option) => option.title)}
                                                                                            renderInput={(params) => <TextField {...params} label="Your City" />}
                                                                                        />

                                                                                    </Stack>
                                                                                </div>
                                                                                <div className="col-xl-3 col-lg-3 col-md-4 col-12 pt-lg-0 pt-4">
                                                                                    <label className="form-label pl-3">Nationality</label>
                                                                                    <Stack spacing={2} >
                                                                                        <Autocomplete
                                                                                            onChange={(e) => setNationality(e.target.value)}
                                                                                            id="free-solo-demo"
                                                                                            freeSolo
                                                                                            options={top100Films.map((option) => option.title)}
                                                                                            renderInput={(params) => <TextField {...params} label="Nationality" />}
                                                                                        />

                                                                                    </Stack>
                                                                                </div>
                                                                                <div className="col-xl-3 col-lg-3 col-md-3 col-12 pt-lg-0">
                                                                                    <label className="form-label pl-3">No of Travelers</label>
                                                                                    <div className="search-dropdown dropdown-passenger">
                                                                                        <div className="dropbtn">
                                                                                            {/*<input className="form-control form-control-lg" type="text" placeholder="ADT 1, CNN 0, INF 0" />*/}
                                                                                            <input className="form-control" type="text" name="NoOfTravelers"
                                                                                                 onChange={(e) => setNoOfTravelers(e.target.value)}
                                                                                                   placeholder="ADT 1, CNN 0, INF 0"
                                                                                                   value={child}
                                                                                                   required />
                                                                                        </div>
                                                                                        <div className="dropdown-content">
                                                                                            <div className="row">
                                                                                                <div className="col-lg-4 col-md-4 col-sm-4">
                                                                                                    <label>Adult</label>
                                                                                                </div>
                                                                                                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8 text-center">
                                                                                                    <div className="qty">
                                                                                                        <span className="minus bg-dark adultMinus" onClick={adultMinus}>-</span>
                                                                                                        <input type="number" className="count" id="adult" name="adult" value={adult} />
                                                                                                        <span className="plus bg-dark adultPlus" onClick={adultPlus}>+</span>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="col-lg-12 col-md-12"><hr /></div>
                                                                                            </div>
                                                                                            <div className="row">
                                                                                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                                                                                    <label>Child</label>
                                                                                                </div>
                                                                                                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8 text-center">
                                                                                                    <div className="qty">
                                                                                                        <span className="minus bg-dark childMinus" onClick={childMinus}>-</span>
                                                                                                        <input type="number" className="count" id="child" name="child" value={child} />
                                                                                                        <span className="plus bg-dark childPlus" onClick={childPlus}>+</span>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="col-lg-12 col-md-12"><hr /></div>
                                                                                            </div>
                                                                                            <div className="row">
                                                                                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                                                                                    <label>Infant</label>
                                                                                                </div>
                                                                                                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8 text-center">
                                                                                                    <div className="qty">
                                                                                                          <span className="minus bg-dark infantMinus" onClick={infantMinus}>-</span>
                                                                                                        <input type="number" className="count" id="infant" name="infant" value={infant} />
                                                                                                        <span className="plus bg-dark infantPlus" onClick={infantPlus}>+</span>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-xl-2 col-lg-2 text-right col-md-2 col-12 pb-lg-0 mt-2">
                                                                                    <div className="list-inline pull-right text-right count-btn-nxt w-100">
                                                                                        <a  href="#step2" data-toggle="tab"  aria-controls="step2" role="tab" aria-expanded="false" type="button" onClick={activeStep2} className="btn a  default-btn search-btn w-100">Next</a>

                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="tab-pane step2" role="tabpanel" id="step2" >

                                                            <div className="search-form2 w-100 umrah-main-search2" >
                                                                <div className="container" >
                                                                    <div className="header-main-heading pb-2">Hotel</div>
                                                                    =
                                                                    <div className="row">
                                                                        <div className="col-lg-12 col-md-12 col-12">
                                                                            {/*<div className="row g-3 needs-validation main-search scrolling p-4 mt-2" novalidate >*/}
                                                                                <div className="row g-3 needs-validation main-search   p-4 mt-2" novalidate >
                                                                                {[...Array(noOfRows)].map((elementInArray, index) => {
                                                                                    return (
                                                                                        <div className="col-sm-12 col-lg-12 col-md-12">
                                                                                            {deleteButton ?
                                                                                                <div className="row">
                                                                                                    <div className="col-sm-12 col-lg-12 col-xl-12 text-right">
                                                                                                        <button type="button" onClick={Decrement} className="btn ml-1 mt-4 nav-next-btn  "><span className="fa fa-trash"></span> </button>
                                                                                                    </div>
                                                                                                </div>
                                                                                                :
                                                                                                <p></p>
                                                                                            }
                                                                                            <div className="row">
                                                                                                <div className="col-xl-3 col-lg-3 col-md-2 col-12 pt-lg-0 pt-4">
                                                                                                    <label className="form-label pl-3">Your City</label>
                                                                                                    {/*<input type="text" className="form-control" placeholder=" Enter City " required />*/}
                                                                                                    <Stack spacing={2} >
                                                                                                        <Autocomplete
                                                                                                            onChange={(e) => setYourCity(e.target.value)}
                                                                                                            id="free-solo-demo"
                                                                                                            freeSolo
                                                                                                            options={top100Films.map((option) => option.title)}
                                                                                                            renderInput={(params) => <TextField {...params} label="Your City" />}
                                                                                                        />
                                                                                                    </Stack>
                                                                                                </div>
                                                                                                <div className="col-xl-3 col-lg-3 col-md-2 col-12 pt-lg-0 pt-4">
                                                                                                    <label className="form-label pl-3">Check In Check Out</label>
                                                                                                    <Date />
                                                                                                </div>
                                                                                                <div className="col-xl-3 col-lg-3 col-md-4 col-12 pt-lg-0 pt-4">
                                                                                                    <label className="form-label pl-3">No of Nights</label>
                                                                                                    {/*<select className="form-control option">*/}
                                                                                                    {/*    <option>1</option>*/}
                                                                                                    {/*    <option>2</option>*/}
                                                                                                    {/*    <option>3</option>*/}
                                                                                                    {/*</select>*/}
                                                                                                    <Stack spacing={2} >
                                                                                                        <Autocomplete
                                                                                                            onChange={(e) => setNoOfNights(e.target.value)}
                                                                                                            id="free-solo-demo"
                                                                                                            freeSolo
                                                                                                            options={top100Films.map((option) => option.NoOfNights)}
                                                                                                            renderInput={(params) => <TextField {...params} label="No of Nights" />}
                                                                                                        />
                                                                                                    </Stack>
                                                                                                </div>
                                                                                                <div className="col-xl-3 col-lg-3 col-md-3 col-12 pt-lg-0">RoomType
                                                                                                    <label className="form-label pl-3">Room Type</label>
                                                                                                    <div className="search-dropdown dropdown-passenger">
                                                                                                        <div className="dropbtn">
                                                                                                            {/*<input className="form-control form-control-lg" type="text" placeholder="Single, Double , Quad" />*/}
                                                                                                            <input className="form-control" type="text" name="middname"
                                                                                                                // onChange={(e) => setMname(e.target.value)}
                                                                                                                   placeholder="Single, Double , Quad"
                                                                                                                   required />
                                                                                                        </div>
                                                                                                        <div className="dropdown-content">
                                                                                                            <div className="row">
                                                                                                                <div className="col-lg-4 col-md-4 col-sm-4">
                                                                                                                    <label>Single</label>
                                                                                                                </div>
                                                                                                                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8 text-center">
                                                                                                                    <div className="qty">
                                                                                                                        <span className="minus bg-dark adultMinus" onClick={adultMinus}>-</span>
                                                                                                                        <input type="number" className="count" id="adult" name="Single" value={adult} />
                                                                                                                        <span className="plus bg-dark adultPlus" onClick={adultPlus}>+</span>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                                <div className="col-lg-12 col-md-12"><hr /></div>
                                                                                                            </div>
                                                                                                            <div className="row">
                                                                                                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                                                                                                    <label>Double</label>
                                                                                                                </div>
                                                                                                                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8 text-center">
                                                                                                                    <div className="qty">
                                                                                                                        <span className="minus bg-dark childMinus" onClick={childMinus}>-</span>
                                                                                                                        <input type="number" className="count" id="child" name="double" value={child} />
                                                                                                                        <span className="plus bg-dark childPlus" onClick={childPlus}>+</span>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                                <div className="col-lg-12 col-md-12"><hr /></div>
                                                                                                            </div>
                                                                                                            <div className="row">
                                                                                                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                                                                                                    <label>Quad</label>
                                                                                                                </div>
                                                                                                                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8 text-center">
                                                                                                                    <div className="qty">
                                                                                                                        <span className="minus bg-dark infantMinus" onClick={infantMinus}>-</span>
                                                                                                                        <input type="number" className="count" id="infant" name="quad" value={infant} />
                                                                                                                        <span className="plus bg-dark infantPlus" onClick={infantPlus}>+</span>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    );
                                                                                })}
                                                                                <div className="col-sm-7 col-lg-7 col-xl-7">
                                                                                </div>
                                                                                <div className="col-xl-5 col-lg-5 col-md-5 col-12 pb-lg-0 mt-1 text-right">
                                                                                    <a id="rowAdder" type="button" onClick={Increment} className="btn mr-1 remove-bg-btn search-btn back-btn w-25">+ Hotel</a>
                                                                                    <a href="#step1" data-toggle="tab" aria-controls="step1" role="tab" aria-expanded="false" type="button" onClick={activeStep} className="btn mr-1  prev-step1 search-btn back-btn w-25">Back</a>
                                                                                    <a href="#step3" data-toggle="tab" aria-controls="step3" role="tab" aria-expanded="false" type="button" onClick={activeStep3} className="btn   next-step1 default-btn search-btn w-25" >Next</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="tab-pane step3" role="tabpanel" id="step3" >
                                                            <div className="search-form2 w-100 umrah-main-search2">
                                                                <div className="container">
                                                                    <div className="header-main-heading pb-2">Transport</div>
                                                                    <div className="row">
                                                                        <div className="col-lg-12 col-md-12 col-12">
                                                                            {/*<div className="row g-3 needs-validation main-search scrolling p-4 mt-2" novalidate>*/}
                                                                                <div className="row g-3 needs-validation main-search  p-4 mt-2" novalidate >
                                                                                {[...Array(noOfTransport)].map((elementInArray, index) => {
                                                                                    return (
                                                                                        <div className="col-sm-12 col-lg-12 col-md-12">
                                                                                            {deleteTransport ?
                                                                                                <div className="row">
                                                                                                    <div className="col-sm-12 col-lg-12 col-xl-12 text-right">
                                                                                                        <button type="button" onClick={DecrementTransport} className="btn ml-1 mt-4 nav-next-btn  "><span className="fa fa-trash"></span> </button>
                                                                                                    </div>
                                                                                                </div>
                                                                                                :
                                                                                                <p></p>
                                                                                            }
                                                                                            <div className="row">
                                                                                                <div className="col-xl-4 col-lg-4 col-md-3 col-12 pt-lg-0 pt-4">
                                                                                                    <label className="form-label pl-3">Transport Type</label>
                                                                                                    {/*<select className="form-control option">*/}
                                                                                                    {/*    <option>4 Seater Sedane</option>*/}
                                                                                                    {/*    <option>7 Seater GMC</option>*/}
                                                                                                    {/*    <option>12 Seater Mini Bus</option>*/}
                                                                                                    {/*    <option>24 Seater Coaster Bus</option>*/}
                                                                                                    {/*</select>*/}
                                                                                                    <Stack spacing={2} >
                                                                                                        <Autocomplete
                                                                                                            onChange={(e) => setTransportType(e.target.value)}
                                                                                                            id="free-solo-demo"
                                                                                                            freeSolo
                                                                                                            options={top100Films.map((option) => option.title)}
                                                                                                            renderInput={(params) => <TextField {...params} label="Transport Type" />}
                                                                                                        />
                                                                                                    </Stack>
                                                                                                </div>
                                                                                                <div className="col-xl-4 col-lg-4 col-md-3 col-12 pt-lg-0 pt-4">
                                                                                                    <label className="form-label pl-3">Wheel Type</label>
                                                                                                    {/*<select className="form-control option">*/}
                                                                                                    {/*    <option>Vehicle Type</option>*/}
                                                                                                    {/*    <option>Economy Car</option>*/}
                                                                                                    {/*    <option>Standard Car</option>*/}
                                                                                                    {/*    <option>Business Cars</option>*/}
                                                                                                    {/*    <option>Economy GMC</option>*/}
                                                                                                    {/*</select>*/}
                                                                                                    <Stack spacing={2} >
                                                                                                        <Autocomplete
                                                                                                            onChange={(e) => setYourCity(e.target.value)}
                                                                                                            id="free-solo-demo"
                                                                                                            freeSolo
                                                                                                            options={top100Films.map((option) => option.title)}
                                                                                                            renderInput={(params) => <TextField {...params} label="Wheel Type" />}
                                                                                                        />
                                                                                                    </Stack>
                                                                                                </div>
                                                                                                <div className="col-xl-4 col-lg-4 col-md-3 col-12 pt-lg-0 pt-4">
                                                                                                    <label className="form-label pl-3">Sector</label>
                                                                                                    {/*<select className="form-control option">*/}
                                                                                                    {/*    <option>Jeddah Airport to Makkah</option>*/}
                                                                                                    {/*    <option>Jeddah Airport to Medina</option>*/}
                                                                                                    {/*    <option>Medina to Medina Airport</option>*/}
                                                                                                    {/*    <option>Medina to Jeddah Airport</option>*/}
                                                                                                    {/*    <option>Medina to Makkah</option>*/}
                                                                                                    {/*</select>*/}
                                                                                                    <Stack spacing={2} >
                                                                                                        <Autocomplete
                                                                                                            onChange={(e) => setYourCity(e.target.value)}
                                                                                                            id="free-solo-demo"
                                                                                                            freeSolo
                                                                                                            options={top100Films.map((option) => option.title)}
                                                                                                            renderInput={(params) => <TextField {...params} label="Sector" />}
                                                                                                        />
                                                                                                    </Stack>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    );
                                                                                })}
                                                                                <div className="col-lg-8 col-xl-8">
                                                                                </div>
                                                                                <div className="col-xl-4 text-right col-lg-4 col-md-4 col-12 pb-lg-0 mt-1">
                                                                                    <a type="button" onClick={IncrementTransport} className="btn mr-2 remove-bg-btn search-btn back-btn ">+ Transport</a>
                                                                                    <a href="#step2" data-toggle="tab" aria-controls="step1" role="tab" aria-expanded="false" type="button" onClick={activeStep2} className="btn mr-1 a prev-step1 search-btn back-btn w-25">Back</a>
                                                                                    <a href="#step4" data-toggle="tab" aria-controls="step3" role="tab" aria-expanded="false" type="button" onClick={activeStep4} className="btn a next-step1 default-btn search-btn w-25">Next</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="tab-pane step3" role="tabpanel" id="step4">
                                                            <div className="search-form2 w-100 umrah-main-search2">
                                                                <div className="container">
                                                                    <div className="header-main-heading pb-2">Flight</div>
                                                                    <div className="row">
                                                                        <div className="col-lg-12 col-md-12 col-12">
                                                                            {/*<div className="row g-3 needs-validation main-search scrolling p-4 mt-2" novalidate >*/}
                                                                            <div className="row g-3 needs-validation  main-search p-4 mt-2" novalidate>
                                                                                {[...Array(noOfFlight)].map((elementInArray, index) => {
                                                                                    return (
                                                                                        <div className="col-sm-12 col-lg-12 col-md-12">
                                                                                            {deleteFlight ?
                                                                                                <div className="row">
                                                                                                    <div className="col-sm-12 col-lg-12 col-xl-12 text-right">
                                                                                                        <button type="button" onClick={DecrementFlight} className="btn ml-1 mr-1 mt-4 nav-next-btn  "><span className="fa fa-trash"></span> </button>
                                                                                                    </div>
                                                                                                </div>
                                                                                                :
                                                                                                <p></p>
                                                                                            }
                                                                                            <div className="row">
                                                                                                <div className="col-xl-4 col-lg-4 col-md-3 col-12 pt-lg-0 pt-4">
                                                                                                    <label className="form-label pl-3">Departure Airport</label>
                                                                                                    <div className="dep-icon d-none d-lg-block"> <img className="" src="assets/img/deperture-icon.png" /> </div>
                                                                                                    {/*<input type="text" className="form-control" placeholder=" Islamabad (ISB)... " required />*/}
                                                                                                    <Stack spacing={2} >
                                                                                                        <Autocomplete
                                                                                                            onChange={(e) => setYourCity(e.target.value)}
                                                                                                            freeSolo
                                                                                                            id="free-solo-2-demo"
                                                                                                            disableClearable
                                                                                                            onChange={(event, newValue) => {
                                                                                                                setOrigin(newValue);
                                                                                                            }}
                                                                                                            options={departure.map((option) => option.Code + ' - ' + option.Name + ' ' + ' ' + option.CountryName)} renderInput={(params) => {
                                                                                                            // console.log(params);
                                                                                                            return (
                                                                                                                <TextField
                                                                                                                    {...params}
                                                                                                                    label=" Going Airport..."
                                                                                                                    InputProps={{
                                                                                                                        ...params.InputProps,
                                                                                                                        type: 'search',
                                                                                                                    }}
                                                                                                                    // error={origin === "" ? true : false}
                                                                                                                    helperText={!origin ? <span style={{ color: "red" }}>{show && "Origin field is required"}</span> : ""}
                                                                                                                />
                                                                                                            )
                                                                                                        }}
                                                                                                        />
                                                                                                        {/* <small >{errors.origin?.message}</small> */}
                                                                                                    </Stack>
                                                                                                </div>
                                                                                                <div className="col-xl-4 col-lg-4 col-md-3 col-12 pt-lg-0 pt-4">
                                                                                                    <label className="form-label pl-3">Arrival Airport</label>
                                                                                                    <div className="dep-icon d-none d-lg-block"> <img className="" src="assets/img/location-icon.png" /> </div>
                                                                                                    {/*<input type="text" className="form-control" placeholder=" Going Airport..." required />*/}
                                                                                                    <Stack spacing={2}>

                                                                                                        <Autocomplete
                                                                                                            freeSolo
                                                                                                            id="free-solo-2-demo"
                                                                                                            disableClearable
                                                                                                            onChange={(event, newValue) => {
                                                                                                                setDestination(newValue);
                                                                                                            }}
                                                                                                            options={arrival.map((option) => option.Code + ' - ' + option.Name + ' ' + ' ' + option.CountryName)}
                                                                                                            renderInput={(params) => (
                                                                                                                <TextField
                                                                                                                    {...params}
                                                                                                                    label=" Arrival Airport..."

                                                                                                                    InputProps={{
                                                                                                                        ...params.InputProps,
                                                                                                                        type: 'search',
                                                                                                                        style: {
                                                                                                                            color: "black",
                                                                                                                        },
                                                                                                                    }}
                                                                                                                    // error={destination === "" ? true : false}
                                                                                                                    helperText={!destination ? <span style={{ color: "red" }}>{show && "Destination field is required"}</span> : ""}
                                                                                                                />
                                                                                                            )}
                                                                                                        />
                                                                                                    </Stack>
                                                                                                </div>
                                                                                                <div className="col-xl-4 col-lg-4 col-md-3 col-12 pt-lg-0 pt-4">
                                                                                                    <label className="form-label pl-3">Departure/Return Date</label>
                                                                                                    <Date />
                                                                                                </div>

                                                                                            </div></div>
                                                                                    );
                                                                                })}

                                                                                <div className="col-sm-8">
                                                                                </div>
                                                                                <div className="col-xl-4 text-right col-lg-4 col-md-3 col-12 pb-lg-0 pb-4 mt-1">
                                                                                    <a type="button" onClick={IncrementFlight} className="btn mr-1 remove-bg-btn search-btn back-btn ">+ Flight</a>
                                                                                    <a href="#step3" data-toggle="tab" aria-controls="step1" role="tab" aria-expanded="false" type="button" onClick={activeStep3} className="btn mr-1 a prev-step1 search-btn back-btn w-25">Back</a>
                                                                                    <a href="#step5" data-toggle="tab" aria-controls="step3" role="tab" aria-expanded="false" type="button" onClick={activeStep5} className="btn a next-step1 default-btn search-btn w-25">Next</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        <div className="tab-pane step5" role="tabpanel" id="step5" style={{ marginTop: "158px" }}>
                                                            <div className="search-form1 w-100 umrah-main-search1" >
                                                                <div className="container" >
                                                                    <div className="header-main-heading pb-2">Include Visa</div>
                                                                    <div className="row">
                                                                        <div className="col-lg-12 col-md-12 col-12">
                                                                            <div className="row g-3 needs-validation main-search p-4 mt-2" novalidate>
                                                                                <div className="col-xl-4 col-lg-4 col-md-4 col-12 pt-lg-0 pt-4">
                                                                                    <label className="form-label pl-3">Visa</label>
                                                                                    {/*<select className="form-control option">*/}
                                                                                    {/*    <option>Yes</option>*/}
                                                                                    {/*    <option>No</option>*/}
                                                                                    {/*</select>*/}
                                                                                    <select className="form-control option">
                                                                                        <option onClick={(e) => { setVisaYes(e.target.getAttribute('data-value')) }}>Yes</option>
                                                                                        <option onClick={(e) => { setVisaNo(e.target.getAttribute('data-value')) }}>No</option>

                                                                                    </select>
                                                                                </div>
                                                                                <div className="col-xl-3 col-lg-3 col-md-3 col-12 pb-lg-0 mt-1">

                                                                                    <a href="#step4" data-toggle="tab" aria-controls="step4" role="tab" aria-expanded="false" type="button" onClick={activeStep4} className="btn a mr-1 prev-step1 search-btn back-btn w-25">Back</a>
                                                                                    <a href="#step6" data-toggle="tab" aria-controls="step6" role="tab" aria-expanded="false" type="button" onClick={activeStep6} className="btn a next-step1 default-btn search-btn w-25">Next</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        <div className="tab-pane step6" role="tabpanel" id="step6" style={{ marginTop: "158px" }}>
                                                            <div className="search-form2 w-100 umrah-main-search2" >
                                                                <div className="container">
                                                                    <div className="header-main-heading pb-2">Other Services</div>
                                                                    <div className="row">
                                                                        <div className="col-lg-12 col-md-12 col-12">
                                                                            <div className="row g-3 needs-validation main-search p-4 mt-2" novalidate>
                                                                                <div className="col-xl-4 col-lg-4 col-md-4 col-12 pt-lg-0 pt-4">
                                                                                    <label className="form-label pl-3">Wheel Chair</label>
                                                                                    <select className="form-control option">
                                                                                        <option onClick={(e) => { setWheelChairYes(e.target.getAttribute('data-value')) }}>Yes</option>
                                                                                        <option onClick={(e) => { setWheelChairNo(e.target.getAttribute('data-value')) }}>No</option>

                                                                                    </select>
                                                                                </div>
                                                                                <div className="col-xl-2 col-lg-2 col-md-2 col-12 pb-lg-0 mt-1">
                                                                                    {/*<Link to="/hotel-search-result" className="a">*/}
                                                                                        <div className="btn search-btn w-100 text-center a" onClick={()=> proceedItems()} >PROCEED</div>
                                                                                    {/*</Link>*/}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className="clearfix"></div>
                                                    </div>

                                                </form>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>




                        </div>

                        <div id="menu1" className="tab-pane ">

                            <div className="search-form w-100 umrah-search-frm mt-0">
                                <div className="container">
                                    <div className="header-main-heading pb-2">Star Packages</div>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-12">
                                            <div className="row g-3 needs-validation main-search p-4 mt-2" novalidate style={{ marginBottom: "12%"}}>
                                                <div className="col-xl-3 col-lg-3 col-md-3 col-12 pt-lg-0 pt-4">
                                                    <label className="form-label pl-3">Your City</label>
                                                    {/*<input type="text" className="form-control" value=" Enter City Name" required />*/}
                                                    <Stack spacing={2} >
                                                        <Autocomplete
                                                            onChange={(e) => setStarYourCity(e.target.value)}
                                                            id="Nationality"
                                                            freeSolo
                                                            options={top100Films.map((option) => option.title)}
                                                            renderInput={(params) => <TextField {...params} label="Your City" />}
                                                        />

                                                    </Stack>
                                                </div>
                                                <div className="col-xl-3 col-lg-3 col-md-3 col-12 pt-lg-0 pt-4">
                                                    <label className="form-label pl-3">Nationality</label>
                                                    {/*<input type="text" className="form-control" value=" Enter Nationality" required />*/}
                                                    <Stack spacing={2} >
                                                        <Autocomplete
                                                            onChange={(e) => setYourNationality(e.target.value)}
                                                            id="Nationality"
                                                            freeSolo
                                                            options={top100Films.map((option) => option.title)}
                                                            renderInput={(params) => <TextField {...params} label="Your City" />}
                                                        />

                                                    </Stack>
                                                </div>
                                                <div className="col-xl-4 col-lg-4 col-md-4 col-12 pt-lg-0 pt-4">
                                                    <label className="form-label pl-3">No of Travelers</label>
                                                    <div className="dpt-icon custom-border">
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <div className="main-input">
                                                                    <div className="search-dropdown dropdown-passenger">
                                                                        <div className="dropbtn">
                                                                            <input className="form-control form-control-lg" type="text" placeholder="ADT 1, CNN 0, INF 0" />
                                                                        </div>
                                                                        <div className="dropdown-content">
                                                                            <div className="row">
                                                                                <div className="col-lg-4 col-md-4 col-sm-4">
                                                                                    <label>Adult</label>
                                                                                </div>
                                                                                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8 text-center">
                                                                                    <div className="qty">
                                                                                        <span className="minus bg-dark adultMinus1">-</span>
                                                                                        <input type="number" className="count" id="adult1" name="adult" value="1" />
                                                                                        <span className="plus bg-dark adultPlus1">+</span>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-lg-12 col-md-12"><hr /></div>
                                                                            </div>
                                                                            <div className="row">
                                                                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                                                                    <label>Child</label>
                                                                                </div>
                                                                                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8 text-center">
                                                                                    <div className="qty">
                                                                                        <span className="minus bg-dark childMinus1">-</span>
                                                                                        <input type="number" className="count" id="child1" name="child" value="1" />
                                                                                        <span className="plus bg-dark childPlus1">+</span>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-lg-12 col-md-12"><hr /></div>
                                                                            </div>
                                                                            <div className="row">
                                                                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                                                                    <label>Infant</label>
                                                                                </div>
                                                                                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8 text-center">
                                                                                    <div className="qty">
                                                                                        <span className="minus bg-dark infantMinus1">-</span>
                                                                                        <input type="number" className="count" name="infant" id="infant1" value="1" />
                                                                                        <span className="plus bg-dark infantPlus1">+</span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>



                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-2 col-lg-2 col-md-2 col-12 pb-lg-0">
                                                {/*    /!*<Link to="/umrah-packages" >*!/*/}
                                                        <button className="search-btn  w-100" type="submit" onClick={()=> SearchPackageItems()} >SEARCH</button>
                                                {/*    </Link>*/}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </header>


            <section className="flight-det umrah-main">
                <div className="container">

                    <h1 className="pb-5">Your trusted Hajj/Umrah agents based in UAE</h1>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="image-box">
                                <div className="name-desc hover-1 image-box rounded">
                                    <img className="w-100" src="../../assets/img/umrah1.png" alt="" />
                                    <div className="hover-1-content p-2">
                                        <Link to="/umrah-packages"><div className="title title1 mt-1 ml-1">Umrah</div></Link>
                                        <p className="hover-1-description sub-txt mb-0"><a><strong>Lorem ipsum dolor sit amet</strong> </a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="image-box">
                                <div className="name-desc hover-1 image-box rounded">
                                    <img className="w-100" src="../../assets/img/umrah2.png" alt="" />
                                    <div className="hover-1-content p-2">
                                        <Link to="/hajj-packages"><div className="title title1 mt-1 ml-1">Hajj PAckages</div></Link>
                                        <p className="hover-1-description sub-txt mb-0"><a><strong>Lorem ipsum dolor sit amet</strong> </a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="image-box">
                                <div className="name-desc hover-1 image-box rounded">
                                    <img className="w-100" src="../../assets/img/umrah3.png" alt="" />
                                    <div className="hover-1-content p-2">
                                        <Link to="/umrah-guide"><div className="title title1 mt-1 ml-1">Umrah Guide</div></Link>
                                        <p className="hover-1-description sub-txt mb-0"><a><strong>Lorem ipsum dolor sit amet</strong> </a></p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="image-box">
                                <div className="name-desc hover-1 image-box rounded">
                                    <img className="w-100" src="../../assets/img/umrah4.png" alt="" />
                                    <div className="hover-1-content p-2">
                                        <Link to="/hajj-guide"><div className="title title1 mt-1 ml-1">Hajj Guide</div></Link>
                                        <p className="hover-1-description sub-txt mb-0"><a><strong>Lorem ipsum dolor sit amet</strong> </a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="image-box">
                                <div className="name-desc hover-1 image-box rounded">
                                    <img className="w-100" src="../../assets/img/umrah5.png" alt="" />
                                    <div className="hover-1-content p-2">
                                        <Link to="/umrah-visa"><div className="title title1 mt-1 ml-1">Umrah Visa</div></Link>
                                        <p className="hover-1-description sub-txt mb-0"><a><strong>Lorem ipsum dolor sit amet</strong> </a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="image-box">
                                <div className="name-desc hover-1 image-box rounded">
                                    <img className="w-100" src="../../assets/img/umrah6.png" alt="" />
                                    <div className="hover-1-content p-2">
                                        <Link to="/masjid-aqsa"><div className="title title1 mt-1 ml-1">Masjid Al-Aqsa</div></Link>
                                        <p className="hover-1-description sub-txt mb-0"><a><strong>Lorem ipsum dolor sit amet</strong> </a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="image-box">
                                <div className="name-desc hover-1 image-box rounded">
                                    <img className="w-100" src="../../assets/img/umrah7.png" alt="" />
                                    <div className="hover-1-content p-2">
                                        <Link to="/ziyarat"><div className="title title1 mt-1 ml-1">Ziyarat</div></Link>
                                        <p className="hover-1-description sub-txt mb-0"><a><strong>Lorem ipsum dolor sit amet</strong> </a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="image-box">
                                <div className="name-desc hover-1 image-box rounded">
                                    <img className="w-100" src="../../assets/img/umrah8.png" alt="" />
                                    <div className="hover-1-content p-2">
                                        <Link to="/gallery"><div className="title title1 mt-1 ml-1">Gallery</div></Link>
                                        <p className="hover-1-description sub-txt mb-0"><a><strong>Lorem ipsum dolor sit amet</strong> </a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>

                <CompaniesLogo />



            </section>

            <Footer />

        </div>
    )
}

export default Umrah;


const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 , NoOfNights:"1", RoomType:"Quad", },
    { title: 'The Godfather', year: 1972 , NoOfNights:"1", RoomType:"Dubble",},
    { title: 'The Godfather: Part II', year: 1974 , NoOfNights:"1"},
    { title: 'The Dark Knight', year: 2008 , NoOfNights:"1"},
    { title: '12 Angry Men', year: 1957 , NoOfNights:"1"},
    { title: "Schindler's List", year: 1993 , NoOfNights:"1"},
    { title: 'Pulp Fiction', year: 1994 , NoOfNights:"1"},
    {
        title: 'The Lord of the Rings: The Return of the King',
        year: 2003, NoOfNights:"1"
    },
    { title: 'The Good, the Bad and the Ugly', year: 1966 , NoOfNights:"1"},
    { title: 'Fight Club', year: 1999 , NoOfNights:"1"},
    {
        title: 'The Lord of the Rings: The Fellowship of the Ring' , NoOfNights:"1" , RoomType:"single",
        year: 2001,
    }
];