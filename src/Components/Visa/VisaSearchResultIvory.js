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
// import myImage1 from '../../../src/Components/Visa/VisaImages/ivory-Coast-e-Visa.jpg';
import myImage1 from "../../../src/Components/Visa/VisaImages/ivory1-Coast-e-Visa.jpg";
import myImage2 from "../../../src/Components/Visa/VisaImages/Ivory-coast-visa.jpg";
import myImage3 from "../../../src/Components/Visa/VisaImages/Ivory-coast-tourist-visa.jpg";
import myImage4 from "../../../src/Components/Visa/VisaImages/Visa-policy-of-Ivory-Coast.jpg";
import myImage5 from "../../../src/Components/Visa/VisaImages/ivory-coast-visit-and-tourist-visa.jpg";
// import myImage6 from "../../../src/Components/Visa/VisaImages/Visa-to-Singapore - Visit Singapore.jpg";
import Content from "./Content";


const VisaSearchResultIvory = () => {

    const headings = [
        {title: 'Ivory Coast eVisa', id: 'Ivory-Coast-eVisa'},
        {title: 'Ivory Coast Visa Policy', id: 'Ivory-Coast-Visa-Policy'},

        {title: 'Ivory Coast eVisa Requirements For Pakistani Citizens', id: 'Ivory-Coast-eVisa-Requirements-For-Pakistani-Citizens'},
        {title: 'Ivory Coast e Visa Terms & Condition', id: 'Ivory-Coast-e-Visa-Terms-&-Condition'},

        {title: 'Ivory Coast eVisa cost', id: 'Ivory-Coast-eVisa-cost'},
        {title: 'Ivory Coast e Visa', id: 'Ivory-Coast-e-Visa'},

        {title: 'Types of Ivory Visa', id: 'Types-of-Ivory-Visa'},
        {title: 'Travel Tips for Ivory Coast', id: 'Travel-Tips-for-Ivory-Coast'},

        // {title: 'Best Time to Visit Ivory Coast', id: 'Best-Time-to-Visit-Ivory-Coast'},
        {title: 'Shopping in Ivory Coast During Ivory Coast eVisa', id: 'Shopping-in-Ivory-Coast-During-Ivory-Coast-eVisa'},

        {title: 'FAQs of Ivory Coast eVisa', id: 'FAQs-of-Ivory-Coast-eVisa'},


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
                                    {/*<h1 style={{textTransform: "none"}}>Ivory</h1>*/}
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
                                        <h1 id='Ivory-Coast-eVisa'
                                            style={{color: '#155088', fontSize: '20px'}}>Ivory Coast eVisa</h1>
                                        <p>Ivory Coast, a country located on the south coast of the African continent,
                                            is a land of cultural richness, different dialects, striving history, and
                                            various cuisines. </p> <p>Though the country has revived from the economic crisis
                                            and is showing great development in recent years, it is still not in the
                                            bucket list of travelers and adventurers. Its dreamy exceptional landscapes,
                                            cultural mosaic, sports, tourism, and serene atmosphere is what makes this
                                            country on the list of tourist-friendly spots. The issuance of <h7
                                                style={{color: 'black', fontSize: '20px'}}>Ivory Coast eVisa</h7> is a
                                            lucrative step for adventurers.</p> <p>Ivory Coast is the leading producer of cocoa, the only commodity to be
                                            sold worldwide for its raw quality and quantity. Its diverse ecosystem,
                                            parks with intelligent chimpanzees, a known UNESCO World Heritage Site,
                                            lianas bridges, and lush tropical beaches mark this country a dream of a
                                            person who is looking for a stress-free escape.
                                        </p>
                                        <b/>


                                        <h2 id='Ivory-Coast-Visa-Policy'
                                            style={{color: '#155088', fontSize: '20px'}}>Ivory Coast Visa Policy</h2>

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
                                                <td>Ivory Coast E-Visa</td>
                                                <td>
                                                    <div className="pb-1">2-3 Working Days</div>
                                                    {/*<div className="pb-1">Non-Immigrant Visa Multiple Entry</div>*/}
                                                </td>

                                            </tr>
                                            <tr className="border-data">
                                                <td>Ivory Coast Tourist Visa</td>
                                                <td>
                                                    <div className="pb-1">4-5 Working Days</div>
                                                    {/*<div className="pb-1">Tourist Visa Multiple Entry</div>*/}
                                                </td>
                                                <td>
                                                    {/*<div className="">PKR 3,699</div>*/}
                                                    {/*<div className="">1 years / 3 years</div>*/}
                                                </td>
                                            </tr>
                                            <tr className="border-data">
                                                <td>Ivory Coast Visit Visa</td>
                                                <td>
                                                    <div className="pb-1">3-4 Working Days</div>
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


                                        <h2 id='Ivory-Coast-eVisa-Requirements-For-Pakistani-Citizens'
                                            style={{color: '#155088', fontSize: '20px'}}>Ivory Coast eVisa Requirements
                                            For Pakistani Citizens</h2>
                                        <p>The citizens of Pakistan are allowed to apply for an E-visa to gain an entry
                                            in the country. Following documents are required before starting an
                                            application for <h7 style={{color: 'black', fontSize: '20px'}}>Ivory Coast
                                                eVisa</h7>

                                        </p>
                                        <ul style={{listStyle: 'disc', marginLeft: '1rem'}}>
                                            <li> Digital copy of your passport</li>
                                            <li> Passport size photographs</li>
                                            <li> Proof of accommodation i.e., hotel reservation</li>
                                            <li> Copy of Bank Statement</li>
                                            <li> Copy of return air ticket</li>
                                            <li> An email address to receive documents</li>
                                            <li> An email address to receive documents</li>

                                        </ul>
                                        <p>After filling the application form, attach the above mentioned documents with
                                            the receipt of payment and submit it to get an electronic visa.</p>

                                        <h2 id='Ivory-Coast-e-Visa-Terms-&-Condition'
                                            style={{color: '#155088', fontSize: '20px'}}>Ivory Coast e Visa Terms &
                                            Condition</h2>
                                        <p>The terms and conditions for
                                            <h7 style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}> Ivory
                                                Coast e Visa</h7>
                                            are follows:
                                        </p>


                                        <ul style={{listStyle: 'disc', marginLeft: '1rem'}}>
                                            <li>The Ivory Coast e-Visa is issued for 90 days from the date of arrival
                                                since it is a multiple- entry visa.
                                            </li>
                                            <li>The passport should have the validity of six months before your
                                                departure.
                                            </li>
                                            <li>Applicants should have a valid return air ticket.</li>
                                            <li>The Embassy has the right to change its legal policies and ask for
                                                additional documents if required.
                                            </li>
                                            <li>Tripplannear pk is not responsible for visa rejection so the visa is not
                                                refundable in any case.
                                            </li>
                                        </ul>


                                        <h2 id='Ivory-Coast-eVisa-cost'
                                            style={{color: '#155088', fontSize: '20px'}}>Ivory Coast eVisa cost</h2>
                                        <p>It is always great to explore new countries and places to calm your mind and
                                            body. Ivory Coast is one of those countries on the world map that needs to
                                            be highlighted for its natural and modern surroundings to promote tourism.</p> <p>
                                            If you want to visit this not so famous country, contact Tripplannerpk to
                                            arrange an Ivory Coast eVisa with discounts for both individual and family
                                            groups.</p>
                                        <ul style={{listStyle: 'disc', marginLeft: '1rem'}}>
                                            <li>Visit Visa with documents: PKR</li>
                                            <li>Visit Visa without documents: PKR</li>
                                        </ul>
                                        <h2 id='Ivory-Coast-e-Visa'
                                            style={{color: '#155088', fontSize: '20px'}}>Ivory Coast e Visa</h2><b/>

                                        <p>
                                            <h7 style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}> Ivory
                                                Coast e Visa
                                            </h7>
                                            is a type of electronic document issued to the residents of approved 120
                                            countries who wish to enter the country for tourism, business, study, or
                                            other purposes.
                                        </p>


                                        <h3 id='Types-of-Ivory-Visa'
                                            sstyle={{color: '#155088', fontSize: '20px'}}>Types of Ivory Visa </h3>
                                        <p></p>


                                        <img className="w-100" style={{height: '410px'}} src={myImage2} alt=""
                                             crossOrigin="anonymous"/><p></p>
                                        <p>Ivory Coast issues following types of visa for Pakistani citizens:</p>
                                        <h3 style={{color: '#155088', fontSize: '20px'}}>Tourist Visa</h3>
                                        <p> People who wish to gain an entry into Ivory Coast need a tourist visa to
                                            explore and experience different cultures freely there. It can be issued for
                                            90 days as single-entry and multiple entry visas.</p>
                                        <h3 style={{color: '#155088', fontSize: '20px'}}>Visitor Visa</h3>
                                        <p>Individuals who wish to visit any family member in Ivory Coast or just want
                                            to go there for some short-term work needs this type of visa.</p>

                                        <h3 style={{color: '#155088', fontSize: '20px'}}>Business Visa</h3>
                                        <p>Entrepreneurs wishing to establish business in the country need this type of
                                            visa to officially start working there.</p>
                                        <h3 id='Travel-Tips-for-Ivory-Coast'
                                            style={{color: '#155088', fontSize: '20px'}}>Travel Tips for Ivory
                                            Coast</h3>
                                        <p>Ivory Coast with its unspoiled beauty is definitely a piece of heaven on
                                            Earth. A hidden beauty waiting yet to be explored and admired. The lush
                                            green tropical forests, white sand beaches, and calming weather is what
                                            people opt when deciding to go for a holiday.</p> <p> Ivory Coast with its
                                            commercial city, Abidjan, serves its tourists in most enchanting ways.
                                            However, you need to be considerate about weather, people, visa, and some
                                            other casualties to enjoy your trip to the fullest. Following travel tips
                                            will be handy in your planning so do give them a read before departing on
                                            your <h7 style={{color: 'black', fontSize: '20px'}}> Ivory Coast e Visa</h7>
                                        </p>


                                        {/*<h3 style={{textTransform: "none"}}>Travel Tips for Kenya Visit Visa </h3>*/}
                                        <p></p>
                                        <img className="w-100" style={{height: '410px'}} src={myImage3} alt=""
                                             crossOrigin="anonymous"/>
                                        <p></p>

                                        <p>
                                            <h style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>1.
                                                Passport and Visa Requirements-
                                            </h>
                                            You need a valid passport and visa to enter the country. Visa on arrival is
                                            not acceptable except for some nationalities like Brazil and Africa. Apply
                                            for the visa beforehand on the official website or get through the Embassy
                                            close to your region.
                                        </p>
                                        <p>
                                            <h style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>2. Carry
                                                your Medical Kit-
                                            </h>
                                            Before traveling to Ivory Coast, make sure to carry your medical kit with
                                            all the medicines for small emergencies and allergies. You may not be able
                                            to find relevant medicines there, therefore, be double sure when it comes to
                                            your health.
                                        </p>
                                        <p>
                                            <h style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>3. Avoid
                                                Traveling Alone-
                                            </h>
                                            Ivory Coast is a very safe country but when it comes to individual trips, it
                                            might not be friendly. The African countries are always advised to visit in
                                            groups to avoid any kind of mishap. Moreover, the country faces less
                                            tourists that are majorly in groups, so organized trips are more preferable.
                                        </p>
                                        <p>
                                            <h style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>4. Carry
                                                Cash and Credit Cards both-
                                            </h>
                                            The commercial city, Abidjan, widely accepted credit cards and ATMs but you
                                            will need to pay cash in some local markets and to taxi drivers. Therefore,
                                            it is advisable to carry both.
                                        </p>
                                        <p>
                                            <h style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>5. Getting
                                                Around-
                                            </h>
                                            Moving in Ivory Coast is very easy as the country has a refined network of
                                            mini buses traveling throughout the country. They are scheduled to move
                                            after every one hour after they get filled. You can also use private cars or
                                            taxis to move around.
                                        </p>
                                        <p></p>
                                        <img className="w-100" style={{height: '410px'}} src={myImage4} alt=""
                                             crossOrigin="anonymous"/>
                                        <p></p>
                                        <p>
                                            The best time to visit Ivory Coast depends on the part you wish to explore.
                                            Since the country is divided into two main parts: Southern and Northern, it
                                            faces different climates at the same time of the year.</p> <p> The Southern part is
                                            more humid all-round the year, while the northern part being close to the
                                            Sahara desert experiences a dry and Savanna type of environment. The best
                                            time to visit the country is during months to easily enjoy your beach days.

                                        </p>

                                        <h3 id='Shopping-in-Ivory-Coast-During-Ivory-Coast-eVisa'
                                            style={{color: '#155088', fontSize: '20px'}}>Shopping in Ivory Coast During
                                            Ivory Coast eVisa</h3>
                                        {/*<p>The East-African country, Kenya, is uniquely famous not just for its wildlife but also for shopping experience. It is the best place for those who wish to carry the memories of the country in the form of cute souvenirs and inscriptions. The creativity of the artists is easily visible in its products that are sold in ample amounts to tourists and ultimately serves to serve the country’s economy.</p>*/}
                                        <p></p>
                                        <img className="w-100" style={{height: '410px'}} src={myImage5} alt=""
                                             crossOrigin="anonymous"/>
                                        <p></p>
                                        <p>Ivory Coast is not just famous for its beauty, nature, and splendid scenery
                                            but also for its exquisite handicrafts being prepared in local markets
                                            outside the city’s main commercial area.</p> <p> Abidjan is famous all around the
                                            world to sell some quality designs and wooden cravings at prices you can
                                            haggle. Therefore, you can carry an empty bag to let it fill with
                                            masterpieces you can brag about later on your return from</p>

                                        <p>To give you a general idea, here is the list of some shopping malls where you
                                            can find souvenirs and gifts of your choice.</p>
                                        <ul style={{listStyle: 'disc', marginLeft: '1rem'}}>
                                            <li> Abidjan Mall- One Spot Destination</li>
                                            <li>Crotos- Famous for Crafts</li>
                                            <li>Karen L- Home Décor Spot</li>
                                            <li>Village des Artisans- Flea and Shopping Markets</li>
                                            <li>Cap Sud- In-store Shopping Mall</li>
                                            <li> CAVA- Famous for Gifts Shop</li>
                                            <li> Sococe Mall- In-store Shopping Mall</li>
                                            <li>PlaYce-Marcory- Famous Food Court</li>
                                            <li>Galerie Somiandesign- Art Galleries</li>
                                            <li> Nice Cream- Excellent Sweet Corner</li>

                                        </ul>


                                        <h3 id='FAQs-of-Ivory-Coast-eVisa'
                                            style={{color: '#155088', fontSize: '20px'}}>FAQs of Ivory Coast eVisa</h3>

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
                                                                        Q: How long does an Ivory Coast e Visa take to
                                                                        process?
                                                                    </button>
                                                                </h5>
                                                            </div>

                                                            <div id="collapseOne" className="collapse show"
                                                                 aria-labelledby="headingOne" data-parent="#faqExample">
                                                                <div className="card-body">
                                                                    <b></b> It only takes 07 business days to get an
                                                                    Ivory Coast e Visa.
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
                                                                        Q: Can I get a visa on arrival for Ivory Coast?
                                                                    </button>
                                                                </h5>
                                                            </div>
                                                            <div id="collapseTwo" className="collapse"
                                                                 aria-labelledby="headingTwo" data-parent="#faqExample">
                                                                <div className="card-body">
                                                                    No, you cannot get a visa on arrival for Ivory Coast
                                                                    but you can apply for an electronic visa (e-Visa)
                                                                    with a validity of 90 days.
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
                                                                        Q: How much time does visa approval take in
                                                                        Pakistan?
                                                                    </button>
                                                                </h5>
                                                            </div>
                                                            <div id="collapseThree" className="collapse"
                                                                 aria-labelledby="headingThree"
                                                                 data-parent="#faqExample">
                                                                <div className="card-body">
                                                                    After receiving the application form attached to all
                                                                    the required documents, it takes 15 business days to
                                                                    get a visa from the Embassy, omit the peak season or
                                                                    issue in some documents.
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
                                                                        Q: How can I get a tourist visa to Ivory Coast?
                                                                    </button>
                                                                </h5>
                                                            </div>
                                                            <div id="collapse4" className="collapse"
                                                                 aria-labelledby="heading4"
                                                                 data-parent="#faqExample">
                                                                <div className="card-body">
                                                                    A tourist visa to Ivory Coast can be obtained by
                                                                    filling out the application form and attaching all
                                                                    the required documents with it.
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
                                                                        Q: Why did my tourist visa get rejected?
                                                                    </button>
                                                                </h5>
                                                            </div>
                                                            <div id="collapse5" className="collapse"
                                                                 aria-labelledby="heading5"
                                                                 data-parent="#faqExample">
                                                                <div className="card-body">
                                                                    Tourist visa gets rejected if you have incorporated
                                                                    wrong information with wrong address. Moreover, if
                                                                    anybody has a past history of crimes or fails to
                                                                    provide any valid justification, then the visa gets
                                                                    rejected.
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

export default VisaSearchResultIvory;