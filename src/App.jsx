import { useState } from 'react'
import './App.css'
import Form from './Form'
import Preview from './Preview'
import jsPDF from 'jspdf';


function App() {
  const [formData, setFormData] = useState({ name: 'Name', phone: 'Phone', email: 'email', college: 'college', course: 'course', date: 'date', project: 'project name', details: 'project-details' })

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value })
  }



  const handleDownloadCV = () => {
    const doc = new jsPDF('p', 'pt', [595.28, 841.89]); // Create a new PDF document

    // Get the preview component content as HTML string
    const previewContent = document.querySelector('.preview').innerHTML;


    // Add HTML content to the PDF with proper styling
    doc.html(previewContent, {
      callback: function (pdf) {
        pdf.save('my-cv.pdf'); // Set desired filename
      },
    });
  };

  return (
    <div className='relative container mx-auto flex w-full my-5 gap-10'>
      <div className='form w-2/4 border'>

        <Form formData={formData} onChange={handleChange} />
      </div>
      <div className='w-2/4'>
        <div className="preview border w-128 h-140">
          <Preview formData={formData} />
        </div>
        <div className="download-button">
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3' onClick={handleDownloadCV}>Download CV</button>
        </div>
      </div>
    </div>

  )
}

export default App
