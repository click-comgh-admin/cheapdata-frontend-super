import React, { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

const generateTimes = () =>
  Array.from({ length: 24 }, (_, hour) =>
    Array.from({ length: 2 }, (_, half) => {
      const time = `${hour.toString().padStart(2, "0")}:${half === 0 ? "00" : "30"}`;
      return time;
    })
  ).flat();

const TimePicker: React.FC<{ id: string; onChange?: (value: string) => void }> = ({ id, onChange }) => {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const times = generateTimes();

  const handleSelectTime = (time: string) => {
    setSelectedTime(time);
    if (onChange) onChange(time);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" id={id}>
          {selectedTime || "Select Time"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-48 p-2">
        <div className="max-h-60 overflow-y-auto">
          {times.map((time) => (
            <div
              key={time}
              className="p-2 cursor-pointer hover:bg-gray-100 rounded-md"
              onClick={() => handleSelectTime(time)}
            >
              {time}
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default TimePicker;
