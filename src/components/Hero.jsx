import React from 'react'

export default function Hero() {
    return (
        <div className="h-screen bg-cover bg-center flex justify-end" style={{ backgroundImage: 'url("hero.jpg")' }}>
            <div className="flex flex-col justify-center items-end h-full w-[500px] text-white mr-16">
                <p className="text-3xl font-semibold mb-5">Together, We can Make It Happen</p>
                <p className="text-2xl">See how our clients help move our economy forward and uplift our communities</p>
            </div>
        </div>
    )
}
