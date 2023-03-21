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
import myImage1 from '../../../src/Components/Visa/VisaImages/bahrain-visa-from-pakistan (2).jpg';
import myImage2 from "../../../src/Components/Visa/VisaImages/Bahrain-Visa-Fee -and-Requirement.jpg";
import myImage3 from "../../../src/Components/Visa/VisaImages/bahrain-visit-visa.jpg";
import myImage4 from "../../../src/Components/Visa/VisaImages/bahrain-visa.jpg";
import myImage5 from "../../../src/Components/Visa/VisaImages/bahrain-tourist-visa.jpg";
import Content from "./Content";


const VisaSearchResultBahrain = () => {

    const headings = [
        {title: 'Bahrain Visa', id: 'Bahrain-Visa'},
        {title: 'Bahrain Visa Policy', id: 'Bahrain-Visa-Policy'},

        // {title: 'Bahrain Visit Visa Requirements', id: 'Bahrain-Visit-Visa-Requirements'},
        {title: 'Bahrain Visa For Pakistan Terms & Condition', id: 'Bahrain-Visa-For-Pakistan-Terms-&-Condition'},

        {title: 'Bahrain Visit Visa Price In Pakistan', id: 'Bahrain-Visit-Visa-Price-In-Pakistan'},
        {title: 'Bahrain e visa', id: 'Bahrain-e-visa'},

        {title: 'Bahrain Visa For Pakistan Types', id: 'Bahrain-Visa-For-Pakistan-Types'},
        {title: 'Ways to Apply for Bahrain Visa', id: 'Ways-to-Apply-for-Bahrain-Visa'},

        {title: 'Travel Tips for Bahrain', id: 'Travel-Tips-for-Bahrain'},
        // {title: 'Best Time to Bahrain Visit Visa', id: 'Best-Time-to-Bahrain-Visit-Visa'},

        {title: 'Shopping in Bahrain During Bahrain visa', id: 'Shopping-in-Bahrain-During-Bahrain-visa'},
        {title: 'FAQs of Bahrain Visa', id: 'FAQs-of-Bahrain-Visa'},


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
                                        <h1
                                            id='Bahrain-Visa' style={{color: '#155088', fontSize: '20px'}}>Bahrain
                                            Visa</h1>
                                        <p>Bahrain, a cluster of 33 islands in the Persian Gulf, is a country of rich
                                            cultural heritage, fascinating architecture, and diverse natural beauty.</p>
                                        <p>
                                            Proudly ranking among the top 50 countries for the human development index,
                                            the country strongly and earnestly promotes travel and tourism. The Kingdom
                                            of Bahrain perfectly displays the Middle Eastern culture blended with
                                            ancient Dilmun civilization.
                                        </p>
                                        <p> Tourism in Bahrain serves a major role in promoting sustainable
                                            economic growth by selling <h7
                                                style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>Bahrain
                                                visa </h7> therefore,
                                            it is also becoming a rising star of Arabian Gulf. The country is home to
                                            two UNESCO World Heritage Sites and is currently surpassing Dubai in
                                            providing a less hectic and feasible tourism to all the people out there.
                                        </p>
                                        <p>Explore the country for its architectural wonders paired with warm
                                            hospitality, centuries-old heritage, traditional buildings, and stunning
                                            nature. The Bahraini government also provides a range of possibilities to
                                            entrepreneurs to be a part of their tourism business. Many Pakistani people
                                            live and have established business there, so getting a <h7
                                                style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>Bahrain
                                                visa</h7> on a
                                            Pakistani passport is easy and reliable.
                                        </p>
                                        <b/>


                                        <h2 id='Bahrain-Visa-Policy'
                                            style={{color: '#155088', fontSize: '20px'}}>Bahrain Visa Policy</h2>

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
                                                <td>Bahrain Visit Visa</td>
                                                <td>
                                                    <div className="pb-1">30 Working Days</div>
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
                                                <td>Bahrain One-Year Visa</td>
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
                                            <p>It is suggested to apply for a Bahrain Visit Visa 03 months
                                                before the date of departure and all the documents must be
                                                prepared two weeks before.</p>

                                            </tbody>
                                        </table>


                                        <p>To acquire a <h7
                                            style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>Bahrain visa
                                            from
                                            Pakistan</h7> , you will need to prepare following documents:

                                        </p>
                                        <ul style={{listStyle: 'disc', marginLeft: '1rem'}}>
                                            <li>Original Passport with a validity of 06 months</li>
                                            <li> A fully-filled application form</li>
                                            <li>Copy of Applicant’s CNIC</li>
                                            <li>Proof of Airline reservation</li>
                                            <li> 04 Passport size pictures</li>
                                            <li> Proof of financial stability</li>
                                            <li> Bank Statement form last six months</li>
                                            <li> Police Character Certificate</li>
                                            <li> A Visa Request Letter to Bahrain Embassy</li>
                                            <li>Return Air Ticket</li>
                                            <li> Hotel Reservation</li>

                                        </ul>
                                        <p>All these documents must be submitted to the Embassy to get a <h7
                                            style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>Bahrain Visit
                                            visa </h7>.
                                        </p>

                                        <h2 id='Bahrain-Visa-For-Pakistan-Terms-&-Condition'
                                            style={{color: '#155088', fontSize: '20px'}}>Bahrain Visa For Pakistan Terms
                                            & Condition</h2>
                                        <p>Following are the terms & conditions of
                                            <h7 style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>Bahrain
                                                visa for
                                                Pakistan:</h7>
                                            are as follows::
                                        </p>

                                        <ul style={{listStyle: 'disc', marginLeft: '1rem'}}>
                                            <li>Be sure to be outside the Kingdom before applying for a Bahrain visa.
                                            </li>
                                            <li>A valid return air ticket along with the passport with a validity of 06
                                                months is necessary.
                                            </li>
                                            <li>Applicant’s entry should not violate the country’s rules and
                                                regulations.
                                            </li>
                                            <li>The visit visa must be used within 30 days of its issuance before it
                                                expires.
                                            </li>
                                            <li>Visa on visa issuance is not possible with a single passport. The first
                                                visa should be expired or used before to apply for a new one.
                                            </li>
                                        </ul>


                                        <h2 id='Bahrain-Visit-Visa-Price-In-Pakistan'
                                            style={{color: '#155088', fontSize: '20px'}}>Bahrain Visit Visa Price In
                                            Pakistan</h2>
                                        <p>GCC residents and their companions need an online visa to enter the United
                                            Arab Emirates known as eVisa. The validity of this visa is 30 days during
                                            which people can roam freely in the country and then if needed can apply for
                                            an extension too. The visa extension in this regard is for 30 days.</p>
                                        <ul style={{listStyle: 'disc', marginLeft: '1rem'}}>
                                            <li>Visit Visa with documents: PKR</li>
                                            <li>Visit Visa without documents: PKR</li>
                                        </ul>
                                        <h2 id='Bahrain-e-visa'
                                            style={{color: '#155088', fontSize: '20px'}}>Bahrain e visa</h2><b/>

                                        <p>Bahrain e visa refers to a visa that does'nt have a visible stamp or lable.
                                            Its an electronic visa you can apply online, the validity of the visa will
                                            be recognized at the border when you reach Bahrain.
                                        </p>

                                        <h3 id='Bahrain-Visa-For-Pakistan-Types'
                                            style={{color: '#155088', fontSize: '20px'}}>Bahrain Visa For Pakistan
                                            Types</h3>
                                        <p><p></p></p>
                                        <img className="w-100" style={{height: '410px'}} src={myImage2} alt=""
                                             crossOrigin="anonymous"/>
                                        <p><p></p></p>
                                        <p>There are six types of Bahrain Visa For Pakistan Types depending on the
                                            purpose of your visit:
                                        </p>
                                        <h3
                                            style={{color: '#155088', fontSize: '20px'}}>Bahrain Tourist Visa</h3>

                                        <p>Tourist visa is issued to those foreign people who wish to enter the State
                                            for leisure or tourism-related purposes. A person cannot work or study on
                                            this visa.
                                        </p>
                                        <h3 style={{color: '#155088', fontSize: '20px'}}>Bahrain Visit Visa</h3>
                                        <p>People who enter the country on sponsorship of any Bahraini nationality need
                                            a visitor visa with a validity of one month.
                                        </p>
                                        <h3 style={{color: '#155088', fontSize: '20px'}}>Bahrain Business Visa</h3>
                                        <p>Business visas are issued to those short-term travelers who enter the country
                                            for meetings, conferences, and other business-related tasks. The validity of
                                            this type of visa is up to four months.</p>

                                        <h3 style={{color: '#155088', fontSize: '20px'}}>Bahrain Work Visa</h3>
                                        <p>This type of visa is issued to people taking employment in Bahrain and wish
                                            to stay there for a long time. The validity of this type of visa is one or
                                            two years.</p>
                                        <h3 style={{color: '#155088', fontSize: '20px'}}>Bahrain Family Visa</h3>
                                        <p>Family visa is a residence permit issued to the families of people employed
                                            there in any Bahraini company for long-term.</p>
                                        <h3 style={{color: '#155088', fontSize: '20px'}}>Bahrain Student Visa</h3>
                                        <p>Students enrolled in any Bahraini university for at least one year would need
                                            this type of visa to be able to study there.</p>

                                        <h2 id='Ways-to-Apply-for-Bahrain-Visa'
                                            style={{color: '#155088', fontSize: '20px'}}>Ways to Apply for Bahrain
                                            Visa</h2>
                                        <ul style={{listStyle: 'disc', marginLeft: '1rem'}}>
                                            <li>Visa on arrival by arriving at the airport</li>
                                            <li>Online through eVisa Portal</li>
                                            <li> In case you are not eligible for both eVisa or visa on arrival, get the
                                                visa from Bahrain Embassy
                                            </li>

                                        </ul>
                                        <h3 id='Travel-Tips-for-Bahrain'
                                            style={{color: '#155088', fontSize: '20px'}}>Travel Tips for Bahrain</h3>


                                        <p>Bahrain is a hidden gem in the heart of the Middle East, boasting the
                                            heritage of ancient civilizations, unique experiences, and cultural
                                            heritage. </p> <p>This tiny island serves as a cultural hub with its unique
                                        ancient
                                        cities, bustling markets, and incredible highlights. Getting Bahrain Vist
                                        visa serves as a relaxing holiday escape for natives of Saudi Arabia since
                                        it is a neighborhood country.
                                    </p>
                                        <p><p></p></p>
                                        <img className="w-100" style={{height: '410px'}} src={myImage3} alt=""
                                             crossOrigin="anonymous"/>
                                        <p><p></p></p>

                                        <p>
                                            <h7 style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>1. Apply
                                                for the right type of visa-
                                            </h7>
                                            <b/>
                                            Bahrain offers different types of visas depending on the passport you hold
                                            or the purpose of your visit. After applying for a visa, make sure to ensure
                                            the validity of your passport and complete the documentation before going.

                                        </p>
                                        <p>
                                            <h7 style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>2. Pack
                                                lightweight summer dresses-
                                            </h7>
                                            <b/>
                                            Bahrain is a desert country so the weather here is mostly dry and hot.
                                            Summers dominate the country climate so try to pack light clothes to avoid
                                            sweating and getting excessively warm. The coastal areas do have underground
                                            springs to escape from the scorching heat of the main city.

                                        </p>
                                        <p>
                                            <h7 style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>3. Review
                                                Hotels before booking-
                                            </h7>
                                            <b/>
                                            Bahrain is an expensive country so prior moving from your hometown, read
                                            about the hotels and book the one that fits your financial budget. A
                                            complete background check will help you get all the desired information.
                                        </p>
                                        <p>
                                            Some hotels serve alcohol along with late night parties and music that might
                                            be disturbing to Muslim families. Since Bahrain gets the majority of
                                            visitors from Saudi Arabia, therefore, they have separate arrangements for
                                            them too.

                                        </p>
                                        <p>
                                            <h7 style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>4. Carry
                                                your Identity documents with you-
                                            </h7>
                                            <b/>
                                            To avoid illegal people roaming in the country, local authorities run
                                            several surprise checkups, stopping people in the middle and asking for
                                            their identities.
                                        </p>
                                        <p> The random inspections for the smooth running of the
                                            country are necessary so always try to keep your passport and other legal
                                            documents in your possession.
                                        </p>
                                        <p>
                                            <h7 style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>5. Keep
                                                an ample amount of money with you-
                                            </h7>
                                            <b/>
                                            Bahrain is an expensive country and the exchange rate is comparatively high
                                            there. Therefore, it is advised to have some amount in cash and carry
                                            debit/credit cards everywhere with you.
                                        </p>
                                        <p>Tips are common there so you need to
                                            pay a fixed amount of money to waiters, restaurants, taxi drivers, or anyone
                                            who gives you their services.
                                        </p>
                                        <p><p></p></p>
                                        <img className="w-100" style={{height: '410px'}} src={myImage4} alt=""
                                        />
                                        <p><p></p></p>
                                        <p><b/>Bahrain is a desert country surrounded by coastal regions at some places.
                                            The overall climate of the country is hot, dry, and humid. The rains are
                                            expected less, hardly changing the climate over the year. The average annual
                                            temperature is 29℃ with 57% average humidity.
                                        </p> <p> In Bahrain, the seasons are divided into two categories: Summers and
                                        winter. The long days in summers are long, scorching, and heated while the
                                        days of winters are short, cold, and humid. Sightseeing is enjoyed best when
                                        the sun is not oppressive nor the winds are freezing much. The country lies
                                        on the Northern Hemisphere so the variations in average climate and rainfall
                                        are expected.
                                    </p> <p> The average time to visit the Kingdom of Bahrain is December to March
                                        since the country faces mild occasional showers and cool breeze. The
                                        temperature ranges from 74℉ to an average low of 59℉ making it a perfect
                                        time for tourists. The overall climate is divided into three main categories
                                        depending on the influx of tourists yearly.

                                    </p>
                                        <h3 id='Shopping-in-Bahrain-During-Bahrain-visa'
                                            style={{color: '#155088', fontSize: '20px'}}>Shopping in Bahrain During
                                            Bahrain visa</h3>
                                        <p><p></p></p>
                                        <img className="w-100" style={{height: '410px'}} src={myImage5} alt=""
                                        />
                                        <p><p></p></p>
                                        <p>
                                            <h7 style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}> 2) What
                                                to Pack?
                                            </h7>
                                            <b/>
                                            Aside from the scenic landscapes, fascinating architecture, incredible
                                            cuisines, luxurious hotels, historical museums, and sporting excursions, the
                                            Kingdom of Bahrain is becoming the best shopping destination for visitors.
                                            From local markets to branding malls, souq carpets to exotic spices, and
                                            from electronics to kitchen wares, Bahrain covers it all.
                                        </p>
                                        <p> The shopping malls in the country not only fulfills every traveler's
                                            demands but also provides a complete entertainment package to refresh your
                                            mind and mood. The tourists from all around the globe are welcome to get
                                            Bahrainvisit visa to fill their bags with souvenirs and dresses and plan a
                                            relaxing outing with scenic views.

                                        </p>
                                        {/*<img className="w-100" style={{height: '410px'}} src={myImage5} alt=""*/}
                                        {/*     crossOrigin="anonymous"/>*/}
                                        <ul style={{listStyle: 'disc', marginLeft: '1rem'}}>
                                            <li> The Avenues- A Mall with stunning environment</li>
                                            <li> Moda Mall- Bahrain World Trade Center</li>
                                            <li> Manama Souq- A beautiful collection of shops</li>
                                            <li> Seef Mall- Home to largest indoor amusement park</li>
                                            <li> Gold City- A Home of gold jewelry and products</li>
                                            <li>Dragon City Bahrain- A Mall of inexpensive things</li>
                                            <li> Enma Mall- A quiet, small mall in Riffa</li>
                                            <li>The Bahrain Mall- One-stop shopping area for families</li>
                                            <li> Busaad Art Gallery</li>
                                        </ul>


                                        <h3 id='FAQs-of-Bahrain-Visa' style={{color: '#155088', fontSize: '20px'}}>FAQs
                                            of Bahrain Visa</h3>
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
                                                                        Q: What is the validity of the Bahrain visa?
                                                                    </button>
                                                                </h5>
                                                            </div>

                                                            <div id="collapseOne" className="collapse show"
                                                                 aria-labelledby="headingOne" data-parent="#faqExample">
                                                                <div className="card-body">
                                                                    <b></b> The validity of a Bahrain visit visa is one
                                                                    month, however, an extension can be obtained for
                                                                    another two weeks through NPRA (Nationality,
                                                                    Passports, and Residence Affairs
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
                                                                        Q: How many days are required for Bahrain visa
                                                                        processing?
                                                                    </button>
                                                                </h5>
                                                            </div>
                                                            <div id="collapseTwo" className="collapse"
                                                                 aria-labelledby="headingTwo" data-parent="#faqExample">
                                                                <div className="card-body">
                                                                    Bahrain visit visa can be processed in 3-5 business
                                                                    days.
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
                                                                        Q: Is the visa fee refunded in case my
                                                                        application is rejected?
                                                                    </button>
                                                                </h5>
                                                            </div>
                                                            <div id="collapseThree" className="collapse"
                                                                 aria-labelledby="headingThree"
                                                                 data-parent="#faqExample">
                                                                <div className="card-body">
                                                                    No, the visa processing fee is not refunded despite
                                                                    the rejection of an application.
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
                                                                        Q: Is the Bahrain visa open for Pakistan?
                                                                    </button>
                                                                </h5>
                                                            </div>
                                                            <div id="collapsefour" className="collapse"
                                                                 aria-labelledby="headingfour"
                                                                 data-parent="#faqExample">
                                                                <div className="card-body">
                                                                    Yes, Pakistanis are allowed a Bahrain visa and as
                                                                    the country is in the list of eligible countries,
                                                                    the residents can simply go for e-Visas.
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
                                                                        Q: Can a Bahrain visit visa be converted to a
                                                                        work visa?
                                                                    </button>
                                                                </h5>
                                                            </div>
                                                            <div id="collapsefive" className="collapse"
                                                                 aria-labelledby="headingfive"
                                                                 data-parent="#faqExample">
                                                                <div className="card-body">
                                                                    Yes, in Bahrain it is possible to convert your visit
                                                                    visa to a work visa provided that the company you
                                                                    are going to work for applies for you within the
                                                                    validity time period of your visit visa.
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
                                                                        Q: When do I need a transit visa in Bahrain?
                                                                    </button>
                                                                </h5>
                                                            </div>
                                                            <div id="collapsesix" className="collapse"
                                                                 aria-labelledby="headingsix"
                                                                 data-parent="#faqExample">
                                                                <div className="card-body">
                                                                    If your stay in Bahrain Airport is to exceed 08
                                                                    hours, then you need to apply for a transit visa
                                                                    provided that you are not leaving the airport.
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

export default VisaSearchResultBahrain;