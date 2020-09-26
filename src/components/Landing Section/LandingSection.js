import React, { Component } from 'react'
import classes from './LandingSection.module.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class LandingSection extends React.Component{
    render(){
       const settings ={
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
       }
        
        return(<div>
            <div className={classes.searchSection}>
                <span className={classes.leftSearch}>
                    <i class="fas fa-map-marker-alt"></i>
                    <span>Ghaziabad</span>
                </span>
                <span className={classes.rightSearch}>
                    <i class="fas fa-search"></i>
                    <input type="search" name="search" placeholder="Search doctors,clinics,hospitals,etc." size="30"/>
                </span>
                <span className={classes.discountLogo}>
                    <img src="https://www.practostatic.com/subscriptions/images/plus-tag.png" alt="discount" />
                </span>
            </div>
            <div className={classes.downloadBanner}>
                <img src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/banner.png" alt="download-link"/>
            </div>
            <div className={classes.doctorBanner}>
                    <img src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/find-doctors-2.png"/>
                    <img src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/doctor-online.png"/>
            </div>
            <div className={classes.appCarousel}>
                <div className={classes.appCarouselHeading}>
                    <h2>How Practo is Helping India Fight COVID-19</h2>
                </div>
                <div className={classes.appLinks}>
                    <img src="https://www.practostatic.com/subscriptions/upsell/PH/covid_19_home_page_159003888598.png"/>
                    <img src="https://www.practostatic.com/consumer-home/desktop/images/1588237256/swasth-card-2.png"/>
                    <img src="https://www.practostatic.com/consumer-home/desktop/images/1588237256/coronavirus.png"/>
                </div>
            </div>
            <div className={classes.consultSection}>
                <div className={classes.upperSection}>
                  <div className={classes.consultHeading}>
                    <h2>Consult top doctors online for any health concern</h2>
                    <div>Private online consultations with verified doctors in all specialists</div>
                  </div>
                  <div>
                    <button className={classes.btnView}>View All Speciliaties</button>
                  </div>
                </div>
                <div className={classes.lowerSection}>
                    <div className={classes.period}>
                        <img src="https://www.practostatic.com/consult/consult-home/symptoms_icon/irregular-painful+period.png"/>
                        <div>Period doubts or Pregnancy</div>
                        <div className={classes.consult}>CONSULT NOW</div>
                    </div>
                    <div className={classes.acne}>
                        <img src="https://www.practostatic.com/consult/consult-home/symptoms_icon/Acne.png"/>
                        <div>Acne, Pimple or skin issues</div>
                        <div className={classes.consult}>CONSULT NOW</div>
                    </div>
                    <div className={classes.performance}>
                        <img src="https://www.practo.com/consult/static/images/top-speciality-sexology.svg"/>
                        <div>Performance issues in bed</div>
                        <div className={classes.consult}>CONSULT NOW</div>
                    </div>
                    <div className={classes.cold}>
                        <img src="https://www.practostatic.com/consult/consult-home/symptoms_icon/coughing.png"/>
                        <div>Cold, cough or fever</div>
                        <div className={classes.consult}>CONSULT NOW</div>
                    </div>
                    <div className={classes.child}>
                        <img src="https://www.practo.com/consult/static/images/top-speciality-pediatric.svg"/>
                        <div>Child not feeling well</div>
                        <div className={classes.consult}>CONSULT NOW</div>
                    </div>
                    <div className={classes.anxiety}>
                        <img src="https://www.practostatic.com/acred/search-assets/2/12-mental-wellness.png"/>
                        <div>Depression or anxiety</div>
                        <div className={classes.consult}>CONSULT NOW</div>
                    </div>
                </div>
            </div>
            <div className={classes.appointmenSection}>
                  <div className={classes.appointHeading}>
                    <h2>Book an appointment for an in-clinic consultation</h2>
                    <div>Find experienced doctors across all specialties</div>
                  </div>
                  <div className={classes.cardSection}>
                      <div className={classes.card}>
                          <img src="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dentist@2x.jpg"/>
                          <h4 className={classes.cardHeading}>Dentist</h4>
                          <div>Teething trourbles? Scheduling a dental checkup</div>
                      </div>
                      <div className={classes.card}>
                          <img src="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-gynecologist@2x.jpg"/>
                          <h4 className={classes.cardHeading}>Gynecologist/Obstetrician</h4>
                          <div>Explore for women’s health, pregnancy and infertility treatments</div>
                      </div>
                      <div className={classes.card}>
                          <img src="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dietitian@2x.jpg"/>
                          <h4 className={classes.cardHeading}>Dietitian/Nutrition</h4>
                          <div>Get guidance on eating right, weight management and sports nutrition</div>
                      </div>
                      <div className={classes.card}>
                          <img src="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-physiotherapist@2x.jpg"/>
                          <h4 className={classes.cardHeading}>Physiotherapist</h4>
                          <div>Pulled a muscle? Get it treated by a trained physiotherapist</div>
                      </div>
                      </div> 
            </div>
              <div className={classes.articleSection}>
                  <div className={classes.articleContent}>
                      <h2>Read top articles from health experts</h2>
                      <div>Health articles that keep you informed about good health practices and achieve your goals.</div>
                      <button>See all articles</button>
                  </div>
                  <div className={classes.articleCard}>
                      <img src="https://www.practostatic.com/fit/5fd27b74d9477cb633445cf3f105078bbc479910"/>
                      <div className={classes.articleDesc}>Coronavirus</div>
                      <h4>12 Coronavirus Myths and Facts That You Should Be Aware Of</h4>
                      <div className={classes.articleDoctor}>Dr. Diana Borgio</div>
                  </div>
                  <div className={classes.articleCard}>
                      <img src="https://www.practostatic.com/fit/bade52edc7fb158bf627216bf96c2b881a97f30c"/>
                      <div className={classes.articleDesc}>Vitamins and Supplements</div>
                      <h4>Eating Right to Build Immunity Against Cold and Viral Infections</h4>
                      <div className={classes.articleDoctor}>Dr. Diana Borgio</div>
                  </div>
              </div>
              <div>
                  <h2>What our users have to say</h2>
                  <Slider {...settings} className={classes.slider}>
                      
                      <div className={classes.slide1}>
                         Very helpful. Far easier than doing same things on
                         computer. Allows quick and easy search with speedy
                         booking. Even maintains history of doctors visited.
                          <div>Amit Sharma</div>
                      </div>
                      <div className={classes.slide1}>
                         Very easy to book,maintain history. Hassle free from
                         older versions of booking appointment via telephone..
                         Thanks Practo for making it simple.
                          <div>Jyoti Bhatia</div>
                      </div>
                      <div className={classes.slide1}>
                      Very good app. Well thought out about
                      booking/rescheduling/canceling an appointment. Also,
                      Doctor's feedback mechanism is good and describes
                      all the basics in a good way
                          <div>Avinash Kumar</div>
                      </div>
                  </Slider>
              </div>
              <div className={classes.footerSection}>
                  <div className={classes.imgFooter}>
                    <img src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/footer-img.png"/>
                  </div>
                  <div className={classes.rightFooterSection}>
                     <div className={classes.headingFooterSection}>
                        <h2>Download the Practo app</h2>
                        <div className={classes.headingFooterSectionDesc}>Access video consultation with India’s top doctors on the Practo app. 
                        Connect with doctors online, available 24/7, from the comfort of your home.
                        </div>
                        <div className={classes.appLink}>Get the link to download the app</div>
                        <div className={classes.submitPhone}>
                        <div className={classes.phoneNum}>
                          <span>
                           +91
                          </span>
                          <input type="tel" class="text u-font--bold" value="" placeholder="Enter phone number"/>
                        </div>
                          <button className={classes.btnPhone}>Send SMS</button>
                        </div>
                        <div>
                            <img className={classes.btnGoogle} src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/google_play.png"/>
                            <img className={classes.btnApple}src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/apple_store.png"/>
                        </div>
                     </div>
                  </div>
              </div>
        </div>)
    }
}

export default LandingSection