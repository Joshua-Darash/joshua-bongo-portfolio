
import { useState } from "react";
import { Button } from "./ui/button";
import { Mail, Phone, MapPin, Send, Github, Globe, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="section-container">
      <h2 className="section-title">Get In Touch</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-card shadow-sm rounded-lg p-6 animate-fade-in">
          <h3 className="text-xl font-bold text-primary mb-6">Send Me a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary/50"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary/50"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary/50 resize-none"
                required
              ></textarea>
            </div>
            <Button 
              type="submit" 
              className="w-full"
              disabled={isSubmitting}
            >
              <Send size={16} className="mr-2" />
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
        
        <div className="bg-card shadow-sm rounded-lg p-6 animate-fade-in">
          <h3 className="text-xl font-bold text-primary mb-6">Contact Information</h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Phone size={20} className="text-secondary" />
              </div>
              <div>
                <h4 className="font-medium text-foreground">Phone</h4>
                <p className="text-muted-foreground">+256 – 787 439888</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Mail size={20} className="text-secondary" />
              </div>
              <div>
                <h4 className="font-medium text-foreground">Email</h4>
                <a 
                  href="mailto:bongojoshua01@gmail.com" 
                  className="text-muted-foreground hover:text-secondary transition-colors"
                >
                  bongojoshua01@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-1">
                <MapPin size={20} className="text-secondary" />
              </div>
              <div>
                <h4 className="font-medium text-foreground">Location</h4>
                <p className="text-muted-foreground">Arapai, Soroti, Eastern Uganda</p>
              </div>
            </div>
            
            <div className="border-t border-border pt-6 mt-6">
              <h4 className="font-medium text-foreground mb-3">Let's connect</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-[#0077B5]/10 text-[#0077B5] hover:bg-[#0077B5]/20 flex items-center justify-center transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-muted text-foreground hover:bg-muted/80 flex items-center justify-center transition-colors">
                  <Github size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-secondary/10 text-secondary hover:bg-secondary/20 flex items-center justify-center transition-colors">
                  <Globe size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
