const RightPanel = ({ selectedComponent, selectedId, updateComponentProp }) => {
    if (!selectedComponent) {
    return (
      <div className="w-80 bg-white border-l border-gray-200 p-4">
        <p className="text-gray-500 text-center">Select a component to edit</p>
      </div>
    );
  }

 const { type, props } = selectedComponent;
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
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-bold mb-4 text-gray-800 uppercase">
                Title
              </h3>
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
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold mb-4 text-gray-800 uppercase">
                Font Family
              </h3>
              <select
                value={
                  selectedComponent.props.fontFamily || "Arial, sans-serif"
                }
                onChange={(e) =>
                  updateComponentProp(selectedId, "fontFamily", e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
              >
                <option value="Arial, sans-serif">Arial</option>
                <option value="Helvetica, sans-serif">Helvetica</option>
                <option value="Times New Roman, serif">Times New Roman</option>
                <option value="Georgia, serif">Georgia</option>
                <option value="Verdana, sans-serif">Verdana</option>
              </select>
            </div>

            <div>
              <h3 className="text-sm font-bold mb-4 text-gray-800 uppercase">
                Font Weight
              </h3>
              <select
                value={selectedComponent.props.fontWeight}
                onChange={(e) =>
                  updateComponentProp(selectedId, "fontWeight", e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
              >
                <option value="lighter">Lighter</option>
                <option value="normal">Normal</option>
                <option value="bold">Bold</option>
                <option value="bolder">Bolder</option>
              </select>
            </div>

            <div>
              <h3 className="text-sm font-bold mb-4 text-gray-800 uppercase">
                Font Size
              </h3>
              <div className="flex items-center gap-2">
                <input
                  type="range"
                  min="12"
                  max="72"
                  value={selectedComponent.props.fontSize}
                  onChange={(e) =>
                    updateComponentProp(selectedId, "fontSize", e.target.value)
                  }
                  className="flex-1"
                />
                <input
                  type="number"
                  min="12"
                  max="72"
                  value={selectedComponent.props.fontSize}
                  onChange={(e) =>
                    updateComponentProp(selectedId, "fontSize", e.target.value)
                  }
                  className="w-16 px-2 py-1 border border-gray-300 rounded text-sm"
                />
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold mb-4 text-gray-800 uppercase">
                Text Color
              </h3>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={selectedComponent.props.color}
                  onChange={(e) =>
                    updateComponentProp(selectedId, "color", e.target.value)
                  }
                  className="w-12 h-10 border border-gray-300 rounded cursor-pointer"
                />
                <input
                  type="text"
                  value={selectedComponent.props.color}
                  onChange={(e) =>
                    updateComponentProp(selectedId, "color", e.target.value)
                  }
                  className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm"
                />
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold mb-4 text-gray-800 uppercase">
                Align
              </h3>
              <div className="flex gap-2">
                <button
                  onClick={() =>
                    updateComponentProp(selectedId, "alignment", "left")
                  }
                  className={`flex-1 px-3 py-2 border rounded ${
                    selectedComponent.props.alignment === "left"
                      ? "bg-purple-500 text-white border-purple-500"
                      : "border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  Left
                </button>
                <button
                  onClick={() =>
                    updateComponentProp(selectedId, "alignment", "center")
                  }
                  className={`flex-1 px-3 py-2 border rounded ${
                    selectedComponent.props.alignment === "center"
                      ? "bg-purple-500 text-white border-purple-500"
                      : "border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  Center
                </button>
                <button
                  onClick={() =>
                    updateComponentProp(selectedId, "alignment", "right")
                  }
                  className={`flex-1 px-3 py-2 border rounded ${
                    selectedComponent.props.alignment === "right"
                      ? "bg-purple-500 text-white border-purple-500"
                      : "border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  Right
                </button>
              </div>
            </div>

         <div>

      <h3 className="text-sm font-bold mb-4 text-gray-800 uppercase">
        Line Height
      </h3>
      <select
        value={selectedComponent.props.lineHeight || "1.5"}
        onChange={(e) =>
          updateComponentProp(selectedId, "lineHeight", e.target.value)
        }
        className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
      >
        <option value="1">1</option>
        <option value="1.2">1.2</option>
        <option value="1.5">1.5</option>
        <option value="1.8">1.8</option>
        <option value="2">2</option>
      </select>
       <div>
      <h3 className="text-sm font-bold mb-4 text-gray-800 uppercase">
        Link (Optional)
      </h3>
      <input
        type="url"  
        placeholder="https://example.com"
        value={selectedComponent.props.link || ""}
        onChange={(e) =>
          updateComponentProp(selectedId, "link", e.target.value)
        }
        className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
      />
      <p className="text-xs text-gray-500 mt-1">
        Leave empty for plain text. Enter a full URL (e.g., https://example.com).
      </p>
    </div>
    </div>

    <div>
      <h3 className="text-sm font-bold mb-4 text-gray-800 uppercase">
        Letter Spacing
      </h3>
      <select
        value={selectedComponent.props.letterSpacing || "0px"}
        onChange={(e) =>
          updateComponentProp(selectedId, "letterSpacing", e.target.value)
        }
        className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
      >
        <option value="0px">0px (Normal)</option>
        <option value="0.5px">0.5px</option>
        <option value="1px">1px</option>
        <option value="2px">2px</option>
        <option value="0.05em">0.05em</option>
        <option value="0.1em">0.1em</option>
      </select>
    </div>

            <div>
              <h3 className="text-sm font-bold mb-4 text-gray-800 uppercase">
                Padding
              </h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-xs mb-1 text-gray-600">
                    Top
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={selectedComponent.props.paddingTop}
                    onChange={(e) =>
                      updateComponentProp(
                        selectedId,
                        "paddingTop",
                        e.target.value
                      )
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs mb-1 text-gray-600">
                    Bottom
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={selectedComponent.props.paddingBottom}
                    onChange={(e) =>
                      updateComponentProp(
                        selectedId,
                        "paddingBottom",
                        e.target.value
                      )
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                  />
                </div>
              </div>
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
 {selectedComponent && selectedComponent.type === "list" && (
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-bold mb-4 text-gray-800 uppercase">
                List Type
              </h3>
              <div className="flex gap-2">
                <button
                  onClick={() =>
                    updateComponentProp(selectedId, "listType", "unordered")
                  }
                  className={`flex-1 px-3 py-2 border rounded flex items-center justify-center ${
                    selectedComponent.props.listType === "unordered"
                      ? "bg-purple-500 text-white border-purple-500"
                      : "border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  <span className="text-lg">☰</span>
                </button>
                <button
                  onClick={() =>
                    updateComponentProp(selectedId, "listType", "ordered")
                  }
                  className={`flex-1 px-3 py-2 border rounded flex items-center justify-center ${
                    selectedComponent.props.listType === "ordered"
                      ? "bg-purple-500 text-white border-purple-500"
                      : "border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  <span className="text-lg">≡</span>
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold mb-4 text-gray-800 uppercase">
                List Style Type
              </h3>
              <select
                value={selectedComponent.props.listStyleType || "disc"}
                onChange={(e) =>
                  updateComponentProp(selectedId, "listStyleType", e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
              >
                <option value="disc">Default</option>
                <option value="circle">Circle</option>
                <option value="square">Square</option>
                <option value="decimal">Decimal</option>
                <option value="lower-alpha">Lower Alpha</option>
                <option value="upper-alpha">Upper Alpha</option>
                <option value="lower-roman">Lower Roman</option>
                <option value="upper-roman">Upper Roman</option>
              </select>
            </div>

            <div>
              <h3 className="text-sm font-bold mb-4 text-gray-800 uppercase">
                Font Family
              </h3>
              <select
                value={selectedComponent.props.fontFamily || "Arial, sans-serif"}
                onChange={(e) =>
                  updateComponentProp(selectedId, "fontFamily", e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
              >
                <option value="inherit">Global font</option>
                <option value="Arial, sans-serif">Arial</option>
                <option value="Helvetica, sans-serif">Helvetica</option>
                <option value="Times New Roman, serif">Times New Roman</option>
                <option value="Georgia, serif">Georgia</option>
                <option value="Verdana, sans-serif">Verdana</option>
              </select>
            </div>

            <div>
              <h3 className="text-sm font-bold mb-4 text-gray-800 uppercase">
                Font Weight
              </h3>
              <select
                value={selectedComponent.props.fontWeight || "normal"}
                onChange={(e) =>
                  updateComponentProp(selectedId, "fontWeight", e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
              >
                <option value="lighter">Regular</option>
                <option value="normal">Normal</option>
                <option value="bold">Bold</option>
                <option value="bolder">Bolder</option>
              </select>
            </div>

            <div>
              <h3 className="text-sm font-bold mb-4 text-gray-800 uppercase">
                Font Size
              </h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    updateComponentProp(
                      selectedId,
                      "fontSize",
                      Math.max(8, (selectedComponent.props.fontSize || 16) - 1)
                    )
                  }
                  className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-50"
                >
                  −
                </button>
                <input
                  type="number"
                  min="8"
                  max="72"
                  value={selectedComponent.props.fontSize || 16}
                  onChange={(e) =>
                    updateComponentProp(selectedId, "fontSize", e.target.value)
                  }
                  className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm text-center"
                />
                <button
                  onClick={() =>
                    updateComponentProp(
                      selectedId,
                      "fontSize",
                      Math.min(72, (selectedComponent.props.fontSize || 16) + 1)
                    )
                  }
                  className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-50"
                >
                  +
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold mb-4 text-gray-800 uppercase">
                Text Color
              </h3>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={selectedComponent.props.textColor || "#101218"}
                  onChange={(e) =>
                    updateComponentProp(selectedId, "textColor", e.target.value)
                  }
                  className="w-12 h-10 border border-gray-300 rounded cursor-pointer"
                />
                <input
                  type="text"
                  value={selectedComponent.props.textColor || "#101218"}
                  onChange={(e) =>
                    updateComponentProp(selectedId, "textColor", e.target.value)
                  }
                  className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm"
                />
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold mb-4 text-gray-800 uppercase">
                Link Color
              </h3>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={selectedComponent.props.linkColor || "#7747ff"}
                  onChange={(e) =>
                    updateComponentProp(selectedId, "linkColor", e.target.value)
                  }
                  className="w-12 h-10 border border-gray-300 rounded cursor-pointer"
                />
                <input
                  type="text"
                  value={selectedComponent.props.linkColor || "#7747ff"}
                  onChange={(e) =>
                    updateComponentProp(selectedId, "linkColor", e.target.value)
                  }
                  className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm"
                />
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold mb-4 text-gray-800 uppercase">
                Align
              </h3>
              <div className="flex gap-2">
                <button
                  onClick={() =>
                    updateComponentProp(selectedId, "alignment", "left")
                  }
                  className={`flex-1 px-3 py-2 border rounded ${
                    selectedComponent.props.alignment === "left"
                      ? "bg-purple-500 text-white border-purple-500"
                      : "border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  ☰
                </button>
                <button
                  onClick={() =>
                    updateComponentProp(selectedId, "alignment", "center")
                  }
                  className={`flex-1 px-3 py-2 border rounded ${
                    selectedComponent.props.alignment === "center"
                      ? "bg-purple-500 text-white border-purple-500"
                      : "border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  ≡
                </button>
                <button
                  onClick={() =>
                    updateComponentProp(selectedId, "alignment", "right")
                  }
                  className={`flex-1 px-3 py-2 border rounded ${
                    selectedComponent.props.alignment === "right"
                      ? "bg-purple-500 text-white border-purple-500"
                      : "border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  ☰
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold mb-4 text-gray-800 uppercase">
                List Items Spacing
              </h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    updateComponentProp(
                      selectedId,
                      "itemSpacing",
                      Math.max(0, (selectedComponent.props.itemSpacing || 0) - 1)
                    )
                  }
                  className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-50"
                >
                  −
                </button>
                <input
                  type="number"
                  min="0"
                  max="50"
                  value={selectedComponent.props.itemSpacing || 0}
                  onChange={(e) =>
                    updateComponentProp(selectedId, "itemSpacing", e.target.value)
                  }
                  className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm text-center"
                />
                <button
                  onClick={() =>
                    updateComponentProp(
                      selectedId,
                      "itemSpacing",
                      Math.min(50, (selectedComponent.props.itemSpacing || 0) + 1)
                    )
                  }
                  className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-50"
                >
                  +
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold mb-4 text-gray-800 uppercase">
                Nested Items Indent
              </h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    updateComponentProp(
                      selectedId,
                      "nestedIndent",
                      Math.max(0, (selectedComponent.props.nestedIndent || 30) - 5)
                    )
                  }
                  className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-50"
                >
                  −
                </button>
                <input
                  type="number"
                  min="0"
                  max="100"
                  step="5"
                  value={selectedComponent.props.nestedIndent || 30}
                  onChange={(e) =>
                    updateComponentProp(selectedId, "nestedIndent", e.target.value)
                  }
                  className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm text-center"
                />
                <button
                  onClick={() =>
                    updateComponentProp(
                      selectedId,
                      "nestedIndent",
                      Math.min(100, (selectedComponent.props.nestedIndent || 30) + 5)
                    )
                  }
                  className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-50"
                >
                  +
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold mb-4 text-gray-800 uppercase">
                Line Height
              </h3>
              <select
                value={selectedComponent.props.lineHeight || "1.2"}
                onChange={(e) =>
                  updateComponentProp(selectedId, "lineHeight", e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
              >
                <option value="1">1</option>
                <option value="1.2">1.2</option>
                <option value="1.5">1.5</option>
                <option value="1.8">1.8</option>
                <option value="2">2</option>
              </select>
            </div>

            <div>
              <h3 className="text-sm font-bold mb-4 text-gray-800 uppercase">
                Letter Spacing
              </h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    updateComponentProp(
                      selectedId,
                      "letterSpacing",
                      Math.max(-2, (selectedComponent.props.letterSpacing || 0) - 0.5)
                    )
                  }
                  className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-50"
                >
                  −
                </button>
                <input
                  type="number"
                  min="-2"
                  max="10"
                  step="0.5"
                  value={selectedComponent.props.letterSpacing || 0}
                  onChange={(e) =>
                    updateComponentProp(selectedId, "letterSpacing", e.target.value)
                  }
                  className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm text-center"
                />
                <button
                  onClick={() =>
                    updateComponentProp(
                      selectedId,
                      "letterSpacing",
                      Math.min(10, (selectedComponent.props.letterSpacing || 0) + 0.5)
                    )
                  }
                  className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-50"
                >
                  +
                </button>
              </div>
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
              <h3 className="text-sm font-bold mb-4 text-gray-800 uppercase">
                Layout
              </h3>
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
                      updateComponentProp(
                        selectedId,
                        "cols",
                        parseInt(e.target.value) || 1
                      )
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
                      updateComponentProp(
                        selectedId,
                        "rows",
                        parseInt(e.target.value) || 1
                      )
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
                      updateComponentProp(
                        selectedId,
                        "backgroundColor",
                        e.target.value
                      )
                    }
                    className="w-full h-10 border border-gray-300 rounded cursor-pointer"
                  />
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold mb-4 text-gray-800 uppercase">
                Content
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium mb-2 text-gray-700 uppercase">
                    Font Family
                  </label>
                  <select
                    value={selectedComponent.props.fontFamily}
                    onChange={(e) =>
                      updateComponentProp(
                        selectedId,
                        "fontFamily",
                        e.target.value
                      )
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                  >
                    <option value="Arial, sans-serif">Arial</option>
                    <option value="Helvetica, sans-serif">Helvetica</option>
                    <option value="Times New Roman, serif">
                      Times New Roman
                    </option>
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
                      updateComponentProp(
                        selectedId,
                        "fontColor",
                        e.target.value
                      )
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
                      updateComponentProp(
                        selectedId,
                        "fontWeight",
                        e.target.value
                      )
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
                      updateComponentProp(
                        selectedId,
                        "fontSize",
                        e.target.value
                      )
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
                onChange={(e) =>
                  updateComponentProp(selectedId, "url", e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
              />
            </div>
          </div>
        )}


          {type === "paragraph" && (
          <>
            <div>
              <label className="block text-sm font-medium mb-1">Content</label>
              <textarea
                value={props.content}
                onChange={(e) => onUpdate("content", e.target.value)}
                className="w-full px-3 py-2 border rounded"
                rows={4}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Font Size</label>
              <input
                type="number"
                value={props.fontSize}
                onChange={(e) => onUpdate("fontSize", parseInt(e.target.value))}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Color</label>
              <input
                type="color"
                value={props.color}
                onChange={(e) => onUpdate("color", e.target.value)}
                className="w-full h-10 border rounded"
              />
            </div>
          </>
        )}

        {type === "button" && (
          <>
            <div>
              <label className="block text-sm font-medium mb-1">Text</label>
              <input
                type="text"
                value={props.text}
                onChange={(e) => onUpdate("text", e.target.value)}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Link URL</label>
              <input
                type="text"
                value={props.linkUrl}
                onChange={(e) => onUpdate("linkUrl", e.target.value)}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Background Color</label>
              <input
                type="color"
                value={props.bgColor}
                onChange={(e) => onUpdate("bgColor", e.target.value)}
                className="w-full h-10 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Text Color</label>
              <input
                type="color"
                value={props.textColor}
                onChange={(e) => onUpdate("textColor", e.target.value)}
                className="w-full h-10 border rounded"
              />
            </div>
          </>
        )}

        {type === "image" && (
          <>
            <div>
              <label className="block text-sm font-medium mb-1">Width (px)</label>
              <input
                type="number"
                value={props.width}
                onChange={(e) => onUpdate("width", parseInt(e.target.value))}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Height (px)</label>
              <input
                type="number"
                value={props.height}
                onChange={(e) => onUpdate("height", parseInt(e.target.value))}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
          </>
        )}

        {type === "divider" && (
          <>
            <div>
              <label className="block text-sm font-medium mb-1">Thickness (px)</label>
              <input
                type="number"
                value={props.thickness}
                onChange={(e) => onUpdate("thickness", parseInt(e.target.value))}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Color</label>
              <input
                type="color"
                value={props.color}
                onChange={(e) => onUpdate("color", e.target.value)}
                className="w-full h-10 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Width (%)</label>
              <input
                type="number"
                value={props.width}
                onChange={(e) => onUpdate("width", parseInt(e.target.value))}
                className="w-full px-3 py-2 border rounded"
                min="0"
                max="100"
              />
            </div>
          </>
        )}

        {type === "spacer" && (
          <div>
            <label className="block text-sm font-medium mb-1">Height (px)</label>
            <input
              type="number"
              value={props.height}
              onChange={(e) => onUpdate("height", parseInt(e.target.value))}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default RightPanel;

