/// <reference types="cypress" />
import { mount } from 'cypress-angular-unit-test'
import { HeroDetailComponent } from './hero-detail.component'

describe('HeroDetailComponent', () => {
  it('works', () => {
    mount(HeroDetailComponent)
    cy.contains('Welcome to angular-cypress-unit!')
  })
})
