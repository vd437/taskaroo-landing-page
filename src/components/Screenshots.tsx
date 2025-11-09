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
    <section className="py-20 px-4 bg-gradient-to-b from-white via-purple-50/30 to-white relative overflow-hidden">
      {/* Purple mist effect in the center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      </div>
      
      <div className="container mx-auto relative z-10">
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
              className="w-64 bg-white/80 backdrop-blur-sm p-4 rounded-[2.5rem] shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-purple-100/50"
            >
              <img 
                src={screenshot.src} 
                alt={screenshot.alt}
                className="w-full h-full object-cover rounded-[2rem]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
