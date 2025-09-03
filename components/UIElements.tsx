"use client"

const Section = ({ id, children, className }: { id: string; children: React.ReactNode; className?: string }) => {
  return (
    <section id={id} className={`px-6 md:px-16 lg:px-24 py-10 ${className}`}>
      {children}
    </section>
  );
}; 

const Container = ({ children, className }: {children: React.ReactNode; className?: string }) => {
  return (
    <div className={`max-w-5xl xl:max-w-7xl w-full mx-auto ${className}`}>
      {children}
    </div>
  );
};

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

const buttonStyles = {
  primary: "border-yellow-500 bg-yellow-500 text-background hover:bg-yellow-600 hover:border-yellow-600",
  outline: "border-yellow-500 bg-background text-yellow-500 hover:bg-yellow-600 hover:text-background hover:border-yellow-600",
};

const ButtonLink = ({ href, children, variant = "primary", className, onClick }: ButtonLinkProps) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`border-2 inline-block text-center py-3 px-6 rounded-[1px] font-bold shadow-md shadow-foreground/30 transition text-sm md:text-base transform hover:-translate-y-1 ${buttonStyles[variant]} ${className}`}
    >
      {children}
    </a>
  );
};

export { Section, Container, ButtonLink };