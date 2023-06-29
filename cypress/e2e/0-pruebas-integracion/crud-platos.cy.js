/// <reference types="cypress" />

describe('CRUD Platos', () => {

    //Antes que nada abrir el navegador en el proyecto Frontend que es el puerto 8100
    beforeEach(() => {
        cy.visit('http://localhost:8100') //Frontend de Produccion
            //cy.visit('http://localhost:8200')//Frontend de Test
    })

    //Servicio API - GetCategoria()
    it('GetPlatos()', () => {
        cy.wait(1000);
        //cy.get('ion-tab-button').should('be.not.visible');
        cy.get('ion-tab-button').eq(0).click(); // click en el TAB de Platos
        cy.wait(1000);
        cy.get('ion-item').should('be.visible').should('not.have.length', '0'); //Verifica que exista un ion-item
    });

    //Servicio API - AddPlatos(entidad)
    it('AddPlatos(entidad)', () => {
        cy.wait(1000);
        cy.get('#nombrePlatos').type('insertar RIDER cypress', { delay: 100 }).should('have.value', 'insertar RIDER cypress');
        cy.wait(500);
        cy.get('#agregarPlatos').not('[disabled]').click();
    });

    //Servicio API - UpdateCategoria(entidad)
    it('UpdatePlatos(entidad)', () => {
        cy.wait(1000);
        cy.get('#updatePlatos').eq(0).click(); //Click al boton de Editar una categoria
        cy.wait(1000);
        cy.get('#nombrePlatos').invoke('val', ''); //Vaciar el campo del textfield de nombreCategoria
        cy.get('#nombrePlatos').type('update RIDER Cypress', { delay: 100 }); //Escribir "UPDATE Cypress en el textfield de nombreCategoria"
        cy.wait(500);
        cy.get('#guardarCambios').not('[disabled]').click(); //Click en guardar cambios
    });

    //Servicio API - DeleteCategoria(id)
    it('DeleteCPlatos(id)', () => {
        cy.wait(1000);
        cy.get('#deletePlatos').eq(0).click(); //Click al boton de Eliminar una categoria
    });
});