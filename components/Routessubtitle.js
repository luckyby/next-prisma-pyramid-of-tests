import styles from'../styles/Home.module.css'

const Routessubtitle = (props) => {
    return (
        <div className={styles.routesSubtitle}>
            <div className={styles.routesSubtitleEndpoint}>
                <h3>{props.text1}</h3>
            </div>
            <div className={styles.routesSubtitleDescription}>
                <h3>{props.text2}</h3>
            </div>
        </div>
    )
}

export default Routessubtitle