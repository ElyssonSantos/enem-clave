# ENEM Clave — Plataforma de Estudos por Palavras-Chave e Conceitos

Plataforma educacional web interativa, responsiva e moderna, projetada para capacitar estudantes a reconhecer conceitos fundamentais, pistas textuais e palavras-chave em questões contextualizadas no padrão do Exame Nacional do Ensino Médio (ENEM).

A metodologia combina o dinamismo do **Kahoot**, a progressão e gamificação do **Duolingo** e a organização minimalista do **Notion**, com identidade visual própria e pedagógica.

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js 18+ instalado
- npm ou pnpm

### Passos
```bash
# Instalar dependências (caso ainda não tenha feito)
npm install

# Iniciar servidor de desenvolvimento local
npm run dev

# Gerar build otimizado para produção (dist/)
npm run build

# Pré-visualizar o build localmente
npm run preview
```

---

## 🧭 Estrutura dos Arquivos

```
estudoss/
├── public/
├── src/
│   ├── assets/
│   ├── types/
│   │   └── index.ts               # Modelos de dados TypeScript (Concept, Question, UserState, Badges)
│   ├── data/
│   │   ├── badges.ts              # Badges de gamificação, tiers e cálculo de níveis (1 a 8)
│   │   ├── concepts.ts            # Dicionário com 50+ conceitos detalhados
│   │   └── questions/
│   │       ├── humanas.ts         # 25 questões originais de Ciências Humanas
│   │       ├── linguagens.ts      # 25 questões originais de Linguagens e suas Tecnologias
│   │       ├── ingles.ts          # 10 questões originais de Língua Inglesa
│   │       └── index.ts           # Banco unificado (60 questões) e funções de consulta
│   ├── services/
│   │   └── storage.ts             # Persistência no localStorage com versionamento e export/import
│   ├── context/
│   │   └── AppContext.tsx         # Provedor global de estado, navegação, streaks e recompensas
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.tsx         # Barra superior com perfil, streak, XP e alternador de tema
│   │   │   ├── Sidebar.tsx        # Navegação lateral desktop
│   │   │   ├── MobileNav.tsx      # Barra de navegação inferior fixa para smartphones
│   │   │   └── ConceptDrawer.tsx  # Ficha aprofundada ("Entenda melhor esse conceito")
│   │   ├── onboarding/
│   │   │   └── WelcomeScreen.tsx  # Tela de boas-vindas com cadastro local sem burocracia
│   │   ├── dashboard/
│   │   │   └── DashboardView.tsx  # Indicadores, atalhos de treino e "Continue de onde parou"
│   │   ├── training/
│   │   │   ├── SubjectSelectView.tsx   # Seleção de matérias e treino misto
│   │   │   ├── CategorySelectView.tsx  # Seleção de categorias temáticas e quantidade
│   │   │   ├── QuizView.tsx            # Card interativo de questão, confirmação e correção didática
│   │   │   └── TrainingSummaryView.tsx # Resumo pós-treino com conceitos trabalhados e XP
│   │   ├── simulado/
│   │   │   ├── SimuladoSetupView.tsx   # Configuração do simulado (10, 20 ou 30 questões)
│   │   │   ├── SimuladoQuizView.tsx    # Modo exame com temporizador e navegação livre
│   │   │   └── SimuladoResultView.tsx  # Relatório completo, nota por matéria e gabarito comentado
│   │   ├── review/
│   │   │   └── ReviewErrorsView.tsx    # "Revisar meus erros" com classificação de domínio
│   │   ├── dictionary/
│   │   │   └── DictionaryView.tsx      # Dicionário ENEM com busca em tempo real e filtros
│   │   ├── favorites/
│   │   │   └── FavoritesView.tsx       # Questões e conceitos favoritados
│   │   ├── stats/
│   │   │   └── StatsView.tsx           # Gráficos de aproveitamento real, histórico e conquistas
│   │   └── settings/
│   │       └── SettingsView.tsx        # Edição de nome, tema claro/escuro, backup JSON e reset
│   ├── App.tsx                    # Roteamento de telas e layout principal
│   ├── main.tsx                   # Ponto de entrada React 18
│   └── index.css                  # Tailwind CSS v4 e estilizações base
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🌟 Funcionalidades Implementadas

1. **Ciclo Pedagógico de Interpretação**:
   - `LER → INTERPRETAR → IDENTIFICAR O CONCEITO → RESPONDER → ENTENDER O ERRO → APRENDER → REVISAR`.
   - Textos contextualizados ricos inspirados no formato ENEM.
   - 5 alternativas por questão (A, B, C, D, E) com gabarito unívoco.
   - Bloqueio após confirmação: revela a alternativa correta em verde e a alternativa marcada em vermelho (caso tenha errado).

2. **Explicações Didáticas Transparentes**:
   - Justificativa do porquê o conceito é a resposta correta para o contexto.
   - Análise específica do porquê a alternativa marcada pelo estudante está errada (diferenciando os conceitos que causaram confusão).
   - "Dica para o ENEM" com palavras-chave e pistas textuais que denunciam o conceito.
   - Botão "Entenda melhor esse conceito": abre drawer lateral com definição, exemplo do cotidiano e distinções contra conceitos semelhantes.

3. **Banco Inicial com 60 Questões Originais**:
   - 25 questões de Linguagens e suas Tecnologias.
   - 25 questões de Ciências Humanas e suas Tecnologias.
   - 10 questões de Língua Inglesa.

4. **Dicionário ENEM (50+ Palavras-Chave)**:
   - Busca instantânea por termo ou tag.
   - Filtros por matéria, disciplina e nível de dificuldade.
   - Ordenação alfabética (A-Z e Z-A).
   - Sistema de favoritos e botão para testar o conceito com questões práticas.

5. **Revisão Inteligente ("Revisar Meus Erros")**:
   - Catalogação automática de qualquer questão respondida incorretamente.
   - Classificação do conceito: *Não estudado*, *Em aprendizado*, *Precisa de revisão* e *Dominado*.
   - Critério rigoroso: status *Dominado* exige pelo menos 2 acertos consecutivos e 75%+ de aproveitamento, impedindo falsos positivos por chutes.

6. **Simulado ENEM Clave**:
   - Opções de 10, 20 ou 30 questões balanceadas entre Humanas, Linguagens e Inglês.
   - Modo de exame autêntico: sem confirmações intermediárias, com temporizador e grade para saltar entre questões.
   - Relatório pós-exame: acertos brutos, aproveitamento %, desempenho por matéria, conceitos fracos e resolução comentada questão a questão.

7. **Gamificação Não Intrusiva**:
   - +10 XP por acerto.
   - +5 XP para sequências de 3 acertos seguidos.
   - +10 XP para sequências de 5 acertos seguidos.
   - +15 XP ao finalizar um treinamento.
   - Sistema de Níveis de 1 a 8 com títulos estimulantes.
   - Badges desbloqueáveis com feedback visual.

8. **Armazenamento 100% Local & Portabilidade**:
   - Salvamento automático no `localStorage` do navegador com versionamento de schema.
   - Função de **Exportar Backup (JSON)** e **Importar Backup (JSON)** para transferência entre celular e PC sem necessidade de servidor externo.
   - "Continue de onde parou" para retomar treinos interrompidos.

