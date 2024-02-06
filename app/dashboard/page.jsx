import Link from "next/link";
import { MdOutlineHome, MdOutlineDragIndicator } from "react-icons/md";

const Dashboard = () => {
    return (
        <div>
            <section>
                <Link href={"/"}>
                    <span><MdOutlineHome /></span>
                    <span>Home</span>

                </Link>
                <Link href={"/about"}>
                    <span><MdOutlineDragIndicator /></span>
                    <span>About</span>
                </Link>
            </section>
        </div>
    )
}

export default Dashboard