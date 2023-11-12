import React, { useState } from 'react'

function LoginForm() {

    // D’abord on définit les states de base (état, données, variable…)

    let [firstName, setFirstName] = useState("")

    // Comportements, les actions, la logique

    const handleSubmit = () => {
        console.log(" handleclick");
        console.log('firstname after click: ', firstName);
        if (firstName === "") {
            alert("Vous devez remplir le champ prénom");
        } else {
            alert("Bonjour " + firstName);
            setFirstName("dede");
            console.log('firstname after alert: ', firstName);
        }
    }

    const handleChange = (event) => {
        event.preventDefault();
        setFirstName(event.target.value);
        console.log('firstName value: ', firstName);
    }

    // L’affichage, le render, via return

    return (<>
        <div>
            <h1>Bienvenue chez nous !</h1>
            <h2>Connectez-vous</h2>
        </div>
        <div>
            <input type="text" name="inputField" id="inputField" onChange={handleChange} placeholder='Entrez votre prénom' />
            <button onClick={handleSubmit} >Accédez à votre espace</button>
        </div>
    </>
    )
}

export default LoginForm;