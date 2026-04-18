import { useMemo, useRef, useState } from "react"

const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_=+[]{}|;:'\\\",.<>?/`~";

function App() {

  const [ username, setUsername ] = useState("JhonDoe2");
  const [ password, setPassword ] = useState("password!2");
  const [ description, setDescription ] = useState("Ciao");
  const fullnameRef = useRef();
  const specializationRef = useRef();
  const experienceRef = useRef();

  const isUsernameValid = useMemo(() => {
    return [...username].every(char => letters.includes(char.toLowerCase()) ||  numbers.includes(char)) && username.length >= 6
  }, [username])
  //console.log(isUsernameValid)

  const isPassWordValid = useMemo(() => {
    return (
      [...password].some(char => letters.includes(char.toLowerCase())) && 
      [...password].some(char => numbers.includes(char)) && 
      [...password].some(char => symbols.includes(char)) &&
      password.length >= 8
    )
  }, [password])
  //console.log("Password valida: ", isPassWordValid)

  const isDescriptionValid = useMemo(() => {
    return (
      description.trim().length >= 100 && 
      description
      .trim().length <= 1000
    )
  }, [description])
  //console.log("Descrizione valida: ", isDescriptionValid, description.length)

  const handleSubmit = event => {
    event.preventDefault();

    const fullname = fullnameRef.current.value;
    const specialization = specializationRef.current.value;
    const experience = experienceRef.current.value;

    if(
      fullname.trim().length === 0 ||
      username.length === 0 ||
      password.length === 0 ||
      specialization.length === 0 ||
      experience.length === 0 ||
      experience <= 0 ||
      description.length === 0 ||
      !isUsernameValid ||
      !isPassWordValid ||
      !isDescriptionValid
    ){
      alert("Tutti i campi devono essere compilati");
      return;
    }
    console.log("Submit:", {
      fullname,
      username,
      password,
      specialization,
      experience,
      description
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Nome completo</p>
          <input type="text" ref={fullnameRef} placeholder="Nome completo"/>
        </label>
        
        <label>
          <p>Username</p>
          <input type="text" onChange={event => setUsername(event.target.value)} value={username} placeholder="Username"/>
          {
            isUsernameValid ? (<p style={{color: "green"}}>Username valido!</p>) : (<p style={{color: "red"}}>Username deve avere caratteri alfanumerici</p>)
          }
        </label>
        
        <label>
          <p>Password</p>
          <input type="password" onChange={event => setPassword(event.target.value)} value={password} placeholder="Password"/>
          {
          isPassWordValid ? (<p style={{ color: "green" }}>Password valida!</p>) : (<p style={{ color: "red" }}>La password deve contenere almeno una lettera, un numero e un simbolo</p>)
          }
        </label>
        
        <label>
          <p>Specializzazione</p>
          <select ref={specializationRef}>
            <option value="">-</option>
            <option value="Full stack">Fullstack</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
          </select>
        </label>
        
        <label>
          <p>Anni di esperienza</p>
          <input type="number" ref={experienceRef} placeholder="Anni di esperienza"/>
        </label>
        
        <label>
          <p>Breve descrizione</p>
          <textarea onChange={event => setDescription(event.target.value)} value={description} placeholder="Breve descrizione"/>
          {
            isDescriptionValid ? (<p style={{ color: "green" }}>{description.length}/1000</p>) : (<p style={{color: "red"}}>La descrizione deve contenere tra i 100 e i 1000 caratteri</p>)
          }
        </label>

        <div>
          <button type="submit">Invia</button>
        </div>
      </form>
    </>
  )
}

export default App
