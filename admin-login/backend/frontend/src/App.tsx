import React, { useState } from 'react'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

export default function App(){
  const [user, setUser] = useState<{name: string, role: string} | null>(null)
  return user ? <Dashboard onLogout={() => setUser(null)} user={user} /> : <Login onLogin={(u)=>setUser(u)} />
}
