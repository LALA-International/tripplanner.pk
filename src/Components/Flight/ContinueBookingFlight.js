import React, { useState, useEffect } from "react";
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



const ContinueBookingFlight = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchingData_SelectedFlight()
  }, [])

const location = useLocation()

  const [bgColor, setBgColor] = useState(true);
  const [bgColor2, setBgColor2] = useState(false);
  const [noOfRows, setNoOfRows] = useState(1);
  const [deleteButton, setDeleteButton] = useState(false);
  const [booking, setBooking] = useState({});

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


  // const activeStep = () => {
  //   setBgColor(true);
  //   setBgColor2(false);
  //   window.scrollTo(0, 0);
  //
  // }

  const activeStep = () => {
    setBgColor(false);
    setBgColor2(true);
    window.scrollTo(0, 0);

  }
  const fetchingData_SelectedFlight = () => {
    setBooking(location.state?.passengers);

    // console.log('location: ', location);
    // console.log('selectedFlight: ', selectedFlight);
    console.log("passjjjj", booking)

  }


  return (
    <div>
      <BlackNavbar />

      <section className="flight-found flight-detail">
        <div className="container">
          <h2 className="">SECURE BOOKING - ONLY TAKES 2 MINUTES!</h2>
          <span className="filter-result float-right w-100 d-block d-lg-none d-md-none">
            <div className="mobile-container">
              <div className="topnav">
                <Link to="/" className="active"></Link>
                <div className="row">
                  <div className="col-12">
                    <div id="myLinks">
                      <a className="for-border-btm" href="#news">
                        <button type="button" className="btn btn-primary airline-btn" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Price</button>
                      </a>
                    </div>
                  </div>
                </div>
                {/*   <a href="javascript:void(0);" className="icon" onclick="myFunction()">
                                         <i className="fa fa-filter" aria-hidden="true"></i>
                                      </a> */ }
              </div>
            </div>
          </span>
          <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  Price Details
                </div>
                <div className="modal-body">
                  <div className="sub-title"> Price Details </div>
                  <div className="sub-txt pb-4 pt-2">Passenger</div>
                  <div className="sub-txt pb-2"><strong> 1 Adult</strong></div>
                  <div className="sub-txt pb-3"> Adult x 1 <span>AED 320</span> </div>
                  <div className="sub-txt pb-3"> Child x 1 <span>AED 320</span> </div>
                  <div className="sub-txt fr-br-botm pb-3"> Infant x 1 <span>AED 320</span> </div>
                  <div className="sub-title mt-3 p-2"> Total <span> 960</span> </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary close-btn" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary apply-btn">Apply Filter</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">

            <div className="col-lg-3 col-md-3 d-none d-lg-block d-md-block">
              <div className="left-bar">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-12">
                    <div className="sub-title pl-3 pt-4"> Return Flight </div>
                    <div className="sub-txt for-tit-bor pl-3 pr-3 pb-3"> 2 tickets - 2 Adults </div>
                  </div>
                </div>
                <div className="sub-txt pt-3 pl-3 pr-3 pb-1"> London (LHR) to Dubai (DXB) </div>
                <div className="sub-txt pl-3 pr-3 pb-1"><strong>Thu, 17 Sep</strong></div>
                <div className="sub-txt pl-3 pr-3 pb-1"> 09:55 - 23:30 (10h 35m) </div>
                <div className="sub-txt pl-3 pr-3 pb-1"> 2h 25m stop in AMS </div>
                <div className="sub-txt pl-3 pr-3 pb-3 for-tit-bor "><strong>Etihad Airline 1008</strong></div>
                <div className="sub-txt pt-3 pl-3 pr-3 pb-1"> Dubai (DXB) to London (LCY) </div>
                <div className="sub-txt pl-3 pr-3 pb-1"><strong>Wed, 30 Sep</strong></div>
                <div className="sub-txt pl-3 pr-3 pb-1">01:10 - 08:10 (10h 00m)</div>
                <div className="sub-txt pl-3 pr-3 pb-1">1h 45m stop in AMS</div>
                <div className="sub-txt pl-3 pr-3 pb-3 for-tit-bor "><strong>British Airways 428</strong></div>
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-12">
                    <div className="sub-title for-tit-bor pl-3 pt-4 pb-2"> Price Details </div>
                  </div>
                </div>
                <div className="sub-txt pl-3 pt-3 pr-3 pb-2"><strong> Passenger</strong></div>
                <div className="sub-txt pl-3 pr-3 pb-3"> Adult x 1 <span>AED 320</span> </div>
                <div className="sub-txt pl-3 pr-3 pb-3"> Child x 1 <span>AED 320</span> </div>
                <div className="sub-txt pl-3 pr-3 fr-br-botm pb-3"> Infant x 1 <span>AED 320</span> </div>
                <div className="sub-title pl-3 pr-3 mt-2 pb-4"> Total <span> 960</span> </div>
              </div>
            </div>

            <div className="col-lg-9 col-md-9">
              <div className="right-bar p-4 flight-detail booking-detail">

                <div className="container tabs-wrap">
                  <ul className="nav nav-pills nav-pills-bg" role="tablist">
                    {/*<li role="presentation" className="nav-item">*/}
                    {/*  <a className={bgColor ? "nav-link  active" : "nav-link nav-bg"} onClick={activeStep2} href="#billing" aria-controls="billing" role="tab" data-toggle="tab" aria-expanded="true">FLIGHT</a>*/}
                    {/*</li>*/}
                    <li role="presentation" className="nav-item">
                      <a className={bgColor2 ? "nav-link  active" : "nav-link nav-bg"  } onClick={activeStep} href="#shipping" aria-controls="shipping" role="tab" data-toggle="tab" aria-expanded="true">PASSENGER</a>
                    </li>

                  </ul>


                  <div className="tab-content">

                    {/*<div role="tabpanel" className="tab-pane active" id="billing">*/}


                    {/*  <div className="col-md-offset-3 mt-5">*/}
                    {/*    <div className="sub-title pb-2">Flight Details</div>*/}
                    {/*    <div className="row">*/}
                    {/*      <div className="col-lg-4 col-md-4 col-sm-2 col-12">*/}
                    {/*        <label className="for-color1 pt-2">Booking Date <span>*</span></label>*/}
                    {/*        <div className="enter-name"><input type="Date" /></div>*/}
                    {/*      </div>*/}
                    {/*      <div className="col-lg-4 col-md-4 col-sm-4 col-12">*/}
                    {/*        <label className="for-color1 pt-2">Airline<span>*</span></label>*/}
                    {/*        <div className="enter-name">*/}
                    {/*          <select>*/}
                    {/*            <option>Qatar Airways</option>*/}
                    {/*            <option>Emirates Airline</option>*/}
                    {/*          </select>*/}
                    {/*        </div>*/}
                    {/*      </div>*/}
                    {/*      <div className="col-lg-4 col-md-4 col-sm-4 col-12">*/}
                    {/*        <label className="for-color1 pt-2">Trip Mode <span>*</span></label>*/}
                    {/*        <div className="enter-name">*/}
                    {/*          <select>*/}
                    {/*            <option>One Way</option>*/}
                    {/*            <option>Return</option>*/}
                    {/*            <option>Multi City</option>*/}
                    {/*          </select>*/}
                    {/*        </div>*/}
                    {/*      </div>*/}
                    {/*      <div className="col-lg-4 col-md-4 col-sm-4 col-12">*/}
                    {/*        <label className="for-color1 pt-4">Sector <span>*</span></label>*/}
                    {/*        <div className="enter-name">*/}
                    {/*          <select>*/}
                    {/*            <option>Please Select</option>*/}
                    {/*            <option>JED APT- JED</option>*/}
                    {/*            <option>JED APT-MAK</option>*/}
                    {/*          </select>*/}
                    {/*        </div>*/}
                    {/*      </div>*/}
                    {/*      <div className="col-lg-4 col-md-4 col-sm-4 col-12">*/}
                    {/*        <label className="for-color1 pt-4">Departure/Return Date <span>*</span></label>*/}
                    {/*        <div className="enter-name"><input type="text" name="daterange" className="" value="01/01/2018 - 01/15/2018" /></div>*/}

                    {/*      </div>*/}
                    {/*      <div className="col-lg-4 col-md-4 col-sm-4 col-12">*/}
                    {/*        <label className="for-color1 pt-4">Passenger <span>*</span></label>*/}
                    {/*        <div className="enter-name">*/}
                    {/*          <select>*/}
                    {/*            <option>Please Select</option>*/}
                    {/*            <option>1</option>*/}
                    {/*            <option>2</option>*/}
                    {/*            <option>3</option>*/}
                    {/*            <option>4</option>*/}
                    {/*          </select>*/}
                    {/*        </div>*/}
                    {/*      </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="row">*/}
                    {/*      <div className="col-lg-12 float-right text-right mt-3">*/}
                    {/*        <a className="btn nav-next-btn continue" onClick={activeStep2} href="#shipping" role="tab" data-toggle="tab" aria-expanded="true">NEXT</a>*/}


                    {/*      </div>*/}
                    {/*    </div>*/}

                    {/*  </div>*/}


                    {/*</div>*/}

                    <div role="tabpanel" className="tab-pane" id="shipping">
                      {[...Array(noOfRows)].map((elementInArray, index) => {

                        return (
                          <div className="col-md-offset-3 mt-4 active">
                            <div className="sub-title pb-2 mt-5">Passenger Details</div>
                            <div className="row">
                              <div className="col-lg-3 col-md-3 col-sm-2 col-12">
                                <label className="for-color1 pt-2">Title <span>*</span></label>
                                <div className="enter-name">
                                  <select>
                                    <option>Miss</option>
                                    <option>Mr</option>
                                    <option>Mrs</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-lg-3 col-md-3 col-sm-4 col-12">
                                <label className="for-color1 pt-2">First Name<span>*</span></label>
                                <div className="enter-name"><input type="text" id="fname" name="fname" /></div>
                              </div>
                              <div className="col-lg-3 col-md-3 col-sm-4 col-12">
                                <label className="for-color1 pt-2">Middle Name<span>*</span></label>
                                <div className="enter-name"><input type="text" id="fname" name="fname" /></div>
                              </div>
                              <div className="col-lg-3 col-md-3 col-sm-4 col-12">
                                <label className="for-color1 pt-2">Last Name<span>*</span></label>
                                <div className="enter-name"><input type="text" id="fname" name="fname" /></div>
                              </div>
                              <div className="col-lg-3 col-md-3 col-sm-4 col-12">
                                <label className="for-color1 pt-4">Passport Number<span>*</span></label>
                                <div className="enter-name"><input type="text" id="fname" name="fname" /></div>
                              </div>
                              <div className="col-lg-3 col-md-3 col-sm-4 col-12">
                                <label className="for-color1 pt-4">Date Of Birth <span>*</span></label>
                                <div className="enter-name"><input type="Date" name="daterange" className="" value="01/01/2018 - 01/15/2018" /></div>
                              </div>
                              <div className="col-lg-3 col-md-3 col-sm-4 col-12">
                                <label className="for-color1 pt-4">Expire Date <span>*</span></label>
                                <div className="enter-name"><input type="Date" name="daterange" className="" value="01/01/2018 - 01/15/2018" /></div>
                              </div>
                              <div className="col-lg-3 col-md-3 col-sm-4 col-12">
                                <label className="for-color1 pt-4">Citizenship Number<span>*</span></label>
                                <div className="enter-name"><input type="text" id="fname" name="fname" /></div>
                              </div>
                              <div className="col-lg-4 col-md-4">
                                <label className="for-color1 pt-4">Document Attached <span>*</span></label>
                                <div className=""><input type="file" id="img" name="img" accept="image/*" /></div>
                              </div>
                              <div className="col-lg-4 col-md-4">
                                <label className="for-color1 pt-4">Passport 1st Page <span>*</span></label>
                                <div className=""><input type="file" id="img" name="img" accept="image/*" /></div>
                              </div>
                              <div className="col-lg-4 col-md-4">
                                <label className="for-color1 pt-4">Citizenship Card <span>*</span></label>
                                <div className=""><input type="file" id="img" name="img" accept="image/*" /></div>
                              </div>
                              <div className="col-lg-4 col-md-4">
                                <label className="for-color1 pt-4">Visa<span>*</span></label>
                                <div className=""><input type="file" id="img" name="img" accept="image/*" /></div>
                              </div>
                              <div className="col-lg-4 col-md-4">
                                <label className="for-color1 pt-4">Vaccination Certificate <span>*</span></label>
                                <div className=""><input type="file" id="img" name="img" accept="image/*" /></div>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-lg-12">
                                <button id="rowAdder" type="button" onClick={Increment} className="btn mt-4 nav-next-btn btn-dark"><span className="bi bi-plus-square-dotted"></span> Add Passenger</button>
                                {deleteButton ?
                                  <button id="rowAdder" type="button" onClick={Decrement} className="btn ml-1 mt-4 nav-next-btn btn-dark"><span className="bi bi-plus-square-dotted"></span> Delete</button>
                                  :
                                  <p></p>
                                }
                              </div>
                            </div>


                          </div>



                        );
                      })}


                      <div className="row">
                        <div className="col-lg-12">
                          <div className="float-right mt-3">
                            {/*<a className="btn nav-next-btn btn-primary back mr-1" onClick={activeStep} href="#billing" role="tab" data-toggle="tab" aria-expanded="true">Previous</a>*/}
                            <Link to="/confirm-flight-booking"><button className="btn nav-next-btn btn-primary nextBtn btn-lg pull-right btn-bg-color" type="button">Continue Booking</button></Link>
                          </div>
                        </div>
                      </div>
                    </div>





                  </div></div>


                <div id="push"></div>



              </div>
            </div>

          </div>

          <CompaniesLogo />



        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ContinueBookingFlight;