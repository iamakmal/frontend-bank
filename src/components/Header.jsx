import React from 'react'
import { MapPinIcon } from '@heroicons/react/24/outline'
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'

export default function Header() {
    return (
        <>
            <div className="flex justify-between items-center px-5 mt-5 mb-5">
                <img src="logo.jpg" alt="logo" className="h-12 ml-5" />
                <div className="flex items-center gap-5 mr-10">
                    <label className="input input-bordered border-main border-2 border- flex items-center gap-2 text-main rounded-3xl">
                        <input type="text" className="grow placeholder-main" placeholder="Search" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </label>
                    <MapPinIcon className="size-10 text-main" />
                    <ChatBubbleLeftRightIcon className="size-10 text-main" />
                </div>
            </div>
            <div>
                <ul className="menu menu-horizontal border-t-2 border-black group px-1 text-xl flex justify-center gap-5 ">
                    <li><a className="hover:font-bold">Bank Accounts</a></li>
                    <li><a className="hover:font-bold">Credit Card</a></li>
                    <li><a className="hover:font-bold">Mortgages</a></li>
                    <li><a className="hover:font-bold">Lending</a></li>
                    <li><a className="hover:font-bold">Investments</a></li>
                    <li><a className="hover:font-bold">Insurance</a></li>
                    <li><a className="hover:font-bold">Ways to Bank</a></li>
                </ul>
            </div>
        </>
    )
}
