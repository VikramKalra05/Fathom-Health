import styles from "./main.module.css";
import { Link } from "react-router-dom";
import securityStyles from "./security.module.css";

export default function Security(){
    return (
        <>
            <div className={styles.topBar}>
                <h1>Security and compliance</h1>
                <p>Your data is our business so we take every step to safeguard it. Automated controls ensure your data remains protected.</p>
            </div>
            <div className={styles.serviceDiv}>
                <p>OUR APPROACH</p>
                <h1>Security in our DNA</h1>
                <div className={styles.serviceContainer}>
                    <div>
                        <img src="https://assets-global.website-files.com/5e6c01bb5212506d6c119069/5e81244e957e0aca8631fe64_reliability.svg" alt="Systems" />
                        <h2>Systems</h2>
                        <p>We build and maintain automated security solutions through a mix of proprietary and best in breed solutions.</p>
                    </div>
                    <div>
                        <img src="https://assets-global.website-files.com/5e6c01bb5212506d6c119069/5e857a4cc718423f23dda08f_people-2.svg" alt="People" />
                        <h2>People</h2>
                        <p>We select for and cultivate a culture of security awareness, placing the utmost emphasis on data security and privacy.</p>
                    </div>
                    <div>
                        <img src="https://assets-global.website-files.com/5e6c01bb5212506d6c119069/5e8574c4834740b09f4057bc_bc2.svg" alt="Iteration" />
                        <h2>Iteration</h2>
                        <p>We challenge assumptions about security and compliance best practices, pushing for optimal over sufficient.</p>
                    </div>
                </div>
            </div>
            <img src="https://assets-global.website-files.com/5e6c01bb5212506d6c119069/5e86539515c829932b1d60e1_dots-right.svg" alt="Horizontal Lines" className={styles.horRight} />
            <div className={securityStyles.auditDiv}>
                <div className={securityStyles.auditCont}>
                    <h4>COMPILANCE</h4>
                    <h1>Audited and certified</h1>
                    <h4>Fathom retained a leading Certified Public Accounting firm based on their world-class team of auditors and information security experts to conduct a thorough audit to verify Fathom's HIPAA and SOC 2 Type 2 compliance.</h4>
                    <div>
                        <div>
                            <div className={securityStyles.auditImg}>
                                <img src="https://assets-global.website-files.com/5e6c01bb5212506d6c119069/5e86954a8f5cc33a877e9dd9_noun_search%20results_1857794.svg" alt="hipaa" />
                            </div>
                            <div className={securityStyles.auditText}>
                                <h2>HIPAA</h2>
                                <p>HIPAA Compliance audits are designed to assess an organization’s risk management and regulatory compliance effectiveness. This includes the evaluation of the administrative, physical, and technical safeguards as they relate to the electronic protected health information (ePHI) an organization creates, receives, processes, maintains, and/or transmits; as well as the evaluation of the organization’s policies, procedures, and overall readiness to manage a breach of protected health information (PHI) in accordance with the notification requirements.</p>
                            </div>
                        </div>
                        <div>
                            <div className={securityStyles.auditImg}>
                                <img src="https://assets-global.website-files.com/5e6c01bb5212506d6c119069/5e86954ae8d8597a582fbb85_noun_Cloud%20Backup%20Service_1857750.svg" alt="SOC 2" />
                            </div>
                            <div className={securityStyles.auditText}>
                                <h2>SOC 2 Type 2</h2>
                                <p>Developed by the AICPA, SOC 2 is specifically designed for service providers storing customer data in the cloud. SOC 2 requires companies to establish and follow strict information security policies and procedures, encompassing the security, availability, processing, integrity, and confidentiality of customer data. SOC 2 ensures that a company’s information security measures are in line with the unique parameters of today’s cloud requirements.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={securityStyles.policy}>
                <p>POLICY AND PROCEDURES</p>
                <h1>A holistic approach to ensuring security of your data</h1>
                <h2>Fathom's systems drive excellence in security and compliance across all aspects of the organization.</h2>
                <div className={securityStyles.policyCont}>
                    <div className={securityStyles.policyItem}>
                        <img src="https://assets-global.website-files.com/5e6c01bb5212506d6c119069/5e8434eb0143265b38bfbb80_application%20security.svg" alt="Application security" />
                        <p>Application security</p>
                    </div>
                    <div className={securityStyles.policyItem}>
                        <img src="https://assets-global.website-files.com/5e6c01bb5212506d6c119069/5e8574c5248e59710009cee0_am2.svg" alt="Infrastucture security" />
                        <p>Infrastucture security</p>
                    </div>
                    <div className={securityStyles.policyItem}>
                        <img src="https://assets-global.website-files.com/5e6c01bb5212506d6c119069/5e83f26ee2c9cc50e8e483a4_systems.svg" alt="Business continuity" />
                        <p>Business continuity</p>
                    </div>
                    <div className={securityStyles.policyItem}>
                        <img src="https://assets-global.website-files.com/5e6c01bb5212506d6c119069/5e852b07248e595a1b086966_incident%20management.svg" alt="Incident management" />
                        <p>Incident management</p>
                    </div>
                    <div className={securityStyles.policyItem}>
                        <img src="https://assets-global.website-files.com/5e6c01bb5212506d6c119069/5e8574c5c7184262f5dd9061_data%20privacy.svg" alt="Data privacy and management" />
                        <p>Data privacy and management</p>
                    </div>
                    <div className={securityStyles.policyItem}>
                        <img src="https://assets-global.website-files.com/5e6c01bb5212506d6c119069/5e85762a776a815d26052a8e_threat.svg" alt="Threat and vulnerability management" />
                        <p>Threat and vulnerability management</p>
                    </div>
                    <div className={securityStyles.policyItem}>
                        <img src="https://assets-global.website-files.com/5e6c01bb5212506d6c119069/5e8574c628ae071b5d40ef28_disaster%20recovery.svg" alt="Disaster recovery" />
                        <p>Disaster recovery</p>
                    </div>
                    <div className={securityStyles.policyItem}>
                        <img src="https://assets-global.website-files.com/5e6c01bb5212506d6c119069/5e81244ea7eca1517f971f83_scale.svg" alt="Access management" />
                        <p>Access management</p>
                    </div>
                    <div className={securityStyles.policyItem}>
                        <img src="https://assets-global.website-files.com/5e6c01bb5212506d6c119069/5e85762af0055b184baad536_incident.svg" alt="Incident management" />
                        <p>Incident management</p>
                    </div>
                    <div className={securityStyles.policyItem}>
                        <img src="https://assets-global.website-files.com/5e6c01bb5212506d6c119069/5e852aa8f0055b3796a97583_workforce%20training.svg" alt="Workforce training" />
                        <p>Workforce training</p>
                    </div>
                </div>
            </div>
            <div className={securityStyles.reportDiv}>
                <h2>How to report security vulnerabilities to Fathom</h2>
                <p>We welcome reports from security researchers and experts about possible security vulnerabilities within our system. We are particularly interested in hearing about vulnerabilities that impact the confidentiality or integrity of protected health information, and have the potential to impact a large number of people.</p>
                <br />
                <p>If you believe you have discovered a possible security vulnerability, please file a report with our security team including information and detailed instructions about how to reproduce the issue. You can file your report by sending an email to <a href="mailto:security@fathomhealth.com?subject=SUBMISSION%3A%20security%20vulnerability">security@fathomhealth.com</a></p>
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