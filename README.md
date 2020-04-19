## Projeto Calculadora de Pitagóras
 :pushpin:  Clique [aqui]() para usar a calculadora de Pitagóras.

## Índice:
* [1. Contextualização](#1-contextualização)
* [2. Objetivo](#2-objetivo)
* [3. Interface do Usuário (UI) e Experiência do Usuário (UX)](#3-UI-UX)
* [4. 4. Árvore de diretórios e arquivos:](#4-árvore-de-diretórios-e-arquivos)
* [5. Scripts e Arquivos](#5-scripts-e-arquivos)
* [6. Outras informações:](#6-outras-informações)
* [7. Autora](#7-autora)
* [8. Agradecimentos](#8-agradecimentos)
* [9. Créditos](#9-creditos)

## 1. Contextualização:
Podemos estabelecer as relações entre os lados de um triângulo retângulo a partir do ___Teorema de Pitagorás___. Pitagóras foi um  um filósofo, matemático, astrônomo e músico nascido em 570 a.c. na Grécia Antiga e que fez importantes contribuições para o ramo da geometria (fonte: [Wikipedia](https://pt.wikipedia.org/wiki/Pit%C3%A1goras)). Em seu teorema mais conhecido, Pitagorás prevê que existe uma relação matemática bem definida entre os comprimentos dos lados de qualquer triângulo retângulo: a soma das áreas dos quadrados construídos sobre os catetos equivale à area do quadrado construído sobre a hipotenusa. A hipotenusa (h) é o lado oposto ao ângulo reto, sendo o maior lado do triângulo, e os catetos (a e b) são os outros dois lados que o formam. A partir deste teorema, podmos derivar um enunciado que nos permite entender a ideia de forma mais simples: __em qualquer triângulo retângulo o comprimento da hipotenusa (maior lado) ao quadrado é igual a soma dos quadrados dos dois catetos__. Ou seja: __h² = a² + b²__. <br>
Para ilustrar, veja abaixo o mapa mental que ilustra essa ideia (fonte: [Luis, R. Brasil Escola](https://brasilescola.uol.com.br/matematica/teorema-pitagoras.htm): <br>
![Mapa mental do Teorema de Pitagórias](assets/mindmap.jpeg)


## 2. Objetivo:
Aplicação desenvolvida para calcular o comprimento da hipotenusa de um triângulo retângulo com base no Teorema de Pitagóras. Para isso o usuário deve informar as medidas dos dois catetos (a e b) digitando os valores nos campos corretos presentes na da calculadora.  E então deverá receber o retorno com a medida da hipotenusa, calculada com base na expressão matemática mostrada no tópico anterior. 

## 3. Interface do Usuário (UI) e Experiência do Usuário (UX): 
A interface da calculadora foi pensada para ser simples e objetiva, de forma a manter a atenção do usuário focada no seu objetivo principal: obter as medidas dos lados de um triângulo de seu interesse. Exatamente por isso escolhi manter um plano de fundo neutro e sóbrio, para que a calculadora ficasse em primeiro plano e a aplicação simulasse de forma mais efetiva a experiência de estar manipulando uma calculadora física e estar concentrado nessa tarefa, sem a necessidade de processar informações visuais adicionais. O layout é composto por três partes: __área de texto__, __botões numéricos__ e __botões de configuração__. <br>
*1. Área de texto: composta por duas caixas que recebem os valores dos catetos (a e b) inseridos pelo usuário (_inputs_). Para inserir valores em um desses campos o usuário deverá clicar sobre ele e perceber o cursor piscando. Não há limites de caracteres, mas recomenda-se valores de até 7 digítos para uma visualização mais agradável. Uma terceira caixa de texto retorna o valor da hipotenusa (_output_) com precisão de duas casas decimais após a solicitação do resultado pelo usuário.<br>
*2. Botões numéricos: composta por digítos de __0 a 9__ e marcador decimal __(.)__.O usuário pode inserir valores tanto pelos botões numéricos da calculadora (clicando sobre eles) quanto pelo uso das teclas do seu computador. <br>
*3. Botões de configuração: o botão resultado __(=)__ retorna o valor da hipotenusa, o botão __reset__ limpa todos os campos, e o botão __close__ fecha a aplicação (exige duplo clique).


Abaixo segue uma imagem com a evolução do planejamento e execução da interface, com o protótipo de baixa fidelidade, o protótipo de média fidelidade e a interface final do projeto.

## 4. Árvore de diretórios e arquivos:
```
├── README.md
├── src
|   ├── index.html
│   ├── main.js
│   └── style.css
└── assets
    ├── mindmap.jpeg
```
* README.md - apresentação e documentação do projeto
* src/index.html - arquivo com a marcação HTML e link para os arquivos CSS e JavaScript.
* src/main.js: implementa a lógica de programação e a comunicação com o servidor usando Javascript.
* src/style.css: arquivo com a estilização dos elementos HTML.
* assets/mindmap.jpeg: imagem do mapa mental do Teorema de Pitagórias.

## 5. Outras informações:
*Projeto desenvolvido com JavaScript puro (sem utilização de frameworks)
*Autora: Nathalia Monalisa Francisco (nathaliamonalisa@gmail.com)
