import React from 'react'
import { MapPinIcon } from '@heroicons/react/24/outline'

export default function Footer() {
    return (
        <footer className="footer p-10 bg-[#373636] text-neutral-content flex flex-col">
        <div className="flex justify-evenly items-center px-5 mt-5 mb-5 w-full" id="logo">
        <img src="footerlogo.png" alt="logo" className="ml-5" />
            <div className="flex flex-col items-center gap-5 mr-10">
                <div className="flex items-center gap-5">
                    <MapPinIcon className="size-10 text-main" />
                    <p className="text-lg">Find a branch or ATM</p>
                </div> 
                <label className="input input-bordered border-[#373636] border-2 border- flex items-center gap-2 text-[#373636] rounded-3xl">
                <input type="text" className="placeholder-[#373636] w-[300px]" placeholder="Enter address or postal code" />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                </label>
            </div>
        </div> 
        <div class="divider before:bg-gray-300 px-4"></div>
        <div className="flex justify-evenly w-full text-lg">
        <nav className="flex flex-col">
                <h6 className="footer-title">Our Company</h6>
                <a className="link link-hover">Learn About Us</a>
                <a className="link link-hover">Discover Special Offers</a>
                <a className="link link-hover">Privacy Policy</a>
                <a className="link link-hover">Contact Us</a>
            </nav>
            <nav className="flex flex-col">
                <h6 className="footer-title">Personal Banking</h6>
                <a className="link link-hover">Bank Accounts</a>
                <a className="link link-hover">Credit Cards</a>
                <a className="link link-hover">Mortgages</a>
                <a className="link link-hover">Lending</a>
                <a className="link link-hover">Investments</a>
                <a className="link link-hover">Insurance</a>
                <a className="link link-hover">Ways to Bank</a>
            </nav>
            <nav className="flex flex-col">
                <h6 className="footer-title">Business Banking</h6>
                <a className="link link-hover">Commercial</a>
                <a className="link link-hover">Corporate Profile</a>
                <a className="link link-hover">Corporate Responsibility</a>
                <a className="link link-hover">Investor Relations</a>
                <a className="link link-hover">Media Centre</a>
            </nav>
        </div>  
        <div className="flex justify-center items-center w-full">
        <h1 className="">Solution by Xiteb</h1>
        </div>
        </footer>
    )
}
