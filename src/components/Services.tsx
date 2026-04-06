import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { MessageCircle, Scissors, Sparkles, Heart, Zap } from "lucide-react";

const categories = ["Todos", "Cabelo", "Estética", "Tratamentos"];

const services = [
  {
    id: 1,
    name: "Corte feminino",
    desc: "Estilo personalizado para realçar sua beleza.",
    price: "R$70",
    category: "Cabelo",
    badge: "Mais pedido",
    icon: <Scissors size={20} />,
  },
  {
    id: 2,
    name: "Corte masculino",
    desc: "Corte moderno e acabamento profissional.",
    price: "R$40",
    category: "Cabelo",
    badge: "Popular",
    icon: <Scissors size={20} />,
  },
  {
    id: 3,
    name: "Escova",
    desc: "Modelagem profissional para qualquer ocasião.",
    price: "R$50",
    category: "Cabelo",
    badge: "Popular",
    icon: <Sparkles size={20} />,
  },
  {
    id: 4,
    name: "Coloração",
    desc: "Técnicas avançadas de cor e brilho.",
    price: "R$120+",
    category: "Cabelo",
    badge: "Premium",
    icon: <Sparkles size={20} />,
  },
  {
    id: 5,
    name: "Hidratação",
    desc: "Tratamento capilar profundo e nutritivo.",
    price: "R$60",
    category: "Tratamentos",
    badge: "Popular",
    icon: <Heart size={20} />,
  },
  {
    id: 6,
    name: "Progressiva",
    desc: "Alisamento seguro e duradouro.",
    price: "R$180+",
    category: "Tratamentos",
    badge: "Mais pedido",
    icon: <Zap size={20} />,
  },
  {
    id: 7,
    name: "Manicure",
    desc: "Cuidados completos com as unhas.",
    price: "R$30",
    category: "Estética",
    badge: "Popular",
    icon: <Heart size={20} />,
  },
  {
    id: 8,
    name: "Pedicure",
    desc: "Tratamento completo para seus pés.",
    price: "R$35",
    category: "Estética",
    badge: "Popular",
    icon: <Heart size={20} />,
  },
  {
    id: 9,
    name: "Maquiagem",
    desc: "Para eventos e ocasiões especiais.",
    price: "R$100+",
    category: "Estética",
    badge: "Premium",
    icon: <Sparkles size={20} />,
  },
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredServices = services.filter(
    (s) => activeCategory === "Todos" || s.category === activeCategory
  );

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Nossos Serviços</h2>
            <p className="text-primary/60 text-lg">Oferecemos o que há de mais moderno no mundo da beleza para você se sentir radiante.</p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-lg"
                    : "bg-secondary text-primary hover:bg-accent/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group bg-bg-site p-8 rounded-3xl border border-primary/5 hover:border-accent/30 hover:shadow-premium transition-all duration-500"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-2xl bg-white text-accent shadow-sm group-hover:bg-accent group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary/40">
                      {service.category}
                    </span>
                    {service.badge && (
                      <span className="px-2 py-0.5 bg-accent/10 text-accent text-[9px] font-bold uppercase rounded-full">
                        {service.badge}
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-serif mb-3 group-hover:text-accent transition-colors">
                  {service.name}
                </h3>
                <p className="text-primary/60 text-sm mb-6 leading-relaxed">
                  {service.desc}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-primary/5">
                  <span className="font-bold text-primary">{service.price}</span>
                  <a
                    href={`https://wa.me/5583999999999?text=Olá! Gostaria de agendar o serviço: ${service.name}`}
                    className="flex items-center gap-2 text-sm font-bold text-accent hover:underline"
                  >
                    Agendar <MessageCircle size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
