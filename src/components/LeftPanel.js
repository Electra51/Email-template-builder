import React from "react";
import { Type, ImageIcon, Square } from "lucide-react";

const LeftPanel = ({ handleDragStart }) => {
  const componentLibrary = [
    { id: "text", type: "text", label: "Text Block", icon: Type },
    { id: "image", type: "image", label: "Image", icon: ImageIcon },
    { id: "button", type: "button", label: "Button", icon: Square },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 p-4">
      <h2 className="text-lg font-bold mb-4 text-gray-800">Components</h2>
      <div className="space-y-2">
        {componentLibrary.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              draggable
              onDragStart={(e) => handleDragStart(e, item)}
              className="flex items-center gap-2 p-3 bg-blue-50 border border-blue-200 rounded cursor-move hover:bg-blue-100 transition-colors">
              <Icon size={20} className="text-blue-600" />
              <span className="text-sm font-medium text-gray-700">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LeftPanel;
