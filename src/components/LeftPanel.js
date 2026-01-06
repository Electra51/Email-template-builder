import { useState } from "react";
import {
  Type,
  Square,
  Table,
  AlignLeft,
  MessageSquare,
  Minus,
  Image,
  List,
} from "lucide-react";

const LeftPanel = ({ handleDragStart }) => {
  const [activeTab, setActiveTab] = useState("content");

  const componentLibrary = [
    { id: "title", type: "title", label: "TITLE", icon: Type },
    { id: "paragraph", type: "paragraph", label: "PARAGRAPH", icon: AlignLeft },
    { id: "list", type: "list", label: "LIST", icon: List },
    { id: "image", type: "image", label: "IMAGE", icon: Image },
    { id: "button", type: "button", label: "BUTTON", icon: Square },
    { id: "table", type: "table", label: "TABLE", icon: Table },
    { id: "divider", type: "divider", label: "DIVIDER", icon: Minus },
  ];

 
  const rowLayouts = [
    { cols: 1, label: "1 Column" },
    { cols: 2, label: "2 Columns" },
    { cols: 3, label: "3 Columns" },
  ];
  return (
    <div className="w-72 bg-white border-r border-gray-200 overflow-auto">
      <div className="flex border-b border-gray-200">
        <button
          onClick={() => setActiveTab("content")}
          className={`flex-1 px-4 py-3 text-xs font-semibold ${
            activeTab === "content"
              ? "text-gray-900 border-b-2 border-gray-900"
              : "text-gray-500"
          }`}
        >
          <span className="flex items-center justify-center gap-1">
            <Type size={14} />
            CONTENT
          </span>
        </button>
        <button
          onClick={() => setActiveTab("rows")}
          className={`flex-1 px-4 py-3 text-xs font-semibold ${
            activeTab === "rows"
              ? "text-gray-900 border-b-2 border-gray-900"
              : "text-gray-500"
          }`}
        >
          <span className="flex items-center justify-center gap-1">
            <Table size={14} />
            ROWS
          </span>
        </button>
      </div>

      {activeTab === "content" && (
        <div className="p-4">
          <div className="grid grid-cols-3 gap-3">
            {componentLibrary.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, item)}
                  className="flex flex-col items-center gap-2 p-4 border-2 border-gray-200 rounded-lg cursor-move hover:border-purple-400 hover:bg-purple-50 transition-all"
                >
                  <Icon size={24} className="text-gray-600" />
                  <span className="text-xs font-medium text-gray-700 text-center">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

    

        {activeTab === "rows" && (
    <div className="p-4 space-y-3">
      {rowLayouts.map((layout, idx) => (
        <div
          key={idx}
          draggable
          onDragStart={(e) => handleDragStart(e, { type: "row", cols: layout.cols })}  // Pass row data
          className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg cursor-move hover:border-purple-400 hover:bg-purple-50 transition-all"
        >
          <div className="flex gap-1 flex-1">
            {Array(layout.cols)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="flex-1 h-12 bg-gray-300 rounded" />
              ))}
          </div>
        </div>
      ))}
    </div>
  )}
    </div>
  );
};

export default LeftPanel;
