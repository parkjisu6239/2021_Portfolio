import NavBar from "./NavBar";
import styles from './Top.module.css'

export default function Top() {
    return (
        <header className={styles.main_header}>
            <div>🌞</div>
            <NavBar/>
        </header>
    )
}