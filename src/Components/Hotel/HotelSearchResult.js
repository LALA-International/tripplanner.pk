import React , {useState , useEffect} from "react";
import Navbar from "../../Components/Navbar";
import '../../Components/tripplanner.css';
import '../../Components/styles.css';
import {Link, useLocation} from "react-router-dom";
import CompaniesLogo from "../../Components/CompaniesLogo";
import Footer from "../../Components/Footer";
import HomeCarousal from "../../Components/HomeCarousal";
import '../../Components/HomeCarousal.css';
import BlackNavbar from "../../Components/BlackNavbar";
import $ from "jquery";
import Date from "../Date";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
// import ReactPaginate from 'react-paginate';


const HotelSearchResult = () => {
    const [searchedResult, setSearchedResult] = useState([]);
    const [destination, setDestination] = useState([]);
    // const [itemOffset, setItemOffset] = useState(0);
    // const [flights, setFlights] = useState({});
    // const itemsPerPage = 10
    const location = useLocation();
    // const pageCount = Math.ceil(Object.keys(flights).length / itemsPerPage);

useEffect(() => {
  window.scrollTo(0, 0)
    fetchingData_Umrah()
}, [])
    const fetchingData_Umrah = () => {
        setSearchedResult(location.state?.umraSearchedItems);

        // let user_captcha = document.getElementById("user_captcha_input").value;

        };

    console.log('setSearchedResult====', searchedResult)
    // const handlePageClick = (event, itemsPerPage) => {
    //     const newOffset = (event.selected * itemsPerPage) % Object.keys(100).length;
    //     const a = setItemOffset(newOffset);
    //     // console.log("state", a)
    //     // console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    // };

return(
<div>
<BlackNavbar />

   <section className=" pb-3 mt-5">
          <div className="container">
            <div className="nav mb-4">
              <a href="!#">Home</a><span><i className="fa fa-angle-right"></i></span>
              <a href="!#" className="pl-3">All Hotels </a><span><i className="fa fa-angle-right"></i></span>
              <a href="!#" className="pl-3">United Arab Amarat</a><span><i className="fa fa-angle-right"></i></span>
              <a href="!#" className="pl-3"> Bur Duba</a><span><i className="fa fa-angle-right"></i></span>
              <a href="!#" className="pl-3 gand-exce">Gand Excelsior</a>
            </div>
            <span className="filter-result hotel-search-filter float-right w-100 d-block d-lg-none">
              <div className="mobile-container">
                <div className="topnav">
                  <a href="#home" className="active"></a>
                    <div className="row">
                      <div className="col-12">
                        <div className="mylink-hotel-search" id="myLinks">
                          <a className="for-border-btm" href="#news">
                            <button type="button" className="btn btn-primary airline-btn" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Your Budget (per night)</button>
                          </a>
                          <a className="for-border-btm" href="#contact">
                          <button type="button" className="btn btn-primary airline-btn" data-toggle="modal" data-target="#exampleModa2" data-whatever="@fat">Star Ranking</button>
                          </a>
                          <a className="for-border-btm" href="#contact">
                          <button type="button" className="btn btn-primary airline-btn" data-toggle="modal" data-target="#exampleModa3" data-whatever="@fat">Facilities</button>
                          </a>
                          <a className="for-border-btm" href="#contact">
                          <button type="button" className="btn btn-primary airline-btn" data-toggle="modal" data-target="#exampleModa4" data-whatever="@fat">Review Score</button>
                          </a>
                          <a className="for-border-btm" href="#contact">
                          <button type="button" className="btn btn-primary airline-btn" data-toggle="modal" data-target="#exampleModa5" data-whatever="@fat">Availability</button>
                          </a>
                          <a className="for-border-btm" href="#contact">
                          <button type="button" className="btn btn-primary airline-btn" data-toggle="modal" data-target="#exampleModa6" data-whatever="@fat">Room Facilities</button>
                          </a>
                        </div>
                      </div>
                    </div>
                  <a href="javascript:void(0);" className="icon" onclick="myFunction()">
                     <i className="fa fa-filter" aria-hidden="true"></i>
                  </a>
              </div>
            </div>
          </span>
          <div className="row mb-3 m-0">
              <div className="col-lg-12 col-md-12 col-12">
                <div className="row g-3 needs-validation main-search bot-search-eng p-4 mt-2"  >
                   <div className="col-xl-2 col-lg-2 col-md-6 col-12 pt-lg-0 pt-4">
                      <label className="form-label pl-2">Destination</label>
                      {/*<input type="text" className="form-control" placeholder=" New York " required />*/}
                       <Stack spacing={2} >
                           <Autocomplete
                               onChange={(e) => setDestination(e.target.value)}
                               id="Nationality"
                               freeSolo
                               options={top100Films.map((option) => option.title)}
                               renderInput={(params) => <TextField {...params} label="Destination" />}
                           />

                       </Stack>
                    </div>
                      <div className="col-xl-3 col-lg-3 col-md-6 col-12 pt-lg-0 pt-4">
                        <label className="form-label pl-2">Check In / Check Out</label>
                        {/*<input type="text" name="daterange" className="form-control" value="01/01/2018 - 01/15/2018" />*/}
                          <Date />
                      </div>
                     <div className="col-xl-2 col-lg-2 col-md-4 col-12 pt-lg-0 pt-4">
                        <label className="form-label pl-2">No of Room</label>
                        {/*<select className="form-control">*/}
                        {/*  <option>1 Room</option>*/}
                        {/*  <option>2 Room</option>*/}
                        {/*  <option>3 Room</option>*/}
                        {/*</select>*/}
                         <Stack spacing={2} >
                             <Autocomplete
                                 onChange={(e) => setDestination(e.target.value)}
                                 id=""
                                 freeSolo
                                 options={top100Films.map((option) => option.NoOfNights)}
                                 renderInput={(params) => <TextField {...params} label="No of Room" />}
                             />

                         </Stack>
                      </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-12 pt-lg-0 pt-4" >
                        <label className="form-label pl-3">No of Travelers</label>
                        <div className="search-dropdown dropdown-passenger" >
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
                                            <span className="minus bg-dark adultMinus">-</span>
                                            <input type="number" className="count" id="adult" name="adult" value="1" />
                                            <span className="plus bg-dark adultPlus">+</span>
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
                                            <span className="minus bg-dark childMinus">-</span>
                                            <input type="number" className="count" id="child" name="child" value="1" />
                                            <span className="plus bg-dark childPlus">+</span>
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
                                            <span className="minus bg-dark infantMinus">-</span>
                                            <input type="number" className="count" id="infant" name="infant" value="1" />
                                            <span className="plus bg-dark infantPlus">+</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                       <div className="col-xl-2 col-lg-2 col-md-4 col-12 pb-lg-0 pt-1">
                          <button className="search-btn w-100" type="submit">MODIFY</button>
                        </div>
                    </div>
                </div>
                </div>
          </div>
        </section>



        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content hotel-model-content">
              <div className="modal-header">
                Budget Details
              </div>
              <div className="modal-body">
                            <ul className="p-0">
                              <li className="pb-2">
                                  <input type="checkbox" id="" name="" value="" />
                                  <label className="pl-1 w-100 d-inline"> SAR 0 - SAR 200 <span className="float-right">90</span> </label>
                              </li>
                              <li className="pb-2">
                                <input type="checkbox" id="" name="" value="" />
                                 <label className="pl-1 w-100 d-inline"> SAR 200 - SAR 400 <span className="float-right">401</span> </label>
                              </li>
                              <li className="pb-2">
                                <input type="checkbox" id="" name="" value="" />
                                 <label className="pl-1 w-100 d-inline"> SAR 400 - SAR 600 <span className="float-right">345</span> </label>
                              </li>
                              <li className="pb-2">
                                <input type="checkbox" id="" name="" value="" />
                                 <label className="pl-1 w-100 d-inline"> SAR 600 - SAR 800 <span className="float-right">410</span> </label>
                              </li>
                              <li className="pb-2">
                                <input type="checkbox" id="" name="" value="" />
                                 <label className="pl-1 w-100 d-inline"> SAR 800 - SAR 1000 <span className="float-right">69</span> </label>
                              </li>
                              <li className="pb-2">
                                <input type="checkbox" id="" name="" value="" />
                                 <label className="pl-1 w-100 d-inline"> SAR 1000 - SAR 1500 <span className="float-right">105</span> </label>
                              </li>
                              <li className="pb-2">
                                <input type="checkbox" id="" name="" value="" />
                                 <label className="pl-1 w-100 d-inline"> SAR 1500 - SAR 2000 <span className="float-right">260</span> </label>
                              </li>
                            </ul>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary close-btn" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary apply-btn">Apply Filter</button>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="exampleModa2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                Ranking
              </div>
              <div className="modal-body">
                            <ul className="p-0">
                              <li>
                                  <input type="checkbox" id="" name="" value="" />
                                    <label>
                                      <span className="fa fa-star checked"></span>
                                      <span className="fa fa-star checked"></span>
                                      <span className="fa fa-star checked"></span>
                                      <span className="fa fa-star"></span>
                                      <span className="fa fa-star"></span>
                                    </label>
                              </li>
                              <li>
                                  <input type="checkbox" id="" name="" value="" />
                                    <label>
                                      <span className="fa fa-star checked"></span>
                                      <span className="fa fa-star checked"></span>
                                      <span className="fa fa-star checked"></span>
                                      <span className="fa fa-star"></span>
                                    </label>
                              </li>
                              <li>
                                  <input type="checkbox" id="" name="" value="" />
                                    <label>
                                      <span className="fa fa-star checked"></span>
                                      <span className="fa fa-star checked"></span>
                                      <span className="fa fa-star checked"></span>
                                    </label>
                              </li>

                              <li>
                                  <input type="checkbox" id="" name="" value="" />
                                    <label>
                                      <span className="fa fa-star checked"></span>
                                      <span className="fa fa-star checked"></span>
                                    </label>
                              </li>
                              <li>
                                  <input type="checkbox" id="" name="" value="" />
                                    <label>
                                      <span className="fa fa-star checked"></span>
                                    </label>
                              </li>
                            </ul>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary close-btn" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary apply-btn">Apply Filter</button>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="exampleModa3" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                Facilities Details
              </div>
              <div className="modal-body">
                            <ul className="p-0">
                              <li className="pb-2">
                                  <input type="checkbox" id="" name="" value="" />
                                  <label className="pl-1 w-100 d-inline"> Breakfast <span className="float-right">90</span> </label>
                              </li>
                              <li className="pb-2">
                                <input type="checkbox" id="" name="" value="" />
                                 <label className="pl-1 w-100 d-inline"> Air Conditioning <span className="float-right">401</span> </label>
                              </li>
                              <li className="pb-2">
                                <input type="checkbox" id="" name="" value="" />
                                 <label className="pl-1 w-100 d-inline"> Electric Kattle <span className="float-right">345</span> </label>
                              </li>
                              <li className="pb-2">
                                <input type="checkbox" id="" name="" value="" />
                                 <label className="pl-1 w-100 d-inline"> Wifi <span className="float-right">410</span> </label>
                              </li>
                              <li className="pb-2">
                                <input type="checkbox" id="" name="" value="" />
                                 <label className="pl-1 w-100 d-inline"> Non Smoking <span className="float-right">69</span> </label>
                              </li>
                            </ul>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary close-btn" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary apply-btn">Apply Filter</button>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="exampleModa4" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                Review Score Details
              </div>
              <div className="modal-body">
                            <ul className="p-0">
                              <li className="pb-2">
                                  <input type="checkbox" id="" name="" value="" />
                                  <label className="pl-1 w-100 d-inline"> Wonderful: 9+ <span className="float-right">90</span> </label>
                              </li>
                              <li className="pb-2">
                                <input type="checkbox" id="" name="" value="" />
                                 <label className="pl-1 w-100 d-inline"> Very Good: 8+ <span className="float-right">401</span> </label>
                              </li>
                              <li className="pb-2">
                                <input type="checkbox" id="" name="" value="" />
                                 <label className="pl-1 w-100 d-inline"> Good: 7+ <span className="float-right">345</span> </label>
                              </li>
                              <li className="pb-2">
                                <input type="checkbox" id="" name="" value="" />
                                 <label className="pl-1 w-100 d-inline"> Pleasamd: 6+ <span className="float-right">410</span> </label>
                              </li>
                              <li className="pb-2">
                                <input type="checkbox" id="" name="" value="" />
                                 <label className="pl-1 w-100 d-inline"> No Rating <span className="float-right">69</span> </label>
                              </li>
                            </ul>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary close-btn" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary apply-btn">Apply Filter</button>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="exampleModa5" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                Availability Details
              </div>
              <div className="modal-body">
                            <ul className="p-0">
                              <li>
                                  <input type="checkbox" id="" name="" value="" />
                                  <label className="pl-1 w-100 d-inline"> Only Show Available Hotels <span className="float-right">90</span> </label>
                              </li>
                            </ul>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary close-btn" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary apply-btn">Apply Filter</button>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="exampleModa6" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                Room Facilities Details
              </div>
              <div className="modal-body">
                            <ul className="p-0">
                              <li className="pb-2">
                                  <input type="checkbox" id="" name="" value="" />
                                  <label className="pl-1 w-100 d-inline"> Kitchen <span className="float-right">90</span> </label>
                              </li>
                              <li className="pb-2">
                                <input type="checkbox" id="" name="" value="" />
                                 <label className="pl-1 w-100 d-inline"> Private Bathroom  <span className="float-right">401</span> </label>
                              </li>
                              <li className="pb-2">
                                <input type="checkbox" id="" name="" value="" />
                                 <label className="pl-1 w-100 d-inline"> Air Conditioning <span className="float-right">345</span> </label>
                              </li>
                              <li className="pb-2">
                                <input type="checkbox" id="" name="" value="" />
                                 <label className="pl-1 w-100 d-inline"> Bathtub <span className="float-right">410</span> </label>
                              </li>
                              <li className="pb-2">
                                <input type="checkbox" id="" name="" value="" />
                                 <label className="pl-1 w-100 d-inline"> Terrace <span className="float-right">69</span> </label>
                              </li>
                            </ul>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary close-btn" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary apply-btn">Apply Filter</button>
              </div>
            </div>
          </div>
        </div>



<section className="flight-found hotel-sear-rslt pt-0">
  <div className="container">
          <div className="row mt-5">


              <div className="col-lg-9 col-md-12">
                <h1>Hotel Found For - Dubai</h1>
                <div className="services mb-4 mt-4 d-none d-lg-block d-md-block">
                  <div className="row">
                    <div className="col-lg-5 col-md-5">
                      <div className="row">
                        <div className="col-lg-5 col-md-5">
                          <a href=""><div className="top-pick p-2 text-center">Our top picks</div></a>
                        </div>
                        <div className="col-lg-7 col-md-7 brd-right">
                          <a href=""><div className=" pt-2 text-center">Entire homes apartments</div></a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7 col-md-7">
                      <div className="row h-100 text-center">
                      <div className="col-lg-4 col-md-4 brd-right">
                        <a href=""><div className="p-1 pt-2">Stars (highest first)</div></a>
                      </div>
                      <div className="col-lg-4 col-md-4 brd-right">
                        <a href=""><div className="p-1 pt-2">Stars (lowest first)</div></a>
                      </div>
                      <div className="col-lg-4 col-md-4">
                       <a href=""><div className="p-1 pt-2">Top reviewed</div></a>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right-bar p-0 mt-4">
                  <div className="row p-2">
                    <div className="col-lg-3 col-md-3">
                      <img className="hotel-img" src="assets/img/search-hotel.png" />
                    </div>
                    <div className="col-lg-9 col-md-9">
                      <div className="hotel-detail pb-3 pt-lg-0 pt-md-0 pt-3">
                        <div className="row">
                          <div className="col-lg-9 col-md-8 col-sm-9">
                            <div className="hotel-name">Address Boulevard <span className="fa fa-star checked mb-1 mr-1"></span><span className="fa fa-star checked mb-1 mr-1"></span><span className="fa fa-star checked mb-1 mr-1"></span><span className="fa fa-star checked mb-1 mr-1"></span><span className="fa fa-star checked mb-1 mr-1"></span></div>
                            <div className="hotel-map pt-1"><img className="pr-2" src="assets/img/hotel-map.png" /> <a href="!#"> Show Map</a> <span className="sub-txt pl-3">10km from center</span> </div>
                            <div className="sub-txt pt-2">2 other people looked for your dates in the last 10 minutes</div>
                          </div>
                          <div className="col-lg-3 col-md-4 mt-2 col-sm-3">
                            <div className="row">
                              <div className="col-lg-9 col-md-9 col-sm-10">
                                <div className="review">Very Good</div>
                                <div className="review-count">2563 reviews</div>
                              </div>
                              <div className="col-lg-3 col-sm-12 col-md-3 col-2 mob-left-margin text-center">
                                <div className="ranking p-1">9.5</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="room-detail mt-3">
                        <div className="row">
                          <div className="col-lg-8 col-md-8 col-sm-8 col-6">
                            <div className="dep-det">Deluxe Room <img className="pl-1" src="assets/img/deluxe-room.png" /></div>
                            <div className="sub-txt mt-2">1 extra-large double bed</div>
                            <div className="sub-txt mt-1"><span>Only 2 rooms left at this price on our site</span></div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-4 col-6 mt-lg-0 mt-md-0 mt-sm-0 mt-5">
                              <div className="flight-fare">
                                <div className="sub-txt text-center">02 adults 05 nights</div>
                              <div className="total-fare text-center">AED 2,450</div>
                          <Link to="/hotel-detail"><div className="text-center"><button className="view-btn" type="submit">Check Availability</button></div></Link>
                        </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right-bar p-0 mt-4">
                  <div className="row p-2">
                    <div className="col-lg-3 col-md-3">
                      <img className="hotel-img" src="assets/img/search-hotel.png" />
                    </div>
                    <div className="col-lg-9 col-md-9">
                      <div className="hotel-detail pb-3 pt-lg-0 pt-md-0 pt-3">
                        <div className="row">
                          <div className="col-lg-9 col-md-8 col-sm-8">
                            <div className="hotel-name">Address Boulevard <span className="fa fa-star checked mb-1 mr-1"></span><span className="fa fa-star checked mb-1 mr-1"></span><span className="fa fa-star checked mb-1 mr-1"></span><span className="fa fa-star checked mb-1 mr-1"></span><span className="fa fa-star checked mb-1 mr-1"></span></div>
                            <div className="hotel-map pt-1"><img className="pr-2" src="assets/img/hotel-map.png" /> <a href="!#"> Show Map</a> <span className="sub-txt pl-3">10km from center</span> </div>
                            <div className="sub-txt pt-2">2 other people looked for your dates in the last 10 minutes</div>
                          </div>
                          <div className="col-lg-3 col-md-4 col-sm-4 mt-2">
                            <div className="row">
                              <div className="col-lg-9 col-md-9 col-sm-10">
                                <div className="review">Very Good</div>
                                <div className="review-count">2563 reviews</div>
                              </div>
                              <div className="col-lg-3 col-md-3 col-sm-2 mob-left-margin text-center">
                                <div className="ranking p-1">9.5</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="room-detail mt-3">
                        <div className="row">
                          <div className="col-lg-8 col-md-8 col-sm-8 col-6">
                            <div className="dep-det">Deluxe Room <img className="pl-1" src="assets/img/deluxe-room.png" /></div>
                            <div className="sub-txt mt-2">1 extra-large double bed</div>
                            <div className="sub-txt mt-1"><span className="green-color">FREE cancellation • No prepayment needed</span></div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-4 col-6 mt-lg-0 mt-md-0 mt-sm-0 mt-5">
                              <div className="flight-fare">
                                <div className="sub-txt text-center">02 adults 05 nights</div>
                              <div className="total-fare text-center">AED 2,450</div>
                                                <Link to="/hotel-detail"><div className="text-center"><button className="view-btn" type="submit">Check Availability</button></div></Link>
                        </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right-bar p-0 mt-4">
                  <div className="row p-2">
                    <div className="col-lg-3 col-md-3">
                      <img className="hotel-img" src="assets/img/search-hotel.png" />
                    </div>
                    <div className="col-lg-9 col-md-9">
                      <div className="hotel-detail pb-3 pt-lg-0 pt-md-0 pt-3">
                        <div className="row">
                          <div className="col-lg-9 col-md-8 col-sm-9">
                            <div className="hotel-name">Address Boulevard <span className="fa fa-star checked mb-1 mr-1"></span><span className="fa fa-star checked mb-1 mr-1"></span><span className="fa fa-star checked mb-1 mr-1"></span><span className="fa fa-star checked mb-1 mr-1"></span><span className="fa fa-star checked mb-1 mr-1"></span></div>
                            <div className="hotel-map pt-1"><img className="pr-2" src="assets/img/hotel-map.png" /> <a href="!#"> Show Map</a> <span className="sub-txt pl-3">10km from center</span> </div>
                            <div className="sub-txt pt-2">2 other people looked for your dates in the last 10 minutes</div>
                          </div>
                          <div className="col-lg-3 col-md-4 col-sm-3 mt-2">
                            <div className="row">
                              <div className="col-lg-9 col-md-9">
                                <div className="review">Very Good</div>
                                <div className="review-count">2563 reviews</div>
                              </div>
                              <div className="col-lg-3 col-md-3 mob-left-margin text-center">
                                <div className="ranking p-1">9.5</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="room-detail mt-3">
                        <div className="row">
                          <div className="col-lg-8 col-md-8 col-sm-8 col-6">
                            <div className="dep-det">Deluxe Room <img className="pl-1" src="assets/img/deluxe-room.png" /></div>
                            <div className="sub-txt mt-2">1 extra-large double bed</div>
                            <div className="sub-txt mt-1"><span>Only 2 rooms left at this price on our site</span></div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-4 col-6 mt-lg-0 mt-md-0 mt-sm-0 mt-5">
                              <div className="flight-fare">
                                <div className="sub-txt text-center">02 adults 05 nights</div>
                              <div className="total-fare text-center">AED 2,450</div>
                                                 <Link to="/hotel-detail"><div className="text-center"><button className="view-btn" type="submit">Check Availability</button></div></Link>
                        </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right-bar p-0 mt-4">
                  <div className="row p-2">
                    <div className="col-lg-3 col-md-3">
                      <img className="hotel-img" src="assets/img/search-hotel.png" />
                    </div>
                    <div className="col-lg-9 col-md-9">
                      <div className="hotel-detail pb-3 pt-lg-0 pt-md-0 pt-3">
                        <div className="row">
                          <div className="col-lg-9 col-md-8 col-sm-9">
                            <div className="hotel-name">Address Boulevard <span className="fa fa-star checked mb-1 mr-1"></span><span className="fa fa-star checked mb-1 mr-1"></span><span className="fa fa-star checked mb-1 mr-1"></span><span className="fa fa-star checked mb-1 mr-1"></span><span className="fa fa-star checked mb-1 mr-1"></span></div>
                            <div className="hotel-map pt-1"><img className="pr-2" src="assets/img/hotel-map.png" /> <a href="!#"> Show Map</a> <span className="sub-txt pl-3">10km from center</span> </div>
                            <div className="sub-txt pt-2">2 other people looked for your dates in the last 10 minutes</div>
                          </div>
                          <div className="col-lg-3 col-md-4 col-sm-3 mt-2">
                            <div className="row">
                              <div className="col-lg-9 col-md-9">
                                <div className="review">Very Good</div>
                                <div className="review-count">2563 reviews</div>
                              </div>
                              <div className="col-lg-3 col-md-3 mob-left-margin text-center">
                                <div className="ranking p-1">9.5</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="room-detail mt-3">
                        <div className="row">
                          <div className="col-lg-8 col-md-8 col-sm-8 col-6">
                            <div className="dep-det">Deluxe Room<img className="pl-1" src="assets/img/deluxe-room.png" /></div>
                            <div className="sub-txt mt-2">1 extra-large double bed</div>
                            <div className="sub-txt mt-1"><span className="green-color">FREE cancellation • No prepayment needed</span></div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-4 col-6 mt-lg-0 mt-md-0 mt-sm-0 mt-5">
                              <div className="flight-fare">
                                <div className="sub-txt text-center">02 adults 05 nights</div>
                              <div className="total-fare text-center">AED 2,450</div>
                                             <Link to="/hotel-detail"><div className="text-center"><button className="view-btn" type="submit">Check Availability</button></div></Link>
                        </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right-bar p-0 mt-4">
                  <div className="row p-2">
                    <div className="col-lg-3 col-md-3">
                      <img className="hotel-img" src="assets/img/search-hotel.png" />
                    </div>
                    <div className="col-lg-9 col-md-9">
                      <div className="hotel-detail pb-3 pt-lg-0 pt-md-0 pt-3">
                        <div className="row">
                          <div className="col-lg-9 col-md-8 col-sm-9">
                            <div className="hotel-name">Address Boulevard <span className="fa fa-star checked mb-1 mr-1"></span><span className="fa fa-star checked mb-1 mr-1"></span><span className="fa fa-star checked mb-1 mr-1"></span><span className="fa fa-star checked mb-1 mr-1"></span><span className="fa fa-star checked mb-1 mr-1"></span></div>
                            <div className="hotel-map pt-1"><img className="pr-2" src="assets/img/hotel-map.png" /> <a href="!#"> Show Map</a> <span className="sub-txt pl-3">10km from center</span> </div>
                            <div className="sub-txt pt-2">2 other people looked for your dates in the last 10 minutes</div>
                          </div>
                          <div className="col-lg-3 col-md-4 col-sm-3 mt-2">
                            <div className="row">
                              <div className="col-lg-9 col-md-9">
                                <div className="review">Very Good</div>
                                <div className="review-count">2563 reviews</div>
                              </div>
                              <div className="col-lg-3 col-md-3 mob-left-margin text-center">
                                <div className="ranking p-1">9.5</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="room-detail mt-3">
                        <div className="row">
                          <div className="col-lg-8 col-md-8 col-sm-8 col-6">
                            <div className="dep-det">Deluxe Room <img className="pl-1" src="assets/img/deluxe-room.png" /></div>
                            <div className="sub-txt mt-2">1 extra-large double bed</div>
                            <div className="sub-txt mt-1"><span>Only 2 rooms left at this price on our site</span></div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-4 col-6 mt-lg-0 mt-md-0 mt-sm-0 mt-5">
                              <div className="flight-fare">
                                <div className="sub-txt text-center">02 adults 05 nights</div>
                              <div className="total-fare text-center">AED 2,450</div>
                                        <Link to="/hotel-detail"><div className="text-center"><button className="view-btn" type="submit">Check Availability</button></div></Link>
                        </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right-bar p-0 mt-4">
                  <div className="row p-2">
                    <div className="col-lg-3 col-md-3">
                      <img className="hotel-img" src="assets/img/search-hotel.png" />
                    </div>
                    <div className="col-lg-9 col-md-9">
                      <div className="hotel-detail pb-3 pt-lg-0 pt-md-0 pt-3">
                        <div className="row">
                          <div className="col-lg-9 col-md-8 col-sm-9">
                            <div className="hotel-name">Address Boulevard <span className="fa fa-star checked mb-1 mr-1"></span><span className="fa fa-star checked mb-1 mr-1"></span><span className="fa fa-star checked mb-1 mr-1"></span><span className="fa fa-star checked mb-1 mr-1"></span><span className="fa fa-star checked mb-1 mr-1"></span></div>
                            <div className="hotel-map pt-1"><img className="pr-2" src="assets/img/hotel-map.png" /> <a href="!#"> Show Map</a> <span className="sub-txt pl-3">10km from center</span> </div>
                            <div className="sub-txt pt-2">2 other people looked for your dates in the last 10 minutes</div>
                          </div>
                          <div className="col-lg-3 col-md-4 col-sm-3 mt-2">
                            <div className="row">
                              <div className="col-lg-9 col-md-9">
                                <div className="review">Very Good</div>
                                <div className="review-count">2563 reviews</div>
                              </div>
                              <div className="col-lg-3 col-md-3 mob-left-margin text-center">
                                <div className="ranking p-1">9.5</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="room-detail mt-3">
                        <div className="row">
                          <div className="col-lg-8 col-md-8 col-sm-8 col-6">
                            <div className="dep-det">Deluxe Room <img className="pl-1" src="assets/img/deluxe-room.png" /></div>
                            <div className="sub-txt mt-2">1 extra-large double bed</div>
                            <div className="sub-txt mt-1"><span className="green-color">FREE cancellation • No prepayment needed</span></div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-4 col-6 mt-lg-0 mt-md-0 mt-sm-0 mt-5">
                              <div className="flight-fare">
                                <div className="sub-txt text-center">02 adults 05 nights</div>
                              <div className="total-fare text-center">AED 2,450</div>
                                             <Link to="/hotel-detail"><div className="text-center"><button className="view-btn" type="submit">Check Availability</button></div></Link>
                        </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div className="col-lg-3 col-md-3 d-none d-lg-block">
                  <div className="left-bar hotel-search-left-bar p-3">
                      <div className="sub-title fr-br-botm pb-4 pt-1"> <img className="pr-2" src="assets/img/filter-result-icon.png" /> Filter Result</div>
                      <div className="sub-title pb-2 mt-3">Your Budget (per night)</div>
                      <div className="filter-list hotel-search-list fr-br-botm pt-2">
                          <ul className="p-0">
                              <li>
                                  <input type="checkbox" id="" name="" value="" />
                                  <label className="pl-1 w-100"> SAR 0 - SAR 200 <span className="float-right">90</span> </label>
                              </li>
                              <li>
                                  <input type="checkbox" id="" name="" value="" />
                                  <label className="pl-1 w-100"> SAR 200 - SAR 400 <span className="float-right">401</span> </label>
                              </li>
                              <li>
                                  <input type="checkbox" id="" name="" value="" />
                                  <label className="pl-1 w-100"> SAR 400 - SAR 600 <span className="float-right">345</span> </label>
                              </li>
                              <li>
                                  <input type="checkbox" id="" name="" value="" />
                                  <label className="pl-1 w-100"> SAR 600 - SAR 800 <span className="float-right">410</span> </label>
                              </li>
                              <li>
                                  <input type="checkbox" id="" name="" value="" />
                                  <label className="pl-1 w-100"> SAR 800 - SAR 1000 <span className="float-right">69</span> </label>
                              </li>
                              <li>
                                  <input type="checkbox" id="" name="" value="" />
                                  <label className="pl-1 w-100"> SAR 1000 - SAR 1500 <span className="float-right">105</span> </label>
                              </li>
                              <li>
                                  <input type="checkbox" id="" name="" value="" />
                                  <label className="pl-1 w-100"> SAR 1500 - SAR 2000 <span className="float-right">260</span> </label>
                              </li>
                          </ul>
                      </div>
                      <div className="sub-title pb-2 pt-3">Star Ranking</div>
                      <div className="filter-list hotel-search-list fr-br-botm pt-2">
                          <ul className="p-0">
                              <li>
                                  <input type="checkbox" id="" name="" value="" />
                                  <label>

                                      <span className="fa fa-star"></span>
                                  </label>
                              </li>
                              <li>
                                  <input type="checkbox" id="" name="" value="" />
                                  <label>
                                      <span className="fa fa-star checked"></span>
                                      <span className="fa fa-star checked"></span>

                                  </label>
                              </li>
                              <li>
                                  <input type="checkbox" id="" name="" value="" />
                                  <label>
                                      <span className="fa fa-star checked"></span>
                                      <span className="fa fa-star checked"></span>
                                      <span className="fa fa-star checked"></span>
                                  </label>
                              </li>
                              <li>
                                  <input type="checkbox" id="" name="" value="" />
                                  <label>
                                      <span className="fa fa-star checked"></span>
                                      <span className="fa fa-star checked"></span>
                                      <span className="fa fa-star checked"></span>
                                      <span className="fa fa-star checked"></span>
                                  </label>
                              </li>
                              <li>
                                  <input type="checkbox" id="" name="" value="" />
                                  <label>
                                      <span className="fa fa-star checked"></span>
                                      <span className="fa fa-star checked"></span>
                                      <span className="fa fa-star checked"></span>
                                      <span className="fa fa-star checked"></span>
                                      <span className="fa fa-star checked"></span>

                                  </label>
                              </li>
                          </ul>
                      </div>
                      <div className="sub-title pb-2 pt-3">Facilities</div>
                      <div className="filter-list hotel-search-list fr-br-botm pt-2">
                          <ul className="p-0">
                              <li>
                                  <input type="checkbox" id="" name="" value="" />
                                  <label className="pl-1 w-100"> Breakfast <span className="float-right">90</span> </label>
                              </li>
                              <li>
                                  <input type="checkbox" id="" name="" value="" />
                                  <label className="pl-1 w-100"> Air Conditioning <span className="float-right">401</span> </label>
                              </li>
                              <li>
                                  <input type="checkbox" id="" name="" value="" />
                                  <label className="pl-1 w-100"> Electric Kattle <span className="float-right">345</span> </label>
                              </li>
                              <li>
                                  <input type="checkbox" id="" name="" value="" />
                                  <label className="pl-1 w-100"> Wifi <span className="float-right">410</span> </label>
                              </li>
                              <li>
                                  <input type="checkbox" id="" name="" value="" />
                                  <label className="pl-1 w-100"> Non Smoking <span className="float-right">69</span> </label>
                              </li>
                          </ul>
                      </div>
                      <div className="sub-title pb-2 pt-3">Review Score</div>
                      <div className="filter-list hotel-search-list fr-br-botm pt-2">
                          <ul className="p-0">
                              <li>
                                  <input type="checkbox" id="" name="" value="" />
                                  <label className="pl-1 w-100"> Wonderful: 9+ <span className="float-right">90</span> </label>
                              </li>
                              <li>
                                  <input type="checkbox" id="" name="" value="" />
                                  <label className="pl-1 w-100"> Very Good: 8+ <span className="float-right">401</span> </label>
                              </li>
                              <li>
                                  <input type="checkbox" id="" name="" value="" />
                                  <label className="pl-1 w-100"> Good: 7+ <span className="float-right">345</span> </label>
                              </li>
                              <li>
                                  <input type="checkbox" id="" name="" value="" />
                                  <label className="pl-1 w-100"> Pleasamd: 6+ <span className="float-right">410</span> </label>
                              </li>
                              <li>
                                  <input type="checkbox" id="" name="" value="" />
                                  <label className="pl-1 w-100"> No Rating <span className="float-right">69</span> </label>
                              </li>
                          </ul>
                      </div>
                      <div className="sub-title pb-2 pt-3">Availability</div>
                      <div className="filter-list hotel-search-list fr-br-botm pt-2">
                          <ul className="p-0">
                              <li>
                                  <input type="checkbox" id="" name="" value="" />
                                  <label className="pl-1 w-100"> Only Show Available Hotels <span className="float-right">90</span> </label>
                              </li>
                          </ul>
                      </div>
                      <div className="sub-title pb-2 pt-3">Room Facilities</div>
                      <div className="filter-list hotel-search-list pt-2">
                          <ul className="p-0">
                              <li>
                                  <input type="checkbox" id="" name="" value="" />
                                  <label className="pl-1 w-100"> Kitchen <span className="float-right">90</span> </label>
                              </li>
                              <li>
                                  <input type="checkbox" id="" name="" value="" />
                                  <label className="pl-1 w-100"> Private Bathroom  <span className="float-right">401</span> </label>
                              </li>
                              <li>
                                  <input type="checkbox" id="" name="" value="" />
                                  <label className="pl-1 w-100"> Air Conditioning <span className="float-right">345</span> </label>
                              </li>
                              <li>
                                  <input type="checkbox" id="" name="" value="" />
                                  <label className="pl-1 w-100"> Bathtub <span className="float-right">410</span> </label>
                              </li>
                              <li>
                                  <input type="checkbox" id="" name="" value="" />
                                  <label className="pl-1 w-100"> Terrace <span className="float-right">69</span> </label>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>

     </div>
  </div>
    {/*<ReactPaginate*/}
    {/*    breakLabel="..."*/}
    {/*    nextLabel="next >"*/}
    {/*    onPageChange={handlePageClick}*/}
    {/*    pageRangeDisplayed={5}*/}
    {/*    pageCount={pageCount}*/}
    {/*    previousLabel={"< previous"}*/}
    {/*    pageClassName={"page-item"}*/}
    {/*    pageLinkClassName={"page-link"}*/}
    {/*    previousClassName={"page-item"}*/}
    {/*    previousLinkClassName={"page-link"}*/}
    {/*    nextClassName={"page-item"}*/}
    {/*    nextLinkClassName={"page-link"}*/}
    {/*    breakClassName={"page-item"}*/}
    {/*    breakLinkClassName={"page-link"}*/}
    {/*    containerClassName={"pagination"}*/}
    {/*    // activeClassName={"activePage"}*/}
    {/*    renderOnZeroPageCount={null}*/}
    {/*/>*/}

  <CompaniesLogo />

</section>


<Footer />

</div>
)
}

export default HotelSearchResult;
const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 , NoOfNights:"1", RoomType:"Quad",Roomnumber:"1", },
    { title: 'The Godfather', year: 1972 , NoOfNights:"2", RoomType:"Dubble",},
    { title: 'The Godfather: Part II', year: 1974 , NoOfNights:"3"},
    { title: 'The Dark Knight', year: 2008 , NoOfNights:"4"},
    { title: '12 Angry Men', year: 1957 , NoOfNights:"5"},
    { title: "Schindler's List", year: 1993 , NoOfNights:"6"},
    { title: 'Pulp Fiction', year: 1994 , NoOfNights:"7"},
    {
        title: 'The Lord of the Rings: The Return of the King',
        year: 2003, NoOfNights:"8"
    },
    { title: 'The Good, the Bad and the Ugly', year: 1966 , NoOfNights:"9"},
    { title: 'Fight Club', year: 1999 , NoOfNights:"10"},
    {
        title: 'The Lord of the Rings: The Fellowship of the Ring' , NoOfNights:"11" , RoomType:"single",
        year: 2001,
    }
];