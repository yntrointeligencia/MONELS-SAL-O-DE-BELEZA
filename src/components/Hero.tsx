import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2069&auto=format&fit=crop"
          alt="Corte Profissional Monels"
          className="w-full h-full object-cover scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/40 to-bg-site"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm border border-accent/30">
            Especialista em Cortes e Transformação
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.1] mb-8 blur-in">
            Especialistas em cortes que <br />
            <span className="italic text-secondary">transformam você</span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Mais de 400 clientes satisfeitos com resultados incríveis em João Pessoa.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="https://wa.me/5583999999999"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent text-primary px-8 py-4 rounded-full font-bold flex items-center gap-3 shadow-lg shadow-accent/20 hover:bg-white transition-all duration-300"
            >
              <MessageCircle size={20} />
              Agendar pelo WhatsApp
            </motion.a>
            
            <motion.a
              href="/servicos"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all duration-300"
            >
              Ver Serviços
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
      </motion.div>
    </section>
  );
}
