import styles from "./main.module.css";
import { useState } from "react";
import insightsStyles from "./insights.module.css";
import { useToast } from '@chakra-ui/react'

export default function Insights(){
    const [ current, setCurrent ] = useState("AllPosts");
    const [ email, setEmail ] = useState("");
    const toast = useToast()
    var imgUrl;
    var heading;
    var desc
    var newsDetails = {
        imgUrl,
        heading,
        desc
    }

    const handleToast = () => {
        toast({
            title: 'Subscribed Successfully!',
            description: `Your email ${email}, has been registered`,
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
    }

    switch(current){
        case "AllPosts":
            newsDetails = {
                imgUrl: "https://assets-global.website-files.com/5e6c01bb8abd778fb77d8e0b/6549657b90111fec3dbabf10_5%20e-m%20coding%20scenarios-p-500.png",
                heading: "Unshackling medical practices through AI coding: Fathom featured in HealthData Management",
                desc: "Autonomous coding helps alleviate stress around evaluation and management coding updates by reducing errors, boosting efficiency, and helping staff burnout."
            };
            break;
        case "AI":
            newsDetails = {
                imgUrl: "https://assets-global.website-files.com/5e6c01bb8abd778fb77d8e0b/64a3774acf1eb93fad1b1884_rpa%20vs%20ai-p-500.png",
                heading: "The difference between autonomous coding and computer assisted coding",
                desc: "We are often asked, “What is the difference between Autonomous Coding and the Computer-Assisted Coding (CAC) systems that we currently use?” Though both result in coded charts, there are key differences. Computer-Assisted Coding (CAC) software tools like the ones of"
            }
            break;
        case "InTheNews":
            newsDetails = {
                imgUrl: "https://assets-global.website-files.com/5e6c01bb8abd778fb77d8e0b/6549657b90111fec3dbabf10_5%20e-m%20coding%20scenarios-p-500.png",
                heading: "Unshackling medical practices through AI coding: Fathom featured in HealthData Management",
                desc: "Autonomous coding helps alleviate stress around evaluation and management coding updates by reducing errors, boosting efficiency, and helping staff burnout."
            };
            break;
        case "IndustryNews":
            newsDetails = {
                imgUrl: "https://assets-global.website-files.com/5e6c01bb8abd778fb77d8e0b/6478ea84b7b51c1a39797334_753bb81d-ffdd-4c0b-9dd4-b598bf9e08e7-p-500.png",
                heading: "5 revenue cycle predictions for 2023",
                desc: "It's time to peer into our crystal ball as health systems head into 2023 battered but hopeful. As the patterns and procedures in a COVID-19 world have largely been normalized, the healthcare system will be able to focus more fully on day to day operations."
            }
            break;
        case "TeamStories":
            newsDetails = {
                imgUrl: "https://assets-global.website-files.com/5e6c01bb8abd778fb77d8e0b/64b171fc63ee05facb1ef9f3_Why%20I%20joined%20-%20Jacob-p-500.png",
                heading: "Why I joined Fathom: Jacob Hoffman",
                desc: "In this blog, Jacob Hoffman, Senior Software Engineer, tells the story of his decision to join Fathom to grow technically while solving important healthcare problems."
            }
            break;
        case "Insider":
            newsDetails = {
                imgUrl: "https://assets-global.website-files.com/5e6c01bb8abd778fb77d8e0b/649f57921cd02c75ecb06678_primary%20care%20coding-p-500.png",
                heading: "What should HIM directors prioritize to ensure medical coding quality?",
                desc: "As an HIM director, you’re likely looking for ways to reduce inefficiencies to boost your organization’s bottom line and ensure PHI security. Your medical coding team has the power to help you with both of those endeavors."
            }
            break;
        case "PressRelease":
            newsDetails = {
                imgUrl: "https://assets-global.website-files.com/5e6c01bb8abd778fb77d8e0b/64acbc97a0d76af4f23c796e_rocket%20for%20enoch-p-500.png",
                heading: "Fathom taps Enoch Shih as Chief Operating Officer",
                desc: "Fathom, the leader in medical coding automation, announced that Enoch Shih has joined the company's leadership team as Chief Operating Officer"
            }
            break; 
        default:
            break;                   
    }

    return (
        <>
            <div className={styles.topBar}>
                <h1>News, resources, and insights</h1>
                <p>The latest from the Fathom team on artificial intelligence, revenue cycle management, digital health and everything in between.</p>
            </div>
            <div className={insightsStyles.featured}>
                <img src="https://assets-global.website-files.com/5e6c01bb8abd778fb77d8e0b/64a49e435fab23fac750446a_optimal-p-800.png" alt="mountains" />
                <div className={insightsStyles.featuredNews}>
                    <p>PRESS RELEASES</p>
                    <h1>ApolloMD leverages Fathom autonomous medical coding to save costs and accelerate revenue cycle for 1,500+ physician group</h1>
                    <h4>Fathom is providing autonomous medical coding services to ApolloMD, a multispecialty, 1,500-physician group</h4>
                </div>
            </div>
            <div className={insightsStyles.newsChanger}>
                <button onClick={()=>setCurrent("AllPosts")}>All Posts</button>
                <button onClick={()=>setCurrent("AI")}>Artificial Intelligence</button>
                <button onClick={()=>setCurrent("InTheNews")}>In the news</button>
                <button onClick={()=>setCurrent("IndustryNews")}>Industry News</button>
                <button onClick={()=>setCurrent("TeamStories")}>Team Stories</button>
                <button onClick={()=>setCurrent("Insider")}>Insider</button>
                <button onClick={()=>setCurrent("PressRelease")}>Press Release</button>
            </div>
            <div className={insightsStyles.newsCont}>
                <News 
                    props={newsDetails}
                />
                <News 
                    props={newsDetails}
                />
                <News 
                    props={newsDetails}
                />
                <News 
                    props={newsDetails}
                />
                <News 
                    props={newsDetails}
                />
                <News 
                    props={newsDetails}
                />
            </div>
            <div className={styles.contactFooter} id={insightsStyles.contactFooter}>
                <h1>Stay up to date</h1>
                <div>
                    <div className={styles.serviceBtn}>
                        <input type="email" value={email} placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>
                    </div>                    
                    <div className={styles.serviceBtn}>
                        <button onClick={handleToast}>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
        </>
    )
}

const News = ({props}) => {
    return (
        <div className={insightsStyles.newsItem}>
            <img src={props.imgUrl} alt="news" />
            <p>IN THE NEWS</p>
            <h1>{props.heading}</h1>
            <h4>{props.desc}</h4>
        </div>
    )
}