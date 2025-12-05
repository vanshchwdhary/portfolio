import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className='w-full py-6 px-10 flex justify-between items-center fixed top-0 left-0 bg-[#f5f5f3]/90 backdrop-blur-md z-50'>
      <h1 className='text-lg font-semibold'>Vansh.</h1>

      <ul className='flex gap-8 text-sm opacity-70'>
        <li className='cursor-pointer hover:opacity-100'>
          <Link to="/">Home</Link>
        </li>

        <li className='cursor-pointer hover:opacity-100'>
          <Link to="/projects">Projects</Link>
        </li>

        <li className='cursor-pointer hover:opacity-100'>
          <Link to="/experience">Experience</Link>
        </li>

        <li className='cursor-pointer hover:opacity-100'>
          <Link to="/contact">Contact</Link>
        </li>

        <li className='cursor-pointer hover:opacity-100'>
          <a href="https://github.com/vanshchwdhary" target="_blank" rel="noopener noreferrer">GitHub</a>
        </li>

        <li className='cursor-pointer hover:opacity-100'>
          <a href="https://leetcode.com/vanshchwdhary" target="_blank" rel="noopener noreferrer">LeetCode</a>
        </li>
      </ul>
    </nav>
  );
}
