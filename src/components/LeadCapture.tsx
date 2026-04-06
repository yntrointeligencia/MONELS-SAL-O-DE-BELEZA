import { motion } from "motion/react";
import { Send } from "lucide-react";
import { useState, FormEvent } from "react";

export default function LeadCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email) {
      setStatus("success");
      setEmail("");
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12 p-12 rounded-[3rem] bg-secondary/30 border border-accent/10">
          <div className="flex-1">
            <h2 className="text-3xl font-serif mb-4">Receba dicas de beleza e promoções</h2>
            <p className="text-primary/60">Fique por dentro das novidades do salão e receba conteúdos exclusivos.</p>
          </div>

          <div className="flex-1 w-full">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-accent/10 p-6 rounded-3xl text-center border border-accent/20"
              >
                <p className="text-accent font-bold">Obrigada! Você agora faz parte do nosso clube VIP.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="relative">
                <input
                  type="email"
                  required
                  placeholder="Seu melhor e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white px-8 py-5 rounded-full border border-primary/5 focus:border-accent outline-none transition-all pr-36"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 bottom-2 bg-primary text-white px-6 rounded-full flex items-center gap-2 hover:bg-accent transition-all"
                >
                  <span className="hidden sm:inline">Inscrever</span>
                  <Send size={16} />
                </button>
              </form>
            )}
            <p className="text-[10px] text-primary/40 mt-4 text-center">Respeitamos sua privacidade. Cancele a qualquer momento.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
