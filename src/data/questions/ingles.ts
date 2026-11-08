import { Question } from '../../types';

export const INGLES_QUESTIONS: Question[] = [
  {
    id: 'q-ing-01',
    subject: 'ingles',
    discipline: 'Língua Inglesa',
    category: 'Vocabulário e Semântica',
    contextText: '"Many people believe that introverts are shy or dislike socializing. However, psychologists emphasize that introversion is actually about how one responds to stimulation: while extroverts recharge in bustling environments, introverts eventually need quiet solitude to restore their cognitive energy."',
    sourceInfo: 'Mind & Behavior Science Journal, 2023',
    prompt: 'No texto, o vocábulo "actually" desempenha um papel semântico decisivo. Pelo contexto em que foi empregado, esse termo significa:',
    options: [
      { id: 'opt-a', letter: 'A', text: 'Atualmente (no presente momento)', conceptName: 'False cognates' },
      { id: 'opt-b', letter: 'B', text: 'Na verdade / de fato', conceptName: 'False cognates' },
      { id: 'opt-c', letter: 'C', text: 'Atuante (de forma prática)', conceptName: 'False cognates' },
      { id: 'opt-d', letter: 'D', text: 'Apenas eventualmente', conceptName: 'False cognates' },
      { id: 'opt-e', letter: 'E', text: 'Raramente ou com desdém', conceptName: 'False cognates' }
    ],
    correctOptionId: 'opt-b',
    correctConceptId: 'false-cognates',
    correctConceptName: 'False Cognates (Falsos Cognatos)',
    explanation: {
      whyCorrect: '"Actually" é um dos falsos cognatos (false friends) mais clássicos da língua inglesa. Embora se assemelhe visualmente ao português "atualmente", seu real significado é "na verdade", "de fato" ou "realmente". Para dizer "atualmente", o inglês utiliza termos como "currently", "nowadays" ou "at present".',
      distractorExplanations: {
        'A': '"Atualmente" traduz-se por "currently" ou "nowadays"; confundir com "actually" é o erro intencional que a questão testa.',
        'C': '"Atuante" traduz-se por "active" ou "acting".',
        'D': '"Eventualmente" traduz-se por "occasionally" (já "eventually" significa "no final das contas / com o tempo").',
        'E': '"Raramente" traduz-se por "rarely" ou "seldom".'
      },
      enemTip: 'Guarde os falsos amigos mais cobrados no ENEM: actually = na verdade; pretend = fingir; intend = pretender; parents = pais; relatives = parentes; notice = notar/aviso.'
    },
    difficulty: 'facil'
  },
  {
    id: 'q-ing-02',
    subject: 'ingles',
    discipline: 'Língua Inglesa',
    category: 'Vocabulário e Semântica',
    contextText: '"Modern democratic societies depend fundamentally on universal education, independent scientific research, transparent institutions, and active civic participation to preserve environmental stability and prevent economic crises."',
    sourceInfo: 'Global Policy Review, 2022',
    prompt: 'Ao realizar a leitura rápida do trecho, o leitor brasileiro reconhece com facilidade o sentido global do texto devido à presença maciça de:',
    options: [
      { id: 'opt-a', letter: 'A', text: 'Cognatos verdadeiros (true cognates) de raiz latina compartilhada', conceptName: 'Cognates' },
      { id: 'opt-b', letter: 'B', text: 'Falsos amigos que induzem a interpretações enganosas', conceptName: 'False cognates' },
      { id: 'opt-c', letter: 'C', text: 'Expressões idiomáticas exclusivas do dialeto britânico', conceptName: 'Vocabulário' },
      { id: 'opt-d', letter: 'D', text: 'Gírias de redes sociais de difícil tradução imediata', conceptName: 'Vocabulário' },
      { id: 'opt-e', letter: 'E', text: 'Acrônimos tecnológicos herméticos', conceptName: 'Vocabulário' }
    ],
    correctOptionId: 'opt-a',
    correctConceptId: 'cognates',
    correctConceptName: 'True Cognates (Cognatos Verdadeiros)',
    explanation: {
      whyCorrect: 'Palavras como "democratic", "societies", "universal", "education", "scientific", "institutions", "civic", "participation", "environmental", "stability" e "economic" são cognatos verdadeiros, pois compartilham a mesma raiz etimológica greco-latina com o português e têm exatamente o mesmo significado.',
      distractorExplanations: {
        'B': 'Nenhuma das palavras do trecho funciona como falso amigo.',
        'C': 'O vocabulário é formal, acadêmico e internacional, sem expressões idiomáticas regionais.',
        'D': 'Não há gírias juvenis no texto.',
        'E': 'Não há siglas ou acrônimos misteriosos no fragmento.'
      },
      enemTip: 'Em textos de ciências humanas e divulgação científica no ENEM, mais de 40% das palavras de conteúdo são cognatos transparentes: apoie-se neles para acelerar sua compreensão!'
    },
    difficulty: 'facil'
  },
  {
    id: 'q-ing-03',
    subject: 'ingles',
    discipline: 'Língua Inglesa',
    category: 'Estratégias de Leitura',
    contextText: 'Antes de iniciar a leitura detalhada de um artigo da revista Nature de três páginas, um estudante corre os olhos pelo título em negrito ("Rethinking Ocean Plastic Pollution"), pelos subtítulos de cada seção, pelo gráfico de barras na margem direita e pelas duas primeiras linhas de cada parágrafo durante apenas 40 segundos, obtendo uma visão panorâmica sobre o tema.',
    sourceInfo: 'Manual de Habilidades de Estudo e Leitura Instrumental, 2021',
    prompt: 'A estratégia de leitura dinâmica empregada pelo estudante para captar a ideia geral e o escopo do texto sem se prender aos pormenores é conhecida tecnicamente como:',
    options: [
      { id: 'opt-a', letter: 'A', text: 'Scanning', conceptName: 'Scanning' },
      { id: 'opt-b', letter: 'B', text: 'Skimming', conceptName: 'Skimming' },
      { id: 'opt-c', letter: 'C', text: 'Tradução literal palavra por palavra', conceptName: 'Leitura instrumental' },
      { id: 'opt-d', letter: 'D', text: 'Close reading exaustivo', conceptName: 'Leitura instrumental' },
      { id: 'opt-e', letter: 'E', text: 'Memorização mnemônica de vocabulário', conceptName: 'Leitura instrumental' }
    ],
    correctOptionId: 'opt-b',
    correctConceptId: 'skimming',
    correctConceptName: 'Skimming',
    explanation: {
      whyCorrect: 'Skimming (do inglês "to skim", desnatar, passar pela superfície) é a técnica de leitura veloz orientada a captar a essência geral, a tese central e a organização do texto, olhando títulos, fotos e parágrafos de introdução e conclusão.',
      distractorExplanations: {
        'A': 'Scanning busca um detalhe específico (como uma data ou um número), e não a ideia geral panorâmica.',
        'C': 'Tradução literal palavra por palavra é o método mais lento e contraproducente para uma prova de tempo escasso.',
        'D': 'Close reading é uma análise aprofundada e minuciosa, oposta à passada rápida de olhos.',
        'E': 'Memorização mnemônica é um método de fixação de vocabulário isolado.'
      },
      enemTip: 'Skimming = "passar os olhos para entender o tema geral". Scanning = "escanear como uma máquina atrás de um dado pontual (ano, autor, porcentagem)".'
    },
    difficulty: 'facil'
  },
  {
    id: 'q-ing-04',
    subject: 'ingles',
    discipline: 'Língua Inglesa',
    category: 'Estratégias de Leitura',
    contextText: 'O candidato está diante de um infográfico denso em inglês sobre as missões lunares da NASA. O comando da questão pede: "De acordo com as informações do texto, em qual ano exato ocorreu o primeiro pouso tripulado da missão Apollo 11?". Sem reler todo o texto explicativo, o candidato percorre os olhos pelas datas em algarismos até avistar "July 20, 1969".',
    sourceInfo: 'Estratégias de Eficiência para Provas de Idiomas, 2022',
    prompt: 'A técnica de varredura visual utilizada pelo candidato para localizar diretamente a informação pontual requerida pelo enunciado é o:',
    options: [
      { id: 'opt-a', letter: 'A', text: 'Skimming conceitual', conceptName: 'Skimming' },
      { id: 'opt-b', letter: 'B', text: 'Scanning', conceptName: 'Scanning' },
      { id: 'opt-c', letter: 'C', text: 'Paráfrase metalinguística', conceptName: 'Leitura instrumental' },
      { id: 'opt-d', letter: 'D', text: 'Análise morfológica de prefixos', conceptName: 'Leitura instrumental' },
      { id: 'opt-e', letter: 'E', text: 'Julgamento etnocêntrico de estilo', conceptName: 'Etnocentrismo' }
    ],
    correctOptionId: 'opt-b',
    correctConceptId: 'scanning',
    correctConceptName: 'Scanning',
    explanation: {
      whyCorrect: 'Scanning é a estratégia na qual o leitor varre o texto à procura de uma informação específica (números, datas, nomes próprios, porcentagens) sem ler todas as frases, como se operasse um leitor óptico.',
      distractorExplanations: {
        'A': 'Skimming serve para entender a mensagem global do texto, e não para achar um ano ou número isolado.',
        'C': 'Paráfrase é a reescrita com outras palavras mantendo o mesmo sentido.',
        'D': 'Análise morfológica disseca a estrutura interna das palavras (prefixos, sufixos).',
        'E': 'Não há nenhum componente de preconceito cultural na técnica de busca visual.'
      },
      enemTip: 'Se a pergunta pedir "qual foi o ano", "quantas toneladas" ou "quem foi o cientista citado", vá direto para a técnica de scanning!'
    },
    difficulty: 'facil'
  },
  {
    id: 'q-ing-05',
    subject: 'ingles',
    discipline: 'Língua Inglesa',
    category: 'Compreensão Textual',
    contextText: '"While artificial intelligence algorithms offer unprecedented convenience and speed in sorting job applications, mounting empirical evidence indicates that these automated filters frequently replicate and amplify historical gender and racial biases embedded within past hiring datasets. Therefore, rather than serving as neutral arbiters of merit, unmonitored algorithmic hiring tools may actually entrench systemic inequalities under the guise of technological objectivity."',
    sourceInfo: 'MIT Technology Review, 2023',
    prompt: 'A mensagem central (Main Idea) defendida pela autora do texto é que:',
    options: [
      { id: 'opt-a', letter: 'A', text: 'A inteligência artificial atingiu a neutralidade científica absoluta nos processos seletivos.', conceptName: 'Main idea' },
      { id: 'opt-b', letter: 'B', text: 'O uso desregulado de algoritmos de recrutamento pode perpetuar preconceitos históricos sob uma falsa aparência de neutralidade.', conceptName: 'Main idea' },
      { id: 'opt-c', letter: 'C', text: 'As empresas devem extinguir todos os computadores de seus setores de recursos humanos.', conceptName: 'Main idea' },
      { id: 'opt-d', letter: 'D', text: 'Os candidatos a vagas de emprego preferem ser avaliados por robôs velozes do que por recrutadores humanos.', conceptName: 'Main idea' },
      { id: 'opt-e', letter: 'E', text: 'A velocidade dos algoritmos é a única variável relevante para a contratação justa em 2024.', conceptName: 'Main idea' }
    ],
    correctOptionId: 'opt-b',
    correctConceptId: 'main-idea',
    correctConceptName: 'Main Idea (Ideia Principal)',
    explanation: {
      whyCorrect: 'A tese principal (Main Idea) do texto, sintetizada na conclusão introduzida por "Therefore", sustenta que os algoritmos de IA não são neutros, pois aprendem com dados do passado e acabam ampliando desigualdades históricas de gênero e raça ("entrench systemic inequalities under the guise of technological objectivity").',
      distractorExplanations: {
        'A': 'O texto afirma o oposto: os algoritmos não são neutros.',
        'C': 'O texto defende monitoramento crítico e ético, e não a destruição total da tecnologia.',
        'D': 'O texto não aborda as preferências pessoais ou desejos dos candidatos.',
        'E': 'A velocidade é citada apenas como vantagem aparente que mascara os vieses discriminatórios.'
      },
      enemTip: 'Para encontrar a Main Idea em artigos opinativos em inglês, procure o parágrafo final e orações introduzidas por conectivos conclusivos como "Therefore", "Thus", "In conclusion" ou "Ultimately".'
    },
    difficulty: 'medio'
  },
  {
    id: 'q-ing-06',
    subject: 'ingles',
    discipline: 'Língua Inglesa',
    category: 'Compreensão Textual',
    contextText: '"Regular physical activity is vital for teenage mental health. To substantiate this claim, researchers followed 5,000 adolescents over four years, discovering that those engaging in at least 60 minutes of moderate aerobic exercise daily reported a 28% decrease in depressive symptoms and scored 15% higher on standardized memory tests compared to sedentary peers."',
    sourceInfo: 'Journal of Adolescent Health, 2023',
    prompt: 'No trecho, a citação do estudo com 5.000 adolescentes e os índices percentuais de 28% e 15% atuam como:',
    options: [
      { id: 'opt-a', letter: 'A', text: 'Supporting details (detalhes de apoio que comprovam a tese principal)', conceptName: 'Supporting details' },
      { id: 'opt-b', letter: 'B', text: 'Falsos cognatos que confundem a conclusão do autor', conceptName: 'False cognates' },
      { id: 'opt-c', letter: 'C', text: 'Ironias sarcásticas voltadas a desqualificar a prática esportiva', conceptName: 'Tone' },
      { id: 'opt-d', letter: 'D', text: 'Conectivos concessivos de oposição dialética', conceptName: 'Connectors' },
      { id: 'opt-e', letter: 'E', text: 'Expressões idiomáticas de gíria adolescente', conceptName: 'Vocabulário' }
    ],
    correctOptionId: 'opt-a',
    correctConceptId: 'supporting-details',
    correctConceptName: 'Supporting Details (Detalhes de Apoio)',
    explanation: {
      whyCorrect: 'Supporting details são evidências empíricas, dados estatísticos, amostras e experimentos concretos mobilizados em textos científicos e argumentativos para fundamentar a tese inicial ("Regular physical activity is vital for teenage mental health").',
      distractorExplanations: {
        'B': 'Não há falsos cognatos induzindo a erros nas informações quantitativas.',
        'C': 'O artigo tem tom formal e sério, sem qualquer ironia contra o esporte.',
        'D': 'Dados numéricos de pesquisa não são conectivos gramaticais.',
        'E': 'O linguajar é estritamente acadêmico da área de saúde pública.'
      },
      enemTip: 'Números, porcentagens, nomes de universidades e citações de especialistas funcionam nos textos em inglês como "Supporting Details" (evidências de apoio).'
    },
    difficulty: 'medio'
  },
  {
    id: 'q-ing-07',
    subject: 'ingles',
    discipline: 'Língua Inglesa',
    category: 'Intenção Comunicativa',
    contextText: '"Electronic cigarettes (vapes) are frequently advertised to teenagers with bright colors, candy-like flavors, and misleading claims of safety. Do not be deceived: aerosol from e-cigarettes contains toxic heavy metals, diacetyl linked to irreversible lung damage, and concentrated nicotine designed to cause rapid lifelong addiction. Protect your health: reject the vape culture."',
    sourceInfo: 'Public Health Alert, Youth Awareness Campaign, 2023',
    prompt: 'Ao analisar as escolhas lexicais e a construção do texto, conclui-se que o propósito primordial do autor (Author’s Purpose) é:',
    options: [
      { id: 'opt-a', letter: 'A', text: 'Alertar os jovens sobre os graves perigos do cigarro eletrônico e desencorajar seu uso.', conceptName: 'Purpose' },
      { id: 'opt-b', letter: 'B', text: 'Promover novos sabores frutados para ampliar as vendas da indústria de vapes.', conceptName: 'Purpose' },
      { id: 'opt-c', letter: 'C', text: 'Explicar a história e a evolução mecânica das baterias de lítio portáteis.', conceptName: 'Purpose' },
      { id: 'opt-d', letter: 'D', text: 'Divertir os leitores com anedotas cômicas sobre hábitos recreativos modernos.', conceptName: 'Purpose' },
      { id: 'opt-e', letter: 'E', text: 'Criticar os impostos governamentais aplicados sobre os tabagistas tradicionais.', conceptName: 'Purpose' }
    ],
    correctOptionId: 'opt-a',
    correctConceptId: 'purpose',
    correctConceptName: 'Author’s Purpose (Propósito do Autor)',
    explanation: {
      whyCorrect: 'O propósito comunicativo (Purpose) identifica o objetivo principal do texto. Verbos como "do not be deceived", "protect your health" e termos como "toxic heavy metals" e "lifelong addiction" deixam claro que a intenção é advertir o público jovem e dissuadi-lo do consumo de cigarros eletrônicos (to warn and persuade against).',
      distractorExplanations: {
        'B': 'O texto combate e denuncia as estratégias de marketing das empresas fabricantes de vape.',
        'C': 'O foco não é a engenharia elétrica das baterias, mas a toxicidade pulmonar química.',
        'D': 'O tom é solene e de alerta médico, sem elementos humorísticos.',
        'E': 'Não há menção a políticas fiscais ou impostos sobre cigarros comuns.'
      },
      enemTip: 'Perguntas sobre "Author\'s purpose" ou "A intenção do texto" exigem associar a mensagem com verbos de ação: to alert (alertar), to criticize (criticar), to inform (informar), to promote (promover).'
    },
    difficulty: 'facil'
  },
  {
    id: 'q-ing-08',
    subject: 'ingles',
    discipline: 'Língua Inglesa',
    category: 'Intenção Comunicativa',
    contextText: '"Oh, fantastic! The city council has once again decided that the best way to solve our desperate urban mobility crisis is by chopping down 500 centennial trees to add one more lane of bumper-to-bumper traffic for private SUVs. What brilliant, visionary leadership we are blessed with!"',
    sourceInfo: 'Opinion Column, Urban Living Gazette, 2023',
    prompt: 'O tom (Author’s Tone) adotado pelo articulista ao comentar a decisão da câmara municipal é marcadamente:',
    options: [
      { id: 'opt-a', letter: 'A', text: 'Sarcástico e indignado', conceptName: 'Tone' },
      { id: 'opt-b', letter: 'B', text: 'Cientificamente neutro e imparcial', conceptName: 'Tone' },
      { id: 'opt-c', letter: 'C', text: 'Genuinamente grato e elogioso', conceptName: 'Tone' },
      { id: 'opt-d', letter: 'D', text: 'Indiferente e apático', conceptName: 'Tone' },
      { id: 'opt-e', letter: 'E', text: 'Otimista em relação ao futuro viário', conceptName: 'Tone' }
    ],
    correctOptionId: 'opt-a',
    correctConceptId: 'tone',
    correctConceptName: 'Author’s Tone (Tom do Autor)',
    explanation: {
      whyCorrect: 'O tom é descaradamente sarcástico e irônico: o autor diz "fantastic!" e "brilliant, visionary leadership" quando, na verdade, considera a decisão de derrubar árvores para criar faixas de trânsito um completo absurdo e um desastre ambiental.',
      distractorExplanations: {
        'B': 'O texto é altamente opinativo e emotivo, oposto à neutralidade científica.',
        'C': 'Achar que o autor está realmente elogiando é cair na pegadinha da ironia literal.',
        'D': 'O autor demonstra indignação veemente com o destino das árvores da cidade.',
        'E': 'O autor prevê engarrafamentos perpétuos ("bumper-to-bumper traffic"), sem qualquer otimismo.'
      },
      enemTip: 'Exclamações entusiasmadas seguidas da descrição de fatos absurdos ("Oh, brilliant!") revelam tom sarcástico (sarcastic/ironic tone).'
    },
    difficulty: 'medio'
  },
  {
    id: 'q-ing-09',
    subject: 'ingles',
    discipline: 'Língua Inglesa',
    category: 'Coesão e Coerência',
    contextText: '"Renewable energy capacity expanded by an unprecedented 50% globally last year. ________, fossil fuels still accounted for roughly 80% of total energy consumption, indicating that green initiatives have not yet managed to overtake conventional coal and oil dependence."',
    sourceInfo: 'Global Energy Transition Report, 2023',
    prompt: 'Para preencher a lacuna estabelecendo a relação lógica correta de contraste e quebra de expectativa entre as duas orações, deve-se empregar o conectivo:',
    options: [
      { id: 'opt-a', letter: 'A', text: 'However (Entretanto / Porém)', conceptName: 'Connectors' },
      { id: 'opt-b', letter: 'B', text: 'Furthermore (Além disso)', conceptName: 'Connectors' },
      { id: 'opt-c', letter: 'C', text: 'Therefore (Portanto)', conceptName: 'Connectors' },
      { id: 'opt-d', letter: 'D', text: 'Because (Porque / Visto que)', conceptName: 'Connectors' },
      { id: 'opt-e', letter: 'E', text: 'Similarly (Da mesma forma)', conceptName: 'Connectors' }
    ],
    correctOptionId: 'opt-a',
    correctConceptId: 'connectors',
    correctConceptName: 'Connectors (Conectivos e Linking Words)',
    explanation: {
      whyCorrect: 'A primeira frase apresenta um dado muito positivo (a capacidade de energia renovável cresceu 50%). A segunda frase contrapõe um dado desalentador (combustíveis fósseis ainda dominam 80%). A relação entre as ideias é de oposição/contraste, exigindo o conectivo adversativo "However" (ou "Nevertheless").',
      distractorExplanations: {
        'B': '"Furthermore" expressa adição de novas ideias no mesmo sentido.',
        'C': '"Therefore" expressa conclusão lógica ou consequência direta.',
        'D': '"Because" introduz a causa ou explicação do fato.',
        'E': '"Similarly" introduz uma comparação de semelhança entre fatos análogos.'
      },
      enemTip: 'Conectivos adversativos e concessivos ("However", "Although", "Despite", "Nevertheless", "Yet") são os campeões absolutos de questões gramaticais no ENEM!'
    },
    difficulty: 'medio'
  },
  {
    id: 'q-ing-10',
    subject: 'ingles',
    discipline: 'Língua Inglesa',
    category: 'Coesão e Coerência',
    contextText: '"Due to escalating ocean surface temperatures recorded across the tropical Pacific throughout 2023, extreme coral bleaching events intensified dramatically, which consequently decimated coastal fish habitats and threatened the livelihoods of artisanal fishing communities in the region."',
    sourceInfo: 'Marine Ecology Progress Series, 2024',
    prompt: 'As expressões "due to" (devido a) e "consequently" (consequentemente) articulam entre os elementos da frase uma relação retórica de:',
    options: [
      { id: 'opt-a', letter: 'A', text: 'Causa e efeito (causa e consequência)', conceptName: 'Cause and effect' },
      { id: 'opt-b', letter: 'B', text: 'Contradição irônica inconciliável', conceptName: 'Contrast' },
      { id: 'opt-c', letter: 'C', text: 'Dúvida hipotética irrealizável', conceptName: 'Coesão e Coerência' },
      { id: 'opt-d', letter: 'D', text: 'Ordem cronológica regressiva pura', conceptName: 'Coesão e Coerência' },
      { id: 'opt-e', letter: 'E', text: 'Paródia de discurso religioso', conceptName: 'Interdiscursividade' }
    ],
    correctOptionId: 'opt-a',
    correctConceptId: 'cause-and-effect',
    correctConceptName: 'Cause and Effect (Causa e Consequência)',
    explanation: {
      whyCorrect: '"Due to" introduz a causa primária (o aumento da temperatura dos oceanos), que acarreta o branqueamento de corais, e "consequently" introduz o desfecho/efeito subsequente (a destruição de habitats marinhos e a perda de renda dos pescadores), configurando a clássica relação de Causa e Efeito (Cause and Effect).',
      distractorExplanations: {
        'B': 'Não há contradição irônica, mas um nexo ecológico causal real e trágico.',
        'C': 'O evento não é hipotético: trata-se de um registro factual do ano de 2023.',
        'D': 'A sequência é cronológica progressiva normal do desencadeamento físico-químico.',
        'E': 'O texto é um relatório científico de ecologia marinha, sem relação religiosa.'
      },
      enemTip: 'Termos como "due to", "because of", "as a result", "consequently" e "therefore" sinalizam relações lógicas de Causa e Consequência.'
    },
    difficulty: 'facil'
  }
];

