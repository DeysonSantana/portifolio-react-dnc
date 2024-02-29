import styles from './Navbar.module.css';
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'

function Navbar () {
    return (

        <div  className={styles.navbar}>
            <ul>
                <li><Nav.Link href='#Apresentacao'>Apresentaçao</Nav.Link></li>
                <li><Nav.Link href='#Habilidades'>Habilidades</Nav.Link></li>
                <li><Nav.Link href='#Project'>Projetos</Nav.Link></li>
            </ul>
            <ul>
                <li><a href="https://instagram.com"><FaInstagram size={30}/></a></li>
                <li><a href="https://linkedin.com"><FaLinkedin size={30}/></a></li>
                <li><a href="https://github.com/DeysonSantana"><FaGithub size={30}/></a></li>
            </ul>
        </div>
    )
}

export default Navbar