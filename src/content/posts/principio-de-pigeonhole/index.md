---
title: "O Princípio de Pigeonhole em funções de Hash"
summary: "O Princípio de Pigeonhole é essencial para ditar a quantidade de combinações possíveis em funções de Hash."
date: "Jan 19 2023"
draft: false
tags:
  - Hashing
  - Algoritmos
  - Matemática
---

![Imagem de CalcWorkshop](./pigeonhole.png)

O Princípio de Pigeonhole é um dos principais conceitos por trás da [análise combinatória](https://pt.wikipedia.org/wiki/Combinat%C3%B3ria). O princípio diz que:

> Se **x** items são postos em **y** caixas, e **x > y**, então pelo menos uma caixa vai ter **mais de 1 item**.

Podemos entender melhor esse conceito analisando o diagrama abaixo:

![Imagem de CalcWorkshop](./pigeonhole-diagram.webp)

Dessa forma, se tivermos mais pombos que caixas, teremos uma caixa para cada pombo (com sobra). Se tivermos o mesmo número de pombos e de caixas, ainda teremos uma caixa para cada pombo. Porém, se tivermos mais pombos que caixas, dois ou mais pombos terão de usar a mesma caixa.

## Motivação

Este conceito pode até parecer sem aplicabilidade em um primeiro momento, mas na verdade ele é fundamental em diversos assuntos. Para a área da tecnologia, ele é fundamental para [_funções de hash_](https://pt.wikipedia.org/wiki/Fun%C3%A7%C3%A3o_hash).

## Hashing

Existem diversos [algoritmos de hashing](https://pt.wikipedia.org/wiki/Fun%C3%A7%C3%A3o_hash) conhecidos, tais como o SHA-1, SHA-3, MD5, SHA-256, SHA-512 e entre tantos outros. Algoritmos estes usados para gerar hashes de arquivos, senhas ou textos, por exemplo.

Usando de exemplo o [SHA-256](https://pt.wikipedia.org/wiki/SHA-2), o número no nome do algoritmo representa a quantidade de bits no hash final, ou seja, 256 bits, resultando em 64 caracteres.

O hash gerado por esse algoritmo é representado em [hexadecimal](https://pt.wikipedia.org/wiki/Sistema_de_numera%C3%A7%C3%A3o_hexadecimal), portanto o número total de possibilidades que o SHA-256 consegue criar, é o resultado de 16 símbolos em 64 posições diferente. Ou seja:

> O SHA-256 é capaz de gerar **1.157920892373162e+77** combinações possíveis.

Este é um número finito, limitado. E como sabemos, podemos ter infinitos arquivos diferentes.

Dessa forma podemos estabelecer uma correlação:

> **∞ > 1.157920892373162e+77**

Então, seguindo o Princípio de Pigeonhole, podemos ver que:

> Os Hashes de arquivos ou senhas diferentes, podem acabar sendo iguais, independente de qual algoritmo esteja sendo usado.

## Probabilidade

Como hashes são usadas em diversos sistemas diferentes, pode ocorrer essa duplicidade, o que não seria um problema justamente por se tratarem de sistemas diferentes (por exemplo, um sistema usado unicamente em uma empresa privada e um software usado apenas na China). Essa duplicidade seria um problema apenas no caso de hashes duplicadas em um mesmo sistema.

De toda forma, é algo **pouco provável de acontecer, mas não impossível**
