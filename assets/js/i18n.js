/**
 * Bilingual Engine (EN / PT-BR) for Aelton SM Portfolio
 */

const translations = {
  en: {
    // Navigation
    nav_overview: "01. Overview",
    nav_cases: "02. Selected Works",
    nav_stack: "03. Engineering Rigor",
    nav_manifesto: "04. Manifesto",
    nav_contact: "05. Contact",
    nav_cv: "Download CV",
    
    // Status Badge
    status_badge: "Available for Mid Analytics Roles · Q4 2026",
    
    // Hero
    hero_role: "Analytics Engineer",
    hero_headline_1: "Engineering the unseen",
    hero_headline_2: "foundations of data.",
    hero_subheadline: "From resilient pipelines to statistical truth — turning operational chaos into business predictability.",
    hero_cta_cases: "Explore Production Cases",
    hero_cta_github: "Inspect Code on GitHub",
    hero_stat_1_num: "100%",
    hero_stat_1_label: "Production-tested pipelines",
    hero_stat_2_num: "0%",
    hero_stat_2_label: "Outlier distortion (Median modeled)",
    hero_stat_3_num: "E2E",
    hero_stat_3_label: "Ingestion to Strategic BI",

    // Section Headers
    sec_works_badge: "Level 2 · Evidence of Competence",
    sec_works_watermark: "SELECTED WØRKS",
    sec_works_desc: "Production systems engineered under real constraints. Built to relieve cognitive load from engineering leadership.",
    
    // Case 1
    case1_badge: "Data Integration & Automation",
    case1_title: "E2E Ingestion Pipeline with Obfuscated Execution & Automated ERP Sync",
    case1_desc: "Architected a decoupled ingestion pipeline capturing webhooks securely, sanitizing payloads in Python, persisting to PostgreSQL, and orchestrating API synchronization to ERP with automated lead creation.",
    case1_metric_label: "Impact:",
    case1_metric_val: "Eliminated 100% manual entry, sub-second payload latency & zero webhook leak.",
    case1_btn: "Read Engineering Deep Dive →",

    // Case 2
    case2_badge: "Analytics Engineering & Statistics",
    case2_title: "Revenue Risk Audit: Mitigating 70% Concentration Risk via Median Distribution",
    case2_desc: "Designed an analytical model rejecting arithmetic averages in favor of median-based ABC curve clustering. Exposed existential business exposure previously masked by ticket outliers.",
    case2_metric_label: "Impact:",
    case2_metric_val: "Uncovered that 5 clients accounted for 70% of company revenue (16% in single account).",
    case2_btn: "Read Engineering Deep Dive →",

    // Stack Matrix
    sec_stack_badge: "Level 1 · Technical Scanning",
    sec_stack_title: "Architecture & Stack Matrix",
    sec_stack_subtitle: "Modular tools organized by functional layer. No superficial badges; strictly what runs in production.",
    stack_layer_1_title: "01. Ingestion & Transport",
    stack_layer_1_desc: "Python scripts, Secure Webhook receivers, REST APIs, n8n orchestration, JSON payload sanitization.",
    stack_layer_2_title: "02. Storage & Warehousing",
    stack_layer_2_desc: "PostgreSQL, MySQL, relational indexing, schema constraints, Cloud Storage (S3 roadmap).",
    stack_layer_3_title: "03. Analytics & Modeling",
    stack_layer_3_desc: "Advanced Modular SQL, window functions, median/quantile distribution modeling, Pandas.",
    stack_layer_4_title: "04. Consumption & Strategic BI",
    stack_layer_4_desc: "Power BI, Looker Studio, DAX measures, KPI modeling, executive decision interfaces.",

    // Manifesto
    sec_manifesto_badge: "Core Philosophy",
    sec_manifesto_title: "The Deep Waters Manifesto",
    sec_manifesto_quote: "“Managers often treat data like a bakery: you just walk in and order. They rarely see the depth of the ocean where resilient foundations are engineered.”",
    sec_manifesto_p1: "Real value is not in churning out cosmetic dashboards that no one uses. It is in the invisible infrastructure beneath the surface — decoupled systems, audited data, and mathematical honesty.",
    
    // DIKW
    dikw_wisdom_title: "Wisdom (Decisions)",
    dikw_wisdom_desc: "Predictable, low-risk business actions driven by actionable insight.",
    dikw_knowledge_title: "Knowledge (Context)",
    dikw_knowledge_desc: "Statistical validation (medians vs. outliers) revealing true portfolio behavior.",
    dikw_info_title: "Information (Structured Data)",
    dikw_info_desc: "Sanitized, relational models stored in PostgreSQL without duplications.",
    dikw_data_title: "Data (Raw Chaos)",
    dikw_data_desc: "Dispersed webhooks, raw API payloads, disparate operational endpoints.",

    // Footer
    footer_tagline: "Engineering the unseen foundations of data.",
    footer_copy: "© 2026 Aelton SM. Built with rigor, precision & Chiaroscuro Tech.",
    footer_view_code: "Source Code on GitHub"
  },

  pt: {
    // Navigation
    nav_overview: "01. Visão Geral",
    nav_cases: "02. Projetos em Produção",
    nav_stack: "03. Rigor de Engenharia",
    nav_manifesto: "04. Manifesto",
    nav_contact: "05. Contato",
    nav_cv: "Baixar Currículo",
    
    // Status Badge
    status_badge: "Disponível para Posições Plenas · Q4 2026",
    
    // Hero
    hero_role: "Analytics Engineer",
    hero_headline_1: "Projetando as fundações",
    hero_headline_2: "invisíveis dos dados.",
    hero_subheadline: "De pipelines resilientes à verdade estatística — transformando o caos operacional em previsibilidade de negócio.",
    hero_cta_cases: "Explorar Cases em Produção",
    hero_cta_github: "Inspecionar Código no GitHub",
    hero_stat_1_num: "100%",
    hero_stat_1_label: "Pipelines validados em produção",
    hero_stat_2_num: "0%",
    hero_stat_2_label: "Distorção por outliers (Baseado em mediana)",
    hero_stat_3_num: "E2E",
    hero_stat_3_label: "Da Ingestão ao BI Estratégico",

    // Section Headers
    sec_works_badge: "Nível 2 · Evidência de Competência",
    sec_works_watermark: "SELECTED WØRKS",
    sec_works_desc: "Sistemas em produção construídos sob restrições reais. Desenhados para aliviar a carga cognitiva de lideranças técnicas.",
    
    // Case 1
    case1_badge: "Integração de Dados & Automação",
    case1_title: "Pipeline de Ingestão E2E com Ofuscação de Camada e Sincronização com ERP",
    case1_desc: "Arquitetura de pipeline desacoplada com captura segura via webhook, higienização de payload em Python, persistência em PostgreSQL e orquestração por API para ERP com criação automatizada de leads.",
    case1_metric_label: "Impacto:",
    case1_metric_val: "Eliminação de 100% da inserção manual, latência de submilisegundos e zero vazamento de webhook.",
    case1_btn: "Ler Estudo de Engenharia Completo →",

    // Case 2
    case2_badge: "Analytics Engineering & Estatística",
    case2_title: "Auditoria de Risco de Receita: Mitigação de 70% de Concentração via Curva ABC por Mediana",
    case2_desc: "Desenvolvimento de modelo analítico que rejeita médias simples em favor de agrupamento por mediana. Revelação de vulnerabilidade existencial mascarada por outliers de ticket.",
    case2_metric_label: "Impacto:",
    case2_metric_val: "Descoberta de que apenas 5 clientes concentravam 70% da receita da empresa (16% em um único cliente).",
    case2_btn: "Ler Estudo de Engenharia Completo →",

    // Stack Matrix
    sec_stack_badge: "Nível 1 · Varredura Técnica",
    sec_stack_title: "Matriz de Arquitetura & Stack",
    sec_stack_subtitle: "Ferramentas modulares organizadas por camada funcional. Sem selos superficiais; estritamente o que roda em produção.",
    stack_layer_1_title: "01. Ingestão & Transporte",
    stack_layer_1_desc: "Scripts Python, Webhooks seguros, APIs REST, orquestração n8n, sanitização de payloads JSON.",
    stack_layer_2_title: "02. Armazenamento & Banco",
    stack_layer_2_desc: "PostgreSQL, MySQL, indexação relacional, restrições de integridade, Cloud Storage (S3 no roadmap).",
    stack_layer_3_title: "03. Analytics & Modelagem",
    stack_layer_3_desc: "SQL Avançado Modular, window functions, modelagem de distribuição por mediana/quantis, Pandas.",
    stack_layer_4_title: "04. Consumo & BI Estratégico",
    stack_layer_4_desc: "Power BI, Looker Studio, medidas DAX, modelagem de KPIs, interfaces executivas de decisão.",

    // Manifesto
    sec_manifesto_badge: "Filosofia Central",
    sec_manifesto_title: "O Manifesto das Águas Profundas",
    sec_manifesto_quote: "“Gestores acham que dados é uma padaria: é só chegar e pedir. Eles não enxergam a profundidade do oceano onde as fundações são construídas.”",
    sec_manifesto_p1: "O valor real não está em produzir dashboards decorativos que ninguém consulta. Está na infraestrutura invisível sob a superfície — sistemas desacoplados, dados auditados e honestidade matemática.",
    
    // DIKW
    dikw_wisdom_title: "Sabedoria (Decisões)",
    dikw_wisdom_desc: "Ações de negócio previsíveis e de baixo risco, sustentadas por clareza analítica.",
    dikw_knowledge_title: "Conhecimento (Contexto)",
    dikw_knowledge_desc: "Validação estatística (mediana contra outliers) revelando o comportamento real da carteira.",
    dikw_info_title: "Informação (Dados Estruturados)",
    dikw_info_desc: "Modelos relacionais tratados e persistidos em PostgreSQL sem duplicações.",
    dikw_data_title: "Dado Bruto (O Caos Inicial)",
    dikw_data_desc: "Webhooks dispersos, payloads brutos de APIs, múltiplos endpoints operacionais.",

    // Footer
    footer_tagline: "Projetando as fundações invisíveis dos dados.",
    footer_copy: "© 2026 Aelton SM. Construído com rigor, precisão & Chiaroscuro Tech.",
    footer_view_code: "Código-Fonte no GitHub"
  }
};

let currentLang = localStorage.getItem('aelton_lang') || 'en';

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('aelton_lang', lang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update active state in buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';
}

document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const lang = e.target.getAttribute('data-lang');
      setLanguage(lang);
    });
  });
});
