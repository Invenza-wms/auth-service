import React, { useState } from 'react'
import { Search } from "lucide-react"
import Logo from './assets/Invenza.png'

type Step = 'request' | 'verify' | 'reset' | 'success'

export default function App() {
  const [step, setStep] = useState<Step>('request')
  const [contact, setContact] = useState('')
  const [otp, setOtp] = useState('')
  const [sentOtp, setSentOtp] = useState<string | null>(null)
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  const primary = '#2c4166'
  const container = '#415982'
const [otpFields, setOtpFields] = useState(["", "", "", "", "", ""])  
  function handleOtpChange(value: string, index: number) {        
    if (!/^[0-9]?$/.test(value)) return
    const updated = [...otpFields]
    updated[index] = value
    setOtpFields(updated)

    if (value && index < 5) {
      document.getElementById(`otp_${index + 1}`)?.focus()
    }
    setOtp(updated.join(""))
  }





  function sendOtp() {
    setError('')
    if (!contact.trim()) { setError('Please enter email or mobile number'); return }
    // simple format check
    // generate 6-digit OTP and store in state (simulate sending)
    const code = Math.floor(100000 + Math.random()*900000).toString()
    setSentOtp(code)
    alert('OTP sent: ' + code)
    setStep('verify')
  }

  function verifyOtp() {
    setError('')
    if (!otp.trim()) { setError('Enter the OTP'); return }
    if (otp === sentOtp) {
      setStep('reset')
    } else {
      setError('Invalid OTP')
    }
  }

  function validatePassword(pw: string) {
    if (pw.length === 0) return 'Password required'
    if (pw.length > 10) return 'Maximum length is 10 characters'
    if (!/[A-Z]/.test(pw)) return 'Must include at least one uppercase letter'
    if (!/[0-9]/.test(pw)) return 'Must include at least one number'
    if (!/[!@#$%^&*(),.?":{}|<>\[\]\-_+=;'/\\]/.test(pw)) return 'Must include at least one special character'
    return ''
  }

  function updatePassword() {
    setError('')
    const v1 = validatePassword(newPassword)
    if (v1) { setError(v1); return }
    if (newPassword !== confirmPassword) { setError('Passwords do not match'); return }
    setStep('success')
  }

  return (
    <div style={{background: '#dee4f1', minHeight: '100vh',backdropFilter:'blur(70px)',fontFamily: 'Bebas Neue, sans-serif'}}>
      
      <header style={{display:'flex', alignItems:'center', padding: '12px 24px', borderBottom: '1px solid #eee'}}>
        <img src={Logo} alt="Invenza" style={{height:50}} />
        <div style={{flex:1, marginLeft:40,position: "relative"}}>
          <Search
            size={18}
            color={"#b01045"}
            style={{
              position: "absolute",
              left: 10,
              top: "50%",
              transform: "translateY(-50%)",
              pointerEvents: "none",
            }}></Search>
            <input placeholder="Search..." style={{width:'30%', padding:'10px 12px 10px 36px', borderRadius:6, border:'3px solid #330307',outline:"none"}} />
        </div>
        <div style={{ display: "flex",alignItems:'center',   gap: "45px", marginLeft: "10px" ,marginRight:"80px" }}>
            <a href="#" style={{ textDecoration: "none", color: "#330307", fontWeight: "600" }}>
              Home
            </a>
            <a href="#" style={{ textDecoration: "none", color: "#330307", fontWeight: "600"}}>
              About Us
            </a>
            <a href="#" style={{ textDecoration: "none", color: "#330307", fontWeight: "600" }}>
              Services
            </a>
          </div>
        <nav>
          <button style={{background:primary, color:'#fff',padding:'8px 12px', borderRadius:6, border:'none'}}>Menu</button>
        </nav>
      </header>

      <div style={{display:'flex', justifyContent:'center', alignItems:'center', padding:70}}>
        <div style={{width:420,minHeight:'60vh', background:container, padding:28, borderRadius:30, color:'#fff', boxShadow:'0 6px 18px rgba(0,0,0,0.12)'}}>
          <div style={{textAlign:'center', marginBottom:50}}>
      <img
        src="/src/assets/Invenza.png"
        alt="Invenza Logo"
        style={{width:160, objectFit:'contain',borderRadius:18}}
      />
    </div>
          {step === 'request' && (
            <>
              <h2 style={{marginBottom:25}}>Forgot Password</h2>
              <p style={{marginTop:45, marginBottom:16}}>Enter your email or mobile number</p>
              <input value={contact} onChange={e=>setContact(e.target.value)} placeholder="Email or Mobile" style={{width:'90%', padding:10, borderRadius:6, border:'none', marginBottom:12}} />
              <button onClick={sendOtp} style={{width:'90%', padding:10, background:primary, color:'#fff', border:'none', borderRadius:6}}>Get OTP</button>
              {error && <div style={{marginTop:12, color:'#ffdddd', background:'#7f2430', padding:8, borderRadius:6}}>{error}</div>}
            </>
          )}

          {step === 'verify' && (
            <>
              <p>We have sent a 6 digit OTP to <strong>{contact}</strong></p>

              <div style={{display:'flex', justifyContent:'center', gap:10, marginBottom:15}}>
      {otpFields.map((digit, index) => (
        <input
          key={index}
          id={`otp_${index}`}
          type="text"
          maxLength={1}
          value={digit}
          onChange={e => handleOtpChange(e.target.value, index)}  // ✅ ADDED
          style={{
            width:40,
            height:45,
            textAlign:'center',
            fontSize:22,
            borderRadius:8,
            border:'2px solid #bbb',
            outline:'none',
          }}
        />
      ))}
    </div>
              <button onClick={verifyOtp} style={{width:'90%', padding:10, background:primary, color:'#fff', border:'none', borderRadius:6}}>Verify OTP</button>
              <button onClick={()=>{ setStep('request'); setSentOtp(null); setOtp(''); }} style={{width:'90%', padding:10, marginTop:8, background:'#274055', color:'#fff', border:'none', borderRadius:6}}>Resend OTP</button>
              {error && <div style={{marginTop:12, color:'#ffdddd', background:'#7f2430', padding:8, borderRadius:6}}>{error}</div>}
            </>
          )}

          {step === 'reset' && (
            <>
              <h2>Reset Password</h2>
              <p>Enter new password</p>
              <input type="password" value={newPassword} onChange={e=>setNewPassword(e.target.value)} placeholder="New password" style={{width:'90%', padding:10, borderRadius:6, border:'none', marginBottom:8}} maxLength={15} />
              <input type="password" value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)} placeholder="Confirm password" style={{width:'90%', padding:10, borderRadius:6, border:'none', marginBottom:12}} maxLength={15} />
              <button onClick={updatePassword} style={{width:'90%', padding:10, background:primary, color:'#fff', border:'none', borderRadius:6}}>Update Password</button>
              {error && <div style={{marginTop:12, color:'#ffdddd', background:'#7f2430', padding:8, borderRadius:6}}>{error}</div>}
            </>
          )}

          {step === 'success' && (
            <div style={{textAlign:'center'}}>
              <h2>Password successfully changed</h2>
              <p>You can now login with your new password.</p>
              <button onClick={()=>{ setStep('request'); setContact(''); setNewPassword(''); setConfirmPassword(''); setSentOtp(null); setOtp(''); }} style={{marginTop:12, padding:10, background:primary, color:'#fff', border:'none', borderRadius:6}}>Back to Forgot</button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
