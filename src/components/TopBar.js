import React from "react";

const TopBar = ({ templateName, setTemplateName, exportHTML }) => {
  return (
    <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
      <input
        type="text"
        value={templateName}
        onChange={(e) => setTemplateName(e.target.value)}
        className="text-xl font-bold border-none outline-none flex-1 text-gray-800"
        placeholder="Template Name"
      />
      <button
        onClick={exportHTML}
        className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors font-medium">
        Export HTML
      </button>
    </div>
  );
};

export default TopBar;
