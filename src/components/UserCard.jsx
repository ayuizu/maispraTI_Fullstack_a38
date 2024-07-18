import UserProfile from "./UserProfile"

//Passar diversas propriedades. Mostrar para que existe o useContext
//Pode ser complicado conforme for escalando. Componentes que interagem com outros 72 comp, passar user e setUser pra todos

//Escalabilidade dificil
//Acoplamento - mtos componentes podem nao fazer uso de todas as func/atrib passadas, mas mesmo assim tem acessi a eles
//Reusabilidade - muito especifico, dificil de usar em outro lugar (UserCard)
//Solução: Utilizar contextos (próxima aula - useContext)
const UserCard = ({ user, setUser}) => {
    return(
        <div>
            <UserProfile user={user} setUser={setUser} /> 
        </div>
    )
}

export default UserCard