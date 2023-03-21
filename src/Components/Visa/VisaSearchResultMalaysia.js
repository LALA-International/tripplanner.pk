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
import myImage1 from '../../../src/Components/Visa/VisaImages/imgA1.jpg';
import myImage2 from "../../../src/Components/Visa/VisaImages/malaysia-visit-visa -from-pakistan.jpg";
import myImage3 from "../../../src/Components/Visa/VisaImages/malaysia-visa-from-pakistan.jpg";
import myImage4 from "../../../src/Components/Visa/VisaImages/malaysia-visa-(eVisa)-from Pakistan.jpg";
import myImage5 from "../../../src/Components/Visa/VisaImages/Malaysia tourist visa — tripplannerpk.com.jpg";
import myImage6 from "../../../src/Components/Visa/VisaImages/Malaysia-Visa-Application.jpg";
import Content from "./Content";


const VisaSearchResultMalaysia = () => {

    const headings = [
        {title: 'Malaysia Visit Visa', id: 'Malaysia-Visit-Visa'},
        {title: 'Malaysia Visa Policy', id: 'Malaysia-Visa-Policy'},

        {title: 'Malaysia Visit Visa Requirements', id: 'Malaysia-Visit-Visa-Requirements'},
        {title: 'Malaysia Visit Visa Terms & Condition', id: 'Malaysia-Visit-Visa-Terms-&-Condition'},

        {title: 'Malaysia Visit Visa Price In Pakistan', id: 'Malaysia-Visit-Visa-Price-In-Pakistan'},
        {title: 'Malaysia e Visa', id: 'Malaysia-e-Visa'},

        {title: 'Types of Malaysia Visa', id: 'Types-of-Malaysia-Visa'},
        {title: 'Malaysia Tourist Visa ', id: 'Malaysia-Tourist-Visa '},

        {title: 'Malaysia Work Visa', id: 'Malaysia-Work-Visa'},
        {title: 'Malaysia  Study Visa', id: 'Malaysia-Study-Visa'},

        {title: 'Malaysia Transit Visa', id: 'Malaysia-Transit-Visa'},
        {title: 'Travel Tips for Malaysia', id: 'Travel-Tips-for-Malaysia'},

        {title: 'Best Time to Visit Malaysia', id: 'Best-Time-to-Visit-Malaysia'},
        {
            title: 'Shopping in Malaysia During Malaysia visit visa',
            id: 'Shopping-in-Malaysia-During-Malaysia-visit-visa'
        },

        {title: 'FAQs of Malaysia Visa', id: 'FAQs-of-Malaysia-Visa'},


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
                                    {/*<h1>Malaysia</h1>*/}
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
                                        <h1 id='Malaysia-Visit-Visa'
                                            style={{color: '#155088', fontSize: '20px'}}>Malaysia Visit Visa</h1>
                                        <p>Malaysia, located in Southeast Asia, is a diverse country of modern cities
                                            with outstanding architecture, lush green tropical forests, scenic beaches,
                                            and much more. The country serves as a top tourist destination due to its
                                            wildlife, cultural heritage, and incredible cuisine. Malaysia, also known as
                                            the city of entertainment, serves as a major attraction site for Pakistani
                                            visitors who are queuing up steadily to get a
                                            <h7 style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}> Malaysia
                                                Visit Visa</h7>
                                            .

                                        </p>
                                        <b/>
                                        <p>Since both are Muslim countries and lie on the continent, they share
                                            comfortable bonding and culture which serves as a trigger for people to
                                            visit this magnificent country. Tourism in Malaysia contributes a lot to the
                                            country’s economy, and now that the political and economic relations between
                                            Pakistan and Malaysia have been improved, many visitors plan their tours
                                            either for business purposes or study purposes.

                                        </p>
                                        <h2 id='Malaysia-Visa-Policy'
                                            style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Malaysia
                                            Visa Policy</h2>

                                        <table class="table table-bordered ">
                                            <thead>
                                            <tr className="border-title">
                                                <th align="left">Visa Category</th>
                                                <th align="left">Visa Processing Time</th>
                                                <th align="left">Visa Fee (Pakistani Rupees)</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr className="border-data">
                                                <td>Malaysia Visit Visa</td>
                                                <td>
                                                    <div className="pb-1">7-8 working days</div>
                                                    {/*<div className="pb-1">Non-Immigrant Visa Multiple Entry</div>*/}
                                                </td>
                                                <td>
                                                    <div className="pb-1">PKR 12,000</div>
                                                    <div className="pb-1">(With Documents)</div>
                                                    <div className="pb-1">PKR 15,000</div>
                                                    <div className="pb-1">(Without Documents)</div>
                                                </td>
                                            </tr>
                                            <tr className="border-data">
                                                <td>Malaysia Tourist Visa</td>
                                                <td>
                                                    <div className="pb-1">5-7 working days</div>
                                                    {/*<div className="pb-1">Tourist Visa Multiple Entry</div>*/}
                                                </td>
                                                <td>
                                                    <div className="">PKR 3,699</div>
                                                    {/*<div className="">1 years / 3 years</div>*/}
                                                </td>
                                            </tr>
                                            <tr className="border-data">
                                                <td>Malaysia Study Visa</td>
                                                <td>
                                                    <div className="pb-1">14 working days</div>
                                                    {/*<div className="pb-1">Transit Visa Triple Entry</div>*/}
                                                    {/*<div className="pb-1">Non-Immigrant Visa Multiple Entry</div>*/}
                                                </td>
                                                <td>
                                                    <div className="pb-1">3 months</div>
                                                    <div className="pb-1">3 month / 6 months</div>
                                                    <div className="pb-1">3 month / 6 months</div>
                                                </td>
                                            </tr>
                                            <tr className="border-data">
                                                <td>Malaysia Study Visa</td>
                                                <td>
                                                    <div className="pb-1">14 working days</div>
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
                                                <td>Malaysia eVisa</td>
                                                <td>
                                                    <div className="pb-1">3 working days</div>
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
                                                <td>Malaysia Transit Visa</td>
                                                <td>
                                                    <div className="pb-1">Malaysia Transit Visa</div>
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

                                        {/*<p className="pt-3">Note: The time / period of stay are determined by the USA Immigration.</p>*/}
                                        <h2 id='Malaysia-Visit-Visa-Requirements'
                                            style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Visit
                                            Visa Requirements</h2>
                                        <p>Following is the list of documents to be prepared beforehand to apply for a
                                            Malaysia Visit visa:
                                        </p>
                                        <ul style={{listStyle: 'disc', marginLeft: '1rem'}}>
                                            <li>Photocopy of original passport</li>
                                            <li>CNIC copy</li>
                                            <li>04 Passport size photographs</li>
                                            <li>02 visa application forms</li>
                                            <li>Original bank statement from the last six months</li>
                                            <li> Business covering letter pad</li>
                                            <li>Return Air Ticket</li>
                                            <li>NTN Number</li>
                                            <li>In case of a minor traveling, NOC from both the parents</li>
                                            <li>In case of a minor traveling with one parent, the other parents’ NOC is
                                                required
                                            </li>
                                        </ul>

                                        <h2
                                            id='Malaysia-Visit-Visa-Terms-&-Condition'
                                            style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Malaysia
                                            Visit Visa Terms & Condition</h2>
                                        <p>The terms and conditions for Malaysia Visit Visa are as follows:
                                        </p>
                                        <ul style={{listStyle: 'disc', marginLeft: '1rem'}}>
                                            <li>Visa fee once submitted is non-refundable in case of visa delaying or
                                                rejection.
                                            </li>
                                            <li>Since there is no Malaysian Embassy in Pakistan, Tripplannerpk has the
                                                drop box, so you can easily submit your documents to us.
                                            </li>
                                            <li>In case of a business visa, make sure to attach a copy of the invitation
                                                letter from the respective company.
                                            </li>
                                            <li>Visitors should have a valid passport and return air ticket.</li>
                                            <li>Applicants have to show PKR 200,000 at the time of registering to prove
                                                they have sufficient funds to carry out their travel expenses.
                                            </li>
                                        </ul>

                                        <h2 style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Malaysia
                                            Visit Visa Price In Pakistan</h2>
                                        <p>Malaysia is a country of rich culture, colonial buildings, and delicious
                                            cuisine. Planning a tour of this paradise would be the best decision of
                                            yours. Tripplannerpk offers two types of <h7
                                                style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>Malaysia
                                                Visit Visa</h7> i.e.,
                                            with documents and without documents. The prices vary accordingly. Different
                                            travel agencies will offer different prices according to the services they
                                            provide.
                                        </p>
                                        <ul style={{listStyle: 'disc', marginLeft: '1rem'}}>
                                            <li>Visit Visa with documents: PKR 12,000</li>
                                            <li>Visit Visa without documents: PKR 15,000</li>
                                        </ul>

                                        <h2 id='Malaysia-e-Visa'
                                            style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Malaysia
                                            e Visa</h2>
                                        <p>Malaysia eVisa is an electronic visa issued to those people who intend to
                                            enter Malaysia for work or tourism. It is an online platform to offer
                                            hassle-free issuance of visas by simplifying the application process.</p>

                                        <h2 id='Types-of-Malaysia-Visa'
                                            style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Types of
                                            Malaysia Visa</h2>
                                        <b/>
                                        <p><p></p></p>
                                        <img className="w-100" style={{height: '410px'}} src={myImage2} alt=""
                                             crossOrigin="anonymous"/>
                                        <p><p></p></p>
                                        <p>There are five types of <h7
                                            style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>Malaysia
                                            Visit Visa:</h7></p>

                                        <h2 id='Malaysia-Tourist-Visa '
                                            style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Malaysia
                                            Tourist Visa</h2>
                                        <p>The Malaysian tourist visa is used for Pakistani people who wish to visit the
                                            country for tourism purposes. The visa is issued for not more than 30 days
                                            and does not have the possibility of an extension.</p> <p> Compared to other
                                        countries, Malaysia has very strict rules and regulations regarding who they
                                        allow to enter their country and for how much time. Malaysian tourist Visa
                                        is of three types:
                                    </p>
                                        <ul style={{listStyle: 'disc', marginLeft: '1rem'}}>
                                            <li>A <h7 style={{
                                                color: 'black',
                                                fontWeight: 'bold',
                                                fontSize: '20px'
                                            }}>Single-Entry
                                                Visa</h7> refers to the kind of visa in which you can visit the country
                                                only once. They are mostly issued for tourism purposes, whereas,
                                                multiple-entry visas that have longer validity are not issued for
                                                tourists or visitors.
                                            </li>
                                            <li>A <h7 style={{
                                                color: 'black',
                                                fontWeight: 'bold',
                                                fontSize: '20px'
                                            }}> Pre-Entry
                                                Requirement</h7> allows you to travel to the country without actually
                                                entering or visiting it.
                                            </li>
                                            <li>A <h7
                                                style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>Visa
                                                without
                                                Reference</h7> is issued from the Malaysian Representative Office/
                                                Embassy without seeking any permission from the Immigration Department
                                                of Malaysia.
                                            </li>
                                        </ul>
                                        <p><p></p></p>
                                        <img className="w-100" style={{height: '410px'}} src={myImage3} alt=""
                                             crossOrigin="anonymous"/>
                                        <p><p></p></p>


                                        <h3 id='Malaysia-Work-Visa'
                                            style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Malaysia
                                            Work Visa </h3>
                                        <p>A Malaysian work visa is issued for those foreign nationals who wish to
                                            establish a business there or want to get employed there in any company. The
                                            term ‘work visa’ refers to the whole process of getting authorization to
                                            work there.</p>
                                        <p>There are three categories of work visas:</p>
                                        <p>
                                            <h7 style={{
                                                color: 'black',
                                                fontWeight: 'bold',
                                                fontSize: '20px'
                                            }}> Employment Pass-
                                            </h7>
                                            It is the type of work permit issued mostly to the foreign nationals working
                                            in any Malaysian company in a high-skilled capacity. In this regard,
                                            employers are requested to get approval through the Expatriate Committee or
                                            any other regulatory agency to obtain the visa. The type usually lasts for
                                            five years and is renewable.
                                        </p>
                                        <p>
                                            <h7 style={{
                                                color: 'black',
                                                fontWeight: 'bold',
                                                fontSize: '20px'
                                            }}> Temporary Employment Pass-
                                            </h7>
                                            There are two types of employment pass:
                                            Foreign worker and foreign domestic helper (FDH) temporary employment pass.
                                            The visa is issued after meeting certain requirements for at least two
                                            years.
                                        </p>
                                        <p>
                                            <h7 style={{
                                                color: 'black',
                                                fontWeight: 'bold',
                                                fontSize: '20px'
                                            }}> Professional Visit Pass-
                                            </h7>
                                            This type of visa is issued to those interested people who intend to work
                                            for the time being in any Malaysian company. The visa limit in this case is
                                            12 months.
                                        </p>

                                        <h3 id='Malaysia-Study-Visa'
                                            style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Malaysia
                                            Study Visa</h3>
                                        <p>International students wishing to pursue education in Malaysia need this type
                                            of visa in addition to a student pass pertaining to their purpose of travel.
                                            The two terms are substitutable but they mean the same.</p>

                                        <h3 id='Malaysia-Transit-Visa'
                                            style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Malaysia
                                            Transit Visa</h3>
                                        <p>A Transit visa is issued to those foreign nationals who wish to enter
                                            Malaysia in transit to other countries. For instance, if the traveler wishes
                                            to stay for a short duration of time in the country and is intending to
                                            leave the airport. A free transit pass is generally issued on transiting
                                            from Kuala Lumpur International Airport, which permits one to stay for at
                                            least 120 hours.</p>

                                        <h3 id='Travel-Tips-for-Malaysia'
                                            style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Travel
                                            Tips for Malaysia</h3>
                                        <p>Malaysia, a tropical paradise in Southeast Asia, is a benevolent and
                                            culturally rich country known for its rainforests, beaches, natural beauty,
                                            and impressive scenery.</p> <p> It serves as the best holiday destination
                                        with a
                                        blend of Malay, Indian, Chinese, European, Arabic, and other cultures
                                        complemented by many ancient temples and mosques. Despite the technological
                                        advancement, bustling cities, and shopping districts, the country has an
                                        incredibly rich landscape to awe the incoming visitors.</p>
                                        <p><p></p></p>
                                        <img className="w-100" style={{height: '410px'}} src={myImage4} alt=""
                                             crossOrigin="anonymous"/>
                                        <p><p></p></p>
                                        <p>From advancing modernity to traditional nature, from architectural
                                            skyscrapers to gilded shrines and mosques, Malaysia houses the tallest twin
                                            towers in the world along with beautiful islands to dive in, rocky tracks to
                                            trek, and sandy beaches to rest.</p>
                                        <p>A place packed with scenic places might appear as a mish-mash stack of
                                            confusion to first-timers, therefore, we provide a set of travel tips for
                                            Malaysia visa before you embark on a journey to this magnificent country.
                                            Navigate the country’s confounding ethnic and religious tapestry with all
                                            the basic knowledge before jetting off.</p>

                                        <p>
                                            <h7 sstyle={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>1) What
                                                to Wear and Pack
                                            </h7>
                                            Malaysia lies around the equator and enjoys tropical weather. Throughout the
                                            year, the wind is humid and hot, shifting to cooler when moving to islands
                                            and mountains. It is recommended to pack clothes made of natural fabrics
                                            that are lightweight and loose-fit. Avoid taking black clothes with you as
                                            they absorb heat and will make you feel warm.
                                        </p>
                                        <p>
                                            Although Malaysia is not a conservative country, some areas do require you
                                            to cover your hair or wear conventional clothing. Exposing too much bare
                                            skin in public will incur disapproving looks from the public. Also, don’t
                                            forget to carry scarves and long skirts in case you are planning to visit
                                            any shrine or religious place.
                                        </p>
                                        <p>
                                            <h7 style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>2)
                                                Double-Check the Travel
                                                Requirements
                                            </h7>
                                            One of the most essential things to be considerate of before traveling to
                                            any country is to double-check all the travel documents before departure. Be
                                            sure to keep your passport, identity card, and other necessary documents. Do
                                            browse if the country you are visiting requires certain vaccinations or not
                                            and go through the procedure as mentioned in their travel procedure.
                                        </p>
                                        <p>
                                            Travelers moving to Malaysia are advised to download the My Sejahtera App
                                            and create a profile there. The purpose of the app is to let you fill out a
                                            departure form from the traveler icon as some airlines won’t allow you to
                                            board until you have completed the form.
                                        </p>
                                        <p>
                                            <h7 style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>3) Travel
                                                during the
                                                Monsoon
                                            </h7>
                                            If you are a budget-conscious adventurer, try to visit the country during
                                            the monsoon season as the prices of flights and accommodations decrease
                                            significantly due to the seasonal nature of the travel industry.
                                        </p>
                                        <p> Although,
                                            monsoon rains hit hardest on the eastern side and somewhat cause discomfort
                                            but looking at the brightest side is what makes life interesting. The heavy
                                            rainfalls grant you a view a normal bright day would never. The lush green
                                            landscapes, gushing waterfalls, and deep green forests make the scenery
                                            breathtaking, soothing, and peaceful.</p> <p>
                                        The monsoon season in Malaysia lasts from November to March and is referred
                                        to as the country’s quiet period because the crowds are less, the weather is
                                        serene, and the view is calming. Grab this win-win situation and enjoy the
                                        holidays as you want.

                                    </p>
                                        <p>
                                            <h7 style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>4) Pick
                                                your
                                                residence/accommodation wisely
                                            </h7>
                                            The top budget-friendly travel tip for any country is to choose your
                                            residence wisely. Staying in hostels is preferable over hotels or apartments
                                            as it costs less and provides greater exposure. Living with a family or in a
                                            hostel allows you to interact with the locals and understand their culture,
                                            nature, and history more deeply.
                                        </p>
                                        <p>
                                            The capital of Malaysia, Kuala Lumpur offers cheap spots with the best
                                            services to its tourists. Among them, the two most famous are ‘China Town
                                            near the Pasar Seni LRT station’ and ‘Changkat in Bukit Bintang’. The two
                                            spots are near the local transport and trendy clubs to let you entertain
                                            yourself the way you want to.
                                        </p>
                                        <p>
                                            <h7 style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>5) Prefer
                                                Local Transport
                                            </h7>
                                            Visiting a foreign country demands setting your budget wisely. Private
                                            transport is good and offers leisure and comfort but the facility should be
                                            grabbed only if you have an ample amount of money in your card or wallet.
                                        </p>
                                        <p>
                                            Most visitors are advised to use local transport for traveling to save money
                                            for other things as well. Moreover, the transport facility in Malaysia is
                                            quite up-to-date and comfortable. Gone are the times when local transport
                                            was proportional to loads of discomfort and irritation.</p> <p>
                                        If you land at Kuala Lumpur airport, you would find many cabs or tuk-tuks
                                        (Malaysian Transport) lined outside to take you to your destination. If not
                                        then you can opt for Express Train or bus running throughout the country and
                                        within the city.

                                    </p>


                                        <h3 id='Best-Time-to-Visit-Malaysia'
                                            style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Best
                                            Time to Visit Malaysia</h3>
                                        <p>The best time to visit Malaysia depends on the area you plan to visit. The
                                            country’s tropical and equatorial climate faces rain throughout the year,
                                            however, generally the temperature remains hot and humid. The intermittent
                                            rains are not heavy enough to ruin your enjoyment. The country is divided
                                            into two regions: the western and the eastern coast.</p> <p>
                                        The western coast remains dry throughout the year making it best to enjoy
                                        the sea view and beaches. The months of September and October face
                                        comparatively more rain, urging tourists to visit the eastern coast and make
                                        their trips memorable. Both regions face different patterns of rainfall
                                        throughout the year.
                                    </p>
                                        <p><p></p></p>
                                        <img className="w-100" style={{height: '410px'}} src={myImage5} alt=""
                                             crossOrigin="anonymous"/>
                                        <p><p></p></p>
                                        <p>David, a Southeast Asian Specialist, once said:<b/>
                                            “With such distinct east and west seasons, the cross-over period between
                                            April and June is a great time to enjoy everything that Malaysia has to
                                            offer.”
                                        </p>

                                        <h2 id='Shopping-in-Malaysia-During-Malaysia-visit-visa'
                                            style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Shopping
                                            in Malaysia During Malaysia visit visa</h2>
                                        <p>Apart from calming beaches, scenic landscapes, architectural buildings, and
                                            delicious cuisines, Malaysia serves as every shopper’s paradise for a good
                                            reason.</p> <p>The country boasts great shopping malls flowing with quality
                                        and
                                        diversity. From clothes to shoes, beauty products to electronics, and
                                        kitchen wares to toiletries, Malaysia covers all with pride and joy.</p> <p> The
                                        best experience is gained in Kuala Lumpur, a global city with local markets
                                        and top-class shopping malls, offering products in a competitive range of
                                        prices. Langkawi is also famous for attracting shopaholics from all around
                                        the world to fill their bags with antiques and souvenirs.</p> <p>
                                        Apart from calming beaches, scenic landscapes, architectural buildings, and
                                        delicious cuisines, Malaysia serves as every shopper’s paradise for a good
                                        reason.</p> <p> The country boasts great shopping malls flowing with quality and
                                        diversity. From clothes to shoes, beauty products to electronics, and
                                        kitchen wares to toiletries, Malaysia covers all with pride and joy.</p> <p> The
                                        best experience is gained in Kuala Lumpur, a global city with local markets
                                        and top-class shopping malls, offering products in a competitive range of
                                        prices. Langkawi is also famous for attracting shopaholics from all around
                                        the world to fill their bags with antiques and souvenirs.

                                    </p>
                                        <p><p></p></p>
                                        <img className="w-100" style={{height: '410px'}} src={myImage6} alt=""
                                             crossOrigin="anonymous"/>
                                        <p><p></p></p>
                                        <p>The following guide will help you decide when and where to shop.</p>
                                        <ul style={{listStyle: 'disc', marginLeft: '1rem'}}>
                                            <li>Berjaya Times Square- World’s Ninth Largest Building</li>
                                            <li>Pavilion Kuala Lumpur- City’s Trendiest Shopping Mall</li>
                                            <li>Suria KLCC- A huge Shopping and Dining Complex</li>
                                            <li>Central Market- One-Stop Shopping Mall for various Ethnicities</li>
                                            <li>Berjaya Times Square- World’s Ninth Largest Building</li>
                                            <li>The Gardens Mall- Luxury Destination Mall</li>
                                            <li>Sunway Pyramid- An Egyptian-themed Shopping Mall</li>
                                            <li>Sungei Wang Plaza- Oldest Shopping Mall</li>
                                            <li>Starhill Gallery Kuala Lumpur- A high-end Luxury Shopping Mall</li>
                                            <li>Cameron Square- A three-level Shopping Complex</li>
                                        </ul>


                                        <h2 id='FAQs-of-Malaysia-Visa'
                                            style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>FAQs of
                                            Malaysia Visa</h2>

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
                                                                        Q: Can a Pakistani visit Malaysia now?
                                                                    </button>
                                                                </h5>
                                                            </div>

                                                            <div id="collapseOne" className="collapse show"
                                                                 aria-labelledby="headingOne" data-parent="#faqExample">
                                                                <div className="card-body">
                                                                    <b></b> Yes, with an original passport and other
                                                                    travel documents, Pakistani travelers can visit
                                                                    Malaysia anytime they want.
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
                                                                        Q: How long does it take to get a Malaysia visa
                                                                        from Pakistan?
                                                                    </button>
                                                                </h5>
                                                            </div>
                                                            <div id="collapseTwo" className="collapse"
                                                                 aria-labelledby="headingTwo" data-parent="#faqExample">
                                                                <div className="card-body">
                                                                    The normal processing time for a Malaysian visa is
                                                                    three months, be it a work visa or a study visa.
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
                                                                        Q: Is a bank statement required for a Malaysian
                                                                        visa?
                                                                    </button>
                                                                </h5>
                                                            </div>
                                                            <div id="collapseThree" className="collapse"
                                                                 aria-labelledby="headingThree"
                                                                 data-parent="#faqExample">
                                                                <div className="card-body">
                                                                    Yes, a three-month bank statement or credit card
                                                                    statement is required for proving your financial
                                                                    stability is a must for your visa process to be
                                                                    successful.
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
                                                                        Q: Can I extend my visa to Malaysia?
                                                                    </button>
                                                                </h5>
                                                            </div>
                                                            <div id="collapsefour" className="collapse"
                                                                 aria-labelledby="headingfour"
                                                                 data-parent="#faqExample">
                                                                <div className="card-body">
                                                                    Yes, a visa extension is possible and you can apply
                                                                    by visiting the Immigration Department of Malaysia.
                                                                    You will be guided accordingly.
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
                                                                        Q: Is a medical test required for a Malaysia
                                                                        visa?
                                                                    </button>
                                                                </h5>
                                                            </div>
                                                            <div id="collapsefive" className="collapse"
                                                                 aria-labelledby="headingfive"
                                                                 data-parent="#faqExample">
                                                                <div className="card-body">
                                                                    Yes, a medical examination is a proof of your
                                                                    physical fitness for a Malaysian visa.
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
                                                                        Q: Can I enter Malaysia without IELTS?
                                                                    </button>
                                                                </h5>
                                                            </div>
                                                            <div id="collapsesix" className="collapse"
                                                                 aria-labelledby="headingsix"
                                                                 data-parent="#faqExample">
                                                                <div className="card-body">
                                                                    There is a good chance to enter the country because
                                                                    many top-class universities in the country do not
                                                                    accept linguistic tests such as TOEFL, IELTS, or
                                                                    GMAT.
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

export default VisaSearchResultMalaysia;