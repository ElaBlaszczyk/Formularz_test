///<references types="cypress" />

Given('Uzytkowanik jestem na stronie formularza',() => {

    cy.visit("http://serwer1419259.home.pl/tester/index.php/site/form/52")

})

When('Wprowadź w polu Imię:', (datatable) => {
    datatable.hashes().forEach(element => {
    cy.get("input[name='fields[1][1]']").should('be.visible').type(element.imie).wait(600)
    })
})

When('Wprowadź w polu Nazwisko:', (datatable) => {
    datatable.hashes().forEach(element => {
    cy.get("input[name='fields[1][2]']").should('be.visible').type(element.nazwisko).wait(600)
    })
})

When('Zaznacz w polu Płeć: kobieta', () => {
    cy.get("input[id='id_1_3_1']").check().should('be.checked').click().wait(600)
})

When('Wprowadź w polu Pesel:', (datatable) => {
    datatable.hashes().forEach(element => {
    cy.get("input[name='fields[1][4]']").should('be.visible').type(element.pesel).wait(600)
    })
})

When('Wprowadź w polu NIP:', (datatable) => {
    datatable.hashes().forEach(element => {
    cy.get("input[name='fields[1][70]']").should('be.visible').type(element.nip).wait(600)
    })
})

When('Zaznacz w polu Wykształcenie: wyższe', () => {
    cy.get("input[id='id_1_5_8']").check().should('be.checked').click().wait(600)
})

When('Załącz plik skanu dyplomu', () => {
    const filePath ='Dyplom.jpg';
    cy.get("input[name='diploma']").click()
    cy.get("input[name='diploma']").attachFile(filePath).wait(600)
})

When('Wprowadź w pole Numer prawa wykonywania zawodu lekarza:', (datatable) => {
    datatable.hashes().forEach(element => {
    cy.get("input[id='id_1_6']").should('be.visible').type(element.nrZawodu).wait(600)
    })
})

When('Zaznacz tak w polu Jestem osobą zatrudnioną bez względu na formę zatrudnienia', () => {
    cy.get("input[id='id_1_7_9']").check().should('be.checked').click().wait(600)
})

When('Wprowadź w polu Nazwa i adres poz:', (datatable) => {
    datatable.hashes().forEach(element => {
    cy.get("#id_1_9").should('be.visible').type(element.adresPoz).wait(600)
    })
})

When('Zaznacz nie w pozycji Jestem osobą niepełnosprawną', () => {
    cy.get("input[id='id_1_10_12']").check().should('be.checked').click().wait(600)
})

When('Zaznacz nie w polu Jestem osobą zatrudnioną w małej placówce medycznej na obszarach wiejskich', () => {
    cy.get("input[id='id_1_11_13']").check().should('be.checked').click().wait(600)
})

When('Wprowadź w pola: Ulica, nr budynku, nr lokalu, Miejscowość, Kod pocztowy, Gmina, Powiat, Wojewódźtwo, Kraj, adres e-mail, Numer telefonu', (datatable) => {
    datatable.hashes().forEach(element => {
    cy.get("input[id='id_2_12']").should('be.visible').type(element.ulica).wait(600)
    cy.get("input[id='id_2_13']").should('be.visible').type(element.nrBudynku).wait(600)
    cy.get("input[id='id_2_14']").should('be.visible').type(element.nrLokalu).wait(600)
    cy.get("input[id='id_2_15']").should('be.visible').type(element.miejscowość).wait(600)
    cy.get("input[id='id_2_16']").should('be.visible').type(element.kod).wait(600)
    cy.get("input[id='id_2_17']").should('be.visible').type(element.gmina).wait(600)
    cy.get("input[id='id_2_18']").should('be.visible').type(element.powiat).wait(600)
    cy.get("input[id='id_2_19']").should('be.visible').type(element.województwo).wait(600)
    cy.get("input[id='id_2_20']").should('be.visible').type(element.kraj).wait(600)
    cy.get("input[id='id_2_21']").should('be.visible').type(element.email).wait(600)
    cy.get("input[id='id_2_68']").should('be.visible').type(element.nrTelefonu).wait(600)
    })
})
When('W polu Osoba pracująca zaznacz: Inne', () => {
    cy.get("input[id='id_2_27_29']").check().should('be.checked').click().wait(600)
})

When('W polu Wykonywany zawód, wybierz:  Pracownik instytucji systemu ochrony zdrowia', () => {
    cy.get("input[id='id_2_28_31']").check().should('be.checked').click().wait(600)
})

When('Wprowadź w pole Miejsce pracy', (datatable) => {
    datatable.hashes().forEach(element => {
    cy.get('#id_2_30').should('be.visible').type(element.miejscePracy).wait(600)
    })
})

When('W pozycji Osoba należąca do mniejszości narodowej lub etnicznej, migrant, osoba obcego pochodzenia zaznacz: Nie', () => {
    cy.get("input[id='id_3_32_32']").check().should('be.checked').click().wait(600)
})

When('W pozycji Osoba bezdomna lub dotknięta wykluczeniem z dostępu do mieszkań zaznacz: Nie', () => {
    cy.get("[value=rcaid_35]").check().should('be.checked').click().wait(600)
})
When('W pozycji Osoba z niepełnosprawnościami zaznacz: Nie', () => {
    cy.get("[value=rcaid_37]").check().should('be.checked').click().wait(600)
})

When('W pozycji Osoba przebywająca w gospodarstwie domowym bez osób pracujących zaznacz: Nie', () => {
    cy.get("[value=rcaid_40]").check().should('be.checked').click().wait(600)
})

When('W pozycji W tym w gospodarstwie domowym z dziećmi pozostającymi na utrzymaniu zaznacz: Nie', () => {
    cy.get("[value=rcaid_42]").check().should('be.checked').click().wait(600)
})

When('W pozycji Osoba żyjąca w gospodarstwie składającym się z jednej osoby dorosłej i dzieci pozostających na utrzymaniu zaznacz: Nie', () => {
    cy.get("[value=rcaid_44]").check().should('be.checked').click().wait(600)
})

When('W pozycji Osoba w innej niekorzystnej sytuacji społecznej zaznacz: Nie', () => {
    cy.get("[value=rcaid_46]").check().should('be.checked').click().wait(600)
})

When('Kliknij przycisk Wyślij', () => {
    cy.get("[value=Wyślij]").click().wait(800)
})

And('Komunikat: {string}', (content) => {
    cy.contains(content).should('be.visible')
})

Then('Komunikat: {string}', (content) => {
    cy.contains(content).should('be.visible')
})

 








































