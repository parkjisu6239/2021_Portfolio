import Image from 'next/image'
import profilePic from '../../../public/image/profile.jpg'
import styles from './ProfileImage.module.css'

export default function ProfileImage() {
    return (
        <section className={styles.profileImage}>
            <Image 
                layout="responsive"
                src={profilePic}
                alt="Picture of the author" />
        </section>
    )
}