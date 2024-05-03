import React from 'react'
import { BuildingLibraryIcon } from '@heroicons/react/24/outline'
import { CalendarIcon } from '@heroicons/react/24/outline'
import { ClockIcon } from '@heroicons/react/24/outline'
import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline'

export default function Whybank() {
  return (
    <div className="m-10">
    <h1 className="text-3xl mt-16 mb-10 ml-11 font-semibold">Why bank with HSBC?</h1>
    <div className="grid md:grid-cols-2 gap-10 px-5">
    <div className="flex items-center gap-5 px-5">
        <BuildingLibraryIcon className="size-24 text-main" />
        <p className="text-2xl">As one of Sri Lanka's largest banking networks, we're easy to find</p>
    </div>
    <div className="flex items-center gap-5 px-5">
        <CalendarIcon className="size-24 text-main" />
        <p className="text-2xl">Meet with us for advice on selecting the right account for you</p>
    </div>
    <div className="flex items-center gap-5 px-5">
        <ClockIcon className="size-24 text-main" />
        <p className="text-2xl">Get a free credit score instantly with our HSBC Mobile App</p>
    </div>
    <div className="flex items-center gap-5 px-5">
        <ChatBubbleBottomCenterTextIcon className="size-24 text-main" />
        <p className="text-2xl">Send money to over 120 countries and pay no transfer fee</p>
    </div>
    </div>
    </div>
  )
}
