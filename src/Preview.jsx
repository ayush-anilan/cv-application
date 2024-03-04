import React from 'react'



function Preview({ formData }) {
    return (
        <div className='preview font-serif w-128 h-140 p-5'>
            <div className='personal  text-center py-5'>
                <div>
                    <h1 className='text-2xl font-semibold'>{formData.name}</h1>
                </div>
                <div className='flex justify-center'>
                    <ul className='flex gap-5 text-lg'>
                        <li>{formData.phone}</li>
                        <li>{formData.email}</li>
                    </ul>
                </div>
            </div>
            <div className='education   my-5  flex flex-col gap-2'>
                <div className='heading flex flex-col gap-2'>
                    <h1 className='font-semibold text-xl'>EDUCATION</h1>
                    <hr className='border-2 border-black' />
                </div>
                <div className="course-name">
                    <p className='text-lg font-semibold'>{formData.course}</p>
                </div>
                <div className='flex justify-between'>
                    <div className='college-name'>
                        <p className='text-base '>{formData.college}</p>
                    </div>
                    <div className="date-of-study">
                        <p className='text-base'>{formData.date}</p>
                    </div>
                </div>
            </div>
            <div className='projects  my-5 flex flex-col gap-2'>
                <div className='heading flex flex-col gap-2'>
                    <h1 className='font-semibold text-xl'>PROJECTS</h1>
                    <hr className='border-2 border-black' />
                </div>
                <div className="project-name">
                    <p className='text-lg font-semibold'>{formData.project}</p>
                </div>
                <div className="project-details">
                    <ul className='list-disc list-inside'>
                        <li>{formData.details}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Preview