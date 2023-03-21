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
import myImage1 from '../../../src/Components/Visa/VisaImages/seychelles-visa.jpg';
import myImage2 from "../../../src/Components/Visa/VisaImages/Seychelles-visa-for-Pakistani.jpg";
import myImage3 from "../../../src/Components/Visa/VisaImages/Seychelles-visa -policy.jpg";
import myImage4 from "../../../src/Components/Visa/VisaImages/Seychelles-visa-requirements-for pakistani-citizens.jpg";
import myImage5 from "../../../src/Components/Visa/VisaImages/Seychelles-tourist- Visa-on-Arrival.jpg";
import myImage6 from "../../../src/Components/Visa/VisaImages/Seychelles-Tourist -Visa.jpg";
// import myImage6 from "../../../src/Components/Visa/VisaImages/Visa-to-Singapore - nepal-tourist-visa requirements-for- pakistani.jpg";
import Content from "./Content";

const VisaSearchResultSeychelles = () => {

    const headings = [
        {title: 'Seychelles Visa', id: 'Seychelles Visa'},
        {title: 'Seychelles Visa for pakistan Policy', id: 'Seychelles Visa for pakistan Policy'},

        {title: 'Seychelles Visa Requirements', id: 'Seychelles Visa Requirements'},
        {title: 'Seychelles Visa Terms & Condition', id: 'Seychelles Visa Terms & Condition'},

        {title: 'Seychelles Visa Fee', id: 'Seychelles Visa Fee'},
        {title: 'Types of Seychelles Visa', id: 'Types-of-Seychelles-Visa'},

        {title: 'Travel Tips for Seychelles', id: 'Travel-Tips-for-Seychelles'},
        {title: 'Best Time to Seychelles Visit Visa', id: 'Best-Time-to-Seychelles-Visit-Visa'},

        {title: 'Shopping in Seychelles During Seychelles Visa', id: 'Shopping-in-Seychelles-During-Seychelles-Visa'},
        {title: 'FAQs of Seychelles Visa', id: 'FAQs-of-Seychelles-Visa'},


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
                                        <h1 id='Seychelles Visa'
                                            style={{
                                                color: '#155088',
                                                fontSize: '20px',
                                                textTransform: "none"
                                            }}>Seychelles Visa</h1>
                                        <p>Seychelles, an irresistible amalgamation of 115 islands in the Indian Ocean,
                                            is a tropical island of stunning landscape, pristine beaches, turquoise
                                            water, and palm trees.</p> <p> The island with its rarest flora and fauna is
                                        an
                                        exciting place to get in the bucket list of adventurers. It has a typical
                                        warm climate with the world’s best beaches, tropical islands, and impressive
                                        wildlife, multiethnic societies, and mouth watering cuisines.</p> <p>This ‘Land
                                        of Paradise’ is best explored through island hopping which
                                        offers a bird view of the whole archipelago. It is easily accessible from
                                        Kenya and South Africa so this not so inhabited island receives plenty of
                                        people from these areas carrying Seychelles visa Seychelles serves as home
                                        to two UNESCO World Heritage Sites and geographically recognized gardens to
                                        amaze its tourists with a range of diversity.</p> <p>Planning a trip to this
                                        spectacular island means participating in
                                        outdoor activities like hiking, trekking, snorkeling, island hopping and
                                        indoor activities like enjoying the luxurious hotels with picturesque views.
                                        So, grab your Seychelles visa now and embark on a journey to explore it all.
                                    </p>
                                        <b/>


                                        <h2 id='Seychelles Visa for pakistan Policy'
                                            style={{
                                                color: '#155088',
                                                fontSize: '20px',
                                                textTransform: "none"
                                            }}>Seychelles Visa for pakistan Policy</h2>
                                        <p><p></p></p>
                                        <img className="w-100" style={{height: '410px'}} src={myImage2} alt=""
                                             crossOrigin="anonymous"/>
                                        <p><p></p></p>
                                        <p>Seychelles follows no visa policy since it is a visa-free country. Residents
                                            of any country are allowed to enter without having any kind of visa.
                                            However, the Embassy of Seychelles will guide you how to get a certain type
                                            of permit depending on the purpose of your visit on arrival.</p>
                                        <h2 id='Seychelles Visa Requirements'
                                            style={{
                                                color: '#155088',
                                                fontSize: '20px',
                                                textTransform: "none"
                                            }}>Seychelles Visa Requirements</h2>
                                        <p>Pakistani citizens are among the ones to get in Seychelles visa on arrival as
                                            long as the person has following legal documents with him:</p>
                                        <ul style={{listStyle: 'disc', marginLeft: '1rem'}}>
                                            <li>Original passport with a validity of 06 months</li>
                                            <li> Copy of CNIC</li>
                                            <li> Four passport size photographs</li>
                                            <li>Bank statement from last 06 months</li>
                                            <li> Round air-ticket proof</li>
                                            <li>Proof of Hotel Reservation</li>
                                        </ul>


                                        <h2 style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Once you
                                            land in Seychelles, visit the Immigration Office there and fill out a form
                                            according to </h2>
                                        <p>Once you land in Seychelles, visit the Immigration Office there and fill out
                                            a form according to your purpose of visit and get the permit to enter the
                                            country legally.</p>
                                        <h2 id='Seychelles Visa Terms & Condition'
                                            style={{
                                                color: '#155088',
                                                fontSize: '20px',
                                                textTransform: "none"
                                            }}>Seychelles Visa Terms & Condition</h2>
                                        <p>The terms and conditions for Seychelles visa for Pakistan are as follows:</p>
                                        <ul style={{listStyle: 'disc', marginLeft: '1rem'}}>
                                            <li>The passport should be valid enough till the proposed duration of your
                                                stay.
                                            </li>
                                            <li>People wishing to transit through Seychelles need to closely follow the
                                                guidelines of their respective country
                                            </li>
                                            <li>Applicants must have a return air ticket and proof of travel
                                                documents.
                                            </li>
                                            <li>Visa fee, once submitted, is non-refundable.</li>
                                            <li>Tripplannerpk is not responsible for visa rejection or any delay in the
                                                procedure.
                                            </li>

                                        </ul>
                                        {/*<p>These are the general documents but depending on the kind of visa, some additional papers and documentation might be done to get an issuance of a <h7 style={{color: 'black', fontSize: '20px'}}>Nepal visa for Pakistan.</h7></p>*/}

                                        <h2 id='Seychelles Visa Fee'
                                            style={{
                                                color: '#155088',
                                                fontSize: '20px',
                                                textTransform: "none"
                                            }}>Seychelles Visa Fee</h2>
                                        <p>Seychelles offers a perfect escape from the city bustling life into heavenly
                                            peace of beaches and resorts. The island is not just an ideal spot for a
                                            calming break but also offers a range of activities from hiking on trails to
                                            admiring the view from top. Contact Tripplannerpk to get amazing offers with
                                            discounts on
                                            <h7 style={{
                                                color: 'black',
                                                fontWeight: 'bold',
                                                fontSize: '20px'
                                            }}> Seychelles visa for Pakistani </h7>
                                            and plan your family tour with us.
                                        </p>


                                        <ul style={{listStyle: 'disc', marginLeft: '1rem'}}>
                                            <li>Visit Visa with documents: PKR</li>
                                            <li>Visit Visa without documents: PKR</li>
                                        </ul>


                                        <h2 id='Types-of-Seychelles-Visa'
                                            style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Types
                                            of Seychelles Visa</h2><b/>
                                        <p><p></p></p>
                                        <img className="w-100" style={{height: '410px'}} src={myImage3} alt=""
                                             crossOrigin="anonymous"/>
                                        <p><p></p></p>
                                        <p>Since Seychelles is a visa-free country, there are no types of <h7
                                            style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}> Seychelles
                                            visa. </h7>But a traveler needs to get a visitor’s permit to enter the
                                            premises. The permit is then of various types such as work permit,
                                            residence, study, business permit etc.
                                        </p>


                                        <p>A person meeting the certain criteria also needs a visitor’s permit:</p>
                                        <ul style={{listStyle: 'disc', marginLeft: '1rem'}}>
                                            <li> He/she is not a prohibited immigrant</li>
                                            <li> Is not a permanent residence of Seychelles</li>
                                            <li> Who has confirmed returned air flight and proof of accommodation</li>
                                            <li> Proof of financial stability</li>
                                        </ul>
                                        <p>Following are the types of permits issued by the government of
                                            Seychelles:</p>
                                        <h3 style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Work
                                            Permit</h3>

                                        <p>Gainful Occupation Permit (GOP)/ Work Permit is issued to people visiting the
                                            country for work purposes, be it some official documentation or getting a
                                            job there.</p>
                                        <h3 style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Business
                                            Permit</h3>

                                        <p>Those who wish to establish business in Seychelles need this type of permit
                                            on arrival to legally start a company there.</p>
                                        <h3 style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Study
                                            Permit </h3>
                                        <p>Is issued to students intending to get admitted in any educational institute
                                            there to get a degree or do some research project.</p>

                                        {/*<img className="w-100" style={{height: '410px'}} src={myImage3} alt=""*/}
                                        {/*     crossOrigin="anonymous"/>*/}
                                        {/*<p>People traveling to Singapore for exploring, private family tours, or holidays for some time need this kind of visa.</p>*/}
                                        <h3 style={{color: '#155088', fontSize: '20px', textTransform: "none"}}> Visitor
                                            Permit </h3>
                                        <p>People who want to visit the country to meet their family members or
                                            relatives or are going just for a temporary visit need this kind of permit
                                            on arrival.</p>
                                        <h3 style={{color: '#155088', fontSize: '20px', textTransform: "none"}}> Tourist
                                            Permit</h3>
                                        <p>Is issued to people wishing to explore the country’s culture, cuisine,
                                            tradition, and much more.</p>

                                        <h3
                                            style={{
                                                color: '#155088',
                                                fontSize: '20px',
                                                textTransform: "none"
                                            }}>Permanent Residence Permit</h3>
                                        <p>If someone wants to settle in Seychelles permanently or has domestic or
                                            family connection there, then he/she needs this kind of PR permit.</p>
                                        <h3 id='Travel-Tips-for-Seychelles'
                                            style={{color: '#155088', fontSize: '20px', textTransform: "none"}}> Travel
                                            Tips for Seychelles</h3>
                                        <p>Seychelles, a beautiful island on the Indian Coast, caters to its tourists
                                            through ways no other island in the world can too. The magical wonders of
                                            its boulder-dotted coastlines, pristine beaches, palm trees, and unspoiled
                                            coral reefs are, though expensive on wallets, relaxing and refreshing on
                                            mind and soul.</p> <p> The endemic flora and fauna compiled with powdered
                                        white sand
                                        makes this ‘Island of Paradise’ perfect for honeymooners.Therefore, apply
                                        for Seychelles visa to get a perfect and most desired holiday.</p>

                                        <p><p></p></p>
                                        <img className="w-100" style={{height: '410px'}} src={myImage4} alt=""
                                             crossOrigin="anonymous"/>
                                        <p><p></p></p>

                                        {/*<p>Planning a trip to this auspicious country might bombard you with scrutiny and criticism, but it depends on you to tackle them and not miss the unique traditions, friendly people, and customs from exploring. Following travel tips will help you plan your adventure easily and more effectively:</p>*/}

                                        <p>
                                            <h style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>1.
                                                Passport and Seychelles Visa Requirements-
                                            </h>
                                            Seychelles does not need visas from its visitors regardless of their
                                            nationality. But you must hold a valid passport, proof of accommodation, and
                                            return flight ticket to gain a visitor’s permit with a validity of three
                                            months to freely explore this exquisite island.
                                        </p>
                                        <p>
                                            <h style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>2. What to
                                                Pack-
                                            </h>
                                            The warm tropical climate of Seychelles demands from you to pack light
                                            weight and summer clothes. As most of the days will be spent on the beaches,
                                            you need to carry sunglasses, hats, swimsuits, and sunscreens to avoid
                                            getting tan. However, do not forget to carry some casual outfits to attend
                                            some dinners and hike on trails.
                                        </p>
                                        <p>
                                            <h style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>3.
                                                Currency and Cards-
                                            </h>
                                            The official currency of Seychelles is Rupee (SCR) which is generally
                                            accepted in local markets, shops, and transport. The country prefers
                                            accepting Euros or US Dollars, so carry your credit cards with you.
                                        </p>
                                        <p>
                                            <h style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>4.
                                                Language-
                                            </h>
                                            There are three official languages being spoken widely in the island viz
                                            English, French, and Creole (a type of Patios French). French and Creole,
                                            however, are mostly understood by locals with English being the language of
                                            law and commerce.
                                        </p>
                                        <p>
                                            <h style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>5. Getting
                                                Around-
                                            </h>
                                            Depending on where you live, there are affordable bus services running from
                                            the two biggest islands of the country: Mahe and Praslin. You can also opt
                                            for Ferrari in case you are planning for island hopping.
                                        </p>


                                        <p><p></p></p>
                                        <img className="w-100" style={{height: '410px'}} src={myImage5} alt=""
                                             crossOrigin="anonymous"/>
                                        <p><p></p></p>
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

                                        <h3 id='Best-Time-to-Seychelles-Visit-Visa'
                                            style={{color: '#155088', fontSize: '20px', textTransform: "none"}}> Best
                                            Time to Seychelles Visit Visa</h3>
                                        <p>The cluster of islands located on the southern hemisphere faces a tropical
                                            climate all around the year, attracting thousands of tourists each year. The
                                            temperature ranges fall into mid 20s complimenting its beautiful beaches and
                                            natural scenery.</p> <p> Since the weather conditions are pleasant all year,
                                        travelers flock to this island of paradise to admire its spectacular virgin
                                        beaches, swaying palm trees, white sand, and thick forests.</p>
                                        <p><p></p></p>
                                        <img className="w-100" style={{height: '410px'}} src={myImage6} alt=""
                                             crossOrigin="anonymous"/>
                                        <p><p></p></p>
                                        <p>The best time to visit Seychelles is during summers or shoulder months when
                                            the temperature is warm enough to let tourists dive into warm water of
                                            beaches and sunbathe along with other day activities.</p>
                                        <h2 id='Shopping-in-Seychelles-During-Seychelles-Visa'
                                            style={{
                                                color: '#155088',
                                                fontSize: '20px',
                                                textTransform: "none"
                                            }}> Shopping in Seychelles During Seychelles Visa</h2>
                                        <p>After tiring your soul with spectacular views of the island, give it a rest
                                            by moving to the city's famous shopping malls and markets. The country is
                                            not really well-known for shopping but it does carry some interesting
                                            souvenirs that are a must to bag before your departure from Seychelles
                                            visa.</p>
                                        {/*<img className="w-100" style={{height: '410px'}} src={myImage7} alt=""*/}
                                        {/*     crossOrigin="anonymous"/>*/}
                                        <ul style={{listStyle: 'disc', marginLeft: '1rem'}}>
                                            <li>Sir Selwyn Clarke Market- One-stop Market for Fruits and Vegetables</li>
                                            <li>Victoria Market- Best for Clothes Shopping</li>
                                            <li>Eden Mall- A Synonym of Modern Shopping</li>
                                            <li> French Cultural Center- Good for Fresh Products</li>
                                            <li>Bazar Labrin- Street Market</li>
                                            <li> Kenwyn House- Perfect Gift Shop
                                            </li>
                                            <li> Roots Seychelles- Local Market</li>
                                            <li> National Library and Art Gallery</li>
                                            <li> Yes Souvenir Cachee- One spot for Souvenir shopping</li>

                                        </ul>


                                        <h3 id='FAQs-of-Seychelles-Visa'
                                            style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>FAQs of
                                            Seychelles Visa</h3>

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
                                                                        Q: How long is a tourist visa in Seychelles?
                                                                    </button>
                                                                </h5>
                                                            </div>

                                                            <div id="collapseOne" className="collapse show"
                                                                 aria-labelledby="headingOne" data-parent="#faqExample">
                                                                <div className="card-body">
                                                                    <b></b> Seychelles tourist visa permit is issued on
                                                                    arrival for three months to its visitors with a
                                                                    maximum extension of 12 months.
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
                                                                        Q: Do Pakistanis need a visa for Seychelles?
                                                                    </button>
                                                                </h5>
                                                            </div>
                                                            <div id="collapseTwo" className="collapse"
                                                                 aria-labelledby="headingTwo" data-parent="#faqExample">
                                                                <div className="card-body">
                                                                    No, Seychelles is a visa-free country so, you won’t
                                                                    be needing any visa to enter.
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
                                                                        Q: Is Seychelles open for Pakistani tourists?
                                                                    </button>
                                                                </h5>
                                                            </div>
                                                            <div id="collapseThree" className="collapse"
                                                                 aria-labelledby="headingThree"
                                                                 data-parent="#faqExample">
                                                                <div className="card-body">
                                                                    Yes, Seychelles whole-heartedly welcomes Pakistani
                                                                    visitors with valid identification documents and
                                                                    travel itinerary.
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
                                                                        Q: How much is the distance between Pakistan and
                                                                        Seychelles?
                                                                    </button>
                                                                </h5>
                                                            </div>
                                                            <div id="collapse4" className="collapse"
                                                                 aria-labelledby="heading4"
                                                                 data-parent="#faqExample">
                                                                <div className="card-body">
                                                                    The distance between Pakistan and Seychelles is 4238
                                                                    km.
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
                                                                        Q: Is Seychelles a cheap country?
                                                                    </button>
                                                                </h5>
                                                            </div>
                                                            <div id="collapse5" className="collapse"
                                                                 aria-labelledby="heading5"
                                                                 data-parent="#faqExample">
                                                                <div className="card-body">
                                                                    No, Seychelles is not a cheap country, in fact
                                                                    planning a trip here requires you to be mentally
                                                                    prepared to empty your wallets.

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card">
                                                            <div className="card-header p-2" id="heading7">
                                                                <h5 className="mb-0">
                                                                    <button className="btn btn-link collapsed"
                                                                            type="button" data-toggle="collapse"
                                                                            data-target="#collapse7"
                                                                            aria-expanded="false"
                                                                            aria-controls="collapse7">
                                                                        Q: What are the cheapest months to go to
                                                                        Seychelles?
                                                                    </button>
                                                                </h5>
                                                            </div>
                                                            <div id="collapse7" className="collapse"
                                                                 aria-labelledby="heading7"
                                                                 data-parent="#faqExample">
                                                                <div className="card-body">
                                                                    The cheapest months to plan a trip to Seychelles are
                                                                    May and September, when you can avail the discounted
                                                                    accommodation and comparatively cheap objects.
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

export default VisaSearchResultSeychelles;