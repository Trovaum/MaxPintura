import styles from '../styles/components/Header.module.css'

export default function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.head}>
                <img src="medidorCamada.png" alt="medidor de camada"/>
                <h1><i>Max Pintura</i></h1>
            </div>
            <div className={styles.subHead}>
                <h2>Detalhamento Técnico de Pintura Automotiva</h2>
            </div>
        </div>
    )
}