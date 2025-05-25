
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 section-animate">
      <div className="section-heading mb-16">
        <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
          <Mail className="text-orange" />
          Get In Touch
        </h2>
        <div className="h-1 w-20 bg-orange"></div>
      </div>
      
      <div className="max-w-2xl mx-auto">
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
    </section>
  );
};

export default Contact;
