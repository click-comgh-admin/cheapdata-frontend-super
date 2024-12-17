'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHeader, TableHead, TableRow } from "@/components/ui/table"

export default function CreditClientAccount() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="space-y-8 p-4 mt-8">
      <h2 className="text-2xl font-semibold text-indigo-950 mb-4">Credit Client Account</h2>
      <div className="flex justify-end space-x-2 mt-4">
        <Button className="px-4 py-2 text-xs font-medium text-background bg-ds-primary hover:bg-ds-primary rounded-md h-9 shadow focus-visible:outline-none focus-visible:ring-1">Filter</Button>
      </div>
      <form className="space-y-4 max-w-md">
        {['tradeName', 'phoneNumber', 'network', 'dataBundle', 'amount', 'reference'].map((field) => (
          <div key={field} className="space-y-2">
            <Label htmlFor={field} className="text-sm text-gray-400">{field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}</Label>
            {field === 'network' || field === 'dataBundle' ? (
              <Select>
                <SelectTrigger id={field} className="w-full px-3 py-2 text-sm rounded-md focus-visible:outline-none focus-visible:ring-1">
                  <SelectValue placeholder={`Select ${field}`} />
                </SelectTrigger>
                <SelectContent>
                  {field === 'network' ? 
                    ['MTN', 'Airtel', 'Vodafone'].map(option => (
                      <SelectItem key={option} value={option.toLowerCase()}>{option}</SelectItem>
                    )) :
                    ['5GB', '10GB', '20GB'].map(option => (
                      <SelectItem key={option} value={option.toLowerCase()}>{option}</SelectItem>
                    ))
                  }
                </SelectContent>
              </Select>
            ) : (
              <Input 
                id={field} 
                placeholder={field === 'tradeName' ? 'John Doe' : field === 'phoneNumber' ? '0551234567' : field === 'amount' ? 'GHS 50' : 'Enter reference'}
                className="w-full px-3 py-2 text-sm rounded-md focus-visible:outline-none focus-visible:ring-1"
              />
            )}
          </div>
        ))}
        <div className="flex justify-end space-x-2 mt-4">
          <Button type="submit" className="px-4 py-2 text-xs font-medium text-background bg-teal-100 hover:bg-teal-100 rounded-md h-9 shadow focus-visible:outline-none focus-visible:ring-1">Credit Now</Button>
        </div>
      </form>

      <div className="mt-8">
        <h3 className="text-xl font-semibold text-indigo-950 mb-4">View Client Data Orders</h3>
        <div className="flex space-x-4 mb-4">
          <Input type="date" placeholder="Start Date" className="px-3 py-2 text-sm rounded-md focus-visible:outline-none focus-visible:ring-1" />
          <Input type="date" placeholder="End Date" className="px-3 py-2 text-sm rounded-md focus-visible:outline-none focus-visible:ring-1" />
          <Input placeholder="Search by Client Number/Order ID/Trade Name" className="px-3 py-2 text-sm rounded-md focus-visible:outline-none focus-visible:ring-1" />
          <div className="flex justify-end space-x-2 mb-4">
            <Button className="px-3 py-2 text-xs font-medium text-background bg-ds-primary hover:bg-ds-primary rounded-md h-9 shadow focus-visible:outline-none focus-visible:ring-1">Download CSV</Button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <Table className="w-full">
            <TableHeader className="bg-[#212D40]">
              <TableRow>
                {['Client Trade Name', 'Account Beneficiary Name', 'Number', 'Network', 'Data Bundle', 'Amount', 'Order ID', 'Date/Time', 'Order Status'].map((header) => (
                  <TableHead key={header} className="text-sm font-medium text-white p-2">{header}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="border-b">
                <TableCell className="text-sm p-2">Ashford Ventures</TableCell>
                <TableCell className="text-sm p-2">John Doe</TableCell>
                <TableCell className="text-sm p-2">0551234567</TableCell>
                <TableCell className="text-sm p-2">MTN</TableCell>
                <TableCell className="text-sm p-2">5GB</TableCell>
                <TableCell className="text-sm p-2">GHS 50</TableCell>
                <TableCell className="text-sm p-2">ORD56789</TableCell>
                <TableCell className="text-sm p-2">2024-12-01 10:00 AM</TableCell>
                <TableCell className="text-sm p-2">Successful</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}

