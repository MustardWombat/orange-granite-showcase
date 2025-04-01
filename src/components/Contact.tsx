
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Thanks for your message! This form doesn't actually submit in this demo.");
  };

  return (
    <section id="contact" className="py-20 section-animate">
      <div className="section-heading mb-16">
        <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
          <Mail className="text-orange" />
          Get In Touch
        </h2>
        <div className="h-1 w-20 bg-orange"></div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-orange/20 p-3 rounded-lg">
                <Mail className="text-orange" />
              </div>
              <div>
                <h4 className="text-lg font-bold">Email</h4>
                <a href="mailto:will4379@msu.edu" className="text-gray-300 hover:text-orange transition-colors">
                  will4379@msu.edu
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-orange/20 p-3 rounded-lg">
                <Phone className="text-orange" />
              </div>
              <div>
                <h4 className="text-lg font-bold">Phone</h4>
                <a href="tel:7343948207" className="text-gray-300 hover:text-orange transition-colors">
                  (734) 394-8207
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-orange/20 p-3 rounded-lg">
                <MapPin className="text-orange" />
              </div>
              <div>
                <h4 className="text-lg font-bold">Location</h4>
                <p className="text-gray-300">
                  Detroit, Michigan
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
            <p className="text-gray-300 mb-6">
              I'm always interested in new opportunities, collaborations, and conversations. Feel free to reach out!
            </p>
          </div>
        </div>
        
        <div className="bg-granite border border-gray-700 rounded-lg p-6 hover:border-orange/50 transition-all duration-300">
          <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Your Name"
                className="bg-darkgray border-gray-700 focus:border-orange"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                className="bg-darkgray border-gray-700 focus:border-orange"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                placeholder="How can I help you?"
                className="bg-darkgray border-gray-700 focus:border-orange"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <textarea
                id="message"
                rows={4}
                placeholder="Your message here..."
                className="w-full bg-darkgray border border-gray-700 rounded-md p-3 focus:outline-none focus:border-orange"
                required
              />
            </div>
            
            <button 
              type="submit"
              className="tech-btn primary w-full flex items-center justify-center gap-2"
            >
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
