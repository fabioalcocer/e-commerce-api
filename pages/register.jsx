import { motion } from 'framer-motion'

function Register() {
  const registerUser = async (auth) => {
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(auth),
    })
    return response.json()
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    registerUser({
      email: ev.target.email.value,
      password: ev.target.password.value,
    }).then((res) => console.log(res))
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col justify-center items-center min-h-screen'
    >
      <div className='flex flex-col justify-center items-center'>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          placeholder='email@example.com'
          id='email'
        />
      </div>
      <motion.div className='flex flex-col justify-center items-center'>
        <label htmlFor='password'>Password</label>
        <input type='password' placeholder='********' id='password' />
      </motion.div>
      <button type='submit'>Sign Up</button>
    </form>
  )
}

export default Register
