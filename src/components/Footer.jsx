import React from 'react';


function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Site Designed & Developed by Me Saish Ghadi.</p>
      </div>
    </footer>
  );
}

export default Footer;