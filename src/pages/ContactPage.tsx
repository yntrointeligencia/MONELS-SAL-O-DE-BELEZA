import { MapPin, Phone, Instagram, MessageCircle, Clock } from "lucide-react";
import { motion } from "motion/react";

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-serif mb-6">Contato</h1>
            <p className="text-primary/60 text-lg">Estamos prontos para transformar seu visual. Entre em contato ou nos visite.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-serif mb-8">Informações</h2>
                <ul className="space-y-8">
                  <li className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-2xl text-accent">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Endereço</h4>
                      <p className="text-primary/60">Bairro dos Estados, João Pessoa - PB</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-2xl text-accent">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Telefone</h4>
                      <p className="text-primary/60">(83) 99999-9999</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-2xl text-accent">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Horário</h4>
                      <p className="text-primary/60">Terça a Sábado: 09h às 19h</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif mb-6">Redes Sociais</h2>
                <div className="flex gap-4">
                  <a href="#" className="p-4 bg-white shadow-premium rounded-3xl hover:bg-accent hover:text-white transition-all">
                    <Instagram size={24} />
                  </a>
                  <a href="#" className="p-4 bg-white shadow-premium rounded-3xl hover:bg-accent hover:text-white transition-all">
                    <MessageCircle size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Map Placeholder / CTA */}
            <div className="bg-secondary rounded-[3rem] p-12 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center text-accent mb-8">
                <MapPin size={40} />
              </div>
              <h3 className="text-3xl font-serif mb-6">Venha nos visitar</h3>
              <p className="text-primary/60 mb-10">Localização privilegiada no Bairro dos Estados, com fácil acesso e estacionamento.</p>
              <motion.a
                href="https://wa.me/5583999999999"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-10 py-5 rounded-full font-bold flex items-center gap-3 shadow-xl"
              >
                <MessageCircle size={24} />
                Agendar via WhatsApp
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
