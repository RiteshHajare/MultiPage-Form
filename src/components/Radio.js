import React from "react";

function Radio({ label, name, handleChange, form, checked }) {
  return (
    <div className="flex items-center mb-4">
      <input
        onChange={handleChange}
        id="default-radio-1"
        type="radio"
        value={form.radio}
        name={name}
        checked={checked}
        required
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        for="default-radio-1"
        className="ms-2 text-sm font-medium text-black"
      >
        {label}
      </label>
    </div>
  );
}

export default Radio;
