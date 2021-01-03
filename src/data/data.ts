import { InfoBoxProps } from "../components/InfoBox/InfoBox";
// consultarias
export const colorToConsultancy: Record<string, string> = {
  blue: "ip",
  red: "cp",
  green: "af",
  orange: "ps",
  pink: "cd",
  yellow: "cn",
  purple: "ceo",
  brown: "fp",
  turquoise: "mp",
};

// consultorias
export const consultancyToColor: Record<string, string> = {
  ip: "blue",
  cp: "red",
  af: "green",
  ps: "orange",
  cd: "pink",
  cn: "yellow",
  ceo: "purple",
  fp: "brown",
  mp: "turquoise",
};

// serviços
export const serviceToColor: Record<string, string> = {
  cii: "blue",
  iit: "blue",
  cp: "red",
  af: "green",
  ps: "orange",
  cd: "pink",
  cn: "yellow",
  ceo: "purple",
  fp: "brown",
  mp: "turquoise",
};

export type ConsultancyID =
  | "ip"
  | "cp"
  | "af"
  | "ps"
  | "cd"
  | "cn"
  | "ceo"
  | "fp"
  | "mp";

export const serviceDropboxName: Record<string, string> = {
  af: "Analise Facial",
  cp: "Coloracao Pessoal",
  cd: "Closet Detox",
  cn: "Consultoria de Noivos",
  ceo: "Consultoria Escolha de Oculos",
  fp: "Formacoes e Palestras",
  cii: "Consultoria de Imagem Inteligente",
  iit: "Consultoria Imagem Inteligente Total",
  mp: "Maquilhagem Profissional",
  ps: "Personal Shopping",
};

export const consultancyDropboxName: Record<string, string> = {
  af: "Analise Facial",
  cp: "Coloracao Pessoal",
  cd: "Closet Detox",
  cn: "Consultoria de Noivos",
  ceo: "Consultoria Escolha de Oculos",
  fp: "Formacoes e Palestras",
  ip: "Imagem Pessoal",
  mp: "Maquilhagem Profissional",
  ps: "Personal Shopping",
};

export interface ServiceData {
  consultancyId: string;
  slideText: string[];
  labelsSlide: string[];
  imgSlideSize: number;
  boasMasEscolhas: boolean;
  boasMasText: string[][];
  duration: number;
  mailImage: string;
  websiteLink: string;
}

