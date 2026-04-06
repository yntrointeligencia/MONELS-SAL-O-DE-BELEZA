import AboutBento from "../components/AboutBento";
import TrustBadges from "../components/TrustBadges";
import CTA from "../components/CTA";

export default function AboutPage() {
  return (
    <div className="pt-32">
      <AboutBento />
      <TrustBadges />
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif mb-8">Nossa História</h2>
          <p className="text-primary/60 text-lg leading-relaxed mb-12">
            O MONELS nasceu da paixão por transformar vidas através da arte do corte. Localizado no coração do bairro dos Estados em João Pessoa, somos especialistas em entender a identidade de cada cliente e traduzi-la em um visual único e moderno.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <div>
              <h3 className="text-2xl font-serif mb-4">Missão</h3>
              <p className="text-primary/60">Proporcionar confiança e bem-estar através de serviços de beleza de alta qualidade e atendimento personalizado.</p>
            </div>
            <div>
              <h3 className="text-2xl font-serif mb-4">Equipe</h3>
              <p className="text-primary/60">Contamos com profissionais experientes e em constante atualização com as tendências mundiais do visagismo.</p>
            </div>
          </div>
        </div>
      </div>
      <CTA />
    </div>
  );
}
