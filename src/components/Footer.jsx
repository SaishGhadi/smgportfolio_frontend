import React from 'react';


function Footer() {
  return (
    <footer className="py-20 border-t text-center text-3xl md:text-5xl px-4 md:grid-cols-2 gap-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Site Designed & Developed by Saish Ghadi.</p>
      </div>
    </footer>
  );
}

export default Footer;
