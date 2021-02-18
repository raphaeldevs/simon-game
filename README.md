<p align="center">
  <img alt="Switch Game" src="simon-game.png" width="250px">
</p>

<h1 align="center">
  Simon Game <br>
  <code>by raphaeldevs</code>
</h1>

<p align="center">
  Um jogo muito legal feito com HTML, CSS e JavaScript puro
</p>

## Minha história com esse projeto

<p align="justify">Esse projeto surgiu de uma inspiração de post no Instagram de um dev que havia feito um jogo parecido, com isso eu senti vontade de criar a minha versão e me desafiei como programador. Apesar de um iniciante, esse projeto me forçou a começar a girar as engrenagens na minha cabeça e fortalecer minha lógica de programação.</p>

<p align="justify">Eu havia começado a programar usando JS a cerca de 2 meses e foi um baita desafio e também um GRANDE impulso no meu aprendizado, onde eu pude filtrar os meus interesses e descobrir se programação realmente era pra mim. Descobri também uma característica pessoal muito relevante: a de aprender sozinho (pelo menos programação)</p>

<p align="justify">Eu consegui consultar naturalmente a documentação no MDN e experimentar DIVERSAS maneiras de se fazer uma mesma coisa no código, foi um verdadeiro playgroung. Esse mesmo jogo já teve tantas versões minhas que perdi as contas, foi com ele também que eu comecei a sentir a necessidade de usar versionamento de código e então resolvi estudar Git e Github, que por sinal, aborvi rápido e o suficiente pra sair daquele caos.</p>

## Por que Simon Game?

<p align="justify">
Esse projeto é feito com Vanilla JS e usa muito da manipulação da DOM, animações via JS usando o método <code>element.animate()</code>, reprodução de sons, timers... É um ótimo projeto pra fortalecer muitos conceitos do front-end e de uma forma bem divertida e recompensadora.

## Tecnologias
    
<p align="center">

  <img src="https://img.shields.io/badge/HTML-%237159c1?style=badge&logo=html5" alt="HTML">

  <img src="https://img.shields.io/badge/CSS-%237159c1?style=badge&logo=css3" alt="CSS">

  <img src="https://img.shields.io/badge/JavaScript-%237159c1?style=badge&logo=javascript" alt="JavaScript">

</p>

## Aprendizados


* HTML
  * Atribuitos customizados: `data-<custom>`
  ```html 
    <button data-color="red" />
  ```

* CSS
  * Display grid
  * Responsividade
  * Variáveis (Aprendi nesse projeto)
  ```css
    :root {
      --red: #f40000;
    }
    
    button {
      background-color: var(--red);
    }
  ```
  
* JavaScript
  * Manipulando a DOM com `element.querySelector` e `element.querySelectorAll`

  * Animações direto no código usando o método `element.animate(keyframes, config)`

  * Programação orientada a objetos

  * Objeto This

  * Event Listeners: click e keypress

  * Reprodução de sons
  
  * Recuperação dos dados criados usando o atributo `data` no HTML:
  ```javascript
    const button = document.querySelector('button')
    
    const { color } = button.dataset
    
    console.log(color)
      > "red"
  ```


## Conclusão

Esse projeto foi o meu primeiro jogo e uma primeira experiência mais direta com a programação que me trouxe muitos aprendizados e sensações. A cada acerto ou a cada erro, foi um projeto legal de se fazer. Se é iniciante ou busca um código pra praticar, esse repo é pra você. (Ou se estiver me stalkeando pra ver como eu tô codando também XD)
