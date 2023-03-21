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
import myImage1 from '../../../src/Components/Visa/VisaImages/thailand-visit-visa-from-pakistan_612x612.jpg';
import myImage2 from '../../../src/Components/Visa/VisaImages/thailand-visa-from -Pakistan.jpg';
import myImage3 from '../../../src/Components/Visa/VisaImages/thailand-tourist -visa-guide.jpg';
import myImage4 from '../../../src/Components/Visa/VisaImages/thailand-visa-travel-tips.jpg';
import myImage5 from '../../../src/Components/Visa/VisaImages/thailand-tourist- visa-for-pakistani.jpg';
import myImage6 from '../../../src/Components/Visa/VisaImages/thailand-tourist-visa-requirements.jpg';
import Content from "./Content";


const VisaSearchResultThailand = () => {

    const headings = [
        { title: 'Thailand Visit Visa', id: 'Thailand-Visit-Visa' },
        { title: 'Thailand Visa Policy', id: 'Thailand-Visa-Policy' },
        { title: 'Transit Visa', id: 'Transit-Visa' },
        { title: 'Thailand Visit Visa Requirements From Pakistan', id: 'Thailand-Visit-Visa-Requirements-From-Pakistan' },
        { title: 'Thailand Visit Visa Terms & Condition', id: 'Thailand-Visit Visa-Terms-&-Condition' },
        { title: 'Thailand Visit Visa Price In Pakistan', id: 'Thailand-Visit-Visa-Price-In-Pakistan' },
        { title: 'Thailand e visa', id: 'Thailand-e-visa' },
        { title: 'Types of Thailand Visa ', id: 'Types-of-Thailand-Visa' },
        { title: 'Budget Travel Tips', id: 'Budget-Travel-Tips' },
        { title: 'Health-related Travel Tips', id: 'Health-related-Travel-Tips' },
        { title: 'Cultural Tips for Thailand', id: 'Cultural-Tips-for-Thailand' },
        { title: 'Best Time to Visit Thailand', id: 'Best-Time-to-Visit-Thailand' },
        { title: 'Shopping in Thailand During Thailand Visit Visa', id: 'Shopping-in-Thailand-During-Thailand-Visit-Visa' },
        { title: 'FAQs of Thailand Visit Visa', id: 'FAQs-of-Thailand-Visit-Visa' },

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
                                    {/*<h1 style={{textTransform: "none"}}>Thailand Visit Visa</h1>*/}
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
                                        {/*<img className="w-100" src="../../../assets/img/thailand-visit-visa%20(11).jpg" alt="" />*/}
                                        {/*<img className="w-100" src="VisaImages/img2.jpg" alt="" />*/}
                                    </div>
                                </div>
                            </div>
                            <Content headings={headings} />
                            <div id="regular-text">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-12">
                                        <h1
                                            id='Thailand-Visit-Visa'
                                            style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Thailand
                                            Visit Visa</h1>
                                        <p>Thailand, a land of islands, is a country of tropical forests, cultivated
                                            fields, mountains, largely populated cities, and charming villas with rich
                                            culture and grandeur history.</p> <p> Long regarded as the jewel of Asia, the planet
                                            is famous for its countless temples and for generating huge revenue each
                                            year. Seeing more than 35 million travelers per year, tourism in Thailand
                                            serves as a major source of commerce. </p> <p>The tourists feel a magnetic pull
                                            towards its white sandy beaches, historic temples, terrific hotels, and
                                            mouth-watering food compelling them to plan several tours in a row.
                                            The country is also referred to as the Land of Smiles and has many things to
                                            offer to its visitors. <h7
                                                style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>Thailand
                                                Visit Visa</h7> is
                                            now getting on the list of top searches so, scheduling a venture into this
                                            world would be a great experience for holidaymakers.
                                        </p>
                                        <h2 id='Thailand-Visa-Policy'
                                            style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Thailand
                                            Visa Policy</h2>

                                        <table className="table table-bordered ">
                                            <thead>
                                            <tr className="border-title">
                                                <th align="left">Thailand Visa Policy</th>
                                                <th align="left">Visa Processing Time</th>
                                                <th align="left"> Visa Fee (Pakistani Rupees)</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr className="border-data">
                                                <td>Thailand Visit Visa</td>
                                                <td>
                                                    <div className="pb-1">30 Working Days</div>
                                                    <div className="pb-1"></div>
                                                </td>
                                                <td>
                                                    <div className="pb-1">PKR 12,000</div>
                                                    <div className="pb-1">(With Documents)</div>
                                                    <div className="pb-1">PKR 35,000</div>
                                                    <div className="pb-1">(Without Documents)</div>
                                                </td>
                                            </tr>

                                            <tr className="border-data">
                                                <td>Thailand Tourist Visa</td>
                                                <td>
                                                    <div className="pb-1">30 Working Days</div>
                                                    <div className="pb-1"></div>
                                                </td>
                                                <td>
                                                    <div className="">PKR 7,000</div>
                                                    <div className=""></div>
                                                </td>
                                            </tr>

                                            <tr className="border-data">
                                                <td>Thailand eVisa</td>
                                                <td>
                                                    <div className="pb-1">30 Working Days</div>
                                                    <div className="pb-1"></div>
                                                    <div className="pb-1"></div>
                                                </td>
                                                <td>
                                                    <div className="pb-1">PKR 6,500</div>
                                                    <div className="pb-1"></div>
                                                    <div className="pb-1"></div>
                                                </td>
                                            </tr>

                                            <tr className="border-data">
                                                <td>Thailand Sticker Visit Visa</td>
                                                <td>
                                                    <div className="pb-1">30 Working Days</div>
                                                    <div className="pb-1"></div>
                                                    <div className="pb-1"></div>
                                                </td>
                                                <td>
                                                    <div className="pb-1">PKR 14,500</div>
                                                    <div className="pb-1"></div>
                                                    <div className="pb-1"></div>
                                                </td>
                                            </tr>

                                            <tr className="border-data">
                                                <td>Three Month Thailand Visit Visa</td>
                                                <td>
                                                    <div className="pb-1">90 Working Days</div>
                                                    <div className="pb-1"></div>
                                                    <div className="pb-1"></div>
                                                </td>
                                                <td>
                                                    <div className="pb-1">PKR 60,000</div>
                                                    <div className="pb-1"></div>
                                                    <div className="pb-1"></div>
                                                </td>
                                            </tr>
                                            < /tbody>
                                        </table>

                                        <br/>

                                        <h2 id='Transit-Visa'
                                            style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Transit
                                            Visa</h2>

                                        <table  className="table table-bordered ">
                                            <thead>
                                            <tr className="border-title">
                                                <th align="left">Visa Category</th>
                                                <th align="left">Visa Validity</th>
                                                <th align="left"> Visa Fee <br/>
                                                    (Pakistani Rupees)
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr className="border-data">
                                                <td>TS- Single Entry</td>
                                                <td>
                                                    <div className="pb-1">3 months</div>
                                                    <div className="pb-1"></div>
                                                </td>
                                                <td>
                                                    <div className="pb-1">3,000</div>
                                                    {/*<div className="pb-1">(With Documents)</div>*/}
                                                    {/*<div className="pb-1">PKR 35,000</div>*/}
                                                    <div className="pb-1"></div>
                                                </td>
                                            </tr>

                                            <tr className="border-data">
                                                <td>TS- Double Entry</td>
                                                <td>
                                                    <div className="pb-1">6 months</div>
                                                    <div className="pb-1"></div>
                                                </td>
                                                <td>
                                                    <div className="">6,000</div>
                                                    <div className=""></div>
                                                </td>
                                            </tr>

                                            <tr className="border-data">
                                                <td>TS- Triple Entry</td>
                                                <td>
                                                    <div className="pb-1">9 months</div>
                                                    <div className="pb-1"></div>
                                                    <div className="pb-1"></div>
                                                </td>
                                                <td>
                                                    <div className="pb-1">9,000</div>
                                                    <div className="pb-1"></div>
                                                    <div className="pb-1"></div>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>

                                        <p className="pt-3">Note: The time / period of stay are determined by the
                                            Thailand Immigration.</p>
                                        <h2 id= 'Thailand-Visit-Visa-Requirements-From-Pakistan'
                                            style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Thailand
                                            Visit Visa Requirements From Pakistan</h2>
                                        <p>Following is the list of documents that need to be prepared before applying
                                            for a Thailand visit visa:
                                        </p>
                                        <ul style={{listStyle: 'disc', marginLeft: '1rem'}}>
                                            <li>Original passport with a validity of six months</li>
                                            <li> Photocopy of NIC</li>
                                            <li> Two photocopies of the passport’s first 04 pages</li>
                                            <li>Two passport-sized photographs</li>
                                            <li>Details of your traveling plans such as hotels bookings</li>
                                            <li>One-year personal bank account statement</li>
                                            <li>A confirmed Airline Ticket</li>
                                            <li> Reference letter of your job position and duration, salary proof, NTN,
                                                and proof of the company's financial transactions from the last six
                                                months.
                                            </li>
                                            <li> In the case of spouse registration, marriage certification is
                                                required.
                                            </li>
                                            <li> In the case of a family, FRC (Family Registration Certificate) is
                                                required.
                                            </li>
                                            <li> All documents related to accommodation</li>
                                        </ul>
                                        <p>The documents must be enough to support the financial status of the
                                            applicant, proving that he is credible enough to travel and cover all the
                                            expenses.</p>

                                        <h2 id='Thailand-Visit Visa-Terms-&-Condition'
                                            style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Thailand
                                            Visit Visa Terms & Condition</h2>
                                        <p>The terms and conditions for Thailand Visit Visa are as follows:</p>
                                        <ul style={{listStyle: 'disc', marginLeft: '1rem'}}>
                                            <li>Visa fee submitted once is not refundable in case visa gets rejected
                                                from Thai Embassy.
                                            </li>
                                            <li>Tripplannerpk is not responsible for visa rejection or in case it gets
                                                delayed, since the process is completed via Immigration Department.
                                            </li>
                                            <li>Applicants should have a valid return ticket and passport.</li>
                                            <li>Overstaying in the country without any visa extension will result in
                                                fines and detentions.
                                            </li>
                                            <li>The visa policy, regulations, and costs are managed by the Thai Embassy,
                                                so can be subjected to changes.
                                            </li>
                                        </ul>

                                        <h2 id= 'Thailand-Visit-Visa-Price-In-Pakistan'
                                            style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Thailand
                                            Visit Visa Price In Pakistan </h2>
                                        <p>Depending on the type of visit visa, the prices vary accordingly. Different
                                            travel agencies offer different rates according to the facilities they
                                            provide. Tripplannerpk provides an affordable </p>
                                        <p>
                                            <h7 style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>Thailand
                                                Visit Visa
                                            </h7>
                                            that perfectly matches your schedule.
                                        </p>
                                        <ul style={{listStyle: 'disc', marginLeft: '1rem'}}>
                                            <li>Visit Visa with documents: PKR 12,000</li>
                                            <li>Visit Visa without documents: PKR 35,000</li>

                                        </ul>


                                        {/*<h3>Travel Tips for USA Travel</h3>*/}
                                        {/*<p>Thailand e visa is an online platform that grants people to apply, monitor, and pay charges for their visas so they don't visit any Embassy. </p>*/}

                                        <h2 id='Types-of-Thailand-Visa'
                                            style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Types of
                                            Thailand Visa</h2>
                                        <p>There are three types of Thailand visit visa from Pakistan:</p>

                                        <h3 style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Thailand
                                            Tourist Visa</h3>
                                        <p>This type of visa is for Pakistani people who wish to stay in the kingdom of
                                            Thailand as a tourist for no longer than 90 days. You can apply for this
                                            visa at the Thai embassy of your current residence and the embassy will
                                            grant you a Tourist visa with a maximum period of 60 days. This time period
                                            can be extended on your wish for 30 days by visiting the Thai Immigration
                                            Office.</p>

                                        <h3 id='Thailand-e-visa'
                                            style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Thailand
                                            e visa</h3>
                                        <p>Thailand e visa is an online platform that grants people to apply, monitor,
                                            and pay charges for their visas so they don't visit any Embassy.</p>

                                        <h3 style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Types of
                                            Thailand Visa</h3>
                                        <p>There are three types of Thailand visit visa from Pakistan:</p>

                                        {/*<h3 style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Thailand*/}
                                        {/*    Tourist Visa</h3>*/}
                                        {/*<p>This type of visa is for Pakistani people who wish to stay in the kingdom of*/}
                                        {/*    Thailand as a tourist for no longer than 90 days. You can apply for this*/}
                                        {/*    visa at the Thai embassy of your current residence and the embassy will*/}
                                        {/*    grant you a Tourist visa with a maximum period of 60 days. This time period*/}
                                        {/*    can be extended on your wish for 30 days by visiting the Thai Immigration*/}
                                        {/*    Office.*/}
                                        {/*</p>*/}

                                        <h3 style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Thailand
                                            Business Visa</h3>
                                        <p>A person thinking to establish a business in the kingdom of Thailand or is
                                            being hired by some Thai company is required to obtain this visa through the
                                            Thai embassy of your current residence. After entering the country, a person
                                            needs to obtain a work permit to legally start working there. Business
                                            visas, in short, are for business-related purposes.
                                        </p>

                                        <h3 style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Thailand
                                            Transit Visa</h3>
                                        <p>A transit visa is issued for people using Thailand as a location of transit.
                                            Or people who need to participate in any sports competition there. A transit
                                            visa applies to a passenger flying in an airplane scheduled to stop for more
                                            than 12 hours in Thailand.</p>

                                        <h3 style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Travel
                                            Tips for Thailand</h3>
                                        <p>The beautifully diverse country of Thailand presents a perfect amalgamation
                                            of cultural history and modernism that is visible in its bustling cities,
                                            picturesque beaches, and skyscrapers.</p> <p> Along with mouth-watering food, and
                                            endless places to visit, you can enjoy snorkeling, fishing, scuba-diving,
                                            hiking, and kayaking. There is a list of places you can visit, delicious
                                            food to savor, and things to enjoy, which is why it is necessary to be
                                        prepared before your departure to the Land of Smiles.</p> <p> Try to have sufficient
                                            knowledge about the country’s culture before applying for a Thailand visit
                                            visa so as not to feel so out of place there.
                                            <b/>
                                            One thing to be considerate about Thailand is that the city is self-centered
                                            around respect, so it is important to always be respectful around Thai
                                            people.
                                            <b/>
                                            The travel tips fall under different categories which are as follows:

                                        </p>
                                        <h3 style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>General
                                            Tips</h3>
                                        <img className="w-100" style={{height: '410px'}} src={myImage2} alt=""
                                             crossOrigin="anonymous"/>
                                        <b/><b/>
                                        <p>
                                            <b/>
                                            <b/>
                                        </p>
                                        <p>
                                            <h7 style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>1) Visa
                                                Requirements-
                                            </h7>
                                            The visa requirements are different for different countries. Make sure to
                                            get all the information related to visas from the local Thai embassy at your
                                            place and fulfill all the necessary documentation processes.

                                        </p>
                                        <p>
                                            <h7 style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>2) Pack
                                                light, warm weather
                                                clothes-
                                            </h7>
                                            The weather in Thailand is usually hot and humid; therefore, it is advised
                                            to keep summer clothes that are lightweight and breathable.


                                        </p>
                                        <p>
                                            <h7 style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>3) Keep
                                                Ample Cash with
                                                you-
                                            </h7>
                                            It is highly recommended to keep cash with you while you visit the markets
                                            in Thailand. Local markets, street restaurants, and several tourist
                                            attraction sites usually accept cash rather than online payment. Although
                                            there are plenty of ATMs, paying with cash is more convenient for Thai
                                            people than credit card payment.


                                        </p>
                                        <p>
                                            <h7 style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>4) Get
                                                Travel Insurance
                                                before the trip-
                                            </h7>
                                            Travel Insurance is always a safe option before traveling to any foreign
                                            country. Therefore, to avoid expensive medical bills in case you fall ill
                                            there, go for an insurance procedure as a precautionary procedure.
                                        </p>
                                        <p>
                                            <h7 style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>5) Get an
                                                International
                                                Driving License-
                                            </h7>
                                            Among many fantasies of Thailand, one is scooter driving experienced by the
                                            majority of tourists. However, it is suggested to get an international
                                            driving license from your home country to enjoy it without restrictions.

                                        </p>
                                        <p>
                                            <h7 style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>6) Verify
                                                the Company’s
                                                legitimacy before booking-
                                            </h7>
                                            With an average increase in tourism in Thailand, unfortunately, an increase
                                            in frauds and scams has been observed. It is advised to check the customer’s
                                            reviews before booking any hotel, penthouse, or guesthouse.·


                                        </p>

                                        <h3 id='Budget-Travel-Tips'
                                            style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Budget
                                            Travel Tips </h3>
                                        <img className="w-100" style={{height: '410px'}} src={myImage3} alt=""
                                             crossOrigin="anonymous"/>
                                        <b/><b/>
                                        <p>
                                            <b/>
                                            <b/>
                                        </p>
                                        <p>
                                            <h7 style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>1) Go for
                                                Pocket-friendly
                                                Tours-
                                            </h7>
                                            In a foreign country, how much you spend in a day decides your monthly
                                            budget. It is said that north Thailand is 30-50% cheaper than south
                                            Thailand. A friendly suggestion is to spend maximum holidays there if you
                                            want to keep your budget low and prefer local food and transport.
                                        </p>
                                        <p>
                                            <h7 style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>2) Choose
                                                Budget-Airlines-
                                            </h7>
                                            If you are keen to explore the country via flying then choose inexpensive
                                            budget-friendly flights that can help you get across quickly and cheaply.
                                            Some suggested airlines in this regard are Thai Smile, Air Asia, Nok Air,
                                            Orient Thai, etc. Pack your food and water so you don’t have to pay for
                                            them.

                                        </p>
                                        <p>
                                            <h7 style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>3) Choose
                                                Hostels
                                                Accommodation-
                                            </h7>
                                            Thailand is an affordable destination and therefore has several cheap hotels
                                            and guesthouses. But staying in hostels will save a lot more money than any
                                            hotel. Do a good background check before registering with any one of them.

                                        </p>
                                        <p>
                                            <h7 style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>4) Travel
                                                and Eat like
                                                Locals-
                                            </h7>
                                            If you are planning to save money then eat and travel like locals. Avoid
                                            fancy transport and lavish restaurants to be saved from getting
                                            empty-handed. Thailand has diverse options for travel and tasty food so live
                                            like locals and enjoy Thai culture to the full.

                                        </p>


                                        <h3 id= 'Health-related-Travel-Tips'
                                            style={{
                                            color: '#155088',
                                            fontSize: '20px',
                                            textTransform: "none"
                                        }}>Health-related Travel Tips</h3>
                                        <p>
                                            <b/>
                                            <b/>
                                        </p>
                                        <img className="w-100" style={{height: '410px'}} src={myImage4} alt=""
                                             crossOrigin="anonymous"/>
                                        <b/><b/>
                                        <p>
                                            <b/>
                                            <b/>
                                        </p>
                                        <p>
                                            <h7 style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>1) Keep a
                                                Small Medical
                                                Kit-
                                            </h7>
                                            If you are planning to save money then eat and travel like locals. Avoid
                                            fancy transport and lavish restaurants to be saved from getting
                                            empty-handed. Thailand has diverse options for travel and tasty food so live
                                            like locals and enjoy Thai culture to the full.

                                        </p>
                                        <p>
                                            <h7 style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>2) Carry
                                                a Sun Screen-
                                            </h7>
                                            The Sun is high in Thailand and the humid hot weather of the country will
                                            burn your skin, no matter what type of skin you bear. Therefore, it is
                                            always recommended to wear sunscreen whether you are on the beach, in the
                                            city, or in the mountains. Even if the weather is cloudy, you need to wear
                                            cream, hats, and sunglasses to avoid getting any itchy rashes on the skin.
                                        </p>
                                        <p>
                                            <h7 style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>3) Plan a
                                                tour in January and
                                                February-
                                            </h7>
                                            Since Thailand is a hot country, the ideal months to plan a visit are
                                            January and February. Rainfall is expected in these months, which
                                            automatically reduces the temperature and you can enjoy the way you want to.

                                        </p>
                                        <p>
                                            <h7 style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>4) Keep
                                                in touch with your
                                                Travel Agent-
                                            </h7>
                                            It is a must to have your travel agent on speed dial in case you have any
                                            queries or you get stuck in any problem. Having family members or friends
                                            there will be a plus point but being a tourist, your travel agent can be
                                            handy in each situation. Try to maintain a healthy relationship with him.

                                        </p>
                                        <p>
                                            <h7 style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>5) Be
                                                Careful with Thailand’s
                                                Nightlife-
                                            </h7>
                                            One of the most attractive features of the country is its sparkly nightlife
                                            hustled with enthusiastic locals serving various kinds of entertainment.
                                            However, try to be very careful during this time. Don’t leave your food and
                                            things unattended and try not to get drunk especially. Stick to the
                                            following general safety tips.

                                        </p>
                                        <b/><b/>

                                        <h3 id='Cultural-Tips-for-Thailand'
                                            style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Cultural
                                            Tips for Thailand</h3>

                                        <p>
                                            <h7 style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>1) Remove
                                                your Shoes-
                                            </h7>
                                            Do not forget to remove your shoes before entering temples, spas, people’s
                                            homes, and other buildings as it is considered very offensive in Thai
                                            culture. Many temples offer facilities to store your footwear while you
                                            visit the temple so take a precaution and wear shoes that are easy to slip
                                            off. It is better not to hurt the sentiments of the Thai people.

                                        </p>
                                        <p>
                                            <h7 style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>2) Dress
                                                Appropriately-
                                            </h7>
                                            While visiting temples, shrines, or any other holy place, try to cover your
                                            head with a scarf or stole to avoid critical remarks from native people.
                                            Thailand is not a conservative country but an improper dress code in a holy
                                            place can offend anyone. So, it is prescribed to be on the secure side
                                            rather than hanging on the cliff.

                                        </p>
                                        <p>
                                            <h7 style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>3) Don’t
                                                touch/smack people’s
                                                heads-
                                            </h7>
                                            Thai culture treats the head as the holiest part of the body so avoid
                                            touching or smacking anybody’s head intentionally or playfully.
                                        </p>
                                        <p>
                                            <h7 style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>4)
                                                Respect the King-
                                            </h7>
                                            Thai people are obliged to respect their king and never utter any offense
                                            against the monarchy. You will find plenty of pictures, posters, and emblems
                                            of the King there, so try not to say anything rude in front of locals.
                                        </p>
                                        <p>
                                            <h7 style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>5) Be
                                                Careful with Thailand’s
                                                Nightlife-
                                            </h7>
                                            One of the most attractive features of the country is its sparkly nightlife
                                            hustled with enthusiastic locals serving various kinds of entertainment.
                                            However, try to be very careful during this time. Don’t leave your food and
                                            things unattended and try not to get drunk especially. Stick to the
                                            following general safety tips.

                                        </p>
                                        <p>
                                            <h7 style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>6)
                                                Bargain with Dignity-
                                            </h7>
                                            Shopping is an important part of traveling. And it is always fantastic to
                                            collect souvenirs and cultural embellishments. Undoubtedly, they are going
                                            to be expensive so try to bargain with the shopkeepers in a friendly way.
                                            Learning a little local language or some common sentences might make your
                                            shopping easier and less tiring. You can tag along some natives to aid you
                                            in these matters.


                                            <h3 id='Best-Time-to-Visit-Thailand'
                                                style={{
                                                color: '#155088',
                                                fontSize: '20px',
                                                textTransform: "none"
                                            }}>Best Time to Visit Thailand</h3>
                                            <p>Although Thailand is a diverse and vast country perched near the equator,
                                                the tropical area does not offer year-round bliss due to varying degrees
                                                of temperature fluctuations. The general temperature of the year is dry
                                                and warm; therefore, it is best to visit the country when the climate is
                                                favorable enough to let you enjoy it completely.
                                            </p>

                                            <img className="w-100" style={{height: '410px'}} src={myImage5} alt=""
                                                 crossOrigin="anonymous"/>
                                            <b/>
                                            <p>
                                                <b/>
                                                <b/>
                                            </p>
                                            <h2 id='Shopping-in-Thailand-During-Thailand-Visit-Visa'
                                                style={{
                                                color: '#155088',
                                                fontSize: '20px',
                                                textTransform: "none"
                                            }}>Shopping in Thailand During Thailand Visit Visa</h2>
                                            <p>Thailand is considered one of the best shopping destinations in the world
                                                with its premium shopping malls, street stalls, and night or weekend
                                                markets. From cultural country products and souvenirs to traditional
                                                silk pieces and ornaments, the country is successful in attracting a
                                                huge number of tourists and is, therefore, regarded as a ‘Shopper’s
                                                Paradise’. The island is perfect for both, big spenders and penny
                                                pinchers.
                                            </p>
                                        </p>
                                        <img className="w-100" style={{height: '410px'}} src={myImage6} alt=""
                                             crossOrigin="anonymous"/>
                                        <p>
                                            <b/>
                                            <b/>
                                        </p>

                                        <p>Below is the list of things you can buy on your
                                            <h7 style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>Thailand
                                                visit visa</h7>
                                            just don’t forget to carry a huge bag with you. Some of the famous places
                                            are also mentioned to give you an idea beforehand.
                                        </p>
                                        <h3 style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Things
                                            To Buy in Thailand</h3>
                                        <ul style={{listStyle: 'disc', marginLeft: '1rem'}}>
                                            <li>Elephants as Souvenirs</li>
                                            <li>Thai Silk and Hand-made Jewelry</li>
                                            <li>Wooden Furniture and Carvings</li>
                                            <li>Thai Spices, Snacks, and Food</li>
                                            <li> Ceramics and Pottery</li>
                                            <li>Thai Loincloth</li>
                                            <li>Wickerwork and Lacquerware</li>
                                            <li>Antiques and Muay (Thai Shorts)</li>
                                            <li> Frog Figurines</li>
                                            <li>Soap Flowers and Spa Products</li>
                                        </ul>
                                        <h3 style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>Where To
                                            Shop in Thailand</h3>
                                        <ul style={{listStyle: 'disc', marginLeft: '1rem'}}>
                                            <li>Phuket Weekend Market</li>
                                            <li>Jungceylon Shopping Mall</li>
                                            <li> Central Festival Phuket</li>
                                            <li> Central World Bangkok</li>
                                            <li>Chatuchak Weekend Market</li>
                                            <li>Asiatique the Riverfront</li>
                                            <li>Vogue Departmental Store</li>
                                            <li>Nang Thong Supermarket</li>
                                            <li> Pattaya Floating Market</li>
                                        </ul>
                                        <b/>


                                        <h3 id='FAQs-of-Thailand-Visit-Visa'
                                            style={{color: '#155088', fontSize: '20px', textTransform: "none"}}>FAQs of
                                            Thailand Visit Visa</h3>

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
                                                                        Q: Is it easy to get a Thailand visit visa?
                                                                    </button>
                                                                </h5>
                                                            </div>

                                                            <div id="collapseOne" className="collapse show"
                                                                 aria-labelledby="headingOne" data-parent="#faqExample">
                                                                <div className="card-body">
                                                                    <b></b> Yes, if all the documents are ready in order
                                                                    and the above-mentioned requirements are fulfilled,
                                                                    the process isn’t hard and time-consuming.
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
                                                                        Q: How long does it take to get a Thailand visit
                                                                        visa?
                                                                    </button>
                                                                </h5>
                                                            </div>
                                                            <div id="collapseTwo" className="collapse"
                                                                 aria-labelledby="headingTwo" data-parent="#faqExample">
                                                                <div className="card-body">
                                                                    It takes 10-15 working days to get a normal visit
                                                                    visa to Thailand.
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
                                                                        Q. What is Thailand famous for?
                                                                    </button>
                                                                </h5>
                                                            </div>
                                                            <div id="collapseThree" className="collapse"
                                                                 aria-labelledby="headingThree"
                                                                 data-parent="#faqExample">
                                                                <div className="card-body">
                                                                    Thailand is famous for its tropical rainforests,
                                                                    stunning beaches, historical temples, glorious
                                                                    buildings, and magnificent shopping malls. The place
                                                                    is heaven for adventure or a pleasure-seeking soul.
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card">
                                                            <div className="card-header p-2" id="headingFoure">
                                                                <h5 className="mb-0">
                                                                    <button className="btn btn-link collapsed"
                                                                            type="button" data-toggle="collapse"
                                                                            data-target="#collapseFoure"
                                                                            aria-expanded="false"
                                                                            aria-controls="collapseFoure">
                                                                        Q. What are the best things to buy from
                                                                        Thailand?
                                                                    </button>
                                                                </h5>
                                                            </div>
                                                            <div id="collapseFoure" className="collapse"
                                                                 aria-labelledby="headingFoure"
                                                                 data-parent="#faqExample">
                                                                <div className="card-body">
                                                                    The land of Smile has a diverse collection of
                                                                    souvenirs, pottery, gemstones, jewelry, and carved
                                                                    wooden furniture. You can easily buy these from any
                                                                    market at a reasonable price through fair bargaining
                                                                    and a respectful attitude. Paying with cash would be
                                                                    handy for you in Thailand.
                                                                </div>
                                                            </div>
                                                        </div>


                                                        <div className="card">
                                                            <div className="card-header p-2" id="headingFive">
                                                                <h5 className="mb-0">
                                                                    <button className="btn btn-link collapsed"
                                                                            type="button" data-toggle="collapse"
                                                                            data-target="#collapseFive"
                                                                            aria-expanded="false"
                                                                            aria-controls="collapseFive">
                                                                        Q. What are the means of transportation in
                                                                        Thailand?
                                                                    </button>
                                                                </h5>
                                                            </div>
                                                            <div id="collapseFive" className="collapse"
                                                                 aria-labelledby="headingFive"
                                                                 data-parent="#faqExample">
                                                                <div className="card-body">
                                                                    There are several ways to go around the city.
                                                                    Domestic flights, private vehicles, Ferry,
                                                                    speedboats, and local vans. However, if you are keen
                                                                    to save money, prefer local transport.
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
                                                                        Q. Is it safe to drink tap water in Thailand?
                                                                    </button>
                                                                </h5>
                                                            </div>
                                                            <div id="collapsesix" className="collapse"
                                                                 aria-labelledby="headingsix"
                                                                 data-parent="#faqExample">
                                                                <div className="card-body">
                                                                    No, it is strongly advised not to drink tap water
                                                                    since it can affect your health in a bad way. Stick
                                                                    to filtered water which can easily be available in
                                                                    hotels and restaurants.
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
                                                                        Q. What language is spoken in Thailand?
                                                                    </button>
                                                                </h5>
                                                            </div>
                                                            <div id="collapseseven" className="collapse"
                                                                 aria-labelledby="headingseven"
                                                                 data-parent="#faqExample">
                                                                <div className="card-body">
                                                                    Their official language is Thai however, many people
                                                                    can communicate in English with tourists, especially
                                                                    in areas famous for tourists visiting.
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>

                                        {/*<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum dictum purus, at hendrerit metus dictum sed. Maecenas non sapien eget tellus venenatis viverra vitae id felis. Aenean eu dictum neque. Integer maximus nisi turpis, at euismod libero vehicula a. Integer ut nulla sit amet libero laoreet condimentum. Integer odio lorem, tristique id diam quis, pellentesque blandit justo. Aenean id dolor posuere, tristique urna in, fringilla arcu. Donec egestas, nisi eu molestie feugiat, orci nisi ornare urna, nec sollicitudin metus eros ut felis. Cras at erat sit amet nunc pharetra volutpat a efficitur lacus. Duis maximus consequat scelerisque.</p>*/}
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

export default VisaSearchResultThailand;