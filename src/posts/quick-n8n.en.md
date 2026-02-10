---
title: '100% Free n8n: Complete Guide with VM, Domain and AI'
description: 'How to set up n8n quickly and 100% free to automate processes. Using Oracle Cloud free VM, free domains, Google SMTP and free AI APIs.'
date: '2026-02-10'
published: true
categories:
  - Technology
  - Automation
  - n8n
---

n8n is a robust tool for process automation. Personally, I use it to automate reports, execute event-based actions, organize routines and manage personal finances.

When setting up an n8n instance, infrastructure costs start to accumulate: server, domain, corporate email and eventually AI APIs for more advanced workflows. Considering that most of these services charge in dollars, costs can become significant very quickly.

This guide demonstrates how to set up a complete n8n stack at no cost:

1. **Free Virtual Machine** on Oracle Cloud (Always Free)
2. **Free domain** via open source providers
3. **Free Google SMTP** for password recovery
4. **Free AI APIs** for workflows with LLMs

## 1. Setting up a free VM on Oracle Cloud

Oracle Cloud offers the **Always Free** tier, which includes permanently free virtual machines. The `VM.Standard.E2.1.Micro` instance has 1GB RAM, 1 vCPU and 0.48 Gbps bandwidth — sufficient specifications to run n8n.

### Procedure:

