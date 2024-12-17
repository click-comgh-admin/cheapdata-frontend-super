'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { EyeIcon, EyeOffIcon } from 'lucide-react'

export default function SuperAccountLogin() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-semibold text-indigo-950 mb-4">Super Account Login</h2>
      <form className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm text-gray-400">Email</Label>
          <Input id="email" type="email" placeholder="admin@cheapdata.com" required className="w-full px-3 py-2 text-sm rounded-md focus-visible:outline-none focus-visible:ring-1" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password" className="text-sm text-gray-400">Password</Label>
          <div className="relative">
            <Input 
              id="password" 
              type={showPassword ? "text" : "password"} 
              placeholder="********" 
              required 
              className="w-full px-3 py-2 text-sm rounded-md focus-visible:outline-none focus-visible:ring-1"
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
          <Button type="submit" className="px-4 py-2 text-xs font-medium text-background bg-ds-primary hover:bg-ds-primary rounded-md h-9 shadow focus-visible:outline-none focus-visible:ring-1">Enter</Button>
        </div>
        <div className="flex justify-end space-x-2 mt-2">
          <Button variant="link" className="text-xs font-medium text-ds-primary">Reset Password</Button>
          <Button variant="link" className="text-xs font-medium text-ds-primary">Have Account? Sign Up</Button>
        </div>
      </form>
    </div>
  )
}

