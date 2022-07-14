import { useState } from "react"

function AuthPatient(){
    const [datesDash, setDatesDash] = useState(
        JSON.parse(localStorage.getItem("token"))
      );
    return (
      
        <div>
            

        </div>
    )

}
export default AuthPatient