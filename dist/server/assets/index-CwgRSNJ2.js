import { Q as reactExports, I as jsxRuntimeExports } from "./server-DIpM3XnP.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};
const Icon = reactExports.forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => reactExports.createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);
const createLucideIcon = (iconName, iconNode) => {
  const Component = reactExports.forwardRef(
    ({ className, ...props }, ref) => reactExports.createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
const __iconNode$a = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$a);
const __iconNode$9 = [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const BadgeCheck = createLucideIcon("badge-check", __iconNode$9);
const __iconNode$8 = [
  ["path", { d: "M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8", key: "1w3rig" }],
  ["path", { d: "M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1", key: "n2jgmb" }],
  ["path", { d: "M2 21h20", key: "1nyx9w" }],
  ["path", { d: "M7 8v3", key: "1qtyvj" }],
  ["path", { d: "M12 8v3", key: "hwp4zt" }],
  ["path", { d: "M17 8v3", key: "1i6e5u" }],
  ["path", { d: "M7 4h.01", key: "1bh4kh" }],
  ["path", { d: "M12 4h.01", key: "1ujb9j" }],
  ["path", { d: "M17 4h.01", key: "1upcoc" }]
];
const Cake = createLucideIcon("cake", __iconNode$8);
const __iconNode$7 = [
  ["path", { d: "M10 2v2", key: "7u0qdc" }],
  ["path", { d: "M14 2v2", key: "6buw04" }],
  [
    "path",
    {
      d: "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",
      key: "pwadti"
    }
  ],
  ["path", { d: "M6 2v2", key: "colzsn" }]
];
const Coffee = createLucideIcon("coffee", __iconNode$7);
const __iconNode$6 = [
  ["path", { d: "M12 7v14", key: "1akyts" }],
  ["path", { d: "M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8", key: "1sqzm4" }],
  [
    "path",
    { d: "M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5", key: "kc0143" }
  ],
  ["rect", { x: "3", y: "7", width: "18", height: "4", rx: "1", key: "1hberx" }]
];
const Gift = createLucideIcon("gift", __iconNode$6);
const __iconNode$5 = [
  ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5", key: "2e1cvw" }],
  ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" }],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }]
];
const Instagram = createLucideIcon("instagram", __iconNode$5);
const __iconNode$4 = [
  [
    "path",
    {
      d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
      key: "nnexq3"
    }
  ],
  ["path", { d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12", key: "mt58a7" }]
];
const Leaf = createLucideIcon("leaf", __iconNode$4);
const __iconNode$3 = [
  ["path", { d: "M4 5h16", key: "1tepv9" }],
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 19h16", key: "1djgab" }]
];
const Menu = createLucideIcon("menu", __iconNode$3);
const __iconNode$2 = [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
      key: "1sd12s"
    }
  ]
];
const MessageCircle = createLucideIcon("message-circle", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
      key: "1s2grr"
    }
  ],
  ["path", { d: "M20 2v4", key: "1rf3ol" }],
  ["path", { d: "M22 4h-4", key: "gwowj6" }],
  ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }]
];
const Sparkles = createLucideIcon("sparkles", __iconNode$1);
const __iconNode = [
  ["path", { d: "M8 22h8", key: "rmew8v" }],
  ["path", { d: "M7 10h10", key: "1101jm" }],
  ["path", { d: "M12 15v7", key: "t2xh3l" }],
  [
    "path",
    { d: "M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z", key: "10ffi3" }
  ]
];
const Wine = createLucideIcon("wine", __iconNode);
const heroImg = "/assets/hero-BJoClATF.jpg";
const aboutImg = "/assets/about-D0oqCQzz.jpg";
const orangeImg = "/assets/orange-DaFplPlS.jpg";
const lemonImg = "/assets/lemon-7uwz53ho.jpg";
const appleImg = "/assets/apple-BITdbnBE.jpg";
const kiwiImg = "/assets/kiwi-GdMZW2_e.jpg";
const cocktailImg = "/assets/cocktail-UTgm04f1.jpg";
const menuItems = ["Home", "Sobre", "Produtos", "Como Usar", "Pedidos", "Contato"];
const features = [{
  icon: Leaf,
  title: "100% NATURAL",
  desc: "Sem conservantes ou aditivos"
}, {
  icon: Sparkles,
  title: "FEITAS À MÃO",
  desc: "Processo artesanal e cuidadoso"
}, {
  icon: BadgeCheck,
  title: "ALTA QUALIDADE",
  desc: "Selecionamos apenas as melhores frutas"
}, {
  icon: Wine,
  title: "VERSÁTEIS",
  desc: "Perfeitas para drinks, doces e decorações"
}];
const products = [{
  name: "LARANJA",
  desc: "Doce e cítrica na medida certa. Ideal para drinks clássicos.",
  img: orangeImg
}, {
  name: "LIMÃO",
  desc: "Leve e refrescante. Destaque para gin tônicas.",
  img: lemonImg
}, {
  name: "MAÇÃ",
  desc: "Suave e adocicada. Perfeita para drinks e chás.",
  img: appleImg
}, {
  name: "KIWI",
  desc: "Exótica e vibrante. Cor e sabor que impressionam.",
  img: kiwiImg
}];
const usages = [{
  icon: Wine,
  title: "DRINKS",
  desc: "Dão um toque especial e sofisticado."
}, {
  icon: Coffee,
  title: "CHÁS",
  desc: "Mais sabor e aroma para seus momentos."
}, {
  icon: Cake,
  title: "DOCES E CONFEITARIA",
  desc: "Decore e surpreenda com beleza natural."
}, {
  icon: Gift,
  title: "PRESENTES",
  desc: "Encante com kits artesanais."
}];
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", style: {
    backgroundColor: "var(--bg)"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gradient-green text-[#F5E6D3] text-xs tracking-widest", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "100% NATURAL" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "·" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "SEM CONSERVANTES" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "·" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "PRODUZIDO COM CUIDADO" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden", children: "100% NATURAL · ARTESANAL" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "Instagram", className: "hover:text-white transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "w-4 h-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "WhatsApp", className: "hover:text-white transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-40 backdrop-blur-md", style: {
      backgroundColor: "rgba(247,242,236,0.92)"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 py-4 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-full flex items-center justify-center", style: {
          backgroundColor: "var(--secondary)"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white text-lg font-heading font-bold", children: "F" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leading-tight", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-heading text-xl font-bold", style: {
            color: "var(--primary-dark)"
          }, children: "Fruta Seca" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.25em]", style: {
            color: "var(--secondary)"
          }, children: "ARTESANAL" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex items-center gap-8", children: menuItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `#${item.toLowerCase()}`, className: "text-sm font-medium hover:text-[var(--secondary)] transition-colors", style: {
        color: "var(--text)"
      }, children: item }, item)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#pedidos", className: "hidden sm:inline-flex items-center gap-2 px-5 py-3 rounded-full text-white text-xs font-semibold tracking-wider transition-all hover:scale-105", style: {
          backgroundColor: "var(--secondary)"
        }, onMouseEnter: (e) => e.currentTarget.style.backgroundColor = "var(--secondary-hover)", onMouseLeave: (e) => e.currentTarget.style.backgroundColor = "var(--secondary)", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4" }),
          "FAÇA SEU PEDIDO"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "lg:hidden p-2", "aria-label": "Menu", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "w-6 h-6", style: {
          color: "var(--primary-dark)"
        } }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative", style: {
      minHeight: "90vh"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg, alt: "Frutas secas em uma tigela sobre mesa de madeira", width: 1920, height: 1280, className: "absolute inset-0 w-full h-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: {
        backgroundColor: "rgba(0,0,0,0.55)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative max-w-7xl mx-auto px-6 py-32 lg:py-40 flex items-center", style: {
        minHeight: "90vh"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl animate-fade-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block text-xs tracking-[0.3em] font-semibold mb-6 px-4 py-2 rounded-full border", style: {
          color: "var(--gold)",
          borderColor: "rgba(217,154,78,0.4)"
        }, children: "FRUTAS REAIS. SABOR QUE ENCANTA." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-heading text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6", children: "Frutas secas para drinks e muito mais." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/85 text-lg md:text-xl leading-relaxed mb-10 max-w-xl", children: "Produzidas de forma artesanal, nossas frutas secas valorizam o sabor, a beleza e a sofisticação das suas criações." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#produtos", className: "inline-flex items-center gap-3 px-8 py-4 rounded-full text-white text-sm font-semibold tracking-wider transition-all hover:scale-105 shadow-elegant", style: {
          backgroundColor: "var(--primary-mid)"
        }, onMouseEnter: (e) => e.currentTarget.style.backgroundColor = "#3E6440", onMouseLeave: (e) => e.currentTarget.style.backgroundColor = "var(--primary-mid)", children: [
          "CONHEÇA NOSSOS PRODUTOS",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "max-w-7xl mx-auto px-6 -mt-12 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gradient-green rounded-[20px] shadow-elegant px-8 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 text-[#F5E6D3]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0", style: {
        backgroundColor: "rgba(217,154,78,0.18)"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "w-6 h-6", style: {
        color: "var(--gold)"
      } }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-sm tracking-wider mb-1", children: f.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs opacity-80 leading-relaxed", children: f.desc })
      ] })
    ] }, f.title)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "sobre", className: "py-24 lg:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs tracking-[0.3em] font-semibold mb-5", style: {
          color: "var(--secondary)"
        }, children: "SOBRE NÓS" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-heading text-4xl md:text-5xl font-bold leading-tight mb-6", style: {
          color: "var(--primary-dark)"
        }, children: "Paixão por transformar frutas em experiências." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base leading-relaxed mb-8 opacity-80", children: "Somos uma pequena empresa dedicada à produção artesanal de frutas secas de alta qualidade. Nosso propósito é entregar mais que um produto: queremos levar sabor, beleza e praticidade para o seu dia a dia e para o seu negócio." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "inline-flex items-center gap-3 px-7 py-4 rounded-full text-white text-xs font-semibold tracking-wider transition-all hover:scale-105", style: {
          backgroundColor: "var(--primary-mid)"
        }, children: [
          "SAIBA MAIS SOBRE NOSSA HISTÓRIA",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-[18px] overflow-hidden shadow-elegant", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: aboutImg, alt: "Fatia de laranja desidratada em mesa rústica", width: 1024, height: 1024, loading: "lazy", className: "w-full h-full object-cover transition-transform duration-700 hover:scale-105" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -bottom-8 -left-8 w-36 h-36 rounded-full flex flex-col items-center justify-center text-center p-4 shadow-elegant rotate-[-8deg]", style: {
          backgroundColor: "var(--secondary)",
          color: "white"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] tracking-[0.25em] font-semibold leading-tight", children: [
            "PRODUZIDO",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "COM AMOR"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 w-8 h-px bg-white/60" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-heading italic text-xs mt-2", children: "desde 2024" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "produtos", className: "py-24", style: {
      backgroundColor: "var(--bg)"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs tracking-[0.3em] font-semibold mb-4", style: {
          color: "var(--secondary)"
        }, children: "NOSSOS PRODUTOS" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-heading text-4xl md:text-5xl font-bold leading-tight", style: {
          color: "var(--primary-dark)"
        }, children: "Frutas que elevam o seu drink." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7", children: products.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "bg-white rounded-[18px] overflow-hidden border shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-elegant group", style: {
        borderColor: "var(--border-soft)"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-square overflow-hidden bg-[#FAF6F0]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.img, alt: `Frutas secas de ${p.name.toLowerCase()}`, width: 800, height: 800, loading: "lazy", className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-heading text-xl font-bold mb-2 tracking-wide", style: {
            color: "var(--primary-dark)"
          }, children: p.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm opacity-75 leading-relaxed mb-5 min-h-[3rem]", children: p.desc }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#pedidos", className: "inline-flex items-center gap-2 text-xs font-semibold tracking-wider transition-colors", style: {
            color: "var(--secondary)"
          }, children: [
            "FAZER PEDIDO ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5" })
          ] })
        ] })
      ] }, p.name)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "inline-flex items-center gap-2 text-sm font-semibold tracking-wider border-b-2 pb-1 transition-colors", style: {
        color: "var(--primary-dark)",
        borderColor: "var(--secondary)"
      }, children: [
        "VER TODOS OS PRODUTOS",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "como-usar", className: "py-24 gradient-green", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs tracking-[0.3em] font-semibold mb-4", style: {
          color: "var(--gold)"
        }, children: "COMO USAR" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-heading text-4xl md:text-5xl font-bold leading-tight text-[#F5E6D3] mb-10", children: "Infinitas formas de surpreender." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-6", children: usages.map((u) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 text-[#F5E6D3]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0", style: {
            backgroundColor: "rgba(217,154,78,0.18)"
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(u.icon, { className: "w-5 h-5", style: {
            color: "var(--gold)"
          } }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-sm tracking-wider mb-1", children: u.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs opacity-80 leading-relaxed", children: u.desc })
          ] })
        ] }, u.title)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative rounded-[18px] overflow-hidden shadow-elegant max-w-md mx-auto lg:ml-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: cocktailImg, alt: "Drink de laranja com fatia desidratada", width: 1024, height: 1280, loading: "lazy", className: "w-full h-[560px] object-cover transition-transform duration-700 hover:scale-105" }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "pedidos", className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-heading text-4xl md:text-5xl font-bold leading-tight mb-6", style: {
        color: "var(--primary-dark)"
      }, children: "Pronto para elevar suas criações?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base opacity-75 mb-10 max-w-xl mx-auto", children: "Faça seu pedido pelo WhatsApp e receba frutas secas artesanais frescas, com todo o cuidado da nossa produção." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "inline-flex items-center gap-3 px-8 py-4 rounded-full text-white text-sm font-semibold tracking-wider transition-all hover:scale-105 shadow-elegant", style: {
        backgroundColor: "var(--secondary)"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-5 h-5" }),
        "FALAR NO WHATSAPP"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { style: {
      backgroundColor: "#1B1B1B",
      color: "#D6D6D6"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full flex items-center justify-center", style: {
              backgroundColor: "var(--secondary)"
            }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-heading font-bold", children: "F" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-heading text-lg text-white", children: "Fruta Seca" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.25em]", style: {
                color: "var(--secondary)"
              }, children: "ARTESANAL" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm opacity-70 leading-relaxed", children: "Frutas secas artesanais, produzidas com cuidado para quem valoriza sabor e sofisticação." })
        ] }),
        [{
          title: "Empresa",
          links: ["Sobre", "Produtos", "Contato"]
        }, {
          title: "Atendimento",
          links: ["WhatsApp", "Instagram", "Pedidos"]
        }, {
          title: "Informações",
          links: ["Entrega", "Política de Privacidade", "Termos"]
        }].map((col) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-heading text-white text-base mb-4", children: col.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5", children: col.links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "text-sm opacity-70 hover:opacity-100 hover:text-[var(--secondary)] transition-all", children: l }) }, l)) })
        ] }, col.title))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs opacity-60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "© 2026 Fruta Seca Artesanal. Todos os direitos reservados." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "Instagram", className: "hover:opacity-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "w-4 h-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "WhatsApp", className: "hover:opacity-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4" }) })
        ] })
      ] }) })
    ] })
  ] });
}
export {
  Index as component
};
