
import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar";
import '../tripplanner.css';
import '../../Components/styles.css';
import { Link, useNavigate } from "react-router-dom";
import CompaniesLogo from "../../Components/CompaniesLogo";
import Footer from "../../Components/Footer";
import HomeCarousal from "../../Components/HomeCarousal";
import '../../Components/HomeCarousal.css';
import BlackNavbar from "../../Components/BlackNavbar";
import $ from "jquery";
import { useLocation } from "react-router-dom";
import Axios, { default as axios } from "axios";
import Loader from "../Loader";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import ReactPaginate from 'react-paginate';
import "../../index.css"
// import {flightdetails} from "../flight-details";
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';



const FlightSearchResult = () => {
    const [destination, setDestination] = useState('');
    const [origin, setOrigin] = useState("");
    const [arrival, setArrival] = useState([]);
    const [departure, setDeparture] = useState([]);
    const [show, setShow] = useState(false)
    const [incorrect, setIncorrect] = useState(false);
    const [msg, setMsg] = useState('');
    const [flights, setFlights] = useState({});
    const [depart_date, setDepart_date] = useState();
    const [itemOffset, setItemOffset] = useState(0);
    const [checkValue, setCheckValue] = useState([])
    const [checkValueInbound, setCheckValueInbound] = useState([])
    const [check, setCheck] = useState(false)
    const [adult, setAdult] = useState(1);
    const [child, setChild] = useState(1);
    const [infant, setInfant] = useState(1);
    const [returned, setReturned] = useState("Return");
    const [economyClass, setEconomyClass] = useState("Economy Class")

    const [searchedResult, setSearchedResult] = useState({
        key: '',
        origin: '',
        destination: '',
        returned: '',
        adult: '',
        infant: '',
        economyClass: '',
        child: '',
        depart_date: ''
    });
    const [spinner, setSpinner] = useState(false)
    const itemsPerPage = 10
    const location = useLocation();
    let navigate = useNavigate();
    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
        }
    }
    const key = 'UXVpUGVja0BBUElAS0VZQEZPUkBEQVRBQE1JTklORzkxNTY2';
    // var asd = 'UXVpUGVja0BBUElAS0VZQEZPUkBEQVRBQE1JTklORzkxNTY2';

    // console.log("flightdetails", flightdetails);
    //console.log("search results", searchedResult);
    // console.log("flightdetails===", flightdetails);

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Flight Search Result | Tripplanner PK ";
        fetchingData_FlightSearchResult()
    }, [searchedResult]);

    const modifyitem = {origin: origin.split('-')[0],returned,economyClass, destination: destination.split('-')[0],depart_date,adult,child,infant,key }

    const fetchingData_FlightSearchResult = () => {
        setSearchedResult(location.state?.searchedItems);

        // let user_captcha = document.getElementById("user_captcha_input").value;
        const flightdetails = {
            key,
            origin: searchedResult?.origin,
            destination: searchedResult?.destination,
            returned: searchedResult?.returned,
            adult: searchedResult?.adult,
            infant: searchedResult?.infant,
            economyClass: searchedResult?.economyClass,
            child: searchedResult?.child,
            depart_date: searchedResult?.depart_date
        };
         console.log("flightdetails=1==", searchedResult);
        console.log("modifyitem=2==",modifyitem);
        setSpinner(true)
        axios.post('https://api.tripplanner.ae/web/flight-search-result', flightdetails, axiosConfig,modifyitem ,key)
            .then((response) => {
                console.log("flight response data: ", response);
                setFlights(response?.data?.data);
                setSpinner(false)
            })
            .catch((err) => {
                console.log("AXIOS ERROR: ", err);
            })
    }
    //  const Data_FlightSearchResult = () => {
    //     setSearchedResult(location.state?.searchedItems);
    //      console.log("modifyitem", modifyitem)
    //     // let user_captcha = document.getElementById("user_captcha_input").value;
    //
    //     // console.log("flightdetails=1==", searchedResult);
    //     setSpinner(true)
    //     axios.post('https://api.tripplanner.ae/web/flight-search-result',  axiosConfig,modifyitem ,key)
    //         .then((response) => {
    //             console.log("flight response data: ", response);
    //             setFlights(response?.data?.data);
    //             setSpinner(false)
    //         })
    //         .catch((err) => {
    //             console.log("AXIOS ERROR: ", err);
    //         })
    // }
    // console.log("flightdetails:====== ", flights);
    const endOffset = itemOffset + itemsPerPage;
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const newArray = Object.keys(flights).map((key) => flights[key])
    // console.log("new arr", newArray)
    const currentItems = [...newArray].slice(itemOffset, endOffset)
    // console.log("current items", currentItems)
    const pageCount = Math.ceil(Object.keys(flights).length / itemsPerPage);
    // console.log("pageCount", pageCount)

    const selectedTicket = (key) => {
        // console.log('selectedTicket: ', key);
        navigate(`/selected-flight/detail`, { state: { key, searchedResult } });
        // let matchedObj = undefined;
        // Object.keys(flights).map((itemKey) => {
        //   if (key === itemKey) {
        //     matchedObj = flights[itemKey];
        //   }
        // });

        // if (matchedObj) {
        // }
    }
    useEffect(() => {
        const url = "https://api.tripplanner.ae/web/airports?key=UXVpUGVja0BBUElAS0VZQEZPUkBEQVRBQE1JTklORzkxNTY2";
        Axios.post(url).then(function (result) {
            setDeparture(result.data.data);
            setArrival(result.data.data);

        });
    }, [])

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % Object.keys(flights).length;
        const a = setItemOffset(newOffset);
        // console.log("state", a)
        // console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    };

    const airlineFilter = (carrier) => {
        console.log('carrier: ', carrier);
        for (const item in currentItems) {

        }
    }
    const [value, setValue] =  React.useState([2,20]);

    // Changing State when volume increases/decreases
    const rangeSelector = (event, newValue) => {
        setValue(newValue);
        console.log(newValue)
    };

    return (
        <div>
            <BlackNavbar />
            <section className="search-flight mt-5">
                <div className="container">
                    <h1 className="">Your Search Flight</h1>
                    <span className="filter-result float-right w-100 d-block d-lg-none d-md-none">
                        <div className="mobile-container">
                            <div className="topnav">
                                <a href="#home" className="active"></a>
                                <div className="row">
                                    <div className="col-12">
                                        <div id="myLinks">
                                            <a className="for-border-btm" href="#news">
                                                <button type="button" className="btn  airline-btn" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Airlines</button>
                                            </a>
                                            <a className="for-border-btm" href="#contact">
                                                <button type="button" className="btn  airline-btn" data-toggle="modal" data-target="#exampleModa2" data-whatever="@fat">Stop Over</button>
                                            </a>
                                            <a className="for-border-btm" href="#contact">
                                                <button type="button" className="btn  airline-btn" data-toggle="modal" data-target="#exampleModa3" data-whatever="@fat">Departure Airport</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <a href="javascript:void(0);" className="icon">
                                    <i className="fa fa-filter" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </span>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-12">
                            <div className="row g-3 needs-validation main-search p-4 bot-search-eng mt-2 m-0" >
                                <div className="col-xl-3 col-lg-3 col-md-3 col-12 pt-lg-0 pt-4">
                                    <label className="form-label pl-3">Departure Airport </label>
                                    {/*<input type="text" value={searchedResult?.origin.split('-')[0]} className="form-control" placeholder=" Islamabad (ISB)..." required />*/}
                                    <Stack spacing={2} >

                                        <Autocomplete
                                            freeSolo
                                            id="free-solo-2-demo"
                                            disableClearable
                                            style={{ backgroundColor: 'white', }}
                                            value={searchedResult?.origin.split('-')[0]}
                                            onChange={(event, newValue) => {
                                                setOrigin(newValue);
                                            }}

                                            options={departure.map((option) => option.Code + ' - ' + option.Name + ' ' + ' ' + option.CountryName)} renderInput={(params) => {
                                                // console.log(params);
                                                return (
                                                    <TextField
                                                        value={searchedResult?.origin.split('-')[0]}
                                                            {...params}
                                                        label=" Going Airport..."
                                                        InputProps={{
                                                            ...params.InputProps,
                                                            type: 'search',
                                                        }}
                                                        helperText={!origin ? <span style={{ color: "red" }}>{show && "Origin field is required"}</span> : ""}

                                                    />
                                                )
                                            }}
                                        />
                                    </Stack>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-3 col-12 pt-lg-0 pt-4">
                                    <label className="form-label pl-3">Arrival Airport</label>
                                    {/*<input type="text" value={searchedResult?.destination.split('-')[0]} className="form-control" placeholder=" Going Airport..." required />*/}
                                    <Stack spacing={2}>

                                        <Autocomplete
                                            freeSolo
                                            id="free-solo-2-demo"
                                            disableClearable
                                            style={{ backgroundColor: 'white', }}
                                            value={searchedResult?.destination.split('-')[0]}
                                            onChange={(event, newValue) => {
                                                setDestination(newValue);
                                            }}
                                            options={arrival.map((option) => option.Code + ' - ' + option.Name + ' ' + ' ' + option.CountryName)}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    s
                                                    InputProps={{
                                                        ...params.InputProps,
                                                        type: 'search',
                                                    }}
                                                    helperText={!destination ? <span style={{ color: "red", height: '10%' }}>{show && "Destination field is required"}</span> : ""}

                                                />
                                            )}
                                        />
                                        {/* {destination === "" ? <span>jjjuuii</span> :  ""} */}
                                    </Stack>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4 col-12 pt-lg-0 pt-4">
                                    <label className="form-label pl-3">Departure/Return Date</label>
                                    {/*<input type="text" value={searchedResult?.depart_date} name="daterange" className="form-control" />*/}
                                    {/*<input onChange={(e) => setDepart_date(e.target.value)} value={searchedResult?.depart_date} name="setDepart_date" id="setDepart_date" type="date" className="form-control" required></input>*/}
                                    {/*{depart_date === "" ? <small style={{ color: "red", height: '100%' }}>{show && "Depart date is required"}</small> : ""}*/}
                                    <TextField
                                        id="date"
                                        type="date"

                                        defaultValue={depart_date}
                                        onChange={(e) => setDepart_date(e.target.value)}
                                        sx={{ width: 260, backgroundColor: "white" }}
                                        InputLabelProps={{
                                            shrink: true
                                        }}
                                        helperText={depart_date === "" ? <span style={{ color: "red" }}>{show && "Depart date is required "}</span> : ""}
                                    />
                                </div>
                                <div className="col-xl-2 col-lg-2 col-md-2 col-12 pb-lg-0 pt-1">
                                    {/*<a href="flight-search-result.html">*/}
                                        <button className="search-btn w-100" type="submit" onClick={()=> fetchingData_FlightSearchResult()}>Modify</button>
                                    {/*</a>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            Airline Details
                        </div>
                        <div className="modal-body">
                            <ul className="p-0">
                                <li>
                                    <input type="checkbox" id="" name="" value="" />
                                    <label className="pl-1"> Etihad Airways </label>
                                </li>
                                <li>
                                    <input type="checkbox" id="" name="" value="" />
                                    <label className="pl-1"> Turkish Airline </label>
                                </li>
                                <li>
                                    <input type="checkbox" id="" name="" value="" />
                                    <label className="pl-1"> British Airways </label>
                                </li>
                                <li>
                                    <input type="checkbox" id="" name="" value="" />
                                    <label className="pl-1"> Qatar Airways </label>
                                </li>
                                <li>
                                    <input type="checkbox" id="" name="" value="" />
                                    <label className="pl-1"> Gulf Airways </label>
                                </li>
                                <li>
                                    <input type="checkbox" id="" name="" value="" />
                                    <label className="pl-1"> Etihad Airways </label>
                                </li>
                            </ul>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary close-btn" data-dismiss="modal">Close</button>
                            <button type="button" className="btn  apply-btn">Apply Filter</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="exampleModa2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            Stop Over Details
                        </div>
                        <div className="modal-body">
                            <ul className="p-0">
                                <li>
                                    <input type="checkbox" id="" name="" value="" />
                                    <label className="pl-1"> Direct </label>
                                </li>
                                <li>
                                    <input type="checkbox" id="" name="" value="" />
                                    <label className="pl-1"> 1 Stop </label>
                                </li>
                                <li>
                                    <input type="checkbox" id="" name="" value="" />
                                    <label className="pl-1"> 2 + Stop </label>
                                </li>
                            </ul>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary close-btn" data-dismiss="modal">Close</button>
                            <button type="button" className="btn  apply-btn">Apply Filter</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="exampleModa3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            Stop Over Details
                        </div>
                        <div className="modal-body">
                            <ul className="p-0">
                                <li>
                                    <input type="checkbox" id="" name="" value="" />
                                    <label className="pl-1"> Dubai Airport </label>
                                </li>
                                <li>
                                    <input type="checkbox" id="" name="" value="" />
                                    <label className="pl-1"> Dubai Airport </label>
                                </li>
                                <li>
                                    <input type="checkbox" id="" name="" value="" />
                                    <label className="pl-1"> Dubai Airport </label>
                                </li>
                                <li>
                                    <input type="checkbox" id="" name="" value="" />
                                    <label className="pl-1"> Dubai Airport </label>
                                </li>
                                <li>
                                    <input type="checkbox" id="" name="" value="" />
                                    <label className="pl-1"> Dubai Airport </label>
                                </li>
                                <li>
                                    <input type="checkbox" id="" name="" value="" />
                                    <label className="pl-1"> Dubai Airport </label>
                                </li>
                            </ul>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary close-btn" data-dismiss="modal">Close</button>
                            <button type="button" className="btn  apply-btn">Apply Filter</button>
                        </div>
                    </div>
                </div>
            </div>

            <section className="flight-found pt-0">
                {spinner === true ? (<Loader />) : (
                    <div className="container">
                        <h2 className=""> {Object.keys(flights).length} Flights Found For - {searchedResult?.destination.split('-')[0]}</h2>
                        <div className="row mt-5">
                            <div className="col-lg-3 col-md-3 d-none d-lg-block d-md-block">
                                <div className="left-bar p-3">
                                    <div className="sub-title fr-br-botm pb-4"> <img className="pr-2" src="assets/img/filter-result-icon.png" alt="" /> Filter Result</div>
                                    <div className="sub-title pb-2 pt-4">Price Range</div>
                                    <div className="text-center pt-2">SAR 0 - SAR 2000</div>
                                    <div className="pl-4 pb-4">
                                        {/*<img className="text-center" src="assets/img/price-rang-icon.png" alt="" />*/}
                                        <div style={{
                                            margin: 'auto',
                                            display: 'block',
                                            width: 'fit-content'
                                        }}>
                                            {/*<h3>How to create Price Range Selector in ReactJS?</h3>*/}
                                            <Typography id="range-slider" gutterBottom>
                                                Select Price Range:
                                            </Typography>
                                            <Slider
                                                value={value}
                                                onChange={rangeSelector}
                                                valueLabelDisplay="auto"
                                            />
                                            Your range of Price is between {value[0]} /- and {value[1]} /-
                                        </div>
                                    </div>
                                    <div className="fr-br-botm"></div>
                                    <div className="sub-title pb-2 mt-3">Stops</div>
                                    <div className="filter-list fr-br-botm pt-2">
                                        <ul className="p-0">
                                            <li>
                                                <input type="checkbox" id="" name="" value="" />
                                                <label className="pl-1"> Direct </label>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="" name="" value="" />
                                                <label className="pl-1"> 1 Stop </label>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="" name="" value="" />
                                                <label className="pl-1"> 2 + Stop </label>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="sub-title pb-2 pt-3">Airlines</div>
                                    {currentItems?.map((key, index) =>
                                        key.FlightDetails?.Outbound?.map((item) => (
                                            <div className="filter-list fr-br-botm pt-2" key={item.id}>
                                                <ul className="p-0">
                                                    <li>
                                                        <input type="checkbox" id="" name="airlines" defaultChecked={check} onClick={(event) => airlineFilter(item.Carrier)} />
                                                        <label className="pl-1"> {item.Carrier} </label>
                                                    </li>

                                                </ul>
                                            </div>
                                        )))}
                                    <div className="sub-title pb-2 pt-3">Departure Airport</div>
                                    {currentItems.map((key) =>
                                        key.FlightDetails?.Outbound?.map((item) => (
                                            <div key={item.id}>
                                                <div className="filter-list pt-2">
                                                    <ul className="p-0">
                                                        <li>
                                                            <input type="checkbox" id="" name="" value="" />
                                                            <label className="pl-1"> {item.Destination} </label>
                                                        </li>

                                                    </ul>
                                                </div>
                                            </div>
                                        )))}
                                </div>
                            </div>

                            <div className="col-lg-9 col-md-9">
                                {check === true ? checkValue.map((Items) => (

                                    Items?.map((Citem) => (
                                        <div className="right-bar p-2 mb-2" key={Citem.id} >
                                            <div className="row m-0">
                                                <div className="col-lg-10 col-md-12">
                                                    <div className="row">
                                                        <div className="col-lg-2 col-md-2 col-12 p-2 d-none d-lg-block d-md-block">
                                                            <img className="" src="assets/img/gulf-airline-logo.png" alt="" />
                                                        </div>
                                                        <div className="col-lg-10 col-md-10 col-12">
                                                            <div className="border-small-scr">
                                                                <div className="row p-3">
                                                                    <div className="col-lg-1 col-md-1 p-2 d-none d-lg-block">
                                                                        <img className="" src="assets/img/seprator-line.png" alt="" />
                                                                    </div>
                                                                    <div className="col-lg-6 col-md-6 col-sm-7 col-12">
                                                                        <div className="dep-det"><strong>{Citem.DepartDate}</strong> </div>
                                                                        <div className="dep-det"><strong>Depart :</strong> {Citem.DepartTime}</div>
                                                                        <div className="dep-det"><strong>Arrive  :</strong> {Citem.ArrTime}</div>
                                                                        {/*<div className="sub-txt">{flights[key].FlightPriceDetails.BasePrice}</div>*/}
                                                                    </div>
                                                                    <div className="col-lg-2 col-md-2 col-sm-2 col-6 mt-lg-0 mt-md-0 mt-3">
                                                                        <div className="dep-det"><strong>{Citem.Carrier}</strong></div>
                                                                        <div className="sub-txt">{Citem.Origin} - {Citem.Destination} </div>
                                                                    </div>
                                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-6 mt-lg-0 mt-md-0 mt-3">
                                                                        <div className="dep-det"><strong>Flight Time</strong></div>
                                                                        <div className="sub-txt">{Citem.FlightTime}</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {Items?.map((flightIn) => (
                                                        <div key={flightIn.id}>
                                                            {/*{console.log("......hj",flightIn)}*/}
                                                            <div className="row">
                                                                <div className="col-lg-2 col-md-2 p-2 col-12 d-none d-lg-block d-md-block">
                                                                    <img className="" src="assets/img/etihad-airline-logo.png" alt="" />
                                                                </div>
                                                                <div className="col-lg-10 col-md-10 col-12">
                                                                    <div className="row p-3">
                                                                        <div className="col-lg-1 col-md-1 p-2 d-none d-lg-block">
                                                                            <img className="" src="assets/img/seprator-line.png" alt="" />
                                                                        </div>
                                                                        <div className="col-lg-6 col-md-6 col-sm-7 col-12">
                                                                            <div className="dep-det"><strong>{flightIn.DepartDate}</strong> </div>
                                                                            <div className="dep-det"><strong>Depart :</strong>{flightIn.DepartTime} </div>
                                                                            <div className="dep-det"><strong>Arrive :</strong>{flightIn.ArrTime} </div>
                                                                        </div>
                                                                        <div className="col-lg-2 col-md-2 col-sm-2 col-6 mt-lg-0 mt-md-0 mt-sm-0 mt-3">
                                                                            <div className="dep-det"><strong>{flightIn.Carrier}</strong></div>
                                                                            <div className="sub-txt">{flightIn.Origin} - {flightIn.Destination}</div>
                                                                            {/* <div className="sub-txt">KHI</div> */}
                                                                        </div>
                                                                        <div className="col-lg-3 col-md-3 col-sm-3 col-6 mt-lg-0 mt-md-0 mt-sm-0 mt-3">
                                                                            <div className="dep-det"><strong>Flight Time</strong></div>
                                                                            <div className="sub-txt">{flightIn.FlightTime}</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className="col-lg-2 col-md-12">
                                                    <div className="flight-fare mt-lg-4 mt-md-4 mt-2 mb-2">
                                                        <div style={{ fontSize: "10px" }} className="total-fare text-center"><span className="curency-sign mt-5 ml-2">{key.FlightPriceDetails?.TotalPrice}</span><small className="mt-5"></small></div>
                                                        <button className="view-btn w-100 mt-3  " onClick={(e) => selectedTicket(key)}>Select This:</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>



                                    ))
                                )) : currentItems?.map((key) =>
                                    key.FlightDetails?.Outbound.map((item) =>
                                        <div className="right-bar p-2 mb-2" key={item.id} >
                                            <div className="row m-0">
                                                <div className="col-lg-10 col-md-12">
                                                    <div className="row">
                                                        <div className="col-lg-2 col-md-2 col-12 p-2 d-none d-lg-block d-md-block">
                                                            <img className="" src="assets/img/gulf-airline-logo.png" alt="" />
                                                        </div>
                                                        <div className="col-lg-10 col-md-10 col-12">
                                                            <div className="border-small-scr">
                                                                <div className="row p-3">
                                                                    <div className="col-lg-1 col-md-1 p-2 d-none d-lg-block">
                                                                        <img className="" src="assets/img/seprator-line.png" alt="" />
                                                                    </div>
                                                                    <div className="col-lg-6 col-md-6 col-sm-7 col-12">
                                                                        <div className="dep-det"><strong>{item.DepartDate}</strong> </div>
                                                                        <div className="dep-det"><strong>Depart :</strong> {item.DepartTime}</div>
                                                                        <div className="dep-det"><strong>Arrive  :</strong> {item.ArrTime}</div>
                                                                        {/*<div className="sub-txt">{flights[key].FlightPriceDetails.BasePrice}</div>*/}
                                                                    </div>
                                                                    <div className="col-lg-2 col-md-2 col-sm-2 col-6 mt-lg-0 mt-md-0 mt-3">
                                                                        <div className="dep-det"><strong>{item.Carrier}</strong></div>
                                                                        <div className="sub-txt">{item.Origin} - {item.Destination} </div>
                                                                    </div>
                                                                    <div className="col-lg-3 col-md-3 col-sm-3 col-6 mt-lg-0 mt-md-0 mt-3">
                                                                        <div className="dep-det"><strong>Flight Time</strong></div>
                                                                        <div className="sub-txt">{item.FlightTime}</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {key.FlightDetails?.Inbound.map((flightIn) => (
                                                        <div key={flightIn.id}>
                                                            <div className="row">
                                                                <div className="col-lg-2 col-md-2 p-2 col-12 d-none d-lg-block d-md-block">
                                                                    <img className="" src="assets/img/etihad-airline-logo.png" alt="" />
                                                                </div>
                                                                <div className="col-lg-10 col-md-10 col-12">
                                                                    <div className="row p-3">
                                                                        <div className="col-lg-1 col-md-1 p-2 d-none d-lg-block">
                                                                            <img className="" src="assets/img/seprator-line.png" alt="" />
                                                                        </div>
                                                                        <div className="col-lg-6 col-md-6 col-sm-7 col-12">
                                                                            <div className="dep-det"><strong>{flightIn.DepartDate}</strong> </div>
                                                                            <div className="dep-det"><strong>Depart :</strong>{flightIn.DepartTime} </div>
                                                                            <div className="dep-det"><strong>Arrive :</strong>{flightIn.ArrTime} </div>

                                                                        </div>
                                                                        <div className="col-lg-2 col-md-2 col-sm-2 col-6 mt-lg-0 mt-md-0 mt-sm-0 mt-3">
                                                                            <div className="dep-det"><strong>{flightIn.Carrier}</strong></div>
                                                                            <div className="sub-txt">{flightIn.Origin} - {flightIn.Destination}</div>
                                                                            {/* <div className="sub-txt">KHI</div> */}
                                                                        </div>
                                                                        <div className="col-lg-3 col-md-3 col-sm-3 col-6 mt-lg-0 mt-md-0 mt-sm-0 mt-3">
                                                                            <div className="dep-det"><strong>Flight Time</strong></div>
                                                                            <div className="sub-txt">{flightIn.FlightTime}</div>
                                                                        </div>
                                                                    </div>
                                                                </div>


                                                            </div>
                                                        </div>
                                                    ))
                                                    }
                                                </div>

                                                {/* // </div> */}

                                                <div className="col-lg-2 col-md-12">
                                                    <div className="flight-fare mt-lg-4 mt-md-4" style={{ marginTop: "90px" }}>
                                                        <div style={{ fontSize: "10px" }} className="total-fare text-center"><span className="curency-sign mt-5 ml-2">{key.FlightPriceDetails.TotalPrice}</span><small className="mt-5"></small></div>
                                                        {/*<Link to={`/selected-flight/${item.Key}`}>*/}
                                                        <button className="view-btn w-100 mt-3  " onClick={(e) => selectedTicket(key)}>Select This:</button>
                                                        {/*</Link>*/}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    )
                                )}
                                {/* <Loader /> */}

                            </div>
                        </div>




                    </div>
                )}
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel={"< previous"}
                    pageClassName={"page-item"}
                    pageLinkClassName={"page-link"}
                    previousClassName={"page-item"}
                    previousLinkClassName={"page-link"}
                    nextClassName={"page-item"}
                    nextLinkClassName={"page-link"}
                    breakClassName={"page-item"}
                    breakLinkClassName={"page-link"}
                    containerClassName={"pagination"}
                    // activeClassName={"activePage"}
                    renderOnZeroPageCount={null}
                />
                <CompaniesLogo />
            </section>

            <Footer />


        </div>

    )
}

export default FlightSearchResult;