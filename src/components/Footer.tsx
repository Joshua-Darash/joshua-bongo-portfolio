
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className="text-xl font-bold mb-2">Joshua Bongo</h3>
        <p className="mb-4">Software Engineer | Machine Learning & Web Development Specialist</p>
        <div className="w-16 h-1 bg-secondary mx-auto mb-4 rounded-full"></div>
        <p>© {currentYear} Joshua Bongo. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
