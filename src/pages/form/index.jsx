import { TextField } from '@mui/material'
import { useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

// Regex for determine the file extension
const allowedExtensions = /(\.pdf|\.txt|\.doc)$/i;
const url = 'http://127.0.0.1:8000/api/application/';

const Form = () => {
    // file handling
    const [file, setFile] = useState()
    const [ext, setExt] = useState()
    const [size, setSize] = useState()
    const filename = file && file.split('\\').pop()

    // Server response
    const [msg, setMsg] = useState()
    const [error, setError] = useState()


    // let ext = allowedExtensions.exec(file)
    const ref = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formdata = new FormData(e.target);
        let name = formdata.get('name')
        let email = formdata.get('email')
        let contact = formdata.get('contact')
        let desirejob = formdata.get('desirejob')
        let cv = formdata.get('cv')
        const ext = allowedExtensions.exec(cv.name)
        setExt(ext === null ? "This file extension is not match with above mention." : null)
        setSize(cv.size >= 2000000 ? "File size is greater than 2MB." : null)
        const data = { name: name, email: email, contact: contact, desirejob: desirejob, resume: cv }
        if (ext && size === null) {
            try {
                const res = await axios.post(url, data, { headers: { 'Content-Type': 'multipart/form-data' } })
                if (res.data) {
                    ref.current.reset()
                    toast('Congratulation! Resume uploaded successfully!!')
                }
                console.log(res)
            } catch (e) {
                console.log(e)
                toast('Opps! something went wrong. Please try again!!')
            }
        }

    }

    return (
        <main className='itemCenter px-4 md:0'>
            <div className='w-[600px] py-10'>
                <h1 className='text-2xl mb-4'>Apply to Employment</h1>
                <p>Join our team - Apply now for exciting opportunities!</p>
                <div className='relative mt-10'>
                    <div className='p-4 md:p-10 shadow-lg bg-gray-50 bg-opacity-50 backdrop-filter backdrop-blur-sm'>
                        <form onSubmit={handleSubmit} encType="multipart/form-data" ref={ref} className='flex gap-4 flex-col'>
                            <TextField type="text" name='name' label="Full Name" variant='outlined' fullWidth required />
                            <TextField type="email" name='email' label="Email" variant='outlined' fullWidth required />
                            <TextField type="number" name='contact' label="Contact" variant='outlined' fullWidth required />
                            <TextField type="text" name='desirejob' label="Desire Job" variant='outlined' fullWidth required />
                            <div className=' mt-2'>
                                <label htmlFor='cv' className='border-[1px] p-2 rounded-xl mr-2 border-gray-500 cursor-pointer'>Upload CV</label>
                                <input id="cv" name='cv' type="file" onChange={(e) => setFile(e.target.value)} hidden />
                                <span className='text-sm italic text-gray-500'>PDF, TXT, DOC (2 MB)</span>
                                <span className='text-blue-500 ml-2'>{filename}</span>
                                <div className='mt-2 text-red-500'>
                                    <span>{ext || size}</span>
                                </div>
                            </div>
                            <button type='submit' className='bg-green-500 py-4 text-white hover:bg-green-700 rounded mt-4'>Submit</button>
                            <ToastContainer />
                        </form>
                    </div>
                    <div className='absolute -top-24 -right-10 -z-30'>
                        <img src="./img/doc.png" className='object-cover' alt="" />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Form