import DashBoardSideNav from "../ui/DashboardComponents/dashBoardSideNav"
import Footer from "../ui/Footer/footer"
import styles from "./dashboard.module.css"

const layout = ({ children }) => {
    return (
        <div>
            <div className={styles.container}>
                <section className={styles.sideNav}>
                    <DashBoardSideNav />
                </section>
                <section className={styles.main}>
                    {children}
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default layout