import { useState } from "react"

function App() {

  const [ fullname, setFullname ] = useState("Acqua");
  const [ username, setUsername ] = useState("Acqua");
  const [ password, setPassword ] = useState("passwrod");
  const [ specialization, setSpecialization ] = useState("Frontend");
  const [ experience, setExperience ] = useState("2");
  const [ description, setDescription ] = useState("Ciao");

  const handleSubmit = event => {
    event.preventDefault();

    if(
      fullname.length === 0 ||
      username.length === 0 ||
      password.length === 0 ||
      specialization.length === 0 ||
      experience.length === 0 ||
      experience <= 0 ||
      description.length === 0
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
          <input type="text" onChange={event => setFullname(event.target.value)} value={fullname} placeholder="Nome completo"/>
        </label>
        
        <label>
          <p>Username</p>
          <input type="text" onChange={event => setUsername(event.target.value)} value={username} placeholder="Username"/>
        </label>
        
        <label>
          <p>Password</p>
          <input type="password" onChange={event => setPassword(event.target.value)} value={password} placeholder="Password"/>
        </label>
        
        <label>
          <p>Specializzazione</p>
          <select onChange={event => setSpecialization(event.target.value)} value={specialization}>
            <option value="">-</option>
            <option value="Full stack">Fullstack</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
          </select>
        </label>
        
        <label>
          <p>Anni di esperienza</p>
          <input type="number" onChange={event => setExperience(event.target.value)} value={experience} placeholder="Anni di esperienza"/>
        </label>
        
        <label>
          <p>Breve descrizione</p>
          <textarea onChange={event => setDescription(event.target.value)} value={description} placeholder="Breve descrizione"/>
        </label>

        <div>
          <button type="submit">Invia</button>
        </div>
      </form>
    </>
  )
}

export default App
