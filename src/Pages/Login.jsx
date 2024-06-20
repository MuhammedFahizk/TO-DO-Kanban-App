import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useEffect, useState } from "react";
import instance from'../Component/Api_instance'
const LoginPage = () => {

  useEffect(() => {
    instance.get('/login')
    .then((res) => {

    })
    .catch((err) => {
      // window.location = '/'
      console.log(err, 'login page error');
    })
  })
  const [ error, setError ] = useState ('')
  const [loginDetails, setLoginDetails] = useState({
    password: '',
    email: '',
  })
  const handChange = (e) => {
  
    const {name, value} = e.target;
    setLoginDetails((prev) => ({
      ...prev,
      [name]: value
    }))
  }
const handleSubmit = (e) => {
  e.preventDefault();
  instance.post('login', loginDetails)
  .then(async(res) => {
  console.log('asd');

    const data =  await res.data
    if (res.status === 200) {
        window.location = '/home';

    }else {
        setError(data.message);

    }
  })
  // fetch('http://localhost:3000/login', {
  //     method: 'POST',
  //     body: JSON.stringify(loginDetails),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     }
  //   })
  // .then( async (res) => {
  //   const data =  await res.json()
  //   if(res.ok){
  //    window.location = '/home'
  //     }
  //     setError(data.message)
  //   console.log(res)
  // })
  // .catch((err) => {
  //   console.log(err)
  //   setError('An unexpected error occurred')

  // })
}

  return (
    <div className="flex justify-center items-center h-screen w-auto ">
      <div className="bg-white  dark:bg-green-500 shadow-lg px-10 py-5 rounded-lg border-black text-center  ">
        <p className="">Login Page </p>
        <h1 className="text-3xl">Ospro Management</h1>

        <form  className="m-5  flex flex-col gap-2" onSubmit={ handleSubmit}>
        <input
            type="text"
            placeholder="Username/Email"
            className="border px-6 py-2 my-2 rounded"
            name="email"
            value={loginDetails.email}
            onChange={handChange}
          />
          <input
            type="password"
            placeholder="Password"
            className="border px-6 py-2 rounded "
            name="password"
            value={loginDetails.password}
            onChange={ handChange}


          />

          <div className="flex justify-between gap-2 mt-3">
<div className="flex gap-2">
<input type="checkbox" name="require" id="require" />
            <label htmlFor="require">Required </label>


</div>
<div>
  
  <Link to={'/signUp'}    className="text-blue-600 hover:text-blue-900 transition duration-300 ease-in-out">Create New Account</Link>
</div>
          </div>
          <div>
            {error && <p className="text-red-600">{error}</p>}
          </div>
          <button type="submit"  className="bg-green-100 dark:bg-white p-2 rounded-lg hover:bg-green-500">
            LOGIN 
          </button>
          <Link className="bg-green-100 p-2 rounded-lg gap-2 hover:bg-green-500 flex justify-center">
            <FcGoogle className="text-2xl " />
            Login With Google
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
