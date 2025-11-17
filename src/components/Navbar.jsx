import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItem = (to, label) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
          isActive ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
        }`
      }
      onClick={() => setOpen(false)}
    >
      {label}
    </NavLink>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600" />
            <span className="font-bold text-gray-900">Eventify</span>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            {navItem('/', 'Home')}
            {navItem('/about', 'About Us')}
            {navItem('/blogs', 'Blogs')}
            {navItem('/contact', 'Contact')}
          </nav>

          <div className="md:hidden">
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen(!open)}
              className="p-2 rounded-md border border-gray-200"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-1">
              {navItem('/', 'Home')}
              {navItem('/about', 'About Us')}
              {navItem('/blogs', 'Blogs')}
              {navItem('/contact', 'Contact')}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
