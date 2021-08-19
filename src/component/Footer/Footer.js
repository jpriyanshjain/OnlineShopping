import "./Footer.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
function Footer() {
    return (
        <footer className="footer">
            <div className="footer__info">
                    <div className="footer__info--newsletter">
                        <p className="footer__info--newsletter--text">
                            SUBSCRIBE TO OUR NEWSLETTER
                        </p>
                    <input type="email" className="footer__info--newsletter--input" placeholder="Start typing your email..." />
                    </div>
                <div className="footer__socalMedia">
                    <p>JOIN US ON : </p>
                    <div className="footer__socalMedia--icons">
                        <div className="footer__socalMedia--icons--icon">
                            <FacebookIcon />
                        </div>
                        <div className="footer__socalMedia--icons--icon">
                            <InstagramIcon/>
                        </div>
                        <div className="footer__socalMedia--icons--icon">
                        <TwitterIcon />                                        
                        </div>
                    </div>
                 </div>
            </div>
                 <div className="footer__policy">
                    <div className="footer__termsAndConditions">
                        <p>TERMS & CODITION POLICY</p>
                    </div>
                    <div className="footer__copyright">
                    <p>
                    © 2021 ShopOnline All Rights Reserved 
                        </p>
                    </div>
                 </div>
        </footer>
    )
}

export default Footer
