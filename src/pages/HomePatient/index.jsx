import { useHistory } from "react-router-dom"
function HomePatient(){

    const history = useHistory()
    return (
        <div>
            <div>Feito para ficar mais próximo do seu médico</div>
            <div>
                <span>Realize aqui seu login</span>
            </div>
            <button onClick={() => history.push("/login")}>Ir para login</button> 
        </div>
    )

}
export default HomePatient