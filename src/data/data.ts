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
    slideText: string[][];
    photosSlide: {
      img: string;
      label: string;
    }[];
    duration: number;
    //TODO: smth about
  };
} = {
  ce: {
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
    photosSlide: [
      {
        img: "/assets/consultorias/ce-it/ce/ce2.jpeg",
        label: "entrevista",
      },
      {
        img: "/assets/consultorias/ce-it/ce/ce2.jpeg",
        label: "coloração pessoal",
      },
      {
        img: "/assets/consultorias/ce-it/ce/ce2.jpeg",
        label: "análise facial (básica)",
      },
      {
        img: "/assets/consultorias/ce-it/ce/ce2.jpeg",
        label: "análise de biótipo",
      },
      {
        img: "/assets/consultorias/ce-it/ce/ce2.jpeg",
        label: "book digital",
      },
    ],
    duration: 0,
  },
  it: {
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
    photosSlide: [
      {
        img: "",
        label: "plano de identidade visual",
      },
      {
        img: "",
        label: "coloração pessoal",
      },
      {
        img: "",
        label: "primeira visita ao guarda-roupa do cliente",
      },
      {
        img: "",
        label: "segunda visita ao guarda-roupa do cliente",
      },
      {
        img: "",
        label: "book digital",
      },
    ],
    duration: 0,
  },
  cp: {
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
    photosSlide: [
      {
        img: "",
        label: "teste de cores através do método sazonal expandido",
      },
      {
        img: "",
        label: "identificação da paleta cromática",
      },
      {
        img: "",
        label: "identificação de maquilhagem e acessórios",
      },
      {
        img: "",
        label: "maquilhagem profissional",
      },
      {
        img: "",
        label: "entrega de paleta cromática digital",
      },
    ],
    duration: 0,
  },
  af: {
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
    photosSlide: [
      {
        img: "",
        label: "entrevista",
      },
      {
        img: "",
        label: "coloração pessoal",
      },
      {
        img: "",
        label: "análise facial detalhada",
      },
      {
        img: "",
        label:
          "propostas de elementos design(cabelo, armações, acessórios, roupa, maquilhagem)",
      },
      {
        img: "",
        label: "book digital",
      },
    ],
    duration: 0,
  },
  ps: {
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
    photosSlide: [
      {
        img: "",
        label: "plano de identidade visual",
      },
      {
        img: "",
        label:
          "acompanhamento personalizado nas compras ou podemos fazer as compras por si",
      },
      {
        img: "",
        label: "aconselhamento de ajustes e proporções",
      },
    ],
    duration: 2,
  },
  cd: {
    slideText: [
      [
        'Organizar e limpar o seu armário de toda a "poluição" visual, para que o mesmo possa ser coerente, prático e faça sentido de modo a maximizar o seu potencial;',
        "Muita roupa não implica necessariamente um guarda-roupa inteligente e adequado ao seu estilo e personalidade;",
        "Identificar o seu guarda-roupa cápsula, transformando o seu armário com os alicerces certos para um guarda-roupa funcional e de sucesso.",
      ],
    ],
    photosSlide: [
      {
        img: "",
        label: "deslocação a casa da cliente para uma triagem do guarda-roupa",
      },
      {
        img: "",
        label:
          "organização de vários looks fotografados para colocar no armário (profissional, lazer, eventos)",
      },
      {
        img: "",
        label: "organização por peças e por tons ",
      },
      {
        img: "",
        label:
          "elaboração de uma lista de compras com os possíveis itens em falta no guarda-roupa",
      },
    ],
    duration: 3,
  },
  cn: {
    slideText: [],
    photosSlide: [],
    duration: 0,
  },
  ceo: {
    slideText: [],
    photosSlide: [],
    duration: 0,
  },
  fp: {
    slideText: [],
    photosSlide: [],
    duration: 0,
  },
  mp: {
    slideText: [],
    photosSlide: [],
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
    topRightPhotos: string[];
    bottomRightPhotos: string[];
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
    bottomRightPhotos: [],
    topRightPhotos: [],
  },
  cp: {
    color: "red",
    variant: "single",
    centerInfoBox: {
      title: "Coloração Pessoal",
      to: "cp",
      consultancyID: "cp",
    },
    bottomRightPhotos: [],
    topRightPhotos: [],
  },
  af: {
    color: "green",
    variant: "single",
    centerInfoBox: { title: "Análise Facial", to: "af", consultancyID: "af" },
    bottomRightPhotos: [],
    topRightPhotos: [],
  },
  ps: {
    color: "orange",
    variant: "single",
    centerInfoBox: {
      title: "Personal Shopping",
      to: "ps",
      consultancyID: "ps",
    },
    bottomRightPhotos: [],
    topRightPhotos: [],
  },
  cd: {
    color: "pink",
    variant: "single",
    centerInfoBox: { title: "Closet Detox", to: "cd", consultancyID: "cd" },
    bottomRightPhotos: [],
    topRightPhotos: [],
  },
  cn: {
    color: "yellow",
    variant: "single",
    centerInfoBox: {
      title: "Consultoria de Noivos",
      to: "cn",
      consultancyID: "cn",
    },
    bottomRightPhotos: [],
    topRightPhotos: [],
  },
  ceo: {
    color: "purple",
    variant: "single",
    centerInfoBox: {
      title: "Consultoria Escolha de Óculos",
      to: "ceo",
      consultancyID: "ceo",
    },
    bottomRightPhotos: [],
    topRightPhotos: [],
  },
  fp: {
    color: "brown",
    variant: "single",
    centerInfoBox: {
      title: "Formações e Palestras",
      to: "fp",
      consultancyID: "fp",
    },
    bottomRightPhotos: [],
    topRightPhotos: [],
  },
  mp: {
    color: "turquoise",
    variant: "single",
    centerInfoBox: {
      title: "Maquilhagem Profissional",
      to: "mp",
      consultancyID: "mp",
    },
    bottomRightPhotos: [],
    topRightPhotos: [],
  },
};
