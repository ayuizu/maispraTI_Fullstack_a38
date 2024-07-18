import { useState } from "react"
import classes from './Desafio.module.css'

//Desafio do intervalo

function Desafio(){
    const [ data, setData ] = useState({
        fullName: '',
        email: '',
        password:'',
        passwordConfirm:'',
    })

    const [error, setErros] = useState({})
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (event) =>{
        //Desestruturando event.target em name e value (do input)
        const {name, value} = event.target

        setData(prevState => ({
            ...prevState,
            //Atribui aos elementos já existentes (name = nome atributo)
            [name]: value
        }))
    }

    const validade = () =>{
        const errorsList = {}

        //Validação - Nome
        if(!data.fullName)
            errorsList.name='Por favor, preencha o nome'

        //Validação - E-mail
        if(!data.email) 
            errorsList.email='Por favor, preencha o e-mail'
        else if(!/\S+@\S+\S+.\S+/.test(data.email))
        /*
            /: Início e fim da expressão regular
            \S: Representa qualquer caractere que não seja um espaço em branco.
            +: Indica que o caractere não-espaço (\S) deve aparecer uma ou mais vezes.
            @: Caractere literal @.
            \S+\S+: Indica novamente uma ou mais ocorrências de caracteres que não sejam espaços em branco, seguidos de uma ou mais ocorrências de caracteres não-espaço.
            .: Caractere literal ponto.
            \S+: Indica uma ou mais ocorrências de caracteres que não sejam espaços em branco.
        */
            errorsList.email='E-mail deve ter formato válido (nome@dominio.com)'

        //Validação - Senha
        if(!data.password) 
            errorsList.password='Por favor, preencha a senha'
        else if(data.password.length<8)
            errorsList.password='A senha deve ter no mínimo 8 caracteres'

        //Validação - Confirmação ad senha
        if(!data.passwordConfirm) 
            errorsList.passwordConfirm='Por favor, confirme a senha'
        else if(data.password!=data.passwordConfirm)
            errorsList.passwordConfirm='A confirmação da senha deve ser igual à senha'

        return errorsList
            
    }

    const handleSubmit = (event) =>{
        //Evita que página recarregue ao submeter
        event.preventDefault()
        //Chama a validação
        const validation = validade()

        //Se não tiver erros, submeter. Do contrário, exibir erros
        if(Object.keys(validation).length === 0){
        //Object.keys(validation): Esta função retorna um ARRAY com os nomes das propriedades (chaves) próprias de um objeto. Ou seja, ela obtém todas as chaves do objeto validation.
            setSubmitted(true) 
            // alert('Usuário cadastrado com sucesso')

        }
        else
            setErros(validation)
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <h2>Cadastre-se</h2>
            <div>
                <label>Nome completo: </label>
                <input type="text" name='fullName' onChange={handleChange}/>
                {/* No React, qualquer coisa entre chaves {} será interpretada como uma expressão JavaScript. */}
                {/* se a expressão à esquerda do && for verdadeira, a expressão à direita será avaliada e retornada. */}
                {error.name && !submitted && <p>{error.name}</p>}
            </div>

            <br />
            <div>
                <label>E-mail: </label>
                <input type="text" name='email' onChange={handleChange}/>
            </div>
            <div>
                {error.email && !submitted && <p>{error.email}</p>}
             </div>

            <br />
            <div>
                <label>Senha:</label>
                <input type="password" name='password' onChange={handleChange}/>
            </div>
            <div>
                {error.password && !submitted && <p>{error.password}</p>}
            </div>

            <br />
            <div>
                <label>Confirme a senha: </label>
                <input type="password" name='passwordConfirm' onChange={handleChange}/>
            </div>
            <div>
                {error.passwordConfirm && !submitted && <p>{error.passwordConfirm}</p>}
            </div>
            <br />
            {submitted && <div><p className={classes.success} >Registrado com sucesso!</p><br/></div>}
            <button type="submit">Submeter</button>
        </form>
    )
}

export default Desafio