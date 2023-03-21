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
import myImage1 from '../../../src/Components/Visa/VisaImages/kenya-visa.jpg';
import myImage2 from "../../../src/Components/Visa/VisaImages/Kenya-Visa- Requirements.jpg";
import myImage3 from "../../../src/Components/Visa/VisaImages/keny-tourist-visa.jpg";
import myImage4 from "../../../src/Components/Visa/VisaImages/Kenya-Visa-for-pakistani.jpg";
import myImage5 from "../../../src/Components/Visa/VisaImages/kenya-visit-visa.jpg";
// import myImage6 from "../../../src/Components/Visa/VisaImages/Visa-to-Singapore - Visit Singapore.jpg";
import Content from "./Content";


const VisaSearchResultKenya = () => {

    const headings = [
        {title: 'Kenya Visit Visa', id: 'Kenya-Visit-Visa'},
        // {title: 'Singapore Visa Policy', id: 'Singapore Visa Policy'},

        {title: 'Kenya Visa Policy', id: 'Kenya-Visa-Policy'},
        {
            title: 'Kenya Visit Visa Requirements for Pakistani Citizens',
            id: 'Kenya-Visit-Visa-Requirements-for-Pakistani-Citizens'
        },

        {
            title: 'Kenya  Visit Visa for Pakistani Terms & Condition',
            id: 'Keny-Visit-Visa-for-Pakistani-Terms-&-Condition'
        },
        {title: 'Kenya Visit Visa fee for Pakistani', id: 'Kenya-Visit-Visa-fee-for-Pakistani'},

        {title: 'Kenya eVisa', id: 'Kenya-eVisa'},
        {title: 'Types of Kenya Visa', id: 'Types-of-Kenya-Visa'},

        // {title: 'Singapore Visit Visa', id: 'Singapore-Visit-Visa'},
        {title: 'Travel Tips for Kenya Visit Visa', id: 'Travel-Tips-for-Kenya-Visit-Visa'},

        {title: 'Shopping in Kenya During Kenya Visit Visa', id: 'Shopping-in-Kenya-During-Kenya-Visit-Visa'},
        {title: 'FAQs of Kenya Visit Visa', id: 'FAQs-of-Kenya-Visit-Visa'},


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
                                    {/*<h1 style={{textTransform: "none"}}>Kenya</h1>*/}
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
                                        <h1 id='Kenya-Visit-Visa'
                                            style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Kenya
                                            Visit Visa</h1>
                                        <p>Kenya, an East-African Kingdom, is a cradle of civilization with breathtaking
                                            landscapes, fascinating cultures, diverse wildlife, and spiritual
                                            connection. </p> <p>From the heights of Mount Kenya, Elgon, and Longonot to
                                        the
                                        plains of Masai Mara and from bustling modern city of Nairobi to traditional
                                        villages in deserts, Kenya is every traveler’s dream destination. The only
                                        country in the world to offer authentic safari destinations along with
                                        famous national parks and white sand beaches.
                                    </p> <p> The Kingdom welcomes thousands of tourists each year holding a Kenya
                                        visit visa and rewards them with the variety of animals and birds they never
                                        have dreamed of, melting pot of diverse cultures, and cuisines to remember
                                        forever. The average population of the country is 44 million with every
                                        resident striving to contribute towards the country’s economy.</p> <p> Planning
                                        a
                                        trip to this spectacular country and getting a chance to witness a once blue
                                        Rift Valley lake turned to pink with flamingoes is a sight to behold
                                        forever. It’s time for you to explore the world’s greenest countries so
                                        don’t wait anymore to apply for a Kenya visit visa. </p>
                                        <b/>


                                        <h2 id='Kenya-Visa-Policy'
                                            style={{
                                                color: '#155088',
                                                fontSize: '20px',
                                                textTransform: "none"
                                            }}>Singapore Visa Policy</h2>
                                        <tr>
                                            <td></td>
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
                                                <td>Kenya E-Visa</td>
                                                <td>
                                                    <div className="pb-1">30 Working Days</div>
                                                    {/*<div className="pb-1">Non-Immigrant Visa Multiple Entry</div>*/}
                                                </td>
                                                <td>
                                                </td>

                                            </tr>
                                            <tr className="border-data">
                                                <td>Kenya Visit Visa</td>
                                                <td>
                                                    <div className="pb-1">90 Working Days</div>
                                                    {/*<div className="pb-1">Tourist Visa Multiple Entry</div>*/}
                                                </td>
                                                <td>
                                                    {/*<div className="">PKR 3,699</div>*/}
                                                    {/*<div className="">1 years / 3 years</div>*/}
                                                </td>
                                            </tr>
                                            <tr className="border-data">
                                                <td>Kenya E Visit Visa</td>
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
                                                <td>Kenya Tourist Visa</td>
                                                <td>
                                                    <div className="pb-1">90 Working Days</div>
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
                                                <td>Kenya Business Visa</td>
                                                <td>
                                                    <div className="pb-1">90 Working Days</div>
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
                                                <td>Kenya Transit Visa</td>
                                                <td>
                                                    <div className="pb-1">72 Working Days</div>
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


                                        <h2 id='Kenya-Visit-Visa-Requirements-for-Pakistani-Citizens'
                                            style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Kenya
                                            Visit Visa Requirements for Pakistani Citizens</h2>
                                        <p>Following documents must be prepared before applying for a <h7
                                            style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>Kenya visit
                                            visa from Pakistan :</h7> :

                                        </p>
                                        <ul style={{listStyle: 'disc', marginLeft: '1rem'}}>
                                            <li> Original passport with a validity of 06 months</li>
                                            <li> Picture of at least one blank page on passport</li>
                                            <li> Completely filled application form</li>
                                            <li> Pictures with white background</li>
                                            <li> Proof of return air-ticket</li>
                                            <li> Hotel Reservation proof</li>
                                            <li> Bank statement from last six months</li>
                                            <li> In case of business visa, invitation letter from the company or
                                                organization
                                            </li>
                                            <li> In case of diplomat visa, invitation letter from Pakistan Ministry</li>
                                            <li> In case of any sponsor, complete details with residential address of
                                                the Sponsor
                                            </li>

                                        </ul>
                                        <p>Further documents might be needed by the Embassy, so you need to provide them
                                            too.</p>

                                        <h2 id='Keny-Visit-Visa-for-Pakistani-Terms-&-Condition'
                                            style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Kenya
                                            Visit Visa for Pakistani Terms & Condition</h2>
                                        <p>The terms & conditions for
                                            <h7 style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}> Kenya
                                                Visit visa </h7>
                                            are as follows:
                                        </p>


                                        <ul style={{listStyle: 'disc', marginLeft: '1rem'}}>
                                            <li>Applicants must have a passport with a validity of six months.</li>
                                            <li>A proof of return air ticket must be provided along with the
                                                application.
                                            </li>
                                            <li>Visa fee, once deposited, becomes non-refundable in case visa gets
                                                rejected or delayed.
                                            </li>
                                            <li>Overstaying on a visit visa will result in fines and detentions.</li>
                                            <li>The visa policies from the Kenyan embassy are subject to change over
                                                time, therefore, stick closely to the rules and regulations.
                                            </li>
                                        </ul>


                                        <h2 id='Kenya-Visit-Visa-fee-for-Pakistani'
                                            style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Kenya
                                            Visit Visa fee for Pakistani</h2>
                                        <p>Kenya is getting on the bucket-list of each traveler because the Republic is
                                            one of the safe destinations in Africa with huge diversity in cultures,
                                            cuisines, picnic spots, and wildlife flora and fauna.</p> <p> Experience the
                                        country’s tropical climate, beautiful landscapes, green meadows, and much
                                        more in a very affordable amount of money. You can also get a chance to
                                        spend a night or two in mesmerizing Safari Lodges which offer luxury and
                                        comfort no other place can.</p> <p>
                                        Tripplannerpk can assist you best in this regard by offering family and
                                        individual packages with best and feasible Kenya visit visa from
                                        Pakistan.</p>
                                        <ul style={{listStyle: 'disc', marginLeft: '1rem'}}>
                                            <li>Visit Visa with documents: PKR</li>
                                            <li>Visit Visa without documents: PKR</li>
                                        </ul>
                                        <h2 id='Kenya-eVisa'
                                            style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Kenya
                                            eVisa</h2><b/>

                                        <p>Kenyan e-Visa is an electronic way to get a visa to the Republic of Kenya and
                                            stay there for 90 days. A travel authorization allowing people to visit
                                            hassle-free as long as they are in the list of eligible countries for e
                                            Visa.</p>


                                        <h3
                                            id='Types-of-Kenya-Visa'
                                            style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Types of
                                            Kenya Visa </h3>

                                        <p>There are different types of Kenya Visit Visa for Pakistani which are
                                            described below as:</p>
                                        <h3 id='Singapore-Visit-Visa'
                                            style={{
                                                color: '#155088',
                                                fontSize: '20px',
                                                textTransform: "none"
                                            }}>Diplomatic/Courtesy Visa</h3>

                                        <p>This type of visa is issued to government officials, diplomats, and service
                                            passport holders traveling to Kenya for some official meeting, task, or
                                            activity. People transiting to any third country through Kenya also need
                                            this kind of visa.
                                        </p>
                                        <h3 style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Tourist
                                            Visa </h3>
                                        <p>People who wish to enter the country for exploring and tourism purposes need
                                            this kind of visa with a validity of 90 days. Tourist visa to Kenya is
                                            usually single-entry but it can be extended up to 180 days by visiting the
                                            Immigration Office in Nairobi.</p>

                                        {/*<img className="w-100" style={{height: '410px'}} src={myImage3} alt=""*/}
                                        {/*     crossOrigin="anonymous"/>*/}
                                        {/*<p>People traveling to Singapore for exploring, private family tours, or holidays for some time need this kind of visa.</p>*/}
                                        <h3 style={{
                                            color: '#155088',
                                            fontSize: '20px',
                                            textTransform: "none"
                                        }}>Single-Entry Visa</h3>
                                        <p>A type of tourist visa issued to those wishing to enter the country not just
                                            for tourism, but for medical reasons, business, or other reasons. The
                                            validity of a single entry visa is 90 days.</p>
                                        <h3 style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Referred
                                            Visa</h3>
                                        <p>A special type of visa issued by Kenya to people holding non-national
                                            passports, un-approved travel documents, stateless persons, prohibited
                                            immigrants, or the people facing some kind of objection from their country.
                                            A person applying for this kind of visa needs special clearance from the
                                            Immigration Office in Nairobi.</p>

                                        <h3 style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Multiple
                                            Journey Visa</h3>
                                        <p>Multiple Journey Visa is issued to people who need to enter Kenya multiple
                                            times on the same visa within its validity period. Pakistani citizens with
                                            established businesses there need this kind of visa. It is generally issued
                                            for 90 days but this time can be extended on visitor’s application.</p>
                                        <h3 style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Transit
                                            Visa</h3>
                                        <p>Transit visa is issued to people entering Kenya and then transiting to any
                                            third country. The time duration for a transit visa must not be more than 72
                                            hours.</p>

                                        <h3 id='Travel-Tips-for-Kenya-Visit-Visa'
                                            style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Travel
                                            Tips for Kenya Visit Visa </h3>
                                        <img className="w-100" style={{height: '410px'}} src={myImage2} alt=""
                                             crossOrigin="anonymous"/><p></p>
                                        <p>Kenya, one of the best countries to offer an actual taste of African culture,
                                            traditions, and history, is an incredible city of greenish landscapes,
                                            diverse wildlife, and amazing safari destinations. </p> <p>The country is
                                        hardly
                                        known to be on the top list of every adventurer due to some terrorist
                                        activities in the past, but don’t consider it unsafe anymore as the country
                                        has progressed over years to open its doors for tourism and improve its
                                        economy. Get a Kenya visit visa from Pakistan to surprise yourself with its
                                        extraordinary wildlife.</p>
                                        <img className="w-100" style={{height: '410px'}} src={myImage3} alt=""
                                             crossOrigin="anonymous"/><p></p>
                                        <p>Planning a trip to this auspicious country might bombard you with scrutiny
                                            and criticism, but it depends on you to tackle them and not miss the unique
                                            traditions, friendly people, and customs from exploring. Following travel
                                            tips will help you plan your adventure easily and more effectively:</p>

                                        <p>
                                            <h style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>1. Check
                                                the requirements for Kenya Visa-
                                            </h>
                                            Before applying, do ensure if your country is eligible for e-visa and then
                                            complete all the documentation process. You won’t receive any official email
                                            from the embassy to assure whether or not your application is accepted or
                                            rejected. So, keep yourself updated by checking the status every now and
                                            then.

                                        </p>
                                        <p>
                                            <h style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>2. Pack
                                                lightweight summer clothes-
                                            </h>
                                            The overall temperature of the country is hot and dry, save the chilly
                                            mornings and late nights for once in a while rains. It is recommended to
                                            pack summer clothes since the sun will be on top all day and you might feel
                                            parched and sweaty.
                                        </p>
                                        <p>
                                            <h style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>3. Take
                                                care of your health-
                                            </h>
                                            Nobody wants to ruin their trip by falling ill and Kenya being prone to
                                            diseases especially Malaria, it advised to go there after doing your
                                            complete medical check-ups. Carry insect repellents and malaria medications
                                            to stop getting the nauseated symptoms of the disease.

                                        </p>
                                        <p>
                                            <h style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>4. Carry
                                                an ample amount of cash with you-
                                            </h>
                                            The official currency of Kenya is Kenyan Shilling (KES) but you can find
                                            some city malls accepting US dollars also. ATMs and credit cards are not
                                            readily accepted because the machines are scarce and in busy places like
                                            airports, hospitals etc. Therefore, it is always advised to carry an ample
                                            amount of cash to easily bargain and shop.

                                        </p>
                                        <p>
                                            <h style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>5. Kenya
                                                hates Plastics-
                                            </h>
                                            The use of plastics was banned in Kenya in 2017, and a fine was charged upon
                                            anyone breaking the rule. Your bags would be scanned at entrances to parks
                                            and shopping malls, therefore, avoid carrying any plastic bag or even
                                            straws. The luggage is often widely inspected before entering the national
                                            park, so, be careful not to get fine over this.
                                        </p>
                                        <img className="w-100" style={{height: '410px'}} src={myImage4} alt=""
                                             crossOrigin="anonymous"/><p></p>
                                        <p>
                                            Kenya, lying on one side of the equator, faces split seasons being
                                            intermingled in each other. The wet and dry seasons mark the yearly
                                            temperature which is sometimes interrupted by the occasional rains.</p> <p>
                                        Temperature variations depend on the elevations and so does the humidity.
                                        The best time to visit Kenya is June to October when the temperature is dry
                                        and witnesses the biggest animal migration.</p> <p>The best time to visit Kenya
                                        depends on the purpose of your adventure.
                                        Many people wish to enjoy the greatest safari ride for which the months of
                                        July to October are best. However, if you plan to enjoy indoor activities
                                        and rain then visit the country during the months of November and December.
                                        <b/>The overall seasons to visit Kenya are divided as:

                                    </p>

                                        <h3 id='Shopping-in-Kenya-During-Kenya-Visit-Visa'
                                            style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Shopping
                                            in Kenya During Kenya Visit Visa</h3>
                                        <p>The East-African country, Kenya, is uniquely famous not just for its wildlife
                                            but also for shopping experience. It is the best place for those who wish to
                                            carry the memories of the country in the form of cute souvenirs and
                                            inscriptions.</p> <p> The creativity of the artists is easily visible in its
                                        products that are sold in ample amounts to tourists and ultimately serves to
                                        serve the country’s economy.</p>
                                        <img className="w-100" style={{height: '410px'}} src={myImage5} alt=""
                                             crossOrigin="anonymous"/><p></p>
                                        <p>Kenya is one of those countries that is famous for online shopping,
                                            therefore, it contains a lot of original websites selling trendy items.
                                            Therefore, if you are the kind of person to bargain about the product’s
                                            prices or too busy to visit the market, Kenya offers you a range of options
                                            from online shopping platforms to local markets and malls.</p>

                                        <p>Here is the list of shopping malls you can see on your Kenya visit visa and
                                            buy anything you want:</p>
                                        <ul style={{listStyle: 'disc', marginLeft: '1rem'}}>
                                            <li> City Market in Nairobi- A one-stop Shopping Market</li>
                                            <li>Westgate Shopping Mall- Center of Luxury and Entertainment</li>
                                            <li>Yaya Center- A Mall of Quality and Diversity</li>
                                            <li>Masai Market- Cheap Shopping Destination</li>
                                            <li>The Village Market- A Blend of Markets and Malls</li>
                                            <li> Cedar Mall- Take a Break Mall</li>
                                            <li> The Hub Karen Mall- Splendid Architecture and Grandeur</li>
                                            <li>Old Town Market- A Center for Traditional Kenyan Gifts</li>
                                            <li>Two Rivers- Center of Modern Shopping</li>
                                            <li>The Junction Mall- A Large Supermarket</li>

                                        </ul>


                                        <h3 id='FAQs-of-Kenya-Visit-Visa'
                                            style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>FAQs of
                                            Kenya Visit Visa</h3>

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
                                                                        Q: Is Kenya open for Pakistan and is the process
                                                                        of visa easy?
                                                                    </button>
                                                                </h5>
                                                            </div>

                                                            <div id="collapseOne" className="collapse show"
                                                                 aria-labelledby="headingOne" data-parent="#faqExample">
                                                                <div className="card-body">
                                                                    <b></b> Yes, the country is open for Pakistani
                                                                    residents provided that the residents fulfill the
                                                                    necessary requirements. The great news is that
                                                                    obtaining a tourist visa to this country is
                                                                    comparatively easy and a fast process.
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
                                                                        Q: What is the validity of a Kenya visit visa?
                                                                    </button>
                                                                </h5>
                                                            </div>
                                                            <div id="collapseTwo" className="collapse"
                                                                 aria-labelledby="headingTwo" data-parent="#faqExample">
                                                                <div className="card-body">
                                                                    The Kenyan visit visa is valid for three months from
                                                                    the date of issuance.
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
                                                                        Q: Can I enter Kenya without a visa?
                                                                    </button>
                                                                </h5>
                                                            </div>
                                                            <div id="collapseThree" className="collapse"
                                                                 aria-labelledby="headingThree"
                                                                 data-parent="#faqExample">
                                                                <div className="card-body">
                                                                    No, you need a visa to enter the country, but make
                                                                    sure to check whether you are eligible for a visa on
                                                                    arrival or e-Visa.
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
                                                                        Q: How do I know if my visa is approved or not?
                                                                    </button>
                                                                </h5>
                                                            </div>
                                                            <div id="collapsefour" className="collapse"
                                                                 aria-labelledby="headingfour"
                                                                 data-parent="#faqExample">
                                                                <div className="card-body">
                                                                    At the end of your interview, you would be informed
                                                                    by your consular office if your application is
                                                                    accepted or denied. Sometimes, additional processing
                                                                    and documentation is required to obtain a visa.
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
                                                                        Q: What is the best shopping destination in
                                                                        Kenya?
                                                                    </button>
                                                                </h5>
                                                            </div>
                                                            <div id="collapsefive" className="collapse"
                                                                 aria-labelledby="headingfive"
                                                                 data-parent="#faqExample">
                                                                <div className="card-body">
                                                                    Kenya’s Capital, Nairobi, has the best shopping
                                                                    malls and markets offering a diverse range of
                                                                    options, unique products, and endless packages of
                                                                    entertainment.
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
                                                                        Q: Do shopping malls in Kenya accept credit
                                                                        cards?
                                                                    </button>
                                                                </h5>
                                                            </div>
                                                            <div id="collapsesix" className="collapse"
                                                                 aria-labelledby="headingsix"
                                                                 data-parent="#faqExample">
                                                                <div className="card-body">
                                                                    Yes, the majority of the malls in Kenya accept
                                                                    credit cards but it is recommended to carry cash
                                                                    with you to avoid getting struck in payments at
                                                                    local markets.
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

export default VisaSearchResultKenya;