import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/RepoList";

function App() {
  const [formularioVisivel, setFormularioVisivel] = useState(true)
  const [userName, setUserName] = useState('')
  
  return(
    <>
    <input type="text" onBlur={(e) => setUserName(e.target.value)} />
      

      {userName.length > 4 && (
        <>
        <Perfil userName={userName}/>
        <ReposList userName={userName}/>
        </>
      )}

      {/* {formularioVisivel && (
        <Formulario />
      )}
      <button type="button" onClick={() => setFormularioVisivel(!formularioVisivel)}>toggle for</button> */}
    </>
  )
}

export default App
