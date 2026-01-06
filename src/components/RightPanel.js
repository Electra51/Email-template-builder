import React from "react";
const RightPanel = ({ selectedComponent, selectedId, updateComponentProp }) => {
  return (
    <div className="w-80 bg-white border-l border-gray-200 overflow-auto">
        <div className="p-4">
          <h2 className="text-sm font-bold mb-4 text-gray-800 uppercase">
            Properties
          </h2>

          {!selectedComponent && (
            <p className="text-gray-500 text-sm">
              Select a component to edit its properties
            </p>
          )}

          {selectedComponent && selectedComponent.type === "title" && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium mb-2 text-gray-700 uppercase">
                  Text Content
                </label>
                <textarea
                  value={selectedComponent.props.content}
                  onChange={(e) =>
                    updateComponentProp(selectedId, "content", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                  rows={3}
                />
              </div>
              <div>
                <label className="block text-xs font-medium mb-2 text-gray-700 uppercase">
                  Font Size
                </label>
                <input
                  type="range"
                  min="12"
                  max="72"
                  value={selectedComponent.props.fontSize}
                  onChange={(e) =>
                    updateComponentProp(selectedId, "fontSize", e.target.value)
                  }
                  className="w-full"
                />
                <span className="text-sm text-gray-600">
                  {selectedComponent.props.fontSize}px
                </span>
              </div>
              <div>
                <label className="block text-xs font-medium mb-2 text-gray-700 uppercase">
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
                <label className="block text-xs font-medium mb-2 text-gray-700 uppercase">
                  Alignment
                </label>
                <select
                  value={selectedComponent.props.alignment}
                  onChange={(e) =>
                    updateComponentProp(selectedId, "alignment", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm">
                  <option value="left">Left</option>
                  <option value="center">Center</option>
                  <option value="right">Right</option>
                </select>
              </div>
            </div>
          )}

          {selectedComponent && selectedComponent.type === "paragraph" && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium mb-2 text-gray-700 uppercase">
                  Text Content
                </label>
                <textarea
                  value={selectedComponent.props.content}
                  onChange={(e) =>
                    updateComponentProp(selectedId, "content", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                  rows={5}
                />
              </div>
              <div>
                <label className="block text-xs font-medium mb-2 text-gray-700 uppercase">
                  Font Size
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
            </div>
          )}

          {selectedComponent && selectedComponent.type === "button" && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium mb-2 text-gray-700 uppercase">
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
                <label className="block text-xs font-medium mb-2 text-gray-700 uppercase">
                  Link URL
                </label>
                <input
                  type="text"
                  value={selectedComponent.props.linkUrl}
                  onChange={(e) =>
                    updateComponentProp(selectedId, "linkUrl", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-medium mb-2 text-gray-700 uppercase">
                  Background Color
                </label>
                <input
                  type="color"
                  value={selectedComponent.props.bgColor}
                  onChange={(e) =>
                    updateComponentProp(selectedId, "bgColor", e.target.value)
                  }
                  className="w-full h-10 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-xs font-medium mb-2 text-gray-700 uppercase">
                  Border Radius
                </label>
                <input
                  type="range"
                  min="0"
                  max="50"
                  value={selectedComponent.props.borderRadius}
                  onChange={(e) =>
                    updateComponentProp(
                      selectedId,
                      "borderRadius",
                      e.target.value
                    )
                  }
                  className="w-full"
                />
                <span className="text-sm text-gray-600">
                  {selectedComponent.props.borderRadius}px
                </span>
              </div>
            </div>
          )}

          {selectedComponent && selectedComponent.type === "table" && (
  <div className="space-y-6">
    <div>
      <h3 className="text-sm font-bold mb-4 text-gray-800 uppercase">Layout</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-xs font-medium mb-2 text-gray-700 uppercase">
            Columns
          </label>
          <input
            type="number"
            min="1"
            max="10"
            value={selectedComponent.props.cols}
            onChange={(e) =>
              updateComponentProp(selectedId, "cols", parseInt(e.target.value) || 1)
            }
            className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-medium mb-2 text-gray-700 uppercase">
            Rows
          </label>
          <input
            type="number"
            min="1"
            max="20"
            value={selectedComponent.props.rows}
            onChange={(e) =>
              updateComponentProp(selectedId, "rows", parseInt(e.target.value) || 1)
            }
            className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-medium mb-2 text-gray-700 uppercase">
            Border
          </label>
          <input
            type="text"
            value={selectedComponent.props.border}
            onChange={(e) =>
              updateComponentProp(selectedId, "border", e.target.value)
            }
            className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
            placeholder="e.g., 1px solid #ddd"
          />
        </div>
        <div>
          <label className="block text-xs font-medium mb-2 text-gray-700 uppercase">
            Background Color
          </label>
          <input
            type="color"
            value={selectedComponent.props.backgroundColor}
            onChange={(e) =>
              updateComponentProp(selectedId, "backgroundColor", e.target.value)
            }
            className="w-full h-10 border border-gray-300 rounded cursor-pointer"
          />
        </div>
      </div>
    </div>
    <div>
      <h3 className="text-sm font-bold mb-4 text-gray-800 uppercase">Content</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-xs font-medium mb-2 text-gray-700 uppercase">
            Font Family
          </label>
          <select
            value={selectedComponent.props.fontFamily}
            onChange={(e) =>
              updateComponentProp(selectedId, "fontFamily", e.target.value)
            }
            className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
          >
            <option value="Arial, sans-serif">Arial</option>
            <option value="Helvetica, sans-serif">Helvetica</option>
            <option value="Times New Roman, serif">Times New Roman</option>
            <option value="Georgia, serif">Georgia</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium mb-2 text-gray-700 uppercase">
            Font Color
          </label>
          <input
            type="color"
            value={selectedComponent.props.fontColor}
            onChange={(e) =>
              updateComponentProp(selectedId, "fontColor", e.target.value)
            }
            className="w-full h-10 border border-gray-300 rounded cursor-pointer"
          />
        </div>
        <div>
          <label className="block text-xs font-medium mb-2 text-gray-700 uppercase">
            Font Weight
          </label>
          <select
            value={selectedComponent.props.fontWeight}
            onChange={(e) =>
              updateComponentProp(selectedId, "fontWeight", e.target.value)
            }
            className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
          >
            <option value="normal">Normal</option>
            <option value="bold">Bold</option>
            <option value="lighter">Lighter</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium mb-2 text-gray-700 uppercase">
            Font Size
          </label>
          <input
            type="number"
            min="8"
            max="72"
            value={selectedComponent.props.fontSize}
            onChange={(e) =>
              updateComponentProp(selectedId, "fontSize", e.target.value)
            }
            className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-medium mb-2 text-gray-700 uppercase">
            Align
          </label>
          <select
            value={selectedComponent.props.align}
            onChange={(e) =>
              updateComponentProp(selectedId, "align", e.target.value)
            }
            className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
          >
            <option value="left">Left</option>
            <option value="center">Center</option>
            <option value="right">Right</option>
          </select>
        </div>
      </div>
    </div>
  </div>
)}


{selectedComponent && selectedComponent.type === "image" && (
  <div className="space-y-4">
    <div>
      <label className="block text-xs font-medium mb-2 text-gray-700 uppercase">
        Image URL
      </label>
      <input
        type="text"
        value={selectedComponent.props.url}
        onChange={(e) => updateComponentProp(selectedId, "url", e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
      />
    </div>
    {/* Add width, height, etc. similarly */}
  </div>
)}
        </div>
      </div>
  );
};

export default RightPanel;
