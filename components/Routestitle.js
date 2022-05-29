import styles from '../styles/Home.module.css'

const Routestitle = (props) => {
    return (
        <div className={styles.routesTitle} data-testid="routesTitle">
            <h3>{props.text}</h3>
        </div>
    )
}

export default Routestitle