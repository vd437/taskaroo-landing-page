import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
            <span className="text-white font-bold text-lg">T</span>
          </div>
          <span className="text-xl font-bold text-foreground">Taskaroo</span>
        </div>
        <Button className="bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 transition-opacity">
          حمّل الآن
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
