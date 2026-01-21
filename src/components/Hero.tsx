import { Calendar, MapPin, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import doctorImage from "@/assets/doctor-portrait.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen bg-hero pt-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-sage/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full mb-6">
              <Award className="w-4 h-4 text-secondary-foreground" />
              <span className="text-sm font-medium text-secondary-foreground">
                +15 anos de experiência
              </span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
              Cuidado feminino com{" "}
              <span className="text-gradient">acolhimento</span> e{" "}
              <span className="text-gradient">dedicação</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              Sua saúde é nossa prioridade. Oferecemos atendimento humanizado e 
              personalizado em ginecologia e obstetrícia, com foco no bem-estar 
              integral da mulher em todas as fases da vida.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="gap-2">
                <Calendar className="w-5 h-5" />
                Agendar Consulta
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <MapPin className="w-5 h-5" />
                Nossa Localização
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center sm:text-left">
                <p className="font-serif text-3xl md:text-4xl font-bold text-primary">+5.000</p>
                <p className="text-sm text-muted-foreground">Pacientes atendidas</p>
              </div>
              <div className="text-center sm:text-left">
                <p className="font-serif text-3xl md:text-4xl font-bold text-primary">+2.000</p>
                <p className="text-sm text-muted-foreground">Partos realizados</p>
              </div>
              <div className="text-center sm:text-left">
                <p className="font-serif text-3xl md:text-4xl font-bold text-primary">98%</p>
                <p className="text-sm text-muted-foreground">Satisfação</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-up animation-delay-200">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl rotate-3" />
              <div className="absolute -inset-4 bg-sage/20 rounded-3xl -rotate-3" />
              
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={doctorImage}
                  alt="Dra. Maria Silva - Ginecologista"
                  className="w-full max-w-md object-cover aspect-[3/4]"
                />
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-4 shadow-elevated animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl">👶</span>
                  </div>
                  <div>
                    <p className="font-serif font-semibold text-foreground">Obstetrícia</p>
                    <p className="text-sm text-muted-foreground">Pré-natal humanizado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