export const serviceData: Record<string, ServiceData> = {
  cii: {
    consultancyId: "ip",
    slideText: [
      "Identificar o seu estilo;",
      "Saber explorar os seus pontos fortes e camuflar os menos positivos;",
      "Acompanhamento personalizado até ao objetivo definido;",
      "Organizar e coordenar o seu guarda-roupa;",
      "Aumento da autoimagem e autoestima;",
      "Ter consciência da mudança que a Consultoria de Imagem fará na sua vida enquanto ferramenta facilitadora;",
      "Fazer compras consistentes e não por impulso;",
      "Fazer com que a escolha matinal do seu look se torne simples e intuitiva e não mais um momento stressante do seu dia;",
      "Combinar cores de forma harmoniosa;",
      "Evitar erros cromáticos e o medo de usar cor.",
    ],
    labelsSlide: [
      "entrevista",
      "coloração pessoal",
      "análise facial (básica)",
      "análise de biótipo",
      "book digital",
    ],
    imgSlideSize: 7,
    boasMasEscolhas: false,
    boasMasText: [[]],
    duration: 0,
    mailImage: "",
    websiteLink: "",
  },
  iit: {
    consultancyId: "ip",
    slideText: [
      "Serviço desenhado individualmente à medida das suas necessidades;",
      "Aumento da autoimagem e autoestima;",
      "Acompanhamento personalizado até ao objectivo definido;",
      "Ter consciência da mudança que a Consultoria de Imagem fará na sua vida enquanto ferramenta facilitadora;",
      "Organizar e coordenar o seu guarda-roupa;",
      "Fazer compras conscientes e não por impulso;",
      "Combinar cores de forma harmoniosa;",
      "Fazer com que a escolha matinal do seu look se torne simples e intuitiva e não mais um momento stressante do seu dia;",
      "Evitar erro cromáticos e o medo de usar cor.",
    ],
    labelsSlide: [
      "plano de identidade visual",
      "coloração pessoal",
      "primeira visita ao guarda-roupa do cliente",
      "segunda visita ao guarda-roupa do cliente",
      "book digital",
    ],
    imgSlideSize: 1,
    boasMasEscolhas: false,
    boasMasText: [[]],
    duration: 0,
    mailImage: "",
    websiteLink: "",
  },
  cp: {
    consultancyId: "cp",
    slideText: [
      "Acompanhamento personalizado até ao objectivo definido;",
      "Aumento da autoimagem e autoestima;",
      "Fazer compras conscientes e não por impulso; Combinar cores de forma harmoniosa;",
      "Evitar erros cromáticos e o medo de usar cor;",
      "Serviço desenhado individualmente à medida das suas necessidades;",
      "Organizar e coordenar o seu guarda-roupa;",
      "Ter consciência da mudança que a Consultoria de Imagem fará na sua vida enquanto ferramenta facilitadora;",
      "Fazer com que a escolha matinal do seu look se torne simples e intuitiva e não mais um momento stressante do seu dia.",
    ],
    labelsSlide: [
      "teste de cores através do método sazonal expandido",
      "identificação da paleta cromática",
      "identificação de maquilhagem e acessórios",
      "maquilhagem profissional",
      "entrega de paleta cromática digital",
    ],
    imgSlideSize: 4,
    boasMasEscolhas: true,
    boasMasText: [
      [
        "Suaviza a textura da pele;",
        "Valoriza traços;",
        "Traz uma aparência saudável e jovem;",
        "Suaviza olheiras e marcas de expressão;",
        "Minimiza imperfeições;",
      ],
      [
        "Evidencia manchas e sinais de expressão;",
        "Destaca as imperfeições;",
        "Denuncia sinais de cansaço;",
      ],
    ],
    duration: 0,
    mailImage: "",
    websiteLink: "",
  },
  af: {
    consultancyId: "af",
    slideText: [
      "Protagonismo do rosto na imagem;",
      "Os elementos de design na harmonização facial ( cabelo, armações, maquilhagem, acessórios;",
      "Conhecer os seus traços faciais como ferramenta de comunicação visual;",
      "Compreensão e estudo da anatomia do rosto;",
      "Percepção ruídos e desejos de imagem.",
    ],
    labelsSlide: [
      "entrevista",
      "coloração pessoal",
      "análise facial detalhada",
      "propostas de elementos design(cabelo, armações, acessórios, roupa, maquilhagem)",
      "book digital",
    ],
    imgSlideSize: 2,
    boasMasEscolhas: false,
    boasMasText: [[]],
    duration: 0,
    mailImage: "",
    websiteLink: "",
  },
  ps: {
    consultancyId: "ps",
    slideText: [
      "Compras mais inteligentes e conscientes, aprendendo a investir nas peças certas e deixando de fazer compras por impulso desperdiçando dinheiro em peças inúteis ou que não o favoreçam;",
      "Escolhas baseadas em objectivos previamente estabelecidos pelo cliente fará com que as escolhas sejam em função do seu estilo de vida e tipo de corpo;",
      "Conhecendo o seu corpo fará escolhas mais acertadas;",
      "Passará a visualizar as compras como um momento de prazer e não de stress.",
    ],
    labelsSlide: [
      "plano de identidade visual",
      "acompanhamento personalizado nas compras ou podemos fazer as compras por si",
      "aconselhamento de ajustes e proporções",
    ],
    imgSlideSize: 7,
    boasMasEscolhas: false,
    boasMasText: [[]],
    duration: 2,
    mailImage: "",
    websiteLink: "",
  },
  cd: {
    consultancyId: "cd",
    slideText: [
      'Organizar e limpar o seu armário de toda a "poluição" visual, para que o mesmo possa ser coerente, prático e faça sentido de modo a maximizar o seu potencial;',
      "Muita roupa não implica necessariamente um guarda-roupa inteligente e adequado ao seu estilo e personalidade;",
      "Identificar o seu guarda-roupa cápsula, transformando o seu armário com os alicerces certos para um guarda-roupa funcional e de sucesso.",
    ],
    labelsSlide: [
      "deslocação a casa da cliente para uma triagem do guarda-roupa",
      "organização de vários looks fotografados para colocar no armário (profissional, lazer, eventos)",
      "organização por peças e por tons",
      "elaboração de uma lista de compras com os possíveis itens em falta no guarda-roupa",
    ],
    imgSlideSize: 1,
    boasMasEscolhas: false,
    boasMasText: [[]],
    duration: 3,
    mailImage: "",
    websiteLink: "",
  },
  cn: {
    consultancyId: "cn",
    slideText: [],
    labelsSlide: [],
    imgSlideSize: 14,
    boasMasEscolhas: false,
    boasMasText: [[]],
    duration: 0,
    mailImage: "",
    websiteLink: "",
  },
  ceo: {
    consultancyId: "ceo",
    slideText: [],
    labelsSlide: [],
    imgSlideSize: 4,
    boasMasEscolhas: false,
    boasMasText: [[]],
    duration: 0,
    mailImage: "",
    websiteLink: "",
  },
  fp: {
    consultancyId: "fp",
    slideText: [],
    labelsSlide: [],
    imgSlideSize: 3,
    boasMasEscolhas: false,
    boasMasText: [[]],
    duration: 0,
    mailImage: "",
    websiteLink: "",
  },
  mp: {
    consultancyId: "mp",
    slideText: [],
    labelsSlide: [],
    imgSlideSize: 4,
    boasMasEscolhas: false,
    boasMasText: [[]],
    duration: 0,
    mailImage: "",
    websiteLink: "",
  },
};

