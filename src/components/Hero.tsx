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
                className="bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 transition-opacity text-lg gap-2"
              >
                <Download className="w-5 h-5" />
                App Store
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg gap-2"
              >
                <Download className="w-5 h-5" />
                Google Play
              </Button>
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
