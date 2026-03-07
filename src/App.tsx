import './App.css';

function App() {
    return (
        <div className="main-container">
            <div className="booking-card">
                <h1>⚓ Mazurska Przystań</h1>
                <p>Kalkulator rezerwacji sprzętu</p>

                <div className="form-group">
                    <label>Imię i nazwisko:</label>
                    <input type="text" placeholder="Wpisz swoje dane..." />
                </div>

                <div className="form-group">
                    <label>Wybierz jednostkę:</label>
                    <select>
                        <option value="kajak">Kajak (20zł/h)</option>
                        <option value="rower">Rower wodny (35zł/h)</option>
                        <option value="omega">Omega (150zł/h)</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Czas wynajmu (h):</label>
                    <input type="range" min="1" max="8" />
                </div>

                <div className="checkbox-group">
                    <label>
                        <input type="checkbox" /> Akceptuję regulamin
                    </label>
                </div>

                <button className="submit-btn">Rezerwuję</button>
            </div>
        </div>
    );
}

export default App;