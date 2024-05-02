import React from 'react'

export default function Navbar() {
  return (
    <div className="navbar bg-main text-white min-h-5 h-12">
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal group px-1 text-xl">
      <li><a className="hover:text-main hover:bg-[#D9D9D9] rounded-none">Personal</a></li>
      <li><a className="hover:text-main hover:bg-[#D9D9D9] rounded-none">Business</a></li>
      <li><a className="hover:text-main hover:bg-[#D9D9D9] rounded-none">Commercial</a></li>
      <li><a className="hover:text-main hover:bg-[#D9D9D9] rounded-none">Wealth</a></li>
      <li><a className="hover:text-main hover:bg-[#D9D9D9] rounded-none">About HSBC</a></li>
    </ul>
  </div>
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><a>Personal</a></li>
      <li><a>Business</a></li>
      <li><a>Commercial</a></li>
      <li><a>Wealth</a></li>
      <li><a>About HSBC</a></li>
      </ul>
    </div>
  </div>
  <div className="navbar-end">
  <ul className="menu menu-horizontal px-1 text-base">
      <li>
        <details>
          <summary>English</summary>
          <ul className="p-2 text-black">
            <li><a>Sinhala</a></li>
            <li><a>Tamil</a></li>
          </ul>
        </details>
      </li>
    </ul>
    <a className="btn btn-link text-white text-base">Login</a>
  </div>
</div>
  )
}
