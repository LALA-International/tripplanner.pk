import React, {useState, useEffect} from "react";
import Navbar from "../../Components/Navbar";
import '../../Components/tripplanner.css';
import '../../Components/styles.css';
import {Link} from "react-router-dom";
import CompaniesLogo from "../../Components/CompaniesLogo";
import Footer from "../../Components/Footer";
import HomeCarousal from "../../Components/HomeCarousal";
import '../../Components/HomeCarousal.css';
import BlackNavbar from "../../Components/BlackNavbar";
import $ from "jquery";
import myImage1 from '../../../src/Components/Visa/VisaImages/azerbaijan-visit-visa (2).jpg';
import myImage2 from '../../../src/Components/Visa/VisaImages/Azerbaijan-Visa (eVisa)-From-Pakistan.jpg';
import myImage3 from '../../../src/Components/Visa/VisaImages/Azerbaija-Visa -from-Pakistan.jpg';
import myImage4 from '../../../src/Components/Visa/VisaImages/Azerbaijan-Visa -Policy.jpg';
import myImage5 from '../../../src/Components/Visa/VisaImages/azerbaijan-visit-visa-from-pakistan.jpg';
import myImage6 from '../../../src/Components/Visa/VisaImages/Azerbaijan-Visa.jpg';
import Content from "./Content";


