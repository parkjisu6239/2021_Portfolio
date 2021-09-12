import Hello from "./Hello";
import ProfileImage from "./ProfileImage";
import styles from './Greeting.module.css'

export default function Greeting() {
    return (
        <article className={styles.gretting}>
            <Hello/>
            <ProfileImage/>
        </article>
    )
}