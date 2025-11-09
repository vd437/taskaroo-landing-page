import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="bg-gradient-to-r from-primary to-purple-600 rounded-3xl p-12 md:p-16 text-center shadow-xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ابدأ رحلتك مع Taskaroo اليوم
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            حمّل التطبيق الآن واستمتع بإدارة مهامك بطريقة أكثر ذكاءً ومتعة
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-lg gap-2 shadow-xl"
            >
              <Download className="w-5 h-5" />
              App Store
            </Button>
            <Button 
              size="lg" 
              className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary text-lg gap-2 shadow-xl transition-all"
            >
              <Download className="w-5 h-5" />
              Google Play
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
