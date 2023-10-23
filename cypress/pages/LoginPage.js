class LoginPage {

    loginAndCaptureCookies() {
      cy.on('uncaught:exception', (err, runnable) => {
        // Retorne false para evitar que o Cypress falhe automaticamente
        return false;
      });
      cy.visit('/');
      cy.get('#amplify-id-0').type('jorge.luiz@tecsomobi.com.br');
      cy.get('#amplify-id-2').type('Jotateste@123');
      cy.get('.amplify-button--primary').click();
  
      // Capturar o token de acesso do cookie
      cy.getCookie('CognitoIdentityServiceProvider.mhl1ghpkpl40iail1nichccl2.d1f1a2dd-5895-4e04-9fc3-f97e324a6753.accessToken').then(cookie => {
        if (cookie) {
          const accessToken = cookie.value;
          // Agora você pode usar accessToken para suas necessidades
        }
      });
      
      return this;
    }
  }
  
  export default new LoginPage
  
