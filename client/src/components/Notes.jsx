import React, { useState } from 'react'
import { IoAddCircleOutline } from "react-icons/io5";
import { useParams } from 'react-router-dom';

const Notes = () => {

    // const [ranges    , setRanges] = useState({
    //     heart: 60,
    //     blood: 120,
    //     blood2: 80,
    //     temperature: 36,
    //     weight: 50,
    // });

    const handleRangeChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handlePressureChange = (event) => {
        const { name, value } = event.target;
        const updatedPressure = formData.bloodPressure.map((bp, index) => {
            if (index === 0) {
                return {
                    ...bp,
                    [name]: value
                }
            }
            return bp;
        });
        setFormData({
            ...formData,
            bloodPressure: updatedPressure
        });
    };

    const [formData, setFormData] = useState({
        details: "",
        prescriptionName: "",
        prescriptionTime: "",
        prescriptionSchedule: "",
        heartRate: 60,
        bloodPressure: [
            {
                systollic: 120,
                diastollic: 80,
            }
        ],
        temperature: 36,
        weight: 50,
    });

    const handleSubmit = () => {
        console.log(formData);
    }
    const params = useParams();
    const patientId = params.patientId;
    const doctorId = params.doctorId;

    return (
        <div className=' h-screen flex flex-col justify-center items-start p-10 gap-3'>
            <h1 className='text-7xl font-serif text-green-600'>Notes</h1>
            <label htmlFor="">Patient Name:</label>
            <h2>{patientId}</h2>
            <label htmlFor="">Details:</label>
            <textarea name="details" onChange={handleRangeChange} className='size-3/5 bg-white/60 resize-none p-3 border-2 border-green-600/60 outline-none rounded-md' >
            </textarea>
            <label htmlFor="">Prescreption Name:</label>
            <input type="text" name='prescriptionName' onChange={handleRangeChange} className='w-3/5 bg-white/60 resize-none p-3 border-2 border-green-600/60 outline-none rounded-md' />
            <div className="w-3/5 flex justify-start items-center gap-3 h-auto">
                <div className='w-1/2 flex flex-col gap-3'>
                    <label htmlFor="">Prescreption Time:</label>
                    <input
                        type="time"
                        name='prescriptionTime'
                        onChange={handleRangeChange}
                        className='w-full bg-white/60 resize-none p-3 border-2 border-green-600/60 outline-none rounded-md' />
                </div>
                <div className='w-1/2 flex flex-col gap-3'>
                    <label htmlFor="">Prescreption Schedule: (per day)</label>
                    <input
                        type="number"
                        name='prescriptionSchedule'
                        onChange={handleRangeChange}
                        className='w-full bg-white/60 resize-none p-3 border-2 border-green-600/60 outline-none rounded-md' />
                </div>
            </div>

            {/* Progress */}
            <div className='w-3/5 flex flex-col justify-start items-start gap-3 h-auto mt-10'>
                <h1 className='text-4xl font-serif text-green-600'>Progress</h1>

                <div className='w-full grid grid-cols-2 gap-3'>
                    <div className="gap-5 w-full">
                        <label htmlFor="">Heart Beat: (per min)</label>
                        <span className="ml-2 border-2 px-3 py-1 bg-white/60 rounded-md hover:bg-gray-200 hover:border-gray-200 transition delay-100 ease-in">{formData.heartRate}</span>
                        <input
                            type="range"
                            name="heartRate"
                            min="0"
                            max="200"
                            value={formData.heartRate}
                            onChange={handleRangeChange}
                            className='slider-green w-full bg-white/60 resize-none my-4'
                            style={{
                                background: `linear-gradient(to right, #16a34a 0%, #16a34a ${formData.heartRate / 2}%, #e5e7eb ${formData.heartRate / 2}%, #e5e7eb 100%)`
                            }}
                        />
                    </div>
                    {formData.bloodPressure.map((bp, index) =>
                        < div className="gap-5 w-full"
                            key={index}
                        >
                            <label htmlFor="">Blood Pressure: (per mmHg)</label>
                            <span className="ml-2 border-2 px-3 py-1 bg-white/60 rounded-md hover:bg-gray-200 hover:border-gray-200 transition delay-100 ease-in">{bp.systollic}</span> /
                            <span className="ml-2 border-2 px-3 py-1 bg-white/60 rounded-md hover:bg-gray-200 hover:border-gray-200 transition delay-100 ease-in">{bp.diastollic}</span>
                            <div className="flex gap-4">
                                <input
                                    type="range"
                                    name="systollic"
                                    min="100"
                                    max="200"
                                    value={bp.systollic}
                                    onChange={handlePressureChange}
                                    className='slider-green w-full bg-white/60 resize-none my-4'
                                    style={{
                                        background: `linear-gradient(to right, #16a34a 0%, #16a34a ${bp.systollic - 100}%, #e5e7eb ${bp.systollic - 100}%, #e5e7eb 100%)`
                                    }}
                                />
                                <input
                                    type="range"
                                    name="diastollic"
                                    min="60"
                                    max="140"
                                    value={bp.diastollic}
                                    onChange={handlePressureChange}
                                    className='slider-green w-full bg-white/60 resize-none my-4'
                                    style={{
                                        background: `linear-gradient(to right, #16a34a 0%, #16a34a ${(bp.diastollic - 60) / 0.8}%, #e5e7eb ${(bp.diastollic - 60) / 0.8}%, #e5e7eb 100%)`
                                    }}
                                />
                            </div>
                        </div>
                    )}
                    <div className="gap-5 w-full">
                        <label htmlFor="">Temperature: (°C)</label>
                        <span className="ml-2 border-2 px-3 py-1 bg-white/60 rounded-md hover:bg-gray-200 hover:border-gray-200 transition delay-100 ease-in">{formData.temperature}</span>
                        <input
                            type="range"
                            name="temperature"
                            min="30"
                            max="50"
                            value={formData.temperature}
                            onChange={handleRangeChange}
                            className='slider-green w-full bg-white/60 resize-none my-4'
                            style={{
                                background: `linear-gradient(to right, #16a34a 0%, #16a34a ${(formData.temperature - 30) / 0.2}%, #e5e7eb ${(formData.temperature - 30) / 0.2}%, #e5e7eb 100%)`
                            }}
                        />
                    </div>
                    <div className="gap-5 w-full">
                        <label htmlFor="">Weight: (kg)</label>
                        <span className="ml-2 border-2 px-3 py-1 bg-white/60 rounded-md hover:bg-gray-200 hover:border-gray-200 transition delay-100 ease-in">{formData.weight}</span>
                        <input
                            type="range"
                            name="weight"
                            min="0"
                            max="200"
                            step="0.01"
                            value={formData.weight}
                            onChange={handleRangeChange}
                            className='slider-green w-full bg-white/60 resize-none my-4'
                            style={{
                                background: `linear-gradient(to right, #16a34a 0%, #16a34a ${formData.weight / 2}%, #e5e7eb ${formData.weight / 2}%, #e5e7eb 100%)`
                            }}
                        />
                    </div>
                </div>
                <button onClick={handleSubmit} className='border-2 text-xl px-3 py-1 bg-white rounded-md hover:bg-green-600 hover:text-white shadow font-serif shadow-green-600 border-green-600 transition delay-100 ease-in '>Submit</button>
            </div>
        </div >
    )
}

export default Notes