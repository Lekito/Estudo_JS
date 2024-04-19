Tecnologias
Typescript

1- Instalar globalmente o TypeScript no pc
### npm install -g typescript

2- Criar package.json: 
### npm init --y

3- Instalar localmente o TypeScript 
### npm i D typescript ou npm install typescript --save-dev

4- Inicializar o TypeScript no progeto:
### npx tsc --init


# Como rodar o projeto
1 - Clone o repositório

2 - Instale as dependeências

npm install
3 - Execute o projeto

npm run dev
## Desafios
[x ] Implementar os métodos de depósito (deposit) e saque (withdraw) na classe GoAccount

Os valores dos saldos devem ser alterados, de acordo com o valor informado para depósito
Apenas contas com o status true e saldo (balance) maior que o valor solicitado podem fazer saques
[x ] Implementar o método de empréstimo (getLoan) na classe CompanyAccount

Os valores do saldos deve ser acrescidos, de acordo com o valor informado para empréstimo
Apenas contas com o status true podem fazer empréstimo
[x ] Criar um novo tipo de conta a partir da GoAccount

Esta conta não deve receber novos atributos
Esta conta terá um método de depósito, que acresce 10 a mais ao valor informado para depósito. (Ex: Um depósito de 100, será de 110 no final)
[x ] Todos os atributos de qualquer conta devem ser privados

[x ] Os atributos name e accountNumber não podem ser alterados internamente ou externamente

[x ] Criar instancias para cada um dos tipos de conta no app.ts e executar os métodos possíveis.
