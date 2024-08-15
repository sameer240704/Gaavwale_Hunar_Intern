import React, { useState } from 'react'
import { IoAddCircleOutline } from "react-icons/io5";

const Notes = () => {

    const [ranges, setRanges] = useState({
        heart: 60,
        blood: 120,
        blood2: 80,
        temperature: 36,
        weight: 50,
    });

    const handleRangeChange = (event) => {
        const { name, value } = event.target;
        setRanges({
            ...ranges,
            [name]: value,
        });
    };

    return (
        <div className=' h-screen flex flex-col justify-center items-start p-10 gap-3'>
            <h1 className='text-7xl font-serif text-green-600'>Notes</h1>
            <label htmlFor="">Details:</label>
            <textarea name="Notes" className='size-3/5 bg-white/60 resize-none p-3 border-2 border-green-600/60 outline-none rounded-md' >
            </textarea>
            <label htmlFor="">Prescreption Name:</label>
            <input type="text" className='w-3/5 bg-white/60 resize-none p-3 border-2 border-green-600/60 outline-none rounded-md' />
            <div className="w-3/5 flex justify-start items-center gap-3 h-auto">
                <div className='w-1/2 flex flex-col gap-3'>
                    <label htmlFor="">Prescreption Time:</label>
                    <input type="time" className='w-full bg-white/60 resize-none p-3 border-2 border-green-600/60 outline-none rounded-md' />
                    {/* <label htmlFor="" className="flex gap-2">
                        <button className='border-2 px-3 py-1 bg-white/60 rounded-md hover:bg-gray-200 hover:border-gray-200 transition delay-100 ease-in'>AM</button>
                        <button className='border-2 px-3 py-1 bg-white/60 rounded-md hover:bg-gray-200 hover:border-gray-200 transition delay-100 ease-in'>PM</button>
                    </label> */}
                </div>
                <div className='w-1/2 flex flex-col gap-3'>
                    <label htmlFor="">Prescreption Schedule: (per day)</label>
                    <input type="number" className='w-full bg-white/60 resize-none p-3 border-2 border-green-600/60 outline-none rounded-md' />
                </div>
            </div>

            {/* Progress */}
            <div className='w-3/5 flex flex-col justify-start items-start gap-3 h-auto mt-10'>
                <h1 className='text-4xl font-serif text-green-600'>Progress</h1>

                <div className='w-full grid grid-cols-2 gap-3'>
                    <div className="gap-5 w-full">
                        <label htmlFor="">Heart Beat: (per min)</label>
                        <span className="ml-2 border-2 px-3 py-1 bg-white/60 rounded-md hover:bg-gray-200 hover:border-gray-200 transition delay-100 ease-in">{ranges.heart}</span>
                        <input
                            type="range"
                            name="heart"
                            min="0"
                            max="200"
                            value={ranges.heart}
                            onChange={handleRangeChange}
                            className='slider-green w-full bg-white/60 resize-none my-4'
                            style={{
                                background: `linear-gradient(to right, #16a34a 0%, #16a34a ${ranges.heart / 2}%, #e5e7eb ${ranges.heart / 2}%, #e5e7eb 100%)`
                            }}
                        />
                    </div>
                    <div className="gap-5 w-full">
                        <label htmlFor="">Blood Pressure: (per mmHg)</label>
                        <span className="ml-2 border-2 px-3 py-1 bg-white/60 rounded-md hover:bg-gray-200 hover:border-gray-200 transition delay-100 ease-in">{ranges.blood}</span>/
                        <span className="ml-2 border-2 px-3 py-1 bg-white/60 rounded-md hover:bg-gray-200 hover:border-gray-200 transition delay-100 ease-in">{ranges.blood2}</span>
                        <div className="flex gap-4">
                            <input
                                type="range"
                                name="blood"
                                min="100"
                                max="200"
                                value={ranges.blood}
                                onChange={handleRangeChange}
                                className='slider-green w-full bg-white/60 resize-none my-4'
                                style={{
                                    background: `linear-gradient(to right, #16a34a 0%, #16a34a ${ranges.blood - 100}%, #e5e7eb ${ranges.blood - 100}%, #e5e7eb 100%)`
                                }}
                            />
                            <input
                                type="range"
                                name="blood2"
                                min="60"
                                max="140"
                                value={ranges.blood2}
                                onChange={handleRangeChange}
                                className='slider-green w-full bg-white/60 resize-none my-4'
                                style={{
                                    background: `linear-gradient(to right, #16a34a 0%, #16a34a ${(ranges.blood2 - 60) / 0.8}%, #e5e7eb ${(ranges.blood2 - 60) / 0.8}%, #e5e7eb 100%)`
                                }}
                            />
                        </div>
                    </div>
                    <div className="gap-5 w-full">
                        <label htmlFor="">Temperature: (°C)</label>
                        <span className="ml-2 border-2 px-3 py-1 bg-white/60 rounded-md hover:bg-gray-200 hover:border-gray-200 transition delay-100 ease-in">{ranges.temperature}</span>
                        <input
                            type="range"
                            name="temperature"
                            min="30"
                            max="50"
                            value={ranges.temperature}
                            onChange={handleRangeChange}
                            className='slider-green w-full bg-white/60 resize-none my-4'
                            style={{
                                background: `linear-gradient(to right, #16a34a 0%, #16a34a ${(ranges.temperature - 30) / 0.2}%, #e5e7eb ${(ranges.temperature - 30) / 0.2}%, #e5e7eb 100%)`
                            }}
                        />
                    </div>
                    <div className="gap-5 w-full">
                        <label htmlFor="">Weight: (kg)</label>
                        <span className="ml-2 border-2 px-3 py-1 bg-white/60 rounded-md hover:bg-gray-200 hover:border-gray-200 transition delay-100 ease-in">{ranges.weight}</span>
                        <input
                            type="range"
                            name="weight"
                            min="0"
                            max="200"
                            step="0.01"
                            value={ranges.weight}
                            onChange={handleRangeChange}
                            className='slider-green w-full bg-white/60 resize-none my-4'
                            style={{
                                background: `linear-gradient(to right, #16a34a 0%, #16a34a ${ranges.weight / 2}%, #e5e7eb ${ranges.weight / 2}%, #e5e7eb 100%)`
                            }}
                        />
                    </div>
                </div>
                <button className='border-2 text-xl px-3 py-1 bg-white rounded-md hover:bg-green-600 hover:text-white shadow font-serif shadow-green-600 border-green-600 transition delay-100 ease-in '>Submit</button>
            </div>
        </div>
    )
}

export default Notes