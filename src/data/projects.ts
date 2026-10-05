export type Project = {
  number: string;
  name: string;
  subtitle: string;
  category: string;
  summary: string;
  challenge: string;
  role: string;
  engineering: string;
  impact: string;
  technologies: string[];
};

export const projects: Project[] = [
  {
    number: '01',
    name: 'AI-Kit',
    subtitle: 'Toolkit para Engenharia de Software Agentic',
    category: 'AI Engineering',
    summary: 'Fluxos controlados para incorporar agentes de IA ao processo de engenharia de software.',
    challenge: 'O desenvolvimento assistido por IA acelera rapidamente, mas contexto, previsibilidade, revisão, escolha de modelos e controle sobre ações críticas se tornam difíceis de gerenciar.',
    role: 'Criador e arquiteto de uma camada reutilizável de engenharia que separa o contexto específico de cada projeto da orquestração, execução, revisão e governança.',
    engineering: 'Arquitetura multi-agent, model routing, gestão de contexto, estado, recovery, tracing, validações determinísticas e gates de aprovação humana.',
    impact: 'Um laboratório prático para tratar agentes como parte de um fluxo disciplinado de engenharia, em vez de uma sequência de prompts isolados.',
    technologies: ['Agents', 'LLMs', 'Model Routing', 'Context Engineering', 'Evals', 'Human Gates'],
  },
  {
    number: '02',
    name: 'Smart Data',
    subtitle: 'Engenharia de Plataforma Enterprise',
    category: 'Enterprise',
    summary: 'Modernização incremental, investigação entre sistemas e entrega controlada em uma plataforma de produção.',
    challenge: 'Evoluir um ecossistema em produção com regras legadas de acesso, integrações externas e restrições de deploy sem comprometer a operação existente.',
    role: 'Atuação sênior em evolução de RBAC, investigações cross-system, segurança operacional de deploy e fluxos de entrega assistidos por IA.',
    engineering: 'React/Next.js, Python, Flask, Airflow, Celery, Redis, PostgreSQL, Oracle, AWS S3, Docker e integrações enterprise.',
    impact: 'Evolução da manutenibilidade e da segurança operacional preservando restrições legadas e continuidade da produção.',
    technologies: ['RBAC', 'Airflow', 'Python', 'Oracle', 'AWS S3', 'Docker'],
  },
  {
    number: '03',
    name: 'DAZ',
    subtitle: 'Assistente Conversacional com IA para o Agronegócio',
    category: 'Aplicação de IA',
    summary: 'Interação em linguagem natural conectada a fluxos agrícolas e dados reais do negócio.',
    challenge: 'Permitir acesso conversacional a informações operacionais sem transformar o modelo de linguagem no próprio sistema de negócio.',
    role: 'Engenharia da camada conversacional que interpreta intenção e contexto e conecta o usuário aos serviços e APIs existentes do domínio.',
    engineering: 'Integração com LLM, detecção de intenção, gestão de contexto, tool calling, APIs backend e interfaces conversacionais.',
    impact: 'Um exemplo prático de IA funcionando como camada de interação sobre capacidades e dados reais de um produto.',
    technologies: ['LLMs', 'Tool Calling', 'Contexto', 'APIs', 'Conversational AI'],
  },
  {
    number: '04',
    name: 'Mapa Vivo',
    subtitle: 'Inteligência de Codebase Assistida por IA',
    category: 'Developer Tools',
    summary: 'Transformando codebases em contexto estruturado de engenharia para humanos e IA.',
    challenge: 'Reduzir o custo de descoberta ao entrar em codebases grandes ou legadas e entender módulos, hotspots, dependências e áreas de impacto.',
    role: 'Criador de uma ferramenta que analisa a estrutura do software, produz artefatos técnicos e torna esse contexto utilizável por engenheiros e modelos de linguagem.',
    engineering: 'Análise estática, documentação gerada, contratos técnicos, fluxos CLI e análise assistida por LLM.',
    impact: 'Torna a exploração de codebases e a investigação de refatorações mais estruturadas, repetíveis e explicáveis.',
    technologies: ['Python', 'Typer', 'Rich', 'OpenAI', 'Static Analysis', 'Code Intelligence'],
  },
  {
    number: '05',
    name: 'SIF',
    subtitle: 'Sistemas Críticos para o Setor Público',
    category: 'GovTech',
    summary: 'Performance e evolução de backend em uma plataforma complexa de fiscalização.',
    challenge: 'Sustentar regras complexas do setor público, integrações, auditoria e sincronização mobile enquanto operações caras de backend precisavam ser controladas.',
    role: 'Engenharia backend com foco em diagnóstico, performance, consultas, cache e comportamento em produção.',
    engineering: 'Laravel, PostgreSQL, Redis, Keycloak, jobs, auditoria, APIs REST, Docker e sincronização mobile.',
    impact: 'Trabalhos representativos de otimização reduziram fluxos de centenas de queries para uma pequena fração e diminuíram substancialmente operações de longa duração.',
    technologies: ['Laravel', 'PostgreSQL', 'Redis', 'Keycloak', 'Performance', 'GovTech'],
  },
  {
    number: '06',
    name: 'TIM Wallet',
    subtitle: 'Engenharia Fintech & Pagamentos',
    category: 'Fintech',
    summary: 'Engenharia backend para carteira, Pix, boleto, webhooks e integrações financeiras.',
    challenge: 'Coordenar estado financeiro entre operações de carteira, provedor de pagamentos, eventos assíncronos e callbacks externos.',
    role: 'Atuação backend em fluxos de pagamento, integrações com provedores, eventos, listeners, webhooks e observabilidade.',
    engineering: 'Laravel, StarkBank, Pix, MySQL, Redis, Elasticsearch, Kibana, AWS S3, Docker e testes automatizados.',
    impact: 'Engenharia de integração financeira em produção, em um domínio onde consistência, rastreabilidade e tratamento de falhas são essenciais.',
    technologies: ['Laravel', 'Pix', 'StarkBank', 'Events', 'Webhooks', 'Redis'],
  },
];
