const Footer = () => {
  return (
    <footer className="bg-accent py-12 px-4 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="text-xl font-bold text-foreground">Taskaroo</span>
          </div>
          <p className="text-muted-foreground text-center">
            © 2024 Taskaroo. جميع الحقوق محفوظة
          </p>
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
      </div>
    </footer>
  );
};

export default Footer;
