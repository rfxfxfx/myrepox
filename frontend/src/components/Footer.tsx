import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 dark:bg-black text-xs py-4">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col items-center space-y-2 text-center">
        <div className="flex space-x-3">
          <a href="https://www.facebook.com/ralph.lawrence.568847/"><Facebook size={16} /></a>
          <a href="#"><Twitter size={16} /></a>
          <a href="#"><Linkedin size={16} /></a>
          <a href="#"><Instagram size={16} /></a>
        </div>
        <p className="text-gray-500">&copy; {new Date().getFullYear()} RFX.Studios</p>
        <div className="flex space-x-3">
          <a href="#" className="hover:text-gray-300">Privacy</a>
          <a href="#" className="hover:text-gray-300">Terms</a>
          <a href="#" className="hover:text-gray-300">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
