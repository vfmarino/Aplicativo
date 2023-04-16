# Aplicativo

***

## Breve Descrição

Nesse Arquivo README.md, pretendo descrever o passo a passo da criação de um aplicativo de gestão de ativos financeiro.

Gostaria de deixar as funcionalidades que desejo trazer em topicos para organizar o que pretendo trazer e futuramente essa lista de funções deve mudar, sendo essa primeira um ponto de partida para iniciarlizar o projeto.

***

## Lista de Funcionalidades 1

1 - Cadastrar Usuário

2 - Lista ideial com Notas, dividindo por Categorias de ativos:
Categorias: Criptomoedas, Ouro, Mercado Americano(ações, renda fixa, FII etc), Mercado Brasileiro(ações, renda fixa, FII etc), possivelmente outros mercados(fazer uma pesquisa de quais mercados seriam necessários). Criar um Dashboard com Graficos gerando a % ideial para cada categoria, comparativo entre o atual e o planejado,

3 - Lista ideial com Notas para Cada Ativo de Cada Categoria e também DashBoard com % ideal para cada ativo, comparativo entre o atual e o planejado.

4 - Dentro da pagina do usuario:
- criar  carteira: cada carteira teria lista ideial(planejamento) 
- opção de adição de ativos na cateria, quantidade, valor pago e data.
- opção de subtrair uma quantidade de determinado ativo gerando novo preço medio.
- preço medio para cada ativo na carteira

5 - Listagem de Proventos, dividendos e juros pagos, esses nao devem ser considerados na carteira, porém um alerta de recebimento desse provento caso tenha o ativo e a quantidade.

6 - Resumo para Declaração de Imposto de Renda

7 - Alerta de preços para compra ou venda de algum ativo.

8 - Analise de Risco de Ativos mais votados(somente para assinantes?)

9 - Tutorial de Segurança

10 - Gestão Financeira, Gerenciamento de Contas a pagar e rendas a receber.

11 - Possivelmente uma criptomoeda minerada ao utilizar o aplicativo, essa ideia está sendo listada para pensar na viabilidade da mesma se agregaria valor ao app ou não.

***

### 1° Passo

Criação do Projeto e breve descrição do que se pretende fazer incialmente em README.md

### 1° Commit - App created and Description README

***

### 2° Passo

- Criação dos principais componentes pelo terminal:
ng g c home
ng g c header
ng g c footer

Adição dos componentes no app.component.html
adição do patch home em app-routing

npm run start para testar 

Adicionado Css Basico em styles.css
Para definir a Fonte adicionamos o import dela gerado do google fonts
definimos margin e padddin 0 e a fonte 
font-family: "Kanit", sans-serif;

Definição de variaveis para cores.
Css basico de header e footer.( testando e visualizando as cores para ter uma ideia inicial)

Introduzido Conteudo Inicial de HTML e CSS.

### 2° Commit - FRIST HTML AND CSS

***

### 3° Passo

- criado O texto e nome Como MONEYHIVE terporariamente, gostei do nome porém existe um app na UK com mesmo nome
- adicionado uma breve descrição sobre o q vai ser o app, depois quando tiver imagens e funcionalidades vamos melhorar essa pagina inicial.

Vamos agora primeiramente Criar um Componenent para cadastrar um novo usuário.
ng g c register
Criado html do componente register
Nesse component vamos usar form e para isso precisamos declarar na raiz app.module para que forms funcione.

Vamos criar agora uma pasta modelo para adicionar o modelo de usario e os dados que cada usuario pode ter.
ng g m models/user

Inicialmente iremos precisar saber, nome, email, telefone, cpf e uma senha que será criptografada antes de salva no banco de dados, portanto em nosso moedelo são essas as variaveis necessarias.

no arquivo register.component.ts vamos declarar o modelo user.
user : User = new User(); nesse codigo estamos atribuindo a variavel user, uma nova instancia, e essa instancia tem uma classe User, que é a classe referente ao modelo que criamos anteriormente, ou seja um novo objeto que segue a classe User, isso permite acessar as propriedades que vamos receber do nosso formulario html e atribuir ao campo desejado como user.name, user.email e etc, para isso no input adicionamos a proriedade [(ngModel)]="user.name" e entao o typscript entende e atribuie o valor digitado em input para poder ser usado posteriomente, no caso criamos um console.log(this.user)para poder verificar se estava tudo atribuido corretamente para entao criar o serviço e enviar as informaçoes para o back end.

Vamos começar a criar o back end em Node.js em paralelo.

### 3° Commit - User model and Register to consoleUSER

***

### 4° Passo

