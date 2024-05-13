// components/Footer.tsx
import React from 'react';

const Footer = () => (
  <footer className="bg-gray-900 text-white py-6 w-full text-center">
    <p>&copy; 2024 hisyam99. All Rights Reserved.</p>
    <div className="flex justify-center mt-4 space-x-4">
      <a href="#" className="hover:text-gray-400">Email</a>
      <a href="#" className="hover:text-gray-400">LinkedIn</a>
      <a href="#" className="hover:text-gray-400">GitHub</a>
      {/*sosmed*/}
    </div>
  </footer>
);

export default Footer;