export interface ConsultancyData {
  color: string;
  variant: "double" | "single";
  topCornerVideo?: {
    url: string;
  };
  bottomCornerVideo?: {
    url: string;
  };
  leftInfoBox?: InfoBoxProps;
  rightInfoBox?: InfoBoxProps;
  centerInfoBox?: InfoBoxProps;
  lampData: {
    title: string;
    text: string;
  };
}

export const consultancyData: Record<string, ConsultancyData> = {
  ip: {
    color: "blue",
    variant: "double",
    topCornerVideo: {
      url: "/assets/sample.mp4",
    },
    leftInfoBox: {
      title: "Consultoria de Imagem Inteligente",
      to: "cii",
      consultancyID: "ip",
      text: [
        "E se pudesse ter um profissional a fazer-lhe um acompanhamento personalizado para ajudar a identificar e trabalhar o seu estilo? Faça esta viagem do seu interior para o seu exterior.",
      ],
    },
    rightInfoBox: {
      title: "Consultoria de Imagem Total Inteligente",
      to: "iit",
      consultancyID: "ip",
      text: [
        "Gostaria de trabalhar a sua imagem de A a Z? Aqui encontra a consultoria mais completa e gratificante. Torne a sua imagem numa imagem inteligente.",
      ],
    },
    lampData: {
      title: "azul",
      text:
        "Sabia que o azul diminui a circulação sanguínea, reduza a temperatura corporal e baixa pressão arterial?",
    },
  },
  cp: {
    color: "red",
    variant: "single",
    centerInfoBox: {
      title: "Coloração Pessoal",
      to: "cp",
      consultancyID: "cp",
      text: [
        "Já lhe aconteceu estar perfeitamente bem e alguém lhe perguntar se estava doente? Sabia que provavelmente seria porque estava a usar cores junto ao seu rosto que não favoreciam? Cores? Como assim?",
        "Pode ser cor de cabelo, maquilhagem, óculos, acessórios até a roupa junto ao rosto.Sabe que cores favorecem mais o seu rosto? Descubra através de uma sessão de coloração pessoal!",
      ],
    },
    lampData: {
      title: "vermelho",
      text:
        "sabia que o vermelho tem a capacidade de estimular, podendo mesmo aumentar a temperatura corporal e até provocar taquicardia?",
    },
  },
  af: {
    color: "green",
    variant: "single",
    centerInfoBox: {
      title: "Consultoria De Análise Facial Detalhada",
      to: "af",
      consultancyID: "af",
      text: [
        "Qual o peso do rosto na nossa imagem? Quando ouvimos o nome ou nos lembramos de uma pessoa qual é a primeira imagem que nos vem à cabeça? É a imagem do rosto. Porquê? Porque o rosto carrega em si a identidade do indivíduo.",
        "O rosto é a parte do corpo que carrega um maior número de elementos expressivos na identificação de uma pessoa e é a parte do corpo que mais se relaciona com o mundo e com os outros. É através do nosso rosto de nos expressamos e que criamos a empatia com os nossos interlocutores.",
      ],
    },
    lampData: {
      title: "verde",
      text:
        "Sabia que usar verde acalma e pode ajudar em momentos de depressão e tristeza?",
    },
  },
  ps: {
    color: "orange",
    variant: "single",
    centerInfoBox: {
      title: "Personal Shopping",
      to: "ps",
      consultancyID: "ps",
      text: [
        "Ajudamos na ida às compras para escolher os melhores cortes, cores e padrões para si. Tornamos as compras num momento consciente e prazeroso.",
      ],
    },
    lampData: {
      title: "laranja",
      text:
        "Sabia que o laranja é uma cor que os poder energético aumentar autoestima e incentivo ao intelecto?",
    },
  },
  cd: {
    color: "pink",
    variant: "single",
    centerInfoBox: {
      title: "Closet Detox",
      to: "cd",
      consultancyID: "cd",
      text: [
        'E quando abrimos o nosso guarda-roupa que se encontra repleto e dizemos "não tenho nada para vestir!"?! Ajudamos a organizar o seu guarda-roupa de forma consciente e inteligente.',
      ],
    },
    lampData: {
      title: "rosa",
      text:
        "Sabia que a cor-de-rosa actua na área tegmental ventral que controla a sensação de recompensa pela saciedade de fome, sede e sexo.",
    },
  },
  cn: {
    color: "yellow",
    variant: "single",
    centerInfoBox: {
      title: "Consultoria de Noivos",
      to: "cn",
      consultancyID: "cn",
      text: [
        '"Só quero que o dia do meu casamento seja o mais feliz de sempre." Somos os parceiros certos. Ajudamos no processo de escolha do vestido ou fato em função do seu tipo de corpo. Também não esquecemos maquilhagem, acessórios e o ramo para lançar às suas amigas.',
      ],
    },
    lampData: {
      title: "amarelo",
      text:
        "Sabia que o amarelo estimula o intelecto e o sistema nervoso central, podendo contribuir para elevar a criatividade e melhorar o humor?",
    },
  },
  ceo: {
    color: "purple",
    variant: "single",
    centerInfoBox: {
      title: "Consultoria Escolha de Óculos",
      to: "ceo",
      consultancyID: "ceo",
      text: [
        "Identificar os seus traços faciais, a sua paleta cromática e a mensagem que pretende passar são três passos muito importantes para que a sua vida fique mais fácil e intuitiva. Quando falamos em armações de óculos, por vezes temos dificuldade em saber quais as que nos favorecem mais e que cores nos ficam melhor.",
        "Quando falamos de uma peça tão importante que estará sempre presente no nosso rosto, não acha que devemos reduzir a nossa margem de erro? Na minha consultoria de óculos todos esses pontos são analisados individualmente. Invista em si e na sua imagem.",
      ],
    },
    lampData: {
      title: "lilas",
      text:
        "Sabia que o lilás estimula a área do cérebro do pensamento abstrato? Ativando a criatividade e a imaginação?",
    },
  },
  fp: {
    color: "brown",
    variant: "single",
    centerInfoBox: {
      title: "Formações e Palestras",
      to: "fp",
      consultancyID: "fp",
      text: [
        'Se tem uma destas perguntas, esta consultoria é para si! "Tenho uma empresa, como posso melhorar a sua imagem?", "será que a imagem que passo no meu local de trabalho é profissional?".',
      ],
    },
    lampData: {
      title: "castanho",
      text:
        "Sabia que o castanho a tua no sistema límbico  estrutura interna responsável pela resposta das nossas emoções?",
    },
  },
  mp: {
    color: "turquoise",
    variant: "single",
    centerInfoBox: {
      title: "Maquilhagem Profissional",
      to: "mp",
      consultancyID: "mp",
      text: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam malesuada bibendum arcu vitae. Habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat.",
        "Orci a scelerisque purus semper eget. Hac habitasse platea dictumst quisque sagittis purus. Ac odio tempor orci dapibus. Eget arcu dictum varius duis. Tellus integer feugiat scelerisque varius morbi enim nunc. Elit pellentesque habitant morbi tristique.",
      ],
    },
    lampData: {
      title: "verde",
      text:
        "Sabia que usar verde acalma e pode ajudar em momentos de depressão e tristeza?",
    },
  },
};

