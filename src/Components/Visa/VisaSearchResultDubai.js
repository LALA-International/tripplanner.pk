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
import myImage1 from '../../../src/Components/Visa/VisaImages/img.png';
import myImage2 from "../../../src/Components/Visa/VisaImages/dubai-tourist-visa.jpg";
import myImage9 from "../../../src/Components/Visa/VisaImages/dubai-tourist-visa-from-pakistan.jpg";
import myImage3 from "../../../src/Components/Visa/VisaImages/dubai-tourist-visa-from-pakistan.jpg";
import myImage4 from "../../../src/Components/Visa/VisaImages/dubai-visit-visa-for-pakistan.jpg";
import myImage5 from "../../../src/Components/Visa/VisaImages/Uae-dubai-visit-visa.jpg";
import myImage6 from "../../../src/Components/Visa/VisaImages/uae-visit-visa.jpg";
import myImage7 from "../../../src/Components/Visa/VisaImages/visit-visa-for-dubai.jpg";
import myImage8 from "../../../src/Components/Visa/VisaImages/dubai-uae-visa.jpg";
import Content from "./Content";


const VisaSearchResultDubai = () => {

    const headings = [{title: 'Dubai Visit Visa', id: 'Dubai-Visit-Visa'}, {
        title: 'Dubai Visa Policy',
        id: 'Dubai-Visa-Policy'
    }, {title: 'Transit Visa', id: 'Transit-Visa'}, {
        title: 'Dubai Visit Visa From Pakistan Requirements',
        id: 'Dubai-Visit-Visa-From-Pakistan-Requirements'
    }, {
        title: 'Dubai Visit Visa Terms & Condition',
        id: 'Dubai-Visit-Visa-Terms-&-Condition'
    }, // { title: 'Dubai Visit Visa From Pakistan Price', id: 'Dubai-Visit-Visa-From-Pakistan-Price' },
        {title: 'Dubai eVisa', id: 'Dubai-eVisa'}, {
            title: 'Types of Uae Vis',
            id: 'Types-of-Uae-Visa'
        }, {title: 'Travel Tips for Dubai', id: 'Travel-Tips-for-Dubai'}, {
            title: 'Best Time to Visit Dubai',
            id: 'Best-Time-to-Visit-Dubai'
        }, {
            title: 'Shopping in Dubai During Dubai Visit Visa',
            id: 'Shopping-in-Dubai-During-Dubai-Visit-Visa'
        }, {title: 'FAQs of Dubai Visit Visa', id: 'FAQs-of-Dubai-Visit-Visa'},


    ];


    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Search Result | Tripplanner ";
    }, [])
    return (<div>
        <BlackNavbar/>

        <section className="flight-det umrah-main umrah-visa-search mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 col-12">
                        <div className="row">
                            <div className="col-lg-9 col-md- col-sm-8 col-12 pb-lg-4">
                                {/*<h1 style={{textTransform: "none"}}>Dubai Visit Visa</h1>*/}
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
                                    <h1 id='Dubai-Visit-Visa'
                                        style={{color: '#155088', fontSize: '20px'}}>Dubai Visit Visa</h1>
                                    <p>Dubai, a city in the United Arab Emirates, is one of the most favorite
                                        tourist destinations with its tall skyscrapers, beaches, colonial
                                        architecture, and magnificent buildings. Many people from throughout the
                                        world get a <h7
                                            style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>Dubai
                                            Visit
                                            Visa</h7> to plan their holidays, trips, business tours, and family
                                        events in this splendid country due to the range of options and facilities
                                        it provides to the people.
                                    </p>
                                    <b/><p>
                                    The percentage of people going to Dubai yearly is increasing as the country
                                    is just a few hours away and has been ranked as the best holiday and
                                    vacation spot for tourists. Though it is an expensive country it offers
                                    luxury and comfort un-comparable.
                                    <b/></p>
                                    <p>
                                        Dubai is famous for its tallest building Burj Khalifa (830m) dominating the
                                        skyscraper-filled skyline, desert safari, luxury shopping, and lively
                                        nightlife.</p> <p> The crime rate here is very low, making the tourists feel
                                    safe
                                    while exploring the different cities. Nowadays, more than a million
                                    Pakistani people live, work, and establish their businesses in this country
                                    of diversity and beauty.<b/>

                                </p>
                                    <b/><p></p>
                                    <img className="w-100" style={{height: '410px'}} src={myImage2} alt=""
                                         crossOrigin="anonymous"/><p></p>
                                    <p>If you have a <h7
                                        style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>Dubai Visit
                                        Visa</h7> and are looking for proper guidelines, then you are at the right
                                        place to get complete information regarding the visa policy and other
                                        requirements.
                                    </p>
                                    <p>The process is very simple and online taking only about 4-5
                                        days to complete. Once you land at Dubai International Airport, you are free
                                        to move anywhere in the country as long as you have the visa and other
                                        requirements.

                                    </p>
                                    <h2 id='Dubai-Visa-Policy' style={{color: '#155088', fontSize: '20px'}}>Dubai
                                        Visa Policy</h2>
                                    <p></p>

                                    <table className="table table-bordered ">
                                        <tbody>
                                        <tr className="border-title">
                                            <th align="left">Visa Category</th>
                                            <th align="left">Visa Processing Time</th>
                                            <th align="left">Visa Fee (Pakistani Rupees)</th>
                                        </tr>
                                        </tbody>
                                        <tbody>
                                        <tr className="border-data">
                                            <td>Dubai Visit Visa</td>
                                            <td>
                                                <div className="pb-1">30 Working Days</div>
                                                {/*<div className="pb-1">Non-Immigrant Visa Multiple Entry</div>*/}
                                            </td>
                                            <td>
                                                <div className="pb-1">PKR 19,500</div>
                                                <div className="pb-1">(For 30 days)</div>
                                                <div className="pb-1">PKR 32,500</div>
                                                <div className="pb-1">(For 60 days)</div>
                                            </td>
                                        </tr>
                                        <tr className="border-data">
                                            <td>Dubai Tourist Visa</td>
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
                                            <td>Dubai eVisa</td>
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
                                            <td>Dubai Sticker Visit Visa</td>
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
                                            <td>Dubai Business Visa</td>
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
                                        </tbody>
                                    </table>

                                    <h2 id='Transit-Visa' style={{color: '#155088', fontSize: '20px'}}>Transit
                                        Visa</h2>
                                    <tr>
                                        <td>
                                            <table className="for-tabel">
                                                <tr className="border-title">
                                                    <th align="left">Visa Category</th>
                                                    <th align="left">Visa Processing Time</th>
                                                    <th align="left">Visa Fee (Pakistani Rupees)</th>
                                                </tr>
                                                <tr className="border-data">
                                                    <td>48-hour Transit Visa</td>
                                                    <td>
                                                        <div className="pb-1">3-4 Working Days</div>
                                                        {/*<div className="pb-1">Non-Immigrant Visa Multiple Entry</div>*/}
                                                    </td>
                                                    <td>
                                                        {/*<div className="pb-1">PKR 19,500</div>*/}
                                                        {/*<div className="pb-1">(For 30 days)</div>*/}
                                                        {/*<div className="pb-1">PKR 32,500</div>*/}
                                                        {/*<div className="pb-1">(For 60 days)</div>*/}
                                                    </td>
                                                </tr>
                                                <tr className="border-data">
                                                    <td>96-hour Transit Visa</td>
                                                    <td>
                                                        <div className="pb-1">3-4 Working Days</div>
                                                        {/*<div className="pb-1">Tourist Visa Multiple Entry</div>*/}
                                                    </td>
                                                    <td>
                                                        {/*<div className="">PKR 3,699</div>*/}
                                                        {/*<div className="">1 years / 3 years</div>*/}
                                                    </td>
                                                </tr>


                                            </table>
                                        </td>
                                    </tr>
                                    <p></p>

                                    {/*<p className="pt-3">Note: The time / period of stay are determined by the USA Immigration.</p>*/}
                                    <h2 id='Dubai-Visit-Visa-From-Pakistan-Requirements'
                                        style={{color: '#155088', fontSize: '20px'}}>Dubai Visit Visa From Pakistan
                                        Requirements</h2>
                                    <p>Before applying for a visa, the following documents need to be prepared to
                                        acquire a <h7
                                            style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>Dubai
                                            Visit
                                            Visa</h7>.
                                    </p>
                                    <ul style={{listStyle: 'disc', marginLeft: '1rem'}}>
                                        <li>Original Passport with a validity of six months</li>
                                        <li>Four passport-size pictures with white background</li>
                                        <li>Scan copy of original CNIC</li>
                                        <li>Dubai visa application form</li>
                                        <li>Personal bank account statement from the past 06 months</li>
                                        <li> Bank account maintenance covering letter</li>
                                        <li>Visa Request Letter to Embassy</li>
                                        <li>Air Tickets</li>
                                        <li>Hotels Reservations</li>
                                        <li>Police Character certificate</li>
                                        <li>Chamber of commerce certificate</li>
                                        <li>Visa Insurance</li>
                                        <li>Proof of visa fee</li>
                                        <li> Undertaking and guaranteeing that the person would leave the country
                                            depending on the validity of his/her visa
                                        </li>
                                    </ul>

                                    <h2 id='Dubai-Visit-Visa-Terms-&-Condition'
                                        style={{color: '#155088', fontSize: '20px'}}>Dubai Visit Visa Terms &
                                        Condition</h2>
                                    <p>The terms & conditions of
                                        <h7 style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>Dubai
                                            Visit Visa</h7>
                                        are as follows::
                                    </p>

                                    <ul style={{listStyle: 'disc', marginLeft: '1rem'}}>
                                        <li>Visa once issued is non-renewable and the fee is also refundable.
                                        </li>
                                        <li>Passport with a validity of 06 months is must to acquire a visit visa.
                                        </li>
                                        <li>Overstaying might reward you with a fine and penalty.
                                        </li>
                                        <li>The 90-day visa on arrival is usable for 180 days from first entry.</li>
                                        <li>Visa policy is subjected to change over-time so, might result in an
                                            increase or decrease in charges.
                                        </li>
                                    </ul>


                                    <ul style={{listStyle: 'disc', marginLeft: '1rem'}}>
                                        <li>Visit visa for 30 days: PKR 19,500</li>
                                        <li>Visit visa for 60 days: PKR 32,500</li>
                                    </ul>


                                    <h2 id='Dubai-eVisa'
                                        style={{color: '#155088', fontSize: '20px'}}>Dubai eVisa</h2>
                                    <p>GCC residents and their companions need an online visa to enter the United
                                        Arab Emirates known as eVisa. The validity of this visa is 30 days during
                                        which people can roam freely in the country and then if needed can apply for
                                        an extension too. The visa extension in this regard is for 30 days.</p>

                                    <h2 id='Types-of-Uae-Visa' style={{color: '#155088', fontSize: '20px'}}>Types of
                                        Uae Visa</h2><b/>

                                    <p>People who want to establish a business in Dubai obtain this long-term visa
                                        for themselves and family through the embassy. Business visas are part of
                                        the Golden Visa system that aims to create an attractive working environment
                                        for foreigners and helps in improving the economic growth of the
                                        company.</p> <p>
                                    This type of visa has a validity of 03 years with unlimited renewability.
                                    Any person with an experience in entrepreneurship is eligible for applying
                                    for this.</p>


                                    <h3 style={{color: '#155088', fontSize: '20px'}}>Dubai Tourist Visa </h3>
                                    <p>A Tourist visa is for people who wish to visit Dubai as a tourist and stay
                                        there for a time no longer than 30 or 90 days. Tourist visas are for all
                                        individual tourists from around the world wishing to explore the country,
                                        its culture, cuisine, and much more.</p> <p> With single or multiple
                                    entries,
                                    tourist visas can be extended for 30 days, without the need to leave the
                                    country. </p> <p>The validity of tourist visas is now increased depending on the
                                    new
                                    rule implemented by the UAE embassy which facilitates them to issue a
                                    five-year tourist visa with permission to enter the country several times on
                                    self-sponsorship and extend it for 90 days more.
                                </p>
                                    <h3 style={{color: '#155088', fontSize: '20px'}}>Dubai Transit Visa</h3>

                                    <p>Transit visas are issued to people with nationalities that are not eligible
                                        for visas on arrival and visa-free entry. Therefore, they need a transit
                                        visa to enter the UAE sponsored only by UAE-based airlines.</p> <p> Transit
                                    visas
                                    are of two types: one issued for 48 hours and the other for 96 hours which
                                    must be processed and approved prior to entering the UAE.
                                    <b/> The above-mentioned two types of transit visas cannot be extended.
                                </p>
                                    <h3 style={{color: '#155088', fontSize: '20px'}}>Dubai Student Visa</h3>
                                    <p>Student visa, as the name indicates, is issued to expatriate students
                                        admitted or studying in any college or university with a minimum age of 18
                                        years. The maximum validity of this visa is one year with a similar period
                                        for the extension depending on the official notice from the affiliated
                                        educational institute.
                                    </p> <p>On 24 November 2018, the UAE government issued a 05-year visa to bright
                                    students with excellent academic records to facilitate the best in this
                                    regard. The minimum requirement to apply for this visa includes a GPA of
                                    3.75 and 95% marks for schools and colleges.
                                </p>
                                    <h3 id='Travel-Tips-for-Dubai'
                                        style={{color: '#155088', fontSize: '20px'}}>Travel Tips for Dubai</h3>
                                    <p></p>
                                    <img className="w-100" style={{height: '410px'}} src={myImage3} alt=""
                                         crossOrigin="anonymous"/><p></p>

                                    <p>Dubai, the city of Gold, is an undisputed land of luxury known widely for its
                                        rich heritage and cultural hospitality. A city of contrasts with high
                                        vibrancy of modern architecture and desert life intricately intertwined to
                                        awe its incoming visitors. </p> <p>Fondly known as the “Playground of the
                                    Rich” and
                                    “Las Vegas of the Middle East” Dubai is home to the extremes that never
                                    cease to surprise travelers with its bigger man-made wonders like Burj
                                    Khalifa, World Island, stunning beaches, and lovely landscapes.</p> <p> The
                                    second
                                    largest Emirate in UAE offers the best shopping malls, spectacular
                                    attractions, diverse cultural life, bustling nightlife, and exciting
                                    activities. </p> <p>The multicultural country is a combination of opposites
                                    where
                                    the old world meets an entire glamorous latest desert hotspots famous for
                                    setting new world records and then breaking them on their own.
                                </p><p></p>
                                    <img className="w-100" style={{height: '410px'}} src={myImage7} alt=""
                                         crossOrigin="anonymous"/><p></p>
                                    <p>A city of promises serving as a puzzle and mystery to those who have not
                                        encountered an advanced and futuristic wonder before. Dubai is home to the
                                        world’s largest skyscraper, the largest vertical maze, the longest painting
                                        in the world, the largest firework map, the largest jigsaw puzzle, and so
                                        on.</p> <p> Planning a trip on a Dubai visit visa for the first time
                                    requires a
                                    brief travel itinerary that covers all the beautiful places to see, food to
                                    savor, and people to meet.</p>

                                    <p>
                                        <h7 style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>1) When
                                            to Visit?
                                        </h7>
                                        <b/>
                                        An important thing to be considerate of before traveling to any country is
                                        the weather and temperature. The best time to visit Dubai is during winter
                                        in November to March when the temperature ranges from 30° C to 12° C and the
                                        breeze is cool enough to let you enjoy the sightseeing.
                                    </p>
                                    <p> Moreover, the most
                                        awaited Dubai shopping festival is held in December which allows you to buy
                                        anything from any brand throughout the world. The mid-November to early
                                        December and March are the peak seasons to visit the country’s delights and
                                        be a part of the crowds.

                                    </p>
                                    <p></p>
                                    <img className="w-100" style={{height: '410px'}} src={myImage8} alt=""
                                    /><p></p>
                                    <p><b/>However, visiting Dubai during the months of April-October might serve as
                                        an uninformed decision because the weather is extreme and the air is hot and
                                        humid.</p> <p> The month of February is also not recommended due to
                                    torrential
                                    downpours and suffocated weather conditions. Dubai is a hot destination that
                                    should be visited once and the temperature is suitable enough to roam freely
                                    in the country.
                                </p>
                                    <p>
                                        <h7 style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}> 2) What
                                            to Pack?
                                        </h7>
                                        <b/>
                                        After planning a trip, the next important thing to ponder is what and how
                                        much to pack. Keeping in view the weather, culture, and mindset of the
                                        people of that country, your packing must be modest and moderate.
                                    </p>
                                    <p> Dubai’s
                                        weather is unforgiving, and scorching hot, therefore it is highly
                                        recommended to carry sunscreens wherever you go to avoid sunburns and
                                        tanning. Pack light-weight and summer clothes as the overall climate of the
                                        country is not very cool.</p> <p> Although Dubai is a very developed and
                                    liberal
                                    country, it is advised not to wear too many revealing clothes in public as
                                    it hurts the sentiments of natives. Being on the safe side is more
                                    preferable and productive.
                                </p> <p> While packing, don’t forget to pack a small medical kit to tackle small
                                    emergencies. Sunglasses, hats, and some desi snacks can also be packed to
                                    cater to your traveling cravings.

                                </p>
                                    <p></p>
                                    <img className="w-100" style={{height: '410px'}} src={myImage6} alt=""
                                         crossOrigin="anonymous"/><p></p>

                                    <p>
                                        <h7 style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>3)
                                            Complete your Documents
                                        </h7>
                                        <b/>
                                        The most important thing to be double-sure before moving to any foreign land
                                        is to complete the documentation process. Must take the photocopies of your
                                        passport, visa, and CNIC and keep the original documents locked and safe.
                                        You need to carry the photocopies all the time and don’t forget to consult
                                        your embassy regularly as visas are prone to several changes over time.
                                    </p>
                                    <p>
                                        <h7 style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>4)
                                            Exchange the Currency
                                        </h7>
                                        <b/>
                                        Dubai is a country free of crimes, therefore, money is safe to carry in the
                                        country. The official currency of the UAE is AED (Arab Emirates Dirham). It
                                        is better to exchange money at local shops because they offer better
                                        exchange rates. It is also advisable to carry international debit/credit
                                        cards which are easy to operate in the country.
                                    </p>
                                    <p>
                                        <h7 style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>5)
                                            Accommodation
                                        </h7>
                                        <b/>
                                        Choosing accommodation in a foreign land is a wise decision to take.
                                        Therefore, don’t jump into booking any expensive restaurant or hotel. Do a
                                        complete background check and book a hotel that matches your budget.
                                    </p>
                                    <p> Flight
                                        tickets and hotel bookings are relatively cheap during summers as the
                                        country is hot and humid, not attracting tourists much. Dubai has so much to
                                        provide to travelers, therefore prior booking can save you from chaos.
                                    </p>


                                    <h3 id='Best-Time-to-Visit-Dubai'
                                        style={{color: '#155088', fontSize: '20px'}}>Best Time to Visit Dubai </h3>
                                    <p>Dubai, one of the eponymous Capital of UAE, is a country of glitters, modern
                                        architecture, glamor, and excitement. Widely known as the City of Gold,
                                        Dubai is all about splendid views, remarkable sceneries, amazing food, the
                                        tallest skyscrapers, vast dunes, and traditional villages.</p> <p> Many
                                    people have
                                    marked Dubai as the top tourist destination in their lists as the country
                                    attracts people like a magnet, irresistible and must to admire. It is
                                    considered a huge loss if you have not visited the world’s biggest global
                                    city with its beautiful islands and glittery skylines.</p><p></p>
                                    <img className="w-100" style={{height: '410px'}} src={myImage4} alt=""
                                         crossOrigin="anonymous"/><p></p>
                                    <p>Dubai is a desert city with two climatic conditions: hot and hotter. The
                                        country does not experience many variations over months and therefore,
                                        offers a sultry climate all around the year.</p> <p> However, November to
                                    March are
                                    considered the best months to visit as the city sees clear skies, bright
                                    days, and primo beach weather. The temperature ranges are 25℃-23℃, a perfect
                                    time to explore state-of-the-art avenues, enjoy a plethora of adventurous
                                    activities, and experience the local’s hospitality and friendliness.</p>


                                    <h3 id='Shopping-in-Dubai-During-Dubai-Visit-Visa'
                                        style={{color: '#155088', fontSize: '20px'}}>Shopping in Dubai During Dubai
                                        Visit
                                        Visa</h3>
                                    <p>Dubai, with its traditional, cultural, and ultramodern lifestyle, serves as
                                        the best tourist place according to the Global Tourism Map. The city is
                                        famous not only for its scenic beaches, endless deserts, and
                                        state-of-the-art monuments but also for its ceaseless shopping options.</p>
                                    <p> From
                                        traditional open-air markets to high-end shopping malls, the country spoils
                                        its visitors on a Dubai visit visa with a variety, quality, and quantity of
                                        goods.
                                    </p><p></p>
                                    <img className="w-100" style={{height: '410px'}} src={myImage6} alt=""
                                         crossOrigin="anonymous"/><p></p>
                                    <p><b/>The diverse range of international brands offering impressive collections
                                        from clothing to electronics, or food to souvenirs compels the incoming
                                        tourists to spare some money and explore its shopping centers.</p> <p> The
                                    city has
                                    now made a record in the world due to its sheer glamor and grandiosity.
                                    Whether you want to update your wardrobe or get an insight into the cultural
                                    Arab markets, spare a day and embark on a day trip to various shopping
                                    malls, and open-air markets.
                                </p> <p>Dubai is significantly known for gold jewelry, but you can buy souvenirs
                                    or visit the traditional markets or Meena Bazaars at Al-Fahidi Street for
                                    cultural exploration and visits.
                                </p> <p> Here are some short-listed shopping destinations offering diverse
                                    options, perfect for both money-spenders and savers.
                                </p>
                                    <ul style={{listStyle: 'disc', marginLeft: '1rem'}}>
                                        <li>Dubai Mall- The World’s Largest Shopping Mall</li>
                                        <li>Wafi Mall- A unique shopping mall</li>
                                        <li>Global Village- A Mall of Global Diversity</li>
                                        <li>Deira Gol Souk- A Hub of Gold Jewelry</li>
                                        <li>Ibn Battuta Mall- The Biggest Shopping Center</li>
                                        <li>The Mall of Emirates- A Place of Supreme Experience</li>
                                        <li> Souk Madinat Jumeirah- A Confluence of Traditions and Modernity</li>
                                        <li> Burjuman Centre- The Oldest Shopping Mall</li>
                                        <li>The Outlet Village- A Place Well-Known for Handicrafts</li>
                                        <li>Al-Fahidi Street- A Local Bazaar Famous for Souvenirs</li>
                                        <li> Deira City Centre- A One-Stop Shopping Mall</li>
                                        <li> Dubai Outlet Mall- Best Mall for Clearance Sale</li>
                                    </ul>

                                    <h3 id='FAQs-of-Dubai-Visit-Visa'
                                        style={{color: '#155088', fontSize: '20px'}}>FAQs of Dubai Visit Visa</h3>
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
                                                                    Q: How to check Dubai Visit Visa online?
                                                                </button>
                                                            </h5>
                                                        </div>

                                                        <div id="collapseOne" className="collapse show"
                                                             aria-labelledby="headingOne" data-parent="#faqExample">
                                                            <div className="card-body">
                                                                <b></b> You can check the visa by visiting the
                                                                official website of the Dubai Embassy. Find the
                                                                option of ‘tracking the visa’ and click on it. Then
                                                                enter your passport number, date of birth, and
                                                                captcha code. By submitting, you will be able to
                                                                track all the information regarding your visa.
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
                                                                    Q: How to get a Dubai visit visa from Pakistan?
                                                                </button>
                                                            </h5>
                                                        </div>
                                                        <div id="collapseTwo" className="collapse"
                                                             aria-labelledby="headingTwo" data-parent="#faqExample">
                                                            <div className="card-body">
                                                                You can get the visa from the UAE Embassy, or an
                                                                online portal easily by fulfilling certain
                                                                requirements and documents. Contact Tripplannerpk
                                                                and get the visa within a week with or without
                                                                documents.
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
                                                                    Q. Can I extend my Dubai visit visa ?
                                                                </button>
                                                            </h5>
                                                        </div>
                                                        <div id="collapseThree" className="collapse"
                                                             aria-labelledby="headingThree"
                                                             data-parent="#faqExample">
                                                            <div className="card-body">
                                                                Yes, according to the new rules of UAE visas, all
                                                                types of visas can be renewed for a similar period
                                                                of time from their date of issuance.
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
                                                                    Q. Can I extend my 90 days visit visa to Dubai?
                                                                </button>
                                                            </h5>
                                                        </div>
                                                        <div id="collapseseven" className="collapse"
                                                             aria-labelledby="headingseven"
                                                             data-parent="#faqExample">
                                                            <div className="card-body">
                                                                Yes, visa extension is permissible in the Emirates
                                                                without leaving the city. Apply before the expiry
                                                                date of your visa and renew it for another short
                                                                period.
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
                                                                    Q. Can I work on a Dubai visit visa ?
                                                                </button>
                                                            </h5>
                                                        </div>
                                                        <div id="collapsefour" className="collapse"
                                                             aria-labelledby="headingfour"
                                                             data-parent="#faqExample">
                                                            <div className="card-body">
                                                                No, you cannot work on visit visas in UAE as the
                                                                visa just allows you to visit for some time. If you
                                                                wish to work there, you need to obtain a legitimate
                                                                work permit i.e., a business visa to legally work or
                                                                do business there.
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
                                                                    Q. How much does a Dubai visit visa cost from
                                                                    Pakistan?
                                                                </button>
                                                            </h5>
                                                        </div>
                                                        <div id="collapsefive" className="collapse"
                                                             aria-labelledby="headingfive"
                                                             data-parent="#faqExample">
                                                            <div className="card-body">
                                                                Depending on the way you apply; the cost of the visa
                                                                varies. Tripplannerpk offers budgetary visas for a
                                                                very short duration of time.
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
                                                                    Q. How many days are enough to explore Dubai?
                                                                </button>
                                                            </h5>
                                                        </div>
                                                        <div id="collapsesix" className="collapse"
                                                             aria-labelledby="headingsix"
                                                             data-parent="#faqExample">
                                                            <div className="card-body">
                                                                Ideally, a week should be spared to completely
                                                                explore the city. After visiting the main attraction
                                                                sites, go and see the offbeat places for which Dubai
                                                                is very famous.
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
                                <div className="pb-2"><i className="fa fa-check" aria-hidden="true"></i>
                                    <span>All Taxes</span>
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
    </div>)
}

export default VisaSearchResultDubai;