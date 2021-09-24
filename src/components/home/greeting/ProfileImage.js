
import styles from './ProfileImage.module.css'

export default function ProfileImage() {
    return (
        <section className={styles.profileImage}>
            <img src={ `assets/home/hello.png` }/>
        </section>
    )
}