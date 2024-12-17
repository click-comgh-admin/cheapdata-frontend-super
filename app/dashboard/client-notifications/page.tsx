'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ClientNotifications() {
  const [medium, setMedium] = useState('')
  const [message, setMessage] = useState('')

  const handleSend = () => {
    // Handle send logic here
    console.log('Sending notification:', { medium, message })
  }

  return (
    <div className="space-y-8 p-4 mt-8">
      <h2 className="text-2xl font-semibold text-indigo-950 mb-4">Client Notifications</h2>
      <form className="space-y-4 max-w-md">
        <div className="space-y-2">
          <Label htmlFor="medium" className="text-sm text-gray-400">Select Medium</Label>
          <Select value={medium} onValueChange={setMedium}>
            <SelectTrigger id="medium" className="w-full px-3 py-2 text-sm rounded-md focus-visible:outline-none focus-visible:ring-1">
              <SelectValue placeholder="Select medium" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="in-app">In-App</SelectItem>
              <SelectItem value="sms">SMS</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="message" className="text-sm text-gray-400">Compose Message</Label>
          <Textarea 
            id="message" 
            placeholder="Enter your message here" 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-3 py-2 text-sm rounded-md focus-visible:outline-none focus-visible:ring-1"
          />
        </div>
        <div className="flex justify-end space-x-2 mt-4">
          <Button type="button" onClick={handleSend} className="px-4 py-2 text-xs font-medium text-background bg-ds-primary hover:bg-ds-primary rounded-md h-9 shadow focus-visible:outline-none focus-visible:ring-1">Send</Button>
        </div>
      </form>
    </div>
  )
}

