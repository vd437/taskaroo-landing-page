import screenshot1 from "@/assets/screenshot-1.png";
import screenshot2 from "@/assets/screenshot-2.png";
import screenshot3 from "@/assets/screenshot-3.png";

const screenshots = [
  { src: screenshot1, alt: "قائمة المهام اليومية" },
  { src: screenshot2, alt: "التقويم الشهري" },
  { src: screenshot3, alt: "الإحصائيات والتقدم" }
];

const Screenshots = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            شاهد التطبيق
          </h2>
          <p className="text-xl text-muted-foreground">
            تصميم بسيط وسهل الاستخدام
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {screenshots.map((screenshot, index) => (
            <div 
              key={index}
              className="w-64 rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition-transform"
            >
              <img 
                src={screenshot.src} 
                alt={screenshot.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
