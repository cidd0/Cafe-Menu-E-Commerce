import { MdEmail, MdPhone, } from "react-icons/md";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
    return(
        <div className="flex items-center justify-between border-t border-black px-20 py-6 bg-[#FFF8F1] relative z-10">
            <div >
                <h1 className="font-bold">Cafe</h1>
                <p>1111 A.Something Ave.,<br/>
                <span>Cubao, Quezon City</span></p>
            </div>
            <div>
                <p className="flex items-center gap-2">
                    <MdEmail />info.cafename@gmail.com
                </p>
                <p className="flex items-center gap-2">
                    <MdPhone />+63 900 123 1234
                </p>
            </div>
            <div>
                <p className="flex items-center gap-2">
                    <FaInstagram />@CafeName
                </p>
                <p className="flex items-center gap-2">
                    <FaFacebook />CafeName
                </p>
            </div>
        </div>
    )
}

export default Footer;