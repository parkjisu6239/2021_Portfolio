import styles from './Hello.module.css'

export default function Hello() {
    return (
        <section className={styles.hello}>
            <div className={styles.title}>
                <div>Hi, I am jisu!</div>
                <div><span className={styles.highlight}>Front-end</span> developer</div>
            </div>
            <div>
                <p>Thank you for watching my portfolio!</p>
                <p>I am a front-end developer, but also interested in back-end and big data.</p>
                <p>I like decorating, making, organizing, planning, and good at it.</p>
                <p>I am a developer who studies, grows steadily, and enjoys learning every day.</p>   
            </div>
            <div className={styles.btns}>
                <button>DownLoad Resume</button>
                <button>Go to GIt</button>
            </div>
        </section>
    )
}