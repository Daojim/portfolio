import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-6 px-8 bg-card relative border-t border-border mt-6 pt-8 flex flex-wrap justify-between items-center">
      <p className="text-sm"> &copy; {new Date().getFullYear()} Jimmy Dao</p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
