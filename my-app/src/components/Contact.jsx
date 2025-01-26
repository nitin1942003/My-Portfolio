import React from 'react';
import { LinkedinIcon, MailIcon, InstagramIcon, GithubIcon } from 'lucide-react';

const ContactPage = () => {
  const contactInfo = {
    email: 'nitinsharma1942003@gmail.com',
    linkedin: 'https://www.linkedin.com/in/nitin-sharma-459231256/',
    github: 'https://github.com/nitin1942003',
    instagram: 'https://www.instagram.com/nitinsharma1942003?igsh=MTVmZW43b3Iwa29ueA=='
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md transform hover:scale-105 transition-transform duration-300">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Get in Touch</h1>
        
        <div className="space-y-4">
          {/* Email Contact */}
          <div className="flex items-center bg-blue-50 p-3 rounded-lg hover:bg-blue-100 transition">
            <MailIcon className="text-blue-600 mr-4" size={30} />
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <a 
                href={`mailto:${contactInfo.email}`} 
                className="text-blue-800 font-semibold hover:underline"
              >
                {contactInfo.email}
              </a>
            </div>
          </div>

          {/* LinkedIn Contact */}
          <div className="flex items-center bg-blue-50 p-3 rounded-lg hover:bg-blue-100 transition">
            <LinkedinIcon className="text-blue-600 mr-4" size={30} />
            <div>
              <p className="text-sm text-gray-500">LinkedIn</p>
              <a 
                href={contactInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-800 font-semibold hover:underline"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>

          {/* GitHub Contact */}
          <div className="flex items-center bg-blue-50 p-3 rounded-lg hover:bg-blue-100 transition">
            <GithubIcon className="text-gray-800 mr-4" size={30} />
            <div>
              <p className="text-sm text-gray-500">GitHub</p>
              <a 
                href={contactInfo.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-800 font-semibold hover:underline"
              >
                View GitHub Profile
              </a>
            </div>
          </div>

          {/* Instagram Contact */}
          <div className="flex items-center bg-blue-50 p-3 rounded-lg hover:bg-blue-100 transition">
            <InstagramIcon className="text-pink-600 mr-4" size={30} />
            <div>
              <p className="text-sm text-gray-500">Instagram</p>
              <a 
                href={contactInfo.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-800 font-semibold hover:underline"
              >
                Follow on Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;