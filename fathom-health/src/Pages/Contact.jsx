import styles from "./main.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import contactStyles from "./contact.module.css";
import { useToast } from '@chakra-ui/react'

export default function Contact(){
    const [ firstName, setFirstName ] = useState(""); 
    const [ lastName, setLastName ] = useState(""); 
    const [ email, setEmail ] = useState(""); 
    const [ phNumber, setPhNumber ] = useState(""); 
    const [ message, setMessage ] = useState(""); 
    const [ subscription, setSubscription ] = useState(false); 
    const toast = useToast()
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted");
        toast({
            title: 'Contact Form Submitted',
            description: `
                            ${firstName} ${lastName} has been registered.
                            Email: ${email},
                            Phone Number: ${phNumber},
                            Message: ${message}                
                        `,
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
    }

    return (
        <>  
            <div className={styles.topBar}>
                <h1>Ready to supercharge your coding operations?</h1>
                <p>Request a call to get a free analysis of your coding operations to demonstrate what Fathom can do for you.</p>
            </div>
            <div className={contactStyles.main}>
                <div className={contactStyles.contactForm}>
                    <form onSubmit={handleSubmit}>
                        <h1>Request a call</h1>
                        <h2>Our team would love to work with you to understand your current operation and provide a free automation ROI analysis.</h2>
                        <h3>First Name<span>*</span></h3>
                        <input type="text" placeholder="First Name" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                        <h3>Last Name<span>*</span></h3>
                        <input type="text" placeholder="Last Name" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                        <h3>Company Email<span>*</span></h3>
                        <input type="email" placeholder="Company Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        <h3>Phone Number<span>*</span></h3>
                        <input type="number" placeholder="Phone Number" value={phNumber} onChange={(e)=>setPhNumber(e.target.value)}/>
                        <h3>Message</h3>
                        <input type="text" placeholder="Message" value={message} onChange={(e)=>setMessage(e.target.value)}/>
                        <br />
                        <input type="checkbox" value={subscription} onChange={()=>setSubscription(!subscription)} id="subsciption"/>
                        <label htmlFor="subscription">Yes, I want to subscribe to Fathom blog updates.</label>
                        <br />
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
                <div className={contactStyles.helpDiv}>
                    <div>
                        <h2>Not ready for a call yet?</h2>
                        <p>We would love to send you some additional details.</p>
                        <Link to="/careers">REQUEST A WHITE PAPER</Link>
                    </div>
                    <div>
                        <h2>Interested in career opportunities with Fathom?</h2>
                        <p>Check our our open positions at the link below.</p>
                        <Link to="/careers">EXPLORE CAREERS</Link>
                    </div>
                    <div>
                        <Link to="/careers">
                            <img src="https://cdn2.hubspot.net/hubfs/6570376/hub_generated/resized/1af430d8-cc35-4ae0-8e0c-23bdaad97d25.png" alt="ad" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className={contactStyles.detailsDiv}>
                <h1>Other ways to get in touch</h1>
                <p>Interested in career opportunities with Fathom? Check out our <Link to="/careers">current openings</Link> or email <a href="mailto:careers@fathomhealth.com">careers@fathomhealth.com</a>.</p>
                <div className={contactStyles.detailsCont}>
                    <div>
                        <img src="https://assets-global.website-files.com/5e6c01bb5212506d6c119069/5e8751b7aa63f43e28b8e2bb_noun_Email_3215035.svg" alt="email" />
                        <h1>Email</h1>
                        <p>hi@fathomhealth.com</p>
                    </div>
                    <div>
                        <img src="https://assets-global.website-files.com/5e6c01bb5212506d6c119069/5e8751eb6b2b0379acfd3ce3_noun_chatting_2986337.svg" alt="chat" />
                        <h1>Chat</h1>
                        <p>
                            Monday - Friday
                            9am - 7pm PST
                        </p>
                    </div>
                    <div>
                        <img src="https://assets-global.website-files.com/5e6c01bb5212506d6c119069/5e8a0475f99d7c5ee4735bc0_noun_golden%20gate%20bridge_1982072.svg" alt="San Fransisco" />
                        <h1>San Fransisco</h1>
                        <p>
                            51 Federal Street
                            Suite 204
                            San Francisco, CA 94107
                        </p>
                    </div>
                    <div>
                        <img src="https://assets-global.website-files.com/5e6c01bb5212506d6c119069/6478cd30e0c7db55c37190d0_noun-dubai-4868974-293240.svg" alt="New York" />
                        <h1>New York</h1>
                        <p>
                            26 Broadway
                            Suite 353
                            New York, NY 10004
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}