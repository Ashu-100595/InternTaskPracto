import React, { Component } from 'react'
import classes from './Footer.module.css'

class Footer extends React.Component{
    render(){
        return(<div className={classes.footerWrapper}>
                <div className={classes.upperSection}>
                 <div className={classes.leftSide}>
                   <span className={classes.footerMenu, classes.footerMenu1}>
                      <p className={classes.footerMenuHeading}>Practo</p>
                      <p className={classes.footerMenuItem}>About</p>
                      <p className={classes.footerMenuItem}>Blog</p>
                      <p className={classes.footerMenuItem}>Careers</p>
                      <p className={classes.footerMenuItem}>Press</p>
                      <p className={classes.footerMenuItem}>Contact Us</p>
                   </span>
                   <span className={classes.footerMenu, classes.footerMenu2}>
                      <p className={classes.footerMenuHeading}>For patients</p>
                      <p className={classes.footerMenuItem}>Search for doctors</p>
                      <p className={classes.footerMenuItem}>Search for clinics</p>
                      <p className={classes.footerMenuItem}>Search for hospitals</p>
                      <p className={classes.footerMenuItem}>Book Diagonostic Tests</p>
                      <p className={classes.footerMenuItem}>Book Full Body Checkups</p>
                      <p className={classes.footerMenuItem}>Practo Plus</p>
                      <p className={classes.footerMenuItem}>Read health articles</p>
                      <p className={classes.footerMenuItem}>Read about medicines</p>
                      <p className={classes.footerMenuItem}>Practo drive</p>
                      <p className={classes.footerMenuItem}>Health App</p>
                   </span>
                   <span className={classes.footerMenu, classes.footerMenu3}>
                    <div>
                    <p className={classes.footerMenuHeading}>For doctors</p>
                      <p className={classes.footerMenuItem}>Practo Profile</p>    
                    </div>
                    <div>
                      <p className={classes.footerMenuHeading}>For clinics</p>
                      <p className={classes.footerMenuItem}>Ray by Practo</p>
                      <p className={classes.footerMenuItem}>Practo Reach</p>
                      <p className={classes.footerMenuItem}>Ray Tab</p>
                      <p className={classes.footerMenuItem}>Practo Pro</p>
                    </div>
                   </span>
                 </div>
                 <div className={classes.rightSide}>  
                   <span className={classes.footerMenu, classes.footerMenu4}>
                      <p className={classes.footerMenuHeading}>For hospitals</p>
                      <p className={classes.footerMenuItem}>Insta by Practo</p>
                      <p className={classes.footerMenuItem}>Qikwell by Practo</p>
                      <p className={classes.footerMenuItem}>Querent by Practo</p>
                      <p className={classes.footerMenuItem}>Practo Profile</p>
                      <p className={classes.footerMenuItem}>Practo Reach</p>
                      <p className={classes.footerMenuItem}>Practo Drive</p>
                   </span>
                   <span className={classes.footerMenu, classes.footerMenu5}>
                      <p className={classes.footerMenuHeading}>More</p>
                      <p className={classes.footerMenuItem}>Help</p>
                      <p className={classes.footerMenuItem}>Developers</p>
                      <p className={classes.footerMenuItem}>Privacy Policy</p>
                      <p className={classes.footerMenuItem}>Terms & Conditions</p>
                      <p className={classes.footerMenuItem}>Healthcare Directory</p>
                      <p className={classes.footerMenuItem}>Practo Health Wiki</p>
                      <p className={classes.footerMenuItem}>Corporate Wellness</p>
                   </span>
                   <span className={classes.footerMenu, classes.footerMenu6}>
                      <p className={classes.footerMenuHeading}>Social</p>
                      <p className={classes.footerMenuItem}>Facebook</p>
                      <p className={classes.footerMenuItem}>Twitter</p>
                      <p className={classes.footerMenuItem}>Linkedin</p>
                      <p className={classes.footerMenuItem}>Youtube</p>
                      <p className={classes.footerMenuItem}>Github</p>
                   </span>
                 </div>
                 </div> 
                 <div className={classes.midSection}>
                     <img src="https://www.practostatic.com/web-assets/images/white_practo_logo.svg" alt="logo" className={classes.footerLogo}/>
                 </div>
                 <div className={classes.lowerSection}>
                     <span>Copyright © 2017,</span>
                     <span>Practo. All rights reserved.</span>
                 </div>
        </div>)
    }
}

export default Footer 