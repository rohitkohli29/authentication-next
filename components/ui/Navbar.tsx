import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold">
          <Link href={'/'}>Home</Link>
        </div>
        <div className="flex space-x-4">
          <Link href="/auth/login" shallow className="text-white">
            Login
          </Link>
          <Link href="/auth/signup" shallow className="text-white">
            Signup
          </Link>
          <Link href="/dashboard" shallow className="text-white">
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
