import React, { useCallback } from "react";
import { useHistory } from "react-router";
import { colorToConsulting } from "../data/colorToConsulting";

interface ChameleonParameters {
  id?: string;
}
const Chameleon: React.FC<ChameleonParameters> = ({
  id = "main-chameleon",
}) => {
  const history = useHistory();
  const redirect = useCallback(
    (path: string) => {
      return history.push("/consultorias/" + path);
    },
    [history]
  );

  return (
    <div
      id={id}
      style={{ position: "relative", width: "100%", height: "100%" }}
    >
      {/* Chameleon Head */}
      <svg
        id="Chameleon"
        data-name="Chameleon"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 1070.16 834.82"
      >
        <defs>
          <linearGradient
            id="linear-gradient"
            x1="6549.31"
            y1="258.35"
            x2="6558.16"
            y2="244.36"
            gradientTransform="matrix(-1, 0, 0, 1, 7032.15, 0)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#e6e7e8" />
            <stop offset="1" stopColor="#bcbec0" />
          </linearGradient>
          <linearGradient
            id="linear-gradient-2"
            x1="6565.03"
            y1="222.43"
            x2="6540.48"
            y2="209.3"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-3"
            x1="6493.01"
            y1="187.49"
            x2="6547.46"
            y2="187.49"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-4"
            x1="6476.53"
            y1="146.33"
            x2="6573.08"
            y2="146.33"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-5"
            x1="6475.89"
            y1="122.68"
            x2="6528.34"
            y2="122.68"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-6"
            x1="6432.04"
            y1="178.48"
            x2="6450.66"
            y2="165.64"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-7"
            x1="6418.95"
            y1="116.91"
            x2="6402.03"
            y2="113.7"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-8"
            x1="6396.04"
            y1="187.15"
            x2="6367.56"
            y2="171.74"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-9"
            x1="6424.81"
            y1="222.3"
            x2="6417.32"
            y2="186.34"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-10"
            x1="6427.93"
            y1="260.06"
            x2="6465.08"
            y2="260.06"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-11"
            x1="6430.07"
            y1="286.15"
            x2="6465.08"
            y2="286.15"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-12"
            x1="6409.38"
            y1="272.21"
            x2="6427.93"
            y2="272.21"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-13"
            x1="6466.95"
            y1="202.61"
            x2="6461.6"
            y2="172.42"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-14"
            x1="6495.19"
            y1="263.95"
            x2="6482.77"
            y2="237.19"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-15"
            x1="6576.39"
            y1="196.63"
            x2="6579.17"
            y2="175.11"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-16"
            x1="6620.44"
            y1="224.83"
            x2="6636.85"
            y2="214.55"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-17"
            x1="6637.04"
            y1="184.6"
            x2="6635.22"
            y2="168.33"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-18"
            x1="6573.08"
            y1="136.27"
            x2="6638.59"
            y2="136.27"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-19"
            x1="6588.61"
            y1="169.08"
            x2="6604.13"
            y2="157.84"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-20"
            x1="6316.71"
            y1="229.92"
            x2="6367.97"
            y2="194.55"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-21"
            x1="6306.42"
            y1="253.99"
            x2="6313"
            y2="234.23"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-22"
            x1="6389.01"
            y1="279.85"
            x2="6368.13"
            y2="237.61"
            xlinkHref="#linear-gradient"
          />
        </defs>
        <title>logotipos Paula</title>
        <polygon
          className="cls-1"
          fill="#d1d3d4"
          points="429.31 243.1 457.78 264.93 454.68 245.56 429.31 243.1"
        />
        <polygon
          className="cls-2"
          fill="url(#linear-gradient)"
          points="508.31 252.41 457.78 264.93 454.68 245.56 508.31 252.41"
        />
        <polygon
          className="cls-3"
          fill="#fff"
          points="508.31 252.41 457.78 264.93 487.11 276.92 508.31 252.41"
        />
        <polygon
          className="cls-4"
          fill="#e6e7e8"
          points="429.31 243.1 426.1 192.36 454.68 245.56 429.31 243.1"
        />
        <polygon
          className="cls-3"
          fill="#fff"
          points="508.31 252.41 426.1 192.36 454.68 245.56 508.31 252.41"
        />
        <polygon
          className="cls-5"
          fill="url(#linear-gradient-2)"
          points="508.31 252.41 426.1 192.36 495.39 215.87 508.31 252.41"
        />
        <polygon
          className="cls-3"
          fill="#fff"
          points="484.69 195.22 426.1 192.36 495.39 215.87 484.69 195.22"
        />
        <polygon
          className="cls-4"
          fill="#e6e7e8"
          points="484.69 195.22 539.13 196.43 495.39 215.87 484.69 195.22"
        />
        <polygon
          className="cls-6"
          fill="url(#linear-gradient-3)"
          points="484.69 195.22 539.13 196.43 515.69 178.55 484.69 195.22"
        />
        <polygon
          className="cls-4"
          fill="#e6e7e8"
          points="555.62 159.39 539.13 196.43 515.69 178.55 555.62 159.39"
        />
        <polygon
          className="cls-3"
          fill="#fff"
          points="555.62 159.39 459.07 144.41 515.69 178.55 555.62 159.39"
        />
        <polygon
          className="cls-7"
          fill="url(#linear-gradient-4)"
          points="555.62 159.39 459.07 144.41 506.38 133.28 555.62 159.39"
        />
        <polygon
          className="cls-3"
          fill="#fff"
          points="503.81 85.96 459.07 144.41 506.38 133.28 503.81 85.96"
        />
        <polygon
          className="cls-4"
          fill="#e6e7e8"
          points="503.81 85.96 555.62 159.39 506.38 133.28 503.81 85.96"
        />
        <polygon
          className="cls-8"
          fill="url(#linear-gradient-5)"
          points="503.81 85.96 555.62 159.39 556.26 125.46 503.81 85.96"
        />
        <polygon
          className="cls-3"
          fill="#fff"
          points="591.48 118.4 556.26 125.46 503.81 85.96 591.48 118.4"
        />
        <polygon
          className="cls-1"
          fill="#d1d3d4"
          points="591.48 118.4 555.62 159.39 556.26 125.46 591.48 118.4"
        />
        <polygon
          className="cls-4"
          fill="#e6e7e8"
          points="591.48 118.4 555.62 159.39 583.98 157.89 591.48 118.4"
        />
        <polygon
          className="cls-3"
          fill="#fff"
          points="591.48 118.4 612.13 146.33 583.98 157.89 591.48 118.4"
        />
        <polygon
          className="cls-9"
          fill="url(#linear-gradient-6)"
          points="590.62 212.38 612.13 146.33 583.98 157.89 590.62 212.38"
        />
        <polygon
          className="cls-4"
          fill="#e6e7e8"
          points="590.62 212.38 612.13 146.33 617.81 181.23 590.62 212.38"
        />
        <polygon
          className="cls-3"
          fill="#fff"
          points="664.15 133.28 612.13 146.33 617.81 181.23 664.15 133.28"
        />
        <polygon
          className="cls-4"
          fill="#e6e7e8"
          points="664.15 133.28 612.13 146.33 632.4 123.28 664.15 133.28"
        />
        <polygon
          className="cls-3"
          fill="#fff"
          points="664.15 133.28 622.27 85.96 632.4 123.28 664.15 133.28"
        />
        <polygon
          className="cls-10"
          fill="url(#linear-gradient-7)"
          points="612.13 146.33 622.27 85.96 632.4 123.28 612.13 146.33"
        />
        <polygon
          className="cls-1"
          fill="#d1d3d4"
          points="664.15 133.28 624.01 232.39 617.81 181.23 664.15 133.28"
        />
        <polygon
          className="cls-11"
          fill="url(#linear-gradient-8)"
          points="664.15 133.28 624.01 232.39 671.81 164.61 664.15 133.28"
        />
        <polygon
          className="cls-3"
          fill="#fff"
          points="664.15 133.28 706.04 157.89 671.1 164.61 664.15 133.28"
        />
        <polygon
          className="cls-4"
          fill="#e6e7e8"
          points="624.01 232.39 706.04 157.89 671.1 164.61 624.01 232.39"
        />
        <polygon
          className="cls-12"
          fill="url(#linear-gradient-9)"
          points="590.62 212.38 624.01 232.39 617.81 181.23 590.62 212.38"
        />
        <polygon
          className="cls-3"
          fill="#fff"
          points="590.62 212.38 624.01 232.39 598.86 247.81 590.62 212.38"
        />
        <polygon
          className="cls-4"
          fill="#e6e7e8"
          points="590.62 212.38 567.07 272.32 598.86 247.81 590.62 212.38"
        />
        <polygon
          className="cls-13"
          fill="url(#linear-gradient-10)"
          points="604.21 267.29 567.07 272.32 598.86 247.81 604.21 267.29"
        />
        <polygon
          className="cls-3"
          fill="#fff"
          points="604.21 267.29 567.07 272.32 594.37 280.85 604.21 267.29"
        />
        <polygon
          className="cls-4"
          fill="#e6e7e8"
          points="604.21 267.29 602.07 299.97 594.37 280.85 604.21 267.29"
        />
        <polygon
          className="cls-14"
          fill="url(#linear-gradient-11)"
          points="567.07 272.32 602.07 299.97 594.37 280.85 567.07 272.32"
        />
        <polygon
          className="cls-1"
          fill="#d1d3d4"
          points="604.21 267.29 624.01 232.39 598.86 247.81 604.21 267.29"
        />
        <polygon
          className="cls-4"
          fill="#e6e7e8"
          points="604.21 267.29 624.01 232.39 614.99 264.01 604.21 267.29"
        />
        <polygon
          className="cls-3"
          fill="#fff"
          points="622.77 280.42 624.01 232.39 614.99 264.01 622.77 280.42"
        />
        <polygon
          className="cls-15"
          fill="url(#linear-gradient-12)"
          points="622.77 280.42 604.21 267.29 614.99 264.01 622.77 280.42"
        />
        <polygon
          className="cls-3"
          fill="#fff"
          points="590.62 212.38 555.62 159.39 583.98 157.89 590.62 212.38"
        />
        <polygon
          className="cls-16"
          fill="url(#linear-gradient-13)"
          points="590.62 212.38 555.62 159.39 539.13 196.43 590.62 212.38"
        />
        <polygon
          className="cls-1"
          fill="#d1d3d4"
          points="484.69 195.22 459.07 144.41 515.69 178.55 484.69 195.22"
        />
        <polygon
          className="cls-1"
          fill="#d1d3d4"
          points="508.31 252.41 539.13 196.43 495.39 215.87 508.31 252.41"
        />
        <polygon
          className="cls-4"
          fill="#e6e7e8"
          points="508.31 252.41 539.13 196.43 552.83 233.68 508.31 252.41"
        />
        <polygon
          className="cls-17"
          fill="url(#linear-gradient-14)"
          points="508.31 252.41 567.07 272.32 552.83 233.68 508.31 252.41"
        />
        <polygon
          className="cls-1"
          fill="#d1d3d4"
          points="590.62 212.38 567.07 272.32 552.83 233.68 590.62 212.38"
        />
        <polygon
          className="cls-3"
          fill="#fff"
          points="590.62 212.38 539.13 196.43 552.83 233.68 590.62 212.38"
        />
        <polygon
          className="cls-3"
          fill="#fff"
          points="453.71 174.52 426.1 192.36 459.07 144.41 453.71 174.52"
        />
        <polygon
          className="cls-4"
          fill="#e6e7e8"
          points="453.71 174.52 484.69 195.22 459.07 144.41 453.71 174.52"
        />
        <polygon
          className="cls-18"
          fill="url(#linear-gradient-15)"
          points="453.71 174.52 484.69 195.22 426.1 192.36 453.71 174.52"
        />
        <polygon
          className="cls-3"
          fill="#fff"
          points="364.37 174.52 395.24 207.45 426.1 192.36 364.37 174.52"
        />
        <polygon
          className="cls-4"
          fill="#e6e7e8"
          points="364.37 174.52 395.24 207.45 397.2 257.23 364.37 174.52"
        />
        <polygon
          className="cls-19"
          fill="url(#linear-gradient-16)"
          points="426.1 192.36 395.24 207.45 397.2 257.23 426.1 192.36"
        />
        <polygon
          className="cls-20"
          fill="url(#linear-gradient-17)"
          points="364.37 174.52 391.2 168.38 426.1 192.36 364.37 174.52"
        />
        <polygon
          className="cls-4"
          fill="#e6e7e8"
          points="393.56 143.12 391.2 168.38 426.1 192.36 393.56 143.12"
        />
        <polygon
          className="cls-3"
          fill="#fff"
          points="364.37 174.52 391.2 168.38 393.56 143.12 364.37 174.52"
        />
        <polygon
          className="cls-4"
          fill="#e6e7e8"
          points="459.07 144.41 393.56 143.12 426.1 159.39 459.07 144.41"
        />
        <polygon
          className="cls-3"
          fill="#fff"
          points="393.56 143.12 426.1 192.36 426.1 159.39 393.56 143.12"
        />
        <polygon
          className="cls-21"
          fill="url(#linear-gradient-18)"
          points="459.07 144.41 393.56 143.12 450.08 128.14 459.07 144.41"
        />
        <polygon
          className="cls-3"
          fill="#fff"
          points="503.81 85.96 393.56 143.12 450.08 128.14 503.81 85.96"
        />
        <polygon
          className="cls-4"
          fill="#e6e7e8"
          points="503.81 85.96 459.07 144.41 450.08 128.14 503.81 85.96"
        />
        <polygon
          className="cls-1"
          fill="#d1d3d4"
          points="429.31 243.1 397.2 257.23 426.1 192.36 429.31 243.1"
        />
        <polygon
          className="cls-22"
          fill="url(#linear-gradient-19)"
          points="459.07 144.41 426.1 192.36 426.1 159.39 459.07 144.41"
        />
        <polygon
          className="cls-23"
          fill="url(#linear-gradient-20)"
          points="624.01 232.39 706.04 157.89 742.57 215.05 624.01 232.39"
        />
        <polygon
          className="cls-3"
          fill="#fff"
          points="624.01 232.39 706.04 157.89 667.65 234.5 624.01 232.39"
        />
        <polygon
          className="cls-4"
          fill="#e6e7e8"
          points="692.92 265.27 706.04 157.89 667.65 234.5 692.92 265.27"
        />
        <polygon
          className="cls-4"
          fill="#e6e7e8"
          points="706.04 157.89 721.17 232.39 755.22 235.28 706.04 157.89"
        />
        <polygon
          className="cls-3"
          fill="#fff"
          points="706.04 157.89 721.17 232.39 692.92 265.27 706.04 157.89"
        />
        <polygon
          className="cls-24"
          fill="url(#linear-gradient-21)"
          points="756.06 235.28 721.17 232.39 692.92 265.27 756.06 235.28"
        />
        <polygon
          className="cls-4"
          fill="#e6e7e8"
          points="714.05 262.86 692.92 265.27 755.22 235.28 714.05 262.86"
        />
        <polygon
          className="cls-25"
          fill="url(#linear-gradient-22)"
          points="692.92 265.27 644.96 272.32 624.01 232.39 667.65 234.5 692.92 265.27"
        />
        <polygon
          className="cls-26"
          fill="#e0bf24"
          points="692.6 193.01 700.57 200.82 689.73 203.44 692.6 193.01"
        />
        <polygon
          className="cls-27"
          fill="#f2d145"
          points="693.48 209.43 700.57 200.82 689.73 203.44 693.48 209.43"
        />
        <polygon
          className="cls-26"
          fill="#e0bf24"
          points="693.48 209.43 700.57 200.82 707.69 209.4 693.48 209.43"
        />
        <polygon
          className="cls-28"
          fill="#9e732b"
          points="710.33 195.41 700.57 200.82 707.69 209.4 710.33 195.41"
        />
        <polygon
          className="cls-26"
          fill="#e0bf24"
          points="710.33 195.41 700.57 200.82 702.38 189.81 710.33 195.41"
        />
        <polygon
          className="cls-27"
          fill="#f2d145"
          points="692.6 193.01 700.57 200.82 702.38 189.81 692.6 193.01"
        />
        {/* Part 2 */}
        <polygon
          className="cls-1 "
          fill="#f2d145"
          points="364.37 174.52 364.37 215.87 335.33 219.98 364.37 174.52"
        />
        <polygon
          className="cls-2"
          fill="#9e732b"
          points="397.2 257.23 364.37 215.87 335.33 219.98 397.2 257.23"
        />
        <polygon
          className="cls-3"
          fill="#e0bf24"
          points="397.2 257.23 364.37 215.87 364.37 174.52 397.2 257.23"
        />
        <polygon
          className="cls-4"
          fill="#fff"
          points="364.37 174.52 391.2 168.38 393.56 143.12 364.37 174.52"
        />
        {/* Part 3 */}
        <polygon
          onClick={() => redirect(colorToConsulting.blue)}
          className="cls-1"
          fill="#27aae1"
          points="361.6 259.19 397.2 257.23 335.33 219.98 361.6 259.19"
        />
        <polygon
          onClick={() => redirect(colorToConsulting.blue)}
          className="cls-2"
          fill="#1d708e"
          points="361.6 259.19 397.2 257.23 378.79 284.84 361.6 259.19"
        />
        {/* Part 4 */}
        <polygon
          className="cls-1"
          fill="#64419a"
          points="341.25 298.4 304.93 311.39 335.33 219.98 341.25 298.4"
        />
        <polygon
          className="cls-2"
          fill="#552b83"
          points="341.25 298.4 304.93 311.39 347.1 334.51 341.25 298.4"
        />
        <polygon
          className="cls-3"
          fill="#2d0f46"
          points="341.25 298.4 378.79 284.84 347.1 334.51 341.25 298.4"
        />
        <polygon
          className="cls-4"
          fill="#503585"
          points="341.25 298.4 378.79 284.84 335.33 219.98 341.25 298.4"
        />
        {/* Part 5 */}
        <polygon
          className="cls-1"
          fill="#d66b27"
          points="333.4 351.21 304.93 311.39 311.76 385.45 333.4 351.21"
        />
        <polygon
          className="cls-2"
          fill="#ec7a23"
          points="333.4 351.21 304.93 311.39 347.1 334.51 333.4 351.21"
        />
        <polygon
          className="cls-3"
          fill="#aa4a25"
          points="333.4 351.21 348.82 369.4 347.1 334.51 333.4 351.21"
        />
        <polygon
          className="cls-4"
          fill="#99211f"
          points="333.4 351.21 348.82 369.4 311.76 385.45 333.4 351.21"
        />
        {/* Part 6 */}
        <polygon
          onClick={() => redirect(colorToConsulting.blue)}
          className="cls-1"
          fill="#02a7c1"
          points="349.89 397.88 354.6 436.63 311.76 385.45 349.89 397.88"
        />
        <polygon
          onClick={() => redirect(colorToConsulting.blue)}
          className="cls-2"
          fill="#02add3"
          points="349.89 397.88 348.82 369.4 311.76 385.45 349.89 397.88"
        />
        <polygon
          onClick={() => redirect(colorToConsulting.blue)}
          className="cls-3"
          fill="#088ab8"
          points="349.89 397.88 348.82 369.4 376.22 408.3 349.89 397.88"
        />
        <polygon
          onClick={() => redirect(colorToConsulting.blue)}
          className="cls-4"
          fill="#064c60"
          points="349.89 397.88 354.6 436.63 376.22 408.3 349.89 397.88"
        />
        {/* Part 7 */}
        <polygon
          className="cls-1"
          fill="#9e732b"
          points="400.73 426.56 354.6 436.63 433.67 453.53 400.73 426.56"
        />
        <polygon
          className="cls-2"
          fill="#ddbd35"
          points="400.73 426.56 354.6 436.63 376.22 408.3 400.73 426.56"
        />
        <polygon
          className="cls-3"
          fill="#f2d145"
          points="400.73 426.56 429.95 421.21 376.22 408.3 400.73 426.56"
        />
        <polygon
          className="cls-4"
          fill="#e0bf24"
          points="400.73 426.56 429.95 421.21 433.67 453.53 400.73 426.56"
        />
        {/* Part 8 */}
        <polygon
          className="cls-1"
          fill="#871719"
          points="459.01 422.46 498.03 422.28 433.67 453.53 459.01 422.46"
        />
        <polygon
          className="cls-2"
          fill="#ce2435"
          points="459.01 422.46 429.95 421.21 433.67 453.53 459.01 422.46"
        />
        <polygon
          className="cls-3"
          fill="#e42836"
          points="459.01 422.46 429.95 421.21 476.41 395.31 459.01 422.46"
        />
        <polygon
          className="cls-4"
          fill="#c62026"
          points="459.01 422.46 498.03 422.28 476.41 395.31 459.01 422.46"
        />
        {/* Part 9 */}
        <polygon
          className="cls-1"
          fill="#028a61"
          points="476.41 395.31 498.03 422.28 495.57 381.18 476.41 395.31"
        />
        <polygon
          className="cls-2"
          fill="#00ae7e"
          points="476.41 395.31 492.36 361.91 495.57 381.18 476.41 395.31"
        />
        <polygon
          className="cls-3"
          fill="#079e70"
          points="521.58 365.12 492.36 361.91 495.57 381.18 521.58 365.12"
        />
        <polygon
          className="cls-4"
          fill="#037152"
          points="521.58 365.12 498.03 422.28 495.57 381.18 521.58 365.12"
        />
        {/* Part 10 */}
        <polygon
          className="cls-1"
          fill="#891d5b"
          points="492.36 361.91 513.23 315.46 521.58 365.12 492.36 361.91"
        />
        <polygon
          className="cls-2"
          fill="#c42b91"
          points="492.36 361.91 513.23 315.46 489.47 327.44 492.36 361.91"
        />
        {/* Part 11 */}
        <polygon
          className="cls-1"
          fill="#871719"
          points="489.47 327.44 513.23 315.46 487.11 276.92 489.47 327.44"
        />
        <polygon
          className="cls-2"
          fill="#e42836"
          points="489.47 327.44 471.48 296.83 487.11 276.92 489.47 327.44"
        />
        {/* Part 12 */}
        <polygon
          className="cls-1"
          fill="#f2d145"
          points="434.88 273.93 457.78 264.93 464.63 277.71 434.88 273.93"
        />
        <polygon
          className="cls-2"
          fill="#e0bf24"
          points="434.88 273.93 471.48 296.83 464.63 277.71 434.88 273.93"
        />
        <polygon
          className="cls-3"
          fill="#9e732b"
          points="487.11 276.92 471.48 296.83 464.63 277.71 487.11 276.92"
        />
        <polygon
          className="cls-4"
          fill="#ddbd35"
          points="487.11 276.92 457.78 264.93 464.63 277.71 487.11 276.92"
        />
        {/* Part 13 */}
        <polygon
          className="cls-1"
          fill="#a97c50"
          points="429.31 243.1 397.2 257.23 434.88 273.93 429.31 243.1"
        />
        <polygon
          className="cls-2"
          fill="#603913"
          points="429.31 243.1 457.78 264.93 434.88 273.93 429.31 243.1"
        />
        {/* Part 14 */}
        <polygon
          className="cls-1"
          fill="#8dc63f"
          points="378.79 284.84 397.2 257.23 406.46 279.46 378.79 284.84"
        />
        <polygon
          className="cls-2"
          fill="#547836"
          points="434.88 273.93 397.2 257.23 406.46 279.46 434.88 273.93"
        />
      </svg>
    </div>
  );
};

export default Chameleon;
