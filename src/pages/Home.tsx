import { FC, useEffect } from "react";
import { useAnimate, motion, AnimationProps, stagger } from "framer-motion";
import heroImage from "../assets/home-hero-image.jpg";
import useLayout from "../hooks/useLayout";

const diamond1Initial: AnimationProps["initial"] = {
  pathLength: 0,
  scale: 0.6,
};

const diamond2Initial: AnimationProps["initial"] = {
  pathLength: 0,
};

const headingMInitial: AnimationProps["initial"] = { opacity: 0, x: 490 };

const headingNInitial: AnimationProps["initial"] = { opacity: 0, x: -180 };

const headingLetterInitial: AnimationProps["initial"] = {
  opacity: 0,
  y: 150,
  clipPath: "inset(0 0 150 0)",
};

const subheadingInitial: AnimationProps["initial"] = {
  opacity: 0,
};

const heroImageInitial: AnimationProps["initial"] = {
  opacity: 0,
};

const Home: FC = () => {
  const { isHeaderVisible, toggleIsHeaderVisible } = useLayout();
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const animateHeroEntrance = async () => {
      await animate(
        "#diamond_1",
        { pathLength: 1 },
        { duration: 0.75, ease: "linear", delay: 0.5 }
      );
      await Promise.all([
        animate("#heading_m", { opacity: 1 }, { delay: 0.2 }),
        animate("#heading_n", { opacity: 1 }, { delay: 0.2 }),
      ]);
      await Promise.all([
        animate(
          "#diamond_1",
          { rotate: "45deg" },
          { ease: "easeOut", delay: 0.3 }
        ),
        animate("#heading_m", { x: 0 }, { ease: "easeOut", delay: 0.3 }),
        animate("#heading_n", { x: 0 }, { ease: "easeOut", delay: 0.3 }),
        animate(
          ".heading-letter",
          {
            opacity: 1,
            y: 0,
            clipPath: "inset(0 0 0 0)",
          },
          {
            duration: 0.3,
            ease: "easeOut",
            delay: stagger(0.02, { startDelay: 0.4 }),
          }
        ),
      ]);
      await animate("#diamond_1", { scale: 1 }, { ease: "easeOut" });
      await animate(
        "#hero_image",
        { opacity: 1 },
        { duration: 0.2, ease: "easeOut", delay: 0.1 }
      );
      await animate(
        "#diamond_2",
        { pathLength: 1 },
        { duration: 0.75, ease: "linear" }
      );
      await animate(
        "#hero_subheading",
        { opacity: 1 },
        { duration: 0.75, ease: "easeOut" }
      );
    };

    animateHeroEntrance().then(() => {
      if (!isHeaderVisible) toggleIsHeaderVisible();
    });
  }, [isHeaderVisible, toggleIsHeaderVisible, animate]);

  return (
    <div className="home" ref={scope}>
      <svg
        className="home__hero"
        width="1282"
        height="708"
        viewBox="0 0 1282 708"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="image_mask"
          maskUnits="userSpaceOnUse"
          style={{ maskType: "alpha" }}
          x="385"
          y="104"
          width="500"
          height="500"
        >
          <rect x="385" y="104" width="500" height="500" fill="#D9D9D9" />
        </mask>
        <g mask="url(#image_mask)">
          <motion.path
            id="diamond_1"
            d="M282.154 354L635 1.15369L987.846 354L635 706.846L282.154 354Z"
            stroke="#D2D2D2"
            initial={diamond1Initial}
          />
          <motion.rect
            id="hero_image"
            x="335"
            y="-23"
            width="600"
            height="753.769"
            fill="url(#hero_pattern)"
            initial={heroImageInitial}
          />
        </g>
        <motion.path
          id="diamond_2"
          d="M282.154 354L635 1.15369L987.846 354L635 706.846L282.154 354Z"
          stroke="#D2D2D2"
          initial={diamond2Initial}
        />
        <motion.path
          id="heading_m"
          d="M147.3 432V285.48L78 401.2H74.48L5.18003 285.48V432H0.780029V275.8H4.30003L76.24 395.92L148.18 275.8H151.7V432H147.3Z"
          fill="#F2F2F2"
          initial={headingMInitial}
        />
        <motion.path
          id="heading_n"
          d="M834.692 284.38V432H830.292V275.8H833.592L953.052 425.62V275.8H957.452V432H952.392L834.692 284.38Z"
          fill="#F2F2F2"
          initial={headingNInitial}
        />
        <g>
          <motion.path
            className="heading-letter"
            d="M179.594 432L235.254 313.2H239.214L294.654 432H289.814L270.234 390.2H204.234L184.434 432H179.594ZM237.234 319.36L205.774 386.02H268.474L237.234 319.36Z"
            fill="#F2F2F2"
            initial={headingLetterInitial}
          />
          <motion.path
            className="heading-letter"
            d="M321.951 432V313.42H326.351V432H321.951Z"
            fill="#F2F2F2"
            initial={headingLetterInitial}
          />
          <motion.path
            className="heading-letter"
            d="M442.502 329.92C439.276 326.547 435.902 323.907 432.382 322C428.862 319.947 425.049 318.553 420.942 317.82C416.836 316.94 412.216 316.5 407.082 316.5C392.856 316.5 382.516 318.993 376.062 323.98C369.609 328.967 366.382 335.713 366.382 344.22C366.382 349.647 367.776 353.973 370.562 357.2C373.349 360.427 377.676 363.067 383.542 365.12C389.409 367.027 397.036 368.86 406.422 370.62C415.956 372.38 424.169 374.433 431.062 376.78C437.956 378.98 443.236 382.133 446.902 386.24C450.716 390.2 452.622 395.7 452.622 402.74C452.622 407.58 451.596 411.907 449.542 415.72C447.489 419.387 444.482 422.54 440.522 425.18C436.562 427.673 431.796 429.58 426.222 430.9C420.796 432.22 414.562 432.88 407.522 432.88C397.256 432.88 388.089 431.413 380.022 428.48C371.956 425.4 364.476 420.78 357.582 414.62L360.662 411.54C364.916 415.5 369.389 418.8 374.082 421.44C378.922 423.933 384.129 425.84 389.702 427.16C395.276 428.48 401.289 429.14 407.742 429.14C419.916 429.14 429.669 427.013 437.002 422.76C444.482 418.507 448.222 411.98 448.222 403.18C448.222 397.46 446.682 392.84 443.602 389.32C440.669 385.653 436.049 382.72 429.742 380.52C423.582 378.32 415.589 376.34 405.762 374.58C396.376 372.82 388.382 370.913 381.782 368.86C375.329 366.66 370.416 363.653 367.042 359.84C363.669 356.027 361.982 350.82 361.982 344.22C361.982 337.327 363.816 331.533 367.482 326.84C371.296 322.147 376.576 318.627 383.322 316.28C390.069 313.787 397.916 312.54 406.862 312.54C415.076 312.54 422.262 313.64 428.422 315.84C434.582 317.893 440.156 321.487 445.142 326.62L442.502 329.92Z"
            fill="#F2F2F2"
            initial={headingLetterInitial}
          />
          <motion.path
            className="heading-letter"
            d="M533.893 432.88C525.093 432.88 517.027 431.193 509.693 427.82C502.36 424.447 495.98 419.9 490.553 414.18C485.273 408.46 481.167 402.007 478.233 394.82C475.447 387.633 474.053 380.227 474.053 372.6C474.053 364.68 475.52 357.127 478.453 349.94C481.533 342.753 485.787 336.373 491.213 330.8C496.64 325.08 502.947 320.607 510.133 317.38C517.467 314.153 525.387 312.54 533.893 312.54C542.693 312.54 550.76 314.3 558.093 317.82C565.427 321.193 571.66 325.813 576.793 331.68C582.073 337.4 586.107 343.853 588.893 351.04C591.827 358.08 593.293 365.267 593.293 372.6C593.293 380.52 591.753 388.147 588.673 395.48C585.74 402.667 581.56 409.12 576.133 414.84C570.853 420.413 564.547 424.813 557.213 428.04C550.027 431.267 542.253 432.88 533.893 432.88ZM478.453 372.6C478.453 379.787 479.773 386.753 482.413 393.5C485.2 400.247 489.087 406.26 494.073 411.54C499.06 416.673 504.927 420.78 511.673 423.86C518.42 426.94 525.827 428.48 533.893 428.48C542.107 428.48 549.587 426.867 556.333 423.64C563.08 420.413 568.873 416.16 573.713 410.88C578.553 405.453 582.293 399.44 584.933 392.84C587.573 386.24 588.893 379.493 588.893 372.6C588.893 365.267 587.5 358.3 584.713 351.7C581.927 344.953 578.04 339.013 573.053 333.88C568.067 328.6 562.2 324.42 555.453 321.34C548.853 318.26 541.667 316.72 533.893 316.72C525.68 316.72 518.127 318.333 511.233 321.56C504.487 324.787 498.62 329.113 493.633 334.54C488.793 339.82 485.053 345.76 482.413 352.36C479.773 358.96 478.453 365.707 478.453 372.6Z"
            fill="#F2F2F2"
            initial={headingLetterInitial}
          />
          <motion.path
            className="heading-letter"
            d="M630.14 321.78V432H625.74V313.2H629.04L725.84 425.18V313.42H730.24V432H725.4L630.14 321.78Z"
            fill="#F2F2F2"
            initial={headingLetterInitial}
          />
          <motion.path
            className="heading-letter"
            d="M1050.59 432.88C1041.79 432.88 1033.73 431.193 1026.39 427.82C1019.06 424.447 1012.68 419.9 1007.25 414.18C1001.97 408.46 997.866 402.007 994.933 394.82C992.146 387.633 990.753 380.227 990.753 372.6C990.753 364.68 992.219 357.127 995.153 349.94C998.233 342.753 1002.49 336.373 1007.91 330.8C1013.34 325.08 1019.65 320.607 1026.83 317.38C1034.17 314.153 1042.09 312.54 1050.59 312.54C1059.39 312.54 1067.46 314.3 1074.79 317.82C1082.13 321.193 1088.36 325.813 1093.49 331.68C1098.77 337.4 1102.81 343.853 1105.59 351.04C1108.53 358.08 1109.99 365.267 1109.99 372.6C1109.99 380.52 1108.45 388.147 1105.37 395.48C1102.44 402.667 1098.26 409.12 1092.83 414.84C1087.55 420.413 1081.25 424.813 1073.91 428.04C1066.73 431.267 1058.95 432.88 1050.59 432.88ZM995.153 372.6C995.153 379.787 996.473 386.753 999.113 393.5C1001.9 400.247 1005.79 406.26 1010.77 411.54C1015.76 416.673 1021.63 420.78 1028.37 423.86C1035.12 426.94 1042.53 428.48 1050.59 428.48C1058.81 428.48 1066.29 426.867 1073.03 423.64C1079.78 420.413 1085.57 416.16 1090.41 410.88C1095.25 405.453 1098.99 399.44 1101.63 392.84C1104.27 386.24 1105.59 379.493 1105.59 372.6C1105.59 365.267 1104.2 358.3 1101.41 351.7C1098.63 344.953 1094.74 339.013 1089.75 333.88C1084.77 328.6 1078.9 324.42 1072.15 321.34C1065.55 318.26 1058.37 316.72 1050.59 316.72C1042.38 316.72 1034.83 318.333 1027.93 321.56C1021.19 324.787 1015.32 329.113 1010.33 334.54C1005.49 339.82 1001.75 345.76 999.113 352.36C996.473 358.96 995.153 365.707 995.153 372.6Z"
            fill="#F2F2F2"
            initial={headingLetterInitial}
          />
          <motion.path
            className="heading-letter"
            d="M1142.44 432V313.42H1146.84V432H1142.44Z"
            fill="#F2F2F2"
            initial={headingLetterInitial}
          />
          <motion.path
            className="heading-letter"
            d="M1188.63 432V313.2H1240.99C1248.03 313.2 1254.26 315.033 1259.69 318.7C1265.12 322.22 1269.37 326.767 1272.45 332.34C1275.68 337.767 1277.29 343.487 1277.29 349.5C1277.29 355.513 1275.9 361.16 1273.11 366.44C1270.47 371.72 1266.73 376.047 1261.89 379.42C1257.05 382.793 1251.4 384.773 1244.95 385.36L1277.29 432H1272.01L1239.89 385.8H1193.03V432H1188.63ZM1193.03 381.4H1242.09C1248.4 381.4 1253.82 379.86 1258.37 376.78C1262.92 373.7 1266.44 369.74 1268.93 364.9C1271.42 359.913 1272.67 354.78 1272.67 349.5C1272.67 343.927 1271.28 338.72 1268.49 333.88C1265.7 329.04 1261.89 325.153 1257.05 322.22C1252.21 319.14 1246.78 317.6 1240.77 317.6H1193.03V381.4Z"
            fill="#F2F2F2"
            initial={headingLetterInitial}
          />
        </g>
        <motion.text
          id="hero_subheading"
          fill="#AAAAAA"
          xmlSpace="preserve"
          style={{
            whiteSpace: "pre",
            fontFamily: "Montserrat",
            fontSize: 20,
          }}
          letterSpacing="0em"
          initial={subheadingInitial}
        >
          <tspan x="1062" y="482.17">
            Interior design studio
          </tspan>
        </motion.text>
        <defs>
          <pattern
            id="hero_pattern"
            patternContentUnits="userSpaceOnUse"
            width="1"
            height="1"
          >
            <image href={heroImage} width={600} />
          </pattern>
        </defs>
      </svg>
    </div>
  );
};

export default Home;
