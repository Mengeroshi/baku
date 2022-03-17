import styles from './CrowdloanHome.module.scss';

export const CrowdloanHome = () =>{
    return(
        <div className={styles.main}>
            <h1 className={styles.title}>Crowdloan</h1>
            <div className={styles.options}>
                <div className={styles.container}>
                    <h2 className={styles.optionTiitle}>For Projects</h2>
                    <button className={styles.button}>Register your project for crowdloand</button>
                </div>
                <div className={styles.container}>
                    <h2 className={styles.optionTiitle}>For Participants</h2>
                    <button className={styles.button}>Participate in crowdloan</button>
                </div>
            </div>
        </div>
    )
}

