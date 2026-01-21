import { GraduationCap, Heart, Users, Shield } from "lucide-react";
import clinicImage from "@/assets/clinic-interior.jpg";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Formação",
      description: "Graduada pela USP com residência no HC-FMUSP",
    },
    {
      icon: Heart,
      title: "Especialidades",
      description: "Ginecologia e Obstetrícia com foco em saúde integral",
    },
    {
      icon: Users,
      title: "Atendimento",
      description: "Humanizado e personalizado para cada paciente",
    },
    {
      icon: Shield,
      title: "Confiança",
      description: "Membro da FEBRASGO e SOGESP",
    },
  ];

  return (
    <section id="sobre" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative animate-fade-up">
            <div className="absolute -inset-4 bg-accent rounded-3xl" />
            <img
              src={clinicImage}
              alt="Consultório da Dra. Maria Silva"
              className="relative rounded-2xl shadow-elevated w-full object-cover aspect-video"
            />
          </div>

          {/* Content */}
          <div className="animate-fade-up animation-delay-200">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Sobre Mim
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mt-2 mb-6">
              Dra. Maria Silva
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Com mais de 15 anos dedicados à saúde da mulher, minha missão é 
              proporcionar um atendimento acolhedor e de excelência. Acredito que 
              cada mulher merece ser ouvida e cuidada de forma integral.
            </p>
            <p className="text-muted-foreground mb-8">
              Minha abordagem combina conhecimento técnico atualizado com uma 
              escuta ativa e empática, criando um ambiente seguro onde você se 
              sentirá à vontade para compartilhar suas dúvidas e preocupações.
            </p>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-4 rounded-xl bg-accent/50 hover:bg-accent transition-colors"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
