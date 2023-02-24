function login() {
  const loginUser = async (auth) => {
    const response = await fetch('/api/auth/login', {
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
    loginUser({
      email: ev.target.emailLogin.value,
      password: ev.target.passwordLogin.value,
    }).then((res) => console.log(res))
  }
  return (
    <div className='min-h-screen p-8 bg-slate-500 flex items-center justify-center'>
      <div className='container max-w-sm border-2 rounded-md h-[60vh] p-5 my-10'>
        <div className=' max-w-sm mx-auto '>
          <form
            className='flex flex-col gap-2'
            onSubmit={handleSubmit}
          >
            <label htmlFor='email'>email</label>
            <input type='email' name='emailLogin' id='emailLogin' />

            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='passwordLogin'
              id='passwordLogin'
            />
            <button className='bg-zinc-400' type='submit'>
              Submit
            </button>
          </form>

          <a href=''>
            <span>Register</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default login
