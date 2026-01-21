import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ana Paula M.",
      role: "Paciente há 5 anos",
      content:
        "A Dra. Maria é incrível! Me acompanhou durante toda a gestação e fez com que eu me sentisse segura em cada momento. Recomendo de olhos fechados!",
      rating: 5,
    },
    {
      name: "Carla Souza",
      role: "Paciente há 3 anos",
      content:
        "Depois de anos buscando um profissional que me ouvisse de verdade, encontrei a Dra. Maria. Seu atendimento humanizado fez toda diferença na minha vida.",
      rating: 5,
    },
    {
      name: "Juliana Costa",
      role: "Paciente há 2 anos",
      content:
        "Excelente profissional! Explica tudo com calma e paciência. O consultório é lindo e acolhedor. Me sinto muito bem cuidada em todas as consultas.",
      rating: 5,
    },
  ];

  return (
    <section id="depoimentos" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mt-2 mb-4">
            O que dizem as pacientes
          </h2>
          <p className="text-muted-foreground text-lg">
            A satisfação das nossas pacientes é nossa maior recompensa. 
            Veja o que elas têm a dizer sobre nosso atendimento.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="border-0 shadow-soft hover:shadow-elevated transition-all duration-300 animate-fade-up bg-card relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                {/* Quote icon */}
                <Quote className="w-10 h-10 text-primary/20 mb-4" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-primary fill-primary"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
