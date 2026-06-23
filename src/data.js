import { T } from './tokens.js'

// ── Projetos ──────────────────────────────────────────────────────────────────
export const PROJECTS = [
  {
    title: "Lorrane Nail Beauty",
    cat: "Negócio local",
    desc: "Site premium para nail designer com galeria, agendamento via WhatsApp, FAQ e design editorial de alto impacto.",
    tags: ["Conversão", "WhatsApp", "Design"],
    url: "https://lorrane-nail-beauty.vercel.app/",
    color: T.accentG,
  },
  {
    title: "Krov Assessoria",
    cat: "Agência de marketing",
    desc: "Landing page apresentando a metodologia K.R.O.V. e serviços de social media, conteúdo e tráfego pago.",
    tags: ["Marketing", "Metodologia", "Leads"],
    url: "https://assessoriakrov.vercel.app/",
    color: T.accent,
  },
  {
    title: "Distrito Solar",
    cat: "Energia solar",
    desc: "Site institucional focado em captação de leads e conversão para empresa de energia solar.",
    tags: ["Captação", "Institucional", "Leads"],
    url: "https://distrito-solar.vercel.app/",
    color: T.green,
  },
  {
    title: "Extase Fest",
    cat: "Evento / Festival",
    desc: "Site de festival com programação, venda de ingressos e identidade visual imersiva do evento.",
    tags: ["Evento", "Ingressos", "Identidade"],
    url: "https://extasefest.com.br",
    color: "#f59e0b",
  },
  {
    title: "Portfólio Rafael Rego",
    cat: "Portfólio pessoal",
    desc: "Portfólio para produtor de eventos de Brasília que trabalha com os maiores festivais da região.",
    tags: ["Portfólio", "Eventos", "Brasília"],
    url: "https://portfolio-rafael-rego.vercel.app/",
    color: "#ec4899",
  },
  {
    title: "Guia para Iniciantes em TI",
    cat: "Produto digital",
    desc: "Projeto criado para quem está começando na área de tecnologia — da escolha da stack ao entendimento do mercado.",
    tags: ["Next.js", "TypeScript", "Conteúdo"],
    url: "https://www.linkedin.com/in/marianavianaferreira/",
    color: T.green,
  },
]

// ── Serviços para Empresas ────────────────────────────────────────────────────
export const SERVICES_BIZ = [
  {
    icon: "🚀",
    title: "Landing Page para Negócios",
    desc: "Página de alta conversão para capturar leads, apresentar serviços e expandir sua presença online. Focada em resultado real.",
    items: ["Design responsivo e rápido", "Integração com WhatsApp", "SEO básico configurado", "Formulário de captação de leads"],
    price: "A partir de R$ 800",
  },
  {
    icon: "🏢",
    title: "Site Institucional",
    desc: "Presença digital completa para sua empresa — credibilidade, autoridade e geração de oportunidades em um único lugar.",
    items: ["Até 5 páginas", "Design personalizado", "Painel fácil de editar", "Integração com Google Analytics"],
    price: "A partir de R$ 1.400",
  },
  {
    icon: "📈",
    title: "Otimização e Redesign",
    desc: "Seu site já existe mas não converte? Analiso o problema e entrego uma versão nova com foco em performance e conversão.",
    items: ["Auditoria de conversão", "Redesign estratégico", "Melhora de velocidade", "Relatório de melhorias"],
    price: "A partir de R$ 600",
  },
]

// ── Serviços para Estudantes ──────────────────────────────────────────────────
export const SERVICES_STU = [
  {
    icon: "✨",
    title: "Primeiro Portfólio",
    desc: "Do zero ao online em até 7 dias. Criamos juntos um portfólio que representa quem você é e abre portas no mercado.",
    items: ["Design que destaca", "Seus projetos em evidência", "Domínio e hospedagem inclusos", "Suporte no lançamento"],
    price: "A partir de R$ 400",
  },
  {
    icon: "🎯",
    title: "Portfólio + Mentoria",
    desc: "Além do site, uma sessão de 1h para alinhar sua narrativa profissional, escolher os projetos certos e posicionar sua marca pessoal.",
    items: ["Portfólio completo", "Sessão de posicionamento 1h", "Revisão do LinkedIn", "30 dias de suporte"],
    price: "A partir de R$ 700",
  },
  {
    icon: "🛠️",
    title: "Atualização de Portfólio",
    desc: "Já tem um portfólio mas está desatualizado ou sem personalidade? Modernizo com design atual e estratégia de carreira.",
    items: ["Análise do portfólio atual", "Redesign moderno", "Novos projetos incluídos", "Dicas de posicionamento"],
    price: "A partir de R$ 300",
  },
]

// ── Processo ──────────────────────────────────────────────────────────────────
export const PROCESS = [
  { n: "01", title: "Briefing", desc: "Conversa de 30 min no WhatsApp para entender seu negócio, público-alvo e objetivos." },
  { n: "02", title: "Proposta", desc: "Envio proposta com escopo, prazo e investimento em até 24h." },
  { n: "03", title: "Criação", desc: "Desenvolvimento com atualizações constantes. Você acompanha cada etapa." },
  { n: "04", title: "Entrega", desc: "Site no ar com domínio configurado, treinamento e 30 dias de suporte." },
]

// ── FAQ ───────────────────────────────────────────────────────────────────────
export const FAQS = [
  { q: "Quanto tempo leva para ficar pronto?", a: "Landing pages simples ficam prontas em 3 a 5 dias úteis. Sites completos, de 7 a 14 dias. Portfólios para estudantes, em até 7 dias. Sempre combinamos o prazo exato antes de começar." },
  { q: "Preciso ter algum conhecimento técnico?", a: "Não. Cuido de tudo: domínio, hospedagem, configuração e lançamento. Você só me passa o conteúdo e aprova o design." },
  { q: "O site fica no ar para sempre?", a: "O site fica no ar enquanto a hospedagem e o domínio estiverem ativos. Oriento sobre os melhores planos e posso gerenciar isso por você se preferir." },
  { q: "Posso pedir alterações depois da entrega?", a: "Sim. Incluo 30 dias de suporte pós-entrega para ajustes. Após esse período, alterações são cobradas por hora ou num pacote de manutenção mensal." },
  { q: "Como funciona o pagamento?", a: "50% na aprovação da proposta e 50% na entrega. Aceito Pix, transferência e cartão de crédito em até 3x sem juros." },
]