export interface PaulaPradaData {
  textPaulaPrada: string[];
  text: [
    {
      title: "missão";
      text: string;
    },
    {
      title: "visão";
      text: string;
    },
    {
      title: "valores";
      text: string;
    }
  ];
}

export const paulaprada: PaulaPradaData = {
  textPaulaPrada: [
    "O meu nome é Paula Prada e sou Consultora de Imagem e Maquilhadora Profissional.",
    "Após 20 anos ligada à indústria farmacêutica decidi que era a hora de deixar uma pegada positiva no mundo.",
    "Criei então o conceito de Consultoria de Imagem Terapêutica, pois no meu trabalho inédito, inovo utilizando a imagem dos meus clientes de acordo com os seus objectivos, numa perspectiva de atingir o melhor plano de identidade visual para cada pessoa, fazendo emergir a melhor versão de cada um.",
  ],
  text: [
    {
      title: "missão",
      text:
        "Inspirar os outros para a ideia que não basta fazer, é preciso fazer diferente. E fazer diferente passa por uma imagem pessoal ou corporativa consciente.",
    },
    {
      title: "visão",
      text:
        "Empenho para me tornar a consultora de comunicação e imagem em Portugal mais especializada na área terapêutica.",
    },
    {
      title: "valores",
      text: "Compromisso. Ética. Consciência.",
    },
  ],
};

