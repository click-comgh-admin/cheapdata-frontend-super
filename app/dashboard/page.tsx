'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function AddSuperAdmin() {
  const [admins, setAdmins] = useState([
    {
      id: 1,
      name: 'Admin John',
      email: 'admin.john@cheapdata.com',
      phoneNumber: '0551234567',
      accessRole: 'Unlimited',
    }
  ])

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Handle form submission logic here
  }

  const handleViewActivityLogs = (id: number) => {
    // Handle view activity logs logic here
    console.log('Viewing activity logs for admin with id:', id)
  }

  const handleRemove = (id: number) => {
    // Handle remove logic here
    console.log('Removing admin with id:', id)
  }

  const handleEdit = (id: number) => {
    // Handle edit logic here
    console.log('Editing admin with id:', id)
  }

  const handleSuspend = (id: number) => {
    // Handle suspend logic here
    console.log('Suspending admin with id:', id)
  }

  return (
    <div className="space-y-8 p-4 mt-6">
      <h2 className="text-2xl font-semibold text-indigo-950 mb-4">Add Super Admin User</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        {['userName', 'email', 'phoneNumber', 'accessRole', 'password', 'confirmPassword'].map((field) => (
          <div key={field} className="space-y-2">
            <Label htmlFor={field} className="text-sm text-gray-400">{field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}</Label>
            {field === 'accessRole' ? (
              <Select>
                <SelectTrigger id={field} className="w-full px-3 py-2 text-sm rounded-md focus-visible:outline-none focus-visible:ring-1">
                  <SelectValue placeholder="Select access role" />
                </SelectTrigger>
                <SelectContent>
                  {['View Only', 'Credit Data Only', 'Unlimited'].map(role => (
                    <SelectItem key={role} value={role.toLowerCase().replace(' ', '-')}>{role}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ) : (
              <Input 
                id={field} 
                type={field.includes('password') ? 'password' : field === 'email' ? 'email' : 'text'}
                placeholder={field === 'userName' ? 'Admin John' : field === 'email' ? 'admin.john@cheapdata.com' : field === 'phoneNumber' ? '0551234567' : '********'}
                required 
                className="w-full px-3 py-2 text-sm rounded-md focus-visible:outline-none focus-visible:ring-1"
              />
            )}
          </div>
        ))}
        <div className="flex justify-end space-x-2 mt-4">
          <Button type="submit" className="px-4 py-2 text-xs font-medium text-background bg-ds-primary hover:bg-ds-primary rounded-md h-9 shadow focus-visible:outline-none focus-visible:ring-1">Submit</Button>
        </div>
      </form>

      <div className="mt-8">
        <h3 className="text-xl font-semibold text-indigo-950 mb-4">View Super Admins</h3>
        <div className="shadow-md border rounded-md">
        <Table className="w-full">
          <TableHeader className="bg-[#212D40]">
            <TableRow>
              {['User Name', 'Email', 'Phone Number', 'Access Role', 'Activity Logs', 'Action'].map((header) => (
                <TableHead key={header} className="text-sm font-medium text-white p-2">{header}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {admins.map((admin) => (
              <TableRow key={admin.id} className="border-b">
                <TableCell className="text-sm p-2">{admin.name}</TableCell>
                <TableCell className="text-sm p-2">{admin.email}</TableCell>
                <TableCell className="text-sm p-2">{admin.phoneNumber}</TableCell>
                <TableCell className="text-sm p-2">{admin.accessRole}</TableCell>
                <TableCell className="p-2">
                  <Button variant="link" onClick={() => handleViewActivityLogs(admin.id)} className="text-xs font-medium text-ds-primary">View Details</Button>
                </TableCell>
                <TableCell className="p-2">
                  <Button variant="outline" size="sm" className="text-xs font-medium bg-ds-primary text-background hover:bg-ds-primary rounded-md h-8 px-3 py-2 shadow focus-visible:outline-none focus-visible:ring-1 mr-2" onClick={() => handleEdit(admin.id)}>Edit</Button>
                  <Button variant="destructive" size="sm" className="text-xs font-medium bg-red-200 text-background hover:bg-red-200 rounded-md h-8 px-3 py-2 shadow focus-visible:outline-none focus-visible:ring-1 mr-2" onClick={() => handleRemove(admin.id)}>Remove</Button>
                  <Button variant="secondary" size="sm" className="text-xs font-medium bg-blue-100 text-background hover:bg-blue-100 rounded-md h-8 px-3 py-2 shadow focus-visible:outline-none focus-visible:ring-1" onClick={() => handleSuspend(admin.id)}>Suspend</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </div>
      </div>
    </div>
  )
}

