import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'

function Presentation () {
    return (
        <div  id="Apresentacao"  className={styles.presentation}>
                <h4><strong>Bem-vindo ao meu Portifólio</strong></h4>
                <h1>Olá! Sou Deyson Santana.</h1>
                <p>Deyson Santana quem fala 😉.<br/> Sou jovem, gosto de tecnologia e acima de tudo,<br/> a possibilidade de resolver problemas utilizando tecnologia.</p>
                <ButtonA link='https://github.com/DeysonSantana' text='Conect-se comigo' />
        </div>
    )
}

export default Presentation