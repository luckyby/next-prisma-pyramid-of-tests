import styles from "../styles/Home.module.css";
import Routestitle from "./Routestitle";
import Routessubtitle from "./Routessubtitle";
import Recorditem from "./Recorditem";

const Routesblock = () => {
    return (
            <div className={styles.routesBlock}>

                <div className={styles.routes}>

                    <Routestitle text='API routes can be accessed on endpoints:'/>

                    <Routessubtitle text1='end point:' text2='will return:'/>

                    <div className={styles.recordBlock}>

                        <Recorditem  prefix_record_url="/api" record_url = "/hello" record_url_title = 'http://localhost:3000/api/hello' record_remark = ""/>
                        <Recorditem  prefix_record_url="" record_url = "" record_url_title = '' record_text='Hello World' record_remark = ""/>

                        <Recorditem  prefix_record_url="/api" record_url = "/hello/Pan" record_url_title = 'http://localhost:3000/api/hello/&lt;lastname&gt;' record_remark = 'for &lt;lastname&gt; = Pan'/>
                        <Recorditem  prefix_record_url="" record_url = "" record_url_title = '' record_text='Hello Peter Pan' record_remark = ""/>

                        <Recorditem  prefix_record_url="/api" record_url = "/helloPan" record_url_title = 'http://localhost:3000/api/helloPan' record_remark = ''/>
                        <Recorditem  prefix_record_url="" record_url = "" record_url_title = '' record_text='Hello Pan with firstname Peter' record_remark = ""/>

                        <Recorditem  prefix_record_url="/api" record_url = "/weather" record_url_title = 'http://localhost:3000/api/weather' record_remark = 'for CITY_NAME="Kyiv" in .env'/>
                        <Recorditem  prefix_record_url="" record_url = "" record_url_title = '' record_text='&#123;"city":"Kyiv","description":"overcast clouds","temperature":17,"degree":"Celsius"&#125;'/>

                        <Recorditem  prefix_record_url="/api" record_url = "/weather/Lviv" record_url_title = 'http://localhost:3000/api/weather/&lt;cityname&gt;' record_remark = 'for &lt;cityname&gt; = Lviv'/>
                        <Recorditem  prefix_record_url="" record_url = "" record_url_title = '' record_text='&#123;"city":"Lviv","description":"overcast clouds","temperature":15,"degree":"Celsius"&#125;'/>

                    </div>
                </div>
                {/*<br/>*/}

                <div className={styles.routes}>

                    <Routestitle text='Server has the next pages:'/>

                    <div className={styles.recordBlock}>

                        <Recorditem  prefix_record_url="" record_url = "./about" record_url_title = 'http://localhost:3000/about' record_remark = ''/>
                        <Recorditem  prefix_record_url="" record_url = "" record_url_title = '' record_text=''/>

                        <Recorditem  prefix_record_url="" record_url = "./weather" record_url_title = 'http://localhost:3000/weather' record_remark = 'for CITY_NAME="Kyiv" in .env'/>
                        <Recorditem  prefix_record_url="" record_url = "" record_url_title = '' record_text=''/>

                    </div>
                    {/*<br/>*/}

                </div>
            </div>
            )
}

export default Routesblock