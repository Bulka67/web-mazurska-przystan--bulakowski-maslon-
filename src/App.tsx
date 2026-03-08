import './App.css'

function App() {
    return (
        <div className="page-wrapper">
            <form className="booking-card">
                <h1 className="form-title">Mazurska Przystań ⚓</h1>

                <div className="input-group">
                    <label>Imię i nazwisko</label>
                    <input type="text" placeholder="Wpisz swoje dane..." />
                </div>

                <div className="input-group">
                    <label>Wybierz sprzęt</label>
                    <select>
                        <option value="kajak">Kajak (20 zł/h)</option>
                        <option value="rower">Rower wodny (35 zł/h)</option>
                        <option value="omega">Jacht Omega (150 zł/h)</option>
                    </select>
                </div>

                <div className="input-group">
                    <label>Czas wynajmu: <strong>1h</strong></label>
                    <input type="range" min="1" max="8" step="1" />
                </div>

                <div className="extras-group">
                    <p className="group-label">Opcje dodatkowe:</p>
                    <label className="checkbox-row">
                        <input type="checkbox" /> Kapok dla dziecka (+5 zł)
                    </label>
                    <label className="checkbox-row">
                        <input type="checkbox" /> Opieka instruktora (+50 zł/h)
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
                        <input type="checkbox" /> Akceptuję regulamin przystani
                    </label>
                </div>

                <footer className="form-footer">
                    <div className="price-display">
                        Suma: <span>0 PLN</span>
                    </div>
                    <button type="submit" className="submit-btn">
                        Zarezerwuję
                    </button>
                </footer>
            </form>
        </div>
    )
}

export default App