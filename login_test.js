Feature('login');

Scenario('success login',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/')
    I.click('Login')
    I.waitForText('Login', 10)
    I.fillField('#user', 'marcosedaraujo@gmail.com')
    I.fillField('#password', 'dudu2203')
    I.click('#btnLogin')
    I.waitForText('Login realizado', 3)
    I.wait(10)
});

Scenario('Invalid email',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/')
    I.click('Login')
    I.waitForText('Login', 10)
    I.fillField('#user', 'marcosedaraujo$gmail.zeca')
    I.fillField('#password', 'dudu2203')
    I.click('#btnLogin')
    I.waitForText('E-mail inválido.')
});

Scenario('empty email',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/')
    I.click('Login')
    I.waitForText('Login', 10)
    I.click('#btnLogin')
    I.waitForText('E-mail inválido.')
});

Scenario('Invalid password',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/')
    I.click('Login')
    I.waitForText('Login', 10)
    I.fillField('#user', 'marcosedaraujo@gmail.com')
    I.fillField('#password', 'aa')
    I.click('#btnLogin')
    I.waitForText('Senha inválida.')
});

Scenario('Empty password',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/')
    I.click('Login')
    I.waitForText('Login', 10)
    I.fillField('#user', 'marcosedaraujo@gmail.com')
    I.click('#btnLogin')
    I.waitForText('Senha inválida.')
});