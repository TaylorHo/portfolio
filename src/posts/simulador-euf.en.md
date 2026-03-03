---
title: 'EUF (Unified Physics Exam) Practice Test Platform'
description: 'How the EUF Simulator came to be: a free, open-source web tool for generating practice tests and study flashcards based on previous editions of the Unified Physics Exam.'
date: '2026-03-02'
published: true
categories:
  - Career
  - Science
  - Innovation
  - Technology
---

A very important milestone in the life of every Brazilian physicist is the **Unified Physics Exam**, known as the EUF. The exam is an entry requirement for virtually all federal universities that offer graduate programs in physics, and preparing for it is no simple task.

When looking for study materials, I came across a considerable shortage of resources. At the time I started preparing, one of the few available initiatives was the series of solutions to past exams made by the [Uai Física](https://www.youtube.com/@UaiFisica) YouTube channel — to which many students owe a great deal. Today the channel offers more comprehensive prep courses, but for a long time there was almost nothing structured to help those taking the EUF.

Faced with that, I decided to create a practice test tool to study based on previous exams.

## First attempt

The first version was a simple exam generator, [archived on GitHub](https://github.com/TaylorHo/gerador-de-simulados-do-EUF). It worked for initial use, but the generated tests were barely customizable — any variation required editing the code directly. Clearly not a convenient solution for ongoing use.

## The current version: EUF Simulator

After that initial experience, I developed a more complete web tool: the [EUF Simulator](https://euf.hoffmann.io).

It includes two main features:

- **Practice test generator** — lets you build personalized exams using questions from previous EUF editions;
- **Study flashcards** — for reviewing content quickly and iteratively.

### Online and printed tests

Practice tests can be taken directly in the browser, but they can also be printed. This part required special care in implementation. The flow works like this:

1. The student generates the test;
2. With one click, prints the test — from the same screen where it could be solved online;
3. After filling out the printed answer sheet, it can be scanned back into the site via QR Code;
4. The camera reads the answer sheet found at the end of the printed version;
5. Results are computed automatically.

The most challenging part was reading the answers from the printed sheet, but the result turned out quite nice and useful.

### Question review

Both in the flashcards and on the results screen at the end of a test, it's possible to review incorrectly answered questions. For each question, there is:

- a direct link to ChatGPT with the question already formulated;
- an option to copy the optimized prompt for use with other AI tools;
- a link to the corresponding solution video on the Uai Física YouTube channel.

## Technology and access

The project was built with **SvelteKit** and is fully static, which makes deployment straightforward on any platform — Vercel, Cloudflare Pages, S3, and others.

The code is open source and all questions from previous editions are available in the [TaylorHo/simulado-euf](https://github.com/TaylorHo/simulado-euf) repository. The tool will remain free — to ensure this, the project uses the AGPL-3.0 license, which requires any forks of the project to also remain free and open source.

## Next steps

Some improvements I still plan to implement:

- Detailed categorization of questions by topic, not just by area — which would allow more precisely identifying subjects with lower performance and better directing study efforts;
- Adding the exact timestamp of each solution in the YouTube video links, to speed up review;
- Addition of non-intrusive ads to help cover maintenance costs — designed to appear only between some flashcards and at the end of tests, without interfering with the study experience. The idea is to keep a toggle that allows disabling them for those who prefer.

---

If you have any comments or suggestions, leave them in the comments below!

Again, the project link: [https://euf.hoffmann.io](https://euf.hoffmann.io)
