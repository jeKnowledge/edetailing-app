import {
  IonContent,
  IonImg,
  IonLabel,
  IonPage,
  IonSlide,
  IonSlides,
} from "@ionic/react";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const slideTexts = [
  [
    "Identificar o seu estilo;",
    "Saber explorar os seus pontos fortes e camuflar os menos",
    "positivos;",
    "Acompanhamento personalizado até ao objetivo definido;",
    "Organizar e coordenar o seu guarda-roupa.",
  ],
  [
    "Aumento da autoimagem e autoestima",
    "Ter consciência da mudança que a Consultoria de Imagem fará na sua vida enquanto ferramenta facilitadora",
    "Fazer compras consistentes e não por impulso.",
  ],
  [
    "Fazer com que a escolha matinal do seu look se torne simples e intuitiva e não mais um momento stressante do seu dia",
    "Combinar cores de forma harmoniosa Evitar erros cromáticos e o medo de usar cor.",
  ],
];

const mod = (n: number, m: number): number => {
  return ((n % m) + m) % m;
};

const Consultoria: React.FC = () => {
  const imgs = useMemo(
    () => [
      {
        img: "/assets/consultorias/estilo_imagem_total/estilo/img_example.png",
        label: "ola",
      },
      {
        img: "/assets/consultorias/estilo_imagem_total/estilo/ex.png",
        label: "adeus",
      },
    ],
    []
  );

  const [currentImg, setCurrentImg] = useState<number>(0);
  const [currentTextSlide, setCurrentTextSlide] = useState<number>(0);
  const currentImgRef = useRef(currentImg);
  currentImgRef.current = currentImg;

  const forwardCurrentTextSlide = useCallback(() => {
    setCurrentTextSlide(mod(currentTextSlide + 1, slideTexts.length));
  }, [currentTextSlide]);

  const backwardCurrentTextSlide = useCallback(() => {
    setCurrentTextSlide(mod(currentTextSlide - 1, slideTexts.length));
  }, [currentTextSlide]);

  const updateSlideImage = useCallback(() => {
    setCurrentImg((currentImgRef.current + 1) % imgs.length);
  }, [imgs.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      updateSlideImage();
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [updateSlideImage]);

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding ion-content">
        <IonSlides>
          <IonSlide>
            <div className="slide-content">
              <div className="text-content text-content-esq">
                <div className="title-content title-content-esq">
                  <IonLabel className="title">benefícios</IonLabel>
                  <IonLabel className="title title-non-select">
                    o que inclui?
                  </IonLabel>
                </div>
              </div>
              <IonImg
                className="forma-branca forma-branca-esq"
                src="/assets/formas_consultorias_geral/forma_branca_esq.svg"
              />
              <div className="description-content">
                <div className="description">
                  {slideTexts[currentTextSlide].map((t) => (
                    <p className="description-text" key={t}>
                      {t}
                    </p>
                  ))}
                </div>
                <div className="setas">
                  <IonImg
                    onClick={backwardCurrentTextSlide}
                    className="setas-esq"
                    src="/assets/consultorias/estilo_imagem_total/seta_esq.svg"
                  />
                  <IonImg
                    onClick={forwardCurrentTextSlide}
                    className="setas-dir"
                    src="/assets/consultorias/estilo_imagem_total/seta_dir.svg"
                  />
                </div>
              </div>
            </div>
          </IonSlide>
          <IonSlide>
            <div className="slide-content">
              <IonImg
                className="forma-branca forma-branca-dir"
                src="/assets/formas_consultorias_geral/forma_branca_dir.svg"
              />
              <IonImg className="img-inclui" src={imgs[currentImg].img} />
              <span className="title title-dir">
                {/* plano de identidade visual */}
                {imgs[currentImg].label}
              </span>
              <div className="text-content text-content-dir">
                <div className="title-content title-content-dir">
                  <IonLabel className="title title-non-select">
                    benefícios
                  </IonLabel>
                  <IonLabel className="title">o que inclui?</IonLabel>
                </div>
              </div>
            </div>
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default Consultoria;
