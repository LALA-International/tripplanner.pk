import React, { useState, useEffect } from "react";
import "../tripplanner.css";
import "../../Components/styles.css";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer";
import "../../Components/HomeCarousal.css";
import BlackNavbar from "../../Components/BlackNavbar";
import $ from "jquery";
import { default as axios } from "axios";
import Loader from "../Loader";

const SelectedFlight = () => {
  const [flights, setFlights] = useState({});
  const [selectedFlight, setSelectedFlight] = useState({});
  const [spinner, setSpinner] = useState(false);
  const [passengers, setPassengers] = useState({});

  let navigate = useNavigate();
  let axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  };
  const Key = "UXVpUGVja0BBUElAS0VZQEZPUkBEQVRBQE1JTklORzkxNTY2";

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    fetchingData_SelectedFlight();
  }, []);

  const fetchingData_SelectedFlight = () => {
    setSelectedFlight(location.state.key);
    setPassengers(location.state?.searchedResult);

    const flightdetails = {
      Key,
    };
    setSpinner(true);
    axios
      .post(
        "https://api.tripplanner.ae/web/flight-search-result",
        flightdetails,
        axiosConfig
      )
      .then((response) => {
        setFlights(response.data.data);
        setSpinner(false);
      })
      .catch((err) => { });
  };

  if (spinner === true) {
    return <Loader />;
  }
  const pass = [passengers];
  const selectedTicket = () => {
    navigate(`/continue-flight-booking`, {
      state: { passengers, selectedFlight },
    });
  };

  return (
    <div>
      <BlackNavbar />

      <section className="flight-found flight-detail mt-5">
        <div className="container">
          <h2 className="">Selected Flight </h2>
          <span className="filter-result float-right w-100 d-block d-lg-none d-md-none">
            <div className="mobile-container">
              <div className="topnav">
                <a href="#home" className="active"></a>
                <div className="row">
                  <div className="col-12">
                    <div id="myLinks">
                      <a className="for-border-btm" href="#news">
                        <button
                          type="button"
                          className="btn btn-primary airline-btn"
                          data-toggle="modal"
                          data-target="#exampleModal"
                          data-whatever="@mdo"
                        >
                          Price
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </span>
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">Price Details</div>
                <div className="modal-body">
                  <div className="sub-title"> Price Details </div>
                  <div className="sub-txt pb-4 pt-2">Passenger</div>
                  <div className="sub-txt pb-2">
                    <strong> 1 Adult</strong>
                  </div>
                  <div className="sub-txt pb-3">
                    {" "}
                    Adult x 1 <span>AED 320</span>{" "}
                  </div>
                  <div className="sub-txt pb-3">
                    {" "}
                    Child x 1 <span>AED 320</span>{" "}
                  </div>
                  <div className="sub-txt fr-br-botm pb-3">
                    {" "}
                    Infant x 1 <span>AED 320</span>{" "}
                  </div>
                  <div className="sub-title mt-3 p-2">
                    {" "}
                    Total <span> 960</span>{" "}
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary close-btn"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary apply-btn">
                    Apply Filter
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            {pass?.map((item, index) => (
              <div className="col-lg-3 col-md-3 d-none d-lg-block d-md-block">
                <div className="left-bar">
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-12">
                      <div className="sub-title for-tit-bor pl-3 pt-4 pb-2">
                        {" "}
                        Price Details{" "}
                      </div>
                    </div>
                  </div>

                  <div className="sub-txt pl-3 pt-3 pr-3 pb-2">
                    <strong> Passenger</strong>
                  </div>
                  <div className="sub-txt pl-3 pr-3 pb-3">
                    {" "}
                    Adult x {item.adult} <span>AED 320</span>{" "}
                  </div>
                  <div className="sub-txt pl-3 pr-3 pb-3">
                    {" "}
                    Child x {item.child} <span>AED 320</span>{" "}
                  </div>
                  <div className="sub-txt pl-3 pr-3 fr-br-botm pb-3">
                    {" "}
                    Infant x {item.infant} <span>AED 320</span>{" "}
                  </div>
                  <div className="sub-title pl-3 pr-3 mt-2">
                    {" "}
                    Total <span> { }</span>{" "}
                  </div>
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-12">
                      <div className="sub-title for-tit-bor pl-3 pt-4 pb-2">
                        {" "}
                        Additional Information{" "}
                      </div>
                    </div>
                  </div>
                  <div className="sub-txt pl-3 pr-3 pb-2 pt-3">
                    <strong>
                      Fare Rules {item.origin} - {item.destination}
                    </strong>
                  </div>
                  <div className="sub-txt pl-3 pr-3 pb-3">
                    Any cancellation or changes made to this booking may be
                    subject to airline fees, please check fare rules before
                    requesting for a refund.
                  </div>
                </div>
              </div>
            ))}

            <div className="col-lg-9 col-md-9">
              {selectedFlight?.FlightDetails?.Outbound?.map(
                (singleFlight, index) => (
                  <>
                    {/*{console.log("======selectedFlight======", selectedFlight)}*/}
                    <div className="right-bar p-3 flight-detail">
                      <div className="sub-title">
                        {" "}
                        <img
                          src="assets/img/dep-icon.png"
                          onError={({ currentTarget }) => {
                            currentTarget.onerror = null;
                            currentTarget.src = "/assets/img/dep-icon.png";
                          }}
                        />{" "}
                        Departure{" "}
                      </div>
                      <div className="fr-br-botm pb-4 mt-3">
                        <div className="row">
                          <div className="col-lg-3 col-md-3 col-6">
                            <div className="dep-det">
                              {singleFlight?.Carrier}
                            </div>
                            <div className="sub-txt">
                              {singleFlight?.FlightNumber}
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-3 col-6">
                            <div className="dep-det">
                              {singleFlight?.Origin}
                            </div>
                            <div className="sub-txt">
                              {" "}
                              {singleFlight?.DepartTime} -{" "}
                              {singleFlight?.DepartDate}
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-3 col-6">
                            <div className="dep-det">Duration Time</div>
                            <div className="sub-txt">
                              {singleFlight?.FlightTime}
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-3 col-6">
                            <div className="dep-det">
                              {singleFlight?.Destination}
                            </div>
                            <div className="sub-txt">
                              {singleFlight?.ArrTime} - {singleFlight?.ArrDate}
                            </div>
                          </div>
                        </div>
                      </div>
                      {selectedFlight?.FlightDetails?.Inbound.map(
                        (singleReturnFlight, index) => (
                          <>
                            <div className="sub-title mt-4">
                              {" "}
                              <img
                                src="assets/img/dep-icon.png"
                                onError={({ currentTarget }) => {
                                  currentTarget.onerror = null;
                                  currentTarget.src =
                                    "/assets/img/dep-icon.png";
                                }}
                              />{" "}
                              Return{" "}
                            </div>
                            <div className="row mt-3">
                              <div className="col-lg-3 col-md-3 col-6">
                                <div className="dep-det">
                                  {singleFlight?.Carrier}
                                </div>
                                <div className="sub-txt">
                                  {singleFlight?.FlightNumber}
                                </div>
                              </div>
                              <div className="col-lg-3 col-md-3 col-6">
                                <div className="dep-det">
                                  {singleReturnFlight?.Origin}
                                </div>
                                <div className="sub-txt">
                                  {singleReturnFlight?.DepartTime} -{" "}
                                  {singleReturnFlight?.DepartDate}
                                </div>
                              </div>
                              <div className="col-lg-3 col-md-3 col-6">
                                <div className="dep-det"> Duration Time</div>
                                <div className="sub-txt">
                                  {" "}
                                  {singleReturnFlight?.FlightTime}
                                </div>
                              </div>
                              <div className="col-lg-3 col-md-3 col-6">
                                <div className="dep-det">
                                  {" "}
                                  {singleReturnFlight?.Destination}
                                </div>
                                <div className="sub-txt">
                                  {singleReturnFlight?.ArrTime} -{" "}
                                  {singleReturnFlight?.ArrDate}
                                </div>
                              </div>
                            </div>
                            <div className="text-center mt-2">
                              <button
                                className="view-btn"
                                onClick={selectedTicket}
                                type="submit"
                              >
                                Continue Booking
                              </button>
                            </div>
                          </>
                        )
                      )}
                    </div>
                  </>
                )
              )}
            </div>
          </div>

          <div className="stay-us">
            <div className="container">
              <h3 className="text-center mt-5 pt-3">Stay With Us</h3>
              <div className="row">
                <div className="col-md-12 col-sm-12 center-col text-center mt-3">
                  <a href="#" className="social-btn fb-btn button mr-1">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#" className="social-btn whats-btn button mr-1">
                    <i className="fa fa-whatsapp"></i>
                  </a>
                  <a href="#" className="social-btn twitter-btn button mr-1">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="#" className="social-btn google-btn button mr-1">
                    <i className="fa fa-google"></i>
                  </a>
                  <a href="#" className="social-btn linked-btn button mr-1">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SelectedFlight;


