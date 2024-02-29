import styles from './Projects.module.css' 
import ButtonB  from '../elements/ButtonB'
import Card from '../elements/Card'
import projeto01 from '../../imagens/img-projetos/projeto-01.svg'
// import { Card } from 'react-bootstrap'

function Projects () {
    return (

        <div className={styles.projects} id="Project">
                    <h1>Projetos</h1>
                    <Card
                        img={projeto01}
                        title ="Projeto 01 "
                        tech =" html, css, js"
                        description ="Desenvolvimento de LP para lançamemto de uma formaçao em Tecnologia "
                        repo =" https://github.com/DeysonSantana/projeto-Landing-Page-DNC"
                        site ="https://santecweb.com.br/"
                    />
                    <Card
                        img={projeto01}
                        title ="Projeto 01 "
                        tech =" html, css, js"
                        description ="Desenvolvimento de LP para lançamemto de uma formaçao em Tecnologia "
                        repo =" https://github.com/DeysonSantana/projeto-Landing-Page-DNC"
                        site ="https://santecweb.com.br/"
                    />
                    <Card
                        img={projeto01}
                        title ="Projeto 01 "
                        tech =" html, css, js"
                        description ="Desenvolvimento de LP para lançamemto de uma formaçao em Tecnologia "
                        repo =" https://github.com/DeysonSantana/projeto-Landing-Page-DNC"
                        site ="https://santecweb.com.br/"
                    />
                    <ButtonB text='Acesse meu repositório' link='https://github.com/DeysonSantana?tab=repositories' />
        </div>

    )
}

export default Projects