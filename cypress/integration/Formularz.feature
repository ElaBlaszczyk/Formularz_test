Feature: Formularz zgłoszenia uczestnictwa w szkoleniu

    Jako zainteresoway użytkowanik chce wziąść udział w szkoleniu

    Scenario: Sprawdzenie możliwości wysyłanie formularza po uzupełnieniu prawidłowymi danymi i zaznaczeniu wszystkich wymaganych pól
        Given Uzytkowanik jestem na stronie formularza
        When Wprowadź w polu Imię:
            | imie |
            | Anna |
        When Wprowadź w polu Nazwisko:
            | nazwisko |
            | Nowak    |
        When Zaznacz w polu Płeć: kobieta
        When Wprowadź w polu Pesel:
            | pesel       |
            | 12345678901 |
        When Wprowadź w polu NIP:
            | nip        |
            | 0123456789 |
        When Zaznacz w polu Wykształcenie: wyższe
        When Załącz plik skanu dyplomu
        When Wprowadź w pole Numer prawa wykonywania zawodu lekarza:
            | nrZawodu |
            | 1234     |
        When Zaznacz tak w polu Jestem osobą zatrudnioną bez względu na formę zatrudnienia
        When Wprowadź w polu Nazwa i adres poz:
            | adresPoz                              |
            | Alfa Med; Ul. Prosta 5; 56-456 Gdańsk |
        When Zaznacz nie w pozycji Jestem osobą niepełnosprawną
        When Zaznacz nie w polu Jestem osobą zatrudnioną w małej placówce medycznej na obszarach wiejskich
        When Wprowadź w pola: Ulica, nr budynku, nr lokalu, Miejscowość, Kod pocztowy, Gmina, Powiat, Wojewódźtwo, Kraj, adres e-mail, Numer telefonu
            | ulica   | nrBudynku | nrLokalu | miejscowość | kod    | gmina    | powiat   | województwo | kraj   | email                      | nrTelefonu |
            | Zielona | 5         | 1        | Katowice    | 54-123 | Katowice | Katowice | śląskie     | Polska | neziwosej-3115@yopmail.com | 567876543  |
        When W polu Osoba pracująca zaznacz: Inne
        When W polu Wykonywany zawód, wybierz:  Pracownik instytucji systemu ochrony zdrowia
        When Wprowadź w pole Miejsce pracy
            | miejscePracy                            |
            | Alfa Med; Ul. Prosta 5; 56-456 Katowice |
        When W pozycji Osoba należąca do mniejszości narodowej lub etnicznej, migrant, osoba obcego pochodzenia zaznacz: Nie
        When W pozycji Osoba bezdomna lub dotknięta wykluczeniem z dostępu do mieszkań zaznacz: Nie
        When W pozycji Osoba z niepełnosprawnościami zaznacz: Nie
        When W pozycji Osoba przebywająca w gospodarstwie domowym bez osób pracujących zaznacz: Nie
        When W pozycji W tym w gospodarstwie domowym z dziećmi pozostającymi na utrzymaniu zaznacz: Nie
        When W pozycji Osoba żyjąca w gospodarstwie składającym się z jednej osoby dorosłej i dzieci pozostających na utrzymaniu zaznacz: Nie
        When W pozycji Osoba w innej niekorzystnej sytuacji społecznej zaznacz: Nie
        And  Kliknij przycisk Wyślij
        Then Komunikat: "Formularz został poprawnie zapisany"



