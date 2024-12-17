'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function CreateClientAccount() {
  const [isProAccount, setIsProAccount] = useState(false)

  return (
    <div className="max-w-2xl mx-auto p-4 mt-8">
      <h2 className="text-2xl font-semibold text-indigo-950 mb-4">Create Client Account</h2>
      <form className="space-y-4">
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="proAccount" 
            checked={isProAccount}
            onCheckedChange={(checked) => setIsProAccount(checked as boolean)}
          />
          <Label htmlFor="proAccount" className="text-sm text-gray-400">Pro-Account (optional)</Label>
        </div>
        {['Trade Name', 'Applicant Name', 'email', 'Phone Number', 'password', 'Confirm Password'].map((field) => (
          <div key={field} className="space-y-2">
            <Label htmlFor={field} className="text-sm text-gray-400">{field.charAt(0).toUpperCase() + field.slice(1)}</Label>
            <Input 
              id={field} 
              type={field.includes('password') ? 'password' : field === 'email' ? 'email' : 'text'}
              placeholder={field === 'tradeName' ? 'Ashford Ventures' : field === 'applicantName' ? 'Admin John' : field === 'email' ? 'admin.john@cheapdata.com' : field === 'phoneNumber' ? '0551234567' : '********'}
              required 
              className="w-full px-3 py-2 text-sm rounded-md focus-visible:outline-none focus-visible:ring-1"
            />
          </div>
        ))}
        <div className="flex justify-end space-x-2">
          <Button type="submit" className="px-4 py-2 text-xs font-medium text-background bg-ds-primary hover:bg-ds-primary rounded-md h-9 shadow focus-visible:outline-none focus-visible:ring-1">Next</Button>
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

