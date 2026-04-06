import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/5583999999999"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
      aria-label="Agendar via WhatsApp"
    >
      <MessageCircle size={32} />
      <span className="absolute right-full mr-4 bg-white text-primary px-4 py-2 rounded-2xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Agende seu horário agora!
      </span>
    </motion.a>
  );
}
