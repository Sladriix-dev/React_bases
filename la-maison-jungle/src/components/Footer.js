import { useState } from "react"
import '../styles/Footer.css'

export default function Footer() {
    const [inputValue, setInputValue] = useState('')

    function handleInput(e) {
        setInputValue(e.target.value)
    }

    function handleBlur() {
        if (!inputValue.includes('@')) {
            alert("Please entrez une adresse valide")
        }
    }

    return (
        <footer className="lmj-footer">
            <div className="lmj-footer-elem">
                Pour les passionés de plantes 
            </div>
            <div className="lmj-footer-elem">Laissez nous votre mail :</div>
            <input 
                placeholder="Entrez votre mail"
                onChange={handleInput}
                value={inputValue}
                onBlur={handleBlur}
            />
        </footer>
    )
}