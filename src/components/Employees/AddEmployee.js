import React ,{useState}  from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddEmployee = () => {

  const [firstname, setFname] = useState('')
  const [lastname, setLname] = useState('')
  const [othernames, setOname] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [department, setDepartment] = useState('')
  const [ccr, setCcr] = useState('')
  const [fullTime, setFullTime] = useState('')
  const [date, setDate] = useState('')
  const [udate, setUdate] = useState('')
  const [male, setMale] = useState('')
  const [female, setFemale] = useState('')
  const [single, setSingle] = useState('')
  const [married, setMarried] = useState('')
  const [others, setOthers] = useState('')
  const [file, setFile] = useState('')

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:5000/api/v1/add',
      JSON.stringify({firstname,lastname,email,phone,address,ccr,fullTime,date,udate,male,female,single,married,others,file}),
    {
      headers : { 'Content-type' : 'application/json'},
      withCredentials : true
    });
    console.log(JSON.stringify(response))
    console.log(response?.data)
    console.log(response?.accessToken)
    toast.success("Added Successfull")
    navigate('/employees')
    } catch (error) {
      if (!error?.response) {
        toast.error('No Server Response');
      } else if (error.response?.status === 400) {
        toast.error('All fields are required');
      } else if (error.response?.status === 409) {
        toast.error('Username Taken');
      } else {
        toast.error('Registration Failed')
      }
      console.log(error)
      console.log(error.response)
    }
  }

  return (
    <main>
      <section className="container mx-auto p-4">
        <div className="bg-white p-4 rounded-lg">
          <div className="p-4">
            <p className="text-2xl"><b>Add Employee</b></p>
          </div>
          <hr />
          <form onSubmit={handleSubmit} className="md:grid grid-cols-3 gap-4">
            <div>
              <div className="mx-4">
                <label htmlFor="">First Name</label>
                <input 
                  type="text" 
                  name="firstname" id="firstname"
                  className="px-3 py-1 w-44 bg-slate-100 border  border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  focus:ring-1"
                  required
                  value={firstname}
                  onChange = { (e) => setFname(e.target.value) }
                />
              </div>
              <div className="mx-4">
                <label htmlFor="">Last Name</label>
                <input 
                  type="text" 
                  name="lastname" id="lastname"
                  className="px-3 py-1 w-44 bg-slate-100 border  border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  focus:ring-1"
                  required
                  value={lastname}
                  onChange = { (e) => setLname(e.target.value) }
                />
              </div>
              <div className="mx-4">
                <label htmlFor="">Other Names</label>
                <input 
                  type="text" 
                  name="othernames" id="othernames"
                  className="px-3 py-1 w-44 bg-slate-100 border  border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  focus:ring-1"
                  required
                  value={othernames}
                  onChange = { (e) => setOname(e.target.value) }
                />
              </div>
              <div className="mx-4">
                <label htmlFor="">Email</label>
                <input 
                  type="email" 
                  name="email" id="email"
                  className="px-3 py-1 w-44 bg-slate-100 border  border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  focus:ring-1"
                  required
                  value={email}
                  onChange = { (e) => setEmail(e.target.value) }
                />
              </div>
              <div className="mx-4">
                <label htmlFor="">Phone</label>
                <input 
                  type="number" 
                  name="number" id="number"
                  className="px-3 py-1 w-44 bg-slate-100 border  border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  focus:ring-1"
                  required
                  value={phone}
                  onChange = { (e) => setPhone(e.target.value) }
                />
              </div>
              <div className="mx-4">
                <label htmlFor="">Address</label>
                <input 
                  type="text" 
                  name="address" id="address"
                  className="px-3 py-1 w-44 bg-slate-50 border  border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  focus:ring-1"
                  required
                  value={address}
                  onChange = { (e) => setAddress(e.target.value) }
                />
              </div>
            </div>
            <div>
              <div className="mx-4">
                <label htmlFor="">Department</label>
                <select 
                  className="px-3 py-1 w-44 bg-slate-50 border  border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  focus:ring-1"
                  required
                  onChange = { (e) => setDepartment(e.target.value) }
                  name="department" id="department">
                  <option value={department} >Choose</option>
                  <option value={department}>Ccr</option>
                </select>
              </div>
              <div className="mx-4">
                <label htmlFor="">Position</label>
                <select 
                  className="px-3 py-1 w-44 bg-slate-50 border  border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  focus:ring-1"
                  required
                  name="position" id="position">
                  <option value="sfsd">Selct Position</option>
                  <option value={ccr} onChange = { (e) => setCcr(e.target.value) }>ccr</option>
                </select>
              </div>
              <div className="mx-4">
                <label htmlFor="">Duty Type</label>
                <select 
                  className="px-3 py-1 w-44 bg-slate-50 border  border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  focus:ring-1"
                  required
                  onChange = { (e) => setFullTime(e.target.value) }
                  name="duty" id="duty">
                  <option value="">Time</option>
                  <option value={fullTime}>Full Time</option>
                  <option value={fullTime}>Part Time</option>
                </select>
              </div>
              <div className="mx-4">
                <label htmlFor="">Hire Date</label>
                <input 
                  type="date" 
                  name="date" id="date"
                  className="px-3 py-1 w-44 bg-slate-50 border  border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  focus:ring-1"
                  required
                  value={date}
                  onChange = { (e) => setDate(e.target.value) }
                />
              </div>
              <div className="mx-4">
                <label htmlFor="">Until Date</label>
                <input 
                  type="date" 
                  name="udate" id="udate"
                  className="px-3 py-1 w-44 bg-slate-50 border  border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  focus:ring-1"
                  required
                  value={udate}
                  onChange = { (e) => setUdate(e.target.value) }
                />
              </div>
            </div>
            <div>
              <div className="mx-4">
                <label htmlFor="">Date of Birth</label>
                <input 
                  type="date" 
                  name="birth" id="birth"
                  className="px-3 py-1 w-44 bg-slate-50 border  border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  focus:ring-1"
                  required
                  value={date}
                  onChange = { (e) => setDate(e.target.value) }
                />
              </div>
              <div className="mx-4">
                <label htmlFor="">Gender</label>
                <select 
                  className="px-3 py-1 w-44 bg-slate-50 border  border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  focus:ring-1"
                  required
                  name="gender" id="gender">
                  <option value={male} onChange = { (e) => setMale(e.target.value) }>Male</option>
                  <option value={female} onChange = { (e) => setFemale(e.target.value) }>Female</option>
                </select>
              </div>
              <div className="mx-4">
                <label htmlFor="">Marrital Status</label>
                <select 
                  className="px-3 py-1 w-44 bg-slate-50 border  border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  focus:ring-1"
                  required
                  name="marital" id="marital">
                  <option value={single} onChange = { (e) => setSingle(e.target.value) }>Single</option>
                  <option value={married} onChange = { (e) => setMarried(e.target.value) }>Married</option>
                  <option value={others} onChange = { (e) => setOthers(e.target.value) }>Others</option>
                </select>
              </div>
              <div className="mx-4">
                <label htmlFor="">Choose Photo</label>
                <input 
                  type="file" 
                  name="photo" id="photo"
                  className="px-3 py-1"
                  required
                  value={file}
                  onChange = { (e) => setFile(e.target.value) }
                />
              </div>
              <button type="submit" class="submit-btn">Submit</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}




export default AddEmployee
