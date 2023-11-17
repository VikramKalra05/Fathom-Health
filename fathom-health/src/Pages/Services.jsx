import styles from "./main.module.css";
import { Link } from "react-router-dom";
import serviceStyles from "./services.module.css";

export default function Services(){
    return (
        <>
            <div className={styles.topBar} id={serviceStyles.topBar}>
                <h1>Medical coding automation services built for you</h1>
                <p>Fathom's AI seamlessly integrates into your workflow</p>
                <div>
                    <Link to="/contact">GET STARTED</Link>
                </div>
            </div>
            <div className={styles.newsBar}>
                <h1>Read NVIDIA's spotlight on Fathom: <Link to="/insights">The Cure for the Common Code</Link></h1>
            </div>
            <div className={serviceStyles.containerDiv}>
                <div className={serviceStyles.imageDiv}>
                    <img src="https://assets-global.website-files.com/5e6c01bb5212506d6c119069/5e8a616cf99d7caf1875c8a0_automation.svg" alt="Fathom AI" />
                </div>
                <div className={serviceStyles.containerText}>
                    <h3>AI-DRIVEN EFFICIENCY</h3>
                    <h1>Coding automation</h1>
                    <h2>Direct to bill. No human intervention required.</h2>
                    <p>Use our AI to ease the burden on your coding team. In one quick step, we can review your incoming charts, process the charts that can be coded by our system and then pass the remainder to your current coding operation, allowing them to focus on the most critical charts while drastically reducing your overall coding costs.</p>
                    <div className={styles.serviceBtn}>
                        <Link to="/contact">REQUEST A CALL</Link>
                    </div>
                </div>
            </div>
            <div className={serviceStyles.containerDiv}>
                <div className={serviceStyles.imageDiv}>
                    <img src="https://assets-global.website-files.com/5e6c01bb5212506d6c119069/5e8a6195a6b2c14cbeaa56fb_audit.svg" alt="Client Coder" />
                </div>
                <div className={serviceStyles.containerText}>
                    <h3>MITIGATE RISK</h3>
                    <h1>Audit complete</h1>
                    <h2>The world’s first comprehensive, real-time coding audit</h2>
                    <p>Use AI to check your coder or coding vendor’s work to ensure completion and accuracy. Our system looks at every coded chart and flags any that may represent a potential denial or unnecessary downcoding.</p>
                    <div className={styles.serviceBtn}>
                        <Link to="/contact">REQUEST A CALL</Link>
                    </div>
                </div>
            </div>
            <div className={styles.serviceDiv}>
                <p>BENEFITS</p>
                <h1>Faster, cheaper, and more accurate</h1>
                <p>Supercharge your medical coding operations</p>
                <div className={styles.serviceContainer}>
                    <div>
                        <img src="https://assets-global.website-files.com/5e6c01bb5212506d6c119069/5e81210fd802d6d4d78cc141_cost.svg" alt="cost" />
                        <h2>Cost</h2>
                        <p>Reduce the total cost of your coding operations by up to 50%.</p>
                    </div>
                    <div>
                        <img src="https://assets-global.website-files.com/5e6c01bb5212506d6c119069/5e81244ea7eca1517f971f83_scale.svg" alt="scale" />
                        <h2>Scale</h2>
                        <p>Effortlessly add the capacity to code millions of charts per day.</p>
                    </div>
                    <div>
                        <img src="https://assets-global.website-files.com/5e6c01bb5212506d6c119069/5e811b57a7eca1abcc96f85e_speed.svg" alt="speed" />
                        <h2>Speed</h2>
                        <p>Cut your coding turnaround by days, not hours or minutes.</p>
                    </div>
                    <div>
                        <img src="https://assets-global.website-files.com/5e6c01bb5212506d6c119069/5e81244e957e0aca8631fe64_reliability.svg" alt="reliability" />
                        <h2>Reliability</h2>
                        <p>Ensure that your coding operations never slow down or stop.</p>
                    </div>
                    <div>
                        <img src="https://assets-global.website-files.com/5e6c01bb5212506d6c119069/5e81250b9d7551effbcd8483_accuracy.svg" alt="accuracy" />
                        <h2>Accuracy</h2>
                        <p>Instantly reduce claim denials and mitigate audit risk.</p>
                    </div>
                    <div>
                        <img src="https://assets-global.website-files.com/5e6c01bb5212506d6c119069/5e81235429502fec7abc4315_security.svg" alt="security" />
                        <h2>Security</h2>
                        <p>Keep your PHI secure with industry leading technology and protocol.</p>
                    </div>
                </div>
                <div className={styles.serviceBtn}>
                    <Link to="/contact">REQUEST A CALL</Link>
                </div>
            </div>
        </>
    )
}