"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DatePickerProps {
  selectedDate: Date | undefined;
  onDateChange: (date: Date | undefined) => void;
}

export function DatePicker({ selectedDate, onDateChange }: DatePickerProps) {
  const [internalDate, setInternalDate] = React.useState<Date | undefined>(selectedDate);

  // Sync internal state with props
  React.useEffect(() => {
    setInternalDate(selectedDate);
  }, [selectedDate]);

  const handleDateChange = (date: Date | undefined) => {
    setInternalDate(date);
    onDateChange(date);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-[240px] justify-start text-left font-normal",
            !internalDate && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {internalDate ? format(internalDate, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-auto p-0 z-50 bg-white shadow-md rounded-md border border-gray-200"
        align="center"
      >
        <Calendar
          mode="single"
          selected={internalDate}
          onSelect={handleDateChange}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
