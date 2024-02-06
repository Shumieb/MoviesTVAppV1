import Footer from "../ui/Footer/footer"
import Header from "../ui/Header/header"

const layout = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default layout