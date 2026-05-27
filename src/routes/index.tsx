import { createFileRoute } from "@tanstack/react-router";
import {
  Leaf,
  BadgeCheck,
  Sparkles,
  Wine,
  Coffee,
  Cake,
  Gift,
  Instagram,
  MessageCircle,
  Menu,
  ArrowRight,
} from "lucide-react";
import heroImg from "../assets/hero.jpg";
import aboutImg from "../assets/about.jpg";
import orangeImg from "../assets/orange.jpg";
import lemonImg from "../assets/lemon.jpg";
import appleImg from "../assets/apple.jpg";
import kiwiImg from "../assets/kiwi.jpg";
import cocktailImg from "../assets/cocktail.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const menuItems = ["Home", "Sobre", "Produtos", "Como Usar", "Pedidos", "Contato"];

const features = [
  { icon: Leaf, title: "100% NATURAL", desc: "Sem conservantes ou aditivos" },
  { icon: Sparkles, title: "FEITAS À MÃO", desc: "Processo artesanal e cuidadoso" },
  { icon: BadgeCheck, title: "ALTA QUALIDADE", desc: "Selecionamos apenas as melhores frutas" },
  { icon: Wine, title: "VERSÁTEIS", desc: "Perfeitas para drinks, doces e decorações" },
];

const products = [
  { name: "LARANJA", desc: "Doce e cítrica na medida certa. Ideal para drinks clássicos.", img: orangeImg },
  { name: "LIMÃO", desc: "Leve e refrescante. Destaque para gin tônicas.", img: lemonImg },
  { name: "MAÇÃ", desc: "Suave e adocicada. Perfeita para drinks e chás.", img: appleImg },
  { name: "KIWI", desc: "Exótica e vibrante. Cor e sabor que impressionam.", img: kiwiImg },
];

const usages = [
  { icon: Wine, title: "DRINKS", desc: "Dão um toque especial e sofisticado." },
  { icon: Coffee, title: "CHÁS", desc: "Mais sabor e aroma para seus momentos." },
  { icon: Cake, title: "DOCES E CONFEITARIA", desc: "Decore e surpreenda com beleza natural." },
  { icon: Gift, title: "PRESENTES", desc: "Encante com kits artesanais." },
];

