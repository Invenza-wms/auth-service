import React, { useState } from 'react'
import { Search } from 'lucide-react'

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

  const headerBg = '#415982'
  const buttonColor = '#2C4166'

  return (
    <div className="min-h-screen bg-white text-black flex flex-col">

      {/* Header */}
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '12px 24px',
          borderBottom: '1px solid #eee',
          backgroundColor: headerBg,
          color: 'white',
          boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/Invenza.png" alt="Invenza Logo" style={{ height: 50, borderRadius: 8, background: 'white', padding: '4px' }} />
        </div>

        {/* Search bar */}
        <div style={{ flex: 1, marginLeft: 40, position: "relative" }}>
          <Search
            size={18}
            color={"#fff"}
            style={{
              position: "absolute",
              left: 10,
              top: "50%",
              transform: "translateY(-50%)",
              pointerEvents: "none",
            }}
          />
          <input
            placeholder="Search..."
            style={{
              width: '40%',
              padding: '10px 12px 10px 36px',
              borderRadius: 6,
              border: '2px solid #fff',
              outline: "none",
              background: '#fff',
              color: '#000',
            }}
          />
        </div>

        {/* Nav links */}
        <div style={{ display: "flex", alignItems: 'center', gap: "45px", marginLeft: "10px", marginRight: "80px" }}>
          <a href="#" style={{ textDecoration: "none", color: "white", fontWeight: "600" }}>Home</a>
          <a href="#" style={{ textDecoration: "none", color: "white", fontWeight: "600" }}>About Us</a>
        </div>

        {/* Menu button */}
        <nav>
          <button
            style={{
              background: buttonColor,
              color: '#fff',
              padding: '8px 14px',
              borderRadius: 6,
              border: 'none',
              cursor: 'pointer',
              fontWeight: 600,
              boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
            }}>
            Menu
          </button>
        </nav>
      </header>

      {/* Login / Create Account Card */}
      <div className="flex flex-1 items-center justify-center p-6">
        <div className="max-w-md w-full bg-[#3f5272] rounded-xl p-8 shadow-lg text-white">
          <div className="text-center mb-6">
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
                <button
                  type="submit"
                  className="flex-1 py-2 rounded-md text-white font-semibold"
                  style={{ background: buttonColor }}
                >
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
                <button
                  type="submit"
                  className="flex-1 py-2 rounded-md text-white font-semibold"
                  style={{ background: buttonColor }}
                >
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
