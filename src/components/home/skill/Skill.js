import RadarChart from "./RadarChart";
import Language from "./Language";
import styles from './Skill.module.css'

export default function Skill() {
    const skill = require('../../../db/skill.json')
    return (
        <article className={styles.skill}>
            <div className={styles.title}>Skill</div>
            <div className={styles.skillContainer}>
                <RadarChart chart={skill.chart}/>
                <Language progress={skill.progress}/>
            </div>
        </article>
    )
}