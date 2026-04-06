import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria S.",
    city: "João Pessoa",
    text: "O melhor corte que já fiz, profissional incrível!",
    service: "Corte feminino",
    rating: 5,
  },
  {
    name: "Ana L.",
    city: "João Pessoa",
    text: "Atendimento maravilhoso e resultado perfeito.",
    service: "Escova",
    rating: 5,
  },
  {
    name: "Carla M.",
    city: "João Pessoa",
    text: "Ambiente confortável e equipe excelente.",
    service: "Hidratação",
    rating: 5,
  },
  {
    name: "Juliana R.",
    city: "João Pessoa",
    text: "Especialista de verdade! Meu cabelo nunca esteve tão bonito.",
    service: "Coloração",
    rating: 5,
  },
  {
    name: "Fernanda P.",
    city: "João Pessoa",
    text: "Amei o resultado da progressiva, fios super alinhados.",
    service: "Progressiva",
    rating: 5,
  },
  {
    name: "Beatriz G.",
    city: "João Pessoa",
    text: "Melhor salão dos Estados. Atendimento nota 10.",
    service: "Corte feminino",
    rating: 5,
  },
  {
    name: "Patrícia V.",
    city: "João Pessoa",
    text: "Fiz manicure e pedicure, trabalho impecável.",
    service: "Manicure",
    rating: 5,
  },
  {
    name: "Renata K.",
    city: "João Pessoa",
    text: "Maquiagem perfeita para o meu evento. Recomendo!",
    service: "Maquiagem",
    rating: 5,
  },
  {
    name: "Sofia B.",
    city: "João Pessoa",
    text: "Corte masculino moderno e muito bem feito.",
    service: "Corte masculino",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-bg-site overflow-hidden">
      <div className="container mx-auto px-6 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-serif mb-6">O que nossas clientes dizem</h2>
        <p className="text-primary/60 text-lg max-w-2xl mx-auto">A satisfação de quem confia sua beleza em nossas mãos é o nosso maior prêmio.</p>
      </div>

      <div className="relative flex flex-col gap-8">
        {/* Row 1 */}
        <div className="flex gap-8 animate-marquee whitespace-nowrap">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="inline-block w-[350px] bg-white p-8 rounded-3xl shadow-premium border border-primary/5 whitespace-normal"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-accent text-accent" />
                ))}
              </div>
              <Quote size={32} className="text-accent/20 mb-4" />
              <p className="text-primary/80 italic mb-6 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-primary">{t.name}</h4>
                  <span className="text-xs text-primary/40">{t.city}</span>
                </div>
                <span className="px-3 py-1 bg-secondary rounded-full text-[10px] font-bold uppercase tracking-wider text-accent">
                  {t.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 - Reverse */}
        <div className="flex gap-8 animate-marquee-reverse whitespace-nowrap">
          {[...testimonials, ...testimonials].reverse().map((t, i) => (
            <div
              key={i}
              className="inline-block w-[350px] bg-white p-8 rounded-3xl shadow-premium border border-primary/5 whitespace-normal"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-accent text-accent" />
                ))}
              </div>
              <Quote size={32} className="text-accent/20 mb-4" />
              <p className="text-primary/80 italic mb-6 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-primary">{t.name}</h4>
                  <span className="text-xs text-primary/40">{t.city}</span>
                </div>
                <span className="px-3 py-1 bg-secondary rounded-full text-[10px] font-bold uppercase tracking-wider text-accent">
                  {t.service}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 40s linear infinite;
        }
        .animate-marquee:hover, .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
