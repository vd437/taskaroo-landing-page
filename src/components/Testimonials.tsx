import { Star } from "lucide-react";

const testimonials = [
  {
    name: "سارة أحمد",
    role: "مديرة مشاريع",
    text: "Taskaroo غيّر حياتي تماماً! أصبحت أكثر تنظيماً وإنتاجية",
    rating: 5
  },
  {
    name: "محمد علي",
    role: "طالب جامعي",
    text: "أفضل تطبيق لتنظيم الوقت! ساعدني كثير في الدراسة والامتحانات",
    rating: 5
  },
  {
    name: "نور خالد",
    role: "رائدة أعمال",
    text: "التطبيق سهل جداً وفعّال. أنصح فيه كل اللي يبغى ينظم وقته",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-accent">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            آراء المستخدمين
          </h2>
          <p className="text-xl text-muted-foreground">
            اكتشف تجارب مستخدمينا السعداء
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white text-xl font-bold shadow-lg">
                  {testimonial.name.charAt(0)}
                </div>
              </div>
              <div className="flex gap-1 mb-4 justify-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-6 text-center italic">
                "{testimonial.text}"
              </p>
              <div className="text-center">
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
