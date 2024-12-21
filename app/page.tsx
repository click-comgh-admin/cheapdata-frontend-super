'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { EyeIcon, EyeOffIcon } from 'lucide-react'

export default function SuperAccountLogin() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })
      if (!response.ok) {
        throw new Error('Login failed')
      }
      const data = await response.json()
      // Handle successful login (e.g., redirect to dashboard, store token, etc.)
      console.log('Login successful', data)
      // Example: Redirect to dashboard
      window.location.href = '/dashboard'
    } catch (error) {
      console.error('Error:', error)
      // Handle login error (e.g., show error message)
      alert('Login failed. Please check your credentials and try again.')
    }
  }

  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-semibold text-indigo-950 mb-4">CHEAPDATA Super Account Login</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm text-gray-500">Email</Label>
          <Input 
            id="email" 
            type="email" 
            placeholder="admin@cheapdata.com" 
            required 
            className="w-full px-3 py-2 text-sm rounded-md focus-visible:outline-none focus-visible:ring-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password" className="text-sm text-gray-500">Password</Label>
          <div className="relative">
            <Input 
              id="password" 
              type={showPassword ? "text" : "password"} 
              placeholder="********" 
              required 
              className="w-full px-3 py-2 text-sm rounded-md focus-visible:outline-none focus-visible:ring-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute right-0 top-0 h-full px-3"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
            </Button>
          </div>
        </div>
        <div className="flex justify-end space-x-2 mt-4">
          <Button type="submit" className="px-4 py-2 text-xs font-medium text-gray-600 bg-ds-primary hover:bg-ds-primary rounded-md h-9 shadow focus-visible:outline-none focus-visible:ring-1">Login</Button>
        </div>
        <div className="flex justify-end space-x-2 mt-2">
          <Button variant="link" className="text-xs font-medium text-ds-primary">Reset Password</Button>
          <Button variant="link" className="text-xs font-medium text-ds-primary">Have Account? Sign Up</Button>
        </div>
      </form>
    </div>
  )
}
