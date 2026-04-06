import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export default function AboutBento() {
  return (
    <section id="about" className="py-24 bg-bg-site">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Transformação que você sente</h2>
          <p className="text-primary/60 text-lg">No MONELS, cada detalhe é pensado para proporcionar uma experiência de beleza completa e profissional.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto">
          {/* Main Image Block */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 relative rounded-3xl overflow-hidden group min-h-[400px]"
          >
            <img
              src="https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=1926&auto=format&fit=crop"
              alt="Antes e Depois Monels"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex flex-col justify-end p-10">
              <h3 className="text-3xl font-serif text-white mb-2">Resultados Reais</h3>
              <p className="text-white/70 max-w-md">Destaque para transformações que elevam a autoestima de nossos clientes.</p>
            </div>
          </motion.div>

          {/* Bento Column */}
          <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-secondary p-8 rounded-3xl flex flex-col justify-center"
            >
              <h3 className="text-xl font-serif mb-2 text-primary">Especialista em cortes</h3>
              <p className="text-primary/70 text-sm">Técnicas modernas para cada tipo de cabelo.</p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-premium border border-primary/5 flex flex-col justify-center"
            >
              <h3 className="text-xl font-serif mb-2 text-primary">Atendimento personalizado</h3>
              <p className="text-primary/70 text-sm">Cada cliente recebe atenção única e consultoria exclusiva.</p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary p-8 rounded-3xl flex flex-col justify-center text-white"
            >
              <h3 className="text-xl font-serif mb-2">Ambiente acolhedor</h3>
              <p className="text-white/60 text-sm">Experiência confortável e profissional em cada visita.</p>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-accent/10 border border-accent/20 p-8 rounded-3xl flex flex-col justify-center"
            >
              <h3 className="text-xl font-serif mb-2 text-accent">Produtos profissionais</h3>
              <p className="text-primary/70 text-sm">Alta qualidade nos tratamentos com as melhores marcas.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