**1.1.** Access [Oracle Cloud signup](https://signup.cloud.oracle.com/) and create your account.

> **Note:** A credit card will be required for validation, and there may be a temporary charge that will be automatically refunded.

**1.2.** Access the Oracle Cloud dashboard and click **"Create a VM instance"**.

**1.3.** Select the operating system:

- The default is "Oracle Linux", change it to **Ubuntu**
- A "Minimal" image is recommended (example: `Canonical Ubuntu 24.04 Minimal`)

**1.4.** Click **"Change Shape"** and select:

- **Virtual machine** → **Specialty and previous generation** → **VM.Standard.E2.1.Micro**
- The **"Always Free-eligible"** tag indicates eligibility for the free tier

**1.5.** Configure the remaining options (boot volume, SSH key, etc.) and click **"Create"**.

**1.6.** After creation, the VM's public IP will be displayed along with the **"Always Free"** tag identifying the instance.

> **Note:** After 30 days, Oracle may send emails requesting an account upgrade. These can be ignored if you wish to keep only the free instance.

---

## 2. Free Domain and SMTP

To make n8n available through your own domain (like `n8n.yourdomain.com`) and enable password recovery via email, you need:

1. A **domain or subdomain**
2. An **SMTP server**

Here we'll see how to get a free domain and SMTP access, but if you already have your own services, you can use them.

### 2.1. Free Domain

Providers that offer free domains and subdomains:

- [open-domains.net](https://open-domains.net/)
- [domain.digitalplat.org](https://domain.digitalplat.org/)

Register with one of these services and configure a domain or subdomain.

There are also others on the internet, worth checking out.

### 2.2. Free Google SMTP

Google provides a free SMTP server through Gmail, suitable for sending n8n password recovery emails.

**Procedure:**

**2.2.1.** Access [myaccount.google.com](https://myaccount.google.com/).

**2.2.2.** Navigate to **Security** → **2-Step Verification** and enable it if not already enabled.

**2.2.3.** In **Security**, locate the **"App passwords"** option.

**2.2.4.** Generate an app password specific for n8n.

**2.2.5.** Store the generated password for later use in the configuration.

**Google SMTP Settings:**

- **Host:** `smtp.gmail.com`
- **Port:** `587` (or `465` for SSL)
- **User:** your Gmail address
- **Password:** the app password you generated

> **Complete tutorial:** [How to use Google SMTP](https://www.hostinger.com/tutorials/how-to-use-free-google-smtp-server)

### 2.3. DNS Configuration

After obtaining the free domain, you need to point it to the Oracle Cloud VM IP.

Configure an **A-type DNS record** with the following parameters:

- **Name/Host:** `@` (for root domain) or desired subdomain (ex: `n8n`)
- **Type:** `A`
- **Value:** Oracle Cloud VM public IP
- **TTL:** 3600 (or provider default)

The configuration interface varies depending on the chosen domain provider.

### 2.4 Email Plans with Free Domain

Hostinger has email plans that come with 1 year of free domain. Sometimes it ends up being easier and faster to configure this way, plus you have greater freedom of choice over your domain name, and can create multiple subdomains for different purposes.

Check out [Hostinger's email plans](https://www.hostinger.com/email-hosting?REFERRALCODE=HOFFMANN) (some even include 1 year of free domain) and use the coupon `HOFFMANN` for 20% off.

---

## 3. Installing n8n with Optimized Configuration

The installation uses a pre-configured repository that includes:

- **Reverse proxy (Caddy)** with automatic SSL certificate provisioning
- **Performance-optimized settings** for n8n
- **Security hardening** and best practices

Repository: [TaylorHo/n8n-with-caddy](https://github.com/TaylorHo/n8n-with-caddy)

### Procedure:

**3.1.** Connect to your VM via SSH.

**3.2.** Execute the commands sequentially:

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

> **Operations summary:**
>
> - Docker Engine and necessary plugins installation
> - n8n-with-caddy repository cloning
> - Docker volumes creation for data persistence

These same code lines are also available in the mentioned repository, in the `init.sh` file ([link](https://github.com/TaylorHo/n8n-with-caddy/blob/main/init.sh))

**3.3.** Environment files configuration.

### 3.3.1. `.env` File Configuration

Edit the environment file located at `~/n8n/.env`:

```sh
nano ~/n8n/.env
```

<sub>Use nano or vim, or another editor of your choice</sub>

Modify the following variables:

```sh
# Deployment
N8N_EDITOR_BASE_URL=https://your-domain.com
WEBHOOK_URL=https://your-domain.com
N8N_HOST=your-domain.com
N8N_PROTOCOL=https
SSL_EMAIL=your-email@gmail.com

# Timezone
GENERIC_TIMEZONE=America/Sao_Paulo

# Emails (Google SMTP)
N8N_SMTP_HOST=smtp.gmail.com
N8N_SMTP_PORT=587
N8N_SMTP_USER="your-email@gmail.com"
N8N_SMTP_SENDER="n8n <your-email@gmail.com>"
N8N_SMTP_PASS="your-google-app-password"
```

**Parameters:**

- `your-domain.com`: configured domain or subdomain
- `your-email@gmail.com`: Gmail account used
- `your-google-app-password`: app password generated in step 2.2

> **Note:** To disable password recovery via email, comment out the `N8N_SMTP_*` lines by adding `#` at the beginning.

### 3.3.2. `Caddyfile` Configuration

Edit the Caddy configuration file:

```sh
nano ~/n8n/Caddyfile
```

<sub>Use nano or vim, or another editor of your choice</sub>

Modify the following values:

1. `email support@email.com` → `email your-email@gmail.com`
2. `localhost` → `your-domain.com` (same value as `N8N_HOST`)

**3.4.** Save the changes and start the containers:

```sh
docker compose up -d
```

**3.5.** After the services start, access `https://your-domain.com`.

> Caddy automatically provisions the SSL certificate via Let's Encrypt. The process may take a few seconds/minutes on the first run.

---

## 4. Free AI APIs in n8n

Although there are commercial AI APIs (OpenAI, Anthropic, Google), for smaller request volumes there are viable free alternatives.

### 4.1. Open Router

The [Open Router](https://openrouter.ai/) service provides:

- **50 free daily requests**
- Access to various open source models:
  - `openai/gpt-oss-120b`
  - `qwen/qwen3-4b:free`
  - `google/gemma-3-27b-it`
  - [Complete list of free models](https://openrouter.ai/models?fmt=cards&max_price=0)

### 4.2. Integration with n8n

Two approaches to integrate Open Router:

**Option 1: HTTP Request Node**

- Configure the Open Router API endpoint
- Include the API key in the authentication headers

**Option 2: AI Agent Node**

- Select "Open Router" as the provider
- Configure the API credentials

Both approaches require free registration on Open Router to obtain the API key.

Check more details in the [Open Router documentation](https://openrouter.ai/docs/quickstart).

---

## Conclusion

This guide presented a complete stack for running n8n at no cost:

- **Infrastructure:** Oracle Cloud Always Free VM (permanently free)
- **DNS:** Domain/subdomain via open source providers
- **Email:** Google SMTP for credential recovery
- **AI:** Free APIs via Open Router (50 requests/day)
- **Security:** Automatic SSL via Let's Encrypt + Caddy

The resulting configuration is suitable for personal use and low-traffic projects. For production environments or corporate use, consider migrating to managed services with SLA and professional support.

Additional references:

- For custom domains and corporate email: Hostinger (coupon `HOFFMANN` for 20% off)
- Official n8n documentation: [docs.n8n.io](https://docs.n8n.io)
- More about [Oracle Cloud Always Free Tier](https://www.oracle.com/cloud/free/)
