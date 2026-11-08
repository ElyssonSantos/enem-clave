import { Question } from '../../types';

export const LINGUAGENS_QUESTIONS: Question[] = [
  {
    id: 'q-ling-01',
    subject: 'linguagens',
    discipline: 'Língua Portuguesa / Literatura',
    category: 'Interpretação e Teoria do Texto',
    contextText: 'Leia os versos abaixo:\n\n"Minha terra tem palmeiras,\nOnde canta o Sabiá;\nAs aves, que aqui gorjeiam,\nNão gorjeiam como lá." (Gonçalves Dias, 1843)\n\nAgora compare com estes versos:\n\n"Minha terra tem palmares\nOnde gorjeia o mar\nOs passarinhos daqui\nNão cantam como os de lá." (Oswald de Andrade, 1925)',
    sourceInfo: 'Coletânea de Poesia Brasileira: do Romantismo ao Modernismo',
    prompt: 'Ao retomar a célebre estrutura do poema romântico oitocentista para subvertê-la com humor modernista e crítica histórica, o texto de Oswald de Andrade estabelece fundamentalmente uma:',
    options: [
      { id: 'opt-a', letter: 'A', text: 'Paródia intertextual', conceptName: 'Intertextualidade' },
      { id: 'opt-b', letter: 'B', text: 'Ambiguidade sintática', conceptName: 'Ambiguidade' },
      { id: 'opt-c', letter: 'C', text: 'Função metalinguística exclusiva', conceptName: 'Funções da linguagem' },
      { id: 'opt-d', letter: 'D', text: 'Metonímia espacial involuntária', conceptName: 'Metonímia' },
      { id: 'opt-e', letter: 'E', text: 'Variação diacrônica preconceituosa', conceptName: 'Variação linguística' }
    ],
    correctOptionId: 'opt-a',
    correctConceptId: 'intertextualidade',
    correctConceptName: 'Intertextualidade',
    explanation: {
      whyCorrect: 'A intertextualidade ocorre quando um texto estabelece um diálogo evidente com outro texto prévio do repertório cultural. No caso, Oswald de Andrade realiza uma paródia da Canção do Exílio, trocando "palmeiras" por "palmares" para trazer à tona a memória da resistência negra contra a idealização romântica.',
      distractorExplanations: {
        'B': 'Ambiguidade sintática causaria confusão de sentido na frase por erro gramatical, o que não ocorre na recriação poética.',
        'C': 'Função metalinguística explicaria a própria língua ou o ato de escrever gramaticalmente.',
        'D': 'Metonímia espacial não descreve a relação dialógica entre dois poemas inteiros.',
        'E': 'Não se trata de preconceito linguístico, mas de um projeto poético modernista de vanguarda.'
      },
      enemTip: 'A Canção do Exílio de Gonçalves Dias e suas paródias (Oswald, Drummond, Murilo Mendes) são figurinhas carimbadas no ENEM para cobrar o conceito de intertextualidade!'
    },
    difficulty: 'facil'
  },
  {
    id: 'q-ling-02',
    subject: 'linguagens',
    discipline: 'Língua Portuguesa / Artes Visuais',
    category: 'Interpretação e Teoria do Texto',
    contextText: 'Em uma peça publicitária de uma marca de cosméticos, uma mulher aparece posando de perfil com os mesmos trajes e o icônico brinco de pérola imortalizados na pintura de Johannes Vermeer (século XVII). Abaixo da imagem, o anúncio traz a frase: "A arte de realçar a sua própria luz através dos séculos".',
    sourceInfo: 'Campanha Publicitária Veiculada em Revistas, 2023',
    prompt: 'O recurso expressivo mobilizado pela peça publicitária ao evocar visualmente a obra-prima holandesa é a:',
    options: [
      { id: 'opt-a', letter: 'A', text: 'Intertextualidade intersemiótica', conceptName: 'Intertextualidade' },
      { id: 'opt-b', letter: 'B', text: 'Função fática denotativa', conceptName: 'Funções da linguagem' },
      { id: 'opt-c', letter: 'C', text: 'Polissemia verbal pura', conceptName: 'Polissemia' },
      { id: 'opt-d', letter: 'D', text: 'Sinédoque gramatical', conceptName: 'Metonímia' },
      { id: 'opt-e', letter: 'E', text: 'Inadequação de registro formal', conceptName: 'Variação linguística' }
    ],
    correctOptionId: 'opt-a',
    correctConceptId: 'intertextualidade',
    correctConceptName: 'Intertextualidade',
    explanation: {
      whyCorrect: 'A intertextualidade pode ocorrer entre linguagens diferentes (intersemiótica), como quando a publicidade contemporânea dialoga diretamente com uma pintura clássica do passado para transferir o prestígio e o requinte da obra de arte ao produto anunciado.',
      distractorExplanations: {
        'B': 'A função fática serve apenas para testar o canal comunicativo ("alô, escuta?"), sem relação com a citação de obras artísticas.',
        'C': 'Polissemia é a multiplicidade de sentidos de uma mesma palavra no léxico.',
        'D': 'Sinédoque é a figura de troca de parte pelo todo.',
        'E': 'O registro do anúncio é formal e perfeitamente adequado ao público-alvo de cosméticos sofisticados.'
      },
      enemTip: 'Quando uma propaganda, capa de revista ou meme reproduz a pose da Monalisa, de Van Gogh ou do Abaporu, temos intertextualidade (ou intertextualidade intersemiótica).'
    },
    difficulty: 'medio'
  },
  {
    id: 'q-ling-03',
    subject: 'linguagens',
    discipline: 'Língua Portuguesa / Análise do Discurso',
    category: 'Interpretação e Teoria do Texto',
    contextText: 'Uma marca de água mineral lança um anúncio impresso com o seguinte texto: "Nosso produto foi abençoado pela pureza da Mãe Natureza e santificado pelas profundezas cristalinas da rocha, proporcionando um batismo diário de renovação espiritual para as suas células e concedendo a graça da juventude eterna."',
    sourceInfo: 'Análise de Peças Promocionais, 2023',
    prompt: 'Ao apropriar-se do léxico e da solenidade típicos do campo religioso ("abençoado", "santificado", "batismo", "graça") para convencer o consumidor na esfera mercantil, o texto materializa o fenômeno da:',
    options: [
      { id: 'opt-a', letter: 'A', text: 'Interdiscursividade', conceptName: 'Interdiscursividade' },
      { id: 'opt-b', letter: 'B', text: 'Denotação literal', conceptName: 'Denotação' },
      { id: 'opt-c', letter: 'C', text: 'Variação diatópica regional', conceptName: 'Variação linguística' },
      { id: 'opt-d', letter: 'D', text: 'Função metalinguística normativa', conceptName: 'Funções da linguagem' },
      { id: 'opt-e', letter: 'E', text: 'Ambiguidade involuntária de regência', conceptName: 'Ambiguidade' }
    ],
    correctOptionId: 'opt-a',
    correctConceptId: 'interdiscursividade',
    correctConceptName: 'Interdiscursividade',
    explanation: {
      whyCorrect: 'A interdiscursividade consiste na mistura e circulação de diferentes matrizes discursivas (neste caso, o discurso místico/religioso integrado ao discurso publicitário de consumo), pegando emprestada a autoridade e o encanto sagrado de uma esfera para promover um produto comercial.',
      distractorExplanations: {
        'B': 'Denotação seria o uso literal e científico; o texto é repleto de metáforas e conotação transcendental.',
        'C': 'Variação diatópica é sotaque ou variação geográfica de palavras, inexistente no anúncio.',
        'D': 'Função metalinguística explicaria termos gramaticais.',
        'E': 'Não há erro gramatical gerando ambiguidade involuntária; a escolha de palavras foi totalmente intencional.'
      },
      enemTip: 'Diferença crucial para o ENEM: se dialoga com um texto/obra específico ("Canção do Exílio") = Intertextualidade. Se dialoga com um tipo geral de discurso social (discurso religioso, jurídico, médico) = Interdiscursividade.'
    },
    difficulty: 'dificil'
  },
  {
    id: 'q-ling-04',
    subject: 'linguagens',
    discipline: 'Língua Portuguesa',
    category: 'Semântica e Significado',
    contextText: '"A fotossíntese é o processo bioquímico realizado por organismos autotróficos clorofilados, como plantas e algas, no qual a energia luminosa solar é absorvida e convertida em energia química na forma de glicose, utilizando água e dióxido de carbono como reagentes e liberando oxigênio molecular no meio ambiente."',
    sourceInfo: 'Manual Integrado de Ciências Biológicas, 2022',
    prompt: 'A eficácia comunicativa do verbete didático decorre da utilização rigorosa da linguagem em seu sentido:',
    options: [
      { id: 'opt-a', letter: 'A', text: 'Conotativo e plurissignificativo', conceptName: 'Conotação' },
      { id: 'opt-b', letter: 'B', text: 'Denotativo e unívoco', conceptName: 'Denotação' },
      { id: 'opt-c', letter: 'C', text: 'Poético e rítmico', conceptName: 'Função poética' },
      { id: 'opt-d', letter: 'D', text: 'Ironizado e sarcástico', conceptName: 'Ironia' },
      { id: 'opt-e', letter: 'E', text: 'Coloquial e afetivo', conceptName: 'Variação linguística' }
    ],
    correctOptionId: 'opt-b',
    correctConceptId: 'denotacao',
    correctConceptName: 'Denotação',
    explanation: {
      whyCorrect: 'A denotação é o emprego das palavras em seu significado exato, literal, dicionarizado e impessoal (unívoco), sem metáforas ou duplos sentidos, essencial para a clareza e precisão dos textos científicos e didáticos.',
      distractorExplanations: {
        'A': 'Conotativo é o sentido figurado e subjetivo, inadequado para manuais de botânica.',
        'C': 'O texto não possui musicalidade poética nem trabalho estético de versificação.',
        'D': 'O texto é neutro e acadêmico, sem traço de ironia.',
        'E': 'O vocabulário é formal e técnico ("organismos autotróficos clorofilados"), oposto ao coloquialismo.'
      },
      enemTip: 'Lembre-se da dica de memorização: D de Denotação = D de Dicionário (sentido literal e real). C de Conotação = C de Criatividade (sentido figurado).'
    },
    difficulty: 'facil'
  },
  {
    id: 'q-ling-05',
    subject: 'linguagens',
    discipline: 'Língua Portuguesa / Literatura',
    category: 'Semântica e Significado',
    contextText: '"De repente do riso fez-se o pranto\nSilencioso e branco como a bruma\nE das bocas unidas fez-se a espuma\nE das mãos espalmadas fez-se o espanto.\nDe repente, não mais que de repente\nFez-se de triste o que se fez amante\nE de sozinho o que se fez contente..."',
    sourceInfo: 'MORAES, Vinicius de. Soneto de Separação, 1938',
    prompt: 'Nos versos do soneto de Vinicius de Moraes, expressões como "branco como a bruma" e "fez-se o espanto" operam prioritariamente no plano:',
    options: [
      { id: 'opt-a', letter: 'A', text: 'Denotativo estrito da biologia', conceptName: 'Denotação' },
      { id: 'opt-b', letter: 'B', text: 'Conotativo da expressividade lírica', conceptName: 'Conotação' },
      { id: 'opt-c', letter: 'C', text: 'Metalinguístico da análise morfológica', conceptName: 'Funções da linguagem' },
      { id: 'opt-d', letter: 'D', text: 'Regionalista dos falares sertanejos', conceptName: 'Variação linguística' },
      { id: 'opt-e', letter: 'E', text: 'Jornalístico do relato factual', conceptName: 'Função referencial' }
    ],
    correctOptionId: 'opt-b',
    correctConceptId: 'conotacao',
    correctConceptName: 'Conotação',
    explanation: {
      whyCorrect: 'A conotação é o uso expressivo da linguagem em sentido figurado e poético, onde as palavras extrapolam seus limites literais para sugerir emoções, atmosferas psicológicas de perda e estados de espírito subjetivos.',
      distractorExplanations: {
        'A': 'Denotação pura não criaria imagens simbólicas de sentimentos como "pranto branco como a bruma".',
        'C': 'Metalinguagem estaria dissecando a gramática da língua.',
        'D': 'O poema usa a norma culta lírica tradicional do soneto camoniano, sem traços regionalistas sertanejos.',
        'E': 'Não se trata de notícia de jornal sobre separação de casais, mas de um soneto lírico universal.'
      },
      enemTip: 'Textos literários e poemas exploram intensamente a conotação para criar imagens sensoriais e evocar estados emocionais no leitor.'
    },
    difficulty: 'facil'
  },
  {
    id: 'q-ling-06',
    subject: 'linguagens',
    discipline: 'Língua Portuguesa / Literatura',
    category: 'Figuras de Linguagem',
    contextText: '"O tempo é uma costureira invisível que vai alinhavando rugas nas testas outrora lisas e tecendo fios de prata onde antes havia o negro viço da juventude. Ninguém ouve a sua tesoura, mas todos sentem o peso do seu corte silencioso ao passar dos anos."',
    sourceInfo: 'Crônica Literária Contemporânea, 2022',
    prompt: 'Ao afirmar diretamente que "o tempo é uma costureira invisível", o narrador constrói seu raciocínio a partir de uma:',
    options: [
      { id: 'opt-a', letter: 'A', text: 'Metáfora', conceptName: 'Metáfora' },
      { id: 'opt-b', letter: 'B', text: 'Metonímia quantitativa', conceptName: 'Metonímia' },
      { id: 'opt-c', letter: 'C', text: 'Ambiguidade viciosa', conceptName: 'Ambiguidade' },
      { id: 'opt-d', letter: 'D', text: 'Eufemismo gramatical', conceptName: 'Figuras de linguagem' },
      { id: 'opt-e', letter: 'E', text: 'Onomatopeia estilística', conceptName: 'Figuras de linguagem' }
    ],
    correctOptionId: 'opt-a',
    correctConceptId: 'metafora',
    correctConceptName: 'Metáfora',
    explanation: {
      whyCorrect: 'A metáfora consiste em uma comparação implícita em que as características de um elemento ("costureira que alinhava e corta") são transferidas diretamente para outro ("o tempo"), sem a presença de nexo comparativo explícito ("como", "tal qual").',
      distractorExplanations: {
        'B': 'Metonímia opera por relação de contiguidade concreta (o autor pela obra, o recipiente pelo conteúdo), e não por analogia poética imaginária.',
        'C': 'Ambiguidade viciosa seria uma falha gramatical que confunde a leitura.',
        'D': 'Eufemismo suavizaria uma ideia dolorosa (ex: dizer "ele descansou" para morte).',
        'E': 'Onomatopeia é a imitação de sons físicos reais ("tique-taque", "bum").'
      },
      enemTip: 'Se houver comparação direta ("A é B") sem usar palavras comparativas como "como", "feito", "parece", trata-se de uma Metáfora.'
    },
    difficulty: 'facil'
  },
  {
    id: 'q-ling-07',
    subject: 'linguagens',
    discipline: 'Língua Portuguesa / Literatura',
    category: 'Figuras de Linguagem',
    contextText: 'Durante a campanha de arrecadação no município após a enchente, o coordenador da defesa civil declarou na rádio local: "Precisamos urgente de mais cinquenta braços fortes na triagem dos donativos e pedimos que a cidade inteira doe pelo menos um teto provisório para as famílias que perderam absolutamente tudo na tempestade."',
    sourceInfo: 'Transmissão Comunitária de Emergência, 2023',
    prompt: 'O emprego das expressões "braços fortes" (em referência aos trabalhadores) e "um teto" (em referência a abrigos ou casas) fundamenta-se na figura de linguagem denominada:',
    options: [
      { id: 'opt-a', letter: 'A', text: 'Ironia', conceptName: 'Ironia' },
      { id: 'opt-b', letter: 'B', text: 'Metonímia (tomada da parte pelo todo)', conceptName: 'Metonímia' },
      { id: 'opt-c', letter: 'C', text: 'Pleonasmo vicioso de redundância', conceptName: 'Figuras de linguagem' },
      { id: 'opt-d', letter: 'D', text: 'Polissemia vocabular pura', conceptName: 'Polissemia' },
      { id: 'opt-e', letter: 'E', text: 'Função apelativa em código fático', conceptName: 'Funções da linguagem' }
    ],
    correctOptionId: 'opt-b',
    correctConceptId: 'metonimia',
    correctConceptName: 'Metonímia',
    explanation: {
      whyCorrect: 'A metonímia é a substituição de um termo por outro com o qual mantém vínculo concreto de proximidade real. No texto, toma-se uma parte do corpo humano ("braços") para representar a totalidade da pessoa do voluntário, e uma parte da casa ("teto") para indicar a moradia completa (sinédoque/metonímia).',
      distractorExplanations: {
        'A': 'Ironia expressaria o sentido inverso com teor crítico ou sarcástico.',
        'C': 'Pleonasmo seria uma repetição redundante desnecessária ("subir para cima").',
        'D': 'Polissemia refere-se aos vários sentidos possíveis de uma palavra no vocabulário.',
        'E': 'Não é uma classificação de figuras de linguagem da língua portuguesa.'
      },
      enemTip: 'Tomar a parte pelo todo ("várias cabeças de gado", "precisamos de braços", "não ter um teto") é a modalidade mais cobrada de metonímia no ENEM.'
    },
    difficulty: 'medio'
  },
  {
    id: 'q-ling-08',
    subject: 'linguagens',
    discipline: 'Língua Portuguesa / Literatura',
    category: 'Figuras de Linguagem',
    contextText: 'No romance "Memórias Póstumas de Brás Cubas", o narrador-defunto recorda seu amigo de infância Prudêncio, um menino escravizado que ele montava como se fosse um cavalo: "Era a delícia dos meus olhos quando eu, pequeno fidalgo da casa-grande, lhe punha um freio na boca e o açoitava com uma varinha para que trotasse pelo corredor. Prudêncio era tão paciente, tão dócil à minha nobre autoridade infantil, que chegava a chorar de pura gratidão por servir ao seu senhor."',
    sourceInfo: 'ASSIS, Machado de. Memórias Póstumas de Brás Cubas, 1881',
    prompt: 'A afirmação de que o escravizado chorava de "pura gratidão por servir ao seu senhor" constitui um dos exemplos mais refinados da literatura brasileira de:',
    options: [
      { id: 'opt-a', letter: 'A', text: 'Ironia machadiana', conceptName: 'Ironia' },
      { id: 'opt-b', letter: 'B', text: 'Denotação sociológica', conceptName: 'Denotação' },
      { id: 'opt-c', letter: 'C', text: 'Pleonasmo enfático', conceptName: 'Figuras de linguagem' },
      { id: 'opt-d', letter: 'D', text: 'Antítese semântica involuntária', conceptName: 'Figuras de linguagem' },
      { id: 'opt-e', letter: 'E', text: 'Função conativa do discurso', conceptName: 'Função conativa' }
    ],
    correctOptionId: 'opt-a',
    correctConceptId: 'ironia',
    correctConceptName: 'Ironia',
    explanation: {
      whyCorrect: 'Machado de Assis constrói uma ironia mordaz: o narrador Brás Cubas diz que o menino chorava de "gratidão", mas qualquer leitor atento compreende exatamente o inverso — que Prudêncio chorava de dor, humilhação e sofrimento sob a crueldade da escravidão. A ironia serve para denunciar a hipocrisia e a naturalização da barbárie pela elite senhorial.',
      distractorExplanations: {
        'B': 'Denotação assumiria o choro de gratidão como verdade literal, ignorando a crítica machadiana.',
        'C': 'Pleonasmo seria repetição de mesma ideia.',
        'D': 'Antítese aproxima opostos ("o riso e o choro"), mas aqui a intenção é dizer o contrário da verdade literal.',
        'E': 'Função conativa visa persuadir o receptor a comprar ou agir imediatamente.'
      },
      enemTip: 'Machado de Assis + personagem da elite justificando suas perversidades com ar benevolente = Ironia desmascarando a hipocrisia social.'
    },
    difficulty: 'medio'
  },
  {
    id: 'q-ling-09',
    subject: 'linguagens',
    discipline: 'Língua Portuguesa / Gramática',
    category: 'Interpretação e Teoria do Texto',
    contextText: 'Considere a seguinte frase retirada de uma matéria de jornal regional:\n\n"A polícia interceptou o suspeito que fugia em seu carro blindado e realizou a detenção imediata."\n\nAo ler a frase com atenção estrita à sintaxe, constata-se um problema de clareza que gera duas leituras possíveis: o carro pertencia ao suspeito ou à própria polícia que realizava a perseguição?',
    sourceInfo: 'Manual de Redação e Estilo Jornalístico, 2021',
    prompt: 'A duplicidade indesejada de interpretação gerada pelo emprego do pronome possessivo "seu" no texto é um caso típico de:',
    options: [
      { id: 'opt-a', letter: 'A', text: 'Polissemia vocabular lírica', conceptName: 'Polissemia' },
      { id: 'opt-b', letter: 'B', text: 'Ambiguidade estrutural (anfibologia)', conceptName: 'Ambiguidade' },
      { id: 'opt-c', letter: 'C', text: 'Metáfora conceitual', conceptName: 'Metáfora' },
      { id: 'opt-d', letter: 'D', text: 'Variação diatópica de pronome', conceptName: 'Variação linguística' },
      { id: 'opt-e', letter: 'E', text: 'Intertextualidade policial', conceptName: 'Intertextualidade' }
    ],
    correctOptionId: 'opt-b',
    correctConceptId: 'ambiguidade',
    correctConceptName: 'Ambiguidade',
    explanation: {
      whyCorrect: 'A ambiguidade (ou anfibologia) é o vício de linguagem que resulta em mais de um sentido para uma sentença inteira devido à má colocação de palavras ou uso impreciso de pronomes possessivos de terceira pessoa ("seu/sua"), prejudicando a clareza da mensagem.',
      distractorExplanations: {
        'A': 'Polissemia é o fato de uma palavra isolada ter mais de uma acepção no dicionário, e não o duplo sentido gerado pela sintaxe da frase.',
        'C': 'Metáfora é comparação subjetiva de qualidades, ausente na notícia policial.',
        'D': 'Variação diatópica trata de regionalismos do vocabulário.',
        'E': 'Intertextualidade pressupõe diálogo com obra literária preexistente.'
      },
      enemTip: 'Frases onde não se sabe a quem pertence algo ("em seu carro", "viu o vizinho com sua mãe") trazem casos clássicos de ambiguidade estrutural por uso de possessivo.'
    },
    difficulty: 'facil'
  },
  {
    id: 'q-ling-10',
    subject: 'linguagens',
    discipline: 'Língua Portuguesa / Semântica',
    category: 'Semântica e Significado',
    contextText: 'Analise as sentenças a seguir:\n\n1. "A artesã precisou trocar a linha do carretel para finalizar o bordado da toalha."\n2. "O passageiro perdeu a última linha de ônibus que ligava a cidade universitária ao centro."\n3. "O pesquisador manteve uma linha de raciocínio muito rigorosa durante toda a tese acadêmica."\n4. "Os soldados formaram uma linha defensiva intransponível ao longo da fronteira."',
    sourceInfo: 'Estudos Semânticos do Português Contemporâneo, 2022',
    prompt: 'O fato de o mesmo significante "linha" assumir diferentes significados específicos conforme a esfera social e o contexto discursivo em que é mobilizado demonstra a ocorrência de:',
    options: [
      { id: 'opt-a', letter: 'A', text: 'Polissemia', conceptName: 'Polissemia' },
      { id: 'opt-b', letter: 'B', text: 'Ambiguidade viciosa involuntária', conceptName: 'Ambiguidade' },
      { id: 'opt-c', letter: 'C', text: 'Interdiscursividade religiosa', conceptName: 'Interdiscursividade' },
      { id: 'opt-d', letter: 'D', text: 'Preconceito linguístico regional', conceptName: 'Variação linguística' },
      { id: 'opt-e', letter: 'E', text: 'Função emotiva predominante', conceptName: 'Função emotiva' }
    ],
    correctOptionId: 'opt-a',
    correctConceptId: 'polissemia',
    correctConceptName: 'Polissemia',
    explanation: {
      whyCorrect: 'A polissemia é a faculdade que uma única palavra possui de expressar múltiplos sentidos que guardam algum laço semântico ou histórico comum entre si (fio, trajeto, método, formação em fila), cuja definição exata é conferida pelo contexto em que se encontra.',
      distractorExplanations: {
        'B': 'Nenhuma das sentenças gera confusão de sentido ou duplo sentido ambíguo; em cada uma o sentido de "linha" é perfeitamente claro.',
        'C': 'Não há nenhuma relação com práticas ou discursos religiosos.',
        'D': 'Todas as quatro frases utilizam o vocabulário padrão da língua, sem juízos de preconceito.',
        'E': 'As frases são sentenças declarativas referenciais, sem teor emotivo de desabafo pessoal.'
      },
      enemTip: 'Uma mesma palavra com vários sentidos contextuais diferentes = Polissemia. Uma frase mal construída que permite duas interpretações = Ambiguidade.'
    },
    difficulty: 'medio'
  },
  {
    id: 'q-ling-11',
    subject: 'linguagens',
    discipline: 'Língua Portuguesa / Sociolinguística',
    category: 'Linguagem e Sociedade',
    contextText: 'Em um vídeo publicado em uma rede social, um professor de gramática tradicional ironizou severamente um trabalhador que dizia "nós pega os peixe": "Pessoas que falam assim demonstram total falta de massa cinzenta e merecem continuar na miséria, pois assassinam a língua de Camões todos os dias".',
    sourceInfo: 'Observatório da Sociolinguística Brasileira, 2023',
    prompt: 'A postura do professor expressa uma atitude sociolinguística inadequada e discriminatória conhecida como:',
    options: [
      { id: 'opt-a', letter: 'A', text: 'Preconceito linguístico', conceptName: 'Variação linguística' },
      { id: 'opt-b', letter: 'B', text: 'Função metalinguística emancipatória', conceptName: 'Funções da linguagem' },
      { id: 'opt-c', letter: 'C', text: 'Relativismo cultural ético', conceptName: 'Relativismo cultural' },
      { id: 'opt-d', letter: 'D', text: 'Intertextualidade estilística', conceptName: 'Intertextualidade' },
      { id: 'opt-e', letter: 'E', text: 'Metonímia sociológica', conceptName: 'Metonímia' }
    ],
    correctOptionId: 'opt-a',
    correctConceptId: 'variacao-linguistica',
    correctConceptName: 'Variação Linguística',
    explanation: {
      whyCorrect: 'O preconceito linguístico é a discriminação contra variedades linguísticas populares, associando incorretamente marcas de fala de classes menos escolarizadas à incapacidade intelectual ou preguiça moral. A linguística moderna demonstra que todas as variedades seguem regularidades gramaticais próprias.',
      distractorExplanations: {
        'B': 'A fala do professor não liberta nem emancipa ninguém; trata-se de humilhação classista.',
        'C': 'O relativismo cultural acolheria a riqueza das variedades sem hierarquizá-las.',
        'D': 'Intertextualidade é o diálogo com obras literárias.',
        'E': 'Metonímia é uma figura de linguagem semântica.'
      },
      enemTip: 'Marcos Bagno e a sociolinguística do ENEM: não se fala em "certo" ou "errado", mas em "adequado" ou "inadequado" à situação comunicativa. Qualquer condenação elitista da fala popular é preconceito linguístico.'
    },
    difficulty: 'facil'
  },
  {
    id: 'q-ling-12',
    subject: 'linguagens',
    discipline: 'Língua Portuguesa / Sociolinguística',
    category: 'Linguagem e Sociedade',
    contextText: 'Leia a estrofe do cordelista Patativa do Assaré:\n\n"Sendo eu mió do que ele,\nNa foice, no machado e no enxadão,\nTrabaio dia e noite no sertão,\nMas tudo que pranto e colho\nNum é meu, é do patrão!"',
    sourceInfo: 'ASSARÉ, Patativa do. Cante Lá que Eu Canto Cá, 1978',
    prompt: 'O emprego de formas como "mió", "trabaio", "pranto" e "num" no poema de Patativa do Assaré:',
    options: [
      { id: 'opt-a', letter: 'A', text: 'Constitui recurso legítimo que valoriza a variedade linguística regional sertaneja e a identidade do homem do campo.', conceptName: 'Variação linguística' },
      { id: 'opt-b', letter: 'B', text: 'Evidencia descuido formal que compromete irremediavelmente a capacidade poética e o valor estético do autor.', conceptName: 'Variação linguística' },
      { id: 'opt-c', letter: 'C', text: 'Gera uma ambiguidade sintática que impede a compreensão do protesto contra a exploração do trabalhador.', conceptName: 'Ambiguidade' },
      { id: 'opt-d', letter: 'D', text: 'Representa um exemplo involuntário de polissemia vocabular urbana.', conceptName: 'Polissemia' },
      { id: 'opt-e', letter: 'E', text: 'Demonstra a presença exclusiva da função fática na comunicação literária de cordel.', conceptName: 'Funções da linguagem' }
    ],
    correctOptionId: 'opt-a',
    correctConceptId: 'variacao-linguistica',
    correctConceptName: 'Variação Linguística',
    explanation: {
      whyCorrect: 'A variação linguística regional (diatópica) e sociocultural manifestada na literatura de cordel é um recurso artístico autêntico de representação do povo sertanejo, transmitindo força expressiva, dignidade histórica e engajamento social.',
      distractorExplanations: {
        'B': 'A alternativa reproduz preconceito linguístico arcaico repudiado pela prova do ENEM.',
        'C': 'O sentido e a crítica social da estrofe são claríssimos e de profunda pungência.',
        'D': 'Não há polissemia urbana, mas sim oralidade rural sertaneja.',
        'E': 'A função predominante é emotiva e poética de denúncia social, e não fática.'
      },
      enemTip: 'No ENEM, a literatura regional e os falares populares são sempre valorizados como patrimônio cultural vivo e legítimo da nossa diversidade linguística.'
    },
    difficulty: 'facil'
  },
  {
    id: 'q-ling-13',
    subject: 'linguagens',
    discipline: 'Língua Portuguesa',
    category: 'Funções da Linguagem',
    contextText: '"A Organização Mundial da Saúde (OMS) declarou que a prevalência global de obesidade quase triplicou desde 1975. Em 2022, mais de 1 bilhão de indivíduos em todo o mundo viviam com obesidade, condição associada a riscos aumentados de doenças cardiovasculares, diabetes tipo 2 e disfunções metabólicas crônicas."',
    sourceInfo: 'Boletim Epidemiológico Internacional, 2023',
    prompt: 'Por centrar-se na transmissão objetiva de dados, primar pela clareza impessoal e utilizar a terceira pessoa gramatical com vocabulário denotativo, o texto exemplifica primordialmente a:',
    options: [
      { id: 'opt-a', letter: 'A', text: 'Função poética da estética verbal', conceptName: 'Função poética' },
      { id: 'opt-b', letter: 'B', text: 'Função referencial (ou denotativa)', conceptName: 'Função referencial' },
      { id: 'opt-c', letter: 'C', text: 'Função emotiva de confissão individual', conceptName: 'Função emotiva' },
      { id: 'opt-d', letter: 'D', text: 'Função fática de contato comunicativo', conceptName: 'Funções da linguagem' },
      { id: 'opt-e', letter: 'E', text: 'Função conativa de comando imperativo', conceptName: 'Função conativa' }
    ],
    correctOptionId: 'opt-b',
    correctConceptId: 'funcao-referencial',
    correctConceptName: 'Função Referencial',
    explanation: {
      whyCorrect: 'A função referencial (informativa ou denotativa) foca no referente (contexto/assunto da mensagem). Utiliza linguagem objetiva, dados factuais, verbos na 3ª pessoa e sentido literal para comunicar dados com precisão.',
      distractorExplanations: {
        'A': 'Função poética focaria no ritmo, rima e beleza das palavras.',
        'C': 'Função emotiva expressaria as aflições pessoais do redator em 1ª pessoa.',
        'D': 'Função fática focaria em testar o canal auditivo ou visual da comunicação.',
        'E': 'Função conativa usaria ordens como "emagreça agora", ausentes no texto neutro da OMS.'
      },
      enemTip: 'Notícias jornalísticas, relatórios científicos e enciclopédias focados em dados neutros: a resposta é Função Referencial.'
    },
    difficulty: 'facil'
  },
  {
    id: 'q-ling-14',
    subject: 'linguagens',
    discipline: 'Língua Portuguesa / Literatura',
    category: 'Funções da Linguagem',
    contextText: '"Meu Deus, sinto uma angústia tão profunda que me queima o peito! Não consigo mais esconder o quanto a solidão deste quarto frio me sufoca e consome a minha alma. Choro sozinho na penumbra, sentindo que ninguém neste mundo é capaz de compreender o tamanho do meu desamparo."',
    sourceInfo: 'Páginas íntimas de um diário pessoal, 2022',
    prompt: 'O trecho é estruturado prioritariamente em torno da expressão de sentimentos subjetivos em primeira pessoa e marcas de emotividade, o que caracteriza a predominância da:',
    options: [
      { id: 'opt-a', letter: 'A', text: 'Função emotiva (ou expressiva)', conceptName: 'Função emotiva' },
      { id: 'opt-b', letter: 'B', text: 'Função referencial factual', conceptName: 'Função referencial' },
      { id: 'opt-c', letter: 'C', text: 'Função conativa de persuasão', conceptName: 'Função conativa' },
      { id: 'opt-d', letter: 'D', text: 'Função metalinguística gramatical', conceptName: 'Funções da linguagem' },
      { id: 'opt-e', letter: 'E', text: 'Função fática de abertura', conceptName: 'Funções da linguagem' }
    ],
    correctOptionId: 'opt-a',
    correctConceptId: 'funcao-emotiva',
    correctConceptName: 'Função Emotiva',
    explanation: {
      whyCorrect: 'A função emotiva (ou expressiva) é centrada no emissor ("eu"). Caracteriza-se por pontos de exclamação, interjeições, verbos e pronomes em primeira pessoa e exposição aberta de aflições, desejos e sentimentos íntimos.',
      distractorExplanations: {
        'B': 'Função referencial seria objetiva e em terceira pessoa.',
        'C': 'Função conativa buscaria influenciar o receptor com verbos no imperativo.',
        'D': 'Função metalinguística analisaria a estrutura dos termos da língua.',
        'E': 'Função fática apenas checaria a estabilidade da linha comunicativa.'
      },
      enemTip: 'Diários pessoais, cartas de desabafo e poesias ultrarromânticas carregadas de 1ª pessoa ("sinto", "choro", "meu peito") materializam a Função Emotiva.'
    },
    difficulty: 'facil'
  },
  {
    id: 'q-ling-15',
    subject: 'linguagens',
    discipline: 'Língua Portuguesa / Publicidade',
    category: 'Funções da Linguagem',
    contextText: 'Em um cartaz afixado em postos de saúde de todo o país durante a campanha de outono, lê-se em destaque:\n\n"Proteja quem você ama! Leve seus filhos de 1 a 4 anos para tomar a vacina contra a poliomielite até o final deste mês. Vacinar é um ato de amor e responsabilidade. Não deixe para depois!"',
    sourceInfo: 'Campanha Nacional de Imunização, Ministério da Saúde, 2023',
    prompt: 'A utilização reiterada de verbos no modo imperativo ("proteja", "leve", "não deixe") associada a pronomes de tratamento direcionados ao leitor ("você", "seus filhos") evidencia a primazia da:',
    options: [
      { id: 'opt-a', letter: 'A', text: 'Função metalinguística', conceptName: 'Funções da linguagem' },
      { id: 'opt-b', letter: 'B', text: 'Função fática', conceptName: 'Funções da linguagem' },
      { id: 'opt-c', letter: 'C', text: 'Função conativa (ou apelativa)', conceptName: 'Função conativa' },
      { id: 'opt-d', letter: 'D', text: 'Função poética pura', conceptName: 'Função poética' },
      { id: 'opt-e', letter: 'E', text: 'Função emotiva confessional', conceptName: 'Função emotiva' }
    ],
    correctOptionId: 'opt-c',
    correctConceptId: 'funcao-conativa',
    correctConceptName: 'Função Conativa (ou Apelativa)',
    explanation: {
      whyCorrect: 'A função conativa (ou apelativa) foca no receptor (destinatário da mensagem). Seu objetivo primordial é persuadir, induzir um comportamento ou conclamar a uma atitude urgente através do modo imperativo e apelos diretos.',
      distractorExplanations: {
        'A': 'Função metalinguística explicaria regras da gramática ou palavras do vocabulário.',
        'B': 'Função fática se restringe ao contato ("alô", "boa tarde").',
        'D': 'Função poética priorizaria a criação artística autônoma das rimas e sons da mensagem.',
        'E': 'Função emotiva estaria revelando a dor pessoal do emissor.'
      },
      enemTip: 'Imperativos ("compre", "faça", "vacine-se", "leia") + você = Função Conativa (ou Apelativa). É a rainha dos cartazes de propaganda no ENEM!'
    },
    difficulty: 'facil'
  },
  {
    id: 'q-ling-16',
    subject: 'linguagens',
    discipline: 'Língua Portuguesa / Literatura',
    category: 'Funções da Linguagem',
    contextText: '"Bebida gasosa\nBeba coca cola\nBabe cola\nBeba coca\nBabe cola caco\nCaco\nCola\nC L A C A"',
    sourceInfo: 'PIGNATARI, Décio. Poema Concreto, 1957',
    prompt: 'No célebre poema concreto de Décio Pignatari, a disposição geométrica no papel, o jogo de aliterações em "b" e "c" e a desconstrução morfológica da palavra para produzir impacto crítico sobre o produto industrial evidenciam o domínio da:',
    options: [
      { id: 'opt-a', letter: 'A', text: 'Função referencial pura', conceptName: 'Função referencial' },
      { id: 'opt-b', letter: 'B', text: 'Função poética da linguagem', conceptName: 'Função poética' },
      { id: 'opt-c', letter: 'C', text: 'Função fática exclusiva', conceptName: 'Funções da linguagem' },
      { id: 'opt-d', letter: 'D', text: 'Variação diacrônica setecentista', conceptName: 'Variação linguística' },
      { id: 'opt-e', letter: 'E', text: 'Denotação informativa estrita', conceptName: 'Denotação' }
    ],
    correctOptionId: 'opt-b',
    correctConceptId: 'funcao-poetica',
    correctConceptName: 'Função Poética',
    explanation: {
      whyCorrect: 'A função poética foca na própria mensagem, explorando a seleção e combinação dos signos sonoros, rítmicos, visuais e semânticos. O poema de Pignatari transforma a forma visual e fônica das letras no veículo central da crítica ao consumismo.',
      distractorExplanations: {
        'A': 'Função referencial forneceria a bula técnica com ingredientes do refrigerante.',
        'C': 'Função fática apenas verificaria se a linha telefônica está funcionando.',
        'D': 'Trata-se de uma vanguarda do século XX (poesia concreta dos anos 1950), não setecentista.',
        'E': 'A denotação literal não explicaria o trabalho estético e crítico de desfragmentação das palavras.'
      },
      enemTip: 'Poesia concreta, arranjo visual das sílabas, aliterações e ritmo sonoro colocam em evidência o código estético da Função Poética.'
    },
    difficulty: 'medio'
  },
  {
    id: 'q-ling-17',
    subject: 'linguagens',
    discipline: 'Língua Portuguesa / Teoria do Texto',
    category: 'Gêneros e Tipologias',
    contextText: 'Com a expansão das redes sociais digitais, consolidou-se uma forma expressiva que combina uma imagem fotográfica ou frame de vídeo viral com uma legenda curta sobreposta, replicada e adaptada à exaustão por milhares de usuários para satirizar situações cotidianas, desabafos sobre o trabalho ou debates políticos efêmeros.',
    sourceInfo: 'Estudos sobre Comunicação e Culturas Conectadas, 2023',
    prompt: 'A prática comunicativa descrita pelo texto exemplifica o surgimento contemporâneo de um novo:',
    options: [
      { id: 'opt-a', letter: 'A', text: 'Tipo textual descritivo estrito', conceptName: 'Gênero textual' },
      { id: 'opt-b', letter: 'B', text: 'Gênero textual digital (o meme)', conceptName: 'Gênero textual' },
      { id: 'opt-c', letter: 'C', text: 'Vício sintático de concordância', conceptName: 'Ambiguidade' },
      { id: 'opt-d', letter: 'D', text: 'Recurso arcaico de metonímia', conceptName: 'Metonímia' },
      { id: 'opt-e', letter: 'E', text: 'Tratado sociológico denotativo', conceptName: 'Denotação' }
    ],
    correctOptionId: 'opt-b',
    correctConceptId: 'genero-textual',
    correctConceptName: 'Gênero Textual',
    explanation: {
      whyCorrect: 'Os gêneros textuais são realizações linguísticas relativamente estáveis que surgem em resposta a demandas sociocomunicativas concretas de sua época. O meme de internet constitui um gênero textual multimodal digital pleno, com formato, função comunicativa e circulação característicos.',
      distractorExplanations: {
        'A': 'Tipo textual é uma estrutura linguística teórica básica (narrativo, descritivo, dissertativo), enquanto o meme é uma realização concreta da esfera digital.',
        'C': 'Não se trata de erro gramatical, mas de um artefato comunicativo estruturado.',
        'D': 'O meme é contemporâneo e multimodal, não um arcaísmo de retórica.',
        'E': 'O meme não tem a estrutura solene de um tratado acadêmico de sociologia.'
      },
      enemTip: 'Memes, tweets, podcasts, infográficos, cartas abertas e tutoriais do YouTube são constantemente analisados no ENEM sob a ótica dos novos Gêneros Textuais.'
    },
    difficulty: 'facil'
  },
  {
    id: 'q-ling-18',
    subject: 'linguagens',
    discipline: 'Língua Portuguesa / Literatura',
    category: 'Figuras de Linguagem',
    contextText: '"Amor é fogo que arde sem se ver;\nÉ ferida que dói e não se sente;\nÉ um contentamento descontente;\nÉ dor que desatina sem doer..."',
    sourceInfo: 'CAMÕES, Luís de. Rimas, séc. XVI',
    prompt: 'Nos célebres versos camonianos, a aproximação de conceitos aparentemente contraditórios e inconciliáveis em uma mesma frase ("contentamento descontente", "dor que desatina sem doer") constitui a figura de linguagem do:',
    options: [
      { id: 'opt-a', letter: 'A', text: 'Paradoxo (ou oximoro)', conceptName: 'Figuras de linguagem' },
      { id: 'opt-b', letter: 'B', text: 'Pleonasmo redundante', conceptName: 'Figuras de linguagem' },
      { id: 'opt-c', letter: 'C', text: 'Preconceito linguístico arcaico', conceptName: 'Variação linguística' },
      { id: 'opt-d', letter: 'D', text: 'Ambiguidade involuntária', conceptName: 'Ambiguidade' },
      { id: 'opt-e', letter: 'E', text: 'Função fática da oralidade', conceptName: 'Funções da linguagem' }
    ],
    correctOptionId: 'opt-a',
    correctConceptId: 'metafora',
    correctConceptName: 'Figuras de Linguagem (Paradoxo)',
    explanation: {
      whyCorrect: 'O paradoxo (ou oximoro) é a figura de pensamento que reúne ideias opostas que se excluem logicamente na realidade comum, expressando uma verdade poética mais profunda sobre a complexidade contraditória do sentimento amoroso.',
      distractorExplanations: {
        'B': 'Pleonasmo é a repetição de um mesmo sentido ("subir para cima"), o inverso de unir contrários inconciliáveis.',
        'C': 'Camões é o cânone supremo do classicismo de língua portuguesa.',
        'D': 'A construção é fruto de maestria poética renascentista calculada, sem erro involuntário.',
        'E': 'Não é uma conversa coloquial testando microfone.'
      },
      enemTip: 'Antítese contrapõe palavras opostas ("o amor e o ódio"). Paradoxo contrapõe ideias que se anulam logicamente no mesmo ser ("um contentamento descontente").'
    },
    difficulty: 'medio'
  },
  {
    id: 'q-ling-19',
    subject: 'linguagens',
    discipline: 'Língua Portuguesa / Literatura',
    category: 'Interpretação e Teoria do Texto',
    contextText: 'Em um ensaio sobre a história literária brasileira, o crítico assinala: "Quando lemos os romances de Graciliano Ramos e as crônicas de Rubem Braga, ouvimos ecoar as vozes, os provérbios populares e os silêncios seculares da gente trabalhadora de suas regiões. Nenhum texto é uma ilha fechada: nele habitam ecos de infinitas vozes prévias."',
    sourceInfo: 'Ensaios de Teoria da Literatura Brasileira, 2021',
    prompt: 'O princípio teórico de que a linguagem é constitutivamente atravessada por múltiplas vozes sociais e diálogos com produções culturais anteriores articula os conceitos de:',
    options: [
      { id: 'opt-a', letter: 'A', text: 'Intertextualidade e polifonia', conceptName: 'Intertextualidade' },
      { id: 'opt-b', letter: 'B', text: 'Denotação e univocidade pura', conceptName: 'Denotação' },
      { id: 'opt-c', letter: 'C', text: 'Metonímia quantitativa estrita', conceptName: 'Metonímia' },
      { id: 'opt-d', letter: 'D', text: 'Norma culta prescritiva estática', conceptName: 'Variação linguística' },
      { id: 'opt-e', letter: 'E', text: 'Função conativa impositiva', conceptName: 'Função conativa' }
    ],
    correctOptionId: 'opt-a',
    correctConceptId: 'intertextualidade',
    correctConceptName: 'Intertextualidade',
    explanation: {
      whyCorrect: 'A teoria do texto (conforme Mikhail Bakhtin e Julia Kristeva) demonstra que todo texto é um mosaico de citações e vozes sociais em constante diálogo, fundamentando as noções de polifonia e intertextualidade.',
      distractorExplanations: {
        'B': 'A concepção dialógica refuta radicalmente a ideia de texto unívoco e estritamente neutro.',
        'C': 'Metonímia é apenas uma figura pontual de transferência léxica.',
        'D': 'O texto celebra a presença da oralidade popular, rompendo com o purismo prescritivo fechado.',
        'E': 'A reflexão é crítica e analítica, não uma imposição de comandos publicitários.'
      },
      enemTip: 'Bakhtin, "múltiplas vozes que ecoam no texto", "diálogo com a cultura": as palavras-chave são polifonia e intertextualidade.'
    },
    difficulty: 'dificil'
  },
  {
    id: 'q-ling-20',
    subject: 'linguagens',
    discipline: 'Língua Portuguesa / Gramática Textual',
    category: 'Interpretação e Teoria do Texto',
    contextText: 'Analise o cartaz fixado na porta de um consultório odontológico:\n\n"Tratamento de dentes para adultos e crianças sem dor."\n\nAo ler o aviso, um paciente indagou rindo na recepção se o que era "sem dor" era o procedimento do dentista ou se a clínica só atendia dentes que não estivessem doendo.',
    sourceInfo: 'Casos Curiosos da Comunicação Cotidiana, 2022',
    prompt: 'O humor e a confusão gerados pela disposição dos elementos na frase derivam de um caso de:',
    options: [
      { id: 'opt-a', letter: 'A', text: 'Ambiguidade por adjunção deslocada', conceptName: 'Ambiguidade' },
      { id: 'opt-b', letter: 'B', text: 'Polissemia vocabular erudita', conceptName: 'Polissemia' },
      { id: 'opt-c', letter: 'C', text: 'Interdiscursividade jurídica', conceptName: 'Interdiscursividade' },
      { id: 'opt-d', letter: 'D', text: 'Metáfora conceitual inovadora', conceptName: 'Metáfora' },
      { id: 'opt-e', letter: 'E', text: 'Variação linguística diacrônica', conceptName: 'Variação linguística' }
    ],
    correctOptionId: 'opt-a',
    correctConceptId: 'ambiguidade',
    correctConceptName: 'Ambiguidade',
    explanation: {
      whyCorrect: 'O adjunto adverbial "sem dor" ficou posicionado de tal forma que pode modificar sintaticamente tanto o substantivo "dentes" (dentes que não sentem dor) quanto o substantivo "tratamento" (o processo ser indolor), gerando ambiguidade indesejada.',
      distractorExplanations: {
        'B': 'As palavras usadas são triviais e cotidianas, não eruditas.',
        'C': 'Não há nenhum cruzamento com o jargão do direito processual.',
        'D': 'A frase é puramente literal, sem figuras poéticas de metáfora.',
        'E': 'A frase reflete o português contemporâneo comum, sem elementos arcaicos históricos.'
      },
      enemTip: 'Ambiguidade em placas e anúncios é motivo clássico de questões práticas no ENEM: reescrever a frase ("Tratamento sem dor de dentes para adultos...") eliminaria a ambiguidade.'
    },
    difficulty: 'medio'
  },
  {
    id: 'q-ling-21',
    subject: 'linguagens',
    discipline: 'Língua Portuguesa',
    category: 'Semântica e Significado',
    contextText: 'Ao consultar um dicionário moderno, encontram-se para a entrada "rede" acepções como:\n1. Tecido de malha usado para dormir ou descansar preso por pontas;\n2. Utensílio de pesca feito de fios entrelaçados para capturar peixes;\n3. Divisão divisória colocada no centro de uma quadra de vôlei ou tênis;\n4. Sistema interconectado de computadores e servidores (a internet);\n5. Conjunto articulado de pessoas que compartilham interesses em mídias digitais.',
    sourceInfo: 'Dicionário Contemporâneo da Língua Portuguesa, 2023',
    prompt: 'A coexistência articulada desses variados significados no mesmo verbete é explicada pelo conceito linguístico da:',
    options: [
      { id: 'opt-a', letter: 'A', text: 'Polissemia', conceptName: 'Polissemia' },
      { id: 'opt-b', letter: 'B', text: 'Ambiguidade de concordância', conceptName: 'Ambiguidade' },
      { id: 'opt-c', letter: 'C', text: 'Função conativa', conceptName: 'Função conativa' },
      { id: 'opt-d', letter: 'D', text: 'Interdiscursividade médica', conceptName: 'Interdiscursividade' },
      { id: 'opt-e', letter: 'E', text: 'Preconceito sociolinguístico', conceptName: 'Variação linguística' }
    ],
    correctOptionId: 'opt-a',
    correctConceptId: 'polissemia',
    correctConceptName: 'Polissemia',
    explanation: {
      whyCorrect: 'A polissemia designa a multiplicidade de acepções ligadas por uma raiz etimológica ou metafórica comum (a ideia de nós entrelaçados conectando pontos). Conforme novas tecnologias e práticas surgem, a palavra ganha novos ramos de significado.',
      distractorExplanations: {
        'B': 'Ambiguidade é um defeito de estruturação de frases que produz duplo sentido involuntário.',
        'C': 'Função conativa visa persuadir o interlocutor a adotar uma ação.',
        'D': 'Não há jargão médico nas definições gerais de rede.',
        'E': 'O dicionário apenas registra o léxico vivo da sociedade, sem preconceito social.'
      },
      enemTip: 'Um mesmo verbete no dicionário com vários números e acepções de uso é a prova empírica da Polissemia.'
    },
    difficulty: 'facil'
  },
  {
    id: 'q-ling-22',
    subject: 'linguagens',
    discipline: 'Língua Portuguesa / Sociolinguística',
    category: 'Linguagem e Sociedade',
    contextText: 'Em um tribunal de justiça, o juiz se dirige aos advogados e às testemunhas empregando termos como "nos autos do processo", "precluso o prazo", "data venia" e "deferimento". Ao sair da audiência e encontrar velhos amigos de infância no almoço de domingo, esse mesmo magistrado diz: "E aí, rapaziada, beleza? O negócio lá hoje foi osso!".',
    sourceInfo: 'Estudos de Pragmática e Registros da Fala, 2022',
    prompt: 'A capacidade do falante de alternar conscientemente seu estilo e nível de formalidade de acordo com a situação de interação social e seus interlocutores ilustra a:',
    options: [
      { id: 'opt-a', letter: 'A', text: 'Adequação linguística (variação diafásica)', conceptName: 'Variação linguística' },
      { id: 'opt-b', letter: 'B', text: 'Ambiguidade involuntária de gênero textual', conceptName: 'Ambiguidade' },
      { id: 'opt-c', letter: 'C', text: 'Função metalinguística de reprovação', conceptName: 'Funções da linguagem' },
      { id: 'opt-d', letter: 'D', text: 'Incompetência comunicativa do magistrado', conceptName: 'Variação linguística' },
      { id: 'opt-e', letter: 'E', text: 'Paródia intertextual da liturgia jurídica', conceptName: 'Intertextualidade' }
    ],
    correctOptionId: 'opt-a',
    correctConceptId: 'variacao-linguistica',
    correctConceptName: 'Variação Linguística (Adequação)',
    explanation: {
      whyCorrect: 'A variação diafásica (ou de registro) diz respeito à variação contextual de estilo: saber usar a formalidade culta em ambientes institucionais solenes e o registro coloquial e afetivo com amigos íntimos. Isso reflete competência e adequação linguística.',
      distractorExplanations: {
        'B': 'Não há ambiguidade; cada fala é perfeitamente adequada ao seu contexto situacional.',
        'C': 'O falante não está definindo termos gramaticais.',
        'D': 'Pelo contrário: dominar diferentes registros é o sinal máximo de competência comunicativa.',
        'E': 'O juiz não está parodiando nada, apenas vivendo sua rotina cotidiana de relações interpessoais.'
      },
      enemTip: 'Ninguém fala do mesmo jeito o tempo todo: saber dosar a linguagem entre a entrevista de emprego e o churrasco com amigos chama-se Adequação Linguística (variação situacional/diafásica).'
    },
    difficulty: 'facil'
  },
  {
    id: 'q-ling-23',
    subject: 'linguagens',
    discipline: 'Língua Portuguesa',
    category: 'Funções da Linguagem',
    contextText: 'Durante uma aula remota, a professora percebe ruídos na transmissão e interrompe a explicação dizendo: "Pessoal, vocês estão conseguindo me ouvir bem agora? O áudio do meu microfone está falhando ou voltou ao normal? Testando, um, dois, três... podem me responder pelo chat?".',
    sourceInfo: 'Gravação de Aula Remota Universitária, 2021',
    prompt: 'Na fala da professora, o foco recai exclusivamente na manutenção, teste e verificação da eficiência do canal físico de transmissão da mensagem, o que define a:',
    options: [
      { id: 'opt-a', letter: 'A', text: 'Função fática', conceptName: 'Funções da linguagem' },
      { id: 'opt-b', letter: 'B', text: 'Função poética da musicalidade', conceptName: 'Função poética' },
      { id: 'opt-c', letter: 'C', text: 'Função metalinguística dicionarizada', conceptName: 'Funções da linguagem' },
      { id: 'opt-d', letter: 'D', text: 'Função referencial enciclopédica', conceptName: 'Função referencial' },
      { id: 'opt-e', letter: 'E', text: 'Função emotiva exasperada', conceptName: 'Função emotiva' }
    ],
    correctOptionId: 'opt-a',
    correctConceptId: 'funcao-referencial',
    correctConceptName: 'Funções da Linguagem (Função Fática)',
    explanation: {
      whyCorrect: 'A função fática tem como foco o canal de contato físico ou psicológico entre os interlocutores. Serve para abrir, testar, prolongar ou encerrar a comunicação ("alô?", "entendeu?", "me ouvem?", "testando").',
      distractorExplanations: {
        'B': 'Não há intenção de beleza poética ou rimas estéticas.',
        'C': 'Função metalinguística explicaria a gramática do português.',
        'D': 'A professora interrompeu o conteúdo referencial da aula para checar o funcionamento do canal técnico.',
        'E': 'A fala é um procedimento técnico rotineiro de checagem, sem desabafo lírico emotivo.'
      },
      enemTip: 'Qualquer fala que sirva para testar microfone ("1, 2, 3..."), checar se o outro está prestando atenção ("né?", "sabe?") ou cumprimentar no telefone ("alô") representa a Função Fática.'
    },
    difficulty: 'facil'
  },
  {
    id: 'q-ling-24',
    subject: 'linguagens',
    discipline: 'Língua Portuguesa',
    category: 'Funções da Linguagem',
    contextText: '"A oração subordinada substantiva apositiva exerce o papel sintático de aposto de um termo da oração principal, vindo habitualmente introduzida pela conjunção integrante \'que\' ou \'se\' e frequentemente precedida por dois-pontos."',
    sourceInfo: 'BECHARA, Evanildo. Moderna Gramática Portuguesa (adaptado)',
    prompt: 'Quando a própria linguagem e o código linguístico são empregados para explicar, classificar e analisar as regras da própria língua, tem-se a primazia da:',
    options: [
      { id: 'opt-a', letter: 'A', text: 'Função metalinguística', conceptName: 'Funções da linguagem' },
      { id: 'opt-b', letter: 'B', text: 'Função conativa', conceptName: 'Função conativa' },
      { id: 'opt-c', letter: 'C', text: 'Função fática', conceptName: 'Funções da linguagem' },
      { id: 'opt-d', letter: 'D', text: 'Função poética pura', conceptName: 'Função poética' },
      { id: 'opt-e', letter: 'E', text: 'Função emotiva lírica', conceptName: 'Função emotiva' }
    ],
    correctOptionId: 'opt-a',
    correctConceptId: 'funcao-referencial',
    correctConceptName: 'Funções da Linguagem (Função Metalinguística)',
    explanation: {
      whyCorrect: 'A função metalinguística centra-se no próprio código comunicativo. Acontece sempre que a língua fala da própria língua (em gramáticas, dicionários, aulas de redação) ou quando uma obra de arte discute o próprio ato de fazer arte (um poema sobre escrever poemas, um filme sobre fazer cinema).',
      distractorExplanations: {
        'B': 'Função conativa comanda o receptor com ordens ou persuasão.',
        'C': 'Função fática testa a ligação ou canal de transmissão.',
        'D': 'O trecho é uma explicação técnica normativa de sintaxe, sem intenção poética de versos.',
        'E': 'Não expressa os sentimentos íntimos do gramático.'
      },
      enemTip: 'Gramática explicando regência, dicionário conceituando vocábulo, ou poeta escrevendo "Gastar horas olhando o papel em branco para fazer um verso": isso é Metalinguagem!'
    },
    difficulty: 'facil'
  },
  {
    id: 'q-ling-25',
    subject: 'linguagens',
    discipline: 'Língua Portuguesa / Literatura',
    category: 'Figuras de Linguagem',
    contextText: 'Na reportagem sobre a crise hídrica que afetou o interior paulista, o jornalista registrou: "O rio Tietê agonizava silencioso sob o sol inclemente do meio-dia, estendendo seus braços ressequidos em súplica desesperada por uma gota de chuva que lhe devolvesse a dignidade de outrora."',
    sourceInfo: 'Reportagem Especial sobre os Rios Brasileiros, 2021',
    prompt: 'Ao atribuir comportamentos, sentimentos e ações tipicamente humanas ("agonizava", "estendendo braços em súplica", "dignidade") a um elemento inanimado da natureza (o rio), o texto recorre à:',
    options: [
      { id: 'opt-a', letter: 'A', text: 'Personificação (ou prosopopeia)', conceptName: 'Figuras de linguagem' },
      { id: 'opt-b', letter: 'B', text: 'Metonímia de autor pela obra', conceptName: 'Metonímia' },
      { id: 'opt-c', letter: 'C', text: 'Função apelativa imperativa', conceptName: 'Função conativa' },
      { id: 'opt-d', letter: 'D', text: 'Ambiguidade viciosa involuntária', conceptName: 'Ambiguidade' },
      { id: 'opt-e', letter: 'E', text: 'Variação diatópica caipira', conceptName: 'Variação linguística' }
    ],
    correctOptionId: 'opt-a',
    correctConceptId: 'metafora',
    correctConceptName: 'Figuras de Linguagem (Prosopopeia)',
    explanation: {
      whyCorrect: 'A personificação (ou prosopopeia) consiste em atribuir qualidades, emoções, reações psicológicas ou atos conscientes próprios de seres humanos a animais, objetos inanimados ou fenômenos naturais.',
      distractorExplanations: {
        'B': 'Metonímia seria citar o autor no lugar do livro ("ler Machado").',
        'C': 'Função apelativa ordenaria o leitor a economizar água com verbos no imperativo.',
        'D': 'A construção poética é cristalina e comovente, sem qualquer ambiguidade de sintaxe.',
        'E': 'A linguagem é formal e culta de jornalismo investigativo literário.'
      },
      enemTip: 'Coisas inanimadas que "choram", "suplicam", "respiram" ou "sentem saudades" indicam o uso da Prosopopeia / Personificação.'
    },
    difficulty: 'facil'
  }
];

