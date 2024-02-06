import styles from "./footer.module.css"

const Footer = () => {
    return (
        <footer className={styles.container}>
            <p> &copy; 2024  </p>
            <p>Created by: <span className={styles.name}>Shumie</span></p>
        </footer>
    )
}

export default Footer