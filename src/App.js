
import React from "react";
import "./App.css";
import Home from "./Components/Home";
import {  Routes, Route } from "react-router-dom";
import Hotel from "./Components/Hotel";
import Flight from "./Components/Flight";
import Umrah from "./Components/Umrah";
import Tour from "./Components/Tour";
import UserLogin from "./Components/UserLogin";
import UserRegistration from "./Components/UserRegistration";
import AgentLogin from "./Components/AgentLogin";
import Visa from "./Components/Visa";
import Transport from "./Components/Transport";
import Settings from "./Components/Settings";
import CountryPage from "./Components/Flight/CountryPage";
import SelectedFlight from "./Components/Flight/SelectedFlight";
import ContinueBookingFlight from "./Components/Flight/ContinueBookingFlight";
import ConfirmFlightBooking from "./Components/Flight/ConfirmFlightBooking";
import FlightSearchResult from "./Components/Flight/FlightSearchResult";
import UmrahPackages from "./Components/Umrah/UmrahPackages";
import UmrahPackageDetail from "./Components/Umrah/UmrahPackageDetail";
import ContinueBookingUmrahPackage from "./Components/Umrah/ContinueBookingUmrahPackage";
import UmrahPackageBookingConfirm from "./Components/Umrah/UmrahPackageBookingConfirm";
import HotelDetail from "./Components/Hotel/HotelDetail";
import HotelSearchResult from "./Components/Hotel/HotelSearchResult";
import ForgotPassword from "./Components/ForgotPassword";
import VisaSearchResult from "./Components/Visa/VisaSearchResult";
import ContinueBookingVisa from "./Components/Visa/ContinueBookingVisa";
import VisaBookingConfirm from "./Components/Visa/VisaBookingConfirm";
import TransportSearchResult from "./Components/Transport/TransportSearchResult";
import BusinessGMC from "./Components/Transport/BusinessGMC";
import ContinueBookingTransport from "./Components/Transport/ContinueBookingTransport";
import TransportBookingConfirm from "./Components/Transport/TransportBookingConfirm";
import AirportTransfer from "./Components/Transport/AirportTransfer";
import UmrahTransportSearchResult from "./Components/UmrahPackage/UmrahTransportSearchResult";
import UmrahTransportDetail from "./Components/UmrahPackage/UmrahTransportDetail";
import UmrahFlightSearchResult from "./Components/UmrahPackage/UmrahFlightSearchResult";
import UmrahSelectedFlight from "./Components/UmrahPackage/UmrahSelectedFlight";
import UmrahVisaSearchResult from "./Components/UmrahPackage/UmrahVisaSearchResult";
import VisaSearchResultThailand from "./Components/Visa/VisaSearchResultThailand";
import VisaSearchResultMalaysia from "./Components/Visa/VisaSearchResultMalaysia";
import ContinueBookingCustomizeUmrah from "./Components/UmrahPackage/ContinueBookingCustomizeUmrah";
import UmrahBookingConfirm from "./Components/UmrahPackage/UmrahBookingConfirm";
import TourDetail from "./Components/TourDetail";
import ContinueBookingTour from "./Components/Tour/ContinueBookingTour";
import TourBookingConfirm from "./Components/Tour/TourBookingConfirm";
import TourPackages from "./Components/Tour/TourPackages";
import SelectedHotel from "./Components/Hotel/SelectedHotel";
import HotelBookingConfirm from "./Components/Hotel/HotelBookingConfirm";
import UmrahGuide from "./Components/UmrahGuide";
import HajjGuide from "./Components/HajjGuide";
import UmrahVisa from "./Components/Umrah/UmrahVisa";
import MasjidAqsa from "./Components/MasjidAqsa";
import Ziyarat from "./Components/Ziyarat";
import ZiyaratDetail from "./Components/ZiyaratDetail";
import Gallery from "./Components/Gallery";
import HajjPackages from "./Components/HajjPackages";
import ViewAll from "./Components/ViewAll";
import AboutUs from "./Components/AboutUs";
import TermsConditions from "./Components/TermsConditions";
import Faqs from "./Components/Faqs";
import Complaints from "./Components/Complaints";
import ContactUs from "./Components/ContactUs";
import CityPage from "./Components/CityPage";
import MultipleFlights from "./Components/Flight/MultipleFlights";
import MultipleFlightSearchResult from "./Components/Flight/MultipleFlightSearchResult";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="hotel" element={<Hotel />} />
                <Route path="flight" element={<Flight />} />
                <Route path="umrah" element={<Umrah />} />
                <Route path="tour" element={<Tour />} />
                <Route path="faq's" element={<Faqs />} />
                <Route path="contact-us" element={<ContactUs />} />
                <Route path="city-page" element={<CityPage />} />
                <Route path="complaints" element={<Complaints />} />
                <Route path="terms-and-conditions" element={<TermsConditions />} />
                <Route path="user-login" element={<UserLogin />} />
                <Route path="user-registration" element={<UserRegistration />} />
                <Route path="agent-login" element={<AgentLogin />} />
                <Route path="tour" element={<Tour />} />
                <Route path="about-us" element={<AboutUs />} />
                <Route path="visa" element={<Visa />} />
                <Route path="transport" element={<Transport />} />
                <Route path="settings" element={<Settings />} />
                <Route path="country-page" element={<CountryPage />} />
                <Route path="selected-flight/detail" element={<SelectedFlight />} />
                <Route
                    path="continue-flight-booking"
                    element={<ContinueBookingFlight />}
                />
                <Route
                    path="confirm-flight-booking"
                    element={<ConfirmFlightBooking />}
                />
                <Route path="multi-flights" element={<MultipleFlights />} />
                <Route
                    path="multi-flight-search-result"
                    element={<MultipleFlightSearchResult />}
                />
                <Route path="multi-flights" element={<MultipleFlights />} />
                <Route
                    path="multi-flight-search-result"
                    element={<MultipleFlightSearchResult />}
                />
                <Route path="umrah-packages" element={<UmrahPackages />} />
                <Route path="umrah-package-detail" element={<UmrahPackageDetail />} />
                <Route
                    path="countinue-bookings-umrah-package"
                    element={<ContinueBookingUmrahPackage />}
                />
                <Route
                    path="umrah-package-booking-confirm"
                    element={<UmrahPackageBookingConfirm />}
                />
                <Route path="hotel-detail" element={<HotelDetail />} />
                <Route path="forgot-password" element={<ForgotPassword />} />
                <Route path="flight-search-result" element={<FlightSearchResult />} />
                <Route path="hotel-search-result" element={<HotelSearchResult />} />
                <Route path="visa-search-resul-thailand" element={<VisaSearchResultThailand />} />
                <Route path="visa-search-resul-malayshia" element={<VisaSearchResultMalaysia />} />
                <Route path="continue-booking-visa" element={<ContinueBookingVisa />} />
                <Route path="visa-booking-confirm" element={<VisaBookingConfirm />} />
                <Route
                    path="transport-search-result"
                    element={<TransportSearchResult />}
                />
                <Route path="Business-GMC" element={<BusinessGMC />} />
                <Route
                    path="continue-booking-transport"
                    element={<ContinueBookingTransport />}
                />
                <Route
                    path="transport-booking-confirm"
                    element={<TransportBookingConfirm />}
                />
                <Route path="airport-transfer" element={<AirportTransfer />} />
                <Route
                    path="umrah-transport-search-result"
                    element={<UmrahTransportSearchResult />}
                />
                <Route
                    path="umrah-transport-detail-general"
                    element={<UmrahTransportDetail />}
                />
                <Route
                    path="umrah-flight-search-result"
                    element={<UmrahFlightSearchResult />}
                />
                <Route path="umrah-selected-flight" element={<UmrahSelectedFlight />} />
                <Route
                    path="umrah-visa-search-result"
                    element={<UmrahVisaSearchResult />}
                />
                <Route
                    path="continue-booking-customize-umrah"
                    element={<ContinueBookingCustomizeUmrah />}
                />
                <Route path="umrah-booking-confirm" element={<UmrahBookingConfirm />} />
                <Route path="tour-detail" element={<TourDetail />} />
                <Route path="/tour-packages" element={<TourPackages />} />
                <Route path="continue-booking-tour" element={<ContinueBookingTour />} />
                <Route path="tour-booking-confirm" element={<TourBookingConfirm />} />
                <Route path="selected-hotel" element={<SelectedHotel />} />
                <Route path="hotel-booking-confirm" element={<HotelBookingConfirm />} />
                <Route path="umrah-guide" element={<UmrahGuide />} />
                <Route path="hajj-guide" element={<HajjGuide />} />
                <Route path="umrah-visa" element={<UmrahVisa />} />
                <Route path="masjid-aqsa" element={<MasjidAqsa />} />
                <Route path="ziyarat" element={<Ziyarat />} />
                <Route path="ziaraat-detail" element={<ZiyaratDetail />} />
                <Route path="gallery" element={<Gallery />} />
                <Route path="hajj-packages" element={<HajjPackages />} />
                <Route path="view-all-deals" element={<ViewAll />} />
            </Routes>
        </div>
    );
}

export default App;
