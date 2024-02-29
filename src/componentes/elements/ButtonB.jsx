import styles from './ButtonB.module.css'

function ButtonB ( {link, text}) {

    return (
        <div > 
            <a href={link}>
                <button className={styles.btn}>{text}</button>
            </a>
        </div>
    )

}

export default ButtonB