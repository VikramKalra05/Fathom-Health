import styles from "./main.module.css";
import { Link } from "react-router-dom";
import teamStyles from "./team.module.css";

export default function Team(){
    return (
        <>  
            <div className={styles.topBar} id={teamStyles.topBar}>
                <h1>On a mission to structure the world's healthcare data</h1>
                <p>Fathom has brought together a world-class team of technologists, designers, and business people to fix one of the most broken parts of the healthcare system.</p>
                <div>
                    <Link to="/careers">EXPLORE CAREERS</Link>
                </div>
            </div>
            <img className={styles.dots} src="https://assets-global.website-files.com/5e6c01bb5212506d6c119069/5e80153f9d7551fe59c817f0_dots.svg" alt="dots" />
            <div className={styles.newsBar}>
                <h1>Fathom featured in <Link to="/insights">9 Startups Engineers Are Leaving Facebook For</Link></h1>
            </div>
            <div className={teamStyles.teamDiv}>
                <h1>Meet the team</h1>
                <div className={teamStyles.teamMembers}>
                    <div>
                        <img src="https://assets-global.website-files.com/5e6c01bb5212506d6c119069/5e8589ea8a97133905fdafa0_andrew.svg" alt="person" />
                        <h1>Andrew</h1>
                        <h2>CEO</h2>
                    </div>
                    <div>
                        <img src="https://assets-global.website-files.com/5e6c01bb5212506d6c119069/5e8589ea8a97133905fdafa0_andrew.svg" alt="person" />
                        <h1>Andrew</h1>
                        <h2>CEO</h2>
                    </div>
                    <div>
                        <img src="https://assets-global.website-files.com/5e6c01bb5212506d6c119069/5e8589ea8a97133905fdafa0_andrew.svg" alt="person" />
                        <h1>Andrew</h1>
                        <h2>CEO</h2>
                    </div>
                    <div>
                        <img src="https://assets-global.website-files.com/5e6c01bb5212506d6c119069/5e8589ea8a97133905fdafa0_andrew.svg" alt="person" />
                        <h1>Andrew</h1>
                        <h2>CEO</h2>
                    </div>
                    <div>
                        <img src="https://assets-global.website-files.com/5e6c01bb5212506d6c119069/5e8589ea8a97133905fdafa0_andrew.svg" alt="person" />
                        <h1>Andrew</h1>
                        <h2>CEO</h2>
                    </div>
                    <div>
                        <img src="https://assets-global.website-files.com/5e6c01bb5212506d6c119069/5e8589ea8a97133905fdafa0_andrew.svg" alt="person" />
                        <h1>Andrew</h1>
                        <h2>CEO</h2>
                    </div>
                    <div>
                        <img src="https://assets-global.website-files.com/5e6c01bb5212506d6c119069/5e8589ea8a97133905fdafa0_andrew.svg" alt="person" />
                        <h1>Andrew</h1>
                        <h2>CEO</h2>
                    </div>
                    <div>
                        <img src="https://assets-global.website-files.com/5e6c01bb5212506d6c119069/5e8589ea8a97133905fdafa0_andrew.svg" alt="person" />
                        <h1>Andrew</h1>
                        <h2>CEO</h2>
                    </div>
                    <div>
                        <img src="https://assets-global.website-files.com/5e6c01bb5212506d6c119069/5e8589ea8a97133905fdafa0_andrew.svg" alt="person" />
                        <h1>Andrew</h1>
                        <h2>CEO</h2>
                    </div>
                    <div>
                        <img src="https://assets-global.website-files.com/5e6c01bb5212506d6c119069/5e8589ea8a97133905fdafa0_andrew.svg" alt="person" />
                        <h1>Andrew</h1>
                        <h2>CEO</h2>
                    </div>
                    <div>
                        <img src="https://assets-global.website-files.com/5e6c01bb5212506d6c119069/5e8589ea8a97133905fdafa0_andrew.svg" alt="person" />
                        <h1>Andrew</h1>
                        <h2>CEO</h2>
                    </div>
                    <div>
                        <img src="https://assets-global.website-files.com/5e6c01bb5212506d6c119069/5e8589ea8a97133905fdafa0_andrew.svg" alt="person" />
                        <h1>Andrew</h1>
                        <h2>CEO</h2>
                    </div>
                </div>
            </div>
            <div className={teamStyles.investors}>
                <h1>Fortunate to be backed by world-class investors</h1>
                <div className={teamStyles.investorsList}>
                    <div>
                        <img src="https://assets-global.website-files.com/5e6c01bb5212506d6c119069/5ea20b35249c08cdb3393fef_tarsadia.svg" alt="Tarsadia" />
                        <h1>TARSADIA</h1>
                    </div>
                    <div>
                        <img src="https://assets-global.website-files.com/5e6c01bb5212506d6c119069/638fd581a94ad92fff245e78_lightspeed.svg" alt="Lightspeed" />
                        <h1>LIGHTSPEED</h1>
                    </div>
                    <div>
                        <img src="https://assets-global.website-files.com/5e6c01bb5212506d6c119069/638fd5fc3c6c0054d1c3a324_alkeon.svg" alt="Alkleon" />
                        <h1>ALKLEON</h1>
                    </div>
                    <div>
                        <img src="https://assets-global.website-files.com/5e6c01bb5212506d6c119069/5ea20cc4a9bb6c61ceb12d53_gv.svg" alt="Formely Google Ventures" />
                        <h1>FORMERLY GOOGLE VENTURES</h1>
                    </div>
                    <div>
                        <img src="https://assets-global.website-files.com/5e6c01bb5212506d6c119069/5ea211634ec0809b10070bec_ff.svg" alt="Founders Fund" />
                        <h1>FOUNDERS FUND</h1>
                    </div>
                </div>
            </div>
            <div className={styles.contactFooter}>
                <h1>Looking to make an impact?</h1>
                <div>
                    <div className={styles.serviceBtn}>
                        <Link to="/careers">EXPLORE CAREERS</Link>
                    </div>                    
                </div>
            </div>
        </>
    )
}