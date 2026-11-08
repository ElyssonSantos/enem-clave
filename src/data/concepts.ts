import { Concept } from '../types';

export const CONCEPTS: Concept[] = [
  // ==========================================
  // CIÊNCIAS HUMANAS
  // ==========================================
  {
    id: 'ressignificacao',
    name: 'Ressignificação',
    subject: 'humanas',
    discipline: 'Sociologia / Artes',
    category: 'Cultura e Sociedade',
    definition: 'Processo pelo qual um objeto, prática, símbolo ou espaço adquire um novo sentido, função ou valor simbólico diferente do original.',
    didacticExplanation: 'A ressignificação ocorre quando a sociedade ou sujeitos históricos pegam algo que já existia (um monumento, um objeto descartado, uma dança tradicional, um espaço urbano degradado) e o transformam, dando-lhe uma nova utilidade ou mensagem que reflete novas demandas culturais ou políticas.',
    practicalExample: 'Transformar galpões industriais abandonados em centros culturais comunitários ou usar garrafas plásticas descartadas para criar esculturas e instrumentos musicais.',
    enemContext: 'Muito frequente em questões sobre arte contemporânea, patrimônio histórico, grafite, intervenções urbanas e apropriação de espaços públicos.',
    similarConcepts: [
      { name: 'Aculturação', distinction: 'Aculturação envolve contato e fusão de duas culturas distintas; ressignificação é atribuir novo valor a algo existente.' },
      { name: 'Alienação cultural', distinction: 'Alienação é a perda da consciência crítica; ressignificação é um ato ativo e consciente de recriação de sentido.' }
    ],
    relatedQuestionIds: ['q-hum-01', 'q-hum-02'],
    difficulty: 'medio',
    tags: ['cultura', 'arte', 'espaço urbano', 'simbolismo']
  },
  {
    id: 'etnocentrismo',
    name: 'Etnocentrismo',
    subject: 'humanas',
    discipline: 'Sociologia / Antropologia',
    category: 'Cultura e Sociedade',
    definition: 'Tendência a julgar a cultura, crenças e costumes de outros povos a partir dos padrões da sua própria cultura, considerando-se superior.',
    didacticExplanation: 'No etnocentrismo, o indivíduo toma sua própria cultura como o centro do universo e padrão absoluto de beleza, civilização e moralidade. Quem age de forma diferente é visto como "selvagem", "atrasado", "exótico" ou "inferior".',
    practicalExample: 'Um viajante ocidental classificar rituais religiosos indígenas como "feitiçaria primitiva" simplesmente por não seguirem os moldes das religiões monoteístas ocidentais.',
    enemContext: 'Aparece com frequência em relatos de colonizadores, crônicas do século XVI, narrativas eurocêntricas e preconceitos contemporâneos contra povos tradicionais.',
    similarConcepts: [
      { name: 'Relativismo cultural', distinction: 'Relativismo é o oposto: compreende cada cultura em seus próprios termos sem julgá-la superior ou inferior.' },
      { name: 'Eurocentrismo', distinction: 'Eurocentrismo é uma forma específica e hegemônica de etnocentrismo que coloca a Europa como ápice do progresso humano.' }
    ],
    relatedQuestionIds: ['q-hum-03', 'q-hum-04'],
    difficulty: 'facil',
    tags: ['antropologia', 'preconceito', 'cultura', 'colonização']
  },
  {
    id: 'relativismo-cultural',
    name: 'Relativismo Cultural',
    subject: 'humanas',
    discipline: 'Sociologia / Antropologia',
    category: 'Cultura e Sociedade',
    definition: 'Perspectiva antropológica que propõe compreender costumes e valores de um grupo a partir de sua própria lógica interna, sem juízos de valor externos.',
    didacticExplanation: 'Criado pela antropologia moderna (como Franz Boas), o relativismo cultural defende que nenhuma cultura é inerentemente superior a outra. Para entender um hábito ou crença, é preciso olhar a história, o ambiente e o significado que aquele povo dá à sua própria prática.',
    practicalExample: 'Estudar os hábitos alimentares de uma tribo isolada entendendo sua relação com a fauna local e crenças ancestrais, em vez de taxá-los de "bizarros".',
    enemContext: 'Cobrado em questões que criticam visões preconceituosas e defendem a diversidade cultural e os direitos humanos.',
    similarConcepts: [
      { name: 'Etnocentrismo', distinction: 'O etnocentrismo julga e hierarquiza; o relativismo compreende na sua própria lógica.' },
      { name: 'Alteridade', distinction: 'Alteridade é o reconhecimento da existência e dignidade do outro como sujeito legítimo.' }
    ],
    relatedQuestionIds: ['q-hum-05'],
    difficulty: 'medio',
    tags: ['antropologia', 'diversidade', 'método científico']
  },
  {
    id: 'alteridade',
    name: 'Alteridade',
    subject: 'humanas',
    discipline: 'Filosofia / Sociologia',
    category: 'Filosofia e Ética',
    definition: 'A capacidade de reconhecer, respeitar e acolher a existência do "outro" em suas diferenças individuais e coletivas.',
    didacticExplanation: 'Alteridade vem do latim alter ("o outro"). Significa perceber que o outro não é uma extensão de mim nem uma ameaça, mas alguém com identidade própria, direitos e subjetividade que devem ser respeitados.',
    practicalExample: 'Em uma assembleia escolar, ouvir atentamente a proposta de um grupo com vivência oposta à sua e integrá-la à decisão coletiva com empatia e respeito.',
    enemContext: 'Tema central em discussões de direitos humanos, inclusão social, convivência democrática e tolerância religiosa no ENEM.',
    similarConcepts: [
      { name: 'Empatia', distinction: 'Empatia é a identificação afetiva com a dor do outro; alteridade é um reconhecimento ético-filosófico da singularidade alheia.' },
      { name: 'Relativismo cultural', distinction: 'Relativismo é uma postura metodológica antropológica; alteridade é uma postura ética e relacional.' }
    ],
    relatedQuestionIds: ['q-hum-06'],
    difficulty: 'medio',
    tags: ['ética', 'filosofia', 'direitos humanos', 'diversidade']
  },
  {
    id: 'aculturacao',
    name: 'Aculturação',
    subject: 'humanas',
    discipline: 'Sociologia / História',
    category: 'Cultura e Sociedade',
    definition: 'Processo de modificação cultural resultante do contato direto e continuado entre grupos com culturas distintas.',
    didacticExplanation: 'Quando duas culturas convivem, trocam elementos voluntariamente ou por imposição (assimilação forçada). O resultado é uma transformação recíproca ou assimilação de novos costumes, hábitos e línguas.',
    practicalExample: 'Imigrantes que chegam a um novo país e incorporam a língua e a culinária locais em sua rotina doméstica, mesclando com suas tradições de origem.',
    enemContext: 'Comum em questões históricas sobre a colonização do Brasil, missões jesuíticas, e processos migratórios contemporâneos.',
    similarConcepts: [
      { name: 'Sincretismo cultural', distinction: 'Sincretismo é a fusão de elementos religiosos ou simbólicos gerando uma nova síntese coerente.' },
      { name: 'Etnocentrismo', distinction: 'Etnocentrismo é a atitude de julgar o outro; aculturação é o processo empírico de transformação cultural no contato.' }
    ],
    relatedQuestionIds: ['q-hum-07'],
    difficulty: 'medio',
    tags: ['história', 'imigração', 'contato cultural']
  },
  {
    id: 'sincretismo-cultural',
    name: 'Sincretismo Cultural',
    subject: 'humanas',
    discipline: 'Sociologia / História',
    category: 'Cultura e Sociedade',
    definition: 'Fusão de diferentes tradições culturais ou doutrinas religiosas que dá origem a uma nova síntese mista e original.',
    didacticExplanation: 'O sincretismo ocorre quando dois sistemas de crenças convivem e seus elementos se entrelaçam. Frequentemente foi uma estratégia de resistência: povos escravizados associavam orixás a santos católicos para manter seus cultos disfarçados.',
    practicalExample: 'A associação de Ogum a São Jorge na cultura brasileira, com fiéis celebrando ambos na mesma festa com rituais mesclados.',
    enemContext: 'Frequente em questões sobre a formação da identidade afro-brasileira, culinária e festas populares como a Lavagem do Bonfim.',
    similarConcepts: [
      { name: 'Aculturação', distinction: 'Aculturação é um termo mais amplo de mudança cultural; sincretismo refere-se à harmonização de crenças e ritos antes incompatíveis.' },
      { name: 'Hibridismo cultural', distinction: 'Hibridismo é o conceito contemporâneo de misturas interculturais; sincretismo tem forte cunho histórico-religioso.' }
    ],
    relatedQuestionIds: ['q-hum-08'],
    difficulty: 'facil',
    tags: ['religião', 'cultura afro-brasileira', 'história']
  },
  {
    id: 'industria-cultural',
    name: 'Indústria Cultural',
    subject: 'humanas',
    discipline: 'Sociologia / Filosofia',
    category: 'Cultura e Sociedade',
    definition: 'Conceito da Escola de Frankfurt (Adorno e Horkheimer) que designa a produção em massa de bens culturais padronizados visando ao lucro e à passividade das massas.',
    didacticExplanation: 'A arte e a cultura deixam de ser expressões autônomas e críticas e passam a ser mercadorias formatadas para consumo rápido. As músicas seguem fórmulas prontas, os filmes repetem clichês, e o público é condicionado ao entretenimento superficial.',
    practicalExample: 'Fórmulas de músicas pop ou algoritmos de vídeos curtos projetados exclusivamente com base em métricas de retenção para gerar vendas de anúncios, sem incentivar reflexão crítica.',
    enemContext: 'Tema recorrente no ENEM em questões que discutem os meios de comunicação de massa, redes sociais, consumo e manipulação da opinião pública.',
    similarConcepts: [
      { name: 'Cultura de massa', distinction: 'Cultura de massa foca no produto consumido pelo grande público; Indústria Cultural foca no aparelho produtivo mercantil e alienador.' },
      { name: 'Alienação', distinction: 'A Indústria Cultural é um dos principais instrumentos contemporâneos que geram e sustentam a alienação.' }
    ],
    relatedQuestionIds: ['q-hum-09'],
    difficulty: 'medio',
    tags: ['escola de frankfurt', 'filosofia', 'mídia', 'consumo']
  },
  {
    id: 'alienacao',
    name: 'Alienação',
    subject: 'humanas',
    discipline: 'Filosofia / Sociologia',
    category: 'Trabalho e Sociedade',
    definition: 'Condição em que o indivíduo perde o controle sobre suas próprias criações, trabalho, pensamento ou decisões, tornando-se alheio à sua essência e à realidade.',
    didacticExplanation: 'Conceitualizada por Marx no trabalho (o trabalhador não se reconhece no produto que faz, pois a riqueza gerada não lhe pertence) e ampliada na política e cultura (o sujeito adota ideias contrárias aos seus próprios interesses sem perceber).',
    practicalExample: 'Um operário que aperta o mesmo parafuso na linha de montagem durante 30 anos sem saber montar o carro inteiro e sem ter renda para comprá-lo.',
    enemContext: 'Cobrado em textos sobre fordismo, taylorismo, precarização do trabalho de plataformas (uberização) e conformismo social.',
    similarConcepts: [
      { name: 'Mais-valia', distinction: 'Mais-valia é a apropriação econômica do excedente de trabalho; alienação é o estado psicológico e social de estranhamento.' },
      { name: 'Fetichismo da mercadoria', distinction: 'Fetichismo é a ilusão de que as mercadorias têm vida e valor próprios, ocultando a exploração humana.' }
    ],
    relatedQuestionIds: ['q-hum-10'],
    difficulty: 'medio',
    tags: ['marx', 'trabalho', 'capitalismo', 'consciência crítica']
  },
  {
    id: 'mais-valia',
    name: 'Mais-valia',
    subject: 'humanas',
    discipline: 'Sociologia / Economia',
    category: 'Trabalho e Sociedade',
    definition: 'Diferença entre o valor total produzido pelo trabalhador durante sua jornada de trabalho e o salário efetivamente pago pelo empregador.',
    didacticExplanation: 'Se um trabalhador produz o equivalente ao seu salário diário em apenas 3 horas, as outras 5 horas trabalhadas são apropriadas pelo dono dos meios de produção como lucro (mais-valia absoluta pelo aumento de horas, ou relativa pelo aumento da produtividade/tecnologia).',
    practicalExample: 'A fábrica introduz robôs que quadruplicam a produção diária de um operário, mas seu salário continua o mesmo: ampliação da mais-valia relativa.',
    enemContext: 'Questões que analisam as relações trabalhistas na Revolução Industrial, greves históricas e aumento da desigualdade de renda no capitalismo.',
    similarConcepts: [
      { name: 'Lucro contábil', distinction: 'Lucro é a margem financeira empresarial; mais-valia é a categoria marxista da apropriação do trabalho não pago.' },
      { name: 'Alienação', distinction: 'A mais-valia é a base material econômica que alimenta as relações alienadas de trabalho.' }
    ],
    relatedQuestionIds: ['q-hum-11'],
    difficulty: 'dificil',
    tags: ['marx', 'economia', 'trabalho', 'capitalismo']
  },
  {
    id: 'fetichismo-da-mercadoria',
    name: 'Fetichismo da Mercadoria',
    subject: 'humanas',
    discipline: 'Sociologia / Filosofia',
    category: 'Trabalho e Sociedade',
    definition: 'Fenômeno pelo qual os produtos do trabalho humano parecem possuir qualidades e poderes mágicos ou autônomos, ocultando as relações sociais de exploração.',
    didacticExplanation: 'As pessoas passam a enxergar as mercadorias como se tivessem valor próprio divino ou mágico. Um tênis ou celular confere status e poder a quem o usa, enquanto a mão de obra explorada e as condições desumanas de quem o fabricou são invisibilizadas.',
    practicalExample: 'Pessoas formarem filas de dias e se endividarem para comprar um smartphone de última geração pelo "prestígio mágico" que a marca concede, ignorando as condições da cadeia produtiva.',
    enemContext: 'Aparece em charges e textos que debatem o consumismo desenfreado, a publicidade e a coisificação das relações humanas no ENEM.',
    similarConcepts: [
      { name: 'Alienação', distinction: 'Alienação é o distanciamento do sujeito de seu trabalho; o fetichismo é a ilusão projetada sobre a mercadoria produzida.' },
      { name: 'Indústria Cultural', distinction: 'A Indústria Cultural produz as mensagens que alimentam o fetichismo das mercadorias.' }
    ],
    relatedQuestionIds: ['q-hum-12'],
    difficulty: 'dificil',
    tags: ['marx', 'consumismo', 'publicidade', 'status']
  },
  {
    id: 'ideologia',
    name: 'Ideologia',
    subject: 'humanas',
    discipline: 'Sociologia / Filosofia',
    category: 'Política e Cidadania',
    definition: 'Conjunto articulado de ideias e representações que naturaliza e legitima as relações de poder e desigualdade de uma classe dominante.',
    didacticExplanation: 'Em sentido crítico (como em Marx), a ideologia atua como uma "falsa consciência" ou uma lente distorcida: faz com que a ordem social injusta pareça natural, justa, universal e imutável ("sempre foi assim, uns nascem para mandar e outros para obedecer").',
    practicalExample: 'Afirmar que a pobreza decorre exclusivamente da "falta de força de vontade" individual, ignorando completamente as disparidades históricas de oportunidades e acesso à educação.',
    enemContext: 'Muito cobrada em análises de discursos políticos, peças publicitárias históricas, narrativas eugênicas e defesas de privilégios sociais.',
    similarConcepts: [
      { name: 'Visão de mundo', distinction: 'Visão de mundo é a cosmovisão pessoal ampla; ideologia é um sistema estruturado que sustenta ou disputa poder social.' },
      { name: 'Hegemonia', distinction: 'Hegemonia (Gramsci) é a liderança cultural e moral conquistada pela classe dominante através da ideologia.' }
    ],
    relatedQuestionIds: ['q-hum-13'],
    difficulty: 'medio',
    tags: ['marx', 'poder', 'política', 'discurso']
  },
  {
    id: 'contrato-social',
    name: 'Contrato Social',
    subject: 'humanas',
    discipline: 'Filosofia Política',
    category: 'Política e Cidadania',
    definition: 'Teoria política que explica a transição do estado de natureza para a sociedade civil organizada através de um pacto consentido entre os indivíduos.',
    didacticExplanation: 'Pensadores contratualistas (Hobbes, Locke e Rousseau) investigaram por que os humanos aceitam leis e um governo. Para Hobbes, o pacto evita a guerra de todos contra todos; para Locke, protege a propriedade e a liberdade; para Rousseau, deve exprimir a vontade geral.',
    practicalExample: 'Cidadãos aceitarem pagar impostos e cumprir leis de trânsito em troca de segurança pública, infraestrutura coletiva e proteção jurídica garantida pelo Estado.',
    enemContext: 'Clássico em questões de Filosofia sobre a origem do Estado Moderno, limites da autoridade estatal e direitos fundamentais.',
    similarConcepts: [
      { name: 'Estado de natureza', distinction: 'Estado de natureza é a condição hipotética anterior ao contrato social e às leis formais.' },
      { name: 'Cidadania', distinction: 'Cidadania são os direitos e deveres vigentes na sociedade civil fundada após o pacto político.' }
    ],
    relatedQuestionIds: ['q-hum-14'],
    difficulty: 'medio',
    tags: ['filosofia política', 'hobbes', 'locke', 'rousseau', 'estado']
  },
  {
    id: 'democracia',
    name: 'Democracia',
    subject: 'humanas',
    discipline: 'Filosofia / Sociologia',
    category: 'Política e Cidadania',
    definition: 'Regime político fundamentado na soberania popular, na garantia de direitos fundamentais, na separação de poderes e na tolerância à pluralidade.',
    didacticExplanation: 'Mais do que simplesmente votar periodicamente (democracia representativa), a verdadeira democracia exige igualdade perante a lei, liberdade de expressão, respeito às minorias e mecanismos de participação ativa da sociedade civil nas decisões.',
    practicalExample: 'Cidadãos participando de audiências públicas para decidir sobre o orçamento de seu município e fiscalizando abertamente os gastos dos parlamentares.',
    enemContext: 'Muito frequente comparando a democracia ateniense direta (restrita a homens livres) com as democracias liberais modernas universais.',
    similarConcepts: [
      { name: 'República', distinction: 'República diz respeito à coisa pública e alternância no poder; democracia diz respeito à soberania do povo no governo.' },
      { name: 'Oligarquia', distinction: 'Oligarquia é o governo de poucos ou de uma elite econômica, oposto à democracia.' }
    ],
    relatedQuestionIds: ['q-hum-15'],
    difficulty: 'facil',
    tags: ['política', 'grécia antiga', 'constituição', 'direitos']
  },
  {
    id: 'cidadania',
    name: 'Cidadania',
    subject: 'humanas',
    discipline: 'Sociologia / História',
    category: 'Política e Cidadania',
    definition: 'Condição jurídica e social do indivíduo que usufrui plenamente de direitos civis, políticos e sociais, e cumpre seus deveres na sociedade.',
    didacticExplanation: 'Conforme T. H. Marshall, a cidadania se constrói historicamente em três dimensões: direitos civis (liberdade, justiça), políticos (voto, candidatura) e sociais (saúde, educação, previdência). No Brasil, sua consolidação foi fruto de lutas constantes.',
    practicalExample: 'O direito de qualquer brasileiro a atendimento gratuito no SUS e à matrícula de seus filhos na escola pública de qualidade.',
    enemContext: 'Tema central de inúmeras provas do ENEM, discutindo a Constituição Cidadã de 1988, o Estatuto da Criança e do Adolescente e a luta contra a exclusão social.',
    similarConcepts: [
      { name: 'Nacionalidade', distinction: 'Nacionalidade é o vínculo jurídico com um país; cidadania é o exercício efetivo de direitos e deveres políticos e civis.' },
      { name: 'Cidadania formal vs real', distinction: 'Cidadania formal está escrita na lei; cidadania real é aquela efetivamente vivida no cotidiano.' }
    ],
    relatedQuestionIds: ['q-hum-16'],
    difficulty: 'facil',
    tags: ['constituição de 1988', 'direitos sociais', 'ética']
  },
  {
    id: 'patrimonialismo',
    name: 'Patrimonialismo',
    subject: 'humanas',
    discipline: 'Sociologia / História do Brasil',
    category: 'Política e Cidadania',
    definition: 'Prática de gestão política na qual os governantes não separam o patrimônio público do patrimônio privado, tratando a coisa pública como benefício pessoal.',
    didacticExplanation: 'Conceito clássico de Max Weber adaptado ao Brasil por Sérgio Buarque de Holanda ("O Homem Cordial") e Raymundo Faoro ("Os Donos do Poder"). Explica o fisiologismo, o nepotismo e a apropriação dos recursos públicos por elites oligárquicas.',
    practicalExample: 'Um prefeito empregar parentes em cargos comissionados estratégicos da prefeitura e usar veículos oficiais da saúde para viagens particulares da família.',
    enemContext: 'Cobrado em questões sobre as raízes históricas da corrupção, o coronelismo na Primeira República e as dificuldades da burocracia racional no Brasil.',
    similarConcepts: [
      { name: 'Clientelismo', distinction: 'Clientelismo é a troca de favores por votos; patrimonialismo é a apropriação direta da máquina pública como patrimônio pessoal.' },
      { name: 'Burocracia weberiana', distinction: 'Burocracia racional-legal é o modelo oposto, pautado na impessoalidade e na separação estrita do público e do privado.' }
    ],
    relatedQuestionIds: ['q-hum-17'],
    difficulty: 'dificil',
    tags: ['weber', 'sérgio buarque', 'história do brasil', 'coronelismo']
  },
  {
    id: 'segregacao-socioespacial',
    name: 'Segregação Socioespacial',
    subject: 'humanas',
    discipline: 'Geografia Urbana',
    category: 'Espaço Urbano e Geografia',
    definition: 'Processo de fragmentação e separação geográfica de grupos sociais no território da cidade conforme sua classe de renda e condição étnica.',
    didacticExplanation: 'As cidades reproduzem as desigualdades: classes de alta renda ocupam áreas centrais e nobres providas de saneamento, segurança e transporte veloz, enquanto as classes populares são empurradas para periferias desprovidas de serviços básicos.',
    practicalExample: 'A proliferação de condomínios fechados hipervigiados ao lado de favelas e periferias que sofrem com valas a céu aberto e falta de postos de saúde.',
    enemContext: 'Cobrado com frequência acompanhado de mapas urbanos, fotos aéreas de São Paulo ou Rio de Janeiro, ou trechos de Milton Santos.',
    similarConcepts: [
      { name: 'Gentrificação', distinction: 'Gentrificação é o processo de valorização de um bairro histórico que expulsa moradores antigos; a segregação é a divisão espacial mais ampla.' },
      { name: 'Conurbação', distinction: 'Conurbação é a união física entre cidades vizinhas; segregação é a disparidade socioeconômica no espaço.' }
    ],
    relatedQuestionIds: ['q-hum-18'],
    difficulty: 'medio',
    tags: ['geografia', 'milton santos', 'periferia', 'cidades']
  },
  {
    id: 'gentrificacao',
    name: 'Gentrificação',
    subject: 'humanas',
    discipline: 'Geografia Urbana / Sociologia',
    category: 'Espaço Urbano e Geografia',
    definition: 'Processo de revitalização e transformação de bairros populares ou degradados que eleva o custo de vida e expulsa os antigos moradores de menor renda.',
    didacticExplanation: 'Investimentos públicos e privados reformam fachadas, criam cafés gourmet e atraem novas empresas. Com isso, os aluguéis, o IPTU e o comércio encarecem drasticamente, forçando a população histórica e de baixa renda a se mudar para periferias distantes.',
    practicalExample: 'Um antigo bairro portuário ou operário que ganha museus modernos, bistrôs caros e prédios de luxo, fazendo com que o dono da pequena quitanda não consiga mais pagar o aluguel.',
    enemContext: 'Tema em alta no ENEM contemporâneo para avaliar especulação imobiliária, direito à cidade e impactos urbanísticos do turismo.',
    similarConcepts: [
      { name: 'Revitalização urbana', distinction: 'Revitalização é o termo institucional usado para a reforma; gentrificação é a análise crítica do impacto social excludente.' },
      { name: 'Segregação socioespacial', distinction: 'A gentrificação é um mecanismo dinâmico que aprofunda a segregação socioespacial existente.' }
    ],
    relatedQuestionIds: ['q-hum-19'],
    difficulty: 'medio',
    tags: ['cidades', 'especulação imobiliária', 'capitalismo urbano']
  },
  {
    id: 'exodo-rural',
    name: 'Êxodo Rural',
    subject: 'humanas',
    discipline: 'Geografia / História',
    category: 'Espaço Urbano e Geografia',
    definition: 'Migração em massa e contínua de populações do campo em direção às cidades, motivada por fatores de expulsão e atração.',
    didacticExplanation: 'No Brasil (especialmente entre 1950 e 1980), a mecanização da lavoura e a concentração fundiária no campo (fatores de expulsão) somaram-se à industrialização nas metrópoles (fatores de atração), gerando inchaço urbano e favelização.',
    practicalExample: 'Famílias de camponeses nordestinos ou mineiros que perderam o sustento com a chegada de grandes colheitadeiras mecanizadas e migraram para a Grande São Paulo em busca de empregos fabris.',
    enemContext: 'Cobrado em gráficos de transição demográfica do Brasil urbano versus rural e na análise dos problemas de macrocefalia urbana.',
    similarConcepts: [
      { name: 'Transumância', distinction: 'Transumância é uma migração sazonal temporária (ex: safra de cana); êxodo rural é uma mudança definitiva.' },
      { name: 'Migração pendular', distinction: 'Migração pendular é o deslocamento diário de casa para o trabalho entre cidades vizinhas.' }
    ],
    relatedQuestionIds: ['q-hum-20'],
    difficulty: 'facil',
    tags: ['demografia', 'migração', 'urbanização', 'campo']
  },
  {
    id: 'urbanizacao',
    name: 'Urbanização',
    subject: 'humanas',
    discipline: 'Geografia Urbana',
    category: 'Espaço Urbano e Geografia',
    definition: 'Processo no qual o crescimento da população que vive nas cidades é percentualmente superior ao crescimento da população rural.',
    didacticExplanation: 'A urbanização não significa apenas construir prédios; representa uma profunda mudança estrutural na economia, na cultura e no modo de vida, transferindo o eixo da sociedade do setor primário (agropecuária) para os setores secundário e terciário.',
    practicalExample: 'O Brasil passar de um país com 70% da população no campo na década de 1940 para mais de 85% vivendo em cidades no século XXI.',
    enemContext: 'Questões relacionando industrialização com planejamento urbano deficiente e formação de regiões metropolitanas.',
    similarConcepts: [
      { name: 'Crescimento urbano', distinction: 'Crescimento urbano é a expansão física da cidade; urbanização é a mudança demográfica percentual campo-cidade.' },
      { name: 'Metropolização', distinction: 'Metropolização é a concentração da população e do poder econômico em grandes metrópoles.' }
    ],
    relatedQuestionIds: ['q-hum-21'],
    difficulty: 'facil',
    tags: ['geografia', 'população', 'cidades', 'indústria']
  },
  {
    id: 'globalizacao',
    name: 'Globalização',
    subject: 'humanas',
    discipline: 'Geografia / Sociologia',
    category: 'Mundo Contemporâneo',
    definition: 'Processo de intensificação das relações socioeconômicas, culturais e políticas em escala mundial, impulsionado pelo avanço das tecnologias de transporte e comunicação.',
    didacticExplanation: 'Para Milton Santos, a globalização opera como "fábula" (o mundo sem fronteiras propagandeado), como "perversidade" (aumento dos abismos sociais e desemprego estrutural) e como "possibilidade" (uma outra globalização solidária).',
    practicalExample: 'Um investidor em Nova York aplicar dinheiro na bolsa de Tóquio em segundos enquanto consome café produzido na Etiópia e assiste a uma série sul-coreana.',
    enemContext: 'Abordada em questões sobre a divisão internacional do trabalho (DIT), fluxos de capitais, uniformização cultural e crises financeiras mundiais.',
    similarConcepts: [
      { name: 'Imperialismo', distinction: 'Imperialismo é o domínio militar e político de potências sobre colônias; globalização é a interdependência em redes transnacionais.' },
      { name: 'Aldeia global', distinction: 'Aldeia global é o termo otimista de McLuhan para a proximidade comunicacional instantânea.' }
    ],
    relatedQuestionIds: ['q-hum-22'],
    difficulty: 'medio',
    tags: ['milton santos', 'redes', 'economia mundial', 'tecnologia']
  },
  {
    id: 'imperialismo',
    name: 'Imperialismo',
    subject: 'humanas',
    discipline: 'História Geral',
    category: 'História e Relações de Poder',
    definition: 'Fase de expansão geopolítica e econômica de potências industriais no século XIX/XX (Neocolonialismo) sobre a África e a Ásia em busca de matérias-primas e mercados consumidores.',
    didacticExplanation: 'Diferente do colonialismo mercantilista do século XVI, o imperialismo do século XIX foi movido pela Segunda Revolução Industrial, fusão do capital bancário e industrial (monopólios) e justificado por teses racistas como o Darwinismo Social e o "fardo do homem branco".',
    practicalExample: 'A Conferência de Berlim (1884-1885), na qual potências europeias retalharam o mapa do continente africano com réguas, desrespeitando fronteiras étnicas ancestrais.',
    enemContext: 'Tema frequente na análise das causas da Primeira Guerra Mundial, exploração de minérios na África e desdobramentos de conflitos civis contemporâneos.',
    similarConcepts: [
      { name: 'Colonialismo mercantilista', distinction: 'O colonialismo clássico (sécs. XVI-XVIII) focou na América e no comércio de especiarias; o imperialismo focou na África/Ásia com base industrial.' },
      { name: 'Eurocentrismo', distinction: 'O eurocentrismo forneceu a ideologia civilizatória pseudocientífica que legitimou as invasões imperialistas.' }
    ],
    relatedQuestionIds: ['q-hum-23'],
    difficulty: 'medio',
    tags: ['neocolonialismo', 'século xix', 'áfrica', 'ásia', 'segunda revolução industrial']
  },
  {
    id: 'colonialismo',
    name: 'Colonialismo',
    subject: 'humanas',
    discipline: 'História do Brasil / Geral',
    category: 'História e Relações de Poder',
    definition: 'Sistema de dominação política, territorial e econômica imposto por uma metrópole sobre uma colônia, centrado no Pacto Colonial e no exclusivo comercial.',
    didacticExplanation: 'Vigente nos séculos XVI a XVIII na América, estruturou-se na exploração de gêneros tropicais e metais preciosos, no trabalho escravizado indígena e africano e na proibição do desenvolvimento de manufaturas locais nas colônias.',
    practicalExample: 'O Brasil Colonial ser impedido de comerciar diretamente com a Inglaterra ou França, sendo obrigado a vender todo o açúcar exclusivamente para a Coroa Portuguesa a preços fixados pela metrópole.',
    enemContext: 'Questões sobre a economia açucareira, o ciclo do ouro, a violência contra os povos originários e o tráfico transatlântico de escravizados.',
    similarConcepts: [
      { name: 'Neocolonialismo', distinction: 'Neocolonialismo (século XIX) visava fontes de petróleo, borracha e carvão para indústrias; o colonialismo visava ouro e monopólio mercantil.' },
      { name: 'Colonialidade', distinction: 'Colonialidade é a persistência dos padrões coloniais de poder, raça e gênero mesmo após a independência política formal.' }
    ],
    relatedQuestionIds: ['q-hum-24'],
    difficulty: 'facil',
    tags: ['brasil colônia', 'pacto colonial', 'escravidão', 'mercantilismo']
  },
  {
    id: 'eurocentrismo',
    name: 'Eurocentrismo',
    subject: 'humanas',
    discipline: 'História / Sociologia',
    category: 'História e Relações de Poder',
    definition: 'Postura ideológica e epistemológica que coloca a trajetória histórica, científica e cultural da Europa como ápice e modelo universal para toda a humanidade.',
    didacticExplanation: 'O eurocentrismo faz com que a história mundial seja contada como se o progresso só existisse a partir dos acontecimentos europeus (Antiguidade Clássica, Idade Média, Renascimento, Iluminismo), desconsiderando a rica filosofia e ciência milenares asiáticas, africanas e pré-colombianas.',
    practicalExample: 'Livros didáticos que chamam a chegada de Cabral em 1500 de "Descobrimento do Brasil", como se o território estivesse vazio antes da chegada do navio europeu.',
    enemContext: 'Muito cobrado na prova de Humanas para desconstruir narrativas hegemônicas e valorizar a historiografia de matriz africana e indígena.',
    similarConcepts: [
      { name: 'Etnocentrismo', distinction: 'O eurocentrismo é o etnocentrismo praticado e institucionalizado globalmente pela civilização ocidental europeia.' },
      { name: 'Imperialismo', distinction: 'O imperialismo é a ação militar/econômica concreta; o eurocentrismo é a sustentação discursiva e cultural dessa dominação.' }
    ],
    relatedQuestionIds: ['q-hum-25'],
    difficulty: 'facil',
    tags: ['decolonialidade', 'historiografia', 'crítica histórica']
  },
  {
    id: 'sustentabilidade',
    name: 'Sustentabilidade',
    subject: 'humanas',
    discipline: 'Geografia / Filosofia',
    category: 'Meio Ambiente e Sociedade',
    definition: 'Capacidade de suprir as necessidades da geração presente sem comprometer a capacidade das gerações futuras de suprirem suas próprias necessidades.',
    didacticExplanation: 'Firmada no Relatório Brundtland (1987), a sustentabilidade engloba três pilares inseparáveis (o tripé da sustentabilidade): viabilidade econômica, justiça social e preservação ecológica. Não existe sustentabilidade que gere lucro destruindo comunidades tradicionais.',
    practicalExample: 'Comunidades ribeirinhas que praticam o manejo comunitário do açaí e da castanha na Amazônia, garantindo renda sem derrubar a floresta nativa.',
    enemContext: 'Onipresente no ENEM em questões sobre transição energética, crise hídrica, pegada ecológica, agroecologia e descarte de resíduos.',
    similarConcepts: [
      { name: 'Preservacionismo', distinction: 'Preservacionismo prega a intocabilidade total da natureza; sustentabilidade concilia o uso humano responsável com a conservação.' },
      { name: 'Desenvolvimentismo predatório', distinction: 'O desenvolvimentismo predatório prioriza o PIB imediato a qualquer custo ecológico; a sustentabilidade planeja a longo prazo.' }
    ],
    relatedQuestionIds: ['q-hum-26'],
    difficulty: 'facil',
    tags: ['meio ambiente', 'energia', 'ecologia', 'agenda 2030']
  },
  {
    id: 'antropocentrismo',
    name: 'Antropocentrismo',
    subject: 'humanas',
    discipline: 'Filosofia / História',
    category: 'Filosofia e Ética',
    definition: 'Doutrina que concebe o ser humano como o centro do universo, medida de todas as coisas e detentor do direito irrestrito de dominar a natureza.',
    didacticExplanation: 'Ganha força no Renascimento e na Revolução Científica, substituindo o teocentrismo medieval. Embora tenha impulsionado as ciências naturais, o antropocentrismo radical gerou uma visão utilitarista em que os demais seres vivos são tratados como meros recursos descartáveis.',
    practicalExample: 'Derrubar uma floresta secular com milhares de espécies raras apenas para instalar um estacionamento comercial para conveniência humana.',
    enemContext: 'Cobrado tanto em questões sobre o Humanismo renascentista quanto em debates ecológicos contemporâneos sobre a crise climática do Antropoceno.',
    similarConcepts: [
      { name: 'Teocentrismo', distinction: 'Teocentrismo coloca Deus no centro das explicações; antropocentrismo coloca a razão humana.' },
      { name: 'Biocentrismo', distinction: 'Biocentrismo é a visão ética contemporânea que atribui valor moral intrínseco a todas as formas de vida na Terra.' }
    ],
    relatedQuestionIds: ['q-hum-27'],
    difficulty: 'medio',
    tags: ['filosofia', 'renascimento', 'ética ambiental']
  },

  // ==========================================
  // LINGUAGENS E SUAS TECNOLOGIAS
  // ==========================================
  {
    id: 'intertextualidade',
    name: 'Intertextualidade',
    subject: 'linguagens',
    discipline: 'Língua Portuguesa / Literatura',
    category: 'Interpretação e Teoria do Texto',
    definition: 'Diálogo explícito ou implícito que um texto estabelece com outro texto preexistente pertencente ao repertório cultural.',
    didacticExplanation: 'Nenhum texto nasce do nada. A intertextualidade acontece quando um autor faz alusão, cita, parodia ou pasticha uma obra anterior para enriquecer o sentido de sua mensagem. O leitor precisa reconhecer a obra de referência para captar a mensagem completa.',
    practicalExample: 'Um anúncio publicitário de sabão em pó que reproduz a pose e o quadro clássico da Mona Lisa segurando a caixa do produto.',
    enemContext: 'Um dos conceitos mais frequentes no ENEM: paródias da "Canção do Exílio" de Gonçalves Dias por Carlos Drummond de Andrade ou Oswald de Andrade.',
    similarConcepts: [
      { name: 'Interdiscursividade', distinction: 'Intertextualidade é o diálogo com um texto específico; interdiscursividade é a incorporação de discursos e ideologias de outras esferas sociais.' },
      { name: 'Plágio', distinction: 'Plágio é copiar disfarçadamente para enganar; intertextualidade é um diálogo artístico e legítimo com a tradição.' }
    ],
    relatedQuestionIds: ['q-ling-01', 'q-ling-02'],
    difficulty: 'facil',
    tags: ['literatura', 'paródia', 'poesia', 'propaganda']
  },
  {
    id: 'interdiscursividade',
    name: 'Interdiscursividade',
    subject: 'linguagens',
    discipline: 'Língua Portuguesa / Análise do Discurso',
    category: 'Interpretação e Teoria do Texto',
    definition: 'Cruzamento ou presença de formações discursivas distintas dentro de um mesmo texto (ex: discurso religioso e publicitário).',
    didacticExplanation: 'Diferente da intertextualidade (que cita uma obra concreta), a interdiscursividade mobiliza modos de falar, jargões ou autoridades de outras áreas (ciência, religião, direito, marketing) para conferir persuasão ou produzir efeito de ironia.',
    practicalExample: 'Um comercial de produto de limpeza que utiliza a linguagem de um laudo laboratorial ou julgamento jurídico ("condenado por eliminar 99% das bactérias").',
    enemContext: 'Questões do ENEM que analisam discursos políticos, peças de conscientização pública ou tirinhas críticas.',
    similarConcepts: [
      { name: 'Intertextualidade', distinction: 'Intertextualidade referencia um texto/obra específico; interdiscursividade referencia a matriz discursiva de uma área social.' },
      { name: 'Polifonia', distinction: 'Polifonia é a multiplicidade de vozes que se manifestam simultaneamente no texto literário ou argumentativo.' }
    ],
    relatedQuestionIds: ['q-ling-03'],
    difficulty: 'dificil',
    tags: ['análise do discurso', 'persuasão', 'gêneros textuais']
  },
  {
    id: 'denotacao',
    name: 'Denotação',
    subject: 'linguagens',
    discipline: 'Língua Portuguesa',
    category: 'Semântica e Significado',
    definition: 'Uso da palavra em seu sentido literal, objetivo, exato e dicionarizado, sem margem para interpretações figuradas.',
    didacticExplanation: 'Na denotação, o signo linguístico aponta diretamente para o seu referente no mundo real. É a linguagem padrão de notícias jornalísticas factuais, bulas de remédio, manuais técnicos e artigos científicos.',
    practicalExample: '"O coração humano é um órgão muscular responsável por bombear o sangue por meio dos vasos sanguíneos."',
    enemContext: 'Cobrado em contraposição à linguagem poética ou na identificação da intenção comunicativa de textos informativos.',
    similarConcepts: [
      { name: 'Conotação', distinction: 'Denotação é o sentido próprio e literal; conotação é o sentido figurado e subjetivo.' },
      { name: 'Função referencial', distinction: 'A função referencial da linguagem baseia-se prioritariamente na denotação para transmitir dados com clareza.' }
    ],
    relatedQuestionIds: ['q-ling-04'],
    difficulty: 'facil',
    tags: ['semântica', 'jornalismo', 'ciência', 'literal']
  },
  {
    id: 'conotacao',
    name: 'Conotação',
    subject: 'linguagens',
    discipline: 'Língua Portuguesa / Literatura',
    category: 'Semântica e Significado',
    definition: 'Uso da palavra em seu sentido figurado, metafórico, subjetivo ou emotivo, extrapolando o sentido estrito do dicionário.',
    didacticExplanation: 'As palavras ganham novos matizes e significados expressivos que dependem do contexto de enunciação e da sensibilidade de quem lê. É o recurso fundamental da poesia, das letras de música e da publicidade criativa.',
    practicalExample: '"Aquele homem tem um coração de pedra, incapaz de perdoar os erros do passado."',
    enemContext: 'Questões que exploram recursos expressivos em crônicas, poemas modernistas e campanhas de conscientização social.',
    similarConcepts: [
      { name: 'Denotação', distinction: 'Conotação é o sentido figurado; denotação é o sentido objetivo e dicionarizado.' },
      { name: 'Metáfora', distinction: 'A metáfora é uma das figuras de linguagem mais poderosas geradas pela conotação.' }
    ],
    relatedQuestionIds: ['q-ling-05'],
    difficulty: 'facil',
    tags: ['poesia', 'subjetividade', 'figuras de linguagem']
  },
  {
    id: 'metafora',
    name: 'Metáfora',
    subject: 'linguagens',
    discipline: 'Língua Portuguesa / Literatura',
    category: 'Figuras de Linguagem',
    definition: 'Figura de linguagem baseada em uma comparação implícita entre dois elementos distintos a partir de uma semelhança subjetiva, sem conectivo comparativo.',
    didacticExplanation: 'Transfere os atributos de um objeto para outro sem usar termos como "tal qual" ou "como". Uma realidade é afirmada como sendo a outra para produzir forte impacto poético ou argumentativo.',
    practicalExample: '"O tempo é um rio veloz que nunca corre para trás."',
    enemContext: 'Muito frequente em letras de MPB (Chico Buarque, Caetano Veloso), poemas de Cecília Meireles e charges de jornais.',
    similarConcepts: [
      { name: 'Comparação', distinction: 'A comparação usa conectivo explícito ("O tempo é como um rio"); a metáfora faz a fusão direta ("O tempo é um rio").' },
      { name: 'Metonímia', distinction: 'Metáfora baseia-se em semelhança figurada; metonímia baseia-se em contiguidade real (a parte pelo todo, o autor pela obra).' }
    ],
    relatedQuestionIds: ['q-ling-06'],
    difficulty: 'facil',
    tags: ['figuras de linguagem', 'poesia', 'retórica']
  },
  {
    id: 'metonimia',
    name: 'Metonímia',
    subject: 'linguagens',
    discipline: 'Língua Portuguesa / Literatura',
    category: 'Figuras de Linguagem',
    definition: 'Figura de linguagem em que se substitui um termo por outro com base em uma relação real de proximidade, interdependência ou contiguidade.',
    didacticExplanation: 'Ocorre na substituição do autor pela obra ("ler Machado de Assis"), do continente pelo conteúdo ("tomou três copos"), da parte pelo todo ("muitos braços para a colheita") ou do instrumento pelo agente ("ele é um bom bisturi").',
    practicalExample: '"A cidade maravilhosa recebeu os turistas de braços abertos" (substituindo a população do Rio de Janeiro pelo epíteto da cidade).',
    enemContext: 'Cobrado em letras de canções populares, crônicas urbanas e no reconhecimento de recursos de concisão na linguagem jornalística.',
    similarConcepts: [
      { name: 'Metáfora', distinction: 'A metáfora opera por analogia imaginária; a metonímia opera por relação de contiguidade concreta e real entre as coisas.' },
      { name: 'Sinédoque', distinction: 'A sinédoque é a forma específica de metonímia que troca o todo pela parte ou a matéria pelo objeto.' }
    ],
    relatedQuestionIds: ['q-ling-07'],
    difficulty: 'medio',
    tags: ['figuras de linguagem', 'semântica', 'literatura']
  },
  {
    id: 'ironia',
    name: 'Ironia',
    subject: 'linguagens',
    discipline: 'Língua Portuguesa / Literatura',
    category: 'Figuras de Linguagem',
    definition: 'Recurso expressivo no qual se diz o oposto do que se quer dar a entender, geralmente com tom crítico, humorístico ou sarcástico.',
    didacticExplanation: 'A ironia exige cumplicidade do leitor: ela estabelece um descompasso intencional entre o que está enunciado literalmente e o significado real pretendido. Machado de Assis é o mestre supremo da ironia na literatura brasileira.',
    practicalExample: 'Dizer: "Que beleza de organização!" ao entrar em um quarto com roupas jogadas por todo o chão.',
    enemContext: 'Muito frequente em tirinhas (Mafalda, Armandinho, Hagar), charges políticas do dia a dia e romances realistas machadianos.',
    similarConcepts: [
      { name: 'Sarcasmo', distinction: 'O sarcasmo é uma ironia mordaz, agressiva e com intenção explícita de ferir ou ridicularizar.' },
      { name: 'Ambiguidade', distinction: 'A ambiguidade produz dúvida ou duplo sentido; a ironia quer que o interlocutor perceba claramente o sentido inverso.' }
    ],
    relatedQuestionIds: ['q-ling-08'],
    difficulty: 'facil',
    tags: ['machado de assis', 'humor', 'charges', 'tirinhas']
  },
  {
    id: 'ambiguidade',
    name: 'Ambiguidade',
    subject: 'linguagens',
    discipline: 'Língua Portuguesa / Gramática',
    category: 'Interpretação e Teoria do Texto',
    definition: 'Construção frasal que permite mais de uma interpretação para a mesma frase, podendo ser um vício de linguagem involuntário ou um recurso poético intencional.',
    didacticExplanation: 'Quando acidental, a ambiguidade prejudica a clareza da comunicação (frequentemente causada pela má colocação de pronomes possessivos como "seu/sua" ou orações adjetivas). Quando intencional (em poemas e anúncios), multiplica os sentidos da mensagem.',
    practicalExample: '"O juiz encontrou o réu em sua casa" (na casa do juiz ou na casa do réu?).',
    enemContext: 'Cobrado em questões sobre revisão de textos formais, normas de clareza textual e na análise de trocadilhos publicitários.',
    similarConcepts: [
      { name: 'Polissemia', distinction: 'Polissemia é a propriedade de uma única palavra ter vários significados; ambiguidade é a duplicidade estrutural de sentido em uma sentença inteira.' },
      { name: 'Ironia', distinction: 'Na ambiguidade, ambos os sentidos concorrem; na ironia, o leitor deve descartar o literal e abraçar o inverso.' }
    ],
    relatedQuestionIds: ['q-ling-09'],
    difficulty: 'medio',
    tags: ['sintaxe', 'duplo sentido', 'clareza textual']
  },
  {
    id: 'polissemia',
    name: 'Polissemia',
    subject: 'linguagens',
    discipline: 'Língua Portuguesa / Semântica',
    category: 'Semântica e Significado',
    definition: 'Capacidade que uma mesma palavra possui de assumir diferentes significados dependendo do contexto linguístico em que é empregada.',
    didacticExplanation: 'Uma única palavra (como "linha", "banco", "letra", "vela") guarda múltiplas acepções no léxico. É o contexto que atualiza o sentido exato: "linha de costura", "linha de ônibus", "linha de raciocínio".',
    practicalExample: '"O rapaz quebrou o braço na queda" / "O braço do violão está empenado" / "O mar adentrou pelo braço do rio".',
    enemContext: 'Muito explorada em piadas, trocadilhos de tirinhas, poemas concretos e campanhas publicitárias que brincam com múltiplos sentidos.',
    similarConcepts: [
      { name: 'Homonímia', distinction: 'Homonímia envolve palavras distintas que coincidem na grafia ou som (manga fruta x manga de camisa); polissemia é a mesma palavra com sentidos ramificados por metáfora histórica.' },
      { name: 'Ambiguidade', distinction: 'Ambiguidade é um problema ou efeito de frase inteira; polissemia é uma propriedade do vocábulo.' }
    ],
    relatedQuestionIds: ['q-ling-10'],
    difficulty: 'medio',
    tags: ['léxico', 'semântica', 'contexto']
  },
  {
    id: 'variacao-linguistica',
    name: 'Variação Linguística',
    subject: 'linguagens',
    discipline: 'Língua Portuguesa / Sociolinguística',
    category: 'Linguagem e Sociedade',
    definition: 'Fenômeno natural pelo qual uma língua varia conforme fatores regionais (diatópica), sociais (diastrática), históricos (diacrônica) e de situação de uso (diafásica).',
    didacticExplanation: 'A sociolinguística comprova que não existe "falar errado": todas as variedades linguísticas possuem regras gramaticais internas lógicas e cumprem a função comunicativa. Julgar variedades populares como inferiores é preconceito linguístico.',
    practicalExample: 'Dizer "mandioca" em São Paulo, "aipim" no Rio de Janeiro e "macaxeira" em Pernambuco (variação regional/diatópica).',
    enemContext: 'Tema obrigatório em todos os anos do ENEM: análise de falares regionais, gírias da juventude, literatura de cordel e combate ao preconceito linguístico.',
    similarConcepts: [
      { name: 'Norma-padrão', distinction: 'Norma-padrão é o modelo idealizado fixado na gramática normativa para documentos oficiais; a variação é a realidade viva da língua em uso.' },
      { name: 'Adequação linguística', distinction: 'Adequação linguística é o princípio de usar o registro apropriado para cada situação comunicativa.' }
    ],
    relatedQuestionIds: ['q-ling-11', 'q-ling-12'],
    difficulty: 'facil',
    tags: ['sociolinguística', 'preconceito linguístico', 'cultura popular']
  },
  {
    id: 'funcao-referencial',
    name: 'Função Referencial',
    subject: 'linguagens',
    discipline: 'Língua Portuguesa',
    category: 'Funções da Linguagem',
    definition: 'Função da linguagem centrada no contexto ou referente, com o objetivo principal de informar com clareza, objetividade e impessoalidade.',
    didacticExplanation: 'Baseada na teoria de Roman Jakobson. Predominam verbos na terceira pessoa, vocabulário denotativo, dados quantitativos e ausência de opiniões emotivas do autor. É a função típica de jornais de notícias, relatórios e textos didáticos.',
    practicalExample: '"O índice de desemprego caiu 0,4 ponto percentual no último trimestre, segundo dados divulgados hoje pelo IBGE."',
    enemContext: 'Cobrado na identificação de gêneros informativos, reportagens, artigos científicos e comunicados do governo.',
    similarConcepts: [
      { name: 'Função emotiva', distinction: 'A emotiva foca no emissor e em seus sentimentos; a referencial foca nos fatos e na realidade externa.' },
      { name: 'Função metalinguística', distinction: 'A metalinguística foca no próprio código da língua, explicando palavras ou a escrita.' }
    ],
    relatedQuestionIds: ['q-ling-13'],
    difficulty: 'facil',
    tags: ['jakobson', 'jornalismo', 'ciência', 'objetividade']
  },
  {
    id: 'funcao-emotiva',
    name: 'Função Emotiva',
    subject: 'linguagens',
    discipline: 'Língua Portuguesa / Literatura',
    category: 'Funções da Linguagem',
    definition: 'Função da linguagem centrada no emissor, caracterizada pela expressão direta de seus sentimentos, opiniões, emoções e impressões subjetivas.',
    didacticExplanation: 'Marcada pelo uso da primeira pessoa ("eu", "nós"), pontos de exclamação, interjeições e adjetivação valorativa. Encontrada em diários pessoais, cartas de amor, poesias líricas e crônicas confessionais.',
    practicalExample: '"Ah, como me doeu partir daquela terra onde vivi os anos mais doces e luminosos da minha juventude!"',
    enemContext: 'Questões que analisam poemas do Romantismo, crônicas intimistas de Rubem Braga ou desabafos em postagens autobiográficas.',
    similarConcepts: [
      { name: 'Função conativa', distinction: 'A emotiva expressa o "eu" do emissor; a conativa quer influenciar o comportamento do "tu" (receptor).' },
      { name: 'Função poética', distinction: 'A emotiva foca no sentimento do emissor; a poética foca no trabalho estético e sonoro da mensagem em si.' }
    ],
    relatedQuestionIds: ['q-ling-14'],
    difficulty: 'facil',
    tags: ['jakobson', 'subjetividade', 'lírica', 'diário']
  },
  {
    id: 'funcao-conativa',
    name: 'Função Conativa (ou Apelativa)',
    subject: 'linguagens',
    discipline: 'Língua Portuguesa',
    category: 'Funções da Linguagem',
    definition: 'Função da linguagem centrada no receptor, com o propósito explícito de persuadi-lo, convence-lo ou direcionar suas ações e comportamentos.',
    didacticExplanation: 'Utiliza verbos no imperativo ("compre", "faça", "vacine-se"), pronomes de tratamento de segunda pessoa ("você", "tu") e apelos diretos. É a essência dos discursos publicitários, sermões religiosos, campanhas públicas e propagandas eleitorais.',
    practicalExample: '"Doe sangue neste sábado e ajude a salvar até quatro vidas. Compareça ao hemocentro mais próximo!"',
    enemContext: 'Muito frequente na interpretação de cartazes de campanhas de saúde pública do Ministério da Saúde e anúncios comerciais.',
    similarConcepts: [
      { name: 'Função referencial', distinction: 'A referencial informa um fato neutro; a conativa conclama o leitor a tomar uma atitude concreta.' },
      { name: 'Função fática', distinction: 'A fática apenas testa o canal de comunicação ("Alô? Tá me ouvindo?"); a conativa comanda o receptor.' }
    ],
    relatedQuestionIds: ['q-ling-15'],
    difficulty: 'facil',
    tags: ['publicidade', 'imperativo', 'persuasão', 'campanhas']
  },
  {
    id: 'funcao-poetica',
    name: 'Função Poética',
    subject: 'linguagens',
    discipline: 'Língua Portuguesa / Literatura',
    category: 'Funções da Linguagem',
    definition: 'Função da linguagem centrada na própria mensagem, privilegiando sua elaboração estética, ritmo, sonoridade e arranjo criativo das palavras.',
    didacticExplanation: 'O foco não é apenas o que se diz, mas como se diz. Caracteriza-se pelo uso de rimas, aliterações, métrica, metáforas inovadoras e disposição visual dos versos. Não se restringe à poesia: slogans publicitários memoráveis também a utilizam.',
    practicalExample: '"O vento varria as folhas, o vento varria os frutos, o vento varria as flores... E a minha vida ficava cada vez mais cheia de frutos, de flores, de folhas."',
    enemContext: 'Questões de poesia concreta (Augusto de Campos, Décio Pignatari), literatura modernista e letras poéticas do cancioneiro nacional.',
    similarConcepts: [
      { name: 'Função metalinguística', distinction: 'A metalinguística usa o código para explicar o código; a poética trabalha a forma estética e o ritmo da mensagem.' },
      { name: 'Função emotiva', distinction: 'A emotiva privilegia o sentimento do emissor; a poética privilegia o artefato formal e a beleza expressiva do texto.' }
    ],
    relatedQuestionIds: ['q-ling-16'],
    difficulty: 'medio',
    tags: ['estética', 'poesia', 'ritmo', 'jakobson']
  },
  {
    id: 'genero-textual',
    name: 'Gênero Textual',
    subject: 'linguagens',
    discipline: 'Língua Portuguesa / Teoria do Texto',
    category: 'Gêneros e Tipologias',
    definition: 'Padrão sociocomunicativo relativamente estável que os textos assumem para atender a propósitos específicos em situações cotidianas da vida social.',
    didacticExplanation: 'Diferente dos tipos textuais (narração, dissertação, descrição, injunção, que são finitos), os gêneros são incontáveis e mutáveis: receita de bolo, e-mail, meme, editorial de jornal, tweet, crônica, ata de reunião e bula de remédio.',
    practicalExample: 'Um meme na internet que combina imagem estática e texto curto em caixa alta para provocar humor rápido e reflexão social.',
    enemContext: 'O ENEM avalia se o aluno identifica a função social de um gênero e reconhece sua estrutura típica e suporte de circulação.',
    similarConcepts: [
      { name: 'Tipo textual', distinction: 'Tipo textual é a sequência estrutural linguística (narrativa, descritiva, argumentativa); gênero textual é a realização social concreta do texto.' },
      { name: 'Suporte textual', distinction: 'Suporte é o veículo físico ou digital onde o gênero circula (jornal impresso, tela do celular, cartaz).' }
    ],
    relatedQuestionIds: ['q-ling-17'],
    difficulty: 'facil',
    tags: ['comunicação', 'sociedade', 'gêneros digitais', 'circulação']
  },

  // ==========================================
  // LÍNGUA INGLESA
  // ==========================================
  {
    id: 'false-cognates',
    name: 'False Cognates (Falsos Amigos)',
    subject: 'ingles',
    discipline: 'Língua Inglesa',
    category: 'Vocabulário e Semântica',
    definition: 'Palavras que possuem grafia ou pronúncia muito semelhante a palavras do português, mas que possuem significados completamente diferentes.',
    didacticExplanation: 'São armadilhas clássicas em testes de leitura. Exigem atenção redobrada ao contexto da frase para não presumir o significado imediato em português.',
    practicalExample: '"Actually" significa "na verdade / realmente" (e não "atualmente"); "Parents" significa "pais" (e não "parentes"); "Pretend" significa "fingir" (e não "pretender").',
    enemContext: 'Questões do ENEM frequentemente inserem textos com "actually", "eventually", "intend" ou "prejudice" para testar se o estudante decodifica pelo contexto ou cai na pegadinha da semelhança gráfica.',
    similarConcepts: [
      { name: 'True Cognates', distinction: 'Cognatos verdadeiros têm mesma raiz etimológica e significado idêntico ("family" = família, "future" = futuro).' },
      { name: 'Homophones', distinction: 'Homófonos são palavras com mesmo som em inglês, mas grafias diferentes ("sea" e "see").' }
    ],
    relatedQuestionIds: ['q-ing-01'],
    difficulty: 'facil',
    tags: ['vocabulário', 'falsos cognatos', 'tradução', 'semântica']
  },
  {
    id: 'cognates',
    name: 'True Cognates (Cognatos Verdadeiros)',
    subject: 'ingles',
    discipline: 'Língua Inglesa',
    category: 'Vocabulário e Semântica',
    definition: 'Palavras em inglês e português que compartilham uma origem etimológica comum e possuem forma gráfica e significado muito próximos.',
    didacticExplanation: 'Representam uma ferramenta valiosa de leitura rápida e compreensão textual. Identificar cognatos verdadeiros permite ao leitor construir o sentido global de textos técnicos, acadêmicos ou jornalísticos mesmo sem conhecer todas as palavras.',
    practicalExample: '"Problem", "society", "education", "cultural", "planet", "democracy" e "economy".',
    enemContext: 'Muito úteis para acelerar a leitura e confirmar a área temática da questão do ENEM.',
    similarConcepts: [
      { name: 'False Cognates', distinction: 'Falsos cognatos parecem na escrita, mas divergem radicalmente no sentido.' },
      { name: 'Loanwords', distinction: 'Estrangeirismos (loanwords) são palavras importadas sem alteração ("download", "show").' }
    ],
    relatedQuestionIds: ['q-ing-02'],
    difficulty: 'facil',
    tags: ['leitura rápida', 'etimologia', 'estratégia']
  },
  {
    id: 'skimming',
    name: 'Skimming',
    subject: 'ingles',
    discipline: 'Língua Inglesa',
    category: 'Estratégias de Leitura',
    definition: 'Técnica de leitura rápida e superficial voltada para identificar a ideia geral (gist) e a temática central do texto, sem se ater aos detalhes.',
    didacticExplanation: 'O leitor passa os olhos rapidamente pelos títulos, subtítulos, primeira e última frase de cada parágrafo, imagens e palavras em destaque. O objetivo é responder: "Do que trata este texto no geral?".',
    practicalExample: 'Olhar rapidamente a capa e as manchetes de um jornal em inglês durante 20 segundos para saber se a edição foca em economia, política ou esportes.',
    enemContext: 'Estratégia indispensável para o início da resolução da prova de inglês do ENEM, economizando tempo precioso.',
    similarConcepts: [
      { name: 'Scanning', distinction: 'Scanning busca uma informação pontual e específica (ex: uma data, um número); skimming capta a ideia geral do todo.' },
      { name: 'Close reading', distinction: 'Close reading é a leitura atenta e minuciosa, necessária apenas em trechos cruciais da pergunta.' }
    ],
    relatedQuestionIds: ['q-ing-03'],
    difficulty: 'facil',
    tags: ['leitura dinâmica', 'estratégia', 'tempo de prova']
  },
  {
    id: 'scanning',
    name: 'Scanning',
    subject: 'ingles',
    discipline: 'Língua Inglesa',
    category: 'Estratégias de Leitura',
    definition: 'Técnica de varredura visual rápida do texto com o propósito de localizar uma informação pontual, como um nome próprio, uma data, um número ou uma palavra-chave.',
    didacticExplanation: 'O leitor não lê o texto linearmente; ele corre os olhos como um scanner à procura de uma pista pré-determinada pela pergunta do enunciado. Uma vez localizada a pista, faz-se a leitura atenta daquela frase específica.',
    practicalExample: 'Procurar em um folheto turístico em inglês o horário de funcionamento do museu aos domingos ("9:00 AM - 6:00 PM").',
    enemContext: 'Muito usado quando o comando da questão pergunta: "De acordo com o texto, no ano de 2021 ocorreu..." ou "Qual foi a porcentagem citada na pesquisa?".',
    similarConcepts: [
      { name: 'Skimming', distinction: 'Skimming busca o sentido amplo e o assunto; scanning busca uma informação exata e localizada.' },
      { name: 'Deep reading', distinction: 'Deep reading analisa nuances estilísticas; scanning apenas localiza dados objetivos.' }
    ],
    relatedQuestionIds: ['q-ing-04'],
    difficulty: 'facil',
    tags: ['busca de dados', 'eficiência', 'estratégia']
  },
  {
    id: 'main-idea',
    name: 'Main Idea (Ideia Principal)',
    subject: 'ingles',
    discipline: 'Língua Inglesa',
    category: 'Compreensão Textual',
    definition: 'O ponto central, argumento nuclear ou mensagem primária que o autor deseja transmitir ao leitor ao longo de todo o texto.',
    didacticExplanation: 'Diferencia-se do simples tema (tópico amplo). A ideia principal resume o que o autor defende sobre aquele tema. Frequentemente aparece na tese do parágrafo introdutório e é reafirmada na conclusão.',
    practicalExample: 'Tema: Aquecimento global. Ideia principal: "A adoção urgente de energias limpas por nações em desenvolvimento é o fator decisivo para deter o colapso climático antes de 2050."',
    enemContext: 'A imensa maioria das questões de inglês do ENEM pergunta qual é o objetivo geral ou a conclusão fundamental do texto apresentado.',
    similarConcepts: [
      { name: 'Supporting details', distinction: 'Detalhes de apoio são exemplos, estatísticas e citações que sustentam a ideia principal.' },
      { name: 'Topic', distinction: 'O tópico é apenas a palavra-chave do assunto (ex: "inteligência artificial"); a ideia principal é a afirmação completa feita sobre o tópico.' }
    ],
    relatedQuestionIds: ['q-ing-05'],
    difficulty: 'medio',
    tags: ['tese', 'compreensão global', 'argumentação']
  },
  {
    id: 'supporting-details',
    name: 'Supporting Details (Detalhes de Apoio)',
    subject: 'ingles',
    discipline: 'Língua Inglesa',
    category: 'Compreensão Textual',
    definition: 'Fatos, dados estatísticos, depoimentos, razões ou exemplos específicos utilizados pelo autor para fundamentar e comprovar a tese principal.',
    didacticExplanation: 'Em textos opinativos e acadêmicos, a ideia principal perderia credibilidade sem evidências. Os supporting details respondem às perguntas: "Como?", "Por quê?", "Com que provas?" e "Quais exemplos?".',
    practicalExample: 'Citar que "um estudo da Universidade de Oxford com 12.000 pessoas revelou uma redução de 30% nos níveis de estresse" para apoiar a tese dos benefícios da caminhada.',
    enemContext: 'O ENEM costuma pedir para identificar qual argumento ou exemplo no segundo parágrafo comprova a assertiva do enunciado.',
    similarConcepts: [
      { name: 'Main idea', distinction: 'A ideia principal é a conclusão maior; os detalhes de apoio são os tijolos de sustentação argumentativa.' },
      { name: 'Anecdote', distinction: 'Uma anedota é uma pequena história ilustrativa usada como um tipo específico de detalhe de apoio.' }
    ],
    relatedQuestionIds: ['q-ing-06'],
    difficulty: 'medio',
    tags: ['evidências', 'estatísticas', 'argumentação']
  },
  {
    id: 'purpose',
    name: 'Author’s Purpose (Propósito do Autor)',
    subject: 'ingles',
    discipline: 'Língua Inglesa',
    category: 'Intenção Comunicativa',
    definition: 'A razão primordial pela qual o autor escreveu o texto (informar, persuadir, entreter, criticar, alertar ou instruir).',
    didacticExplanation: 'Identificar o propósito exige analisar os verbos do enunciado (to warn, to convince, to criticize, to promote, to educate). A escolha das palavras e o tom do texto revelam o que o autor quer provocar no leitor.',
    practicalExample: 'Um artigo com dados científicos e alertas de saúde cujo propósito é convencer os jovens a abandonarem o uso de cigarros eletrônicos (to persuade/to discourage).',
    enemContext: 'Pergunta padrão no ENEM: "Ao escrever esse artigo, o autor tem por objetivo principal..." ou "A intenção do cartaz é...".',
    similarConcepts: [
      { name: 'Tone', distinction: 'Tone é o humor/atitude emocional do autor (irônico, sério); purpose é a meta prática do texto (convencer, alertar).' },
      { name: 'Audience', distinction: 'Audience é o público-alvo a quem o propósito se dirige.' }
    ],
    relatedQuestionIds: ['q-ing-07'],
    difficulty: 'medio',
    tags: ['intenção comunicativa', 'retórica', 'pragmática']
  },
  {
    id: 'tone',
    name: 'Author’s Tone (Tom do Autor)',
    subject: 'ingles',
    discipline: 'Língua Inglesa',
    category: 'Intenção Comunicativa',
    definition: 'A atitude emocional, postura psicológica ou disposição de ânimo que o autor projeta no texto através de suas escolhas lexicais.',
    didacticExplanation: 'O tom pode ser otimista, pessimista, sarcástico, neutro/imparcial, indignado, melancólico, solene ou humorístico. Os adjetivos e advérbios são os melhores indicadores do tom.',
    practicalExample: 'O uso de adjetivos como "ridiculous", "absurd" e "farcical" revela um tom crítico, sarcástico e desaprovador em relação a uma medida governamental.',
    enemContext: 'Muito cobrado na análise de tirinhas em inglês (Calvin and Hobbes, Peanuts) e artigos de opinião do The Guardian ou The New York Times.',
    similarConcepts: [
      { name: 'Mood', distinction: 'Tone é a atitude do autor; mood é a atmosfera e emoção que o texto desperta no leitor.' },
      { name: 'Purpose', distinction: 'Tone reflete o sentimento; purpose define o objetivo da comunicação.' }
    ],
    relatedQuestionIds: ['q-ing-08'],
    difficulty: 'dificil',
    tags: ['emoção', 'escolha lexical', 'crítica', 'sarcasmo']
  },
  {
    id: 'connectors',
    name: 'Connectors (Conectivos e Linking Words)',
    subject: 'ingles',
    discipline: 'Língua Inglesa / Gramática Textual',
    category: 'Coesão e Coerência',
    definition: 'Palavras ou locuções que estabelecem relações lógicas de sentido entre orações, parágrafos e ideias em um texto.',
    didacticExplanation: 'Essenciais para a coesão textual: indicam adição (moreover, furthermore), oposição (however, although, nevertheless), causa (because, since), consequência (therefore, thus) e conclusão (in conclusion, overall).',
    practicalExample: '"She studied vigorously for the exam; nevertheless, the results fell short of her high expectations." (relação de oposição/contraste).',
    enemContext: 'Garantem a correta interpretação da virada de argumento no texto em inglês. O ENEM frequentemente cobra o sentido de "however", "despite" e "furthermore".',
    similarConcepts: [
      { name: 'Contrast', distinction: 'Contraste é a relação lógica específica estabelecida por conectivos adversativos e concessivos.' },
      { name: 'Cause and effect', distinction: 'Causa e efeito é a relação estabelecida por conectivos causais e consecutivos.' }
    ],
    relatedQuestionIds: ['q-ing-09'],
    difficulty: 'medio',
    tags: ['linking words', 'coesão', 'gramática', 'argumentação']
  },
  {
    id: 'contrast',
    name: 'Contrast (Relação de Contraste e Oposição)',
    subject: 'ingles',
    discipline: 'Língua Inglesa',
    category: 'Coesão e Coerência',
    definition: 'Relação retórica em que duas ideias, fatos ou argumentos opostos ou conflitantes são apresentados para evidenciar disparidades ou quebra de expectativa.',
    didacticExplanation: 'Sinalizada por conjunções como "however", "on the other hand", "whereas", "while", "unlike" e "in spite of". É a chave para perceber quando o autor rejeita uma ideia comum para apresentar sua própria visão inovadora.',
    practicalExample: '"Unlike traditional solar panels, the new organic photovoltaic cells can be bent and installed on uneven curved surfaces."',
    enemContext: 'Cobrado em questões com textos de divulgação científica e debates socioculturais onde há confronto de visões.',
    similarConcepts: [
      { name: 'Cause and effect', distinction: 'Contraste aponta divergência de ideias; causa e efeito aponta desencadeamento temporal/lógico de um evento em outro.' },
      { name: 'Connectors', distinction: 'Connectors são a classe gramatical; contrast é a relação semântica que alguns conectivos expressam.' }
    ],
    relatedQuestionIds: ['q-ing-10'],
    difficulty: 'medio',
    tags: ['oposição', 'concessão', 'adversativa', 'argumentação']
  },
  {
    id: 'cause-and-effect',
    name: 'Cause and Effect (Causa e Consequência)',
    subject: 'ingles',
    discipline: 'Língua Inglesa',
    category: 'Coesão e Coerência',
    definition: 'Relação lógica em que um evento ou ação (a causa) gera diretamente outro acontecimento ou desfecho subsequente (o efeito).',
    didacticExplanation: 'Marcada por termos como "due to", "as a result", "consequently", "leads to", "brings about" e "because of". Permite rastrear as origens de um problema social ou ambiental e seus impactos reais.',
    practicalExample: '"Prolonged droughts in the region led to severe crop failures, which consequently triggered an unprecedented wave of climate refugees."',
    enemContext: 'Muito comum em textos sobre crise climática, relatórios da ONU e estudos de saúde pública no ENEM.',
    similarConcepts: [
      { name: 'Contrast', distinction: 'Causa e efeito estabelece relação de filiação explicativa; contraste estabelece confronto de contrários.' },
      { name: 'Chronology', distinction: 'Cronologia apenas diz o que veio antes e depois; causa e efeito explica por que o primeiro causou o segundo.' }
    ],
    relatedQuestionIds: ['q-ing-10'],
    difficulty: 'facil',
    tags: ['lógica', 'consequência', 'artigos científicos']
  },
  {
    id: 'opinion',
    name: 'Fact vs. Opinion (Fato vs. Opinião)',
    subject: 'ingles',
    discipline: 'Língua Inglesa',
    category: 'Compreensão Textual',
    definition: 'A habilidade crítica de diferenciar declarações factuais objetivas e comprováveis de julgamentos de valor, crenças ou opiniões subjetivas.',
    didacticExplanation: 'Um fato pode ser verificado empiricamente (datas, números de pesquisas, leis físicas); uma opinião expressa sentimentos, crenças ou preferências pessoais, frequentemente introduzida por verbos como "believe", "feel", "claim" ou adjetivos valorativos como "best", "worst", "unacceptable".',
    practicalExample: 'Fato: "The concert was attended by 45,000 people." / Opinião: "It was the most extraordinary and unforgettable musical performance in the city\'s history."',
    enemContext: 'Questões do ENEM que cobram a análise de editoriais de imprensa, resenhas de cinema ou discursos eleitorais em língua inglesa.',
    similarConcepts: [
      { name: 'Tone', distinction: 'O tom é o matiz expressivo da linguagem; a opinião é a tese de julgamento em si.' },
      { name: 'Main idea', distinction: 'Em textos argumentativos, a ideia principal coincide frequentemente com a opinião central sustentada pelo autor.' }
    ],
    relatedQuestionIds: ['q-ing-08'],
    difficulty: 'medio',
    tags: ['pensamento crítico', 'fato vs opinião', 'análise de discurso']
  }
];

