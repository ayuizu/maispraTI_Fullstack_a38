import { useState } from "react"
import classes from './Forms2.module.css'

//Alterar endereço

function Form2(){
    const [ address, setAddress] = useState({
        street: '',
        city: '',
        postalCode:'',
    })

    const handleChange = (event) =>{
        //Desestruturando event.target em name e value (do input)
        const {name, value} = event.target

        setAddress(prevState => ({
            ...prevState,
            //Atribui aos elementos já existentes (name = nome atributo)
            [name]: value
        }))
    }

    const handleSubmit = (event) =>{
        //Evita que página recarregue ao submeter
        event.preventDefault()
        //Validação - não pode submeter campo vazio
        if(!address.street || !address.city || !address.postalCode) 
            alert('Por favor, preencha todos os campos.')
        else
            alert(`Endereço submetido\nRua: ${address.street}\nCidade: ${address.city}\nCEP: ${address.postalCode}`)
        
    }
    

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Rua: 
                <input type="text" name='street' onChange={handleChange}/>
            </label>
            <br />
            <label>
                Cidade: 
                <input type="text" name='city' onChange={handleChange}/>
            </label>
            <br />
            <label>
                CEP: 
                <input type="text" name='postalCode' onChange={handleChange}/>
            </label>
            <br />
            <button type="submit">Submeter</button>

        </form>
    )
}

export default Form2