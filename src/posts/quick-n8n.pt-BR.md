---
title: 'n8n 100% gratuito: guia completo com VM, domínio e IA'
description: 'Como configurar o n8n de forma rápida e 100% gratuita para automatizar processos. Utilizando VM gratuita da Oracle Cloud, domínios gratuitos, SMTP do Google e APIs de IA gratuitas.'
date: '2026-02-10'
published: true
categories:
  - Tecnologia
  - Automação
  - n8n
---

O n8n é uma ferramenta robusta para automatização de processos. Pessoalmente, utilizo para automatizar relatórios, executar ações baseadas em eventos, organizar rotinas e gerenciar finanças pessoais.

Ao configurar uma instância do n8n, custos com infraestrutura começam a se acumular: servidor, domínio, e-mail corporativo e, eventualmente, APIs de IA para workflows mais avançados. Considerando que as cobranças da maioria desses serviços é em dólar, os valores podem se tornar significativos muito rápido.

Este guia demonstra como configurar uma stack completa do n8n sem custos:

1. **Máquina Virtual gratuita** na Oracle Cloud (Always Free)
2. **Domínio gratuito** via provedores open source
3. **SMTP gratuito do Google** para recuperação de senha
4. **APIs de IA gratuitas** para workflows com LLMs

## 1. Configurando uma VM gratuita na Oracle Cloud

A Oracle Cloud oferece o tier **Always Free**, que inclui máquinas virtuais permanentemente gratuitas. A instância `VM.Standard.E2.1.Micro` possui 1GB de RAM, 1 vCPU e 0.48 Gbps de largura de banda — especificações suficientes para executar o n8n.

**Procedimento**

