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
// import myImage1 from 'public/assets/img/thailand-pop-flig.png';
import myImage1 from '../../../src/Components/Visa/VisaImages/saudi-arabia-visit-visa-from-pakistan.jpg';
import myImage2 from "../../../src/Components/Visa/VisaImages/Saudi-arabia-tourist-visa.jpg";
import myImage3 from "../../../src/Components/Visa/VisaImages/Saudi-arabia-visit-visa-for-pakistani.jpg";
import myImage4 from "../../../src/Components/Visa/VisaImages/Saudi-arabia-visa-information.jpg";
import myImage5 from "../../../src/Components/Visa/VisaImages/Saudia Arabia/Saudi-evisa.jpg";
import myImage6 from "../../../src/Components/Visa/VisaImages/Perform-umrah.jpg";
import myImage7 from "../../../src/Components/Visa/VisaImages/Visit-visa-for-saudi-arabia.jpg";
import Content from "./Content";

const VisaSearchResultSaudiArabia = () => {

    const headings = [
        { title: 'Saudi Arabia Visit Visa', id: 'Saudi-Arabia-Visit-Visa'},
        {title: 'Saudi Arabia Visa Policy', id: 'Saudi-Arabia-Visa-Policy'},

        {title: 'Visit Visa for Saudi Arabia From Pakistan Requirements', id: 'Visit-Visa-for-Saudi-Arabia-From-Pakistan-Requirements'},
        {title: 'Saudi Arabia Visit Visa From Pakistan Terms & Condition', id: 'Saudi-Arabia-Visit-Visa-From-Pakistan-Terms-&-Condition'},

        {title: 'Visit Visa for Saudi Arabia from Pakistan Price', id: 'Visit-Visa-for-Saudi-Arabia-from-Pakistan-Price'},
        {title: 'Saudi e Visa', id: 'Saudi-e-Visa'},

        {title: 'Types of Saudi Arabia Visa', id: 'Types-of-Saudi-Arabia-Visa'},
        {title: 'Best Time to Visit Saudi Arabia', id: 'Best-Time-to-Visit-Saudi-Arabia'},

        {title: 'Shopping in Saudi Arabia During Saudi Arabia Visit Visa', id: 'Shopping-in-Saudi-Arabia-During-Saudi-Arabia-Visit-Visa'},
        {title: 'FAQs of Saudi Arabia Visit Visa', id: 'FAQs-of-Saudi-Arabia-Visit-Visa'},


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
                                    {/*<h1 style={{textTransform: "none"}}>Saudi Arabia</h1>*/}
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
                                        <h1 id='Saudi-Arabia-Visit-Visa'
                                            style={{color: '#155088', fontSize: '20px', textTransform: "none" , marginTop: '10px'}}>Saudi
                                            Arabia Visit Visa </h1>
                                        <p>The Kingdom of Saudi Arabia with its vast sand dunes, ancient cities,
                                            deserts, and emerging technology serves as the second largest tourist
                                            destination in the Middle East. </p> <p>The country is home to several UNESCO
                                            registered heritage sites, historical and religiously important buildings,
                                            museums, and monuments. Although the major part of tourism here is still
                                            Islamic pilgrimages, the country is opening up its doors through Saudi
                                            Arabia Visit Visa to let the world explore its hidden secrets.</p> <p>
                                            Situated on the Arabian Peninsula, Saudi Arabia presents a perfect fusion of
                                            global diversity, ethnicity, and cultures. Apart from architectural wonder,
                                            great Saudi hospitality, and generosity, the Kingdom is famous for its
                                            magical wonders of marine life in the Red Sea and the largest Palm Oasis.</p> <p>
                                            The tourism sector in Saudi Arabia is proving to be the white oil for the
                                            economy, increasing the GDP annually and promoting the growth of leisure
                                            tourism
                                            . </p>
                                        <b/>
                                        <img className="w-100" style={{height: '410px'}} src={myImage2} alt=""
                                             crossOrigin="anonymous"/><p></p>
                                        <p>Millions of Pakistani expats are living and working there, increasing the
                                            number of annual visitors from Pakistan. The process to get a Visit Visa
                                            Saudi Arabia is simple and feasible. Therefore, it is recommended to plan a
                                            tour to explore the centuries old archeological sites, inscriptions, and
                                            enchanting world of oriental scents.</p>


                                        <h2 id='Saudi-Arabia-Visa-Policy'
                                            style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Saudi
                                            Arabia Visa Policy</h2>

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
                                                <td>Saudi Arabia Umrah Visa</td>
                                                <td>
                                                    <div className="pb-1">90 Working Days</div>
                                                    {/*<div className="pb-1">Non-Immigrant Visa Multiple Entry</div>*/}
                                                </td>

                                            </tr>
                                            <tr className="border-data">
                                                <td>06 Months Saudi Arabia Visa</td>
                                                <td>
                                                    <div className="pb-1">180 Working Days</div>
                                                    {/*<div className="pb-1">Tourist Visa Multiple Entry</div>*/}
                                                </td>
                                                <td>
                                                    {/*<div className="">PKR 3,699</div>*/}
                                                    {/*<div className="">1 years / 3 years</div>*/}
                                                </td>
                                            </tr>
                                            <tr className="border-data">
                                                <td>01 Year Saudi Arabia Visa</td>
                                                <td>
                                                    <div className="pb-1">365 Working Days</div>
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
                                                <td>Saudi Arabia Visit Visa</td>
                                                <td>
                                                    <div className="pb-1">0 Working Days</div>
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
                                                <td>Ramadan Saudi Arabia Umrah Visa</td>
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


                                        <h2 id='Visit-Visa-for-Saudi-Arabia-From-Pakistan-Requirements'
                                            style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Visit
                                            Visa for Saudi Arabia From Pakistan Requirements</h2>
                                        <p>You will need following documents to apply for a <h7
                                            style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>Visit Visa
                                            Saudi Arabia.</h7> :

                                        </p>
                                        <ul style={{listStyle: 'disc', marginLeft: '1rem'}}>
                                            <li> A fully-filled application form</li>
                                            <li> Original Passport with validity of 08 months</li>
                                            <li> Invitation letter from a sponsor in Saudi Arabia</li>
                                            <li> Passport photocopy of both applicant and sponsor</li>
                                            <li> Airline Ticket Reservation</li>
                                            <li> CNIC/B-form for kids under age 18</li>
                                            <li> NADRA marriage certificate in case of spouse visit</li>

                                        </ul>
                                        <p>All the documents, biometric information, and visa application must be
                                            submitted to the Etimad Visa Service Centre for the verification.</p>

                                        <h2 id='Saudi-Arabia-Visit-Visa-From-Pakistan-Terms-&-Condition'
                                            style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Saudi
                                            Arabia Visit Visa From Pakistan Terms & Condition</h2>
                                        <p>The terms and conditions for
                                            <h7 style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}> Saudi
                                                Arabia Vist Visa </h7>
                                            are as follows:
                                        </p>


                                        <ul style={{listStyle: 'disc', marginLeft: '1rem'}}>
                                            <li>Muslim tourists are allowed to perform Umrah with a tourist visa,
                                                however, a separate visa is required to perform Hajj.
                                            </li>
                                            <li>Visa fee is non-refundable in case of visa delaying or rejection.</li>
                                            <li>Israeli’s citizens are not allowed to travel to Saudi Arabia, even
                                                transiting through the country is prohibited.
                                            </li>
                                            <li>Overstay in the country without visa extension may charge you with fines
                                                and detentions.
                                            </li>
                                            <li>Tripplannerpk is not responsible for any delay in visa processing since
                                                the process is carried out via the Embassy.
                                            </li>
                                        </ul>


                                        <h2 id='Visit-Visa-for-Saudi-Arabia-from-Pakistan-Price'
                                            style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Visit
                                            Visa for Saudi Arabia from Pakistan Price</h2>
                                        <p>The Kingdom of Saudi Arabia has been attracting tourists from all around the
                                            globe since 2013, when the visa process was made easier and affordable.
                                            Every year, millions of Pakistani people visit the country, either for
                                            religious or tourism, work-related purposes.</p> <p> The process of application is
                                            very simple and feasible.Tripplannerpk is here to assist you in the
                                            application process by providing you with a quick, immediate Saudi Arabia
                                            Visit Visa at affordable prices.</p>
                                        <ul style={{listStyle: 'disc', marginLeft: '1rem'}}>
                                            <li>Visit Visa with documents: PKR</li>
                                            <li>Visit Visa without documents: PKR</li>
                                        </ul>
                                        <h2 id='Saudi-e-Visa'
                                            style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Saudi e
                                            Visa</h2><b/>

                                        <p>Saudi e Visa is an entry authorization document allowing foreign nationals to
                                            enter Saudi Arabia for unnecessary and non-religious purposes.
                                             The Saudi Tourist Visa is a one-year, multiple-entry electronic visa,
                                            allowing tourists to spend up to 90 days.</p> <p> Covers tourism and Umrah and
                                            excludes other activities such as studying or hajj. The tourist visa is
                                            available as e-visa, visa-on-arrival and consulate visa.
                                        </p>


                                        <h3 id='Types-of-Saudi-Arabia-Visa'
                                            style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Types of
                                            Saudi Arabia Visa </h3>


                                        <img className="w-100" style={{height: '410px'}} src={myImage3} alt=""
                                             crossOrigin="anonymous"/><p></p>
                                        <p>There are five types of Saudi Arabia Visit Visa:</p>
                                        <h3
                                            style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Saudi
                                            Arabia Business Visa</h3>
                                        <p>Business visa in Saudi Arabia allows you to establish business, take part in
                                            official meetings, clients meetings, or set up any professional work there.
                                            Business visas are of two types: Single-Entry Visa and Multiple- Entry Visa
                                            with different costs and validities from the date of issuance. The Saudi
                                            government has now extended the stay limit of single-entry visas to three
                                            months.</p>
                                        <h3 style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Saudi
                                            Arabia Employee / Work Visa</h3>
                                        <p>Anyone who wishes to enter the Kingdom of Saudi Arabia for work purposes
                                            needs an employee visa to legally stay there and continue to do work. In
                                            this case, an employee needs a sponsor in the country to handle all the
                                            application process. The sponsoring person will assist the prospective
                                            employee in completing the documents required and in the issuance of
                                            visa.</p>

                                        <h3 style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Saudi
                                            Arabia Tourist Visa</h3>
                                        <p>The tourist visa allows you to visit the country as a tourist for a limited
                                            period and take part in tourism-related activities such as studying,
                                            exploring, and entertainment. The tourist visa in Saudi Arabia is a permit
                                            document of one year allowing the person to stay for 90 days multiple times
                                            of the year.</p>
                                        <h3 style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Saudi
                                            Arabia Umrah Visa</h3>
                                        <p>Umrah visa is a legal travel document issued by the Kingdom of Saudi Arabia
                                            to let pilgrims enter the country and perform the Islamic rituals for 14
                                            days. The validity of this visa is up to 90 days but the person needs to
                                            check out as soon as he has completed all the rituals. In this case, it is
                                            necessary to ensure your departure within the allotted time.</p>

                                        <h3 style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Saudi
                                            Arabia Hajj Visa </h3>
                                        {/*<img className="w-100" style={{height: '410px'}} src={myImage2} alt=""*/}
                                        {/*     crossOrigin="anonymous"/>*/}
                                        <p>Hajj visa is an important legal document issued to people who wish to perform
                                            Hajj. Hajj visa allows a pilgrim to travel between the twin cities of Mecca
                                            and Madinah and in the vicinity of Jeddah.</p> <p> You cannot explore the country or
                                            obtain any residence with this visa. This type of visa is granted only to
                                            pilgrims intending to stay there for performing Hajj rituals and then moving
                                            out within the allotted time.</p>
                                        <h3 style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Travel
                                            Tips for Saudi Arabia</h3>
                                        <img className="w-100" style={{height: '410px'}} src={myImage4} alt=""
                                             crossOrigin="anonymous"/><p></p>
                                        <p>Saudi Arabia, the once most difficult country to visit, has been on the list
                                            of travelers since 2019, when the country has decided to open its door for
                                            leisure tourism. With its recent e-Visa policy, the country is on its way to
                                            renew itself as a premier holiday destination for people all around the
                                            world.</p> <p> The Islamic rules are now flexible enough to let people get the taste
                                            of Arabian culture, cuisine, and history through <h
                                                style={{color: 'black', fontSize: '20px'}}>Saudi Arabia Visit Visa</h>.
                                            Several luxury restaurants, family parks, and hotels have been opened in
                                            recent years to entertain its visitors. An incredible country filled with
                                            natural and archeological sites is hard to skip when it comes to travelers
                                            who are always in search of a new dig.</p> <p> Saudi Arabia is now getting famous
                                            for both Islamic tourism as well as leisure tourism, so getting a <h
                                                style={{color: 'black', fontSize: '20px'}}>Saudi Arabia Visit
                                                Visa</h> will prove beneficial for you.
                                            Although the country has lifted certain strict rules and regulations, you
                                            still need to stick to some ethics and come prepared to avoid any kind of
                                            offense. We have prepared a list of travel tips that will be handy to you on
                                            your <h style={{color: 'black', fontSize: '20px'}}>Saudi Arabia Visit
                                                Visa</h>.
                                        </p>
                                        <img className="w-100" style={{height: '410px'}} src={myImage5} alt=""
                                             crossOrigin="anonymous"/>
                                        <p>
                                            <h style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>1. Pack
                                                Modest Clothes-
                                            </h>
                                            Saudi Arabia is an Islamic country and despite becoming flexible to certain
                                            rules, you still need to wear modest clothes in public to avoid any offense
                                            or public scrutiny.
                                        </p>
                                        <p>
                                            <h style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>2.
                                                Language in Saudi Arabia-
                                            </h>
                                            As expected, the official language of the country is Arabic with different
                                            accents in different regions. Locals are comfortable with this language,
                                            however, tourists coming mostly speak English which is hard to understand
                                            especially by shop owners or old people.</p> <p> Young Saudi students are now
                                            getting education in foreign so you might catch one of them capable of
                                            speaking it. A major population from Pakistan and India is also found
                                            speaking Urdu/ Hindi.
                                        </p>
                                        <p>
                                            <h style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>3. Carry
                                                Arabic phrasebook-
                                            </h>
                                            Since English is not very common there, carrying an Arabian phrasebook will
                                            help you a lot. Moreover, learning some basic sentences to get guidance is
                                            also preferable. However, you face difficulty in catching up to their
                                            dialects.
                                        </p>
                                        <p>
                                            <h style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>4. Take a
                                                Universal Adapter with you-
                                            </h>
                                            The Kingdom of Saudi Arabia uses type G adapter with three faces, normally
                                            used in the USA, and UK. Therefore, it is always recommended to carry a
                                            universal adapter with you to avoid getting stuck due to these electric
                                            appliances.
                                        </p>
                                        <p>
                                            <h style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>5. Tap
                                                Water is safe to drink-
                                            </h>
                                            The tap water in Saudi Arabia is free of impurities and is found safe enough
                                            to drink. It is always advised to carry your own reusable water bottle since
                                            discarding plastic in the country is a huge issue in the country.
                                        </p>


                                        <h3 id='Best-Time-to-Visit-Saudi-Arabia'
                                            style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Best
                                            Time to Visit Saudi Arabia</h3>
                                        <p>Saudi Arabia being one of the desert countries of the Middle Eastern region
                                            facing a hot and blistering climate all-round the year. The scorching sun
                                            blesses the day with dryness and humidity, however, the nights become
                                            somewhat bearable with casual rains. The average temperature ranges from
                                            40-45℃ in summers, not really perfect for planning a holiday tour.</p>
                                        <img className="w-100" style={{height: '410px'}} src={myImage6} alt=""
                                             crossOrigin="anonymous"/><p></p>
                                        <p>The best time to visit Saudi Arabia depends on the region of your visit, the
                                            kind of activities you are going to participate in, and the duration of your
                                            proposed tour. Saudi Arabia is not a summer destination, so the tourist
                                            season ran from October to March, with the best time landing between
                                            November to February when the temperature is coldest.</p>

                                        <h2 id='Shopping-in-Saudi-Arabia-During-Saudi-Arabia-Visit-Visa'
                                            style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Shopping
                                            in Saudi Arabia During Saudi Arabia Visit Visa</h2>
                                        <p>The trips to any new place are incomplete without shopping as it is
                                            inevitable to come back empty-handed. Saudi Arabia, along with its
                                            historical and religious buildings, nowhere lacks in providing incredible
                                            shopping experience to its visitors.</p> <p> There are numerous remarkable shopping
                                            centers in the country's notable cities like Mecca, Riyadh, Jeddah, and
                                            Dammam. So, be ready to bring back souvenirs from your Saudi Arabia Visit
                                            Visa. Here is the list of famous shopping malls you can visit full day
                                            without getting tired.</p>
                                        <img className="w-100" style={{height: '410px'}} src={myImage7} alt=""
                                             crossOrigin="anonymous"/><b/><b/><p></p>
                                        <ul style={{listStyle: 'disc', marginLeft: '1rem'}}><b/><b/>
                                            <li> Al-Nakheel Mall, Riyadh- An amazing blend of Modernism and
                                                Culturalism
                                            </li>
                                            <li> Kingdom Center Mall, Riyadh- Splendid Architecture with International
                                                Brands
                                            </li>
                                            <li> Granada Mall- One-Spot Destination for Fashion Enthusiasts
                                            </li>
                                            <li> Mall of Arabia, Jeddah- Biggest Shopping Mall</li>
                                            <li> Red Sea Mall- Grand Shopping Mall with diverse options</li>
                                            <li> Kingdom Center Tower- A point of Entertainment</li>
                                            <li> Le Prestige Mall, Jeddah- Perfect for Luxury Shopping</li>
                                            <li> Makkah Mall- A Finest Shopping Mall</li>
                                            <li> Centria Mall- A Perfect Spot for Variety and Diversity</li>
                                            <li>Al- Noor Mall- Modern and Westernized Shopping Mall</li>

                                        </ul>


                                        <h3 id='FAQs-of-Saudi-Arabia-Visit-Visa'
                                            style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>FAQs of
                                            Saudi Arabia Visit Visa</h3>

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
                                                                        Q: How long does it take to get a Saudi Arabia
                                                                        Visit Visa?
                                                                    </button>
                                                                </h5>
                                                            </div>

                                                            <div id="collapseOne" className="collapse show"
                                                                 aria-labelledby="headingOne" data-parent="#faqExample">
                                                                <div className="card-body">
                                                                    <b></b> Saudi Arabia Visit Visa can be obtained in
                                                                    3-4 business days, if applied through the consulate,
                                                                    but an e-Visa process is fast and can issue you visa
                                                                    in 5-30 minutes.
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
                                                                        Q: Can my Saudi Arabia Visa be rejected?
                                                                    </button>
                                                                </h5>
                                                            </div>
                                                            <div id="collapseTwo" className="collapse"
                                                                 aria-labelledby="headingTwo" data-parent="#faqExample">
                                                                <div className="card-body">
                                                                    Yes, it can be rejected based on certain grounds, of
                                                                    which you will be notified via email, about the
                                                                    reason for rejection and last date of submission of
                                                                    an appeal.
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
                                                                        Q: Can I get my visa fee back in case my visa
                                                                        gets rejected?
                                                                    </button>
                                                                </h5>
                                                            </div>
                                                            <div id="collapseThree" className="collapse"
                                                                 aria-labelledby="headingThree"
                                                                 data-parent="#faqExample">
                                                                <div className="card-body">
                                                                    No, visa fee is non-refundable in any case.
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card">
                                                            <div className="card-header p-2" id="heading4">
                                                                <h5 className="mb-0">
                                                                    <button className="btn btn-link collapsed"
                                                                            type="button" data-toggle="collapse"
                                                                            data-target="#collapse4"
                                                                            aria-expanded="false"
                                                                            aria-controls="collapse4">
                                                                        Q: Can I get a multiple-entry tourist visa to
                                                                        Saudi Arabia?
                                                                    </button>
                                                                </h5>
                                                            </div>
                                                            <div id="collapse4" className="collapse"
                                                                 aria-labelledby="heading4"
                                                                 data-parent="#faqExample">
                                                                <div className="card-body">
                                                                    Yes, it is possible to submit an application for a
                                                                    multiple-entry tourist visa, which will be evaluated
                                                                    further based on the frequency and reason of your
                                                                    travel. You might be called for an interview at the
                                                                    later stage of visa processing.
                                                                </div>
                                                            </div>
                                                        </div>


                                                        <div className="card">
                                                            <div className="card-header p-2" id="heading5">
                                                                <h5 className="mb-0">
                                                                    <button className="btn btn-link collapsed"
                                                                            type="button" data-toggle="collapse"
                                                                            data-target="#collapse5"
                                                                            aria-expanded="false"
                                                                            aria-controls="collapse5">
                                                                        Q: Which is the biggest shopping mall in Saudi
                                                                        Arabia?
                                                                    </button>
                                                                </h5>
                                                            </div>
                                                            <div id="collapse5" className="collapse"
                                                                 aria-labelledby="heading5"
                                                                 data-parent="#faqExample">
                                                                <div className="card-body">
                                                                    Mall of Arabia in Jeddah is the biggest shopping
                                                                    mall in Saudi Arabia.
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card">
                                                            <div className="card-header p-2" id="heading6">
                                                                <h5 className="mb-0">
                                                                    <button className="btn btn-link collapsed"
                                                                            type="button" data-toggle="collapse"
                                                                            data-target="#collapse6"
                                                                            aria-expanded="false"
                                                                            aria-controls="collapse6">
                                                                        Q: How far is the ‘Mall of Arabia’ from the
                                                                        airport?
                                                                    </button>
                                                                </h5>
                                                            </div>
                                                            <div id="collapse6" className="collapse"
                                                                 aria-labelledby="heading6"
                                                                 data-parent="#faqExample">
                                                                <div className="card-body">
                                                                    Mall of Arabia is 9.3 km away from King Abdulaziz
                                                                    International Airport.
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

export default VisaSearchResultSaudiArabia;