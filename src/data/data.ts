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
    slideText: [],
    photosSlide: [],
    duration: 0,
  },
  it: {
    slideText: [],
    photosSlide: [],
    duration: 0,
  },
  cp: {
    slideText: [],
    photosSlide: [],
    duration: 0,
  },
  af: {
    slideText: [],
    photosSlide: [],
    duration: 0,
  },
  ps: {
    slideText: [],
    photosSlide: [],
    duration: 0,
  },
  cd: {
    slideText: [],
    photosSlide: [],
    duration: 0,
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
    leftInfoBox: { title: "Consultoria de Estilo", to: "ce" },
    rightInfoBox: { title: "Imagem Total", to: "it" },
    bottomRightPhotos: [],
    topRightPhotos: [],
  },
  cp: {
    color: "red",
    variant: "single",
    centerInfoBox: { title: "Coloração Pessoal", to: "cp" },
    bottomRightPhotos: [],
    topRightPhotos: [],
  },
  af: {
    color: "green",
    variant: "single",
    centerInfoBox: { title: "Análise Facial", to: "af" },
    bottomRightPhotos: [],
    topRightPhotos: [],
  },
  ps: {
    color: "orange",
    variant: "single",
    centerInfoBox: { title: "Personal Shopping", to: "ps" },
    bottomRightPhotos: [],
    topRightPhotos: [],
  },
  cd: {
    color: "pink",
    variant: "single",
    centerInfoBox: { title: "Closet Detox", to: "cd" },
    bottomRightPhotos: [],
    topRightPhotos: [],
  },
  cn: {
    color: "yellow",
    variant: "single",
    centerInfoBox: { title: "Consultoria de Noivos", to: "cn" },
    bottomRightPhotos: [],
    topRightPhotos: [],
  },
  ceo: {
    color: "purple",
    variant: "single",
    centerInfoBox: { title: "Consultoria Escolha de Óculos", to: "ceo" },
    bottomRightPhotos: [],
    topRightPhotos: [],
  },
  fp: {
    color: "brown",
    variant: "single",
    centerInfoBox: { title: "Formações e Palestras", to: "fp" },
    bottomRightPhotos: [],
    topRightPhotos: [],
  },
  mp: {
    color: "turquoise",
    variant: "single",
    centerInfoBox: { title: "Maquilhagem Profissional", to: "mp" },
    bottomRightPhotos: [],
    topRightPhotos: [],
  },
};
