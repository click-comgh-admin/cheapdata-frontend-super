'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableRow, TableHeader } from "@/components/ui/table"

export default function ViewClientUsers() {
  interface User {
    id: number;
    tradeName: string;
    accountId: string;
    applicant: string;
    email: string;
    phoneNumber: string;
    registrationUrl: string;
  }

  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/clients/accounts')
        const data = await response.json()
        setUsers(data)
      } catch (error) {
        console.error('Error fetching users:', error)
      }
    }

    fetchUsers()
  }, [])

  const handleEdit = (id: number) => {
    // Handle edit logic here
    console.log('Editing user with id:', id)
  }

  const handleDelete = (id: number) => {
    // Handle delete logic here
    console.log('Deleting user with id:', id)
  }

  const handleSuspend = (id: number) => {
    // Handle suspend logic here
    console.log('Suspending user with id:', id)
  }

  return (
    <div className="space-y-8 mt-8 p-4">
      <h2 className="text-2xl font-semibold text-indigo-950 mb-4">View Client Users</h2>
      <div className="overflow-x-auto">
        <Table className="w-full">
          <TableHeader className="bg-[#212D40]">
            <TableRow>
              {['Account Trade Name', 'Account ID', 'Applicant', 'Email', 'Phone Number', "Client's User Registration Url", 'Action'].map((header) => (
                <TableHead key={header} className="text-sm text-white text-center font-medium">{header}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id} className="border-b">
                <TableCell className="text-sm p-2">{user.tradeName}</TableCell>
                <TableCell className="text-sm p-2">{user.accountId}</TableCell>
                <TableCell className="text-sm p-2">{user.applicant}</TableCell>
                <TableCell className="text-sm p-2">{user.email}</TableCell>
                <TableCell className="text-sm p-2">{user.phoneNumber}</TableCell>
                <TableCell className="text-sm p-2">{user.registrationUrl}</TableCell>
                <TableCell className="p-2">
                  <Button variant="outline" size="sm" className="text-xs font-medium bg-ds-primary text-background hover:bg-ds-primary rounded-md h-8 px-3 py-2 shadow focus-visible:outline-none focus-visible:ring-1 mr-2" onClick={() => handleEdit(user.id)}>Edit</Button>
                  <Button variant="destructive" size="sm" className="text-xs font-medium bg-red-200 text-background hover:bg-red-200 rounded-md h-8 px-3 py-2 shadow focus-visible:outline-none focus-visible:ring-1 mr-2" onClick={() => handleDelete(user.id)}>Delete</Button>
                  <Button variant="secondary" size="sm" className="text-xs font-medium bg-blue-100 text-background hover:bg-blue-100 rounded-md h-8 px-3 py-2 shadow focus-visible:outline-none focus-visible:ring-1" onClick={() => handleSuspend(user.id)}>Suspend</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
