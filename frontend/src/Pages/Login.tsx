import React, { useState } from 'react'
 
export default function Login({ onLogin }: { onLogin: (u: { name: string, role: string }) => void }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [isCreateMode, setIsCreateMode] = useState(false)
 
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    const role = username.toLowerCase().includes('admin') ? 'Admin' : 'Product manager'
    onLogin({ name: username || 'New User', role })
  }
 
  const handleCreateAccount = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Account created for: ${email}`)
    setIsCreateMode(false)
  }
 
  return (
<div className="min-h-screen bg-white text-black flex flex-col">
 
      {/* Header */}
<header className="p-4 flex justify-between items-center shadow-md">
<div className="flex items-center gap-4">
<img src="/Invenza.png" alt="logo" className="h-10" />
<h1 className="text-xl font-semibold">Invenza Admin Login</h1>
</div>
<input type="text" placeholder="Search…" className="border px-3 py-2 rounded-md w-64" />
</header>
 
      {/* Card */}
<div className="flex flex-1 items-center justify-center p-6">
<div className="max-w-md w-full bg-[#3f5272] rounded-xl p-8 shadow-lg text-white">
 
          <div className="text-center mb-6">
<img src="/Invenza.png" alt="logo" className="h-16 mx-auto mb-3" style={{width:160, objectFit:'contain',borderRadius:18}}/>
<h2 className="text-2xl font-semibold">
              {isCreateMode ? 'Create Account' : 'Admin Login'}
</h2>
</div>
 
          {/* Login Form */}
          {!isCreateMode && (
<form onSubmit={handleLogin} className="space-y-4">
<div>
<label className="text-sm mb-1 block">Username</label>
<input
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  className="w-full p-3 rounded-md text-black"
                  placeholder="Enter username"
                />
</div>
 
              <div>
<label className="text-sm mb-1 block">Password</label>
<input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="w-full p-3 rounded-md text-black"
                  placeholder="Enter password"
                />
</div>
 
              <div className="flex gap-3 pt-2">
<button type="submit" className="flex-1 py-2 rounded-md bg-invenzaBlue text-white">
                  Login
</button>
<button
                  type="button"
                  className="flex-1 py-2 rounded-md border border-white text-white"
                  onClick={() => setIsCreateMode(true)}
>
                  Create account
</button>
</div>
</form>
          )}
 
          {/* Create Account Form */}
          {isCreateMode && (
<form onSubmit={handleCreateAccount} className="space-y-4">
<div>
<label className="text-sm mb-1 block">Full Name</label>
<input
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  className="w-full p-3 rounded-md text-black"
                  placeholder="Enter name"
                />
</div>
 
              <div>
<label className="text-sm mb-1 block">Email</label>
<input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full p-3 rounded-md text-black"
                  placeholder="Enter email"
                />
</div>
 
              <div>
<label className="text-sm mb-1 block">Password</label>
<input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="w-full p-3 rounded-md text-black"
                  placeholder="Enter password"
                />
</div>
 
              <div className="flex gap-3 pt-2">
<button type="submit" className="flex-1 py-2 rounded-md bg-invenzaBlue text-white">
                  Submit
</button>
<button
                  type="button"
                  className="flex-1 py-2 rounded-md border border-white text-white"
                  onClick={() => setIsCreateMode(false)}
>
                  Back
</button>
</div>
</form>
          )}
 
        </div>
</div>
 
    </div>
  )
}