export type Prices = Record<
  string,
  {
    prices: { price: string; description: string }[];
  }
>;

export const prices: Prices = {
  "Consultoria de Imagem Inteligente": {
    prices: [{ price: "150€", description: "" }],
  },
  "Consultoria de Imagem Inteligente Total": {
    prices: [
      { price: "600€", description: "análise facial básica" },
      { price: "680€", description: "análise facial detalhada" },
    ],
  },
  "Consultoria de Análise Facial Detalhada": {
    prices: [{ price: "200€", description: "" }],
  },
  "Coloração Pessoal": { prices: [{ price: "80€", description: "" }] },
  "Closet Detox": { prices: [{ price: "150€", description: "mínimo" }] },
  "Personal Shopping": { prices: [{ price: "150€", description: "mínimo" }] },
  "Consultoria de Noivos": {
    prices: [
      { price: "500€", description: "com maquilhagem no dia do casamento" },
      { price: "400€", description: "sem maquilhagem" },
      {
        price: "250€",
        description: "só maquilhagem sem consultoria de imagem",
      },
    ],
  },
  "Consultoria Escolha de Óculos": {
    prices: [{ price: "100€", description: "" }],
  },
  "Maquilhagem profissional": { prices: [{ price: "30€", description: "" }] },
  "Formação e palestras": { prices: [{ price: "125€/h", description: "" }] },
};