1. Acesse o [cadastro da Oracle Cloud](https://signup.cloud.oracle.com/) e crie sua conta.

> **Nota:** Será solicitado um cartão de crédito para validação, podendo haver uma cobrança temporária que será extornada automaticamente.

2. Acesse o dashboard da Oracle Cloud e clique em **"Create a VM instance"**.

3. Selecione o sistema operacional:
   - O padrão é "Oracle Linux", altere para **Ubuntu**
   - Recomenda-se uma imagem "Minimal" (exemplo: `Canonical Ubuntu 24.04 Minimal`)

4. Clique em **"Change Shape"** e selecione:
   - **Virtual machine** → **Specialty and previous generation** → **VM.Standard.E2.1.Micro**
   - A tag **"Always Free-eligible"** indica elegibilidade para o tier gratuito

5. Configure as demais opções (volume de boot, chave SSH, etc.) e clique em **"Create"**.

6. Após a criação, o IP público da VM será exibido junto com a tag **"Always Free"** identificando a instância.

> **Nota:** Após 30 dias, a Oracle pode enviar e-mails solicitando upgrade da conta. Estes podem ser ignorados caso deseje manter apenas a instância gratuita.

---

## 2. Domínio e SMTP gratuitos

Para disponibilizar o n8n através de um domínio próprio (como `n8n.seudominio.com`) e habilitar recuperação de senha via e-mail, são necessários:

1. Um **domínio ou subdomínio**
2. Um **servidor SMTP**

Aqui vamos ver como obter um domínio e acesso à SMTP gratuitos, mas se você já tiver seus serviços próprios, pode usar eles.

### Domínio gratuito

Provedores que oferecem domínios e subdomínios gratuitos:

- [open-domains.net](https://open-domains.net/)
- [domain.digitalplat.org](https://domain.digitalplat.org/)

Registre-se em um desses serviços e configure um domínio ou subdomínio.

Também existem outros pela internet, vale a pena dar uma olhada.

### SMTP gratuito do Google

O Google disponibiliza servidor SMTP gratuito através do Gmail, adequado para envio de e-mails de recuperação de senha do n8n.

**Procedimento:**

1. Acesse [myaccount.google.com](https://myaccount.google.com/).

2. Navegue até **Segurança** → **Verificação em duas etapas** e ative caso não esteja habilitado.

3. Em **Segurança**, localize a opção **"Senhas de app"**.

4. Gere uma senha de app específica para o n8n.

5. Armazene a senha gerada para uso posterior nas configurações.

**Configurações SMTP do Google:**

- **Host:** `smtp.gmail.com`
- **Porta:** `587` (ou `465` para SSL)
- **Usuário:** seu e-mail do Gmail
- **Senha:** a senha de app que você gerou

> **Tutorial completo:** [Como utilizar o SMTP do Google](https://www.hostinger.com/br/tutoriais/aprenda-a-utilizar-o-smtp-google)

### Configuração DNS

Após obter o domínio gratuito, é necessário apontá-lo para o IP da VM Oracle Cloud.

Configure um **registro DNS do tipo A** com os seguintes parâmetros:

- **Nome/Host:** `@` (para domínio raiz) ou subdomínio desejado (ex: `n8n`)
- **Tipo:** `A`
- **Valor:** IP público da VM Oracle Cloud
- **TTL:** 3600 (ou padrão do provedor)

A interface de configuração varia conforme o provedor de domínio escolhido.

### Planos de e-mail com domínio gratuito

A Hostinger conta com planos de e-mail que já vêm com 1 ano de domínio gratuito. Às vezes acaba sendo mais fácil e rápido de configurar dessa forma, além de que assim você tem maior liberdade de scolha sobre o nome do seu domínio, além de poder criar múltiplos subdomínios para diferentes propósitos.

Dê uma olhada [nos planos de e-mail da Hostinger](https://www.hostinger.com/br/email-profissional?REFERRALCODE=HOFFMANN) (alguns inclusive com 1 ano de domínio grátis) e use o cupom `HOFFMANN` para 20% de desconto.

---

## 3. Instalação do n8n com configuração otimizada

A instalação utiliza um repositório pré-configurado que inclui:

- **Proxy reverso (Caddy)** com provisionamento automático de certificado SSL
- **Configurações otimizadas de desempenho** para o n8n
- **Hardening de segurança** e melhores práticas

Repositório: [TaylorHo/n8n-with-caddy](https://github.com/TaylorHo/n8n-with-caddy)

### Procedimento

1. Conecte-se à sua VM via SSH.

2. Execute os comandos sequencialmente:

```sh
LINUX_DISTRO=ubuntu
```

```sh
sudo apt update && sudo apt install ca-certificates curl git ufw -y && \
sudo install -m 0755 -d /etc/apt/keyrings && \
sudo curl -fsSL https://download.docker.com/linux/$LINUX_DISTRO/gpg -o /etc/apt/keyrings/docker.asc && \
sudo chmod a+r /etc/apt/keyrings/docker.asc && \
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/$LINUX_DISTRO $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
sudo tee /etc/apt/sources.list.d/docker.list > /dev/null && \
sudo apt update && \
sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin -y && \
sudo usermod -aG docker $USER
```

```sh
newgrp docker
```

```sh
cd ~ && \
git clone https://github.com/TaylorHo/n8n-with-caddy.git n8n && \
cd n8n && \
docker volume create caddy_data && \
docker volume create caddy_config && \
docker volume create n8n_data
```

> **Resumo das operações:**
>
> - Instalação do Docker Engine e plugins necessários
> - Clonagem do repositório n8n-with-caddy
> - Criação de volumes Docker para persistência de dados

Essas mesmas linhas de código também estão disponíveis no repositório já mencionado, no arquivo `init.sh` ([link](https://github.com/TaylorHo/n8n-with-caddy/blob/main/init.sh))

### Configuração dos arquivos de ambiente

#### Configuração do arquivo `.env`

Edite o arquivo de ambiente localizado em `~/n8n/.env`:

```sh
nano ~/n8n/.env
```

<sub>Use nano ou vim, ou outro editor de sua escolha</sub>

Modifique as seguintes variáveis:

```sh
# Deployment
N8N_EDITOR_BASE_URL=https://seu-dominio.com
WEBHOOK_URL=https://seu-dominio.com
N8N_HOST=seu-dominio.com
N8N_PROTOCOL=https
SSL_EMAIL=seu-email@gmail.com

# Timezone
GENERIC_TIMEZONE=America/Sao_Paulo

# E-mails (SMTP do Google)
N8N_SMTP_HOST=smtp.gmail.com
N8N_SMTP_PORT=587
N8N_SMTP_USER="seu-email@gmail.com"
N8N_SMTP_SENDER="n8n <seu-email@gmail.com>"
N8N_SMTP_PASS="sua-senha-de-app-do-google"
```

**Parâmetros:**

- `seu-dominio.com`: domínio ou subdomínio configurado
- `seu-email@gmail.com`: conta Gmail utilizada
- `sua-senha-de-app-do-google`: senha de app gerada anteriormente

> **Nota:** Para desabilitar recuperação de senha via e-mail, comente as linhas `N8N_SMTP_*` adicionando `#` no início.

#### Configuração do arquivo `Caddyfile`

Edite o arquivo de configuração do Caddy:

```sh
nano ~/n8n/Caddyfile
```

<sub>Use nano ou vim, ou outro editor de sua escolha</sub>

Modifique os seguintes valores:

1. `email support@email.com` → `email seu-email@gmail.com`
2. `localhost` → `seu-dominio.com` (mesmo valor de `N8N_HOST`)
3. Salve as alterações e inicie os containers:

```sh
docker compose up -d
```

4. Após a inicialização dos serviços, acesse `https://seu-dominio.com`.

> O Caddy provisiona automaticamente o certificado SSL via Let's Encrypt. O processo pode levar alguns segundos/minutos na primeira execução.

---

## 4. APIs de IA gratuitas no n8n

Embora existam APIs de IA comerciais (OpenAI, Anthropic, Google), para volumes menores de requisições há alternativas gratuitas viáveis.

### Open Router

O serviço [Open Router](https://openrouter.ai/) disponibiliza:

- **50 requisições diárias gratuitas**
- Acesso a diversos modelos open source:
  - `openai/gpt-oss-120b`
  - `qwen/qwen3-4b:free`
  - `google/gemma-3-27b-it`
  - [Lista completa de modelos gratuitos](https://openrouter.ai/models?fmt=cards&max_price=0)

### Integração com n8n

Duas abordagens para integrar o Open Router:

**Opção 1: Nó HTTP Request**

- Configure o endpoint da API do Open Router
- Inclua a chave de API nos headers de autenticação

**Opção 2: Nó AI Agent**

- Selecione "Open Router" como provedor
- Configure as credenciais da API

Ambas as abordagens requerem cadastro gratuito no Open Router para obter a chave de API.

Confira mais detalhes na [documentação do Open Router](https://openrouter.ai/docs/quickstart).

---

## Conclusão

Este guia apresentou uma stack completa para execução do n8n sem custos:

- **Infraestrutura:** VM Oracle Cloud Always Free (permanentemente gratuita)
- **DNS:** Domínio/subdomínio via provedores open source
- **E-mail:** SMTP do Google para recuperação de credenciais
- **IA:** APIs gratuitas via Open Router (50 requisições/dia)
- **Segurança:** SSL automático via Let's Encrypt + Caddy

A configuração resultante é adequada para uso pessoal e projetos de baixo tráfego. Para ambientes de produção ou uso corporativo, considere migrar para serviços gerenciados com SLA e suporte profissional.

Referências adicionais:

- Para domínios próprios e e-mail corporativo: Hostinger (cupom `HOFFMANN` para 20% de desconto)
- Documentação oficial do n8n: [docs.n8n.io](https://docs.n8n.io)
- Mais sobre o [Always Free Tier da Oracle Cloud](https://www.oracle.com/cloud/free/)