function Index() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--bg)" }}>
      {/* Top bar */}
      <div className="gradient-green text-[#F5E6D3] text-xs tracking-widest">
        <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-between">
          <div className="hidden md:flex gap-8">
            <span>100% NATURAL</span>
            <span>·</span>
            <span>SEM CONSERVANTES</span>
            <span>·</span>
            <span>PRODUZIDO COM CUIDADO</span>
          </div>
          <div className="md:hidden">100% NATURAL · ARTESANAL</div>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Instagram" className="hover:text-white transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" aria-label="WhatsApp" className="hover:text-white transition-colors">
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-40 backdrop-blur-md" style={{ backgroundColor: "rgba(247,242,236,0.92)" }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div
              className="w-11 h-11 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "var(--secondary)" }}
            >
              <span className="text-white text-lg font-heading font-bold">F</span>
            </div>
            <div className="leading-tight">
              <div className="font-heading text-xl font-bold" style={{ color: "var(--primary-dark)" }}>
                Fruta Seca
              </div>
              <div className="text-[10px] tracking-[0.25em]" style={{ color: "var(--secondary)" }}>
                ARTESANAL
              </div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium hover:text-[var(--secondary)] transition-colors"
                style={{ color: "var(--text)" }}
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#pedidos"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-3 rounded-full text-white text-xs font-semibold tracking-wider transition-all hover:scale-105"
              style={{ backgroundColor: "var(--secondary)" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--secondary-hover)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--secondary)")}
            >
              <MessageCircle className="w-4 h-4" />
              FAÇA SEU PEDIDO
            </a>
            <button className="lg:hidden p-2" aria-label="Menu">
              <Menu className="w-6 h-6" style={{ color: "var(--primary-dark)" }} />
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative" style={{ minHeight: "90vh" }}>
        <img
          src={heroImg}
          alt="Frutas secas em uma tigela sobre mesa de madeira"
          width={1920}
          height={1280}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.55)" }} />
        <div className="relative max-w-7xl mx-auto px-6 py-32 lg:py-40 flex items-center" style={{ minHeight: "90vh" }}>
          <div className="max-w-2xl animate-fade-up">
            <span
              className="inline-block text-xs tracking-[0.3em] font-semibold mb-6 px-4 py-2 rounded-full border"
              style={{ color: "var(--gold)", borderColor: "rgba(217,154,78,0.4)" }}
            >
              FRUTAS REAIS. SABOR QUE ENCANTA.
            </span>
            <h1 className="font-heading text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
              Frutas secas para drinks e muito mais.
            </h1>
            <p className="text-white/85 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              Produzidas de forma artesanal, nossas frutas secas valorizam o sabor, a beleza e a
              sofisticação das suas criações.
            </p>
            <a
              href="#produtos"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white text-sm font-semibold tracking-wider transition-all hover:scale-105 shadow-elegant"
              style={{ backgroundColor: "var(--primary-mid)" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#3E6440")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--primary-mid)")}
            >
              CONHEÇA NOSSOS PRODUTOS
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Features bar */}
      <section className="max-w-7xl mx-auto px-6 -mt-12 relative z-10">
        <div className="gradient-green rounded-[20px] shadow-elegant px-8 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f) => (
            <div key={f.title} className="flex items-start gap-4 text-[#F5E6D3]">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "rgba(217,154,78,0.18)" }}
              >
                <f.icon className="w-6 h-6" style={{ color: "var(--gold)" }} />
              </div>
              <div>
                <div className="font-semibold text-sm tracking-wider mb-1">{f.title}</div>
                <div className="text-xs opacity-80 leading-relaxed">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="sobre" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div
              className="text-xs tracking-[0.3em] font-semibold mb-5"
              style={{ color: "var(--secondary)" }}
            >
              SOBRE NÓS
            </div>
            <h2
              className="font-heading text-4xl md:text-5xl font-bold leading-tight mb-6"
              style={{ color: "var(--primary-dark)" }}
            >
              Paixão por transformar frutas em experiências.
            </h2>
            <p className="text-base leading-relaxed mb-8 opacity-80">
              Somos uma pequena empresa dedicada à produção artesanal de frutas secas de alta
              qualidade. Nosso propósito é entregar mais que um produto: queremos levar sabor,
              beleza e praticidade para o seu dia a dia e para o seu negócio.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-3 px-7 py-4 rounded-full text-white text-xs font-semibold tracking-wider transition-all hover:scale-105"
              style={{ backgroundColor: "var(--primary-mid)" }}
            >
              SAIBA MAIS SOBRE NOSSA HISTÓRIA
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="relative">
            <div className="rounded-[18px] overflow-hidden shadow-elegant">
              <img
                src={aboutImg}
                alt="Fatia de laranja desidratada em mesa rústica"
                width={1024}
                height={1024}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div
              className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full flex flex-col items-center justify-center text-center p-4 shadow-elegant rotate-[-8deg]"
              style={{ backgroundColor: "var(--secondary)", color: "white" }}
            >
              <div className="text-[10px] tracking-[0.25em] font-semibold leading-tight">
                PRODUZIDO
                <br />
                COM AMOR
              </div>
              <div className="mt-2 w-8 h-px bg-white/60" />
              <div className="font-heading italic text-xs mt-2">desde 2024</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="produtos" className="py-24" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div
              className="text-xs tracking-[0.3em] font-semibold mb-4"
              style={{ color: "var(--secondary)" }}
            >
              NOSSOS PRODUTOS
            </div>
            <h2
              className="font-heading text-4xl md:text-5xl font-bold leading-tight"
              style={{ color: "var(--primary-dark)" }}
            >
              Frutas que elevam o seu drink.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {products.map((p) => (
              <article
                key={p.name}
                className="bg-white rounded-[18px] overflow-hidden border shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-elegant group"
                style={{ borderColor: "var(--border-soft)" }}
              >
                <div className="aspect-square overflow-hidden bg-[#FAF6F0]">
                  <img
                    src={p.img}
                    alt={`Frutas secas de ${p.name.toLowerCase()}`}
                    width={800}
                    height={800}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3
                    className="font-heading text-xl font-bold mb-2 tracking-wide"
                    style={{ color: "var(--primary-dark)" }}
                  >
                    {p.name}
                  </h3>
                  <p className="text-sm opacity-75 leading-relaxed mb-5 min-h-[3rem]">{p.desc}</p>
                  <a
                    href="#pedidos"
                    className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider transition-colors"
                    style={{ color: "var(--secondary)" }}
                  >
                    FAZER PEDIDO <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-14">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider border-b-2 pb-1 transition-colors"
              style={{ color: "var(--primary-dark)", borderColor: "var(--secondary)" }}
            >
              VER TODOS OS PRODUTOS
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Usage */}
      <section id="como-usar" className="py-24 gradient-green">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div
              className="text-xs tracking-[0.3em] font-semibold mb-4"
              style={{ color: "var(--gold)" }}
            >
              COMO USAR
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight text-[#F5E6D3] mb-10">
              Infinitas formas de surpreender.
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {usages.map((u) => (
                <div key={u.title} className="flex items-start gap-4 text-[#F5E6D3]">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(217,154,78,0.18)" }}
                  >
                    <u.icon className="w-5 h-5" style={{ color: "var(--gold)" }} />
                  </div>
                  <div>
                    <div className="font-semibold text-sm tracking-wider mb-1">{u.title}</div>
                    <div className="text-xs opacity-80 leading-relaxed">{u.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-[18px] overflow-hidden shadow-elegant max-w-md mx-auto lg:ml-auto">
            <img
              src={cocktailImg}
              alt="Drink de laranja com fatia desidratada"
              width={1024}
              height={1280}
              loading="lazy"
              className="w-full h-[560px] object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="pedidos" className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2
            className="font-heading text-4xl md:text-5xl font-bold leading-tight mb-6"
            style={{ color: "var(--primary-dark)" }}
          >
            Pronto para elevar suas criações?
          </h2>
          <p className="text-base opacity-75 mb-10 max-w-xl mx-auto">
            Faça seu pedido pelo WhatsApp e receba frutas secas artesanais frescas, com todo o
            cuidado da nossa produção.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white text-sm font-semibold tracking-wider transition-all hover:scale-105 shadow-elegant"
            style={{ backgroundColor: "var(--secondary)" }}
          >
            <MessageCircle className="w-5 h-5" />
            FALAR NO WHATSAPP
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: "#1B1B1B", color: "#D6D6D6" }}>
        <div className="max-w-7xl mx-auto px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "var(--secondary)" }}
              >
                <span className="text-white font-heading font-bold">F</span>
              </div>
              <div>
                <div className="font-heading text-lg text-white">Fruta Seca</div>
                <div className="text-[10px] tracking-[0.25em]" style={{ color: "var(--secondary)" }}>
                  ARTESANAL
                </div>
              </div>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              Frutas secas artesanais, produzidas com cuidado para quem valoriza sabor e
              sofisticação.
            </p>
          </div>

          {[
            { title: "Empresa", links: ["Sobre", "Produtos", "Contato"] },
            { title: "Atendimento", links: ["WhatsApp", "Instagram", "Pedidos"] },
            { title: "Informações", links: ["Entrega", "Política de Privacidade", "Termos"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-heading text-white text-base mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm opacity-70 hover:opacity-100 hover:text-[var(--secondary)] transition-all">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs opacity-60">
            <div>© 2026 Fruta Seca Artesanal. Todos os direitos reservados.</div>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="hover:opacity-100"><Instagram className="w-4 h-4" /></a>
              <a href="#" aria-label="WhatsApp" className="hover:opacity-100"><MessageCircle className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
