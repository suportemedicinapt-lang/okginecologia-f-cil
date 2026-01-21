import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      content: "Av. Paulista, 1000 - Sala 1501\nBela Vista, São Paulo - SP",
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "(11) 99999-9999\n(11) 3333-3333",
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "contato@dramariasilva.com.br",
    },
    {
      icon: Clock,
      title: "Horário de Atendimento",
      content: "Segunda a Sexta: 8h às 18h\nSábado: 8h às 12h",
    },
  ];

  return (
    <section id="contato" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="animate-fade-up">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Contato
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mt-2 mb-6">
              Entre em Contato
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Agende sua consulta ou tire suas dúvidas. Estamos prontos para 
              atendê-la com todo cuidado que você merece.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm whitespace-pre-line">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="flex items-center gap-4">
              <span className="text-muted-foreground">Siga-nos:</span>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-up animation-delay-200">
            <div className="bg-card rounded-3xl p-8 shadow-elevated">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
                Envie uma Mensagem
              </h3>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Nome
                    </label>
                    <Input placeholder="Seu nome completo" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Telefone
                    </label>
                    <Input placeholder="(00) 00000-0000" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    E-mail
                  </label>
                  <Input type="email" placeholder="seu@email.com" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Assunto
                  </label>
                  <Input placeholder="Agendamento de consulta" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Mensagem
                  </label>
                  <Textarea
                    placeholder="Escreva sua mensagem..."
                    rows={4}
                  />
                </div>
                <Button size="lg" className="w-full">
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
