import { motion } from "motion/react";
import { Star, Scissors, MessageSquare, MapPin } from "lucide-react";

const badges = [
  {
    icon: <Star className="text-accent" size={24} />,
    title: "5.0 Estrelas",
    desc: "Mais de 400 avaliações",
  },
  {
    icon: <Scissors className="text-accent" size={24} />,
    title: "Especialista",
    desc: "Cortes profissionais",
  },
  {
    icon: <MessageSquare className="text-accent" size={24} />,
    title: "Atendimento",
    desc: "Elogiado pelos clientes",
  },
  {
    icon: <MapPin className="text-accent" size={24} />,
    title: "Localização",
    desc: "Estratégica em João Pessoa",
  },
];

export default function TrustBadges() {
  return (
    <section className="py-20 bg-bg-site relative z-20 -mt-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-3xl hover:bg-white hover:shadow-premium transition-all duration-500 group"
            >
              <div className="mb-4 p-4 rounded-2xl bg-secondary/30 group-hover:bg-accent/10 transition-colors">
                {badge.icon}
              </div>
              <h3 className="font-serif text-xl font-bold mb-1">{badge.title}</h3>
              <p className="text-sm text-primary/60 font-medium">{badge.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
