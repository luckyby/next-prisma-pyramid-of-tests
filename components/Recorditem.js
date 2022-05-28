import styles from "../styles/Home.module.css";
import Link from "next/link";

const Recorditem = (props) => {

    return (

        <div className={styles.recordItem}>
            <Link href={`.${props.prefix_record_url}${props.record_url} `}>
                <a >{props.record_url_title}</a>
            </Link>
            <span >{props.record_text}</span>
            <div className={styles.routesRemark}>{props.record_remark}</div>
        </div>

    );
}

export default Recorditem;
