import { useState } from "react";
import styles from './Formulario.module.css'

const Formulario = () => {
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);

    const renderizaImc = () => {
        const imc = (peso / (altura**2)).toFixed(2);
        console.log(imc, peso, altura,);

        const resultado = () => {
            switch (true) {
                case imc < 16:
                    return (<p>Resultado: {imc}, Magreza Grau III</p>)
                case imc >= 16 && imc <= 16.99:
                    return (<p>Resultado: {imc}, Magreza Grau II</p>)
                case imc >= 17 && imc <= 18.49:
                    return (<p>Resultado: {imc}, Magreza Grau I</p>)
                case imc >= 18.5 && imc <= 24.99:
                    return (<p>Resultado: {imc}, Adequado</p>)
                case imc >= 25 && imc <= 29.99:
                    return (<p>Resultado: {imc}, Pré-Obeso</p>)
                case imc >= 30 && imc <= 34.99:
                    return (<p>Resultado: {imc}, Obesidade Grau I</p>)
                case imc >= 35 && imc <= 39.99:
                    return (<p>Resultado: {imc}, Obesidade Grau II</p>)
                case imc >= 40:
                    return (<p>Resultado: {imc}, Obesidade Grau III</p>)
                default:
                    return (<p>Digite um valor para altura e peso</p>)
            }
        }


        return (
            <>
                {resultado()}
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>IMC</th>
                            <th>Classificação</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>&lt; 16</td>
                            <td>Magreza Grau III</td>
                        </tr>
                        <tr>
                            <td>16,0 a 16,9</td>
                            <td>Magreza Grau II</td>
                        </tr>
                        <tr>
                            <td>17,0 a 18,4</td>
                            <td>Magreza Grau I</td>
                        </tr>
                        <tr>
                            <td>18,5 a 24,9</td>
                            <td>Adequado</td>
                        </tr>
                        <tr>
                            <td>25,0 a 29,9</td>
                            <td>Pré-Obeso</td>
                        </tr>
                        <tr>
                            <td>30,0 a 34,9</td>
                            <td>Obesidade Grau I</td>
                        </tr>
                        <tr>
                            <td>35,0 a 39,9</td>
                            <td>Obesidade Grau II</td> 
                        </tr>
                        <tr>
                            <td>&gt;= 40</td>
                            <td>Obesidade Grau III</td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    }

    return (
        <form className={styles.form}>
            <div className={styles.formItem}>
                <label htmlFor="altura">Altura</label>
                <input id="altura" type="number" placeholder="Sua altura em metros: " onChange={evento => setAltura(parseFloat(evento.target.value))} min={0} step={0.01}/>
            </div>
            <div className={styles.formItem}>
                <label htmlFor="peso">Peso</label>
                <input id="peso" type="number" placeholder="Seu peso em quilos: " onChange={evento => setPeso(parseFloat(evento.target.value))} min={0}/>
            </div>
            {renderizaImc()}
        </form>
    )
}

export default Formulario;