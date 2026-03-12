# 📄 Dokumentacja Techniczna – Projekt "Mazurska Przystań"

**Zespół:** Franek Masłoń i Bartek Bułakowski
**Klasa:** 3 Technikum
**Data:** 12.03

---
## 1. Analiza wymagań klienta
Na podstawie maila od kierownika przystani dowiedzieliśmy się, że potrzebny jest prosty kalkulator ceny wynajmu sprzętu wodnego na stronie internetowej. Turyści często dzwonią i pytają o ceny, więc aplikacja ma pozwolić im samodzielnie sprawdzić koszt wynajmu. Użytkownik musi wpisać swoje imię i wybrać sprzęt, który chce wypożyczyć. Do wyboru jest kajak za 20 zł za godzinę, rower wodny za 35 zł za godzinę oraz jacht Omega za 150 zł za godzinę. W przypadku wyboru jachtu Omega powinna pojawić się informacja, że do jego wynajmu wymagany jest patent żeglarski. Użytkownik wybiera też czas wynajmu od 1 do 8 godzin przy pomocy suwaka. Dodatkowo może zaznaczyć opcje dodatkowe, czyli kapok dla dziecka za 5 zł jednorazowo lub opiekę instruktora za 50 zł za każdą godzinę. Na końcu trzeba wybrać metodę płatności, czyli kartę albo BLIK oraz zaakceptować regulamin. Cena powinna zmieniać się automatycznie w trakcie korzystania z formularza.

---
## 2. Architektura rozwiązania
Zdecydowaliśmy się na jeden komponent App.tsx, ponieważ aplikacja jest prosta i wszystkie elementy formularza są ze sobą powiązane. Dzięki temu łatwiej jest zarządzać danymi i logiką programu w jednym miejscu. Kod w pliku App.tsx podzieliliśmy na kilka części. Na początku znajdują się importy potrzebnych elementów. Następnie są zmienne stanu useState, które przechowują dane wpisane przez użytkownika. Kolejna część to funkcje aplikacji, takie jak calculateTotal, która oblicza cenę wynajmu, oraz handleSubmit, która obsługuje wysłanie formularza. Na końcu znajduje się kod JSX odpowiedzialny za wygląd formularza na stronie.

---
## 3. Zarządzanie stanem (`useState`)

| Nazwa zmiennej stanu | Typ danych | Za co odpowiada? |
| name | string | przechowuje imię i nazwisko użytkownika|
| boat | string | przechowuje wybrany typ sprzętu |
| hours | number | przechowuje liczbę godzin wynajmu |
| extraVest | boolean | informuje czy wybrano kapok dla dziecka |
| extraInstructor | boolean | informuje czy wybrano instruktora |
| termsAccepted | boolean | sprawdza czy zaakceptowano regulamin |

---
## 4. Algorytm obliczania ceny
cena = cena_sprzętu * godziny

jeśli kapok jest zaznaczony
dodaj 5 zł

jeśli instruktor jest zaznaczony
dodaj 50 zł * godziny

zwróć końcową cenę

---
## 5. Layout i Stylizacja (`Flexbox`)

display: flex
umożliwia ustawienie elementów w elastycznym układzie.

justify-content: center
pozwala wyśrodkować formularz na stronie w poziomie.

align-items: center
pozwala wyśrodkować elementy w pionie.

---
## 6. Wnioski z realizacji projektu (SDLC)
(Krótka autorefleksja zespołu).
* **Co było najtrudniejsze?** [Natrudniejsze o dziwo było już stylizowanie naszego projektu, ze względu na to, że projekt musi wyglądać estetycznie i spełniać zasady dobrego programu (np. czytelność), gdzie trzeba było trochę pokombinować w CSS, natomiast reszta była okej, ponieważ dużo rzeczy pamiętamy jeszcze z javascript, a system działania formularzy i obliczania kwot jest bardzo zbliżony.]
* **Czego nowego się nauczyliście?** [Między innymi jak połączyć cały projekt z GitHubem, żeby wyglądało to przejrzyście, pisania dokumentacji i ogólnie pracy bardziej dla firm, a nie typowo lekcyjnej.]
* **Co byście zmienili, gdybyście mieli więcej czasu?** [Dodalibyśmy więcej funkcji, poprawili przejrzystość kodu i uprościli go w miarę naszych umiejętności.]
---
## 7. Checklisty (Zaznacz [x])
- [x] Aplikacja uruchamia się bez błędów (npm start).
- [x] Konsola przeglądarki jest czysta (brak "red errors").
- [x] Wszystkie commity są widoczne na kanale #github-feed.
- [x] Pull Requesty zostały zaakceptowane przez partnera.
