import { Question } from '../../types';

export const HUMANAS_QUESTIONS: Question[] = [
  {
    id: 'q-hum-01',
    subject: 'humanas',
    discipline: 'Sociologia / Artes',
    category: 'Cultura e Sociedade',
    contextText: 'Um artista visual recolhe materiais que seriam descartados em aterros sanitários, como garrafas plásticas, papelão ondulado e peças velhas de computadores. Em vez de simplesmente encaminhá-los para a reciclagem industrial comum, utiliza esses resíduos para produzir esculturas monumentais e instalações imersivas, atribuindo a esses fragmentos da sociedade de consumo uma nova função estética e uma profunda reflexão crítica sobre a finitude do planeta.',
    sourceInfo: 'Caderno de Cultura Contemporânea, 2023',
    prompt: 'Qual conceito das Ciências Humanas melhor expressa o processo de transformação simbólica realizado pelo artista sobre os materiais descartados?',
    options: [
      { id: 'opt-a', letter: 'A', text: 'Alienação cultural', conceptName: 'Alienação' },
      { id: 'opt-b', letter: 'B', text: 'Ressignificação', conceptName: 'Ressignificação' },
      { id: 'opt-c', letter: 'C', text: 'Determinismo geográfico', conceptName: 'Determinismo geográfico' },
      { id: 'opt-d', letter: 'D', text: 'Etnocentrismo', conceptName: 'Etnocentrismo' },
      { id: 'opt-e', letter: 'E', text: 'Indústria cultural', conceptName: 'Indústria cultural' }
    ],
    correctOptionId: 'opt-b',
    correctConceptId: 'ressignificacao',
    correctConceptName: 'Ressignificação',
    explanation: {
      whyCorrect: 'A ressignificação acontece quando um objeto, prática ou espaço adquire um novo sentido, interpretação ou função diferente da original. No texto, o lixo descartável é transformado em obra de arte reflexiva, ganhando novo valor simbólico.',
      distractorExplanations: {
        'A': 'Alienação cultural refere-se à perda de consciência crítica e submissão passiva a padrões externos, o oposto do ato autônomo e consciente de criação do artista.',
        'C': 'Determinismo geográfico é a teoria ultrapassada de que o meio natural condiciona rigidamente o comportamento humano, o que não se aplica ao texto.',
        'D': 'Etnocentrismo é o julgamento de culturas alheias a partir da própria régua cultural, sem ligação com a transformação de objetos em arte.',
        'E': 'Indústria cultural refere-se à padronização mercantil da arte para consumo de massa; aqui, o artista faz uma obra autoral e crítica contra o consumismo.'
      },
      enemTip: 'No ENEM, fique atento a termos como "atribuir novo sentido", "nova função simbólica" ou "transformar o uso cotidiano": eles quase invariavelmente apontam para o conceito de ressignificação.'
    },
    difficulty: 'facil'
  },
  {
    id: 'q-hum-02',
    subject: 'humanas',
    discipline: 'Sociologia / Geografia',
    category: 'Cultura e Sociedade',
    contextText: 'Antigos galpões de uma ferrovia desativada na década de 1980 em uma cidade média paulista permaneceram abandonados por décadas. Recentemente, coletivos de jovens da periferia ocuparam as ruínas, limparam a área e passaram a organizar batalhas de rima, saraus poéticos, feiras de agroecologia e oficinas de dança de rua, convertendo um símbolo do esquecimento industrial em um polo vivo de convivência comunitária.',
    sourceInfo: 'Revista Espaço e Cultura Urbana, 2022',
    prompt: 'A iniciativa dos coletivos urbanos sobre as antigas ruínas ferroviárias exemplifica primordialmente:',
    options: [
      { id: 'opt-a', letter: 'A', text: 'Uma política de gentrificação mercadológica imobiliária.', conceptName: 'Gentrificação' },
      { id: 'opt-b', letter: 'B', text: 'A consolidação da mais-valia absoluta nas relações de trabalho.', conceptName: 'Mais-valia' },
      { id: 'opt-c', letter: 'C', text: 'O processo social de ressignificação do espaço público urbano.', conceptName: 'Ressignificação' },
      { id: 'opt-d', letter: 'D', text: 'A imposição forçada de aculturação religiosa sobre a comunidade.', conceptName: 'Aculturação' },
      { id: 'opt-e', letter: 'E', text: 'O fetichismo da mercadoria aplicado ao patrimônio desativado.', conceptName: 'Fetichismo da mercadoria' }
    ],
    correctOptionId: 'opt-c',
    correctConceptId: 'ressignificacao',
    correctConceptName: 'Ressignificação',
    explanation: {
      whyCorrect: 'Os jovens deram uma nova utilidade comunitária e cultural para um espaço antes associado à decadência e ao abandono logístico. Esse processo de atribuir novo valor social e afetivo a um espaço pré-existente constitui uma ressignificação urbana.',
      distractorExplanations: {
        'A': 'Gentrificação envolveria a chegada de investimentos caros e a expulsão dos jovens periféricos por encarecimento da região, exatamente o oposto do que foi narrado.',
        'B': 'Mais-valia é uma categoria econômica da extração de lucro no trabalho assalariado fabril, não relacionada a eventos culturais comunitários.',
        'D': 'Aculturação não se aplica aqui, pois não há imposição coercitiva de outra etnia ou religião sobre os moradores.',
        'E': 'Fetichismo da mercadoria é a ilusão mágica conferida a produtos para consumo, sem aderência à ocupação de um patrimônio para oficinas gratuitas.'
      },
      enemTip: 'Espaços degradados recuperados por movimentos sociais e arte comunitária são clássicos exemplos de ressignificação no caderno de Ciências Humanas do ENEM.'
    },
    difficulty: 'medio'
  },
  {
    id: 'q-hum-03',
    subject: 'humanas',
    discipline: 'História / Antropologia',
    category: 'Cultura e Sociedade',
    contextText: 'Em relato de viagem do século XVI, um navegador europeu escreveu a respeito dos povos originários da costa americana: "São gentes que vivem sem lei, sem rei e sem fé; comem carnes sem cozimento adequado e não conhecem o valor do dinheiro ou das honras civis. Por viverem em tamanha barbárie e rudeza, carecem de quem lhes ensine a verdadeira civilização cristã e os afaste do estado puramente bestial."',
    sourceInfo: 'Crônica de viagens coloniais, 1558',
    prompt: 'A visão expressa pelo cronista colonial em relação às práticas dos povos originários é orientada fundamentalmente pelo:',
    options: [
      { id: 'opt-a', letter: 'A', text: 'Relativismo cultural', conceptName: 'Relativismo cultural' },
      { id: 'opt-b', letter: 'B', text: 'Etnocentrismo', conceptName: 'Etnocentrismo' },
      { id: 'opt-c', letter: 'C', text: 'Determinismo social', conceptName: 'Determinismo' },
      { id: 'opt-d', letter: 'D', text: 'Princípio da alteridade', conceptName: 'Alteridade' },
      { id: 'opt-e', letter: 'E', text: 'Sincretismo cultural', conceptName: 'Sincretismo cultural' }
    ],
    correctOptionId: 'opt-b',
    correctConceptId: 'etnocentrismo',
    correctConceptName: 'Etnocentrismo',
    explanation: {
      whyCorrect: 'O cronista usa os parâmetros de sua própria sociedade (ter rei, moeda, igreja e normas ocidentais) como régua única de civilização. Ao julgar a sociedade alheia como inferior ou animalesca por ser diferente, sua postura é estritamente etnocêntrica.',
      distractorExplanations: {
        'A': 'Relativismo cultural buscaria compreender a organização e a cosmologia indígena em seus próprios termos, sem hierarquizá-los.',
        'C': 'Determinismo social afirma que o meio social determina o destino individual, não sendo o conceito que explica o preconceito colonial.',
        'D': 'Alteridade é justamente o reconhecimento e respeito à diferença do outro, o inverso do repúdio manifestado no texto.',
        'E': 'Sincretismo é a fusão ou coexistência de elementos culturais, inexistente na atitude de desqualificação total do europeu.'
      },
      enemTip: 'Identifique palavras de julgamento moral no enunciado como "bárbaro", "rude", "sem fé", "primitivo" comparadas a um padrão ocidental: a resposta quase sempre é etnocentrismo ou eurocentrismo.'
    },
    difficulty: 'facil'
  },
  {
    id: 'q-hum-04',
    subject: 'humanas',
    discipline: 'Sociologia',
    category: 'Cultura e Sociedade',
    contextText: 'Nas redes sociais, um grupo de usuários zombou de fotografias de uma celebração tradicional indiana onde pessoas comem com as mãos em folhas de bananeira. Comentários diziam: "Quanta falta de higiene e de civilização; eles vivem como se ainda estivessem na Idade da Pedra, pois sequer aprenderam a usar garfos e facas de metal como qualquer pessoa educada do mundo moderno."',
    sourceInfo: 'Observatório das Dinâmicas Digitais, 2024',
    prompt: 'O comportamento dos comentaristas contemporâneos fundamenta-se na manifestação do:',
    options: [
      { id: 'opt-a', letter: 'A', text: 'Etnocentrismo cultural', conceptName: 'Etnocentrismo' },
      { id: 'opt-b', letter: 'B', text: 'Pluralismo sociológico', conceptName: 'Pluralismo' },
      { id: 'opt-c', letter: 'C', text: 'Relativismo axiológico', conceptName: 'Relativismo' },
      { id: 'opt-d', letter: 'D', text: 'Interculturalismo crítico', conceptName: 'Interculturalismo' },
      { id: 'opt-e', letter: 'E', text: 'Multiculturalismo emancipatório', conceptName: 'Multiculturalismo' }
    ],
    correctOptionId: 'opt-a',
    correctConceptId: 'etnocentrismo',
    correctConceptName: 'Etnocentrismo',
    explanation: {
      whyCorrect: 'Os internautas tratam a etiqueta ocidental de talheres como padrão supremo de civilidade ("como qualquer pessoa educada"). Ao desconsiderar o valor higiênico, cultural e sagrado de comer com as mãos na Índia, reproduzem etnocentrismo clássico.',
      distractorExplanations: {
        'B': 'Pluralismo sociológico celebra e acolhe a convivência de diversos grupos e costumes na esfera pública.',
        'C': 'Relativismo axiológico suspenderia juízos de superioridade para entender o hábito em sua lógica cultural interna.',
        'D': 'Interculturalismo crítico promove o diálogo horizontal e empático entre diferentes povos.',
        'E': 'Multiculturalismo emancipatório luta pelo reconhecimento político e jurídico de minorias marginalizadas.'
      },
      enemTip: 'O ENEM costuma trazer exemplos cotidianos e da internet para demonstrar que o etnocentrismo não acabou no período colonial; ele persiste disfarçado de "bom senso" ou "higiene universal".'
    },
    difficulty: 'facil'
  },
  {
    id: 'q-hum-05',
    subject: 'humanas',
    discipline: 'Sociologia / Antropologia',
    category: 'Cultura e Sociedade',
    contextText: 'Ao pesquisar os rituais funerários dos povos Wari’, na Amazônia ocidental, a antropóloga norte-americana Beth Conklin evitou emitir juízos morais de repugnância diante do canibalismo fúnebre tradicional que a comunidade praticava no passado. Em vez disso, analisou como o ato representava a mais alta demonstração de compaixão e afeto aos mortos, permitindo que o corpo do ente querido não ficasse apodrecendo na terra fria e esquecida, integrando-o ao ciclo cósmico da tribo.',
    sourceInfo: 'CONKLIN, Beth. Consuming Grief: Compassionate Cannibalism in an Amazonian Society, 2001 (adaptado)',
    prompt: 'A postura metodológica e ética adotada pela pesquisadora ao analisar a prática em seus próprios termos é denominada:',
    options: [
      { id: 'opt-a', letter: 'A', text: 'Darwinismo social', conceptName: 'Darwinismo social' },
      { id: 'opt-b', letter: 'B', text: 'Eurocentrismo epistêmico', conceptName: 'Eurocentrismo' },
      { id: 'opt-c', letter: 'C', text: 'Determinismo biológico', conceptName: 'Determinismo biológico' },
      { id: 'opt-d', letter: 'D', text: 'Relativismo cultural', conceptName: 'Relativismo cultural' },
      { id: 'opt-e', letter: 'E', text: 'Aculturação compulsória', conceptName: 'Aculturação' }
    ],
    correctOptionId: 'opt-d',
    correctConceptId: 'relativismo-cultural',
    correctConceptName: 'Relativismo Cultural',
    explanation: {
      whyCorrect: 'O relativismo cultural propõe suspender os preconceitos do pesquisador para compreender os costumes, ritos e valores de outro povo de acordo com a cosmologia e os significados internos daquele grupo específico.',
      distractorExplanations: {
        'A': 'Darwinismo social aplicava erroneamente a biologia evolutiva para justificar que povos indígenas seriam "menos evoluídos".',
        'B': 'Eurocentrismo epistêmico condenaria a prática imediatamente como selvageria inaceitável.',
        'C': 'Determinismo biológico defenderia que a prática decorre de fatores genéticos inatos, e não culturais.',
        'E': 'Aculturação compulsória é a imposição forçada de costumes externos, que a antropóloga em nada cometeu.'
      },
      enemTip: 'Quando a questão mostrar um pesquisador se esforçando para compreender ritos considerados "estranhos" sem julgar com base na moral ocidental, o conceito em pauta é o relativismo cultural.'
    },
    difficulty: 'medio'
  },
  {
    id: 'q-hum-06',
    subject: 'humanas',
    discipline: 'Filosofia / Ética',
    category: 'Filosofia e Ética',
    contextText: '"A verdadeira relação com o Outro começa quando não tento reduzi-lo a uma imagem de mim mesmo, nem tento assimilá-lo às minhas categorias prévias de pensamento. O rosto do Outro me interpela, me coloca em xeque e exige uma responsabilidade ética incondicional perante a sua existência singular."',
    sourceInfo: 'Inspirado na filosofia ética de Emmanuel Lévinas',
    prompt: 'O princípio ético defendido pelo texto fundamenta-se no conceito de:',
    options: [
      { id: 'opt-a', letter: 'A', text: 'Mais-valia', conceptName: 'Mais-valia' },
      { id: 'opt-b', letter: 'B', text: 'Alteridade', conceptName: 'Alteridade' },
      { id: 'opt-c', letter: 'C', text: 'Patrimonialismo', conceptName: 'Patrimonialismo' },
      { id: 'opt-d', letter: 'D', text: 'Alienação ideológica', conceptName: 'Alienação' },
      { id: 'opt-e', letter: 'E', text: 'Determinismo geográfico', conceptName: 'Determinismo' }
    ],
    correctOptionId: 'opt-b',
    correctConceptId: 'alteridade',
    correctConceptName: 'Alteridade',
    explanation: {
      whyCorrect: 'Alteridade é a capacidade de reconhecer o outro como sujeito diferente, legítimo e pleno em sua singularidade, sem querer moldá-lo à nossa imagem. O filósofo Emmanuel Lévinas colocou a alteridade e o "rosto do Outro" no centro da ética contemporânea.',
      distractorExplanations: {
        'A': 'Mais-valia é a apropriação do trabalho não pago na economia capitalista.',
        'C': 'Patrimonialismo é a confusão entre esfera pública e privada no Estado.',
        'D': 'Alienação ideológica é a distorção da consciência das classes subalternas.',
        'E': 'Determinismo geográfico trata do suposto impacto do clima no temperamento dos povos.'
      },
      enemTip: 'Textos de Filosofia que falam sobre acolher o "Outro", respeitar a diferença e não projetar o "Eu" como medida universal referem-se diretamente à alteridade.'
    },
    difficulty: 'medio'
  },
  {
    id: 'q-hum-07',
    subject: 'humanas',
    discipline: 'História do Brasil / Sociologia',
    category: 'Cultura e Sociedade',
    contextText: 'Nas missões jesuíticas fundadas na bacia do Rio da Prata e no sul do Brasil durante o século XVII, os indígenas guaranis foram introduzidos à música barroca europeia, à escrita alfabética e ao cultivo agrícola sedentário com arado. Ao mesmo tempo, os padres jesuítas adotaram o uso diário da língua guarani para a catequese e incorporaram técnicas indígenas de manejo da erva-mate, resultando em profundas modificações nos hábitos cotidianos de ambos os lados.',
    sourceInfo: 'História das Missões Jesuítico-Guaranis, 2020',
    prompt: 'O processo contínuo de transformações recíprocas gerado pela convivência direta e prolongada entre essas duas culturas distintas é caracterizado como:',
    options: [
      { id: 'opt-a', letter: 'A', text: 'Gentrificação', conceptName: 'Gentrificação' },
      { id: 'opt-b', letter: 'B', text: 'Segregação socioespacial', conceptName: 'Segregação' },
      { id: 'opt-c', letter: 'C', text: 'Aculturação', conceptName: 'Aculturação' },
      { id: 'opt-d', letter: 'D', text: 'Antropocentrismo biológico', conceptName: 'Antropocentrismo' },
      { id: 'opt-e', letter: 'E', text: 'Mais-valia relativa', conceptName: 'Mais-valia' }
    ],
    correctOptionId: 'opt-c',
    correctConceptId: 'aculturacao',
    correctConceptName: 'Aculturação',
    explanation: {
      whyCorrect: 'A aculturação é o processo dinâmico de troca e modificação cultural decorrente do contato contínuo entre dois grupos culturais distintos, no qual ambas as partes (ou ao menos uma delas) alteram significativamente seus traços culturais originais.',
      distractorExplanations: {
        'A': 'Gentrificação é o encarecimento de bairros urbanos expulsando populações vulneráveis.',
        'B': 'Segregação socioespacial envolve o afastamento físico em espaços segregados, enquanto o texto destaca o convívio e a troca mútua.',
        'D': 'Antropocentrismo diz respeito à centralidade do homem em relação à natureza.',
        'E': 'Mais-valia refere-se à exploração econômica fabril, não a contatos culturais coloniais.'
      },
      enemTip: 'Contatos históricos que resultam em modificações culturais mútuas ou na adoção de novos costumes linguísticos e técnicos são exemplos fundamentais de aculturação.'
    },
    difficulty: 'medio'
  },
  {
    id: 'q-hum-08',
    subject: 'humanas',
    discipline: 'Sociologia / História',
    category: 'Cultura e Sociedade',
    contextText: 'Durante as comemorações da Lavagem do Bonfim em Salvador, baianas vestidas com seus trajes tradicionais de renda branca e colares sagrados sobem as escadarias da igreja católica para lavar os degraus com água de cheiro e flores. Naquela mesma celebração, o Senhor do Bonfim é cultuado conjuntamente como o orixá Oxalá, congregando fiéis católicos e adeptos do candomblé em um mesmo rito sagrado compartilhado.',
    sourceInfo: 'Dossiê do Patrimônio Cultural Imaterial, IPHAN, 2014',
    prompt: 'Essa manifestação religiosa e cultural brasileira é uma expressão emblemática do:',
    options: [
      { id: 'opt-a', letter: 'A', text: 'Fetichismo da mercadoria', conceptName: 'Fetichismo da mercadoria' },
      { id: 'opt-b', letter: 'B', text: 'Sincretismo cultural', conceptName: 'Sincretismo cultural' },
      { id: 'opt-c', letter: 'C', text: 'Determinismo geográfico', conceptName: 'Determinismo' },
      { id: 'opt-d', letter: 'D', text: 'Eurocentrismo exclusivo', conceptName: 'Eurocentrismo' },
      { id: 'opt-e', letter: 'E', text: 'Patrimonialismo estatal', conceptName: 'Patrimonialismo' }
    ],
    correctOptionId: 'opt-b',
    correctConceptId: 'sincretismo-cultural',
    correctConceptName: 'Sincretismo Cultural',
    explanation: {
      whyCorrect: 'O sincretismo cultural consiste na fusão e harmonização de crenças, ritos e divindades de diferentes origens religiosas (no caso brasileiro, as matrizes católica e iorubá/afro-brasileira), criando uma síntese original de fé e resistência.',
      distractorExplanations: {
        'A': 'Fetichismo da mercadoria trata da ilusão mágica dos produtos na economia de consumo.',
        'C': 'Determinismo geográfico é a teoria do condicionamento pelo meio físico.',
        'D': 'Eurocentrismo exclusivo proibiria qualquer manifestação africana e exigiria submissão unilateral ao cânone europeu.',
        'E': 'Patrimonialismo refere-se à confusão entre bens públicos e interesses privados de governantes.'
      },
      enemTip: 'Identificou associação entre santos católicos e orixás afro-brasileiros (Bonfim-Oxalá, Jorge-Ogum)? O conceito pedagógico direto é o sincretismo.'
    },
    difficulty: 'facil'
  },
  {
    id: 'q-hum-09',
    subject: 'humanas',
    discipline: 'Sociologia / Filosofia',
    category: 'Cultura e Sociedade',
    contextText: 'Pesquisadores da Escola de Frankfurt argumentavam que a produção massificada de filmes, programas de rádio e melodias repetitivas transformou as criações artísticas em meros bens de consumo. Produzidos segundo fórmulas previsíveis e de fácil digestão, esses produtos visam ocupar o tempo livre dos indivíduos com entretenimento alienante, impedindo o florescimento do pensamento autônomo e da crítica política.',
    sourceInfo: 'ADORNO, T.; HORKHEIMER, M. Dialética do Esclarecimento, 1947 (adaptado)',
    prompt: 'O fenômeno teórico analisado pelos autores ficou consagrado nas ciências sociais como:',
    options: [
      { id: 'opt-a', letter: 'A', text: 'Indústria cultural', conceptName: 'Indústria cultural' },
      { id: 'opt-b', letter: 'B', text: 'Contrato social rousseauniano', conceptName: 'Contrato social' },
      { id: 'opt-c', letter: 'C', text: 'Relativismo antropológico', conceptName: 'Relativismo cultural' },
      { id: 'opt-d', letter: 'D', text: 'Segregação socioespacial', conceptName: 'Segregação' },
      { id: 'opt-e', letter: 'E', text: 'Patrimonialismo burocrático', conceptName: 'Patrimonialismo' }
    ],
    correctOptionId: 'opt-a',
    correctConceptId: 'industria-cultural',
    correctConceptName: 'Indústria Cultural',
    explanation: {
      whyCorrect: 'Adorno e Horkheimer cunharam o termo "Indústria Cultural" para descrever a mercantilização da cultura e das artes, formatadas para padronizar o gosto popular, gerar lucros e promover a conformação e passividade dos indivíduos.',
      distractorExplanations: {
        'B': 'Contrato social é a teoria do surgimento da sociedade política por consentimento dos cidadãos.',
        'C': 'Relativismo antropológico é a metodologia de respeito às peculiaridades de cada cultura.',
        'D': 'Segregação socioespacial é a divisão espacial de classes no tecido da cidade.',
        'E': 'Patrimonialismo burocrático é apropriação do bem estatal para privilégio de famílias de governantes.'
      },
      enemTip: 'Escola de Frankfurt, Adorno, padronização da arte, mercadorização do entretenimento e busca pelo conformismo da massa: pense imediatamente em Indústria Cultural.'
    },
    difficulty: 'medio'
  },
  {
    id: 'q-hum-10',
    subject: 'humanas',
    discipline: 'Sociologia / Filosofia',
    category: 'Trabalho e Sociedade',
    contextText: 'No famoso filme "Tempos Modernos" (1936), de Charles Chaplin, o personagem Carlitos trabalha repetindo freneticamente o movimento mecânico de apertar parafusos em esteiras velozes da fábrica. Ele desconhece o projeto geral da máquina que ajuda a construir, não tem controle sobre o ritmo da produção e nem poder aquisitivo para desfrutar da riqueza coletiva que seu esforço diário gera.',
    sourceInfo: 'Análise cinematográfica e sociológica do trabalho, 2021',
    prompt: 'A cena retrata com clareza a condição humana na sociedade industrial capitalista descrita como:',
    options: [
      { id: 'opt-a', letter: 'A', text: 'Alteridade ética', conceptName: 'Alteridade' },
      { id: 'opt-b', letter: 'B', text: 'Alienação no trabalho', conceptName: 'Alienação' },
      { id: 'opt-c', letter: 'C', text: 'Etnocentrismo laboral', conceptName: 'Etnocentrismo' },
      { id: 'opt-d', letter: 'D', text: 'Sustentabilidade industrial', conceptName: 'Sustentabilidade' },
      { id: 'opt-e', letter: 'E', text: 'Gentrificação produtiva', conceptName: 'Gentrificação' }
    ],
    correctOptionId: 'opt-b',
    correctConceptId: 'alienacao',
    correctConceptName: 'Alienação',
    explanation: {
      whyCorrect: 'Karl Marx define a alienação (estranhamento) como o processo no qual o trabalhador perde o controle sobre os meios de produção, sobre o produto final de seu trabalho e sobre a própria atividade criadora, tornando-se uma mera extensão da engrenagem da máquina.',
      distractorExplanations: {
        'A': 'Alteridade é o acolhimento respeitoso da alteridade do outro, sem relação com a fragmentação do operário fabril.',
        'C': 'Etnocentrismo trata do julgamento entre etnias, não da divisão técnica do trabalho fabril.',
        'D': 'Sustentabilidade ambiental busca preservar ecossistemas para o futuro, sem relação com a crítica fordista.',
        'E': 'Gentrificação refere-se a transformações no espaço urbano imobiliário.'
      },
      enemTip: 'No ENEM, trabalhadores que realizam apenas uma fração repetitiva da tarefa, sem dominar o produto final ou participar dos lucros, ilustram o conceito de alienação.'
    },
    difficulty: 'facil'
  },
  {
    id: 'q-hum-11',
    subject: 'humanas',
    discipline: 'Sociologia / Economia',
    category: 'Trabalho e Sociedade',
    contextText: 'Uma fábrica têxtil calcula que um costureiro produz valor suficiente para cobrir todos os seus custos salariais e benefícios nas primeiras duas horas do seu expediente diário de oito horas. As seis horas restantes de labor são destinadas inteiramente à geração de valor excedente apropriado pelo proprietário das instalações na forma de rentabilidade líquida do capital.',
    sourceInfo: 'Estudos de Economia Política do Trabalho, 2023',
    prompt: 'Essa fração do tempo de trabalho não remunerada ao trabalhador e convertida em lucro patronal constitui o que a teoria social denomina de:',
    options: [
      { id: 'opt-a', letter: 'A', text: 'Mais-valia', conceptName: 'Mais-valia' },
      { id: 'opt-b', letter: 'B', text: 'Contrato social originário', conceptName: 'Contrato social' },
      { id: 'opt-c', letter: 'C', text: 'Eurocentrismo mercantil', conceptName: 'Eurocentrismo' },
      { id: 'opt-d', letter: 'D', text: 'Antropocentrismo econômico', conceptName: 'Antropocentrismo' },
      { id: 'opt-e', letter: 'E', text: 'Êxodo rural qualificado', conceptName: 'Êxodo rural' }
    ],
    correctOptionId: 'opt-a',
    correctConceptId: 'mais-valia',
    correctConceptName: 'Mais-valia',
    explanation: {
      whyCorrect: 'A mais-valia é o conceito fundamental da crítica marxista da economia política: representa a diferença entre o valor total criado pelo trabalhador durante a jornada de trabalho e o salário efetivamente pago por sua força de trabalho.',
      distractorExplanations: {
        'B': 'Contrato social é uma teoria filosófica sobre a fundação do Estado civil e a renúncia à violência do estado de natureza.',
        'C': 'Eurocentrismo mercantil é a valorização da Europa no comércio seiscentista.',
        'D': 'Antropocentrismo coloca o ser humano no ápice cosmológico perante os animais.',
        'E': 'Êxodo rural é a migração de pessoas do campo para a cidade.'
      },
      enemTip: 'Enunciados que contrastam as horas necessárias para pagar o salário com as horas extras que geram o lucro da empresa descrevem matematicamente a mais-valia.'
    },
    difficulty: 'medio'
  },
  {
    id: 'q-hum-12',
    subject: 'humanas',
    discipline: 'Sociologia / Filosofia',
    category: 'Trabalho e Sociedade',
    contextText: 'Consumidores passam noites em filas para adquirir o lançamento de uma marca de bolsas de luxo. A campanha de marketing vende a ideia de que possuir aquele objeto confere beleza, distinção e autoridade instantânea ao seu portador. Contudo, em nenhum momento da publicidade são mostradas as mãos dos artesãos mal remunerados que costuraram o couro ou as condições ambientais de onde a matéria-prima foi extraída.',
    sourceInfo: 'Sociologia do Consumo Contemporâneo, 2024',
    prompt: 'A atribuição de atributos mágicos ou quase sagrados ao objeto fabricado, obscurecendo as relações sociais e humanas reais envolvidas em sua produção, caracteriza o:',
    options: [
      { id: 'opt-a', letter: 'A', text: 'Fetichismo da mercadoria', conceptName: 'Fetichismo da mercadoria' },
      { id: 'opt-b', letter: 'B', text: 'Relativismo cultural', conceptName: 'Relativismo cultural' },
      { id: 'opt-c', letter: 'C', text: 'Sincretismo civilizatório', conceptName: 'Sincretismo cultural' },
      { id: 'opt-d', letter: 'D', text: 'Patrimonialismo institucional', conceptName: 'Patrimonialismo' },
      { id: 'opt-e', letter: 'E', text: 'Determinismo climático', conceptName: 'Determinismo' }
    ],
    correctOptionId: 'opt-a',
    correctConceptId: 'fetichismo-da-mercadoria',
    correctConceptName: 'Fetichismo da Mercadoria',
    explanation: {
      whyCorrect: 'O fetichismo da mercadoria ocorre quando os produtos assumem uma aura autônoma e um poder místico de atribuir status ou identidade a quem os adquire, enquanto o trabalho humano real e as relações de exploração que os originaram permanecem totalmente ocultados.',
      distractorExplanations: {
        'B': 'Relativismo cultural avalia hábitos de uma sociedade segundo a moral da própria comunidade.',
        'C': 'Sincretismo civilizatório é uma fusão de ritos ou culturas.',
        'D': 'Patrimonialismo é o uso ilegítimo da administração pública para vantagens privadas familiares.',
        'E': 'Determinismo climático liga traços sociais ao clima de uma região.'
      },
      enemTip: 'Se a questão destaca como uma mercadoria parece "ter vida própria" ou garantir status mágico, ocultando o trabalho duro do operário, marque Fetichismo da Mercadoria.'
    },
    difficulty: 'dificil'
  },
  {
    id: 'q-hum-13',
    subject: 'humanas',
    discipline: 'Sociologia / Filosofia',
    category: 'Política e Cidadania',
    contextText: 'Durante séculos, panfletos e manuais ensinavam que a submissão feminina no casamento e a exclusão das mulheres da vida política correspondiam a uma "lei natural e divina", visto que o sexo masculino teria sido dotado pela natureza de maior capacidade de julgamento racional. Esse discurso fazia com que uma construção histórica de dominação parecesse justa, natural e imutável para toda a sociedade.',
    sourceInfo: 'Estudos Históricos de Gênero e Poder, 2022',
    prompt: 'O mecanismo discursivo que naturaliza assimetrias históricas de poder, fazendo com que privilégios de determinados grupos pareçam uma ordem natural das coisas, expressa a ação da:',
    options: [
      { id: 'opt-a', letter: 'A', text: 'Sustentabilidade ecológica', conceptName: 'Sustentabilidade' },
      { id: 'opt-b', letter: 'B', text: 'Ideologia', conceptName: 'Ideologia' },
      { id: 'opt-c', letter: 'C', text: 'Gentrificação', conceptName: 'Gentrificação' },
      { id: 'opt-d', letter: 'D', text: 'Urbanização metropolitana', conceptName: 'Urbanização' },
      { id: 'opt-e', letter: 'E', text: 'Metonímia política', conceptName: 'Metonímia' }
    ],
    correctOptionId: 'opt-b',
    correctConceptId: 'ideologia',
    correctConceptName: 'Ideologia',
    explanation: {
      whyCorrect: 'Em seu sentido sociológico e crítico (particularmente em Marx e teóricos do poder), a ideologia opera naturalizando relações históricas de dominação e desigualdade, ocultando o caráter construído das estruturas sociais para legitimar o status quo.',
      distractorExplanations: {
        'A': 'Sustentabilidade é o equilíbrio no uso de recursos naturais.',
        'C': 'Gentrificação é a transformação socioespacial de bairros.',
        'D': 'Urbanização é o processo demográfico de crescimento das cidades.',
        'E': 'Metonímia é uma figura de linguagem da língua portuguesa.'
      },
      enemTip: 'Palavras como "naturalizar desigualdades", "ocultar a dominação" e "fazer parecer que sempre foi assim" são as chaves clássicas para assinalar Ideologia no ENEM.'
    },
    difficulty: 'medio'
  },
  {
    id: 'q-hum-14',
    subject: 'humanas',
    discipline: 'Filosofia Política',
    category: 'Política e Cidadania',
    contextText: '"Para escapar da condição em que os homens vivem em constante desconfiança e perigo de morte violenta, em que a vida é solitária, pobre, sórdida, embrutecida e curta, os indivíduos concordam mutuamente em transferir todo o seu direito natural de usar a força a um soberano comum dotado de autoridade para garantir a paz e a defesa de todos."',
    sourceInfo: 'HOBBES, Thomas. Leviatã, 1651 (adaptado)',
    prompt: 'O trecho formula as bases conceituais da teoria política conhecida como:',
    options: [
      { id: 'opt-a', letter: 'A', text: 'Contrato Social', conceptName: 'Contrato social' },
      { id: 'opt-b', letter: 'B', text: 'Fetichismo da mercadoria', conceptName: 'Fetichismo da mercadoria' },
      { id: 'opt-c', letter: 'C', text: 'Etnocentrismo universal', conceptName: 'Etnocentrismo' },
      { id: 'opt-d', letter: 'D', text: 'Êxodo rural migratório', conceptName: 'Êxodo rural' },
      { id: 'opt-e', letter: 'E', text: 'Sincretismo confessional', conceptName: 'Sincretismo cultural' }
    ],
    correctOptionId: 'opt-a',
    correctConceptId: 'contrato-social',
    correctConceptName: 'Contrato Social',
    explanation: {
      whyCorrect: 'O texto descreve a tese do Contrato Social (contratualismo), pela qual indivíduos livres em um estado de natureza abrem mão de parte de suas liberdades ilimitadas em favor de um pacto coletivo que funda o Estado e assegura a ordem e a segurança.',
      distractorExplanations: {
        'B': 'Fetichismo da mercadoria diz respeito à economia de consumo.',
        'C': 'Etnocentrismo é a avaliação preconceituosa de outras etnias.',
        'D': 'Êxodo rural é migração campo-cidade.',
        'E': 'Sincretismo é a conciliação de crenças religiosas distintas.'
      },
      enemTip: 'Hobbes, Locke ou Rousseau falando da passagem do estado de natureza para a sociedade civil através de um pacto consentido = Contrato Social.'
    },
    difficulty: 'medio'
  },
  {
    id: 'q-hum-15',
    subject: 'humanas',
    discipline: 'Filosofia / História',
    category: 'Política e Cidadania',
    contextText: 'Em Atenas do século V a.C., todos os cidadãos reunidos na Ágora tinham o direito igual de tomar a palavra (isegoria) e votar diretamente as leis da pólis. Contudo, essa ordem política excluía formalmente da condição de cidadão as mulheres, os escravizados e os estrangeiros (metecos), que constituíam a ampla maioria da população que residia no território da cidade.',
    sourceInfo: 'História da Filosofia e Cidadania Grega, 2022',
    prompt: 'O modelo de organização política ateniense analisado no texto corresponde a uma forma inicial e restrita de:',
    options: [
      { id: 'opt-a', letter: 'A', text: 'Democracia direta', conceptName: 'Democracia' },
      { id: 'opt-b', letter: 'B', text: 'Gentrificação aristocrática', conceptName: 'Gentrificação' },
      { id: 'opt-c', letter: 'C', text: 'Monarquia absolutista divina', conceptName: 'Monarquia' },
      { id: 'opt-d', letter: 'D', text: 'Patrimonialismo republicano', conceptName: 'Patrimonialismo' },
      { id: 'opt-e', letter: 'E', text: 'Indústria cultural helênica', conceptName: 'Indústria cultural' }
    ],
    correctOptionId: 'opt-a',
    correctConceptId: 'democracia',
    correctConceptName: 'Democracia',
    explanation: {
      whyCorrect: 'O modelo ateniense clássico é o berço histórico da democracia direta, caracterizado pela soberania exercida pelo demos na assembleia, embora circunscrito a homens livres atenienses.',
      distractorExplanations: {
        'B': 'Gentrificação é um termo da geografia urbana moderna.',
        'C': 'Monarquia absolutista concentra o poder nas mãos de um rei por direito divino hereditário.',
        'D': 'Patrimonialismo é a apropriação privada do Estado por dinastias burocráticas.',
        'E': 'Indústria cultural é um conceito frankfurtiano do século XX.'
      },
      enemTip: 'O ENEM ama contrastar a democracia ateniense antiga (direta, participativa, mas restrita) com as democracias contemporâneas (representativas, com voto universal e direitos humanos para todos).'
    },
    difficulty: 'facil'
  },
  {
    id: 'q-hum-16',
    subject: 'humanas',
    discipline: 'Sociologia / História',
    category: 'Política e Cidadania',
    contextText: 'A Constituição Brasileira de 1988, conhecida historicamente como "Constituição Cidadã", estabeleceu pela primeira vez no país que a saúde é um direito fundamental de todos e dever do Estado, criou o Sistema Único de Saúde (SUS), garantiu o voto facultativo aos jovens de 16 e 17 anos e criminalizou expressamente o racismo como delito inafiançável e imprescritível.',
    sourceInfo: 'Cadernos de Direito Constitucional e Sociedade, 2023',
    prompt: 'Essas conquistas consagradas pelo texto constitucional de 1988 representam a expansão histórica da:',
    options: [
      { id: 'opt-a', letter: 'A', text: 'Cidadania plena', conceptName: 'Cidadania' },
      { id: 'opt-b', letter: 'B', text: 'Alienação produtiva', conceptName: 'Alienação' },
      { id: 'opt-c', letter: 'C', text: 'Aculturação jurídica', conceptName: 'Aculturação' },
      { id: 'opt-d', letter: 'D', text: 'Mais-valia absoluta', conceptName: 'Mais-valia' },
      { id: 'opt-e', letter: 'E', text: 'Gentrificação social', conceptName: 'Gentrificação' }
    ],
    correctOptionId: 'opt-a',
    correctConceptId: 'cidadania',
    correctConceptName: 'Cidadania',
    explanation: {
      whyCorrect: 'Cidadania é o status conferido aos membros plenos de uma comunidade política que usufruem do tripé de direitos civis, políticos e sociais. A Constituição de 1988 ampliou significativamente esses pilares no Brasil pós-ditadura.',
      distractorExplanations: {
        'B': 'Alienação produtiva refere-se ao estranhamento do trabalhador na fábrica.',
        'C': 'Aculturação jurídica não define a consagração democrática de garantias constitucionais universais.',
        'D': 'Mais-valia é a apropriação econômica do trabalho.',
        'E': 'Gentrificação é a transformação excludente de bairros.'
      },
      enemTip: 'Constituição de 1988 associada a direitos à saúde, educação, previdência e combate ao preconceito sempre se vincula diretamente à afirmação da cidadania.'
    },
    difficulty: 'facil'
  },
  {
    id: 'q-hum-17',
    subject: 'humanas',
    discipline: 'História do Brasil / Sociologia',
    category: 'Política e Cidadania',
    contextText: 'Durante as primeiras décadas da República Velha no Brasil, era praxe que chefes políticos locais ("coronéis") empregassem verbas orçamentárias públicas para asfaltar caminhos até suas próprias fazendas privadas, nomeassem seus sobrinhos e afilhados para cargos nos tribunais locais e utilizassem policiais do Estado como guardas particulares de suas famílias.',
    sourceInfo: 'História Política do Brasil Republicano, 2021',
    prompt: 'Essa confusão deliberada entre a esfera pública e os interesses patrimoniais privados de governantes constitui a essência do:',
    options: [
      { id: 'opt-a', letter: 'A', text: 'Patrimonialismo', conceptName: 'Patrimonialismo' },
      { id: 'opt-b', letter: 'B', text: 'Relativismo cultural', conceptName: 'Relativismo cultural' },
      { id: 'opt-c', letter: 'C', text: 'Sincretismo civilizatório', conceptName: 'Sincretismo cultural' },
      { id: 'opt-d', letter: 'D', text: 'Antropocentrismo ético', conceptName: 'Antropocentrismo' },
      { id: 'opt-e', letter: 'E', text: 'Contrato social democrático', conceptName: 'Contrato social' }
    ],
    correctOptionId: 'opt-a',
    correctConceptId: 'patrimonialismo',
    correctConceptName: 'Patrimonialismo',
    explanation: {
      whyCorrect: 'O patrimonialismo é uma forma tradicional de dominação na qual o detentor do poder político não faz distinção clara entre o patrimônio público (do Estado) e o patrimônio particular de sua família, administrando a máquina estatal como extensão de sua casa.',
      distractorExplanations: {
        'B': 'Relativismo cultural é a atitude antropológica de respeito a outros costumes.',
        'C': 'Sincretismo é a mistura de tradições religiosas.',
        'D': 'Antropocentrismo é a centralidade do humano perante o cosmos.',
        'E': 'Contrato social democrático pressupõe o império das leis republicanas impessoais e da igualdade de todos perante o Estado.'
      },
      enemTip: 'Governante usando carro oficial para benefício próprio ou nomeando parentes e afilhados com dinheiro público? O conceito cobrado é Patrimonialismo (associado a Max Weber, Sérgio Buarque de Holanda e Raymundo Faoro).'
    },
    difficulty: 'medio'
  },
  {
    id: 'q-hum-18',
    subject: 'humanas',
    discipline: 'Geografia Urbana',
    category: 'Espaço Urbano e Geografia',
    contextText: 'Uma foto aérea clássica do bairro do Morumbi, na capital paulista, mostra de um lado luxuosos edifícios residenciais com quadras de tênis e piscinas privativas na sacada de cada apartamento, separados apenas por um alto muro de concreto com arame farpado da comunidade de Paraisópolis, onde milhares de casas autoconstruídas carecem de rede de esgoto tratada e praças públicas.',
    sourceInfo: 'Geografia das Desigualdades Metropolitanas, 2023',
    prompt: 'A coexistência contígua, porém abissalmente desigual, dessas duas realidades no espaço geográfico da mesma metrópole expressa o fenômeno da:',
    options: [
      { id: 'opt-a', letter: 'A', text: 'Transumância sazonal', conceptName: 'Transumância' },
      { id: 'opt-b', letter: 'B', text: 'Segregação socioespacial', conceptName: 'Segregação socioespacial' },
      { id: 'opt-c', letter: 'C', text: 'Aculturação regional', conceptName: 'Aculturação' },
      { id: 'opt-d', letter: 'D', text: 'Alienação ideológica', conceptName: 'Alienação' },
      { id: 'opt-e', letter: 'E', text: 'Intertextualidade urbana', conceptName: 'Intertextualidade' }
    ],
    correctOptionId: 'opt-b',
    correctConceptId: 'segregacao-socioespacial',
    correctConceptName: 'Segregação Socioespacial',
    explanation: {
      whyCorrect: 'A segregação socioespacial é a divisão e fragmentação das cidades em territórios desiguais conforme a classe social e renda, concentrando investimentos e privilégios em certas zonas enquanto relega as populações mais pobres à precariedade física e de serviços.',
      distractorExplanations: {
        'A': 'Transumância é o movimento sazonal de gado ou trabalhadores rurais entre regiões.',
        'C': 'Aculturação envolve trocas e fusões culturais.',
        'D': 'Alienação ideológica é um conceito de consciência crítica, não de organização territorial urbana.',
        'E': 'Intertextualidade é um diálogo entre textos linguísticos.'
      },
      enemTip: 'Imagens e textos que destacam muros separando condomínios de luxo e favelas sem saneamento ilustram no ENEM a segregação socioespacial.'
    },
    difficulty: 'facil'
  },
  {
    id: 'q-hum-19',
    subject: 'humanas',
    discipline: 'Geografia Urbana / Sociologia',
    category: 'Espaço Urbano e Geografia',
    contextText: 'Uma antiga vila portuária e operária passou por obras de embelezamento financiadas pelo poder público e fundos imobiliários. Antigos sobrados foram reformados e transformados em galerias de arte contemporânea, cafeterias especializadas e condomínios com aluguéis cotados em moedas fortes. Como consequência, as antigas famílias de estivadores e artesãos, com a disparada no preço dos aluguéis e do custo do comércio local, foram forçadas a se mudar para periferias situadas a 30 km de distância.',
    sourceInfo: 'Dossiê Território e Especulação Urbana, 2024',
    prompt: 'O processo de valorização imobiliária que encarece o espaço e provoca a expulsão indireta das classes trabalhadoras tradicionais é denominado:',
    options: [
      { id: 'opt-a', letter: 'A', text: 'Gentrificação', conceptName: 'Gentrificação' },
      { id: 'opt-b', letter: 'B', text: 'Etnocentrismo espacial', conceptName: 'Etnocentrismo' },
      { id: 'opt-c', letter: 'C', text: 'Mais-valia relativa', conceptName: 'Mais-valia' },
      { id: 'opt-d', letter: 'D', text: 'Êxodo rural inverso', conceptName: 'Êxodo rural' },
      { id: 'opt-e', letter: 'E', text: 'Sincretismo habitacional', conceptName: 'Sincretismo cultural' }
    ],
    correctOptionId: 'opt-a',
    correctConceptId: 'gentrificacao',
    correctConceptName: 'Gentrificação',
    explanation: {
      whyCorrect: 'A gentrificação (do inglês "gentry", nobreza) descreve o processo de elitização e reforma de áreas urbanas antes degradadas ou populares, com inflação dos custos de vida que expulsa compulsoriamente os moradores históricos de menor poder aquisitivo.',
      distractorExplanations: {
        'B': 'Etnocentrismo envolve preconceito com valores de outras etnias.',
        'C': 'Mais-valia relativa decorre de ganhos de produtividade tecnológica fabril.',
        'D': 'Êxodo rural inverso seria a volta da cidade para o campo, não a migração interna forçada para a periferia.',
        'E': 'Sincretismo habitacional não é um conceito sociológico válido.'
      },
      enemTip: 'Bairro tradicional valorizado por intervenções estéticas com consequente expulsão de moradores antigos pelo aumento dos aluguéis = Gentrificação.'
    },
    difficulty: 'medio'
  },
  {
    id: 'q-hum-20',
    subject: 'humanas',
    discipline: 'Geografia da População',
    category: 'Espaço Urbano e Geografia',
    contextText: 'Entre as décadas de 1950 e 1980, a rápida mecanização das lavouras no interior do país e a intensa concentração de terras expulsaram milhões de pequenos agricultores e trabalhadores sem terra de suas propriedades no campo. Desprovidos de sustento agrícola, esses contingentes migraram massivamente em direção às capitais industriais do Sudeste em busca de trabalho nas fábricas e na construção civil.',
    sourceInfo: 'Atlas Histórico da Demografia Brasileira, IBGE, 2021',
    prompt: 'O deslocamento populacional em massa do meio rural com destino às áreas urbanas retratado no texto denomina-se:',
    options: [
      { id: 'opt-a', letter: 'A', text: 'Êxodo rural', conceptName: 'Êxodo rural' },
      { id: 'opt-b', letter: 'B', text: 'Migração pendular metropolitana', conceptName: 'Migração pendular' },
      { id: 'opt-c', letter: 'C', text: 'Nomadismo de subsistência', conceptName: 'Nomadismo' },
      { id: 'opt-d', letter: 'D', text: 'Gentrificação camponesa', conceptName: 'Gentrificação' },
      { id: 'opt-e', letter: 'E', text: 'Transumância pastoril', conceptName: 'Transumância' }
    ],
    correctOptionId: 'opt-a',
    correctConceptId: 'exodo-rural',
    correctConceptName: 'Êxodo Rural',
    explanation: {
      whyCorrect: 'O êxodo rural é a migração coletiva, contínua e definitiva de populações do campo para as cidades, impulsionada por fatores de expulsão agrícola (mecanização, concentração fundiária) e atração urbana (empregos urbanos e serviços).',
      distractorExplanations: {
        'B': 'Migração pendular é o deslocamento diário de ida e volta para trabalhar ou estudar em município vizinho.',
        'C': 'Nomadismo é o hábito de povos que não possuem moradia fixa e mudam constantemente de território.',
        'D': 'Gentrificação ocorre no meio urbano consolidado.',
        'E': 'Transumância é o movimento sazonal temporário associado a safras ou pastagens de inverno/verão.'
      },
      enemTip: 'Trabalhadores rurais perdendo o emprego para tratores e se mudando em definitivo para as cidades é a definição clássica do êxodo rural.'
    },
    difficulty: 'facil'
  },
  {
    id: 'q-hum-21',
    subject: 'humanas',
    discipline: 'Geografia Urbana',
    category: 'Espaço Urbano e Geografia',
    contextText: 'Em 1940, menos de 32% dos habitantes do Brasil residiam em núcleos urbanos. Segundo dados recentes dos Censos Demográficos, essa proporção ultrapassou a marca de 85%, transformando o Brasil em um território predominantemente urbano em poucas décadas, com reflexos profundos na economia de serviços e na mobilidade metropolitana.',
    sourceInfo: 'Síntese de Indicadores Sociais, IBGE, 2022',
    prompt: 'O processo histórico caracterizado pelo crescimento percentual mais acelerado da população residente nas cidades em comparação à população do campo é a:',
    options: [
      { id: 'opt-a', letter: 'A', text: 'Industrialização substitutiva', conceptName: 'Industrialização' },
      { id: 'opt-b', letter: 'B', text: 'Urbanização', conceptName: 'Urbanização' },
      { id: 'opt-c', letter: 'C', text: 'Aculturação linguística', conceptName: 'Aculturação' },
      { id: 'opt-d', letter: 'D', text: 'Alteridade sociopolítica', conceptName: 'Alteridade' },
      { id: 'opt-e', letter: 'E', text: 'Etnocentrismo demográfico', conceptName: 'Etnocentrismo' }
    ],
    correctOptionId: 'opt-b',
    correctConceptId: 'urbanizacao',
    correctConceptName: 'Urbanização',
    explanation: {
      whyCorrect: 'A urbanização é estritamente definida como o processo pelo qual a proporção de pessoas que vivem em cidades cresce em ritmo superior à população que vive no meio rural, invertendo a matriz demográfica de um país.',
      distractorExplanations: {
        'A': 'Industrialização substitutiva é o modelo econômico de produzir internamente bens antes importados.',
        'C': 'Aculturação diz respeito a transformações culturais entre etnias.',
        'D': 'Alteridade é a aceitação ética do outro.',
        'E': 'Etnocentrismo é o julgamento depreciativo de culturas diferentes.'
      },
      enemTip: 'Atenção à diferença técnica: crescimento urbano é o aumento de tamanho físico da mancha urbana; urbanização é o aumento percentual da população urbana em relação à rural.'
    },
    difficulty: 'facil'
  },
  {
    id: 'q-hum-22',
    subject: 'humanas',
    discipline: 'Geografia / Sociologia',
    category: 'Mundo Contemporâneo',
    contextText: 'Um telefone celular de última geração é projetado na Califórnia (EUA), utiliza memórias integradas produzidas na Coreia do Sul, recebe terras raras extraídas na República Democrática do Congo, é montado em linhas fabris automatizadas na China continental e tem o atendimento ao cliente realizado por operadores fluentes em inglês sediados em Bangalore, na Índia.',
    sourceInfo: 'Geopolítica das Cadeias Globais de Valor, 2023',
    prompt: 'A integração fragmentada e interdependente da produção fabril em escala planetária evidencia diretamente o processo de:',
    options: [
      { id: 'opt-a', letter: 'A', text: 'Patrimonialismo dinástico', conceptName: 'Patrimonialismo' },
      { id: 'opt-b', letter: 'B', text: 'Globalização', conceptName: 'Globalização' },
      { id: 'opt-c', letter: 'C', text: 'Colonialismo mercantilista', conceptName: 'Colonialismo' },
      { id: 'opt-d', letter: 'D', text: 'Relativismo cultural', conceptName: 'Relativismo cultural' },
      { id: 'opt-e', letter: 'E', text: 'Contrato social estamental', conceptName: 'Contrato social' }
    ],
    correctOptionId: 'opt-b',
    correctConceptId: 'globalizacao',
    correctConceptName: 'Globalização',
    explanation: {
      whyCorrect: 'A globalização contemporânea se manifesta com clareza nas cadeias globais de valor e na nova divisão internacional do trabalho (DIT), em que etapas de pesquisa, extração mineral, fabricação de componentes e montagem ocorrem em continentes diferentes conectados por redes logísticas e financeiras instantâneas.',
      distractorExplanations: {
        'A': 'Patrimonialismo refere-se a privilégios particulares dentro da administração governamental.',
        'C': 'Colonialismo mercantilista vigorou nos séculos XVI-XVIII com exclusivismo comercial sob monopólio monárquico.',
        'D': 'Relativismo cultural é a análise antropológica sem julgamentos valorativos.',
        'E': 'Contrato social estamental é uma contradição de termos filosóficos.'
      },
      enemTip: 'Produtos montados com peças vindas de múltiplos países e circulação instantânea de dados representam a Globalização e a Divisão Internacional do Trabalho (DIT).'
    },
    difficulty: 'facil'
  },
  {
    id: 'q-hum-23',
    subject: 'humanas',
    discipline: 'História Geral',
    category: 'História e Relações de Poder',
    contextText: 'Nas últimas décadas do século XIX, governos e conglomerados industriais britânicos, franceses e alemães ocuparam militarmente extensos territórios na África e na Ásia. O objetivo era garantir fontes monopolistas de petróleo, borracha, cobre e algodão para abastecer as novas indústrias elétricas e químicas europeias, além de encontrar novos mercados compradores para os estoques excedentes de mercadorias.',
    sourceInfo: 'HOBSBAWM, Eric. A Era dos Impérios, 1987 (adaptado)',
    prompt: 'A fase de expansão territorial e econômica liderada pelas potências industriais europeias no final do século XIX corresponde historicamente ao:',
    options: [
      { id: 'opt-a', letter: 'A', text: 'Sincretismo cultural', conceptName: 'Sincretismo cultural' },
      { id: 'opt-b', letter: 'B', text: 'Imperialismo (ou Neocolonialismo)', conceptName: 'Imperialismo' },
      { id: 'opt-c', letter: 'C', text: 'Gentrificação habitacional', conceptName: 'Gentrificação' },
      { id: 'opt-d', letter: 'D', text: 'Biocentrismo ecológico', conceptName: 'Biocentrismo' },
      { id: 'opt-e', letter: 'E', text: 'Contrato social hobbesiano', conceptName: 'Contrato social' }
    ],
    correctOptionId: 'opt-b',
    correctConceptId: 'imperialismo',
    correctConceptName: 'Imperialismo',
    explanation: {
      whyCorrect: 'O Imperialismo (ou Neocolonialismo) do século XIX foi motivado pela Segunda Revolução Industrial, na qual grandes cartéis e trustes financeiros exigiam o controle militar de matérias-primas energéticas e mercados consumidores exclusivos na África e na Ásia.',
      distractorExplanations: {
        'A': 'Sincretismo cultural é a harmonização de ritos religiosos diferentes.',
        'C': 'Gentrificação é a transformação socioespacial de bairros urbanos.',
        'D': 'Biocentrismo ecológico atribui valor moral à natureza, nada tendo a ver com a pilhagem colonial.',
        'E': 'Contrato social é a fundamentação filosófica do Estado político.'
      },
      enemTip: 'Conferência de Berlim, partilha da África, busca por matérias-primas para indústrias e "fardo do homem branco": tudo aponta para o Imperialismo do século XIX.'
    },
    difficulty: 'medio'
  },
  {
    id: 'q-hum-24',
    subject: 'humanas',
    discipline: 'História do Brasil',
    category: 'História e Relações de Poder',
    contextText: 'Durante o século XVII, a Coroa Portuguesa impunha ao Brasil o estrito cumprimento das diretrizes mercantilistas: a colônia estava proibida de criar manufaturas têxteis ou de ferro, só podia comerciar com navios autorizados pela metrópole lusitana e toda a sua produção de açúcar e pau-brasil devia abastecer exclusivamente o porto de Lisboa a preços tabelados.',
    sourceInfo: 'Economia Colonial Portuguesa no Atlântico Sul, 2020',
    prompt: 'Essa estrutura compulsória de subordinação comercial e política da colônia aos interesses da metrópole mercantilista caracteriza o:',
    options: [
      { id: 'opt-a', letter: 'A', text: 'Colonialismo (e o Pacto Colonial)', conceptName: 'Colonialismo' },
      { id: 'opt-b', letter: 'B', text: 'Relativismo antropológico', conceptName: 'Relativismo cultural' },
      { id: 'opt-c', letter: 'C', text: 'Sustentabilidade ambiental', conceptName: 'Sustentabilidade' },
      { id: 'opt-d', letter: 'D', text: 'Fetichismo da mercadoria', conceptName: 'Fetichismo da mercadoria' },
      { id: 'opt-e', letter: 'E', text: 'Gentrificação colonial', conceptName: 'Gentrificação' }
    ],
    correctOptionId: 'opt-a',
    correctConceptId: 'colonialismo',
    correctConceptName: 'Colonialismo',
    explanation: {
      whyCorrect: 'O Colonialismo mercantilista clássico (séculos XVI a XVIII) assentava-se no Pacto Colonial e no exclusivo metropolitano, no qual a colônia existia apenas para complementar a economia da metrópole europeia fornecendo produtos tropicais e metais preciosos.',
      distractorExplanations: {
        'B': 'Relativismo antropológico não vigia na dominação colonial predatória.',
        'C': 'Sustentabilidade prega a conservação ecológica, o oposto da devastação da Mata Atlântica para o canavial.',
        'D': 'Fetichismo da mercadoria é uma categoria de análise do capitalismo do século XIX.',
        'E': 'Gentrificação é um fenômeno imobiliário moderno de áreas urbanas.'
      },
      enemTip: 'Exclusivo comercial metropolitano, plantation escravista e proibição de manufaturas locais caracterizam o Colonialismo mercantilista.'
    },
    difficulty: 'facil'
  },
  {
    id: 'q-hum-25',
    subject: 'humanas',
    discipline: 'História / Filosofia',
    category: 'História e Relações de Poder',
    contextText: 'Muitos manuais escolares tradicionais apresentavam a periodização histórica mundial dividida rigorosamente em: Idade Antiga (centrada na Grécia e Roma), Idade Média (feudalismo da Europa Ocidental), Idade Moderna (Grandes Navegações europeias) e Idade Contemporânea (Revolução Francesa). Civilizações com milênios de filosofia, matemática e astronomia, como a China, a Índia, o Império Mali e os povos Maias, só eram mencionadas quando entravam em contato com as caravelas europeias.',
    sourceInfo: 'Debates sobre a Descolonização dos Currículos Escolares, 2023',
    prompt: 'Essa forma de conceber e narrar a história universal tendo o continente europeu como eixo central e padrão de medida exclusivo é denominada:',
    options: [
      { id: 'opt-a', letter: 'A', text: 'Eurocentrismo', conceptName: 'Eurocentrismo' },
      { id: 'opt-b', letter: 'B', text: 'Alteridade emancipatória', conceptName: 'Alteridade' },
      { id: 'opt-c', letter: 'C', text: 'Mais-valia cultural', conceptName: 'Mais-valia' },
      { id: 'opt-d', letter: 'D', text: 'Êxodo rural historiográfico', conceptName: 'Êxodo rural' },
      { id: 'opt-e', letter: 'E', text: 'Aculturação voluntária', conceptName: 'Aculturação' }
    ],
    correctOptionId: 'opt-a',
    correctConceptId: 'eurocentrismo',
    correctConceptName: 'Eurocentrismo',
    explanation: {
      whyCorrect: 'O eurocentrismo é a visão de mundo e modelo epistemológico que coloca a história, a ciência e os valores da Europa como centro e modelo universal de civilização, apagando ou subordinando o protagonismo histórico das civilizações asiáticas, africanas e ameríndias.',
      distractorExplanations: {
        'B': 'Alteridade emancipatória valorizaria o ponto de vista do outro, exatamente o que o currículo eurocêntrico nega.',
        'C': 'Mais-valia cultural não é um conceito formal sociológico.',
        'D': 'Êxodo rural trata de fluxos migratórios campo-cidade.',
        'E': 'Aculturação voluntária não descreve a imposição de uma matriz curricular hegemônica.'
      },
      enemTip: 'Narrativas que tratam a história da Europa como se fosse a história do mundo inteiro expressam claramente o Eurocentrismo.'
    },
    difficulty: 'facil'
  }
];

