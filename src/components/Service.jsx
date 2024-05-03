import React from 'react'
import { CreditCardIcon, HomeIcon, AcademicCapIcon, BanknotesIcon } from '@heroicons/react/24/solid'

export default function Service() {
    return (
        <div className="m-10">
            <h1 className="text-3xl mt-16 mb-10 ml-11 font-semibold">Popular Services</h1>
            <div className="grid md:grid-cols-4 justify-items-center">

                <div className="flex flex-col items-center text-center gap-5">
                    <div className="rounded-full bg-[#F3F3F3] p-8"><CreditCardIcon className="size-24 text-[#981a32]"/></div>
                    <p className="text-main"><a>Cards &gt;&gt;</a></p>
                </div>

                <div className="flex flex-col items-center text-center gap-5">
                <div className="rounded-full bg-[#F3F3F3] p-8"><HomeIcon className="size-24 text-[#981a32]"/></div>
                    <p className="text-main"><a>Buying a Home &gt;&gt;</a></p>
                </div>

                <div className="flex flex-col items-center text-center gap-5">
                <div className="rounded-full bg-[#F3F3F3] p-8"><BanknotesIcon className="size-24 text-[#981a32]"/></div>    
                    <p className="text-main"><a>Line of Credit &gt;&gt;</a></p>
                </div>

                <div className="flex flex-col items-center text-center gap-5">
                <div className="rounded-full bg-[#F3F3F3] p-8"><AcademicCapIcon className="size-24 text-[#981a32]"/></div>
                    <p className="text-main"><a>Student Banking &gt;&gt;</a></p>
                </div>

            </div>
        </div>
    )
}
