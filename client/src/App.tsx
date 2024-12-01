import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="bg-indigo-500 text-white shadow-lg">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <h1 className="text-2xl font-extrabold tracking-wider">
            My Portfolio
          </h1>

          {/* Navigation Links */}
          <nav className="space-x-6">
            <a
              href="#home"
              className="text-white hover:text-indigo-200 transition font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white hover:text-indigo-200 transition font-medium"
            >
              About
            </a>
          </nav>

          {/* Sign-In/Sign-Out Button */}
          <div>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton>
                <button className="bg-white text-indigo-500 py-2 px-4 rounded-md shadow-md hover:bg-indigo-100 transition">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-indigo-100">
        {/* Home Section */}
        <section
          id="home"
          className="flex flex-col items-center justify-center text-center py-20"
        >
          <h2 className="text-4xl font-bold text-indigo-600 mb-4">
            Welcome to My Portfolio
          </h2>
          <p className="text-lg text-indigo-500 max-w-2xl">
            Explore my work, skills, and passion for creating seamless digital
            solutions. Let’s make something amazing together!
          </p>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="flex flex-col items-center justify-center text-center py-20 bg-white"
        >
          <h2 className="text-4xl font-bold text-indigo-600 mb-4">About Me</h2>
          <p className="text-lg text-gray-700 max-w-2xl">
            I’m a dedicated developer passionate about crafting beautiful and
            functional web experiences. With expertise in modern technologies
            like React, TypeScript, and Tailwind CSS, I bring ideas to life!
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-indigo-500 text-white text-center py-4">
        <p>&copy; 2024 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}
