---
title: 'Plataforma de simulados do EUF (Exame Unificado de Física)'
description: 'Como surgiu o Simulador EUF: uma ferramenta web gratuita e de código aberto para geração de simulados e flashcards de estudo baseados nas provas anteriores do Exame Unificado de Física.'
date: '2026-03-02'
published: true
categories:
  - Carreira
  - Ciência
  - Inovação
  - Tecnologia
---

Um passo muito importante na vida de todo físico brasileiro é o **Exame Unificado de Física**, o EUF. O exame é requisito de entrada em praticamente todas as universidades federais que oferecem programas de pós em física, e a preparação para ele não é algo simples.

Ao buscar materiais de estudo, me deparei com uma escassez considerável de recursos. Na época em que comecei a me preparar, uma das poucas iniciativas disponíveis eram as soluções das provas anteriores feitas pelo canal [Uai Física](https://www.youtube.com/@UaiFisica) — ao qual muitos estudantes devem muito. Hoje o canal oferece preparatórios mais completos, mas por um bom tempo não havia quase nada estruturado para ajudar quem ia fazer o EUF.

Diante disso, resolvi criar uma ferramenta de simulados para estudar com base nas provas anteriores.

## Primeira tentativa

A primeira versão foi um gerador de simulados simples, [arquivado no GitHub](https://github.com/TaylorHo/gerador-de-simulados-do-EUF). Funcionou para um primeiro uso, mas os simulados gerados eram pouco customizáveis — qualquer variação exigia mexer diretamente no código. Claramente não era uma solução conveniente para uso contínuo.

## A versão atual: Simulador EUF

Depois dessa experiência inicial, desenvolvi uma ferramenta web mais completa: o [Simulador EUF](https://euf.hoffmann.io?utm_source=portfolio).

Ela inclui dois recursos principais:

- **Gerador de simulados** — permite montar provas personalizadas com questões das edições anteriores do EUF;
- **Flashcards de estudo** — para revisar conteúdos de forma rápida e iterativa.

### Simulados online e impressos

Os simulados podem ser feitos diretamente no navegador, mas também podem ser impressos. Essa parte levou um cuidado especial de implementação. O fluxo funciona assim:

1. O estudante gera o simulado;
2. Com um clique, imprime o simulado — na mesma tela em que seria possível resolvê-lo online;
3. Após preencher a folha de respostas impressa, ela pode ser carregada de volta pelo site via QR Code;
4. A câmera lê a folha de respostas que fica no final da versão impressa;
5. Os resultados são computados automaticamente.

A parte que mais deu trabalho foi a leitura das respostas a partir da folha impressa, mas o resultado ficou bem legal e útil.

### Revisão das questões

Tanto nos flashcards quanto na tela de resultados ao final de um simulado, é possível revisar as questões respondidas incorretamente. Para cada questão, há:

- um link direto para o ChatGPT com a pergunta já formulada;
- uma opção para copiar o enunciado otimizado para uso em outras IAs;
- um link para o vídeo de resolução correspondente no canal do Uai Física, no YouTube.

## Tecnologia e acesso

O projeto foi desenvolvido com **SvelteKit** e é totalmente estático, o que facilita o deploy em qualquer plataforma — Vercel, Cloudflare Pages, S3, entre outras.

O código é aberto e todas as questões das edições anteriores estão no repositório [TaylorHo/simulado-euf](https://github.com/TaylorHo/simulado-euf). A ferramenta permanecerá gratuita - para garantir isso o projeto usa a licença AGPL-3.0, que faz com que possíveis forks do projeto devam permanecer gratuitos e de código livre.

## Próximos passos

Algumas melhorias que ainda pretendo implementar:

- Categorização detalhada das questões por assunto, não apenas por área — o que permitiria identificar com mais precisão os tópicos com menor desempenho e direcionar melhor os estudos;
- Adicionar o tempo exato de cada resolução nos links dos vídeos do YouTube, para agilizar a revisão;
- Adição de anúncios não intrusivos para ajudar a cobrir os custos de manutenção — pensados para aparecer apenas entre alguns flashcards e ao final dos simulados, sem interferir na experiência de estudo. A ideia é manter um interruptor que permita desativá-los para quem preferir.

---

Se você tiver algum comentário ou sugestão, deixe nos comentários abaixo!

Novamente, o link do projeto: [https://euf.hoffmann.io](https://euf.hoffmann.io?utm_source=portfolio)
