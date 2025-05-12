# Projeto de Testes Automatizados com CodeceptJS

Este projeto utiliza o **CodeceptJS** para automação de testes end-to-end da funcionalidade de login do sistema.

## Pré-requisitos

Antes de iniciar o projeto, certifique-se de ter o **Node.js** instalado.  
Em seguida, instale as dependências do projeto com o comando:

```bash
npm install

```

## Executando os testes

Para rodar os testes, utilize o seguinte comando:

```bash
npx codeceptjs run

```

## Plano de Testes

### 🔐 Feature: Login
✅ Cenário 1: Login com sucesso  
Dado que o usuário esteja na tela inicial do sistema  
E acesse a tela de login  
Quando informar os dados para logar  
Então deve ser apresentada a tela de usuário logado  

❌ Cenário 2: Tentando logar digitando apenas o e-mail  
Dado que o usuário esteja na tela inicial do sistema  
E acesse a tela de login  
Quando o usuário digitar apenas o e-mail para logar  
Então deve ser apresentada a mensagem “Senha inválida.”  

❌ Cenário 3: Tentando logar sem digitar e-mail e senha  
Dado que o usuário esteja na tela inicial do sistema  
E acesse a tela de login  
Quando clicar em “Login” sem digitar usuário e senha  
Então deve ser apresentada a mensagem “E-mail inválido.”  

❌ Cenário 4: Tentando logar digitando apenas a senha  
Dado que o usuário esteja na tela inicial do sistema  
E acesse a tela de login  
Quando o usuário digitar apenas a senha para logar  
Então deve ser apresentada a mensagem “E-mail inválido.”  

## Estrutura do Projeto

```bash
login_test.js — Contém os arquivos de teste automatizado ( apenas o login )

codecept.conf.js — Arquivo de configuração do CodeceptJS
```
