import { CheckCircle2, Calendar, BarChart3, Bell } from "lucide-react";

const features = [
  {
    icon: CheckCircle2,
    title: "إدارة المهام",
    description: "أضف وحذف مهامك بسهولة وتابع تقدمك اليومي"
  },
  {
    icon: Calendar,
    title: "تنظيم بالتقويم",
    description: "جدول مهامك حسب التاريخ والأولوية"
  },
  {
    icon: BarChart3,
    title: "إحصائيات وتقارير",
    description: "تابع إنجازاتك وشاهد تقدمك بمرور الوقت"
  },
  {
    icon: Bell,
    title: "تذكيرات ذكية",
    description: "احصل على تنبيهات في الوقت المناسب"
  }
];

const Features = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-accent to-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            مميزات رائعة
          </h2>
          <p className="text-xl text-muted-foreground">
            كل ما تحتاجه لتنظيم يومك بفعالية
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-border"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 text-right">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-right">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
