import { useHistory } from "react-router";

function AuthGlobal(){
    const history = useHistory()

      setTimeout(() => {
        history.push("/login") 
      }, 2500);    

    return (
      
        <div>
            <h2>Você precisa de um login. Redirecionando para login...</h2>
        </div>
    )

}
export default AuthGlobal;