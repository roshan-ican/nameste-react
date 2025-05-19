// Destructure props



const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white text-center p-4 mt-4 shadow-md">
            <p>&copy; 2025 Cafe & Resto. All Rights Reserved.</p>
            <div className="flex justify-center space-x-4 mt-2">
                <a href="#" className="hover:underline">Privacy Policy</a>
                <a href="#" className="hover:underline">Terms of Service</a>
                <a href="#" className="hover:underline">Contact Us</a>
            </div>
        </footer>
    );
};

export default Footer;