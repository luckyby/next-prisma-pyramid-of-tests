import styles from "../styles/Home.module.css";

const Recorditem = (props) => {

    return (

            <div className={styles.recordItem}>
                <a href={props.record_url}>{props.record_url_title}</a>
                <span>{props.record_text}</span>
                <div className={styles.routesRemark}>{props.record_remark}</div>
            </div>

    );
}

export default Recorditem;
