'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function AddSuperAdmin() {
  interface Admin {
    id: number;
    name: string;
    email: string;
    phoneNumber: string;
    accessRole: string;
  }

  const [admins, setAdmins] = useState<Admin[]>([]);

  useEffect(() => {
    fetch('/api/admins')
      .then((res) => res.json())
      .then((data) => setAdmins(data));
  }, []);

  const handleAddAdmin = (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());

    fetch('/api/admins/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(() => fetch('/api/admins').then((res) => res.json()).then(setAdmins));
  };

  const handleViewActivityLogs = (id: number) => {
    fetch(`/api/admins/activity-logs/${id}`)
      .then((res) => res.json())
      .then((logs) => console.log('Activity logs for admin:', logs));
  };

  const handleRemove = (id: number) => {
    fetch(`/api/admins/remove/${id}`, {
      method: 'DELETE',
    })
      .then(() => fetch('/api/admins').then((res) => res.json()).then(setAdmins));
  };

  const handleEdit = (id: number) => {
    const newName = prompt('Enter new name:');
    if (!newName) return;

    fetch(`/api/admins/edit/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: newName }),
    })
      .then(() => fetch('/api/admins').then((res) => res.json()).then(setAdmins));
  };

  const handleSuspend = (id: number) => {
    fetch(`/api/admins/suspend/${id}`, {
      method: 'POST',
    })
      .then(() => fetch('/api/admins').then((res) => res.json()).then(setAdmins));
  };

  return (
    <div className="space-y-8 mt-8 p-8">
      <h2 className="text-2xl font-semibold text-indigo-950 mb-4">Add Super Admin User</h2>
      <form onSubmit={handleAddAdmin} className="space-y-4 max-w-md">
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
        <Table className="w-full">
          <TableHeader className="bg-ds-gray">
            <TableRow>
              {['User Name', 'Email', 'Phone Number', 'Access Role', 'Activity Logs', 'Action'].map((header) => (
                <TableHead key={header} className="text-sm font-medium text-background p-2">{header}</TableHead>
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
  )
}
