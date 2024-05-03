import React from 'react'

export default function News() {
    return (
        <div className="m-10">
        <h1 className="text-3xl mt-20 mb-20 ml-11 font-semibold">Latest News</h1>
        <div className="flex flex-wrap gap-10 justify-center pb-10">
            <div className="card w-96 bg-base-100 shadow-lg rounded-none">
            <figure>
                <img src="news1.jpg" alt="news1" className="h-[252px] w-full" />
            </figure>
            <div className="card-body pt-4">
                <h2 className="text-2xl font-bold font-serif">Tips for using your credit card</h2>
                <p className="text-base">From managing your spending to building credit, here are some tips to help you make the most of your credit card.</p>
                <div className="card-actions justify-end">
                <button className="btn btn-link no-underline text-black text-base font-normal">Learn More &gt;</button>
                </div>
            </div>
            </div>

            <div className="card w-96 bg-base-100 shadow-lg rounded-none">
            <figure>
                <img src="news2.jpg" alt="news2" className="h-[252px] w-full" />
            </figure>
            <div className="card-body pt-4">
                <h2 className="text-2xl font-bold font-serif">Tips for investing in your future</h2>
                <p className="text-base">Trade smarter, not harder, with HSBC Investor's Edge.</p>
                <p className="text-base">Open a new HSBC Investor's Edge account.</p>
                <div className="card-actions justify-end">
                <button className="btn btn-link no-underline text-black text-base font-normal">Learn More &gt;</button>
                </div>
            </div>
            </div>

            <div className="card w-96 bg-base-100 shadow-lg rounded-none">
            <figure>
                <img src="news3.jpeg" alt="news3" className="h-[252px] object-cover w-full" />
            </figure>
            <div className="card-body pt-4">
                <h2 className="text-2xl font-bold font-serif">Different types of credit cards</h2>
                <p className="text-base">Get to know the differences between the main types of credit cards and how they could match your needs and wants.</p>
                <div className="card-actions justify-end">
                <button className="btn btn-link no-underline text-black text-base font-normal">Learn More &gt;</button>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}
