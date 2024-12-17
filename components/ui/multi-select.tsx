// components/MultiSelect.tsx

import React, { useState } from 'react';

interface MultiSelectProps {
  options: string[];
  value: string[];
  onChange: (selected: string[]) => void;
  placeholder?: string;
}

const MultiSelect: React.FC<MultiSelectProps> = ({ options, value, onChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: string) => {
    const newValue = value.includes(option)
      ? value.filter((item) => item !== option)
      : [...value, option];

    onChange(newValue);
  };

  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative">
      <div className="border rounded p-2 cursor-pointer" onClick={toggleDropdown}>
        {value.length > 0 ? value.join(', ') : placeholder}
      </div>
      {isOpen && (
        <div className="absolute bg-white border rounded mt-1 w-full z-10">
          <input
            type="text"
            className="border p-1 w-full"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="max-h-60 overflow-y-auto">
            {filteredOptions.map((option) => (
              <div key={option} className="p-2 hover:bg-gray-200">
                <label>
                  <input
                    type="checkbox"
                    checked={value.includes(option)}
                    onChange={() => handleSelect(option)}
                  />
                  {option}
                </label>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiSelect;
