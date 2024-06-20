const usesData = [
  {
    title: 'Nextra - Documentação',
    description: 'desenvolver a descrição',
    href: 'https://nextra.site/',
  },
  {
    title: 'Next.js - Plataformas web em geral',
    description: 'desenvolver a descrição',
    href: 'https://nextjs.org/',
  },
  {
    title: 'Go Lang - Backend (1)',
    description: 'Go lang combina performance e Experiência do Desenvolvedor / simplicidade.',
    href: 'https://go.dev/',
  },
  {
    title: 'Rust - Backend (2)',
    description:
      'Os sistemas em Go são posteriormente refatorados em Rust, a fim de maior desempenho.',
    href: 'https://www.rust-lang.org/',
  },
  {
    title: 'Flutter - Mobile',
    description: 'desenvolver a descrição',
    href: 'https://flutter.dev/',
  },
  {
    title: 'Flutter - Multiplataforma',
    description: 'desenvolver a descrição',
    href: 'https://flutter.dev/',
  },
  {
    title: 'n8n - Automação',
    description: 'desenvolver a descrição',
    href: 'https://n8n.io/',
  },
  {
    title: 'Vercel - Hospedagem (1)',
    description: 'desenvolver a descrição',
    href: 'https://vercel.com/',
  },
  {
    title: 'Cloudflare Workers - Hospedagem (2)',
    description: 'desenvolver a descrição',
    href: 'https://workers.cloudflare.com/',
  },
  {
    title: 'Digital ocean - Hospedagem genérica',
    description: 'desenvolver a descrição',
    href: 'https://www.digitalocean.com/',
  },
  {
    title: 'MongoDB - Banco de Dados',
    description: 'desenvolver a descrição',
    href: 'https://www.mongodb.com/',
  },
  {
    title: 'Redis - Banco de Cache',
    description: 'desenvolver a descrição',
    href: 'https://redis.io/',
  },
  {
    title: 'Apache Pulsar - Mensageria',
    description: 'desenvolver a descrição',
    href: 'https://pulsar.apache.org/',
  },
  {
    title: 'Isar - Bando de dados Flutter',
    description: 'desenvolver a descrição',
    href: 'https://isar.dev/',
  },
  {
    title: 'socket.io - RTC clienteservidor',
    description: 'desenvolver a descrição',
    href: 'https://socket.io/',
  },
  {
    title: 'WebRTC - RTC cliente/cliente',
    description: 'desenvolver a descrição',
    href: 'https://webrtc.org/',
  },
  {
    title: 'Cloudflare - WAF',
    description: 'desenvolver a descrição',
    href: 'https://www.cloudflare.com/',
  },
  {
    title: 'Cloudflare - Proxy Reverso',
    description: 'desenvolver a descrição',
    href: 'https://www.cloudflare.com/',
  },
  {
    title: 'Proton - Office Suite',
    description: 'desenvolver a descrição',
    href: 'https://proton.me/',
  },
  {
    title: 'Linear - Gestão de projetos',
    description: 'desenvolver a descrição',
    href: 'https://linear.app/',
  },
  {
    title: 'Github - Repositórios',
    description: 'desenvolver a descrição',
    href: 'https://github.com/',
  },
  {
    title: 'Stripe - Gateway de Pagamentos',
    description: 'desenvolver a descrição',
    href: 'https://stripe.com/',
  },
  {
    title: 'Documenso - Contratos',
    description: 'desenvolver a descrição',
    href: 'https://documenso.com/',
  },
  {
    title: 'Cal.com - Agendamentos',
    description: 'desenvolver a descrição',
    href: 'https://cal.com/',
  },
  {
    title: 'Formbricks - Feedback do usuário',
    description: 'desenvolver a descrição',
    href: 'https://formbricks.com/',
  },
  {
    title: 'Supabase - Tecnologias em geral',
    description: 'desenvolver a descrição',
    href: 'https://supabase.com/',
  },
  {
    title: 'Dub.co - Encurtador de Links',
    description: 'desenvolver a descrição',
    href: 'https://dub.co/',
  },
  {
    title: 'OpenStatus - Página de Status',
    description: 'desenvolver a descrição',
    href: 'https://www.openstatus.dev/',
  },
  {
    title: 'FeatureBase - Changelog e Roadmap',
    description: 'desenvolver a descrição',
    href: 'https://www.featurebase.app/',
  },
  {
    title: 'Giscus - Comentários Open Source',
    description: 'desenvolver a descrição',
    href: 'https://giscus.app/',
  },
  {
    title: 'React Hot Toast - Toasts para Next.js',
    description: 'desenvolver a descrição',
    href: 'https://react-hot-toast.com/',
  },
  {
    title: 'PostHog - Analytics',
    description: 'desenvolver a descrição',
    href: 'https://posthog.com/',
  },
  {
    title: 'Simple Login - Cadastro sem Spam',
    description: 'desenvolver a descrição',
    href: 'https://simplelogin.io/',
  },
  {
    title: 'ListMonk - Newsletter',
    description: 'desenvolver a descrição',
    href: 'https://listmonk.app/',
  },
  {
    title: 'MagicUI - Animações web e design',
    description: 'desenvolver a descrição',
    href: 'https://magicui.design/',
  },
  {
    title: 'AuthJS - Autenticação simplificada (1)',
    description: 'desenvolver a descrição',
    href: 'https://authjs.dev/',
  },
  {
    title: 'Clerk - Autenticação simplificada (2)',
    description: 'desenvolver a descrição',
    href: 'https://clerk.com/',
  },
  {
    title: 'Supabase - Autenticação simplificada (3)',
    description: 'desenvolver a descrição',
    href: 'https://supabase.com/auth',
  },
  {
    title: 'trivy - Segurança em Pipeline',
    description: 'desenvolver a descrição',
    href: 'https://trivy.dev/',
  },
  {
    title: 'npm audit - Segurança em Pipeline (SCA)',
    description: 'desenvolver a descrição',
    href: 'https://docs.npmjs.com/cli/commands/npm-audit',
  },
  {
    title: 'gosec - Segurança em Pipeline (SCA)',
    description: 'desenvolver a descrição',
    href: 'https://github.com/securego/gosec',
  },
  {
    title: 'Owasp ZAP - Análises de segurança DAST',
    description: 'desenvolver a descrição',
    href: 'https://www.zaproxy.org/',
  },
  {
    title: 'Sonarqube - Análises de segurança locais',
    description: 'desenvolver a descrição',
    href: 'https://www.sonarsource.com/products/sonarqube/',
  },
  {
    title: 'Snyk - Análises de vulnerabilidades gerais',
    description: 'desenvolver a descrição',
    href: 'https://snyk.io/',
  },
  {
    title: 'Aikido - Análises de segurança geral',
    description: 'desenvolver a descrição',
    href: 'https://www.aikido.dev/',
  },
  {
    title: 'AppSweep - Análise de segurança mobile',
    description: 'desenvolver a descrição',
    href: 'https://www.guardsquare.com/appsweep-mobile-application-security-testing',
  },
  {
    title: 'Sonarlint - Análise de Qualidade na IDE',
    description: 'desenvolver a descrição',
    href: 'https://www.sonarsource.com/products/sonarlint/',
  },
]

export default usesData
