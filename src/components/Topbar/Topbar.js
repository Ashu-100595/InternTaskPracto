import React, { Component } from 'react'
import classes from './Topbar.module.css'

class Topbar extends React.Component{
    render(){
        return(
            <div className={classes.navbarWrapper}>
                <div className={classes.navLeft}>
                   <img src="https://www.practo.com/nav/9.5.1/consumer/images/practo.svg" alt="Logo" className={classes.logo} />
                </div>
                <div className={classes.navMid}>
                    <div className={classes.menuTabsWrapper}>
                        <div className={classes.menuTabs}>Doctors</div>
                        <div className={classes.menuDesc}>Book an appointment</div>
                    </div>
                    <div className={classes.menuTabsWrapper}>    
                        <div className={classes.menuTabs}>Consult</div>
                        <div className={classes.menuDesc}>Consult with top doctors</div>
                    </div>
                    <div className={classes.menuTabsWrapper}>
                        <div className={classes.menuTabs}>Pharmacy</div>
                        <div className={classes.menuDesc}>Medicines & health products</div>
                    </div>
                    <div className={classes.menuTabsWrapper}>
                        <div className={classes.menuTabs}>Diagnostics</div>
                        <div className={classes.menuDesc}>Book tests & checkups</div>
                    </div>
                </div>
                <div className={classes.navRight}>
                    <span className={classes.rightMenuItem}>For Providers</span>
                    <i class="fas fa-chevron-down"></i>
                    <span className={classes.rightMenuItem}>Security & help</span>
                    <i class="fas fa-chevron-down"></i>
                    <button className={classes.navBtn}>Login/Signup</button>
                </div>
            </div>
        )
    }
}

export default Topbar 