const VisaSearchResultAzerbaijan = () => {
   
    const headings = [
        {title: 'Azerbaijan Visit Visa', id: 'Azerbaijan-Visit-Visa'},
        {title: 'Azerbaijan Visa Policy', id: 'Azerbaijan-Visa-Policy'},

        {title: 'Azerbaijan Visa Requirements', id: 'Azerbaijan-Visa-Requirements'},
        {title: 'Azerbaijan Visit Visa Terms & Condition', id: 'Azerbaijan-Visit-Visa-Terms-&-Condition'},

        {title: 'Azerbaijan Visit Visa Fee For Pakistani', id: 'Azerbaijan-Visit-Visa-Fee-For-Pakistani'},
        {title: 'Baku Azerbaijan e visa', id: 'Baku-Azerbaijan-e-visa'},

        {title: 'Types of Azerbaijan Visa', id: 'Types-of-Azerbaijan-Visa'},
        {title: 'Travel Tips for Azerbaijan Visa', id: 'Travel-Tips-for-Azerbaijan-Visa'},

        {title: 'Best Time to Azerbaijan Visit Visa', id: 'Best-Time-to-Azerbaijan-Visit-Visa'},
        {title: 'Shopping in Azerbaijan During Azerbaijan Visa', id: 'Shopping-in-Azerbaijan-During-Azerbaijan-Visa'},

        {title: 'FAQs of Azerbaijan Visit Visa', id: 'FAQs-of-Azerbaijan-Visit-Visa'},


    ];
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Search Result | Tripplanner ";
    }, [])
    return (
        <div>
            <BlackNavbar/>

            <section className="flight-det umrah-main umrah-visa-search mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-12">
                            <div className="row">
                                <div className="col-lg-9 col-md- col-sm-8 col-12 pb-lg-4">
                                    <h1 id='Azerbaijan-Visit-Visa'>Azerbaijan Visit Visa</h1>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-4 col-12">
                                    <Link to="/continue-booking-visa">
                                        <button className="view-btn  w-100" type="submit">Continue Booking</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-3"></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-12">
                            <div className="umrah-visa-search-img mb-lg-4 mb-md-4 mb-4 p-2">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                        <img className="w-100" style={{height: '410px'}} src={myImage1} alt=""
                                             crossOrigin="anonymous"/>
                                    </div>
                                </div>
                            </div>

                            <Content headings={headings}/>

                            <div id="regular-text">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-12">

                                        <p>Azerbaijan, sometimes referred to as the Land of Fire, is a multicultural
                                            country that attracts many tourists from all around the world. A secular and
                                            liberal country presenting a perfect blend of history and modernism.</p> <p>
                                        Azerbaijan is a country of mysteries with its ancient culture, historical
                                        monuments, and intriguing diversity of people, food, and attraction sites.

                                    </p> <p>There is an abundance of oil and natural gas in the country, with fire
                                        being the major symbol of its Capital. The country is swiftly getting on the
                                        list of travelers getting Azerbaijan Visit Visa to admire its diversity and
                                        uniqueness. </p> <p>The architectural diversity of Baku is visible in its Flame
                                        Towers, opulent medieval palaces, and temples. The walled city with its
                                        excellent culture, splendid nature, ski resorts, mud volcanoes, and
                                        hospitable people grabs visitors like a magnet.</p> <p> Azerbaijan is a peaceful
                                        country of natural wonders that one cannot resist visiting when planning to
                                        go on a trip.
                                        <b/>

                                    </p>
                                        <b/>

                                        {/*<p>If you have a <h7 style={{color: 'black', fontSize: '20px'}}>Dubai Visit*/}
                                        {/*    Visa</h7> and are looking for proper guidelines, then you are at the right*/}
                                        {/*    place to get complete information regarding the visa policy and other*/}
                                        {/*    requirements. The process is very simple and online taking only about 4-5*/}
                                        {/*    days to complete. Once you land at Dubai International Airport, you are free*/}
                                        {/*    to move anywhere in the country as long as you have the visa and other*/}
                                        {/*    requirements.*/}

                                        {/*</p>*/}
                                        <h2 id='Azerbaijan-Visa-Policy'
                                            style={{
                                                color: '#155088',
                                                fontSize: '20px',
                                                textTransform: "none"
                                            }}>Azerbaijan Visa Policy</h2>
                                        <tr>
                                            <td>

                                            </td>
                                        </tr>
                                        <table className="table table-bordered ">
                                            <thead>
                                            <tr className="border-title">
                                                <th align="left">Visa Category</th>
                                                <th align="left">Visa Processing Time</th>
                                                <th align="left">Visa Fee (Pakistani Rupees)</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr className="border-data">
                                                <td>Azerbaijan Visit Visa</td>
                                                <td>
                                                    <div className="pb-1">30 Working Days</div>
                                                    {/*<div className="pb-1">Non-Immigrant Visa Multiple Entry</div>*/}
                                                </td>
                                                {/*<td>*/}
                                                {/*    <div className="pb-1">PKR 19,500</div>*/}
                                                {/*    <div className="pb-1">(For 30 days)</div>*/}
                                                {/*    <div className="pb-1">PKR 32,500</div>*/}
                                                {/*    <div className="pb-1">(For 60 days)</div>*/}
                                                {/*</td>*/}
                                            </tr>
                                            <tr className="border-data">
                                                <td>Azerbaijan Tourist Visa</td>
                                                <td>
                                                    <div className="pb-1">30 Working Days</div>
                                                    {/*<div className="pb-1">Tourist Visa Multiple Entry</div>*/}
                                                </td>
                                                <td>
                                                    {/*<div className="">PKR 3,699</div>*/}
                                                    {/*<div className="">1 years / 3 years</div>*/}
                                                </td>
                                            </tr>
                                            <tr className="border-data">
                                                <td>Azerbaijan Business Visa</td>
                                                <td>
                                                    <div className="pb-1">30 Working Days</div>
                                                    {/*<div className="pb-1">Transit Visa Triple Entry</div>*/}
                                                    {/*<div className="pb-1">Non-Immigrant Visa Multiple Entry</div>*/}
                                                </td>
                                                <td>
                                                    {/*<div className="pb-1">3 months</div>*/}
                                                    {/*<div className="pb-1">3 month / 6 months</div>*/}
                                                    {/*<div className="pb-1">3 month / 6 months</div>*/}
                                                </td>
                                            </tr>
                                            <tr className="border-data">
                                                <td>Azerbaijan E Visit Visa</td>
                                                <td>
                                                    <div className="pb-1">30 Working Days</div>
                                                    {/*<div className="pb-1">Transit Visa Triple Entry</div>*/}
                                                    {/*<div className="pb-1">Non-Immigrant Visa Multiple Entry</div>*/}
                                                </td>
                                                <td>
                                                    {/*<div className="pb-1">3 months</div>*/}
                                                    {/*<div className="pb-1">3 month / 6 months</div>*/}
                                                    {/*<div className="pb-1">3 month / 6 months</div>*/}
                                                </td>
                                            </tr>
                                            </tbody>


                                        </table>
                                        <h2 id='Azerbaijan-Visa-Requirements'
                                            style={{
                                                color: '#155088',
                                                fontSize: '20px',
                                                textTransform: "none"
                                            }}>Azerbaijan Visa Requirements</h2>
                                        <p>Pakistani citizens need to fulfill certain requirements to obtain an
                                            Azerbaijan Visit Visa. The following are the documents:
                                        </p>
                                        <ul style={{listStyle: 'disc', marginLeft: '1rem'}}>
                                            <li>Original passport with a validity of 90 days</li>
                                            <li>Valid CNIC</li>
                                            <li>Scanned copies of recent 2 x 2 inches photograph</li>
                                            <li>Valid email id to receive visa updates</li>
                                            <li>Authentic credit/debit card</li>
                                            <li> Complete address of your residence in the country</li>
                                            <li>COVID Vaccination certificate</li>
                                            <li>Purpose of invitation if applicable</li>
                                            <li>Bank Statements or copies of other private funds</li>

                                        </ul>
                                        <h2 id='Azerbaijan-Visit-Visa-Terms-&-Condition'
                                            style={{
                                                color: '#155088',
                                                fontSize: '20px',
                                                textTransform: "none"
                                            }}>Azerbaijan Visit Visa Terms & Condition</h2>
                                        <p>Following are the terms & conditions of Azerbaijan Visit Visa For Pakistani:
                                        </p>
                                        <ul style={{listStyle: 'disc', marginLeft: '1rem'}}>
                                            <li>The validity of the applicant's passport must be three months from the
                                                intended date of arrival.
                                            </li>
                                            <li>Visa fee, once paid, is non-refundable.</li>
                                            <li>The person needs to carry a printed copy of the electronic visa along
                                                with a passport to show it at the border.
                                            </li>
                                            <li>Armenia citizens are strictly prohibited to enter Azerbaijan, until and
                                                unless there are some special circumstances.
                                            </li>
                                            <li>Underage travelers need to provide their notarized birth certificate
                                                along with the copies of Id cards of parents or guardians.
                                            </li>

                                        </ul>

                                        <h2 id='Azerbaijan-Visit-Visa-Fee-For-Pakistani'
                                            style={{
                                                color: '#155088',
                                                fontSize: '20px',
                                                textTransform: "none"
                                            }}>Azerbaijan Visit Visa Fee For Pakistani</h2>
                                        <p>Azerbaijan, one of the best top-notch tourist destinations, is a beautiful
                                            country with diverse cultures and easy-to-mingle-natured people. The
                                            country’s flexible and pleasant weather grabs visitors all around the year.
                                            Reach out to tripplannerpk. for immediate issuance of an Azerbaijan visit
                                            visa and timely completion of the procedure.
                                        </p>

                                        <ul style={{listStyle: 'disc', marginLeft: '1rem'}}>
                                            <li>Visit Visa with documents:</li>
                                            <li>Visit Visa without documents:</li>
                                        </ul>

                                        <h2 id='Baku-Azerbaijan-e-visa'
                                            style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Baku
                                            Azerbaijan e visa</h2>
                                        <p>Azerbaijan ASAN visa, also known as an electronic or e-visa, is a short-term
                                            visa issued to nationals of 100 countries. You can find the list of
                                            countries from Google and then easily apply online without visiting the
                                            embassy in person.</p> <p> The validity of the electronic visa is 90 days
                                        with a
                                        maximum extension of 30 days during which you can enter and move from
                                        Azerbaijan as per your wish.
                                    </p>

                                        <h2
                                            id='Types-of-Azerbaijan-Visa'
                                            style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Types of
                                            Azerbaijan Visa</h2><b/>
                                        <p><p></p></p>
                                        <img className="w-100" style={{height: '410px'}} src={myImage2} alt=""
                                             crossOrigin="anonymous"/>
                                        <p><p></p></p>

                                        <p>There are five types of Azerbaijan visa from Pakistan:</p>


                                        <h3
                                            style={{
                                                color: '#155088',
                                                fontSize: '20px',
                                                textTransform: "none"
                                            }}>Azerbaijan Tourist Visa </h3>
                                        <p>This type of visa is issued to tourists or people wishing to visit the
                                            country for personal reasons. A tourist visa, as the name indicates, is
                                            granted just for tourism purposes with a validity of three months up to 01
                                            years. You can apply for a single-entry or double-entry visa for 03 months
                                            or extend the limit to 1 year with a multiple-entry visa.
                                        </p>
                                        <h3 style={{
                                            color: '#155088',
                                            fontSize: '20px',
                                            textTransform: "none"
                                        }}>Azerbaijan Business Visa</h3>

                                        <p>If you want to visit the country to establish business or attend some
                                            official meetings, you need to obtain a business visa from Azeri Embassy
                                            near your current location.</p> <p> The embassy would need an addressed
                                        letter from
                                        your company clearly stating the reasons and duration of your business
                                        there. If your work demands you to meet some officials of the country then
                                        you need to mention that too in the application for your visa.

                                    </p>
                                        <h3 style={{
                                            color: '#155088',
                                            fontSize: '20px',
                                            textTransform: "none"
                                        }}>Azerbaijan Diplomatic/Official Visa </h3>
                                        <p>Diplomatic/Official visas are the two special kinds of visas issued only to
                                            people having official tasks or meeting with Azeri officials. The validity
                                            of this visa depends on the kind and nature of the work.

                                        </p>
                                        <h3 style={{
                                            color: '#155088',
                                            fontSize: '20px',
                                            textTransform: "none"
                                        }}>Azerbaijan Transit Visa</h3>


                                        <p>Transit visas are issued to people who need to cross the country or need to
                                            stay for a short period, most specifically for five days. This short-term
                                            validity visa is just for travelers who stay in Azerbaijan for a small
                                            amount of time.
                                        </p>

                                        <h3 id='Travel-Tips-for-Azerbaijan-Visa'
                                            style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Travel
                                            Tips for Azerbaijan Visa </h3>
                                        <p>Azerbaijan, an ex-Soviet Muslim country, is famous for its ultra-modern
                                            Capital, oozing mud volcanoes, the Great Caucasus Mountains, ancient
                                            fire-worship temples, and skyscrapers twisted in such a way to present a
                                            perfect blend of middle-eastern history and modernism. </p> <p>A country of
                                        10
                                        million, mostly known for tons of oils, is hardly on a traveler’s list but
                                        is home to wonders one would love to see.
                                    </p>
                                        <p><p></p></p>
                                        <img className="w-100" style={{height: '410px'}} src={myImage3} alt=""
                                             crossOrigin="anonymous"/>
                                        <p><p></p></p>

                                        <p>Due to its perfect location, Azerbaijan is surrounded by high mountains and
                                            lush green farmlands inhabiting the most hospitable people and offering the
                                            most bewitching visions to its people. </p> <p>As times are progressing, The
                                        Land of
                                        Fire is getting on the maps of tourists carrying Azerbaijan Visit Visa with
                                        its dazzling architecture and living history that is visible in its
                                        buildings, festivals, and events.</p> <p>
                                        This travel itinerary will help you plan your trip effectively and will
                                        ensure that you make the most of this off-the-track destination and make
                                        unforgettable memories out of your Azerbaijan Visa.
                                    </p>
                                        <p>
                                            <h style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>1)
                                                Register Yourself-
                                            </h>
                                            If you plan to stay in Azerbaijan for more than 10 days, then register
                                            yourself with the State Migration Service immediately. Normally, the
                                            hotels/hostels take care of this necessity to avoid any inconvenience to
                                            their visitors but if not, you have to complete the formality yourself.
                                            Otherwise, you would have to pay a hefty amount of money when you leave the
                                            country.

                                        </p>
                                        <p>
                                            <h style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>2) What to
                                                Wear-
                                            </h>
                                            Azerbaijan is a secular country, therefore giving freedom to its people. You
                                            can wear whatever you want and explore the country easily. The cosmopolitan
                                            city of Baku, has no strict rules regarding clothes and dresses but you need
                                            to be careful in religious places.
                                            <p><p></p></p><img className="w-100" style={{height: '410px'}}
                                                               src={myImage4} alt=""
                                                               crossOrigin="anonymous"/>
                                            <p><p></p></p>

                                        </p>
                                        <p>
                                            <h style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>3) Learn
                                                the Language-
                                            </h>
                                            It is always suggested to learn some basic phrases of the native language of
                                            any country you are planning to visit. While you visit Azerbaijan, try to
                                            learn the Azeri language in a Turkish dialect because the locals in the
                                            country couldn’t speak English properly.
                                        </p>
                                        <p> Some of them might understand but
                                            once you cross the outskirts of the city, the only language for
                                            communication will be Azeri with different dialects and accents.

                                        </p>
                                        <p>
                                            <h style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>4) Prefer
                                                Local Transport-
                                            </h>
                                            The most feasible mode of transport in Baku city is metros running all
                                            around the city. They are highly affordable and cover all the important
                                            tourist destination spots.
                                        </p>
                                        <p> But if you want to enjoy the perks of wandering
                                            the city alone, then you can hire any private cab or book any ride but it
                                            will cost you a lot of money.</p> <p> Another travel tip for Azerbaijan is
                                        to avoid
                                        booking taxis after landing at the airport since most of them charge a hefty
                                        amount and may scam you.

                                    </p>
                                        <p>
                                            <h style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>5) Local
                                                Food-
                                            </h>
                                            Since the country’s 95% population is Muslim based, you will find
                                            traditional-flavored cuisines more prevalent. Azerbaijan offers dishes
                                            prepared with unique flavors and spices, ranging from steaming kebabs to
                                            Kufta Bobash. Azeri street food is also very famous and mouth-watering,
                                            compelling the first-comers to savor it till the end.

                                        </p>


                                        <h3 id='Best-Time-to-Azerbaijan-Visit-Visa'
                                            style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Best
                                            Time to Azerbaijan Visit Visa</h3>
                                        <p><p></p></p>
                                        <img className="w-100" style={{height: '410px'}} src={myImage5} alt=""
                                             crossOrigin="anonymous"/>
                                        <p><p></p></p>
                                        <p>Azerbaijan, one of the most alluring destinations in the world, is getting on
                                            the list of tourists due to its diverse cultures, rich historical
                                            traditions, amazing landscapes, and exciting experiences. </p> <p>The
                                        country
                                        experiences 9 out of 11 different climatic zones due to its diverse
                                        topography, northern mountain regions, farmlands, desert, and coastal
                                        regions delivering cool, pleasant winds to enjoy every season.
                                    </p>
                                        <h3 id='Shopping-in-Azerbaijan-During-Azerbaijan-Visa'
                                            style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Shopping
                                            in Azerbaijan During Azerbaijan Visa</h3>

                                        {/*<img className="w-100" style={{height: '410px'}} src={myImage6} alt=""*/}
                                        {/*     crossOrigin="anonymous"/>*/}

                                        <p><b/>Azerbaijan, a newly emerging tourist destination with a perfect blend of
                                            Orient and Occident cultures, serves as a perfect shopping place for
                                            visitors with empty bags and money-filled pockets. </p> <p>The capital city,
                                        Baku,
                                        is the dream of every shopping freak due to its various shopping malls,
                                        diverse and vast choices, variety of things, and affordable prices.</p>
                                        <p> Shopping
                                            in Azerbaijan is not about visiting grand malls and boutiques but local
                                            bazaars and markets with various colorful items that are hard to resist.
                                        </p>
                                        <p><p></p></p>
                                        <img className="w-100" style={{height: '410px'}} src={myImage6} alt=""
                                             crossOrigin="anonymous"/>
                                        <p><p></p></p>
                                        <p>It is always good to bring back some souvenirs from anywhere you go since you
                                            become the places you go and collecting a memory is to cherish and live that
                                            time forever. The first thing to bring back from Azerbaijan is their
                                            traditional carpets, earthenware pottery, ceramics, and much more.
                                        </p> <p>Here’s a quick guide to first-time travelers on Azerbaijan visit visa to
                                        let them know the best shopping destinations and local markets offering the
                                        best quality products.
                                    </p>
                                        <ul style={{listStyle: 'disc', marginLeft: '1rem'}}>
                                            <li>Nizami Street- Most Popular Street</li>
                                            <li>Taza Bazaar- Oldest and Biggest Fish Bazaar</li>
                                            <li>Park Bulvar Mall- Ultra Modern Shopping Mall</li>
                                            <li>House of Craftsmen- Genuine Crafts Artists’ Workshop</li>
                                            <li>Port Baku Mall- Treasure of World-Class Brands</li>
                                            <li>Sardak Bazaar- Home to Indoor Shopping and Cheap Prices</li>
                                            <li> Ganjlik Shopping Mall- Largest Shopping Mall in Baku</li>
                                            <li> Tsum Shopping Centre (MUM)- One-Stop Shopping Spot in Baku</li>
                                            <li>Metro Park- A House of Diversity and Variety</li>
                                            <li>28 Mall- A Fusion of Luxury and Entertainment</li>

                                        </ul>

                                        <h3 id='FAQs-of-Azerbaijan-Visit-Visa'
                                            style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>FAQs of
                                            Azerbaijan Visit Visa</h3>
                                        <div className="container py-3">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="accordion" id="faqExample">
                                                        <div className="card">
                                                            <div className="card-header p-2" id="headingOne">
                                                                <h5 className="mb-0">
                                                                    <button className="btn btn-link" type="button"
                                                                            data-toggle="collapse"
                                                                            data-target="#collapseOne"
                                                                            aria-expanded="true"
                                                                            aria-controls="collapseOne">
                                                                        Q: Can a Pakistani travel to Azerbaijan now?
                                                                    </button>
                                                                </h5>
                                                            </div>

                                                            <div id="collapseOne" className="collapse show"
                                                                 aria-labelledby="headingOne" data-parent="#faqExample">
                                                                <div className="card-body">
                                                                    <b></b> Yes, if you have an original passport with a
                                                                    validity of 03 months from the intended date of
                                                                    arrival then you can apply for a visa to Azerbaijan.
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card">
                                                            <div className="card-header p-2" id="headingTwo">
                                                                <h5 className="mb-0">
                                                                    <button className="btn btn-link collapsed"
                                                                            type="button" data-toggle="collapse"
                                                                            data-target="#collapseTwo"
                                                                            aria-expanded="false"
                                                                            aria-controls="collapseTwo">
                                                                        Q: How long does it take to get an Azerbaijan
                                                                        Visa?
                                                                    </button>
                                                                </h5>
                                                            </div>
                                                            <div id="collapseTwo" className="collapse"
                                                                 aria-labelledby="headingTwo" data-parent="#faqExample">
                                                                <div className="card-body">
                                                                    An eligible traveler can get an urgent visa to
                                                                    Azerbaijan in just three business days with its
                                                                    validity ranging from 60-90 days.
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card">
                                                            <div className="card-header p-2" id="headingThree">
                                                                <h5 className="mb-0">
                                                                    <button className="btn btn-link collapsed"
                                                                            type="button" data-toggle="collapse"
                                                                            data-target="#collapseThree"
                                                                            aria-expanded="false"
                                                                            aria-controls="collapseThree">
                                                                        Q: Is the Baku visa open for Pakistanis?
                                                                    </button>
                                                                </h5>
                                                            </div>
                                                            <div id="collapseThree" className="collapse"
                                                                 aria-labelledby="headingThree"
                                                                 data-parent="#faqExample">
                                                                <div className="card-body">
                                                                    Yes, the ex-Soviet country welcomes tourists with
                                                                    original documents and original passports.
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card">
                                                            <div className="card-header p-2" id="headingfour">
                                                                <h5 className="mb-0">
                                                                    <button className="btn btn-link collapsed"
                                                                            type="button" data-toggle="collapse"
                                                                            data-target="#collapsefour"
                                                                            aria-expanded="false"
                                                                            aria-controls="collapsefour">
                                                                        Q: Can Pakistanis get a special Azerbaijan e
                                                                        visa ?
                                                                    </button>
                                                                </h5>
                                                            </div>
                                                            <div id="collapsefour" className="collapse"
                                                                 aria-labelledby="headingfour"
                                                                 data-parent="#faqExample">
                                                                <div className="card-body">
                                                                    Yes. Azerbaijan offers special electronic visas to
                                                                    90 countries and Pakistan is among those lucky
                                                                    countries.
                                                                </div>
                                                            </div>
                                                        </div>


                                                        <div className="card">
                                                            <div className="card-header p-2" id="headingfive">
                                                                <h5 className="mb-0">
                                                                    <button className="btn btn-link collapsed"
                                                                            type="button" data-toggle="collapse"
                                                                            data-target="#collapsefive"
                                                                            aria-expanded="false"
                                                                            aria-controls="collapsefive">
                                                                        Q: How long does it take to apply for an online
                                                                        Azerbaijan visa ?
                                                                    </button>
                                                                </h5>
                                                            </div>
                                                            <div id="collapsefive" className="collapse"
                                                                 aria-labelledby="headingfive"
                                                                 data-parent="#faqExample">
                                                                <div className="card-body">
                                                                    If you have all the necessary documents at the time
                                                                    of application, then the entire online procedure
                                                                    does not take more than 20 minutes.
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card">
                                                            <div className="card-header p-2" id="headingsix">
                                                                <h5 className="mb-0">
                                                                    <button className="btn btn-link collapsed"
                                                                            type="button" data-toggle="collapse"
                                                                            data-target="#collapsesix"
                                                                            aria-expanded="false"
                                                                            aria-controls="collapsesix">
                                                                        Q: How do I know if my visa is rejected?
                                                                    </button>
                                                                </h5>
                                                            </div>
                                                            <div id="collapsesix" className="collapse"
                                                                 aria-labelledby="headingsix"
                                                                 data-parent="#faqExample">
                                                                <div className="card-body">
                                                                    In case of visa rejection, the applicant will get a
                                                                    letter from the consulate stating the reason for
                                                                    rejection. He/she can apply after rectifying within
                                                                    a prescribed duration of time.
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card">
                                                            <div className="card-header p-2" id="headingseven">
                                                                <h5 className="mb-0">
                                                                    <button className="btn btn-link collapsed"
                                                                            type="button" data-toggle="collapse"
                                                                            data-target="#collapseseven"
                                                                            aria-expanded="false"
                                                                            aria-controls="collapseseven">
                                                                        Q: What are the best things to shop in
                                                                        Azerbaijan?
                                                                    </button>
                                                                </h5>
                                                            </div>
                                                            <div id="collapseseven" className="collapse"
                                                                 aria-labelledby="headingseven"
                                                                 data-parent="#faqExample">
                                                                <div className="card-body">
                                                                    Apart from souvenirs, the best things to buy from
                                                                    Azerbaijan are traditional carpets, pottery,
                                                                    ceramics, and jewelry.
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>


                                        <div className="row">
                                            <div className="col-lg-3 col-md-4">
                                                <div className="Continue-btn">
                                                    <Link to="/continue-booking-visa">
                                                        <button className="view-btn  w-100" type="submit">Continue
                                                            Booking
                                                        </button>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-9 col-md-8"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-12">
                            <div className="left-bar p-3">
                                <div className="sub-heading">30 Days Visit Visa</div>
                                <div className="price-person p-2 mt-2">SAR 650 /-Per Person</div>
                                <div className="sub-heading mt-2 pt-3">INCLUDES</div>
                                <div className="booking-points pt-3">
                                    <div className="pb-2"><i className="fa fa-check" aria-hidden="true"></i> <span>USA Immigration Fees </span>
                                    </div>
                                    <div className="pb-2"><i className="fa fa-check" aria-hidden="true"></i> <span>Visa Service Charges</span>
                                    </div>
                                    <div className="pb-2"><i className="fa fa-check" aria-hidden="true"></i> <span>All Taxes</span>
                                    </div>
                                    <div className="pb-2"><i className="fa fa-check" aria-hidden="true"></i> <span>Tourist Visa</span>
                                    </div>
                                    <div className="pb-2"><i className="fa fa-check" aria-hidden="true"></i> <span>30 Days Duration of stay in USA</span>
                                    </div>
                                    <div className="pb-2"><i className="fa fa-check" aria-hidden="true"></i> <span>90 Days Validity (Travel Time )</span>
                                    </div>
                                    <div className="pb-2"><i className="fa fa-check" aria-hidden="true"></i> <span>7 Working Days Visa Processing Time</span>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="Continue-btn">
                                        <Link to="/continue-booking-visa">
                                            <button className="view-btn  w-100" type="submit">Continue Booking</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>


                <CompaniesLogo/>
            </section>

            <Footer/>
        </div>
    )
}

export default VisaSearchResultAzerbaijan;