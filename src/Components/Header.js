import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import $ from "jquery";
import Date from "../Components/Date";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import Axios from "axios";


let margintop = {
    marginTop: "0px",
}

const Header = () => {

    const [value, setValue] = useState();
    const [adult, setAdult] = useState(1);
    const [child, setChild] = useState(0);
    const [infant, setInfant] = useState(0);

    const [noOfRows, setNoOfRows] = useState(1);
    const [deleteButton, setDeleteButton] = useState(false);
    const [searchBtn, setSearchBtn] = useState(true);
    const [showClass, setShowClass] = useState(false);

    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [departure, setDeparture] = useState([]);
    const [arrival, setArrival] = useState([]);
    const [returned, setReturned] = useState("Return");
    const [economyClass, setEconomyClass] = useState("Economy Class")
    const [depart_date, setDepart_date] = useState('');
    const [msg, setMsg] = useState('');
    const axios = require('axios').default;

    const [incorrect, setIncorrect] = useState(false);
    const [show,setShow] = useState(false)


    useEffect(() => {

        window.scrollTo(0, 0);
setShow(false)
        const setTimeout = (() => {

            $(function () {
                $('input[name="daterange"]').daterangepicker({
                    opens: 'left'
                }, function (start, end, label) {
                    console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
                });
            });
            $('.dropdown').on('show.bs.dropdown', function (e) {
                $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
            });

            // ADD SLIDEUP ANIMATION TO DROPDOWN //
            $('.dropdown').on('hide.bs.dropdown', function (e) {
                $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
            });
        }, 3000);

    }, [])

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

    const Increment = () => {
        setNoOfRows(noOfRows + 1);
        margintop = {
            marginTop: "25px",
        }

        if (noOfRows >= 1) {
            setDeleteButton(true);
            setSearchBtn(false);
            setShowClass(true);
        }

    }

    const Decrement = () => {
        if (noOfRows == 1) {
            setNoOfRows(noOfRows - 0);
            setSearchBtn(true);
            setDeleteButton(false);
            setShowClass(false);
        } else {
            setNoOfRows(noOfRows - 1);
        }
    }
    let navigate = useNavigate();
    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
        }
    }
    const key = 'UXVpUGVja0BBUElAS0VZQEZPUkBEQVRBQE1JTklORzkxNTY2'
    const searchedItems = { key, origin: origin.split('-')[0], destination: destination.split('-')[0], returned, adult, infant, economyClass, child, depart_date };
    const Submit = (e) => {
        e.preventDefault();
        // let user_captcha = document.getElementById("user_captcha_input").value;

        axios.post('https://api.tripplanner.ae/web/flight-search-result', searchedItems, axiosConfig)
            .then((response) => {
                console.log("response: ", response);

                if (response.data.status === 'fail') {
                    console.log("if block");
                    setMsg(response.data.message);
                    setIncorrect(true);
                    setShow(true)
                    // alert(response.data.message);
                }
                else {
                    console.log("else block");
                    localStorage.setItem('searchedItems', JSON.stringify(searchedItems));
                    console.log(response);
                    navigate('/flight-search-result', { state: { searchedItems } });
                }
            })
            .catch((err) => {
                console.log("AXIOS ERROR: ", err);
            })
    }
    // const [data, setData] = useState([])
    useEffect(() => {
        const url = "https://api.tripplanner.ae/web/airports?key=UXVpUGVja0BBUElAS0VZQEZPUkBEQVRBQE1JTklORzkxNTY2";
        Axios.post(url).then(function (result) {
            setDeparture(result.data.data);
            setArrival(result.data.data);

        });
    }, [])

    const handleSelectedDate = (dateString) => {
        console.log('e================== ', dateString);
        setDepart_date(dateString[0] + ' - ' + dateString[1]);
    }

    const customDates = ['2020-04-08', '2020-04-04', '2020-04-02'];
    const disableCustomDt = current => {
        return !customDates.includes(current.format('YYYY-MM-DD'));
    }
    return (
        <div>
            <header className="masthead main-header mob-header">
                <div className="container d-flex h-100 align-items-center">

                    <div className="search-form w-100">
                        <div className="container">

                            <div className="row">

                                <div className="col-xl-12 col-lg-12 col-md-7 mb-md-2 mb-sm-0 mb-0 mob-top-margin">
                                    <div className="custom-dropdown cus-down-arrow pr-0">
                                        <button className="dropbtn">{returned}<i className="fa fa-angle-down"></i></button>
                                        <div className="dropdown-content">
                                            <a href="javascript:void(0)" data-value="Return" onClick={(e) => { setReturned(e.target.getAttribute('data-value')) }}>Return</a>
                                            <a href="javascript:void(0)" data-value="One_Way" onClick={(e) => { setReturned(e.target.getAttribute('data-value')) }}>One Way</a>
                                        </div>
                                    </div>
                                    <div className="custom-dropdown cus-down-arrow cus-down-arrow pr-0">
                                        <button className="dropbtn" onChange={(e) => setAdult(e.target.value)}>Adult <i
                                            className="fa fa-angle-down"></i></button>
                                        <div className="dropdown-content">
                                            <div className="passenger pt-3 pb-3 pl-2 pr-2">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="title-pax">Adult</div>
                                                        <div className="count-pax">
                                                            <div className="qty">
                                                                <span className="minus bg-dark adultMinus"
                                                                    onClick={adultMinus}>-</span>
                                                                <input type="number" className="count" id="adult"
                                                                    name="qty" value={adult} />
                                                                <span className="plus bg-dark adultPlus"
                                                                    onClick={adultPlus}>+</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 mt-3 mb-3">
                                                        <div className="title-pax">Child</div>
                                                        <div className="count-pax">
                                                            <div className="qty">
                                                                <span className="minus bg-dark childMinus"
                                                                    onClick={childMinus}>-</span>
                                                                <input type="number" className="count" id="child"
                                                                    name="qty" value={child} />
                                                                <span className="plus bg-dark childPlus"
                                                                    onClick={childPlus}>+</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="title-pax">Infant</div>
                                                        <div className="count-pax">
                                                            <div className="qty">
                                                                <span className="minus bg-dark infantMinus"
                                                                    onClick={infantMinus}>-</span>
                                                                <input type="number" className="count" id="infant"
                                                                    name="qty" value={infant} />
                                                                <span className="plus bg-dark infantPlus"
                                                                    onClick={infantPlus}>+</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-dropdown cus-down-arrow pr-0">
                                        <button className="dropbtn">{economyClass}<i className="fa fa-angle-down"></i></button>
                                        <div className="dropdown-content">
                                            <a href="#" data-value="Economy Class" onClick={(e) => { setEconomyClass(e.target.getAttribute('data-value')) }}>Economy Class</a>
                                            <a href="#" data-value="Premium Economy Class" onClick={(e) => { setEconomyClass(e.target.getAttribute('data-value')) }}>Premium Economy Class</a>
                                            <a href="#" data-value="Business Class" onClick={(e) => { setEconomyClass(e.target.getAttribute('data-value')) }}>Business Class</a>
                                            <a href="#" data-value="First Class" onClick={(e) => { setEconomyClass(e.target.getAttribute('data-value')) }}>First Class</a>
                                        </div>
                                    </div>
                                    {/*<div className="custom-dropdown cus-down-arrow pr-0">*/}
                                    {/*    <button className="dropbtn multicities" onClick={Increment}>Multi Cities</button>*/}
                                    {/*</div>*/}
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-lg-12 col-md-12 col-12 ">
                                    <div className="g-3 needs-validation main-search scroll-height p-4 mt-2" noValidate>
                                        {[...Array(noOfRows)].map((elementInArray, index) => {

                                            return (


                                                <div className="row" style={margintop} key={index}>
                                                    {deleteButton &&
                                                        <div className="col-sm-12  text-right">
                                                            <span onClick={Decrement} className=" text-orange"> <i
                                                                className="fa fa-close fa-close1"></i></span>
                                                        </div>
                                                    }
                                                    <div
                                                        className="col-xl-3 col-lg-3 col-md-3 col-12 pt-lg-0 pt-4 onClickHide">
                                                        <label className="form-label pl-2">Departure Airport</label>
                                                        <div className="dep-icon d-none d-lg-block">
                                                            {/*<img className=""*/}
                                                            {/*src="assets/img/deperture-icon.png" />*/}
                                                        </div>


                                                        {/*<input type="text" className="form-control"*/}
                                                        {/*       placeholder=" Islamabad (ISB)... " required*/}
                                                        {/*       onChange={(e) => setDeparture(e.target.value)}  />*/}


                                                        <Stack spacing={2} >

                                                            <Autocomplete
                                                                freeSolo
                                                                id="free-solo-2-demo"
                                                                disableClearable
                                                                onChange={(event, newValue) => {
                                                                    setOrigin(newValue);
                                                                }}

                                                                options={departure.map((option) => option.Code + ' - ' + option.Name + ' ' + ' ' + option.CountryName)} renderInput={(params) => {
                                                                console.log(params);
                                                                return (
                                                                    <TextField
                                                                        {...params}
                                                                        label=" Going Airport..."
                                                                        InputProps={{
                                                                            ...params.InputProps,
                                                                            type: 'search',
                                                                            // required: value?.length === 0,
                                                                        }}
                                                                        // {...register("origin")}
                                                                        // required={value === 0}
                                                                        helperText={!origin ? <span style={{color: "red"}}>{ show && "Origin field is required"}</span> : ""}

                                                                    />
                                                                )
                                                            }}
                                                            />
                                                            {/* <small >{errors.origin?.message}</small> */}
                                                        </Stack>
                                                    </div>

                                                    <div
                                                        className="col-xl-3 col-lg-3 col-md-3 col-12 pt-lg-0 pt-4 onClickHide">
                                                        <label className="form-label pl-2">Arrival Airport</label>
                                                        <div className="dep-icon d-none d-lg-block">
                                                            {/*<img className="" src="assets/img/location-icon.png" />*/}
                                                        </div>

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
                                                                        }}
                                                                        helperText={!destination ? <span style={{color: "red",height:'10%'}}>{show && "Destination field is required"}</span> : ""}

                                                                    />
                                                                )}
                                                            />
                                                            {/* {destination === "" ? <span>jjjuuii</span> :  ""} */}
                                                        </Stack>
                                                    </div>

                                                    <div className="col-xl-3 col-lg-3 col-md-4 col-12 pt-lg-0 pt-4 onClickHide">
                                                        <label className="form-label pl-2">Departure/Return Date</label>
                                                        <input onChange={(e) => setDepart_date(e.target.value)}
                                                               isValidDate={disableCustomDt}
                                                               name="setDepart_date" id="setDepart_date" type="date" className="form-control" required></input>
                                                        {depart_date === "" ? <small style={{color:"red" ,height:'100%'}}>{show && "Depart date is required"}</small> : ""}                                                    </div>

                                                    {showClass &&
                                                        <div
                                                            className="col-xl-2 col-lg-2 col-12 pt-lg-0 pt-4 onClickHide">
                                                            <label className="form-label pl-2">Class</label>
                                                            <select className="form-control">
                                                                <option>Economy</option>
                                                                <option>Business</option>
                                                                <option>Premium</option>
                                                            </select>
                                                        </div>
                                                    }

                                                    {searchBtn &&
                                                        <div
                                                            className="col-xl-2 col-lg-2 col-md-2 col-12 pb-lg-0 pb-0 mt-1 onClickHide">
                                                            <Link to="/flight-search-result">
                                                                <button className="search-btn w-100"
                                                                    type="submit" onClick={Submit}>SEARCH
                                                                </button>
                                                            </Link>
                                                        </div>
                                                    }


                                                </div>
                                            )
                                        })}


                                        {deleteButton &&
                                            <div className="col-sm-12 text-right">
                                                <span onClick={Increment} className=" text-orange mr-3"> Add Another City</span>
                                                <Link to="/multi-flights">
                                                    <button className="search-btn px-5"
                                                        type="submit">SEARCH
                                                    </button>
                                                </Link>

                                            </div>
                                        }


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </header>

        </div>
    )
}

export default Header;
