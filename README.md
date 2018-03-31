[TOC]

# Introdução

​	Nesse curso, será lecionada de forma prática a metodologia de desenvolvimento de aplicações WEB com recursos modernos e amplamente utilizados no mercado de trabalho. Para tal, iremos utilizar das seguintes ferramentas:

* Github


* ExpressJS
* Bootstrap 4
* MongoDB

		Entre diversos outros módulos adicionados ao longo desse *bootcamp*.

# Instalação

### NodeJS

​	O NodeJS pode ser baixado por meio do link: https://nodejs.org/en/. Após a sua instalação, podemos agora utilizar o **Node Package Manager** (NPM), que consiste no maior registro de software do mundo, sendo o gerenciador de pacotes do JavaScript. Ele será utilizado no restante do curso para gestão de dependências do nosso projeto.

### ExpressJS

​	O **ExpressJS** (http://expressjs.com/pt-br/) é um framework web minimalista, que fornece uma fina camada de recursos capazes de realizar o tratamento de requisições ao nosso sistema com máximo desempenho.

​	Para iniciarmos o nosso projeto, utilizaremos uma ferramenta geradora de aplicativos ExpressJS, sendo essa instalada globalmente no sistema utilizando o seguinte comando no terminal:

```bash
npm install -g express-generator
```

​	Após instalada, abra o terminal na pasta que irá conter o diretório do projeto e execute o seguinte comando:

```bash
express --view=hbs --css=sass smart-management
```

​	O projeto será criado com a seguinte estrutura de arquivos:

```
.
├── app.js
├── bin
│   └── www
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.sass
├── routes
│   ├── index.js
│   └── users.js
└── views
    ├── error.hbs
    ├── index.hbs
    └── layout.hbs
```

​	Feito isso, devemos navegar até a pasta do projeto e instalar as dependências necessárias:

```bash
cd smart-management
npm install
```

​	Por fim, podemos executar o nosso novo aplicativo utilizando o comando:

```bash
npm start
```

​	Esse comando irá iniciar o aplicativo NodeJS por meio de um script definido no arquivo `packages.json`, um arquivo de configuração contendo informações relevantes sobre a aplicação e suas dependências, tal como:

* Nome
* Versão
* Privacidade
* Dependências de Desenvolvimento
* Dependências
* Scripts

​	Nosso novo aplicativo pode ser acessado pela porta 3000 da interface de rede, ou seja, pelo endereço http://localhost:3000.

### Nodemon

​	Ao realizarmos modificações nos arquivos do nosso projeto, podemos verificar que esses não estão sendo atualizados pelo ExpressJS. Para que não tenhamos que reiniciar o nosso aplicativo sempre que fizermos alterações em seu código, podemos utilizar o **Nodemon** (https://nodemon.io/), uma ferramenta capaz de monitorar mudanças no código-fonte de uma aplicação NodeJS e automaticamente reiniciar o servidor! Ele pode ser instalado pelo comando:

```bash
npm install -g nodemon
```

​	Para que ele funcione, precisamos simplesmente alterar o script `npm start` de execução do nosso `packages.json` para:

```JSON
...
"scripts": {
    "start": "nodemon ./bin/www"
},
...
```

​	Assim, sempre que executarmos o comando `npm start` ele automaticamente irá iniciar o servidor com o **Nodemon**.

### Bootstrap

​	O **Bootstrap** (https://getbootstrap.com/) é uma biblioteca *open-source* para desenvolvimento front-end de aplicações WEB, facilitando a implementação ágil e responsividade do projeto. Acesse o link https://getbootstrap.com/docs/4.0/getting-started/download/ e faça o download dos arquivos compressos. Além disso, o Bootstrap tem como dependência o **JQuery** (https://jquery.com/), outra biblioteca JavaScript amplamente utilizada para facilitar manipulação de elementos HTML, tratamento de eventos, animações e requisições assíncronas, entre outros. Ele pode ser obtido por meio do link https://code.jquery.com/jquery-3.3.1.min.js (Clique com o botão direito na página e salve o arquivo com o nome `jquery.js`).

​	Após baixarmos esses arquivos, iremos organizá-los em nosso projeto seguindo essa estrutura:

```
.
├── app.js
├── bin
├── package.json
├── public
│   ├── images
│   ├── css/
│   │   ├── bootstrap.min.css
│   │   └── styles.sass
│   └── js/
│       ├── bootstrap.bundle.min.js
│       └── jquery.js
├── routes
└── views        
```

​	Por fim, devemos fazer as seguintes alterações nos arquivos `styles.sass` e `layout.hbs`:

```css
/* styles.sass */

@import bootstrap.min.css

...
```

```html
<!-- layout.hbs  -->
...
<body>
    {{{body}}}
    <script src="/javascripts/jquery.js" charset="utf-8"></script>
    <script src="/javascripts/bootstrap.bundle.js" charset="utf-8"></script>
</body>
...
```

