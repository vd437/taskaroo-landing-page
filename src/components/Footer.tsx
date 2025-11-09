import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-accent py-12 px-4 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="text-xl font-bold text-foreground">Taskaroo</span>
            </div>
            
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center text-primary hover:text-white transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center text-primary hover:text-white transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center text-primary hover:text-white transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center text-primary hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                الخصوصية
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                الشروط
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                تواصل معنا
              </a>
            </div>
          </div>
          
          <div className="text-center border-t border-border pt-6">
            <p className="text-muted-foreground">
              © 2024 Taskaroo. جميع الحقوق محفوظة
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
