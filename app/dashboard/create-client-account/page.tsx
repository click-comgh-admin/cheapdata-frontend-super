'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function CreateClientAccount() {
  const [isProAccount, setIsProAccount] = useState(false)
  type FormFields = 'tradeName' | 'applicantName' | 'email' | 'phoneNumber' | 'password' | 'confirmPassword';

  const [formData, setFormData] = useState<Record<FormFields, string>>({
    tradeName: '',
    applicantName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData(prevState => ({ ...prevState, [id as FormFields]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Add form validation if needed

    const response = await fetch('/api/clients/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...formData, isProAccount })
    })

    if (response.ok) {
      // Handle successful account creation
      console.log('Account created successfully')
    } else {
      // Handle errors
      console.error('Failed to create account')
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-4 mt-8">
      <h2 className="text-2xl font-semibold text-indigo-950 mb-4">Create Client Account</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="proAccount" 
            checked={isProAccount}
            onCheckedChange={(checked) => setIsProAccount(checked as boolean)}
          />
        </div>
        {(['tradeName', 'applicantName', 'email', 'phoneNumber', 'password', 'confirmPassword'] as FormFields[]).map((field) => (
          <div key={field} className="space-y-2">
            <Label htmlFor={field} className="text-sm text-gray-400">{field.charAt(0).toUpperCase() + field.slice(1)}</Label>
            <Input 
              id={field} 
              type={field.includes('password') ? 'password' : field === 'email' ? 'email' : 'text'}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              required 
              className="w-full px-3 py-2 text-sm rounded-md focus-visible:outline-none focus-visible:ring-1"
              value={formData[field as FormFields]}
            />
          </div>
          ))}
          <div className="flex justify-end space-x-2">
          </div>
          <div className="mt-4">
            <p className="font-semibold text-sm text-indigo-950">One-time Account Setup Fee: GHS 500.00</p>
            <div className="flex justify-end space-x-2 mt-4">
              <Button className="px-4 py-2 text-xs font-medium text-background bg-teal-100 hover:bg-teal-100 rounded-md h-9 shadow focus-visible:outline-none focus-visible:ring-1">Proceed Payment</Button>
            </div>
          </div>
        </form>
      </div>
    )
  }
