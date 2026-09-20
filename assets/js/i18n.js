/**
 * Bilingual Engine (EN / PT-BR) for Aelton SM Portfolio
 * Handles real-time translation, persistent language state, and mechanical rolling text rebuilds.
 */

const translations = {
  en: {
    // Navigation
    nav_index: "Index",
    nav_work: "Work",
    nav_stack: "Stack",
    nav_about: "About",
    nav_contact: "Contact",
    nav_cta: "Talk with Aelton",
    nav_cv: "Download CV",

    // Quick Menu / Mobile Drawer
    menu_nav_title: "Navigation",
    menu_actions_title: "Quick Actions",
    menu_lang_title: "Language",
    menu_whatsapp: "Chat on WhatsApp",
    menu_email: "Copy / Send Email",
    menu_linkedin: "View LinkedIn Profile",
    menu_github: "View GitHub Repositories",
    menu_cv_btn: "Download CV (PDF)",

    // Hero Section
    hero_status: "Available For Production & Projects",
    hero_title: "We Architect. We Build.<br>We Scale Data Systems",
    hero_desc_lead: "Engineering mission-critical analytics pipelines, scalable relational models, and resilient systems that turn complex operations into clarity.",
    hero_desc_sub: "All-in-one technical partner for SQL, Python workers, automated ETL, and data infrastructure. Fast, resilient, no drama.",

    // Selected Works
    works_monumental: "SELECTED<br>WORKS",
    case1_meta_discipline: "01 / DATA ENGINEERING",
    case1_meta_stack: "SQL · PYTHON · MYSQL · ETL",
    case1_title: "Operational Data Pipeline",
    case1_lead: "Architecture for transforming operational data into a structured analytical layer. Decoupled ingestion capturing external webhooks securely, validating schemas with Python workers, and persisting idempotently in relational stores with automated sync.",
    case1_btn: "View Case",

    case2_meta_discipline: "02 / ANALYTICS",
    case2_meta_stack: "SQL · STATISTICS · DATA MODELING",
    case2_title: "Revenue Risk Analysis",
    case2_lead: "A statistical analysis designed to identify revenue concentration and customer risk. Replaced distorted arithmetic means with non-parametric median clustering and cumulative Pareto curves, exposing existential financial exposure previously masked by high-ticket outliers.",
    case2_btn: "View Case",

    // Capabilities (What I Build)
    cap_meta: "WHAT I BUILD & OPERATE",
    cap_1_title: "Data Engineering",
    cap_1_desc: "SQL, Python, resilient ETL pipelines, relational data modeling, schema migrations, analytical storage.",
    cap_2_title: "Analytics",
    cap_2_desc: "Power BI, statistical analysis, KPI definition, customer portfolio segmentation, business metrics.",
    cap_3_title: "Systems",
    cap_3_desc: "Linux environments, Docker containers, Git versioning, webhook receivers, REST API integrations.",
    cap_4_title: "Infrastructure",
    cap_4_desc: "Monitoring, self-hosted services, Proxmox virtualization, networking fundamentals, observability.",

    // The Work / Dark Interlude
    work_interlude_meta: "THE WORK",
    work_interlude_title: "Data / Systems / Analytics / Engineering",
    discipline_1: "Data Pipelines",
    discipline_2: "Statistical Analytics",
    discipline_3: "Dimensional Warehouses",
    discipline_4: "Systems & Automation",
    flagship_meta: "PROJECT 01 · FLAGSHIP",
    flagship_meta_stack: "SQL / MYSQL / ETL / MODELING",
    flagship_title: "Operational Data Warehouse",
    flagship_lead: "The project transforms operational data into a structured analytical architecture designed for reporting and business analysis. Eliminating analytical query overhead on production transactional databases and establishing audit-proof dimensional history.",
    flagship_btn: "Explore Project",

    // About & Timeline
    about_meta: "ABOUT AELTON",
    about_quote: "I work at the intersection of data, systems and business.",
    about_lead: "My focus is understanding how information moves through a company - from operational systems and messy edge integrations to structured analytical decisions. I engineer systems that prioritize resilience and clarity over superficial complexity.",
    about_badge: "BASED IN BRAZIL · DATA / SYSTEMS / ENGINEERING / ANALYTICS",
    timeline_meta: "TIMELINE",
    timeline_2026_role: "DATA / SYSTEMS / DEVOPS",
    timeline_2026_sub: "Pipelines & Infrastructure",
    timeline_2025_role: "PRODUCT / BUSINESS ANALYTICS",
    timeline_2025_sub: "Startup Growth & Risk Auditing",
    timeline_2023_role: "TECHNICAL CONSULTING",
    timeline_2023_sub: "Data Operations & BI",
    timeline_2020_role: "ELECTRONICS / SYSTEMS",
    timeline_2020_sub: "Hardware & Logic Foundations",

    // Contact & Footer
    contact_meta: "05 / CONTACT",
    contact_huge: "LET'S<br>BUILD<br>SOMETHING<br>USEFUL.",
    contact_email: "Email",
    contact_linkedin: "LinkedIn ↗",
    contact_github: "GitHub ↗",
    contact_cv: "Download CV ↓",
    footer_rights: "ALL RIGHTS RESERVED"
  },

  pt: {
    // Navigation
    nav_index: "Início",
    nav_work: "Projetos",
    nav_stack: "Stack",
    nav_about: "Sobre",
    nav_contact: "Contato",
    nav_cta: "Falar com Aelton",
    nav_cv: "Baixar CV",

    // Quick Menu / Mobile Drawer
    menu_nav_title: "Navegação",
    menu_actions_title: "Ações Rápidas",
    menu_lang_title: "Idioma",
    menu_whatsapp: "Conversar no WhatsApp",
    menu_email: "Copiar / Enviar E-mail",
    menu_linkedin: "Acessar Perfil no LinkedIn",
    menu_github: "Ver Repositórios no GitHub",
    menu_cv_btn: "Baixar Currículo (PDF)",

    // Hero Section
    hero_status: "Disponível para Projetos & Posições",
    hero_title: "Arquitetura, Construção e<br>Escala em Sistemas de Dados",
    hero_desc_lead: "Engenharia de pipelines analíticos de missão crítica, modelos relacionais escaláveis e sistemas resilientes que transformam operações complexas em clareza.",
    hero_desc_sub: "Parceiro técnico para SQL, workers em Python, ETL automatizado e infraestrutura de dados. Rápido, resiliente e sem ruído.",

    // Selected Works
    works_monumental: "PROJETOS<br>SELECIONADOS",
    case1_meta_discipline: "01 / ENGENHARIA DE DADOS",
    case1_meta_stack: "SQL · PYTHON · MYSQL · ETL",
    case1_title: "Pipeline de Ingestão E2E",
    case1_lead: "Arquitetura para transformar dados operacionais em uma camada analítica estruturada. Ingestão desacoplada capturando webhooks com segurança, validação de schemas com workers em Python e persistência idempotente com sincronização automatizada para ERP.",
    case1_btn: "Ver Estudo",

    case2_meta_discipline: "02 / ANALYTICS",
    case2_meta_stack: "SQL · ESTATÍSTICA · MODELAGEM DE DADOS",
    case2_title: "Auditoria de Risco de Receita",
    case2_lead: "Análise estatística desenhada para identificar concentração de receita e risco de clientes. Rejeição de médias aritméticas distorcidas em favor de agrupamento por mediana e curvas acumuladas de Pareto, expondo vulnerabilidades mascaradas por outliers.",
    case2_btn: "Ver Estudo",

    // Capabilities (What I Build)
    cap_meta: "O QUE CONSTRUO & OPERO",
    cap_1_title: "Engenharia de Dados",
    cap_1_desc: "SQL, Python, pipelines ETL resilientes, modelagem relacional, migrações de esquemas e armazenamento analítico.",
    cap_2_title: "Analytics",
    cap_2_desc: "Power BI, análise estatística, definição de KPIs, segmentação de carteira de clientes e métricas estratégicas.",
    cap_3_title: "Sistemas",
    cap_3_desc: "Ambientes Linux, containers Docker, versionamento Git, receptores de webhooks e integrações de APIs REST.",
    cap_4_title: "Infraestrutura",
    cap_4_desc: "Monitoramento, serviços self-hosted, virtualização Proxmox, fundamentos de redes e observabilidade.",

    // The Work / Dark Interlude
    work_interlude_meta: "O TRABALHO",
    work_interlude_title: "Dados / Sistemas / Analytics / Engenharia",
    discipline_1: "Pipelines de Dados",
    discipline_2: "Estatística & Analytics",
    discipline_3: "Data Warehouses",
    discipline_4: "Sistemas & Automação",
    flagship_meta: "PROJETO 01 · DESTAQUE",
    flagship_meta_stack: "SQL / MYSQL / ETL / MODELAGEM",
    flagship_title: "Data Warehouse Operacional",
    flagship_lead: "Transformação de dados operacionais brutos em uma arquitetura analítica estruturada para relatórios executivos. Elimina sobrecarga analítica nas bases transacionais e estabelece histórico dimensional auditável.",
    flagship_btn: "Explorar Projeto",

    // About & Timeline
    about_meta: "SOBRE AELTON",
    about_quote: "Trabalho na interseção entre dados, sistemas e estratégia de negócio.",
    about_lead: "Meu foco é compreender como a informação trafega na empresa - desde sistemas operacionais e integrações instáveis na ponta até decisões analíticas estruturadas. Construo sistemas que priorizam resiliência e clareza em vez de complexidade superficial.",
    about_badge: "BASEADO NO BRASIL · DADOS / SISTEMAS / ENGENHARIA / ANALYTICS",
    timeline_meta: "TRAJETÓRIA",
    timeline_2026_role: "DADOS / SISTEMAS / DEVOPS",
    timeline_2026_sub: "Pipelines & Infraestrutura",
    timeline_2025_role: "PRODUTO / BUSINESS ANALYTICS",
    timeline_2025_sub: "Crescimento de Startups & Auditoria de Risco",
    timeline_2023_role: "CONSULTORIA TÉCNICA",
    timeline_2023_sub: "Operações de Dados & BI",
    timeline_2020_role: "ELETRÔNICA / SISTEMAS",
    timeline_2020_sub: "Fundamentos de Hardware e Lógica",

    // Contact & Footer
    contact_meta: "05 / CONTATO",
    contact_huge: "VAMOS<br>CONSTRUIR<br>ALGO<br>ÚTIL.",
    contact_email: "Email",
    contact_linkedin: "LinkedIn ↗",
    contact_github: "GitHub ↗",
    contact_cv: "Baixar Currículo ↓",
    footer_rights: "TODOS OS DIREITOS RESERVADOS"
  }
};

let currentLang = localStorage.getItem('aelton_lang') || 'en';

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('aelton_lang', lang);

  // 1. Update text and html content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translatedText = translations[lang][key];
    if (translatedText !== undefined) {
      if (el.classList.contains('rolling-text')) {
        el.setAttribute('data-rolling', translatedText);
        el.textContent = translatedText;
      } else if (translatedText.includes('<br>') || translatedText.includes('<span') || translatedText.includes('&nbsp;')) {
        el.innerHTML = translatedText;
      } else {
        el.textContent = translatedText;
      }
    }
  });

  // 2. Re-trigger rolling text generator to rebuild internal character wrappers in the new language
  if (typeof window.initRollingText === 'function') {
    window.initRollingText();
  }

  // 3. Update active state in all language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // 4. Update html lang attribute
  document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';
}

// Expose globally
window.setLanguage = setLanguage;

document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang);
    });
  });
});
