import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-serif text-xl font-bold">D</span>
              </div>
              <span className="font-serif text-xl font-semibold text-background">
                Dra. Maria Silva
              </span>
            </div>
            <p className="text-background/70 text-sm">
              Ginecologista e Obstetra dedicada à saúde e bem-estar da mulher 
              em todas as fases da vida.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-background mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {["Início", "Sobre", "Serviços", "Depoimentos", "Contato"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-background mb-4">Contato</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li>Av. Paulista, 1000 - Sala 1501</li>
              <li>Bela Vista, São Paulo - SP</li>
              <li>(11) 99999-9999</li>
              <li>contato@dramariasilva.com.br</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {currentYear} Dra. Maria Silva. Todos os direitos reservados.
          </p>
          <p className="text-background/50 text-sm flex items-center gap-1">
            Feito com <Heart className="w-4 h-4 text-primary fill-primary" /> para você
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
