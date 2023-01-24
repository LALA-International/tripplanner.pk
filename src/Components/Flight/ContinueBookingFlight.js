

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
import { useNavigate, useParams } from "react-router-dom";
import {validateCaptcha} from "react-simple-captcha";
import axios from "axios";


const ContinueBookingFlight = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchingData_SelectedFlight()
  }, [])

  const location = useLocation()
  let navigate = useNavigate();
  const [incorrect, setIncorrect] = useState(false);
  const [bgColor, setBgColor] = useState(true);
  const [bgColor2, setBgColor2] = useState(false);
  const [noOfRows, setNoOfRows] = useState(1);
  const [deleteButton, setDeleteButton] = useState(false);
  const [booking, setBooking] = useState({});
  const [selectedbookingdetail, setSelectedbookingdetail] = useState({});
  const [msg, setMsg] = useState('');
  const [fname, setFname] = useState('');
  const [mname, setMname] = useState('');
  const [lname, setLname] = useState('');
  const [citizenshipnumber, setCitizenshipnumber] = useState('');
  const [ate_Of_Birth, setDate_Of_Birth] = useState('');
  const [xpire_Date, setExpire_Date] = useState('');
  const [title, setTitle] = useState('');

  const [passportnumber, setPassportnumber] = useState('');
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const Document_Attached = (event) => {
    setSelectedFile(event.target.files[0]);
    // setIsSelected(true);
  };
  const Passport_1st_Page = (event) => {
    setSelectedFile(event.target.files[0]);
    // setIsSelected(true);
  };
  const Citizenship_Card = (event) => {
    setSelectedFile(event.target.files[0]);
    // setIsSelected(true);
  };
  const Vaccination_Certificate = (event) => {
    setSelectedFile(event.target.files[0]);
    // setIsSelected(true);
  };
  const IsVisa = (event) => {
    setSelectedFile(event.target.files[0]);
    // setIsSelected(true);
  };

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
    setSelectedbookingdetail(location.state?.selectedFlight);

    // console.log('location: ', location);
    // console.log('selectedFlight: ', selectedFlight);


  }

  // console.log("booking==", booking)
  // console.log("selectedbookingdetail==", selectedbookingdetail)
  const book = [booking]
  // const ContinueBooking = () => {
  //
  //   navigate(`/confirm-flight-booking`, { state: { booking , selectedbookingdetail} });
  //
  // }

  let axiosConfig = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    }
  };
  const user = {  fname, mname, lname, citizenshipnumber, ate_Of_Birth, xpire_Date, passportnumber, title };
  const ContinueBooking = (e) => {
    e.preventDefault();


    axios.post('https://api.tripplanner.ae/web/sign-up', user, axiosConfig)
        .then((response) => {
          // console.log("response: ", response);

          if (response.data.status === 'fail') {
            console.log("if block");
            setMsg(response.data.message);
            setIncorrect(true);
            alert(response.data.message);
            navigate(`/confirm-flight-booking`, { state: { booking , selectedbookingdetail} });
          }
          else {
            // console.log("else block");
            localStorage.setItem('user', JSON.stringify(user));
            // console.log(user);
            navigate(`/confirm-flight-booking`, { state: { booking , selectedbookingdetail} });
          }
        })
        .catch((err) => {
          console.log("AXIOS ERROR: ", err);
        })
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
              {selectedbookingdetail?.FlightDetails?.Outbound?.map((singleFlight, index) => (

                  <div className="col-lg-3 col-md-3 d-none d-lg-block d-md-block">
                    {book?.map((item,index) => (

                        <div className="left-bar">
                          {/*{console.log("singleFlight====1",singleFlight)}*/}

                          {/*{console.log("book===1",book)}*/}
                          <div className="row">
                            <div className="col-lg-12 col-md-12 col-12">
                              <div className="sub-title pl-3 pt-4"> Return Flight </div>
                              <div className="sub-txt for-tit-bor pl-3 pr-3 pb-3"> </div>
                            </div>
                          </div>
                          <div className="sub-txt pt-3 pl-3 pr-3 pb-1"> {singleFlight.Origin} to {singleFlight.Destination} </div>
                          <div className="sub-txt pl-3 pr-3 pb-1"><strong>Depart:{singleFlight.DepartDate} Arrive: {singleFlight.ArrDate}</strong></div>
                          <div className="sub-txt pl-3 pr-3 pb-1"> {singleFlight.DepartTime} (10h 35m) </div>
                          <div className="sub-txt pl-3 pr-3 pb-1"> {singleFlight.FlightTime} </div>
                          <div className="sub-txt pl-3 pr-3 pb-3 for-tit-bor "><strong>{singleFlight.Carrier} {singleFlight.FlightNumber}</strong></div>
                          {selectedbookingdetail.FlightDetails?.Inbound.map((inItem) => (

                              <>
                                {/*{console.log("iiiiiii",inItem)}*/}
                                <div className="sub-txt pt-3 pl-3 pr-3 pb-1"> {inItem.Origin} to {inItem.Destination} </div>
                                <div className="sub-txt pl-3 pr-3 pb-1"><strong>Depart:{inItem.DepartDate} Arrive: {inItem.ArrDate}</strong></div>
                                <div className="sub-txt pl-3 pr-3 pb-1">{inItem.DepartTime} (10h 00m)</div>
                                <div className="sub-txt pl-3 pr-3 pb-1">{inItem.FlightTime}</div>
                                <div className="sub-txt pl-3 pr-3 pb-3 for-tit-bor "><strong>{inItem.Carrier} {inItem.FlightNumber}</strong> </div>
                              </>
                          ))}
                          <div className="row">
                            <div className="col-lg-12 col-md-12 col-12">
                              <div className="sub-title for-tit-bor pl-3 pt-4 pb-2"> Price Details </div>
                            </div>
                          </div>
                          <div className="sub-txt pl-3 pt-3 pr-3 pb-2"><strong> Passenger</strong></div>
                          <div className="sub-txt pl-3 pr-3 pb-3"> Adult x {item.adult} <span>AED 320</span> </div>
                          <div className="sub-txt pl-3 pr-3 pb-3"> Child x {item.child} <span>AED 320</span> </div>
                          <div className="sub-txt pl-3 pr-3 fr-br-botm pb-3"> Infant x {item.infant} <span>AED 320</span> </div>
                          <div className="sub-title pl-3 pr-3 mt-2 pb-4"> Total <span> 960</span> </div>
                        </div>
                    ))}
                  </div>

              ))}
              <div className="col-lg-9 col-md-9">
                <div className="right-bar p-4 flight-detail booking-detail">

                  <div className="container tabs-wrap">
                    <ul className="nav nav-pills nav-pills-bg" role="tablist">
                      {/*<li role="presentation" className="nav-item">*/}
                      {/*  <a className={bgColor ? "nav-link  active" : "nav-link nav-bg"} onClick={activeStep2} href="#billing" aria-controls="billing" role="tab" data-toggle="tab" aria-expanded="true">FLIGHT</a>*/}
                      {/*</li>*/}
                      <li role="presentation" className="nav-item">
                        <a className={bgColor2 ? "nav-link  active" : "nav-link nav-bg"  } onClick={activeStep} href="#shipping" aria-controls="billing" role="tab" data-toggle="tab" aria-expanded="true">PASSENGER</a>
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

                      <div role="tabpanel" className="tab-pane active" id="billing">
                        {[...Array(noOfRows)].map((elementInArray, index) => {

                          return (
                              <div className="col-md-offset-3 mt-4 active">
                                <div className="sub-title pb-2 mt-5">Passenger Details</div>
                                <div className="row">
                                  <div className="col-lg-3 col-md-3 col-sm-2 col-12">
                                    <label className="for-color1 pt-2">Title <span>*</span></label>
                                    <div className="enter-name">
                                      <select >
                                        <option onClick={(e) => { setTitle(e.target.getAttribute('data-value')) }}>Miss</option>
                                        <option onClick={(e) => { setTitle(e.target.getAttribute('data-value')) }}>Mr</option>
                                        <option onClick={(e) => { setTitle(e.target.getAttribute('data-value')) }}>Mrs</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="col-lg-3 col-md-3 col-sm-4 col-12">
                                    <label className="for-color1 pt-2">First Name<span>*</span></label>
                                    <div className="enter-name">
                                      <input type="text" name="firstname"
                                             onChange={(e) => setFname(e.target.value)}
                                             placeholder="First name*"
                                             required />
                                      {/*<input type="text" id="fname" name="fname" />*/}
                                    </div>
                                  </div>
                                  <div className="col-lg-3 col-md-3 col-sm-4 col-12">
                                    <label className="for-color1 pt-2">Middle Name<span>*</span></label>
                                    <div className="enter-name"> <input type="text" name="middname"
                                                                        onChange={(e) => setMname(e.target.value)}
                                                                        placeholder="Middle Name*"
                                                                        required /></div>
                                  </div>
                                  <div className="col-lg-3 col-md-3 col-sm-4 col-12">
                                    <label className="for-color1 pt-2">Last Name<span>*</span></label>
                                    <div className="enter-name"><input type="text" name="lastname"
                                                                       onChange={(e) => setLname(e.target.value)}
                                                                       placeholder="Last Name*"
                                                                       required /></div>
                                  </div>
                                  <div className="col-lg-3 col-md-3 col-sm-4 col-12">
                                    <label className="for-color1 pt-4">Passport Number<span>*</span></label>
                                    <div className="enter-name"><input type="text" name="number" //
                                                                       onChange={(e) => setPassportnumber(e.target.value)}
                                                                       placeholder="Passport Number*"
                                                                       required /></div>
                                  </div>
                                  <div className="col-lg-3 col-md-3 col-sm-4 col-12">
                                    <label className="for-color1 pt-4">Date Of Birth <span>*</span></label>
                                    <div className="enter-name">
                                      <input
                                          onChange={(e) => setDate_Of_Birth(e.target.value)}
                                          //    isValidDate={disableCustomDt}
                                          name="setDate_Of_Birthdate" id="setDate_Of_Birthdate" type="date"  required></input>
                                      {/*<input type="Date" name="daterange" className="" value="01/01/2018 - 01/15/2018" />*/}
                                    </div>
                                  </div>
                                  <div className="col-lg-3 col-md-3 col-sm-4 col-12">
                                    <label className="for-color1 pt-4">Expire Date <span>*</span></label>
                                    <div className="enter-name">
                                      <input
                                          onChange={(e) => setExpire_Date(e.target.value)}
                                          //    isValidDate={disableCustomDt}
                                          name="setExpire_Date" id="setExpire_Date" type="date"  required></input>
                                      {/*<input type="Date" name="daterange" className="" value="01/01/2018 - 01/15/2018" />*/}
                                    </div>
                                  </div>
                                  <div className="col-lg-3 col-md-3 col-sm-4 col-12">
                                    <label className="for-color1 pt-4">Citizenship Number<span>*</span></label>
                                    <div className="enter-name"><input type="text" name="number"
                                                                       onChange={(e) => setCitizenshipnumber(e.target.value)}
                                                                       placeholder="Citizenship Number*"
                                                                       required /></div>
                                  </div>
                                  <div className="col-lg-4 col-md-4">
                                    <label className="for-color1 pt-4">Document Attached <span>*</span></label>
                                    <div className="">
                                      <input type="file" id="img" name="img" accept="image/*" required
                                             onChange={Document_Attached}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4">
                                    <label className="for-color1 pt-4">Passport 1st Page <span>*</span></label>
                                    <div className="">
                                      <input type="file" id="img" name="img" accept="image/*" required
                                             onChange={Passport_1st_Page}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4">
                                    <label className="for-color1 pt-4">Citizenship Card <span>*</span></label>
                                    <div className="">
                                      <input type="file" id="img" name="img" accept="image/*" required
                                             onChange={Citizenship_Card}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4">
                                    <label className="for-color1 pt-4">Visa<span>*</span></label>
                                    <div className="">
                                      <input type="file" id="img" name="img" accept="image/*" required
                                             onChange={IsVisa}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4">
                                    <label className="for-color1 pt-4">Vaccination Certificate <span>*</span></label>
                                    <div className="">
                                      <input type="file" id="img" name="img" accept="image/*" required
                                             onChange={Vaccination_Certificate}
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-lg-12">
                                    <button id="rowAdder" type="button" onClick={Increment} className="btn mt-4 nav-next-btn btn-dark btn-sm"><span className="bi bi-plus-square-dotted"></span> Add Passenger</button>
                                    {deleteButton ?
                                        <button id="rowAdder" type="button" onClick={Decrement} className="btn ml-1 mt-4 nav-next-btn btn-dark btn-sm"><span className="bi bi-plus-square-dotted"></span> Delete</button>
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
                              {/*<Link to="/confirm-flight-booking">*/}
                              <button className="btn nav-next-btn btn-primary nextBtn btn-lg pull-right btn-bg-color"onClick={ContinueBooking} type="button">Continue Booking</button>
                              {/*</Link>*/}
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