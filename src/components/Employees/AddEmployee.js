import React ,{useState}  from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddEmployee = () => {

  const [idnumber, setIdNumber] = useState('')
  const [firstname, setFname] = useState('')
  const [lastname, setLname] = useState('')
  const [middlename, setMname] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [department, setDepartment] = useState('')
  const [position, setPosition] = useState('')
  const [time, setTime] = useState('')
  const [date, setDate] = useState('')
  const [udate, setUdate] = useState('')
  const [birth, setBirth] = useState('')
  const [gender, setGender] = useState('')
  const [status, setStatus] = useState('')
  const [file, setFile] = useState('')

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('https://xain-hotel-server.up.railway.app/api/v1/add',
      JSON.stringify({idnumber,firstname,lastname,middlename,email,phone,address,department,position,time,date,udate,birth,gender,status,file}),
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
                <label htmlFor="">ID Number</label>
                <input 
                  type="text" 
                  name="idno" id="idno"
                  className="px-3 py-1 w-44 bg-slate-100 border  border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  focus:ring-1"
                  required
                  value={idnumber}
                  onChange = { (e) => setIdNumber(e.target.value) }
                />
              </div>
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
                <label htmlFor="">Middle Names</label>
                <input 
                  type="text" 
                  name="middle" id="middle"
                  className="px-3 py-1 w-44 bg-slate-100 border  border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  focus:ring-1"
                  required
                  value={middlename}
                  onChange = { (e) => setMname(e.target.value) }
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
                  value={department}
                  onChange = { (e) => setDepartment(e.target.value) }
                  name="department" id="department">
                  <option value="1" >Choose</option>
                  <option value="CCR">Ccr</option>
                  <option value="IT">It</option>
                </select>
              </div>
              <div className="mx-4">
                <label htmlFor="">Position</label>
                <select 
                  className="px-3 py-1 w-44 bg-slate-50 border  border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  focus:ring-1"
                  required
                  value={position}
                  onChange = { (e) => setPosition(e.target.value) }
                  name="position" id="position">
                  <option value="1">Selct Position</option>
                  <option value="CCR" >ccr</option>
                  <option value="OKOA" >okoa</option>
                </select>
              </div>
              <div className="mx-4">
                <label htmlFor="">Duty Type</label>
                <select 
                  className="px-3 py-1 w-44 bg-slate-50 border  border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  focus:ring-1"
                  required
                  value={time}
                  onChange = { (e) => setTime(e.target.value) }
                  name="duty" id="duty">
                  <option value="1">Select Time</option>
                  <option value="Full Time">Full Time</option>
                  <option value="Part Time">Part Time</option>
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
                  value={birth}
                  onChange = { (e) => setBirth(e.target.value) }
                />
              </div>
              <div className="mx-4">
                <label htmlFor="">Gender</label>
                <select 
                  className="px-3 py-1 w-44 bg-slate-50 border  border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  focus:ring-1"
                  required
                  value={gender}
                  onChange = { (e) => setGender(e.target.value) }
                  name="gender" id="gender">
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="mx-4">
                <label htmlFor="">Marrital Status</label>
                <select 
                  className="px-3 py-1 w-44 bg-slate-50 border  border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  focus:ring-1"
                  required
                  value={status}
                  onChange = { (e) => setStatus(e.target.value) }
                  name="status" id="status">
                  <option value="Selct" >Select</option>
                  <option value="Single" >Single</option>
                  <option value="Maried" >Married</option>
                  <option value="Others" >Others</option>
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
