import { useHistory } from "react-router-dom";

function HomeDoctor(){
    const history = useHistory()

    return (
        <div>
            <div>Seja bem vindo, ao lugar que é possível ter maior proximidade com seus pacientes</div>
            <div>
                <span>Não é cadastrado? Clique nesse botão</span>
                <button onClick={() => history.push("/register/doctor")}>Ir para cadastro</button>
                
            </div>
            <div>
                <span>Já tem cadastro? Realize aqui seu login</span>
                <button onClick={() => history.push("/login")}>Ir para login</button> 
            </div>
        </div>
        
   
    )
    
}

export default HomeDoctor