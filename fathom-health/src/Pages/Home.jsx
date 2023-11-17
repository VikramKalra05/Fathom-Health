import styles from "./main.module.css"
import { Link } from "react-router-dom"
import homeStyles from "./home.module.css"

export default function Home(){
    return (
        <>
            <div className={styles.topBar}>
                <h1>AI built for medical coding</h1>
                <p>What if you had a coder who could code millions of charts per day at unparalleled accuracy and cost?</p>
                <div>
                    <Link to="/contact">GET STARTED</Link>
                </div>
            </div>
            <img className={styles.dots} src="https://assets-global.website-files.com/5e6c01bb5212506d6c119069/5e80153f9d7551fe59c817f0_dots.svg" alt="dots" />
            <div className={styles.newsBar}>
                <h1>We are pleased to announce our $46M Series B. <Link to="/insights">Read the press release.</Link></h1>
            </div>
            <div className={styles.serviceDiv}>
                <p>SERVICES</p>
                <h1>Coding services tailored to your workflow</h1>
                <div className={styles.serviceContainer}>
                    <div>
                        <img src="https://assets-global.website-files.com/5e6c01bb5212506d6c119069/5e811cc79d75515e2ecd54be_automation.svg" alt="Production Coding" />
                        <h2>Production coding</h2>
                        <p>Fully automate upwards of 80% of your coding volumes direct to bill. No human intervention required.</p>
                    </div>
                    <div>
                        <img src="https://assets-global.website-files.com/5e6c01bb5212506d6c119069/5e85762af0055b184baad536_incident.svg" alt="Backlog Processing" />
                        <h2>Backlog processing</h2>
                        <p>Dealing with staffing challenges or seasonal spikes? Get on-demand coding capacity with Fathom.</p>
                    </div>
                    <div>
                        <img src="https://assets-global.website-files.com/5e6c01bb5212506d6c119069/5e811cc7dc544573caf55a0b_audit.svg" alt="Real-time Audit" />
                        <h2>Real-time audit</h2>
                        <p>Use Fathom to review the work of your coding team, editing errors and flagging problematic coding for review.</p>
                    </div>
                </div>
                <div className={styles.serviceBtn}>
                    <Link to="/services">EXPLORE SERVICES</Link>
                </div>
            </div>
            <div className={homeStyles.videoDiv}>
                <div className={homeStyles.vidLeft}>
                    <div>
                        <a href="https://vimeo.com/862457206" target="_blank">
                            <img src="https://i.vimeocdn.com/video/1721346515-984527c025e4ede93e78ed26cb102271da65e91bd711962d77ee3cfb39fca75e-d_1280" alt="Building"/>
                        </a>
                    </div>
                    <div>
                        <a href="https://vimeo.com/862469253" target="_blank">
                            <img src="https://i.vimeocdn.com/video/1721332105-a7091606a461a2fc2c08af83dd221f7890e3590d9befec6d66a8d1609e77aa17-d_1280" alt="Amy Katnik" />
                        </a>
                        <a href="https://vimeo.com/862464433" target="_blank">
                            <img src="https://i.vimeocdn.com/video/1721326730-4acd85b572bb691ec505ca1c06aab584d67f13b4e219e33243fc60466e3dc166-d_1280" alt="Anthony Maschitti" />
                        </a>
                        <a href="https://vimeo.com/862467404" target="_blank">
                            <img src="https://i.vimeocdn.com/video/1721353973-443be87bc015c3b2759f8f10f8b693fd33c51521ed7fa8bf92566f7e02a1af86-d_1280" alt="Dr. Michael Lipscomb" />
                        </a>
                    </div>
                </div>
                <div className={homeStyles.vidRight}>
                    <p>CLIENT TESTIMONIALS</p>
                    <h1>Don't take our word for it.</h1>
                    <p>Hear directly from senior operations, IT, and clinical leaders who trust Fathom automation for their coding needs.</p>
                    <div className={styles.serviceBtn}>
                        <Link to="/contact">REQUEST A CALL</Link>
                    </div>
                </div>
            </div>
            <div className={styles.uniqueDiv}>
                <p>UNIQUE SCALE</p>
                <h1>Fathom codes across</h1>
                <div className={styles.boldItems}>
                    <div>
                        <h1>2K+</h1>
                        <p>PROVIDER SITES</p>
                    </div>
                    <div>
                        <h1>20M+</h1>
                        <p>ENCOUNTERS</p>
                    </div>
                    <div>
                        <h1>3K+</h1>
                        <p>PROVIDERS</p>
                    </div>
                </div>
            </div>
            <img src="https://assets-global.website-files.com/5e6c01bb5212506d6c119069/5e86784321e17d5b3e1ca947_dots-left.svg" alt="horizontal Lines" className={homeStyles.horLeft} />
            <div className={styles.serviceDiv}>
                <p>BENEFITS</p>
                <h1>Cost, speed, and accuracy</h1>
                <p>No need to make trade-offs, choose all three</p>
                <div className={styles.serviceContainer}>
                    <div>
                        <img src="https://assets-global.website-files.com/5e6c01bb5212506d6c119069/5e81210fd802d6d4d78cc141_cost.svg" alt="cost" />
                        <h2>Cost</h2>
                        <p>Reduce the total cost of your coding operations by up to 50%.</p>
                    </div>
                    <div>
                        <img src="https://assets-global.website-files.com/5e6c01bb5212506d6c119069/5e81250b9d7551effbcd8483_accuracy.svg" alt="accuracy" />
                        <h2>Accuracy</h2>
                        <p>Instantly reduce claim denials and mitigate audit risk.</p>
                    </div>
                    <div>
                        <img src="https://assets-global.website-files.com/5e6c01bb5212506d6c119069/5e811b57a7eca1abcc96f85e_speed.svg" alt="speed" />
                        <h2>Speed</h2>
                        <p>Cut your coding turnaround by days, not hours or minutes.</p>
                    </div>
                    <div>
                        <img src="https://assets-global.website-files.com/5e6c01bb5212506d6c119069/5e81244ea7eca1517f971f83_scale.svg" alt="scale" />
                        <h2>Scale</h2>
                        <p>Effortlessly add the capacity to code millions of charts per day.</p>
                    </div>
                    <div>
                        <img src="https://assets-global.website-files.com/5e6c01bb5212506d6c119069/5e81244e957e0aca8631fe64_reliability.svg" alt="reliability" />
                        <h2>Reliability</h2>
                        <p>Ensure that your coding operations never slow down or stop.</p>
                    </div>
                    <div>
                        <img src="https://assets-global.website-files.com/5e6c01bb5212506d6c119069/5e81235429502fec7abc4315_security.svg" alt="security" />
                        <h2>Security</h2>
                        <p>Keep your PHI secure with industry leading technology and protocol.</p>
                    </div>
                </div>
                <div className={styles.serviceBtn}>
                    <Link to="/contact">SCHEDULE A CALL</Link>
                </div>
            </div>
            <img src="https://assets-global.website-files.com/5e6c01bb5212506d6c119069/5e86784321e17d5b3e1ca947_dots-left.svg" alt="horizontalLines" className={styles.horRight} />
            <div className={styles.uniqueDiv}>
                <h1>Industry news and insights</h1>
                <p>Stay up to date with the latest from the Fathom team</p>
                <div className={styles.boldItems}>
                    <div className={styles.boldItem}>
                        <img src="https://assets-global.website-files.com/5e6c01bb8abd778fb77d8e0b/64a49e435fab23fac750446a_optimal-p-500.png" alt="mountains" />
                        <p>PRESS RELEASES</p>
                        <h2>ApolloMD leverages Fathom autonomous medical coding to save costs and accelerate revenue cycle for 1,500+ physician group</h2>
                        <h3>Fathom is providing autonomous medical coding services to ApolloMD, a multispecialty, 1,500-physician group</h3>
                    </div>
                    <div className={styles.boldItem}>
                        <img src="https://assets-global.website-files.com/5e6c01bb8abd778fb77d8e0b/64a49e435fab23fac750446a_optimal-p-500.png" alt="mountains" />
                        <p>PRESS RELEASES</p>
                        <h2>ApolloMD leverages Fathom autonomous medical coding to save costs and accelerate revenue cycle for 1,500+ physician group</h2>
                        <h3>Fathom is providing autonomous medical coding services to ApolloMD, a multispecialty, 1,500-physician group</h3>
                    </div>
                    <div className={styles.boldItem}>
                        <img src="https://assets-global.website-files.com/5e6c01bb8abd778fb77d8e0b/64a49e435fab23fac750446a_optimal-p-500.png" alt="mountains" />
                        <p>PRESS RELEASES</p>
                        <h2>ApolloMD leverages Fathom autonomous medical coding to save costs and accelerate revenue cycle for 1,500+ physician group</h2>
                        <h3>Fathom is providing autonomous medical coding services to ApolloMD, a multispecialty, 1,500-physician group</h3>
                    </div>
                </div>
            </div>

            <div className={styles.contactFooter}>
                <h1>Ready to get started?</h1>
                <div>
                    <div className={styles.serviceBtn}>
                        <Link to="/contact">SCHEDULE A CALL</Link>
                    </div>                    
                    <div className={styles.serviceBtn}>
                        <Link to="/contact">REQUEST A QUOTE</Link>
                    </div>
                </div>
            </div>
        </>
    )
}