export const CATEGORIES_BY_SUBJECT: Record<string, string[]> = {
  humanas: [
    'Cultura e Sociedade',
    'Trabalho e Sociedade',
    'Política e Cidadania',
    'Espaço Urbano e Geografia',
    'Mundo Contemporâneo',
    'História e Relações de Poder',
    'Meio Ambiente e Sociedade',
    'Filosofia e Ética'
  ],
  linguagens: [
    'Interpretação e Teoria do Texto',
    'Figuras de Linguagem',
    'Funções da Linguagem',
    'Semântica e Significado',
    'Linguagem e Sociedade',
    'Gêneros e Tipologias'
  ],
  ingles: [
    'Vocabulário e Semântica',
    'Estratégias de Leitura',
    'Compreensão Textual',
    'Intenção Comunicativa',
    'Coesão e Coerência'
  ]
};

export const SUBJECT_METADATA = {
  linguagens: {
    name: 'Linguagens e suas Tecnologias',
    shortName: 'Linguagens',
    description: 'Interpretação, figuras de linguagem, funções da linguagem e gêneros textuais.',
    accentColor: 'indigo',
    badgeText: 'Linguagens',
    iconName: 'BookOpen'
  },
  humanas: {
    name: 'Ciências Humanas e suas Tecnologias',
    shortName: 'Ciências Humanas',
    description: 'Sociologia, Filosofia, História e Geografia contextualizadas.',
    accentColor: 'purple',
    badgeText: 'Humanas',
    iconName: 'Globe'
  },
  ingles: {
    name: 'Língua Inglesa',
    shortName: 'Inglês',
    description: 'Leitura instrumental, vocabulário contextual, conectivos e estratégias de interpretação.',
    accentColor: 'sky',
    badgeText: 'Inglês',
    iconName: 'Languages'
  }
};

