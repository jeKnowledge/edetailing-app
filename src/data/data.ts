import { InfoBoxProps } from "../components/InfoBox/InfoBox";

// consultarias
export const colorToConsultancy: Record<string, string> = {
  blue: "ce-it",
  red: "cp",
  green: "af",
  orange: "ps",
  pink: "cd",
  yellow: "cn",
  purple: "ceo",
  brown: "fp",
  turquoise: "mp",
};

// serviços
export const serviceToColor: Record<string, string> = {
  ce: "blue",
  it: "blue",
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
  | "ce-it"
  | "cp"
  | "af"
  | "ps"
  | "cd"
  | "cn"
  | "ceo"
  | "fp"
  | "mp";

export const serviceData: {
  [key: string]: {
    consultancyId: string;
    slideText: string[][];
    labelsSlide: string[];
    imgSlideSize: number;
    duration: number;
    //TODO: smth about
  };
} = {
  ce: {
    consultancyId: "ce-it",
    slideText: [
      [
        "Identificar o seu estilo;",
        "Saber explorar os seus pontos fortes e camuflar os menos positivos;",
        "Acompanhamento personalizado até ao objetivo definido;",
        "Organizar e coordenar o seu guarda-roupa;",
      ],
      [
        "Aumento da autoimagem e autoestima;",
        "Ter consciência da mudança que a Consultoria de Imagem fará na sua vida enquanto ferramenta facilitadora;",
        "Fazer compras consistentes e não por impulso;",
      ],
      [
        "Fazer com que a escolha matinal do seu look se torne simples e intuitiva e não mais um momento stressante do seu dia;",
        "Combinar cores de forma harmoniosa;",
        "Evitar erros cromáticos e o medo de usar cor.",
      ],
    ],
    labelsSlide: [
      "entrevista",
      "coloração pessoal",
      "análise facial (básica)",
      "análise de biótipo",
      "book digital",
    ],
    imgSlideSize: 7,
    duration: 0,
  },
  it: {
    consultancyId: "ce-it",
    slideText: [
      [
        "Serviço desenhado individualmente à medida das suas necessidades;",
        "Aumento da autoimagem e autoestima;",
        "Acompanhamento personalizado até ao objectivo definido;",
      ],
      [
        "Ter consciência da mudança que a Consultoria de Imagem fará na sua vida enquanto ferramenta facilitadora;",
        "Organizar e coordenar o seu guarda-roupa;",
        "Fazer compras conscientes e não por impulso;",
      ],
      [
        "Combinar cores de forma harmoniosa;",
        "Fazer com que a escolha matinal do seu look se torne simples e intuitiva e não mais um momento stressante do seu dia;",
        "Evitar erro cromáticos e o medo de usar cor.",
      ],
    ],
    labelsSlide: [
      "plano de identidade visual",
      "coloração pessoal",
      "primeira visita ao guarda-roupa do cliente",
      "segunda visita ao guarda-roupa do cliente",
      "book digital",
    ],
    imgSlideSize: 1,
    duration: 0,
  },
  cp: {
    consultancyId: "cp",
    slideText: [
      [
        "Acompanhamento personalizado até ao objectivo definido;",
        "Aumento da autoimagem e autoestima;",
        "Fazer compras conscientes e não por impulso; Combinar cores de forma harmoniosa;",
      ],
      [
        "Evitar erros cromáticos e o medo de usar cor;",
        "Serviço desenhado individualmente à medida das suas necessidades;",
        "Organizar e coordenar o seu guarda-roupa;",
      ],
      [
        "Ter consciência da mudança que a Consultoria de Imagem fará na sua vida enquanto ferramenta facilitadora;",
        "Fazer com que a escolha matinal do seu look se torne simples e intuitiva e não mais um momento stressante do seu dia.",
      ],
    ],
    labelsSlide: [
      "teste de cores através do método sazonal expandido",
      "identificação da paleta cromática",
      "identificação de maquilhagem e acessórios",
      "maquilhagem profissional",
      "entrega de paleta cromática digital",
    ],
    imgSlideSize: 4,
    duration: 0,
  },
  af: {
    consultancyId: "af",
    slideText: [
      [
        "Protagonismo do rosto na imagem;",
        "Os elementos de design na harmonização facial ( cabelo, armações, maquilhagem, acessórios;",
        "Conhecer os seus traços faciais como ferramenta de comunicação visual;",
      ],
      [
        "Compreensão e estudo da anatomia do rosto;",
        "Percepção ruídos e desejos de imagem.",
      ],
    ],
    labelsSlide: [
      "entrevista",
      "coloração pessoal",
      "análise facial detalhada",
      "propostas de elementos design(cabelo, armações, acessórios, roupa, maquilhagem)",
      "book digital",
    ],
    imgSlideSize: 2,
    duration: 0,
  },
  ps: {
    consultancyId: "ps",
    slideText: [
      [
        "Compras mais inteligentes e conscientes, aprendendo a investir nas peças certas e deixando de fazer compras por impulso desperdiçando dinheiro em peças inúteis ou que não o favoreçam;",
        "Escolhas baseadas em objectivos previamente estabelecidos pelo cliente fará com que as escolhas sejam em função do seu estilo de vida e tipo de corpo;",
        "Conhecendo o seu corpo fará escolhas mais acertadas;",
      ],
      [
        "Passará a visualizar as compras como um momento de prazer e não de stress.",
      ],
    ],
    labelsSlide: [
      "plano de identidade visual",
      "acompanhamento personalizado nas compras ou podemos fazer as compras por si",
      "aconselhamento de ajustes e proporções",
    ],
    imgSlideSize: 7,
    duration: 2,
  },
  cd: {
    consultancyId: "cd",
    slideText: [
      [
        'Organizar e limpar o seu armário de toda a "poluição" visual, para que o mesmo possa ser coerente, prático e faça sentido de modo a maximizar o seu potencial;',
        "Muita roupa não implica necessariamente um guarda-roupa inteligente e adequado ao seu estilo e personalidade;",
        "Identificar o seu guarda-roupa cápsula, transformando o seu armário com os alicerces certos para um guarda-roupa funcional e de sucesso.",
      ],
    ],
    labelsSlide: [
      "deslocação a casa da cliente para uma triagem do guarda-roupa",
      "organização de vários looks fotografados para colocar no armário (profissional, lazer, eventos)",
      "organização por peças e por tons ",
      "elaboração de uma lista de compras com os possíveis itens em falta no guarda-roupa",
    ],
    imgSlideSize: 1,
    duration: 3,
  },
  cn: {
    consultancyId: "cn",
    slideText: [],
    labelsSlide: [],
    imgSlideSize: 14,
    duration: 0,
  },
  ceo: {
    consultancyId: "ceo",
    slideText: [],
    labelsSlide: [],
    imgSlideSize: 4,
    duration: 0,
  },
  fp: {
    consultancyId: "fp",
    slideText: [],
    labelsSlide: [],
    imgSlideSize: 3,
    duration: 0,
  },
  mp: {
    consultancyId: "mp",
    slideText: [],
    labelsSlide: [],
    imgSlideSize: 4,
    duration: 0,
  },
};

export const consultancyData: {
  [key: string]: {
    color: string;
    variant: "double" | "single";
    leftInfoBox?: InfoBoxProps;
    rightInfoBox?: InfoBoxProps;
    centerInfoBox?: InfoBoxProps;
  };
} = {
  "ce-it": {
    color: "blue",
    variant: "double",
    leftInfoBox: {
      title: "Consultoria de Estilo",
      to: "ce",
      consultancyID: "ce-it",
    },
    rightInfoBox: { title: "Imagem Total", to: "it", consultancyID: "ce-it" },
  },
  cp: {
    color: "red",
    variant: "single",
    centerInfoBox: {
      title: "Coloração Pessoal",
      to: "cp",
      consultancyID: "cp",
    },
  },
  af: {
    color: "green",
    variant: "single",
    centerInfoBox: { title: "Análise Facial", to: "af", consultancyID: "af" },
  },
  ps: {
    color: "orange",
    variant: "single",
    centerInfoBox: {
      title: "Personal Shopping",
      to: "ps",
      consultancyID: "ps",
    },
  },
  cd: {
    color: "pink",
    variant: "single",
    centerInfoBox: { title: "Closet Detox", to: "cd", consultancyID: "cd" },
  },
  cn: {
    color: "yellow",
    variant: "single",
    centerInfoBox: {
      title: "Consultoria de Noivos",
      to: "cn",
      consultancyID: "cn",
    },
  },
  ceo: {
    color: "purple",
    variant: "single",
    centerInfoBox: {
      title: "Consultoria Escolha de Óculos",
      to: "ceo",
      consultancyID: "ceo",
    },
  },
  fp: {
    color: "brown",
    variant: "single",
    centerInfoBox: {
      title: "Formações e Palestras",
      to: "fp",
      consultancyID: "fp",
    },
  },
  mp: {
    color: "turquoise",
    variant: "single",
    centerInfoBox: {
      title: "Maquilhagem Profissional",
      to: "mp",
      consultancyID: "mp",
    },
  },
};
