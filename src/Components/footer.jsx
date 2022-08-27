import {Facebook} from '@material-ui/icons';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Footer = () => {
    return (
        <>
            <div className="mainfooter" role="contentinfo">
                <div className="footer-middle">
                    <div className="container">
                        <div className="row footerSection">
                            <div className="col-md-3 col-sm-6">
                                <div className="footer-pad">
                                    <h2>Helpful Links</h2>

                                    <div className="footerLinkSection"><span> > </span><span className="footerLinks">Register Free</span>
                                    </div>
                                    <div className="footerLinkSection"><span> > </span><span
                                        className="footerLinks">Login</span></div>
                                    <div className="footerLinkSection"><span> > </span><span className="footerLinks">Partner Search</span>
                                    </div>
                                    <div className="footerLinkSection"><span> > </span><span
                                        className="footerLinks">MemberShips</span></div>
                                    <div className="footerLinkSection"><span> > </span><span className="footerLinks">Success stories</span>
                                    </div>
                                    <div className="footerLinkSection"><span> > </span><span className="footerLinks">Matrimony Blog</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="footer-pad">
                                    <h2>Company</h2>
                                    <div className="footerLinkSection"><span> > </span><span className="footerLinks">About us</span>
                                    </div>
                                    <div className="footerLinkSection"><span> > </span><span
                                        className="footerLinks">Careers</span></div>
                                    <div className="footerLinkSection"><span> > </span><span className="footerLinks">Personalized Matchmaking</span>
                                    </div>
                                    <div className="footerLinkSection"><span> > </span><span className="footerLinks">Plan your Wedding</span>
                                    </div>
                                    <div className="footerLinkSection"><span> > </span><span
                                        className="footerLinks">SiteMap</span></div>
                                    <div className="footerLinkSection"><span> > </span><span className="footerLinks">Contact us</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="footer-pad">
                                    <h2>Privacy & You</h2>
                                    <div className="footerLinkSection"><span> > </span><span className="footerLinks">Privacy Policy</span>
                                    </div>
                                    <div className="footerLinkSection"><span> > </span><span className="footerLinks">Refund Policy</span>
                                    </div>
                                    <div className="footerLinkSection"><span> > </span><span className="footerLinks">Terms of use</span>
                                    </div>
                                    <div className="footerLinkSection"><span> > </span><span
                                        className="footerLinks">FAQ</span></div>
                                </div>
                            </div>
                            <div className="col-md-3 contantUs">
                                <h4>Contact Us</h4>
                                <div className="footerAddress">
                                    <div className="contactAddress">117/k/43, #F1 1st Floor, Sarvodaya Nagar,
                                        Kanpur-208025
                                    </div>
                                    <div className="contactAddress">Phone: +91-8303930001 / +91-8303930005</div>
                                    <div>E-Mail: <span className="mailId">Info@Truelymarry.com</span></div>
                                    <div className="contactIcons">
                                        <div className="iconSocialMedia"><Facebook/></div>
                                        <div className="iconSocialMedia"><TwitterIcon/></div>
                                        <div className="iconSocialMedia"><InstagramIcon/></div>
                                        <div className="iconSocialMedia"><PinterestIcon/></div>
                                        <div className="iconSocialMedia"><LinkedInIcon/></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 copy">
                                <p className="text-center">&copy; Copyright 2010 - 2022 TruelyMarry.com. All rights
                                    reserved.</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )

}
export default Footer;