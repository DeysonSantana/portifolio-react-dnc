import styles from './Skils.module.css'
import css from '../../imagens/Skils/css.svg'
import html from '../../imagens/Skils/html.svg'
import javascript from '../../imagens/Skils/javascript.svg'
import typescipt from '../../imagens/Skils/typescipt.svg'
import react from '../../imagens/Skils/react.svg'

function Skils () {
    return (

        <div className={styles.skil} id="Habilidades">
            <h1>Habilidades</h1>
           
            <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
            <div>
                <img alt='js' src={javascript}/>
                <img alt='html' src={html}/>
                <img alt='css3' src={css}/>
                <img alt='react' src={react}/>
                <img alt='typescript' src={typescipt}/>
            </div>
       
        </div>
    )
}

export default Skils