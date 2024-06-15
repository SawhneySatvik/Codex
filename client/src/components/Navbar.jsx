import { Outlet, Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="fixed z-50 w-full bg-gray-800 shadow-lg">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex-1 flex items-center justify-between sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                            <span className="text-white text-lg font-bold">IPL Management System</span>
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                                <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/students">Students</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
