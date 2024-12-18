'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function ClientAccountSetupFee() {
  const [setupFee, setSetupFee] = useState('')
  const [fees, setFees] = useState([{ id: 1, fee: '500.00' }])

  useEffect(() => {
    // Fetch setup fees from the API
    const fetchFees = async () => {
      try {
        const response = await fetch('/api/clients/setup-fee')
        const data = await response.json()
        setFees(data)
      } catch (error) {
        console.error('Error fetching setup fees:', error)
      }
    }

    fetchFees()
  }, [])

  const handleUpdate = async () => {
    try {
      const response = await fetch('/api/clients/setup-fee', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fee: setupFee }),
      })

      if (response.ok) {
        // Update the fees state with the new fee
        const updatedFee = await response.json()
        setFees((prevFees) => [...prevFees, updatedFee])
        setSetupFee('')
      } else {
        console.error('Error updating setup fee:', response.statusText)
      }
    } catch (error) {
      console.error('Error updating setup fee:', error)
    }
  }

  const handleEdit = (id: number) => {
    // Handle edit logic here
    console.log('Editing fee with id:', id)
  }

  const handleDelete = (id: number) => {
    // Handle delete logic here
    console.log('Deleting fee with id:', id)
  }

  return (
    <div className="space-y-8 mt-8 p-4">
      <div>
        <h2 className="text-2xl font-semibold text-indigo-950 mb-4">Client Account Setup Fee</h2>
        <div className="flex items-end space-x-4">
          <div className="flex-grow">
            <Label htmlFor="setupFee" className="text-sm text-gray-400">Enter Amount</Label>
            <Input 
              id="setupFee" 
              value={setupFee} 
              onChange={(e) => setSetupFee(e.target.value)}
              placeholder="500.00"
              className="w-full px-3 py-2 text-sm border shadow rounded-md focus-visible:outline-none focus-visible:ring-1"
            />
          </div>
          <div className="flex justify-end space-x-2 mt-4">
            <Button onClick={handleUpdate} className="px-4 py-2 text-xs font-medium text-background bg-ds-primary hover:bg-ds-primary rounded-md h-9 shadow focus-visible:outline-none focus-visible:ring-1">Update</Button>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-indigo-950 mb-4">View Client Account Setup Fee</h3>
        <Table className="w-full">
          <TableHeader className="bg-[#212D40]">
            <TableRow>
              <TableHead className="text-sm font-medium text-background p-2">Setup Fee</TableHead>
              <TableHead className="text-sm font-medium text-background p-2">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {fees.map((fee) => (
              <TableRow key={fee.id} className="border-b">
                <TableCell className="text-sm p-2">{fee.fee}</TableCell>
                <TableCell className="p-2">
                  <Button variant="outline" size="sm" className="text-xs font-medium bg-ds-primary text-ds-primary hover:bg-ds-primary rounded-md h-8 px-3 py-2 shadow focus-visible:outline-none focus-visible:ring-1 mr-2" onClick={() => handleEdit(fee.id)}>Edit</Button>
                  <Button variant="destructive" size="sm" className="text-xs font-medium bg-red-200 text-background hover:bg-red-200 rounded-md h-8 px-3 py-2 shadow focus-visible:outline-none focus-visible:ring-1" onClick={() => handleDelete(fee.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
