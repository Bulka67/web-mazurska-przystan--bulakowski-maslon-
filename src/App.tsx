import { useState } from 'react'
import './App.css'

function App() {
    const [name, setName] = useState('')
    const [boat, setBoat] = useState('kajak')
    const [hours, setHours] = useState(1)
    const [extraVest, setExtraVest] = useState(false)
    const [extraInstructor, setExtraInstructor] = useState(false)
    const [termsAccepted, setTermsAccepted] = useState(false)

    const calculateTotal = () => {
        const prices: Record<string, number> = {
            kajak: 20,
            rower: 35,
            omega: 150
        }

        let total = prices[boat] * hours

        if (extraVest) total += 5
        if (extraInstructor) total += 50 * hours

        return total
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        alert(`Ahoj ${name}! Rezerwacja przyjęta.\nSprzęt: ${boat}\nCzas: ${hours}h\nSuma: ${calculateTotal()} PLN.`)
    }

    return (
        <div className="page-wrapper">
            <form className="booking-card" onSubmit={handleSubmit}>
                <h1 className="form-title">Mazurska Przystań ⚓</h1>

                <div className="input-group">
                    <label>Imię i nazwisko</label>
                    <input
                        type="text"
                        placeholder="Wpisz swoje dane..."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <label>Wybierz sprzęt</label>
                    <select value={boat} onChange={(e) => setBoat(e.target.value)}>
                        <option value="kajak">Kajak (20 zł/h)</option>
                        <option value="rower">Rower wodny (35 zł/h)</option>
                        <option value="omega">Jacht Omega (150 zł/h)</option>
                    </select>
                </div>

                <div className="input-group">
                    <label>Czas wynajmu: <strong>{hours}h</strong></label>
                    <input
                        type="range"
                        min="1" max="8" step="1"
                        value={hours}
                        onChange={(e) => setHours(Number(e.target.value))}
                    />
                </div>

                <div className="extras-group">
                    <p className="group-label">Opcje dodatkowe:</p>
                    <label className="checkbox-row">
                        <input
                            type="checkbox"
                            checked={extraVest}
                            onChange={(e) => setExtraVest(e.target.checked)}
                        /> Kapok dla dziecka (+5 zł)
                    </label>
                    <label className="checkbox-row">
                        <input
                            type="checkbox"
                            checked={extraInstructor}
                            onChange={(e) => setExtraInstructor(e.target.checked)}
                        /> Opieka instruktora (+50 zł/h)
                    </label>
                </div>

                <div className="input-group">
                    <label>Metoda płatności</label>
                    <div className="radio-group">
                        <label><input type="radio" name="payment" defaultChecked /> Karta</label>
                        <label><input type="radio" name="payment" /> BLIK</label>
                    </div>
                </div>

                <div className="terms-group">
                    <label className="checkbox-row">
                        <input
                            type="checkbox"
                            checked={termsAccepted}
                            onChange={(e) => setTermsAccepted(e.target.checked)}
                        /> Akceptuję regulamin przystani
                    </label>
                </div>

                <footer className="form-footer">
                    <div className="price-display">
                        Suma: <span>{calculateTotal()} PLN</span>
                    </div>
                    <button
                        type="submit"
                        className="submit-btn"
                        disabled={!name || !termsAccepted}
                    >
                        Zarezerwuję
                    </button>
                </footer>
            </form>
        </div>
    )
}

export default App