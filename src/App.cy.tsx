import React from 'react';
import App from './App';
import { mount } from '@cypress/react18'

it('renders learn react link', () => {
    mount(<App />);
    cy.get('p[data-testid="read-the-docs"]').should('exist');
});
