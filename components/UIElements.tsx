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

export { Section, Container };