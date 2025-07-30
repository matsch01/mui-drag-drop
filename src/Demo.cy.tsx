import React from 'react';
import Demo from './Demo';
import { mount } from '@cypress/react18'

it('renders learn react link', () => {
    mount(<Demo />);
    cy.get('[data-testid="DragIcon"]:first').should('exist')

    cy.get('[data-testid="DragIcon"]:first').as('firstsource');
    cy.get('@firstsource').trigger('dragstart');
    cy.get('@firstsource').trigger('dragenter');
    cy.get('@firstsource').trigger('dragleave');

    cy.get('[data-testid="DragIcon"]:last').as('lastsource');
    cy.get('@lastsource').trigger('dragenter');
    cy.get('@lastsource').trigger('dragover');
    cy.get('@lastsource').trigger('drop', { waitForAnimations: true, force: true });

    cy.get('[data-id="row.1"]').should('exist');

    cy.get('[data-id="row.1"]')
        .invoke('attr', 'data-rowindex')
        .should('eq', '2');

});
