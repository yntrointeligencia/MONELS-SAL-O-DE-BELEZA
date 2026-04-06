import { Instagram, Facebook, Phone, MapPin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-bg-site pt-24 pb-12 relative overflow-hidden">
      {/* Watermark Logo */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-[0.03] whitespace-nowrap">
        <span className="text-[15vw] font-serif font-bold uppercase leading-none">
          MONELS
        </span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Info */}
          <div className="flex flex-col gap-6">
            <div>
              <span className="font-serif text-2xl font-bold tracking-tighter text-primary">
                MONELS
              </span>
              <div className="text-[10px] tracking-[0.3em] uppercase text-accent font-bold">
                Salão de Beleza
              </div>
            </div>
            <p className="text-primary/60 text-sm leading-relaxed max-w-xs">
              Beleza e confiança em cada detalhe. Especialistas em cortes que transformam você em João Pessoa.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white shadow-sm hover:bg-accent hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="https://wa.me/5583999999999" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white shadow-sm hover:bg-accent hover:text-white transition-all">
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl mb-6">Navegação</h4>
            <ul className="flex flex-col gap-4">
              {["Serviços", "Sobre", "Contato"].map((item) => (
                <li key={item}>
                  <a href={`/${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} className="text-primary/60 hover:text-accent transition-colors text-sm font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-xl mb-6">Serviços</h4>
            <ul className="flex flex-col gap-4">
              {["Mechas & Coloração", "Corte Visagista", "Terapia Capilar", "Estética Facial", "Penteados"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-primary/60 hover:text-accent transition-colors text-sm font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-xl mb-6">Contato</h4>
            <ul className="flex flex-col gap-6">
              <li className="flex items-start gap-4">
                <MapPin size={20} className="text-accent shrink-0" />
                <span className="text-primary/60 text-sm">Av. Gov. Flávio Ribeiro Coutinho, 500 - Manaíra, João Pessoa - PB</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={20} className="text-accent shrink-0" />
                <span className="text-primary/60 text-sm">(83) 99999-9999</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={20} className="text-accent shrink-0" />
                <span className="text-primary/60 text-sm">contato@studiohair.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-primary/40 text-xs">
            © 2026 Studio Hair Beauty Salon. Todos os direitos reservados.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-primary/40 hover:text-accent text-xs">Política de Privacidade</a>
            <a href="#" className="text-primary/40 hover:text-accent text-xs">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
