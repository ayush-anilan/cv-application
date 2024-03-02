import React, { useState } from 'react'

function Form({ formData, onChange }) {
    return (
        <div className='bg-gray-500 py-5'>
            <div className='personal-details bg-white border m-5 flex flex-col gap-2 rounded-sm '>
                <h1 className='text-center pt-5  text-2xl font-semibold leading-none'>Personal Details</h1>
                <div className='flex flex-col px-10 pb-5 gap-4'>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input value={formData.name} onChange={onChange} type="text" name="name" id="name" className='text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:text-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400' />
                    </div>
                    <div>

                        <label htmlFor="email">Email:</label>
                        <input value={formData.email} onChange={onChange} type="email" name="email" id="email" className='text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:text-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400' />
                    </div>
                    <div>

                        <label htmlFor="phone">Phone:</label>
                        <input value={formData.phone} onChange={onChange} type="tel" name="phone" id="phone" className='text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:text-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400' />
                    </div>
                </div>
            </div>
            <div className='education-details bg-white border m-5 flex flex-col gap-2 rounded-sm '>
                <h1 className='text-center pt-5  text-2xl font-semibold leading-none'>Education Details</h1>
                <div className='flex flex-col px-10 pb-5 gap-4'>
                    <div>

                        <label htmlFor="school">College Name:</label>
                        <input value={formData.college} onChange={onChange} type="text" name="college" id="college" className='text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:text-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400' />
                    </div>
                    <div>

                        <label htmlFor="course">Course Name:</label>
                        <input value={formData.course} onChange={onChange} type="text" name="course" id="course" className='text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:text-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400' />
                    </div>
                    <div>

                        <label htmlFor="dateofstudy">Date Of Study: </label>
                        <input value={formData.date} onChange={onChange} type="text" name="date" id="date" className='text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:text-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400' />
                    </div>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3'>Add Education</button>
                </div>
            </div>
            <div className='project-details bg-white border m-5 flex flex-col gap-2 rounded-sm'>
                <h1 className='text-center pt-5  text-2xl font-semibold leading-none'>Project Details</h1>
                <div className='flex flex-col px-10 pb-5 gap-4'>
                    <div>


                        <label htmlFor="project-name">Project Name:</label>
                        <input value={formData.project} onChange={onChange} type="text" name="project-name" id="project" className='text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:text-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400' />
                    </div>
                    <div>

                        <label htmlFor="project details">Project Details:</label>
                        <input value={formData.details} onChange={onChange} type="text" name="project-details" id="details" className='text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:text-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400' />
                    </div>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3'>Add Projects</button>
                </div>
            </div>
        </div>
    )
}

export default Form