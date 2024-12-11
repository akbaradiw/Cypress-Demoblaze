import SignupPom from '../../pom/Signup/signup.cy.js';

describe('Signup Feature', () => {
    beforeEach(() => {
      SignupPom.visitPage()
      SignupPom.signupMenu()
    })
  
    it('Verify Signup Success', () => {
      SignupPom.inputUserName()
      cy.wait(1000) 
      SignupPom.inputPassword()
      SignupPom.signupButton()   
    })

    it('Verify Signup Failed with Registerd Username', () => {
      SignupPom.ExistingUserName()
      cy.wait(1000)
      SignupPom.inputPassword()
      SignupPom.signupButton()
    })
  })