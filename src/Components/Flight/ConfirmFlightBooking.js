
import React, { useState, useEffect } from "react";

import '../../Components/tripplanner.css';
import '../../Components/styles.css';
import { Link } from "react-router-dom";
import CompaniesLogo from "../../Components/CompaniesLogo";
import Footer from "../../Components/Footer";
import HomeCarousal from "../../Components/HomeCarousal";
import '../../Components/HomeCarousal.css';
import BlackNavbar from "../../Components/BlackNavbar";
import $ from "jquery";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useLocation, useNavigate, useParams } from "react-router-dom";

const ConfirmFlightBooking = () => {

  useEffect(() => {
    window.scrollTo(0, 0)

    fetchingData_SelectedFlight()
  }, [])

  const location = useLocation();
  const {  } = useParams()
  let navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [bookingFlight, setBookingFlight] = useState({});
  const [contineuFlight, SetContineuFlight] = useState({});

  const fetchingData_SelectedFlight = () => {
    setBookingFlight(location.state?.booking);
    SetContineuFlight(location.state?.selectedbookingdetail);

    // console.log('location: ', location);
    // console.log('selectedFlight: ', selectedFlight);


  }
  // console.log("setBookingFlight==", bookingFlight)
  // console.log("SetContineuFlight==", contineuFlight)
  const book = [bookingFlight]
  return (
      <div>
        <BlackNavbar />


        <section className="flight-found flight-detail booking">
          <div className="container">
            <h2 className="">Secure Booking - Only Takes 2 Minutes!</h2>
            <span className="filter-result float-right w-100 d-block d-lg-none d-md-none">
            <div className="mobile-container">
              <div className="topnav">
                <a href="#home" className="active"></a>
                <div className="row">
                  <div className="col-12">
                    <div id="myLinks">
                      <a className="for-border-btm" href="#news">
                        <button type="button" className="btn  airline-btn" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Price</button>
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
            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                    <button type="button" className="btn  apply-btn">Apply Filter</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              {contineuFlight?.FlightDetails?.Outbound?.map((singleFlight, index) => (

                  <div className="col-lg-3 col-md-3 d-none d-lg-block d-md-block">
                    {book?.map((item,index) => (

                        <div className="left-bar">
                          {/*{console.log("book====1",book)}*/}

                          {/*{console.log("bookingFlight===1",bookingFlight)}*/}
                          <div className="row">
                            <div className="col-lg-12 col-md-12 col-12">
                              <div className="sub-title pl-3 pt-4"> Return Flight </div>
                              <div className="sub-txt for-tit-bor pl-3 pr-3 pb-3">  </div>
                            </div>
                          </div>
                          <div className="sub-txt pt-3 pl-3 pr-3 pb-1"> {singleFlight.Origin} to {singleFlight.Destination} </div>
                          <div className="sub-txt pl-3 pr-3 pb-1"><strong>Depart:{singleFlight.DepartDate} Arrive: {singleFlight.ArrDate}</strong></div>
                          <div className="sub-txt pl-3 pr-3 pb-1"> {singleFlight.DepartTime} (10h 35m) </div>
                          <div className="sub-txt pl-3 pr-3 pb-1"> {singleFlight.FlightTime} </div>
                          <div className="sub-txt pl-3 pr-3 pb-3 for-tit-bor "><strong>{singleFlight.Carrier} {singleFlight.FlightNumber}</strong></div>
                          {contineuFlight.FlightDetails?.Inbound.map((inItem) => (

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
                  <div className="book-cont-detail">Full Name</div>
                  <div className="sub-title">Tahir Ali</div>
                  <div className="row mt-3">
                    <div className="col-lg-3 col-md-3">
                      <div className="book-cont-detail">Contact</div>
                      <div className="book-cont-detail">0332-5889658</div>
                    </div>
                    <div className="col-lg-3 col-md-3">
                      <div className="book-cont-detail">Email</div>
                      <div className="book-cont-detail">tahir.webzone@gmail.com</div>
                    </div>
                    <div className="col-lg-3 col-md-3"></div>
                  </div>

                </div>
                <div className="right-bar p-5 mt-5 flight-detail booking-detail">
                  <div className="sub-title"> Payment</div>
                  <div className="protection mt-2 pl-1">
                    <ul className="pl-lg-0 pl-md-0 pl-sm-0 pl-0">
                      <li className="pr-2"><i className="fa fa-check" aria-hidden="true"></i> We use secure transmission</li>
                      <li><i className="fa fa-check" aria-hidden="true"></i> We protect your personal information</li>
                    </ul>
                  </div>
                  <div className="row">
                    <div className="col-lg-5 col-md-5 pt-3">
                      <a><img className="" src="assets/img/visa-1.png" alt="" /></a>
                      <a><img className="" src="assets/img/visa-2.png" alt="" /></a>
                      <a><img className="" src="assets/img/visa-3.png" alt="" /></a>
                      <a><img className="" src="assets/img/visa-4.png" alt="" /></a>
                      <a><img className="" src="assets/img/visa-5.png" alt="" /></a>
                    </div>
                    <div className="col-lg-7 col-md-7"></div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-lg-6 col-md-8">
                      <label className="contnt-detail">Name on Card <span>*</span></label>
                      <div className="enter-name"><input type="text" name="Name on Card"
                          // onChange={(e) => setName_on_Card(e.target.value)}
                                                         placeholder="Name on Card*"
                                                         required /></div>
                    </div>
                    <div className="col-lg-6 col-md-6"></div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-lg-6 col-md-6">
                      <label className="contnt-detail">Debit / Credit card Number <span>*</span></label>
                      <div className="enter-name"><input type="Number" name="Credit card Number"
                          // onChange={(e) => Credit_card_Number(e.target.value)}
                                                         placeholder="Credit card Number*"
                                                         required /></div>
                    </div>
                    <div className="col-lg-6 col-md-6"></div>
                  </div>
                  <div className=" mt-4"><label className="contnt-detail">Expiry Dater <span>*</span></label></div>
                  <div className="for-border-btm">
                    <div className="row pb-4">
                      <div className="col-lg-3 col-md-4 col-6">
                        <div className="enter-name">
                          <select>
                            <option>Month</option>
                            <option>Month</option>
                            <option>Month</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-6">
                        <div className="enter-name">
                          <select>
                            <option>Year</option>
                            <option>Year</option>
                            <option>Year</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6"></div>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-lg-4 col-md-4">
                      <label className="contnt-detail">Country/Territory <span>*</span></label>
                      <div className="enter-name">
                        <select>
                          <option>United Kingdom</option>
                          <option>United Kingdom</option>
                          <option>United Kingdom</option>
                          <option>United Kingdom</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <label className="contnt-detail">City <span>*</span></label>
                      <div className="enter-name"><input type="text" value="" id="fname" name="fname" /></div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <label className="contnt-detail">Postcode <span>*</span></label>
                      <div className="enter-name"><input type="text" value="" id="fname" name="fname" /></div>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-lg-6 col-md-6">
                      <label className="contnt-detail">Billing Address 1 <span>*</span></label>
                      <div className="enter-name"><input type="text" value="" id="fname" name="fname" /></div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <label className="contnt-detail">Billing Address 2 <span>*</span></label>
                      <div className="enter-name"><input type="text" value="" id="fname" name="fname" /></div>
                    </div>
                  </div>
                  <div className="confrim-chk mt-4">
                    <input type="checkbox" id="" name="" value="" />
                    <label className="pl-2">Check the box if you do not want to receive emails from us with travel deals, special offers and other information.</label>
                  </div>
                </div>
                <div className="book-now mt-4">
                  <button onClick={handleShow} ><a className="view-btn mt-4" data-toggle="modal">Pay & Book</a></button>
                </div>

                <div id="myModal" className="modal fade" show={show} onHide={handleClose}>
                  <div className="modal-dialog modal-confirm">
                    <div className="modal-content">

                      <div className="modal-header">
                        <div className="icon-box">
                          <i className="material-icons"><i className="fa fa-check"></i></i>
                        </div>

                        <h4 className="modal-title w-100">Awesome!</h4>
                      </div>

                      <div className="modal-body">
                        <p className="text-center">Your booking has been confirmed. Check your email for detials.</p>
                      </div>

                      <div className="modal-footer">
                        <button className="btn btn-success btn-block w-100 p-2" data-dismiss="modal" aria-label="Close">OK</button>
                      </div>

                    </div>

                  </div>

                </div>
              </div>
            </div>


          </div>



          <Modal show={show} onHide={handleClose}>

            <div className=" modal-confirm modal-bg">
              <div className="modal-header">
                <div className="icon-box">
                  <i className="material-icons"><i className="fa fa-check"></i></i>
                </div>
                <h4 className="modal-title w-100 text-center mt-3">Awesome!</h4>
              </div>


              <div className="modal-body">
                <p className="text-center">Your booking has been confirmed. Check your email for detials.</p>
              </div>

              <div className="modal-footer">
                <button className="btn btn-success btn-block w-100 p-2" onClick={handleClose} data-dismiss="modal" aria-label="Close">OK</button>
              </div>

            </div>

          </Modal>



          <CompaniesLogo />



        </section>

        <Footer />
      </div>
  )
}

export default ConfirmFlightBooking