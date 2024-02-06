import Image from "next/image"
import styles from "./dashBoardSideNav.module.css"
import { MdAdjust, MdFormatAlignJustify, MdAdd, MdInfoOutline } from "react-icons/md";

const DashBoardSideNav = () => {
    return (
        <div className={styles.container}>
            <section className={styles.userInfo}>
                <div>
                    <Image
                        className={styles.userImage}
                        src="/static/images/avatar.jpg"
                        width={150}
                        height={150}
                        alt="Picture of the author" />
                </div>
                <div className={styles.userInfo}>
                    <p className={styles.userName}>Jane Doe</p>
                    <p className={styles.userBio}>
                        <span className={styles.userBioIcon}><MdAdjust /></span>
                        This is the Bio sections.
                    </p>
                </div>
            </section>
            <section className={styles.platformSect}>
                <div className={styles.platformHeading}>
                    <span className={`${styles.platformHeadingIcon} ${styles.platformHover}`}><MdFormatAlignJustify /></span>
                    <p className={`${styles.platformHeadingText} ${styles.platformHover}`}>Nextflix</p>
                </div>
                <div className={styles.platformHeading}>
                    <span className={`${styles.platformHeadingIcon} ${styles.platformHover}`}><MdFormatAlignJustify /></span>
                    <p className={`${styles.platformHeadingText} ${styles.platformHover}`}>Paramount Plus</p>
                </div>
                <div className={styles.platformHeading}>
                    <span className={`${styles.platformHeadingIcon} ${styles.platformHover}`}><MdFormatAlignJustify /></span>
                    <p className={`${styles.platformHeadingText} ${styles.platformHover}`}>Amazon Prime</p>
                </div>
                <div className={styles.platformHeading}>
                    <span className={`${styles.platformHeadingIcon} ${styles.platformHover}`}><MdFormatAlignJustify /></span>
                    <p className={`${styles.platformHeadingText} ${styles.platformHover}`}>Disney Plus</p>
                </div>
            </section>
            <section className={styles.dashBtns}>
                <button><MdAdd /></button>
                <button><MdInfoOutline /></button>
            </section>
        </div>
    )
}

export default DashBoardSideNav