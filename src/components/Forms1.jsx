import { useState } from "react"

//Enviar um "Olá" para a pessoa que escreveu o nome

function StdForm(){
    const [name , setName] = useState('')

    const handleChange = (event) =>{
        //Pega cada caractere digitado pelo user e joga no setName
        setName(event.target.value)
    }

    const handleSubmit = (event) => {
        // event sempre ocorre, digitamos ele entre () quando quisermos utilizar ele
        // Como tratar o envio - event.preventDefault para evitar que atualize a página (que é o comportamento padrão)
        event.preventDefault()
        if(!name)
            alert("Por favor, preencha o campo antes de enviar.")
        else
            alert(`Olá, ${name}!`)
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Nome: 
                <input type="text" value={name} onChange={handleChange} />
            </label>
            <br />
            <button type="submit">Enviar</button>
        </form>
    )
}

export default StdForm