/* eslint-disable @next/next/no-img-element */
import React from "react";
import { GripVertical, Copy, Trash2 } from "lucide-react";

const CenterCanvas = ({
  components,
  selectedId,
  setSelectedId,
  draggedItem,
  dragOverIndex,
  handleDragStart,
  handleDragOver,
  handleDragLeave,
  handleDrop,
  handleCanvasDragOver,
  handleCanvasDrop,
  duplicateComponent,
  deleteComponent,
}) => {
  return (
    <div className="flex-1 overflow-auto p-8 bg-gray-100">
      <div
        className="w-full max-w-2xl mx-auto bg-white shadow-lg"
        style={{ minHeight: "500px" }}
        onDragOver={handleCanvasDragOver}
        onDrop={handleCanvasDrop}>
        {components.length === 0 && (
          <div
            className="h-64 flex items-center justify-center text-gray-400 border-2 border-dashed border-gray-300 m-4 rounded"
            onDragOver={handleCanvasDragOver}
            onDrop={handleCanvasDrop}>
            <p className="text-lg">Drag components here to start building</p>
          </div>
        )}

        {components.map((component, index) => {
          const isSelected = selectedId === component.id;
          const isDraggedOver = dragOverIndex === index;

          return (
            <div key={component.id}>
              {isDraggedOver && draggedItem?.source === "library" && (
                <div className="h-1 bg-blue-500 mx-4" />
              )}
              <div
                draggable
                onDragStart={(e) => handleDragStart(e, component, index)}
                onDragOver={(e) => handleDragOver(e, index)}
                onDragLeave={handleDragLeave}
                onDrop={(e) => handleDrop(e, index)}
                onClick={() => setSelectedId(component.id)}
                className={`relative group cursor-move ${
                  isSelected ? "ring-2 ring-blue-500" : ""
                }`}>
                <div className="absolute left-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <GripVertical size={20} className="text-gray-800" />
                </div>

                <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1 z-10">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      duplicateComponent(component.id);
                    }}
                    className="p-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                    <Copy size={16} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteComponent(component.id);
                    }}
                    className="p-1 bg-red-500 text-white rounded hover:bg-red-600">
                    <Trash2 size={16} />
                  </button>
                </div>

                {/* Component Rendering */}
                {component.type === "text" && (
                  <div
                    style={{
                      fontSize: `${component.props.fontSize}px`,
                      color: component.props.color,
                      textAlign: component.props.alignment || "left",
                      padding: `${component.props.paddingTop}px 20px ${component.props.paddingBottom}px 20px`,
                    }}>
                    {component.props.content}
                  </div>
                )}

                {component.type === "image" && (
                  <div style={{ padding: "10px 0" }}>
                    <img
                      src={component.props.url}
                      alt="Image"
                      style={{
                        width: "100%",
                        maxWidth: `${component.props.width}px`,
                        height: "auto",
                        maxHeight: `${component.props.height}px`,
                        display: "block",
                      }}
                    />
                  </div>
                )}

                {component.type === "button" && (
                  <div style={{ padding: "20px", textAlign: "center" }}>
                    <div
                      style={{
                        display: "inline-block",
                        padding: "12px 30px",
                        backgroundColor: component.props.bgColor,
                        color: component.props.textColor,
                        borderRadius: "5px",
                        fontSize: "16px",
                        cursor: "pointer",
                      }}>
                      {component.props.text}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {components.length > 0 && (
          <div
            onDragOver={(e) => handleDragOver(e, components.length)}
            onDragLeave={handleDragLeave}
            onDrop={(e) => handleDrop(e, components.length)}
            className={`h-16 border-2 border-dashed ${
              dragOverIndex === components.length
                ? "border-blue-500 bg-blue-50"
                : "border-gray-300"
            } m-4 rounded flex items-center justify-center text-gray-400`}>
            Drop here to add at end
          </div>
        )}
      </div>
    </div>
  );
};

export default CenterCanvas;
