import React, { useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils"; // Assuming a `cn` utility function for class merging is available

const TimePicker: React.FC<{ value?: string; onChange?: (time: string) => void }> = ({ value, onChange }) => {
  const [selectedTime, setSelectedTime] = useState(value || "12:00 PM");
  const [isOpen, setIsOpen] = useState(false);

  const hours = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, "0"));
  const minutes = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, "0"));
  const periods = ["AM", "PM"];

  const handleTimeSelect = (hour: string, minute: string, period: string) => {
    const newTime = `${hour}:${minute} ${period}`;
    setSelectedTime(newTime);
    onChange?.(newTime);
    setIsOpen(false);
  };

  return (
    <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
      <Popover.Trigger asChild>
        <button
          className={cn(
            "flex items-center justify-between w-full px-3 py-2 border rounded-md shadow-sm text-sm",
            "focus:outline-none focus:ring focus:ring-offset-2",
            "border-gray-300 text-gray-700 bg-white hover:bg-gray-50"
          )}
        >
          {selectedTime}
          <ChevronDown className="ml-2 h-4 w-4" />
        </button>
      </Popover.Trigger>
      <Popover.Content
        className={cn(
          "w-64 bg-white border rounded-md shadow-md",
          "p-4 flex flex-col gap-2 text-sm"
        )}
        side="bottom"
        align="start"
      >
        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="font-medium mb-2">Hour</p>
            <div className="flex flex-col space-y-1">
              {hours.map((hour) => (
                <button
                  key={hour}
                  className={cn(
                    "px-2 py-1 rounded hover:bg-gray-200",
                    hour === selectedTime.split(":")[0] && "bg-gray-300"
                  )}
                  onClick={() => handleTimeSelect(hour, selectedTime.split(":")[1], selectedTime.split(" ")[1])}
                >
                  {hour}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="font-medium mb-2">Minute</p>
            <div className="flex flex-col space-y-1">
              {minutes.map((minute) => (
                <button
                  key={minute}
                  className={cn(
                    "px-2 py-1 rounded hover:bg-gray-200",
                    minute === selectedTime.split(":")[1] && "bg-gray-300"
                  )}
                  onClick={() => handleTimeSelect(selectedTime.split(":")[0], minute, selectedTime.split(" ")[1])}
                >
                  {minute}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="font-medium mb-2">Period</p>
            <div className="flex flex-col space-y-1">
              {periods.map((period) => (
                <button
                  key={period}
                  className={cn(
                    "px-2 py-1 rounded hover:bg-gray-200",
                    period === selectedTime.split(" ")[1] && "bg-gray-300"
                  )}
                  onClick={() => handleTimeSelect(selectedTime.split(":")[0], selectedTime.split(":")[1], period)}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Popover.Content>
    </Popover.Root>
  );
};

export default TimePicker;
