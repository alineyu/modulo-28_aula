import { useEffect, useState } from "react";

import styles from './ReposList.module.css'

const ReposList = ({userName}) => {

    const [repos, setRepos] = useState([]);
    const [carregando, setCarregando] = useState(true);
    
    useEffect(() => {
        setCarregando(true);
        fetch(`https://api.github.com/users/${userName}/repos`)
        .then(res => res.json())
        .then(resJson => {
            setTimeout(() => {
                setCarregando(false)
                setRepos(resJson)
            }, 3000);
        })
    }, [userName])
    
    return(
        <div  className="container">
        {carregando ? (
            <h1>Carregando...</h1>
        ) : (
        <ul className={styles.list}>
            {repos.map(({id, name, language, html_url}) => (
                <li className={styles.item} key={id}>
                    <div className={styles.itemName}>
                        <b>Nome: </b> {name} 
                    </div>
                    <div className={styles.itemLanguage}>
                    <b> Linguagem: </b> {language} 
                    </div>
                    <a className={styles.itemLink} target="_blank" href={html_url}>Visitar o Github</a>
                </li>
            ))}
            <li>Repositorio</li>
        </ul>
        )}
        </div>
    )
}

export default ReposList;