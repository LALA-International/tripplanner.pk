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
import myImage1 from '../../../src/Components/Visa/VisaImages/singapore-visa-from-pakistan.jpg';
import myImage2 from "../../../src/Components/Visa/VisaImages/Singapore-Visa.jpg";
import myImage3 from "../../../src/Components/Visa/VisaImages/Singapore-tourist-visa-from-pakistan.jpg";
import myImage4 from "../../../src/Components/Visa/VisaImages/Singapore-Visit -Visa.jpg";
import myImage5 from "../../../src/Components/Visa/VisaImages/Singapore-Visa-for-Pakistani- Citizens.jpg";
import myImage6 from "../../../src/Components/Visa/VisaImages/Visa-to-Singapore - Visit Singapore.jpg";
import Content from "./Content";

const VisaSearchResultSingapore = () => {
    const headings = [
        {title: 'Singapore Visit Visa', id: 'singapure'},
        {title: 'Singapore Visa Policy', id: 'Singapore-Tourist-Visa'},
        {
            title: 'Singapore Visit Visa From Pakistan Requirements',
            id: 'Singapore-Visit-Visa-From-Pakistan-Requirements'
        },
        {
            title: 'Singapore Visit Visa for Pakistani Terms & Condition',
            id: 'Singapore-Visit-Visa-for-Pakistani-Terms-Condition'
        },
        {title: 'Singapore Visit Visa Fee For Pakistani 2023', id: 'Singapore-Visit-Visa-Fee-For-Pakistani-2023'},
        {title: 'Vist Visa for Singapore From Pakistan Types', id: 'Vist-Visa-for-Singapore-From-Pakistan-Types'},
        {title: 'Singapore Tourist Visa', id: 'Singapore-Tourist-Visa'},
        // { title: 'Singapore Personal Employment Pass (PEP)', id: 'Singapore-Personal-Employment-Pass-(PEP)' },
        // { title: 'Singapore Employment Pass Scheme', id: 'Singapore-Employment-Pass-Scheme' },
        // { title: 'Singapore Entrepreneur Pass (Entrepass) Scheme', id: 'Singapore-Entrepreneur-Pass-(Entrepass)-Scheme' },
        // { title: 'Singapore S Pass Scheme', id: 'Singapore-S-Pass-Scheme' },
        // { title: 'Singapore Miscellaneous Work Pass Scheme', id: 'Singapore-Miscellaneous-Work-Pass-Scheme' },
        // { title: 'Singapore Permanent Residence Work Scheme', id: 'Singapore-Permanent-Residence-Work-Scheme' /},
        {title: 'Travel Tips for Singapore Visit Visa', id: 'Travel-Tips-for-Singapore-Visit-Visa'},
        {title: 'Best Time to Singapore Visit Visa', id: 'Best-Time-to-Singapore-Visit-Visa'},
        {title: 'Shopping in Singapore During Singapore Visa', id: 'Shopping-in-Singapore-During-Singapore-Visa'},
        {title: 'FAQs of Singapore Visit Visa from Pakistan', id: 'FAQs-of-Singapore-Visit-Visa-from Pakistan'},


    ];


    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Search Result | Tripplanner ";
    }, [])
    return (
        <ul>

            <div>
                <BlackNavbar/>

                <section className="flight-det umrah-main umrah-visa-search mt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9 col-12">
                                <div className="row">
                                    <div className="col-lg-9 col-md- col-sm-8 col-12 pb-lg-4">
                                        {/*<h1 style={{textTransform: "none"}}>Singapore</h1>*/}
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
                                <div>
                                    <Content headings={headings}/>

                                </div>
                                <div id="regular-text">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-12">
                                            <h1 id="singapure"
                                                style={{
                                                    color: '#155088',
                                                    fontSize: '20px',
                                                    textTransform: "none"
                                                }}>Singapore Visit Visa</h1>
                                            <p>Singapore, a small archipelago in South-East Asia, is one of the most
                                                popular
                                                tourist destinations with its tallest skyscrapers, magnificent
                                                buildings,
                                                finger licking culinary, and fast-pace transport.</p> <p> The country
                                            has been
                                            categorized as the fifth most visited place by the World Tour Organization.
                                            With its world-class airports, well-structured roads, and cosmopolitan
                                            culture, Singapore attracts visitors like a magnet.</p> <p> From historical
                                            remnants to ultramodern plazas, concrete jungles to
                                            bustling markets, street hawkers to posh dining areas, and traditional
                                            markets to luxury shopping malls, Singapore covers it all. In true sense, it
                                            is referred to as ‘The Shopper’s Paradise’.</p>
                                            <p> The country is also home to a
                                                Botanic Garden being ranked by UNESCO as a World Heritage Site. Getting
                                                a
                                                Singapore visit visa would definitely refresh your mind and soul.
                                                <img className="w-100" style={{height: '410px'}} src={myImage2} alt=""
                                                     crossOrigin="anonymous"/><p></p>
                                                <b/>Encompassing a major island and 64 smaller islands, Singapore is
                                                also
                                                known as ‘The Lion City’ with its clean humid-free weather, safe
                                                surroundings and lush-green pastures. The country’s tourism sector
                                                contributes proudly towards its economy and is designated as a global
                                                financial center.
                                            </p>
                                            <b/>


                                            <h2 id="Singapore-Visa-Policy"
                                                style={{
                                                    color: '#155088',
                                                    fontSize: '20px',
                                                    textTransform: "none"
                                                }}>Singapore Visa Policy</h2>

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
                                                    <td>Singapore Business Visa</td>
                                                    <td>
                                                        <div className="pb-1">3-5 Working Days</div>
                                                        {/*<div className="pb-1">Non-Immigrant Visa Multiple Entry</div>*/}
                                                    </td>

                                                </tr>
                                                <tr className="border-data">
                                                    <td>Bahrain Multiple One-Year Visa</td>
                                                    <td>
                                                        <div className="pb-1">365 Working Days</div>
                                                        {/*<div className="pb-1">Tourist Visa Multiple Entry</div>*/}
                                                    </td>
                                                    <td>
                                                        {/*<div className="">PKR 3,699</div>*/}
                                                        {/*<div className="">1 years / 3 years</div>*/}
                                                    </td>
                                                </tr>
                                                <tr className="border-data">
                                                    <td>Singapore Tourist Visa</td>
                                                    <td>
                                                        <div className="pb-1">3-5 Working Days</div>
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
                                                    <td>Singapore Employment Pass Scheme</td>
                                                    <td>
                                                        <div className="pb-1">3-5 Working Days</div>
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
                                                    <td>Singapore Entrepreneur Pass Scheme</td>
                                                    <td>
                                                        <div className="pb-1">3-5 Working Days</div>
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
                                                    <td>Singapore Immigration Visa Schemes</td>
                                                    <td>
                                                        <div className="pb-1">3-5 Working Days</div>
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

                                            <h2 id='Singapore-Visit-Visa-From-Pakistan-Requirements'
                                                style={{
                                                    color: '#155088',
                                                    fontSize: '20px',
                                                    textTransform: "none"
                                                }}>Singapore Visit Visa From Pakistan Requirements</h2>
                                            <p>Following documents are required to apply for a <h7
                                                style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>Visit
                                                Visa
                                                for Singapore from Pakistan:</h7> :

                                            </p>
                                            <ul style={{listStyle: 'disc', marginLeft: '1rem'}}>
                                                <li> A completely-filled visa application form</li>
                                                <li> Original Passport with a validity of 06 months</li>
                                                <li> Copy of CNIC</li>
                                                <li> Two recent colored photographs</li>
                                                <li> Photocopy of passport’s first and last page</li>
                                                <li> Bank Statement of last six months</li>
                                                <li> Proof of round air ticket</li>
                                                <li> Proof of financial stability</li>
                                                <li> In case of any Sponsor, his/her passport photocopy</li>
                                                <li>A cover letter covering the details of your travel, reason, the
                                                    departure, and the time limit you will stay in Singapore and for
                                                    what
                                                    purpose
                                                </li>
                                                <li> The invitation letter from Singapore</li>

                                            </ul>
                                            <p>All these documents must be submitted to the Embassy to get a <h7
                                                style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>Singapore
                                                Visit
                                                visa </h7>.
                                            </p>


                                            <h2 id='Singapore-Visit-Visa-for-Pakistani-Terms-Condition'
                                                style={{
                                                    color: '#155088',
                                                    fontSize: '20px',
                                                    textTransform: "none"
                                                }}>Singapore Visit Visa for Pakistani Terms & Condition </h2>
                                            <p> Following are the terms & conditions of <h7
                                                style={{color: 'black', fontSize: '20px'}}> Visit Visa For Singapore
                                                From
                                                Pakistan: </h7></p>

                                            <ul style={{listStyle: 'disc', marginLeft: '1rem'}}>
                                                <li>Visa fee is non-refundable in any case.</li>
                                                <li>Any delay or rejection in visa is not the responsibility of
                                                    Tripplannerpk as the process is carried out by ICA.
                                                </li>
                                                <li>Visa policy is subjected to change over time, therefore, be prepared
                                                    to
                                                    provide additional documents or fee on demand.
                                                </li>
                                                <li>Check your emails regularly to keep a check on your visa status or
                                                    you
                                                    can also contact us in this regard.
                                                </li>
                                                <li>Be careful to closely follow the country’s rules and regulations
                                                    properly.
                                                </li>
                                            </ul>


                                            <h2 id='Singapore-Visit-Visa-Fee-For-Pakistani-2023'
                                                style={{
                                                    color: '#155088',
                                                    fontSize: '20px',
                                                    textTransform: "none"
                                                }}>Singapore Visit Visa Fee For Pakistani 2023</h2>
                                            <p>Singapore, with its densely populated cities, green farmlands, bustling
                                                markets, and soul-refreshing landscapes attracts visitors like flood. It
                                                is
                                                one of the three remaining city-states to offer the best tourist spots,
                                                shopping malls, delicious food, and amazing scenery to its visitors.</p>
                                            <p>
                                                Planning an affordable holiday trip to this heaven will reward you with
                                                a
                                                calm mind and heart. Tripplanner pk helps you in this regard by giving
                                                feasible packages on Singapore Visit Visa from Pakistan.</p>
                                            <ul style={{listStyle: 'disc', marginLeft: '1rem'}}>
                                                <li>Visit Visa with documents:</li>
                                                <li>Visit Visa without documents:</li>
                                            </ul>
                                            <h2 id='Vist-Visa-for-Singapore-From-Pakistan-Types'
                                                style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Vist
                                                Visa for Singapore From Pakistan Types</h2><b/>

                                            <p>There are different schemes and types of <h7
                                                style={{
                                                    color: 'black',
                                                    fontWeight: 'bold',
                                                    fontSize: '20px'
                                                }}> Singapore
                                                Visit Visa From Pakistan:
                                            </h7>
                                            </p>

                                            <h3
                                                style={{
                                                    color: '#155088',
                                                    fontSize: '20px',
                                                    textTransform: "none"
                                                }}>Singapore Business Visa </h3>

                                            <p>Is issued to individuals entering the country to attend some business
                                                meeting, conference, seminar, or any official discussion.
                                            </p>
                                            <h3 id="Singapore-Tourist-Visa"
                                                style={{
                                                    color: '#155088',
                                                    fontSize: '20px',
                                                    textTransform: "none"
                                                }}>Singapore Tourist Visa</h3>

                                            <p>Tourist visa is issued to those foreign people who wish to enter the
                                                State
                                                for leisure or tourism-related purposes. A person cannot work or study
                                                on
                                                this visa.
                                            </p>
                                            <img className="w-100" style={{height: '410px'}} src={myImage3} alt=""
                                                 crossOrigin="anonymous"/><p></p>
                                            <p>People traveling to Singapore for exploring, private family tours, or
                                                holidays for some time need this kind of visa.</p>
                                            <h3 id='Singapore-Tourist-Visa'
                                                style={{
                                                    color: '#155088',
                                                    fontSize: '20px',
                                                    textTransform: "none"
                                                }}>Singapore Employment Pass Scheme</h3>
                                            <p>The Singapore Employment Pass (EP) is a kind of legal work permit issued
                                                to
                                                foreign employees, directors, and corporates to allow them to work in
                                                the
                                                country without any official quota system. The validity of this type of
                                                visa
                                                is 1-2 years and can be extended until the person is employed there.
                                            </p>
                                            <h3 id='Singapore-Employment-Pass-Scheme'
                                                style={{
                                                    color: '#155088',
                                                    fontSize: '20px',
                                                    textTransform: "none"
                                                }}>Bahrain
                                                Business Visa</h3>
                                            <p>Business visas are issued to those short-term travelers who enter the
                                                country
                                                for meetings, conferences, and other business-related tasks. The
                                                validity of
                                                this type of visa is up to four months.</p>

                                            <h3 id='Singapore-Entrepreneur-Pass-(Entrepass)-Scheme'
                                                style={{
                                                    color: '#155088',
                                                    fontSize: '20px',
                                                    textTransform: "none"
                                                }}>Singapore Entrepreneur Pass (Entrepass) Scheme</h3>
                                            <p>A new variation of EP issued to those businessmen and entrepreneurs
                                                wishing
                                                to relocate or start a new business in Singapore. The validity of this
                                                temporary work pass is 1 year, easily extendable till the applicant is
                                                working there.</p>
                                            <h3 id='Singapore-Personal-Employment-Pass-(PEP)'
                                                style={{
                                                    color: '#155088',
                                                    fontSize: '20px',
                                                    textTransform: "none"
                                                }}>Singapore Personal Employment Pass (PEP)</h3>
                                            <p>People who wish to enter the country to search for a job without
                                                sponsorship
                                                from any employer. It is a special kind of pass allowing the applicant
                                                to
                                                switch jobs without re-applying for a visa each time.</p> <p> A person
                                            can work on
                                            this visa but is not permitted to establish a new company there. The
                                            validity of this visa is 03 years with no renewability.</p>
                                            <h3 id='Singapore-S-Pass-Scheme'
                                                style={{
                                                    color: '#155088',
                                                    fontSize: '20px',
                                                    textTransform: "none"
                                                }}>Singapore S Pass Scheme</h3>
                                            <p>S Pass Scheme is a Singapore work visa issued to those mid-level
                                                employees
                                                with at least 1-year study or any diploma to allow them to be hired by
                                                any
                                                employer. Depending on the industrial sector, the applicants are
                                                required to
                                                meet a certain criteria, after which the visa is issued for 1-2 years
                                                with
                                                renewability.</p>
                                            <h3 id='Singapore-Miscellaneous-Work-Pass-Scheme'
                                                style={{
                                                    color: '#155088',
                                                    fontSize: '20px',
                                                    textTransform: "none"
                                                }}>Singapore Miscellaneous Work Pass Scheme</h3>
                                            <p>A short-term visa scheme for individuals working in Singapore on
                                                short-term
                                                projects, assignments or are involved in activities that are soon to be
                                                completed.</p> <p> Religious or motivational speakers, reporters, and
                                            journalists
                                            can apply for this type of visa but the holders of it cannot apply for
                                            permanent residence in Singapore.</p>
                                            <h3 id='Singapore-Permanent-Residence-Work-Scheme'
                                                style={{
                                                    color: '#155088',
                                                    fontSize: '20px',
                                                    textTransform: "none"
                                                }}>Singapore Permanent Residence Work Scheme</h3>
                                            <p>Individuals holding professional work visas are eligible to apply for
                                                permanent residence in Singapore.</p>
                                            <h3 id='Travel-Tips-for-Singapore-Visit-Visa'
                                                style={{
                                                    color: '#155088',
                                                    fontSize: '20px',
                                                    textTransform: "none"
                                                }}>Travel
                                                Tips for Singapore Visit Visa</h3>
                                            <p>Singapore, one of the most fascinating destinations in Southeast Asia, is
                                                a
                                                country of iconic wonders, tall skyscrapers, and modern trappings to be
                                                discovered, explored, and enjoyed.</p> <p> This island-city state is a
                                            global
                                            economic hub to be consistently ranked among most expensive countries in the
                                            world. Majorly known as the ‘Lion City’, the cosmopolitan area is apparently
                                            easy to navigate with a complete travel itinerary.</p>
                                            <img className="w-100" style={{height: '410px'}} src={myImage4} alt=""
                                                 crossOrigin="anonymous"/><p></p>
                                            <p>From towering buildings to greenish landscapes, technological advancement
                                                to
                                                flawless transportation, and from Chinatown to little India, Singapore
                                                covers it all to be perfectly presented as a futuristic urban center. A
                                                land
                                                of paradise to offer heavenly experiences and incredible living if
                                                explored
                                                wisely.</p> <p>
                                            Although the country is comparatively expensive and a bit heavy on pockets,
                                            if you dig deeper and know how to play cards well, you are the one to mark
                                            your trip successful. A list of certain hacks and tips is all required to
                                            wisely discover this land of modernism and growth within your budget, so,
                                            don’t wait anymore to apply for a Singapore visit visa from Pakistan. We
                                            have prepared a list to briefly guide the first-timers to let them make most
                                            of their trip. </p>
                                            {/*<p>*/}
                                            {/*    <h style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>1.      Check the weather prior to planning a trip-</h>*/}


                                            {/*</p>*/}
                                            <p>
                                                <h style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>1.
                                                    Check
                                                    the weather prior to planning a trip-
                                                </h>
                                                Trips are amazing when planned at the right time of the year since the
                                                weather of the destination can actually make or break your holiday.
                                                Singapore usually faces hot and humid climates with temperature ranging
                                                between 26-34℃.
                                            </p>
                                            <p> The casual rain during some parts of the day makes mornings
                                                and evenings easy. Therefore, plan a trip during the month when the
                                                temperature is pleasant and cool.

                                            </p>
                                            <p>
                                                <h style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>2.
                                                    Apply
                                                    for a visa timely-
                                                </h>
                                                Getting a tourist visa to Singapore is easy but you need to apply at
                                                least a
                                                month before your departure. Take your time to complete your documents
                                                and
                                                fill out an application form prior to your moving. Do ensure the type of
                                                visa you fall in depending on the purpose of your visit.

                                            </p>
                                            <p>
                                                <h style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>3.
                                                    Pack
                                                    lightweight and summer clothes-
                                                </h>
                                                The tropical climate of Singapore won’t let you feel cold or freezing
                                                so,
                                                pack light and summer clothes. The temperature rises during the day
                                                making
                                                it hot and precipitating so pick the right dresses to avoid looking like
                                                a
                                                sweaty mess. It is advised to plan your major excursions during night or
                                                early mornings and don’t forget to carry an umbrella around to avoid
                                                getting
                                                wet in sudden rains.


                                            </p>
                                            <p>
                                                <h style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>4. Use
                                                    public transportation-
                                                </h>
                                                Unlike other countries, Singapore has an impressive transportation
                                                system
                                                all around the country. Among other fantasies of adventurers, traveling
                                                in
                                                Singapore’s Mass Rapid Transit (MRT) is one of them, since the transport
                                                network runs all around the city and can drop you off at any spot you
                                                wish.
                                                Booking a car or hopping in a taxi will be expensive, so stick to the
                                                local
                                                transportation system.

                                            </p>
                                            <p>
                                                <h style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>5. Eat
                                                    like Locals- A
                                                </h>
                                                vacation is incomplete without splurging and relishing the country’s
                                                food.
                                                Singapore offers delectable cuisines to be easily tasted in local
                                                markets
                                                and hawkers centers if you wish to save money.
                                            </p>
                                            <p> The most authentic dishes
                                                cooked with traditional spices are not to be found in five-star
                                                restaurants
                                                but in local stalls and shops. Therefore, head to these small cafes and
                                                restaurants to satisfy your Singaporean cravings.

                                            </p>
                                            <h3 id='Best-Time-to-Singapore-Visit-Visa'
                                                style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Best
                                                Time to Singapore Visit Visa</h3>
                                            <p>Singapore is one of those unique destinations in Southeast Asia that
                                                needs to
                                                be visited when temperature and climate are favorable. Since the country
                                                lies on the tip of the Malay Peninsula, it faces tropical climate all
                                                around
                                                the year. </p> <p>The cosmopolitan city proudly defies all the
                                            middle-eastern
                                            stereotypes except the weather. The yearly temperature ranges between 70s
                                            and 80s making it a must to plan a tour at a specific time of the year when
                                            the winds are favorable enough to let you enjoy it completely.</p>
                                            <img className="w-100" style={{height: '410px'}} src={myImage5} alt=""
                                                 crossOrigin="anonymous"/><p></p>
                                            <p>The best time to visit Singapore depends on the kind of activity you
                                                enjoy.
                                                The person looking for a cost-effective trip should plan their holidays
                                                during the months of July and August because due to summer the crowds
                                                are
                                                less, hotel prices are in range, and the country’s indoor activities are
                                                many to enjoy. Likewise, the cold months of December and January also
                                                offer
                                                plenty of entertainment activities to those who want an escape to a cold
                                                environment.</p> <p>
                                            Since the country lies on Equator, it faces extreme weather conditions to
                                            let all the seasons fall into two categories: Dry seasons and wet seasons
                                            with torrential downpours all around the year. Singapore does not have
                                            perfect blue skies all year, therefore do a complete weather check before
                                            planning a trip there.
                                        </p>
                                            <h2
                                                id='Shopping-in-Singapore-During-Singapore-Visa' style={{
                                                color: '#155088',
                                                fontSize: '20px',
                                                textTransform: "none"
                                            }}>Shopping
                                                in Singapore During Singapore Visa</h2>
                                            <p>If any country in the world proudly claims to be the ‘Shoppers Paradise’,
                                                then it is Singapore with its broad range of options from luxury to
                                                necessity. The smallest country encompasses more shopping malls located
                                                on a
                                                small distance and caters to the travelers’ demands like a paradise.</p>
                                            <p> From
                                                iconic shopping malls to economic local shopping centers, from
                                                world-class
                                                brands to boutiques in flea markets, and from modern decoration pieces
                                                to
                                                souvenirs, Singapore proudly sits on the list of every tourist.</p>
                                            <img className="w-100" style={{height: '410px'}} src={myImage6} alt=""
                                                 crossOrigin="anonymous"/><p></p>
                                            <p>Shopping in Singapore is not about buying things but exploring the world
                                                of
                                                varieties decorated with the designs of traditions and culture. The
                                                vibrant
                                                shopping hubs are, undoubtedly, expensive but a sharp shopper’s mind is
                                                what
                                                you need to fill your bags within the limit of your budget.</p> <p> Get
                                            a Singapore
                                            visit visa once in a lifetime for solely this purpose.
                                            We have compiled a list of famous shopping spots to help you decide
                                            yourself where to head first according to your budget and income.
                                        </p>
                                            <ul style={{listStyle: 'disc', marginLeft: '1rem'}}>
                                                <li>Ion Orchard- Queen of Shopping Malls</li>
                                                <li>Marina Bay- High-end shopping experience</li>
                                                <li>Bugis Street- Cheap Street Market</li>
                                                <li>VivoCity- One-Stop Shopping Destination</li>
                                                <li>Haji Lane- Boutique Street</li>
                                                <li>ChinaTown Street Market- Economical Shopping Destination</li>
                                                <li>Mustafa Centre- Center of Cheap Prices</li>
                                                <li>Little India- Center of Spice and Price</li>
                                                <li>Holland Village- One-Stop Mall</li>
                                                <li>Clarke Quay- World of Fashion</li>

                                            </ul>


                                            <h3 id='FAQs-of-Singapore-Visit-Visa-from Pakistan'
                                                style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>FAQs
                                                of
                                                Singapore Visit Visa from Pakistan</h3>

                                            <div className="container py-3">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="accordion" id="faqExample">
                                                            <div className="card">
                                                                <div className="card-header p-2" id="headingOne">
                                                                    <h5 className="mb-0">
                                                                        <button className="btn btn-link" style={{
                                                                            color: '#155088',
                                                                            fontSize: '20px',
                                                                            textTransform: "none"
                                                                        }} type="button"
                                                                                data-toggle="collapse"
                                                                                data-target="#collapseOne"
                                                                                aria-expanded="true"
                                                                                aria-controls="collapseOne">
                                                                            Q: Is the Singapore visa open for Pakistan?
                                                                        </button>
                                                                    </h5>
                                                                </div>

                                                                <div id="collapseOne" className="collapse show"
                                                                     aria-labelledby="headingOne"
                                                                     data-parent="#faqExample">
                                                                    <div className="card-body">
                                                                        <b></b> Yes, the Singapore visa is open for
                                                                        Pakistani people. You can open the application
                                                                        form
                                                                        online and provide the required documents to get
                                                                        a
                                                                        visa of your choice.
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card">
                                                                <div className="card-header p-2" id="headingTwo">
                                                                    <h5 className="mb-0">
                                                                        <button className="btn btn-link collapsed"
                                                                                style={{
                                                                                    color: '#155088',
                                                                                    fontSize: '20px',
                                                                                    textTransform: "none"
                                                                                }}
                                                                                type="button" data-toggle="collapse"
                                                                                data-target="#collapseTwo"
                                                                                aria-expanded="false"
                                                                                aria-controls="collapseTwo">
                                                                            Q: How to apply singapore visit visa from
                                                                            pakistan?
                                                                        </button>
                                                                    </h5>
                                                                </div>
                                                                <div id="collapseTwo" className="collapse"
                                                                     aria-labelledby="headingTwo"
                                                                     data-parent="#faqExample">
                                                                    <div className="card-body">
                                                                        Valid passport,filled visa application form,2
                                                                        passport-size photo,Cover letter,Bank statement
                                                                        of
                                                                        last 6 month .
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card">
                                                                <div className="card-header p-2" id="headingThree">
                                                                    <h5 className="mb-0">
                                                                        <button className="btn btn-link collapsed"
                                                                                style={{
                                                                                    color: '#155088',
                                                                                    fontSize: '20px',
                                                                                    textTransform: "none"
                                                                                }}
                                                                                type="button" data-toggle="collapse"
                                                                                data-target="#collapseThree"
                                                                                aria-expanded="false"
                                                                                aria-controls="collapseThree">
                                                                            Q: How long can you stay in Singapore with a
                                                                            tourist visa?
                                                                        </button>
                                                                    </h5>
                                                                </div>
                                                                <div id="collapseThree" className="collapse"
                                                                     aria-labelledby="headingThree"
                                                                     data-parent="#headingThree">
                                                                    <div className="card-body">
                                                                        The validity of tourist visa is 14-30 days as
                                                                        per
                                                                        issued by the Immigration Office.
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card">
                                                                <div className="card-header p-2" id="headingfour">
                                                                    <h5 className="mb-0">
                                                                        <button className="btn btn-link collapsed"
                                                                                style={{
                                                                                    color: '#155088',
                                                                                    fontSize: '20px',
                                                                                    textTransform: "none"
                                                                                }}
                                                                                type="button" data-toggle="collapse"
                                                                                data-target="#collapsefour"
                                                                                aria-expanded="false"
                                                                                aria-controls="collapsefour">
                                                                            Q: What happens if visa is rejected?
                                                                        </button>
                                                                    </h5>
                                                                </div>
                                                                <div id="collapsefour" className="collapse"
                                                                     aria-labelledby="headingfour"
                                                                     data-parent="#faqExample">
                                                                    <div className="card-body">
                                                                        Visa rejection means you need to reapply in the
                                                                        future after sometime as you are found
                                                                        ineligible to
                                                                        apply at this time.
                                                                    </div>
                                                                </div>
                                                            </div>


                                                            <div className="card">
                                                                <div className="card-header p-2" id="headingfive">
                                                                    <h5 className="mb-0">
                                                                        <button className="btn btn-link collapsed"
                                                                                style={{
                                                                                    color: '#155088',
                                                                                    fontSize: '20px',
                                                                                    textTransform: "none"
                                                                                }}
                                                                                type="button" data-toggle="collapse"
                                                                                data-target="#collapsefive"
                                                                                aria-expanded="false"
                                                                                aria-controls="collapsefive">
                                                                            Q: Do we have to give interview to get
                                                                            Singapore
                                                                            Student Pass?
                                                                        </button>
                                                                    </h5>
                                                                </div>
                                                                <div id="collapsefive" className="collapse"
                                                                     aria-labelledby="headingfive"
                                                                     data-parent="#faqExample">
                                                                    <div className="card-body">
                                                                        The interview for obtaining a Student Pass is
                                                                        not
                                                                        necessary, however, the embassy might take it if
                                                                        needed.
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card">
                                                                <div className="card-header p-2" id="headingsix">
                                                                    <h5 className="mb-0">
                                                                        <button className="btn btn-link collapsed"
                                                                                style={{
                                                                                    color: '#155088',
                                                                                    fontSize: '20px',
                                                                                    textTransform: "none"
                                                                                }}
                                                                                type="button" data-toggle="collapse"
                                                                                data-target="#collapsesix"
                                                                                aria-expanded="false"
                                                                                aria-controls="collapsesix">
                                                                            Q: Is gold and electronics cheaper in
                                                                            Singapore?
                                                                        </button>
                                                                    </h5>
                                                                </div>
                                                                <div id="collapsesix" className="collapse"
                                                                     aria-labelledby="headingsix"
                                                                     data-parent="#faqExample">
                                                                    <div className="card-body">
                                                                        Yes, the prices of electronics and gold are
                                                                        comparatively cheaper in Singapore because the
                                                                        additional sales tax has been removed on
                                                                        investment-grade products.
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card">
                                                                <div className="card-header p-2" id="headingseven">
                                                                    <h5 className="mb-0">
                                                                        <button className="btn btn-link collapsed"
                                                                                style={{
                                                                                    color: '#155088',
                                                                                    fontSize: '20px',
                                                                                    textTransform: "none"
                                                                                }}
                                                                                type="button" data-toggle="collapse"
                                                                                data-target="#collapseseven"
                                                                                aria-expanded="false"
                                                                                aria-controls="collapseseven">
                                                                            Q: Which type of Singapore visa is best?
                                                                        </button>
                                                                    </h5>
                                                                </div>
                                                                <div id="collapseseven" className="collapse"
                                                                     aria-labelledby="headingseven"
                                                                     data-parent="#faqExample">
                                                                    <div className="card-body">
                                                                        An Employment Pass is the main type of work visa
                                                                        issued to the foreign professionals and it is
                                                                        highly
                                                                        recommended especially if you wish to start your
                                                                        business.
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
                                                <button className="view-btn  w-100" type="submit">Continue Booking
                                                </button>
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
            ))}
        </ul>
    )
}

export default VisaSearchResultSingapore;