import Link from "next/link";
import styles from "./header.module.css"
import { MdLiveTv, MdOutlineHome, MdDashboard, MdOutlineDragIndicator } from "react-icons/md";

const Header = () => {
    return (
        <header className={styles.container}>
            <div className={styles.logo}>
                <Link href={"/"} className={styles.headingSect}>
                    <span className={styles.headingIcon}><MdLiveTv /></span>
                    <span className={styles.heading}>My Movie+TV App</span>
                </Link>
            </div>
            <nav className={styles.navlinks}>
                <ul>
                    <li className={styles.navlink}>
                        <Link href={"/"} >
                            <span className={styles.linkIcon}><MdOutlineHome /></span>
                            <span> Home</span>
                        </Link>
                    </li>
                    <li className={styles.navlink}>
                        <Link href={"/dashboard"} >
                            <span className={styles.linkIcon}><MdDashboard /></span>
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li className={styles.navlink}>
                        <Link href={"/about"} >
                            <span className={styles.linkIcon}><MdOutlineDragIndicator /></span>
                            <span>About</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header >
    )
}

export default Header