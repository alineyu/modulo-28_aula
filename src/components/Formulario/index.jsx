import { useState, useEffect } from "react";

const Formulario = () => {

    let [materiaA, setMateriaA] = useState(0);
    let [materiaB, setMateriaB] = useState(0);
    let [materiaC, setMateriaC] = useState(0);
    let [nome, setNome] = useState('');


    useEffect(() => {
        console.log('componente iniciou')

        return () => {
            console.log('componente finalizou')
        }
    }, [])

    useEffect(() => {
        console.log('estado nome mudou')
    }, [nome])

    useEffect(() => {
        console.log('materia A mudou para: ' + materiaA)
    }, [materiaA, materiaB, materiaC])

    const alteraNome = (evento) => {
        setNome(estadoAnterior => {
            // console.log(estadoAnterior);
            return evento.target.value
        })
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;
        
        if(media >= 7) {  
            return(
            <p>Parabens, {nome}! Voce foi aprovado!</p>
        )
        } else {
            return (
            <p>Sinto muito, {nome}... Voce nao foi aprovado</p>
            )
        }
    }

    return ( 
        <form>
            <ul>
                {[1, 2, 3, 4, 5].map(item => (
                    <li key={item}>{item}</li>
            ))}
            </ul>

            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota materia A" onChange={({target}) => setMateriaA(parseInt(target.value))}/>
            <input type="number" placeholder="Nota materia B" onChange={({target}) => setMateriaB(parseInt(target.value))} />
            <input type="number" placeholder="Nota materia C"  onChange={({target}) => setMateriaC(parseInt(target.value))}/>
            {renderizaResultado()}
        </form>
    )
}

export default Formulario;