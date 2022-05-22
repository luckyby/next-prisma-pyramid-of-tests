import styles from '../styles/Home.module.css'
import Recorditem from "./Recorditem";

const Recordblock = () => {
    return (
        <div className={styles.recordBlock}>

            <Recorditem  record_url = "http://localhost:3000/api/hello" record_url_title = 'http://localhost:3000/api/hello' record_remark = "for CITY_NAME='Kyiv' in .env"/>
            <Recorditem  record_url = "" record_url_title = '' record_text='Hello World' record_remark = ""/>

            <Recorditem  record_url = "http://localhost:3000/api/hello/Pan" record_url_title = 'http://localhost:3000/api/hello/&lt;lastname&gt;' record_remark = 'for lastname ="Pan"'/>
            <Recorditem  record_url = "" record_url_title = '' record_text='Hello Peter Pan' record_remark = ""/>

            <Recorditem  record_url = "http://localhost:3000/api/helloPan" record_url_title = 'http://localhost:3000/api/helloPan' record_remark = ''/>
            <Recorditem  record_url = "" record_url_title = '' record_text='Hello Pan with firstname Peter' record_remark = ""/>

            <Recorditem  record_url = "http://localhost:3000/api/weather" record_url_title = 'http://localhost:3000/api/weather' record_remark = 'for CITY_NAME="Kyiv" in .env'/>
            <Recorditem  record_url = "" record_url_title = '' record_text='&#123;"city":"Kyiv","description":"overcast clouds","temperature":17,"degree":"Celsius"&#125;'/>

            <Recorditem  record_url = "http://localhost:3000/api/weather/Lviv" record_url_title = 'http://localhost:3000/api/weather/&lt;cityname&gt;' record_remark = 'for cityname ="Lviv"'/>
            <Recorditem  record_url = "" record_url_title = '' record_text='&#123;"city":"Lviv","description":"overcast clouds","temperature":15,"degree":"Celsius"&#125;'/>

        </div>
    )
}

export default Recordblock