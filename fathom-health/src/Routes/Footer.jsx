import { Link } from "react-router-dom";
import styles from "./footer.module.css";

export default function Footer(){
    return (
        <div className={styles.footer}>
            <div className={styles.footerTop}>
                <div className={styles.footerLeft}>
                    <Link to="/">
                        <img src="https://assets-global.website-files.com/5e6c01bb5212506d6c119069/5e6edda6e64d7d84dcdae233_logo-white.png" alt="FATHOM" />
                    </Link>
                    <p>Medical coding automation</p>
                    <div>
                        <div className={styles.logo}>
                            <img src="https://assets-global.website-files.com/5e6c01bb5212506d6c119069/5e6c01bb8abd7762ed7d8e63_twitter.svg" alt="Twitter Logo" />
                        </div>
                        <div className={styles.logo}>
                            <img src="https://assets-global.website-files.com/5e6c01bb5212506d6c119069/5e6c01bb8abd7768627d8e5d_linkedin.svg" alt="LinkedIn" />
                        </div>
                        <div className={styles.logo}>
                            <img src="https://assets-global.website-files.com/5e6c01bb5212506d6c119069/5e802c87d802d6155e87a90f_angel%20list.svg" alt="Angel List" />
                        </div>
                    </div>
                </div>
                <div className={styles.footerRight}>
                    <div>
                        <h2>Technology</h2>
                        <p>Solutions</p>
                        <p>Security</p>
                    </div>
                    <div>
                        <h2>Company</h2>
                        <p>Team</p>
                        <p>Contact</p>
                        <p>Careers</p>
                    </div>
                    <div>
                        <h2>Legal</h2>
                        <p>Privacy Policy</p>
                        <p>Cookies</p>
                    </div>
                    <div>
                        <h2>Resources</h2>
                        <p>Articles</p>
                        <p>RFP guide for medical coding</p>
                        <p>Medical coding automation checklist</p>
                    </div>
                </div>
            </div>
            <div className={styles.footerBottom}>
                © Fathom, Inc. 2023
            </div>
        </div>
    );
}