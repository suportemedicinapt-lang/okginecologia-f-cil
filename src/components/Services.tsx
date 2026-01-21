import { 
  Stethoscope, 
  Baby, 
  HeartPulse, 
  Microscope, 
  Pill, 
  ShieldCheck 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Consulta Ginecológica",
      description:
        "Avaliação completa da saúde feminina com exames preventivos e orientação personalizada.",
    },
    {
      icon: Baby,
      title: "Pré-Natal",
      description:
        "Acompanhamento gestacional humanizado do início ao pós-parto, com todo suporte necessário.",
    },
    {
      icon: HeartPulse,
      title: "Climatério e Menopausa",
      description:
        "Cuidado especializado para essa fase de transição, promovendo qualidade de vida.",
    },
    {
      icon: Microscope,
      title: "Exames e Diagnósticos",
      description:
        "Papanicolau, colposcopia, ultrassonografia e outros exames especializados.",
    },
    {
      icon: Pill,
      title: "Planejamento Familiar",
      description:
        "Orientação sobre métodos contraceptivos e acompanhamento para fertilidade.",
    },
    {
      icon: ShieldCheck,
      title: "Saúde Íntima",
      description:
        "Tratamento de infecções, disfunções e acompanhamento da saúde íntima feminina.",
    },
  ];

  return (
    <section id="servicos" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Serviços
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mt-2 mb-4">
            Cuidados Especializados
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos uma gama completa de serviços ginecológicos e obstétricos 
            para atender às suas necessidades em todas as fases da vida.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group border-0 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 animate-fade-up bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
