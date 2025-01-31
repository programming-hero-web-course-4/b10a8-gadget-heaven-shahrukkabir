import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-10 w-11/12 mx-auto mt-12 text-center">
      <div className="flex flex-col items-center space-y-3">
        <h3 className="text-3xl font-bold">Gadget Heaven</h3>
        <p className="text-gray-500">
          Explore the future of technology with our latest gadgets.
        </p>
      </div>
      <div className="border-t-2 mt-6 border-gray-900 border-opacity-10"></div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-6 gap-6 text-gray-500">
        <div>
          <h4 className="text-lg font-bold mb-3">Services</h4>
          <ul className="flex flex-col space-y-1">
            <li><Link to="#">Product Support</Link></li>
            <li><Link to="#">Order Tracking</Link></li>
            <li><Link to="#">Shipping & Delivery</Link></li>
            <li><Link to="#">Returns</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-3">Company</h4>
          <ul className="flex flex-col space-y-1">
            <li><Link to="#">About Us</Link></li>
            <li><Link to="#">Careers</Link></li>
            <li><Link to="#">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-3">Legal</h4>
          <ul className="flex flex-col space-y-1">
            <li><Link to="#">Terms of Service</Link></li>
            <li><Link to="#">Privacy Policy</Link></li>
            <li><Link to="#">Cookie Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t-2 mt-6 border-gray-900 border-opacity-10"></div>

      <p className="text-gray-500 mt-4">© 2024 SRK Gadget Heaven. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
