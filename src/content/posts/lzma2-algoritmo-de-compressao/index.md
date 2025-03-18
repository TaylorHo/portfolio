---
title: "LZMA2 - O melhor algoritmo de compressão atual"
summary: 'Para compressões maiores e mais eficazes podemos usar algoritmos de compressão mais "poderosos".'
date: "Jan 12 2023"
draft: false
tags:
  - Criptografia
  - Algoritmos
  - Hashing
  - Linux
---

![Hashing Algoritm](./hashing-algoritm.png)

Compressão de dados muitas vezes é algo essencial, principalmente em aplicações que contam com alto consumo de rede ou tráfego de arquivos muito grandes. Para muitos casos, criar um arquivo .zip, .rar, .7z ou .tar.gz resolve o problema. Mas, e se os arquivos a serem comprimidos forem muito grandes? O ideal nesse caso, sempre vai ser comprimir o arquivo ao máximo (sem perda de dados, obviamente).

Para compressões maiores e mais eficazes, ao invés de usarmos um compressor de arquivos genérico, podemos usar diretamente algoritmos de compressão mais "poderosos".

> E é aí que entra o [LZMA2](https://en.wikipedia.org/wiki/Lempel%E2%80%93Ziv%E2%80%93Markov_chain_algorithm).

O LZMA2 é uma adaptação do LZMA - _Lempel-Ziv-Markov chain algorithm_ -, algoritmo que comprime os dados a uma velocidade maior, mas que resulta em um arquivo menos compacto - vulgo menos comprimido. E o LZMA, por sua vez, é uma evolução do LZ77, algoritmo ainda mais rápido que o LZMA, mas que resulta em um arquivo final ainda menos comprimido. Todos os 3 algoritmos podem ser usados, dependendo da sua necessidade. Se preferir um processamento mais rápido e um arquivo menos comprimido não for problema, o LZ77 resolve. Se preferir um arquivo mais compacto, importando menos a velocidade de processamento, o LZMA2 é a melhor opção. Se preferir um meio termo, o LZMA resolve.

## Como funciona o LZMA2

O algoritmo usa [compressão de dicionário](https://en.wikipedia.org/wiki/Dictionary_coder) - também conhecido como método de substituição -, e performa compressão de dados sem perdas.

Para ficar mais claro, a compressão de dicionário funciona basicamente assim:

Suponhamos que temos a seguinte string: `AAAA BBBB CCCC DDDD / AAAA BBBB CCCC DDDD`

O algoritmo vai mapear isso para um "dicionário de decodificação", dessa forma:

```bash
# primeira_execucao
0 = "AAAA"
1 = "BBBB"
2 = "CCCC"
3 = "DDDD"
```

Convertendo, a string ficará da seguinte maneira: `0 1 2 3 / 0 1 2 3`.

Deu pra entender?

A partir daí, o algoritmo é executado de novo e de novo, quantas vezes forem necessárias. Por exemplo, comprimindo a string do resultado, vamos ampliar o nosso dicionário:

```bash
# primeira_execucao
0 = "AAAA"
1 = "BBBB"
2 = "CCCC"
3 = "DDDD"
# segunda_execucao
4 = "0 1 2 3"
```

Resultando em: `4 / 4`.

> Porém, tudo isso a nível de bits.

## Taxa de compressão

Olhando o exemplo, o tamanho do dicionário não compensa a string original, mas isso é por que nosso exemplo é pequeno. **Imagine o mesmo algoritmo aplicado a um arquivo de 1GB ou maior. Os resultados são imensos.**

Em uma aplicação real, um dump SQL do banco de dados, de **600mb**, resultou em um arquivo comprimido de **16mb**. Ou seja, **o arquivo original foi comprimido 3.750%**.

Porém, essa compressão demorou cerca de 2min, ou seja, o algoritmo não é tão rápido, portanto a escolha do algoritmo é essencial para balancear a compressão e velocidade de processamento.

## Como utilizar o LZMA2

O algoritmo está disponível para diversas plataformas, linguagens de programação e sistemas operacionais. Basta procurar. No exemplo a seguir, vamos utilizar a biblioteca nativa para Linux, através de linha de comando.

Uso básico:

```bash
lzma [arquivo]

# Exemplo

lzma arquivo.json
```

O uso básico usa os níveis padrão de compressão, tamanho de dicionário, etc. O valor padrão é _6_ (que já é o LZMA2). Para qualquer valor abaixo disso será usado o LZMA.

### Definindo níveis de compressão

Uma compressão de _"nível 6"_ já é muito boa, mas podemos melhorar ainda mais isso. Para definir um nível de compressão diferente, usamos o valor como flag, com o traço na frente (exemplos: -1, -2, ..., -9). Para mais detalhes, veja a tabela abaixo:

<table>
  <thead>
    <tr>
      <td>Preset</td>
      <td>Tamanho do dicionário</td>
      <td>Threads da CPU</td>
      <td>Uso de Memória</td>
      <td>Uso de memória na descompressão</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>-0</td>
      <td>256 KiB</td>
      <td>0</td>
      <td>3 MiB</td>
      <td>1 MiB</td>
    </tr>
    <tr>
      <td>-1</td>
      <td>1 MiB</td>
      <td>1</td>
      <td>9 MiB</td>
      <td>2 MiB</td>
    </tr>
    <tr>
      <td>-2</td>
      <td>2 MiB</td>
      <td>2</td>
      <td>17 MiB</td>
      <td>3 MiB</td>
    </tr>
    <tr>
      <td>-3</td>
      <td>4 MiB</td>
      <td>3</td>
      <td>32 MiB</td>
      <td>5 MiB</td>
    </tr>
    <tr>
      <td>-4</td>
      <td>4 MiB</td>
      <td>4</td>
      <td>48 MiB</td>
      <td>5 MiB</td>
    </tr>
    <tr>
      <td>-5</td>
      <td>8 MiB</td>
      <td>5</td>
      <td>94 MiB</td>
      <td>9 MiB</td>
    </tr>
    <tr>
      <td>-6</td>
      <td>8 MiB</td>
      <td>6</td>
      <td>94 MiB</td>
      <td>9 MiB</td>
    </tr>
    <tr>
      <td>-7</td>
      <td>16 MiB</td>
      <td>6</td>
      <td>186 MiB</td>
      <td>17 MiB</td>
    </tr>
    <tr>
      <td>-8</td>
      <td>32 MiB</td>
      <td>6</td>
      <td>370 MiB</td>
      <td>33 MiB</td>
    </tr>
    <tr>
      <td>-9</td>
      <td>64 MiB</td>
      <td>6</td>
      <td>674 MiB</td>
      <td>65 MiB</td>
    </tr>
  </tbody>
</table>

Exemplo com nível de compressão (usando preset máximo):

```bash
lzma [arquivo] -9

# Exemplo

lzma arquivo.json -9
```

### Compressão extrema

Para a compressão extrema, usamos o mesmo padrão, mas com o _"e"_ após o número. Desta forma, o arquivo pode ser ainda mais comprimido - o que consome mais hardware e leva mais tempo de processamento.

<table>
    <thead>
      <tr>
        <td>Preset</td>
        <td>Tamanho do dicionário</td>
        <td>Threads da CPU</td>
        <td>Uso de Memória</td>
        <td>Uso de memória na descompressão</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>-0e</td>
        <td>256 KiB</td>
        <td>8</td>
        <td>3 MiB</td>
        <td>1 MiB</td>
      </tr>
      <tr>
          <td>-1e</td>
          <td>1 MiB</td>
          <td>8</td>
          <td>9 MiB</td>
          <td>2 MiB</td>
      </tr>
      <tr>
          <td>-2e</td>
          <td>2 MiB</td>
          <td>8</td>
          <td>17 MiB</td>
          <td>3 MiB</td>
      </tr>
      <tr>
          <td>-3e</td>
          <td>4 MiB</td>
          <td>7</td>
          <td>32 MiB</td>
          <td>5 MiB</td>
      </tr>
      <tr>
          <td>-4e</td>
          <td>4 MiB</td>
          <td>8</td>
          <td>48 MiB</td>
          <td>5 MiB</td>
      </tr>
      <tr>
          <td>-5e</td>
          <td>8 MiB</td>
          <td>7</td>
          <td>94 MiB</td>
          <td>9 MiB</td>
      </tr>
      <tr>
          <td>-6e</td>
          <td>8 MiB</td>
          <td>8</td>
          <td>94 MiB</td>
          <td>9 MiB</td>
      </tr>
      <tr>
          <td>-7e</td>
          <td>16 MiB</td>
          <td>8</td>
          <td>186 MiB</td>
          <td>17 MiB</td>
      </tr>
      <tr>
          <td>-8e</td>
          <td>32 MiB</td>
          <td>8</td>
          <td>370 MiB</td>
          <td>33 MiB</td>
      </tr>
      <tr>
          <td>-9e</td>
          <td>64 MiB</td>
          <td>8</td>
          <td>674 MiB</td>
          <td>65 MiB</td>
      </tr>
    </tbody>
</table>

Exemplo com nível de compressão extremo (usando preset máximo):

```bash
lzma [arquivo] -9e

# Exemplo

lzma arquivo.json -9e
```

## Descompactar / Descomprimir

Para descompactar um arquivo compactado com LZMA2, basta adicionar a flag `-d`, juntamente com o nível de compressão escolhido na hora de comprimir.

Exemplo de descompressão:

```bash
lzma [arquivo] -9e -d

# Exemplo

lzma arquivo.json -9e -d
```

## Conclusão

O uso do LZMA2, do LZMA ou do LZ77 depende muito de suas necessidades - tempo de processamento e nível de compressão. De toda forma, gastar uns segundos a mais compactando um arquivo, assim economizando vários megas de consumo de rede, pode ser extremamente vantajoso.

Mais informações sobre o uso do comando `lzma` no terminal podem ser [vistos aqui](https://www.commandlinux.com/man-page/man1/lzma.1.html).
