import { motion } from "motion/react";
import { MessageCircle, CheckCircle, Zap, ShieldCheck } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-[3rem] p-12 md:p-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">
              Agende seu horário e <span className="text-accent italic">transforme seu visual</span>
            </h2>
            <p className="text-white/70 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light">
              Resultados comprovados por centenas de clientes satisfeitos em João Pessoa.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                { icon: <Zap size={20} />, text: "Atendimento rápido" },
                { icon: <CheckCircle size={20} />, text: "Profissionais experientes" },
                { icon: <ShieldCheck size={20} />, text: "Resultados comprovados" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-center gap-3 text-white/80 font-medium">
                  <span className="text-accent">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>

            <motion.a
              href="https://wa.me/5583999999999"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-accent text-primary px-10 py-5 rounded-full font-bold text-lg shadow-2xl shadow-accent/20 hover:bg-white transition-all duration-300"
            >
              <MessageCircle size={24} />
              Quero agendar agora
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
