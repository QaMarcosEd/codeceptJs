Feature('login');

Scenario('Login com sucesso',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/')
    I.click('Login')
    I.waitForText('Login', 10)
    I.fillField('#user', 'marcosedaraujo@gmail.com')
    I.fillField('#password', 'dudu2203')
    I.click('#btnLogin')
    I.waitForText('Login realizado', 3)
}).tag('@sucesso');

Scenario('Tentando Logar digitando apenas o e-mail',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/')
    I.click('Login')
    I.waitForText('Login', 10)
    I.fillField('#user', 'marcosedaraujo@gmail.com')
    I.click('#btnLogin')
    I.waitForText('Senha inválida.')
});

Scenario('Tentando logar sem digitar e-mail e senha',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/')
    I.click('Login')
    I.waitForText('Login', 10)
    I.click('#btnLogin')
    I.waitForText('E-mail inválido.')
});

Scenario('Tentando Logar digitando apenas a senha',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/')
    I.click('Login')
    I.waitForText('Login', 10)
    I.fillField('#password', 'zecapagodinho123')
    I.click('#btnLogin')
    I.waitForText('E-mail inválido.')
});