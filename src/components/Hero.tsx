import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import heroPhone from "@/assets/hero-phone.png";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-right space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              نظّم يومك
              <br />
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                بطريقة ممتعة
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg mx-auto md:mx-0">
              Taskaroo التطبيق الأمثل لإدارة مهامك اليومية وتحقيق أهدافك بكل سهولة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 transition-opacity text-lg gap-2 text-white shadow-lg"
              >
                <Download className="w-5 h-5" />
                App Store
              </Button>
              <Button 
                size="lg" 
                className="border-2 border-primary bg-white text-primary hover:bg-primary hover:text-white transition-all text-lg gap-2 shadow-lg"
              >
                <Download className="w-5 h-5" />
                Google Play
              </Button>
            </div>
            
            {/* CTA مبكر */}
            <div className="pt-8 flex items-center gap-4 justify-center md:justify-start">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                  س
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                  م
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                  ن
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-bold text-foreground">+10,000</span> مستخدم سعيد
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <img 
              src={heroPhone} 
              alt="Taskaroo App" 
              className="w-full max-w-md drop-shadow-2xl animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
