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
import myImage1 from '../../../src/Components/Visa/VisaImages/nepal-visit-visa.jpg';
import myImage2 from "../../../src/Components/Visa/VisaImages/Nepal-visit-visa- from-Pakistan.jpg";
import myImage3 from "../../../src/Components/Visa/VisaImages/Nepal-Visa-Requirements.jpg";
import myImage4 from "../../../src/Components/Visa/VisaImages/Nepal-Visa-Information.jpg";
import myImage5 from "../../../src/Components/Visa/VisaImages/Nepal-visa-information -fees.jpg";
import myImage6 from "../../../src/Components/Visa/VisaImages/nepal-tourist-visa requirements-for- pakistani.jpg";
// import myImage6 from "../../../src/Components/Visa/VisaImages/Visa-to-Singapore - nepal-tourist-visa requirements-for- pakistani.jpg";
import Content from "./Content";


const VisaSearchResultNepal = () => {

    const headings = [
        {title: 'Nepal Visa', id: 'Nepal-Visa'},
        {title: 'Nepal Visa Policy', id: 'Nepal-Visa-Policy'},

        {title: 'Pakistan to Nepal Visa Requirements', id: 'Pakistan-to-Nepal-Visa-Requirements'},

        {title: 'Nepal Visa Price', id: 'Nepal-Visa-Price'},
        {title: 'Types of Nepal Visa for Pakistani', id: 'Types-of-Nepal-Visa-for-Pakistani'},

        {
            title: 'Travel Tips for Nepal Visit Visit from Pakistan',
            id: 'Travel-Tips-for-Nepal-Visia-Visit-from-Pakistan'
        },
        {title: 'Best Time to Nepal Visit Visa', id: 'Best-Time-to-Nepal-Visit-Visa'},

        {title: 'Shopping in Nepal During Nepal Visa', id: 'Shopping-in-Nepal-During-Nepal-Visa'},

        {title: 'FAQs of Nepal Visa', id: 'FAQs-of-Nepal-Visa'},
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
                                        <h1 id='Nepal-Visa'
                                            style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Nepal
                                            Visa</h1>
                                        <p>Nepal, an interesting conjunction of Hinduism and Buddhism, is a small
                                            Himalayan country of unique treasures, enormous biodiversity, blending
                                            cultures and traditions, hospitable people, world heritage sites, and famous
                                            tourist attraction sites.</p> <p> The authentic and mesmerizing landscapes
                                        attract
                                        millions of tourists each year who are queuing up earnestly to get a Nepal
                                        visa the only reason for which the tourism sector in the country is soaring
                                        high. Along with delicious cuisines and year-round festivals, the country is
                                        famous for mountaineering, trekking, and rafting.</p> <p> Nepal has been
                                        regarded as the safest country to visit as the people
                                        here treat their guests as Gods and it is widely said that those who enter
                                        the country at first because of scenery and attraction sites return for the
                                        people.</p> <p> The country is home to the tallest Mount Everest and four UNESCO
                                        World Heritage Sites. From soaring mountainous peaks to vast green plains,
                                        ancient landmarks to diverse ethnic communities, and sacred temples to old
                                        medieval Capital, it is successful in issuing thousands of Nepal visa all
                                        around the year.
                                    </p>
                                        <b/>


                                        <h2 id='Nepal-Visa-Policy'
                                            style={{
                                                color: '#155088',
                                                fontSize: '20px',
                                                textTransform: "none"
                                            }}>Nepal Visa Policy</h2>

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
                                                <td>Nepal Visit Vist</td>
                                                <td>
                                                    <div className="pb-1">15 Working Days</div>
                                                    {/*<div className="pb-1">Non-Immigrant Visa Multiple Entry</div>*/}
                                                </td>

                                            </tr>
                                            <tr className="border-data">
                                                <td>Nepal Transit Visa</td>
                                                <td>
                                                    <div className="pb-1">04 Working Days</div>
                                                    {/*<div className="pb-1">Tourist Visa Multiple Entry</div>*/}
                                                </td>
                                                <td>
                                                    {/*<div className="">PKR 3,699</div>*/}
                                                    {/*<div className="">1 years / 3 years</div>*/}
                                                </td>
                                            </tr>
                                            <tr className="border-data">
                                                <td>Nepal Business Visa</td>
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
                                            <tr className="border-data">
                                                <td>Nepal Diplomatic Visa</td>
                                                <td>
                                                    <div className="pb-1">04 Working Days</div>
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
                                                <td>Nepal Official Visa</td>
                                                <td>
                                                    <div className="pb-1">04 Working Days</div>
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


                                        <h2 id='Pakistan-to-Nepal-Visa-Requirements'
                                            style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Pakistan
                                            to Nepal Visa Requirements</h2>
                                        <p>Following documents are required to get a <h7
                                            style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}> Pakistan to
                                            nepal visa:</h7>

                                        </p>
                                        <ul style={{listStyle: 'disc', marginLeft: '1rem'}}>
                                            <li>Original passport with a validity of 06 months</li>
                                            <li>Copy of CNIC</li>
                                            <li>04 Passport size pictures with white background</li>
                                            <li>Bank statement from last six months</li>
                                            <li>Proof of Hotel Reservation</li>
                                            <li>Return air ticket</li>
                                            <li>In case of business visa, invitation letter from company</li>
                                            <li>Cover letter of bank account maintenance</li>
                                            <li>Police Character Certificate</li>
                                            <li>In case of Diplomatic/Official Visa, invitation letter from ministry of
                                                Nepal
                                            </li>

                                        </ul>
                                        <p>These are the general documents but depending on the kind of visa, some
                                            additional papers and documentation might be done to get an issuance of
                                            a <h7 style={{color: 'black', fontSize: '20px'}}>Nepal visa for
                                                Pakistan.</h7></p>

                                        <h2
                                            style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Nepal
                                            Visa from Pakistan Terms & Condition</h2>
                                        <p>Following are the terms and conditions to get a
                                            <h7 style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}> Nepal
                                                visa from pakistan: </h7>

                                        </p>


                                        <ul style={{listStyle: 'disc', marginLeft: '1rem'}}>
                                            <li>A passport with a validity of six months and at least two blank pages.
                                            </li>
                                            <li>Tripplanner pk is not responsible for visa rejection or delaying.</li>
                                            <li>Visa fee is non-refundable in any case.</li>
                                            <li>Since the procedure is carried out by the Nepal Embassy, the changes are
                                                expected over time.
                                            </li>
                                            <li>A valid return air ticket to ensure you are not going to overstay on
                                                your visit visa.
                                            </li>
                                        </ul>


                                        <h2 id='Nepal-Visa-Price'
                                            style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Nepal
                                            Visa Price</h2>
                                        <p>With breathtaking landscapes, natural riches, vibrant cultural diversity, and
                                            welcoming people, Nepal is an exciting country of contrasts. Planning a
                                            holiday trip to this magnificent country of history and natural wonders will
                                            be refreshing for you and your family.
                                            Tripplannerpk provides reasonable packages on <h7
                                                style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}> Nepal
                                                visa for pakistan: </h7> unlike other travel agencies. Contact us to
                                            make your trip unforgettable with our excellent services and affordable
                                            rates.
                                        </p>
                                        <ul style={{listStyle: 'disc', marginLeft: '1rem'}}>
                                            <li>Visit Visa with documents: PKR</li>
                                            <li>Visit Visa without documents: PKR</li>
                                        </ul>
                                        <h2 id='Types-of-Nepal-Visa-for-Pakistani'
                                            style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Types of
                                            Nepal Visa for Pakistani</h2><b/>
                                        <img className="w-100" style={{height: '410px'}} src={myImage2} alt=""
                                             crossOrigin="anonymous"/><p></p>
                                        <p>Depending on the reason of your visit, following are the different kinds
                                            of <h7 style={{color: 'black', fontSize: '20px'}}> Nepal visa from
                                                pakistan: </h7></p>


                                        <h3 style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Transit
                                            Visa </h3>

                                        <p>Issued to people transiting in Nepal and getting this visa on arrival. The
                                            maximum duration of prospective holders of this visa is 24 hours, after
                                            which they had to leave. The individuals need to show the proof of their
                                            transit on their air flight ticket.</p>
                                        <h3 style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Business
                                            Visa</h3>

                                        <p>Individuals who wish to establish business in Nepal or visit the country for
                                            investment purposes need this kind of visa to enter the premises.</p>
                                        <h3 style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Student
                                            Visa </h3>
                                        <p>Students moving to Nepal for educational purposes such as those who wish to
                                            obtain any academic degree or complete any research project at some
                                            university there requires this type of visa.</p>

                                        {/*<img className="w-100" style={{height: '410px'}} src={myImage3} alt=""*/}
                                        {/*     crossOrigin="anonymous"/>*/}
                                        {/*<p>People traveling to Singapore for exploring, private family tours, or holidays for some time need this kind of visa.</p>*/}
                                        <h3 style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Work
                                            Visa</h3>
                                        <p>Work visa is a kind of non-tourist visa issued to those foreigners who
                                            already entered the country with a tourist visa and now wish to join some
                                            company or participate in any kind of work there. People need to provide a
                                            certain set of documents to get monthly or yearly income.</p>
                                        <h3 style={{
                                            color: '#155088',
                                            fontSize: '20px',
                                            textTransform: "none"
                                        }}> Diplomatic Visa</h3>
                                        <p>Issued only to the people holding diplomatic passports accompanied by
                                            recommendation letter from the foreign delegation office of any country.</p>

                                        <h3 style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Official
                                            Visa</h3>
                                        <p>Is a kind of visa issued to people who are on any kind of official visit to
                                            Nepal. The family members of this visa holder can also be entitled to an
                                            official visa. The visa is renewable and can be extended depending on the
                                            requirements.</p>
                                        <h3 style={{
                                            color: '#155088',
                                            fontSize: '20px',
                                            textTransform: "none"
                                        }}> Residence Visa</h3>
                                        <p>Any foreign national who decides to live permanently in Nepal has this kind
                                            of visa to legally stay and work there.</p>

                                        <h3 id='Travel-Tips-for-Nepal-Visia-Visit-from-Pakistan'
                                            style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Travel
                                            Tips for Nepal Visit Visit from Pakistan</h3>
                                        <img className="w-100" style={{height: '410px'}} src={myImage3} alt=""
                                             crossOrigin="anonymous"/><p></p>
                                        <p>Nepal, the country of snowy peaks, incredible landscapes, friendly people,
                                            and impressive mountains presents an interesting package of ancient history,
                                            culture, and heritage.</p> <p> Its rarest flora and fauna and diversity
                                        compels
                                        people to visit the country not just for its beautiful attraction sites but
                                        also for local’s hospitality and good nature. Away from the chaotic maze of
                                        the world, the country lies at one side with jewels of nature to admire and
                                        talk about.</p> <p> Nepal is home to the largest peaks in the world and so
                                        welcomes
                                        millions of tourists each year. One of the remarkable traits of the country
                                        is that it is free of complexities and offers peaceful life to those who
                                        wish to seek pleasure in their holiday trips.</p> <p> A beauty in simplicity
                                        irresistible to adventurous souls carrying a Nepal visa, therefore we have
                                        compiled a brief guide to make your trip regulated and memorable.
                                    </p>
                                        <img className="w-100" style={{height: '410px'}} src={myImage4} alt=""
                                             crossOrigin="anonymous"/><p></p>
                                        {/*<p>Planning a trip to this auspicious country might bombard you with scrutiny and criticism, but it depends on you to tackle them and not miss the unique traditions, friendly people, and customs from exploring. Following travel tips will help you plan your adventure easily and more effectively:</p>*/}

                                        <p>
                                            <h style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>1) Avoid
                                                solo Trekking-
                                            </h>
                                            The country of trekking is highly unsafe for those who wish to trek alone as
                                            many cases of tourists being disappeared on their solo-treks have been
                                            reported. It is always advised to join groups for trekking via online
                                            searching and inform your travel plans to friends or family.
                                        </p>
                                        <p>
                                            <h style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>2)
                                                Complete your Visa Requirements accurately-
                                            </h>
                                            Many people get confused in the visa issuance process of Nepal, since the
                                            country requires a visa to enter regardless of your nationality. Ensure
                                            whether your nationality is eligible for visa on arrival or you need to
                                            apply for tourist visa beforehand.
                                        </p>
                                        <p>
                                            <h style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>3) Beware
                                                of Taxi Drivers’ Scams-
                                            </h>
                                            The taxi drivers in Nepal are known to fool tourists by charging them twice
                                            or thrice times than actual fare. Therefore, request them to charge you per
                                            meter and be attentive while they drive especially during night times.
                                        </p>
                                        <p>
                                            <h style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>4) Avoid
                                                raw Vegetables and Tap Water-
                                            </h>
                                            Tap water is considered highly unsafe in Nepal, therefore, stick to bottled
                                            mineral water wherever you go. Moreover, avoid the pre-cut fruits and raw
                                            vegetables, they might cause you stomach ache and indigestion.
                                        </p>
                                        <p>
                                            <h style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>5) Do
                                                Carry Cash Around-
                                            </h>
                                            While traveling in Nepal, be sure to carry an ample amount of cash with you.
                                            The country has ATMs but they cannot be found frequently and might not be in
                                            some places. Moreover, the locals prefer cash over online payment.
                                        </p>
                                        <h3 id='Best-Time-to-Nepal-Visit-Visa'
                                            style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Best
                                            Time to Nepal Visit Visa</h3>
                                        <p>Nepal is a small country consisting of everything from peaky mountains to
                                            plain lands, from rolling hills to sand dunes and from diverse forests to
                                            lush green meadows.</p> <p> The quiet country on the roof of Earth is home
                                        to
                                        diversity and variety, be it in culture and people or in seasons. It lies on
                                        the altitude, therefore, experiences huge variation in temperatures and
                                        climatic conditions.</p>
                                        <img className="w-100" style={{height: '410px'}} src={myImage5} alt=""
                                             crossOrigin="anonymous"/><p></p>
                                        <p>The best time to visit any country basically defines the time of the year
                                            when the temperature is pleasant enough to let you enjoy your activities
                                            without any hindrance.</p> <p> When it comes to Nepal, the seasons are
                                        perfectly
                                        divided into dry and wet seasons with the months of October to December
                                        perfect to plan a trip. The pleasant environment accompanies a traveler when
                                        he knows when and where to go.</p> <p>Each season in Nepal is packed with events
                                        and festivals, therefore,
                                        has a lot to offer. But depending on the usual activities by tourists, the
                                        best times to visit Nepal has been categorized as:
                                    </p>

                                        <h3 id='Shopping-in-Nepal-During-Nepal-Visa'
                                            style={{
                                                color: '#155088',
                                                fontSize: '20px',
                                                textTransform: "none"
                                            }}> Shopping in Nepal During Nepal Visa</h3>
                                        <p>Widely known for its enchanting mountain ranges, fascinating culture, and
                                            scrumptious food, Nepal is hardly praised when it comes to shopping. But the
                                            country offers a variety of interesting and colorful products at debatable
                                            prices.</p> <p> The vibrant culture gives birth to craftsmanship that is
                                        must to
                                        carry and admire. Moreover, it is best to collect some tints of the country
                                        to take back at the end of your Nepal visa.</p>
                                        <img className="w-100" style={{height: '410px'}} src={myImage6} alt=""
                                             crossOrigin="anonymous"/><p></p>
                                        <p>Following is the list of markets and shopping destinations from where you can
                                            carry souvenirs back to your home.</p>

                                        {/*<p>Here is the list of shopping malls you can see on your Kenya visit visa and buy anything you want:</p>*/}
                                        <ul style={{listStyle: 'disc', marginLeft: '1rem'}}>
                                            <li> Asan Market- Center of Handicrafts</li>
                                            <li>Thamel in Kathmandu- Renown for selling Trekking equipment</li>
                                            <li>New Road- Economical Shopping Spot</li>
                                            <li>Boudha Stupa Market- One-stop for Souvenir Shopping</li>
                                            <li>Mahendrapul Bazar- Main Market</li>
                                            <li> Labim Mall- Modern Shopping destination</li>
                                            <li> Klod Fashion Exquisite- Center of fabrics shopping</li>
                                            <li> Nepal Art Council Gallery</li>
                                            <li> Pottery Square and Durbar Square</li>
                                            <li> Universal Crafts- Shop of antiques</li>

                                        </ul>


                                        <h3 id='FAQs-of-Nepal-Visa'
                                            style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>FAQs of
                                            Nepal Visa</h3>

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
                                                                        Q: Is a Nepal visa on arrival for Pakistan?
                                                                    </button>
                                                                </h5>
                                                            </div>

                                                            <div id="collapseOne" className="collapse show"
                                                                 aria-labelledby="headingOne" data-parent="#faqExample">
                                                                <div className="card-body">
                                                                    <b></b> Yes, due to the SAARC Agreement, Pakistani
                                                                    citizens are eligible to get visas on arrival in
                                                                    Nepal.
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
                                                                        Q: How long can I stay in Nepal with a tourist
                                                                        visa?
                                                                    </button>
                                                                </h5>
                                                            </div>
                                                            <div id="collapseTwo" className="collapse"
                                                                 aria-labelledby="headingTwo" data-parent="#faqExample">
                                                                <div className="card-body">
                                                                    The maximum validity issued by Nepali Department of
                                                                    Immigration for tourist visas is no more than 150
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
                                                                        Q: Are four days enough to explore Nepal?
                                                                    </button>
                                                                </h5>
                                                            </div>
                                                            <div id="collapseThree" className="collapse"
                                                                 aria-labelledby="headingThree"
                                                                 data-parent="#faqExample">
                                                                <div className="card-body">
                                                                    No, four days can never be enough to explore Nepal.
                                                                    It would be just like scratching the surface of it.
                                                                    Spare at least a week or two to get complete insight
                                                                    into the cultural and historical aspects of the
                                                                    country.
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
                                                                        Q: Can we reach Nepal by road?
                                                                    </button>
                                                                </h5>
                                                            </div>
                                                            <div id="collapse4" className="collapse"
                                                                 aria-labelledby="heading4"
                                                                 data-parent="#faqExample">
                                                                <div className="card-body">
                                                                    Yes, we can reach Nepal by road and experience a
                                                                    much thrilling journey as compared to flying in an
                                                                    airplane. Some borders need to be crossed in
                                                                    air-conditioned buses or cars.
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
                                                                        Q: Which months are best to visit Nepal?
                                                                    </button>
                                                                </h5>
                                                            </div>
                                                            <div id="collapse5" className="collapse"
                                                                 aria-labelledby="heading5"
                                                                 data-parent="#faqExample">
                                                                <div className="card-body">
                                                                    The best months to visit Nepal are October to
                                                                    December, when the weather is dry, skies are clear,
                                                                    and trekking is easier.
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

export default VisaSearchResultNepal;