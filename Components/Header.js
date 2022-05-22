import styles from "../styles/Home.module.css";

const Header = (props) => {

        const Tag1 = props.tag_1;
        const Tag2 = props.tag_2;

    return (

        <div className={styles.mainTitle}>
        <Tag1 >{props.main_title_1}</Tag1>
        <Tag2 >{props.main_title_2}</Tag2>
    </div>


    )
}

export default Header
