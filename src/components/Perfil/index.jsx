import styles from './Perfil.module.css';

// export default() => {}

const Perfil = ({userName}) => {
    
    return (
        <header className={styles.header}>
            <img className={styles.avatar} src={`https://github.com/${userName}.png`} />
            <h1  className={styles.name}>{ userName }</h1>
        </header>
    )
}

export default Perfil;