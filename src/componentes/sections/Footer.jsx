import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from './Footer.module.css'

function Footer () {
    return (

       <div className={styles.footer} >
            <ul>
            <li><a href="https://instagram.com"><FaInstagram size={30}/></a></li>
                <li><a href="https://linkedin.com"><FaLinkedin size={30}/></a></li>
                <li><a href="https://github.com/DeysonSantana"><FaGithub size={30}/></a></li>
            </ul>
            <p>Deyson Santana | Todos os direitos reservados.</p>
            <p>dsantana@santecweb.com.br</p>
       </div>
    )
}

export default Footer