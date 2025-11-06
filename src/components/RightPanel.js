import React from "react";
const RightPanel = ({ selectedComponent, selectedId, updateComponentProp }) => {
  return (
    <div className="w-80 bg-white border-l border-gray-200 p-4 overflow-auto">
      <h2 className="text-lg font-bold mb-4 text-gray-800">Properties</h2>

      {!selectedComponent && (
        <p className="text-gray-500 text-sm">
          Select a component to edit its properties
        </p>
      )}

      {selectedComponent && selectedComponent.type === "text" && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Text Content
            </label>
            <textarea
              value={selectedComponent.props.content}
              onChange={(e) =>
                updateComponentProp(selectedId, "content", e.target.value)
              }
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
              rows={4}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Font Size (px)
            </label>
            <input
              type="number"
              value={selectedComponent.props.fontSize}
              onChange={(e) =>
                updateComponentProp(selectedId, "fontSize", e.target.value)
              }
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Text Color
            </label>
            <input
              type="color"
              value={selectedComponent.props.color}
              onChange={(e) =>
                updateComponentProp(selectedId, "color", e.target.value)
              }
              className="w-full h-10 border border-gray-300 rounded cursor-pointer"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Padding Top (px)
            </label>
            <input
              type="number"
              value={selectedComponent.props.paddingTop}
              onChange={(e) =>
                updateComponentProp(selectedId, "paddingTop", e.target.value)
              }
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Padding Bottom (px)
            </label>
            <input
              type="number"
              value={selectedComponent.props.paddingBottom}
              onChange={(e) =>
                updateComponentProp(selectedId, "paddingBottom", e.target.value)
              }
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
            />
          </div>

          {/* New alignment field */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Text Alignment
            </label>
            <select
              value={selectedComponent.props.alignment || "left"} // Fallback to 'left' if not set
              onChange={(e) =>
                updateComponentProp(selectedId, "alignment", e.target.value)
              }
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm">
              <option value="left">Left</option>
              <option value="center">Center</option>
              <option value="right">Right</option>
              <option value="justify">Justify</option>
            </select>
          </div>
        </div>
      )}

      {selectedComponent && selectedComponent.type === "image" && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Image URL
            </label>
            <input
              type="text"
              value={selectedComponent.props.url}
              onChange={(e) =>
                updateComponentProp(selectedId, "url", e.target.value)
              }
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Link URL (optional)
            </label>
            <input
              type="text"
              value={selectedComponent.props.linkUrl}
              onChange={(e) =>
                updateComponentProp(selectedId, "linkUrl", e.target.value)
              }
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
              placeholder="https://..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Width (px)
            </label>
            <input
              type="number"
              value={selectedComponent.props.width}
              onChange={(e) =>
                updateComponentProp(selectedId, "width", e.target.value)
              }
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Height (px)
            </label>
            <input
              type="number"
              value={selectedComponent.props.height}
              onChange={(e) =>
                updateComponentProp(selectedId, "height", e.target.value)
              }
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
            />
          </div>
        </div>
      )}

      {selectedComponent && selectedComponent.type === "button" && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Button Text
            </label>
            <input
              type="text"
              value={selectedComponent.props.text}
              onChange={(e) =>
                updateComponentProp(selectedId, "text", e.target.value)
              }
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Link URL
            </label>
            <input
              type="text"
              value={selectedComponent.props.linkUrl}
              onChange={(e) =>
                updateComponentProp(selectedId, "linkUrl", e.target.value)
              }
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
              placeholder="https://..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Background Color
            </label>
            <input
              type="color"
              value={selectedComponent.props.bgColor}
              onChange={(e) =>
                updateComponentProp(selectedId, "bgColor", e.target.value)
              }
              className="w-full h-10 border border-gray-300 rounded cursor-pointer"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Text Color
            </label>
            <input
              type="color"
              value={selectedComponent.props.textColor}
              onChange={(e) =>
                updateComponentProp(selectedId, "textColor", e.target.value)
              }
              className="w-full h-10 border border-gray-300 rounded cursor-pointer"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default RightPanel;
