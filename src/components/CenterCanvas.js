/* eslint-disable @next/next/no-img-element */
import { Trash2, Type, Image } from "lucide-react";
import { useRef, useState } from "react";

const CenterCanvas = ({
  components,
  selectedId,
  setSelectedId,
  dragOverIndex,
  handleDragStart,
  handleDragOver,
  handleDrop,
  handleCanvasDrop,
  deleteComponent,
  viewMode,
  updateComponentProp,
  draggedItem,
  handleDragEnd,
}) => {
  const fileInputRef = useRef(null);
  const [showBottomDropZone, setShowBottomDropZone] = useState(false);
  const handleFileUpload = (file, componentId) => {
    if (!file.type.startsWith("image/")) {
      alert("Please select an image file.");
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      updateComponentProp(componentId, "url", e.target.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex-1 overflow-auto p-8 bg-gray-100">
      <div
        className={`mx-auto bg-white shadow-xl transition-all ${
          viewMode === "mobile" ? "max-w-sm" : "max-w-2xl"
        }`}
        style={{ minHeight: "500px" }}
        onDragOver={(e) => {
          e.preventDefault();
          if (draggedItem && draggedItem.source === "library") {
            setShowBottomDropZone(true);
          }
        }}
        onDragEnter={(e) => {
          e.preventDefault();
          if (draggedItem && draggedItem.source === "library") {
            setShowBottomDropZone(true);
          }
        }}
        onDragLeave={(e) => {
          e.preventDefault();
          setShowBottomDropZone(false);
        }}
        onDrop={handleCanvasDrop}>
        {components.length === 0 && (
          <div className="h-64 flex flex-col items-center justify-center text-gray-400 border-2 border-dashed border-gray-300 m-8 rounded-lg">
            <div className="text-purple-400 mb-3">
              <Type size={48} />
            </div>
            <p className="text-lg font-medium">Drop content blocks here</p>
          </div>
        )}

        {components.map((component, index) => {
          const isSelected = selectedId === component.id;
          const isDraggedOver = dragOverIndex === index;

          return (
            <div key={component.id}>
              {isDraggedOver && (
                <div className="h-12 bg-purple-100 border-2 border-dashed border-purple-500 flex items-center justify-center text-purple-700 font-medium pointer-events-none">
                  Drag it here
                </div>
              )}
              <div
                draggable
                onDragStart={(e) => handleDragStart(e, component, index)}
                onDragOver={(e) => handleDragOver(e, index)}
                onDrop={(e) => handleDrop(e, index)}
                onDragEnd={handleDragEnd}
                onClick={() => setSelectedId(component.id)}
                className={`relative group cursor-pointer ${
                  isSelected ? "ring-2 ring-purple-500" : ""
                }`}>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteComponent(component.id);
                  }}
                  className={`absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity ${
                    isSelected ? "opacity-100" : ""
                  } hover:bg-red-600`}
                  title="Delete Component">
                  <Trash2 size={14} />
                </button>
                {component.type === "row" && (
                  <div
                    style={{
                      display: "flex",
                      backgroundColor: component.props.bgColor,
                      padding: "10px",
                    }}>
                    {Array(component.props.cols)
                      .fill(0)
                      .map((_, colIndex) => (
                        <div
                          key={colIndex}
                          style={{
                            flex: 1,
                            border: "1px dashed #ccc",
                            margin: "0 5px",
                            minHeight: "50px",
                          }}>
                          Column {colIndex + 1}
                        </div>
                      ))}
                  </div>
                )}
                {component.type === "title" && (
                  <div
                    style={{
                      fontSize: `${component.props.fontSize}px`,
                      color: component.props.color,
                      fontWeight: component.props.fontWeight,
                      textAlign: component.props.alignment,
                      padding: `${component.props.paddingTop}px 20px ${component.props.paddingBottom}px 20px`,
                      lineHeight: component.props.lineHeight,
                      letterSpacing: component.props.letterSpacing,
                    }}>
                    {component.props.content}
                  </div>
                )}
                {component.type === "paragraph" && (
                  <div
                    style={{
                      fontSize: `${component.props.fontSize}px`,
                      color: component.props.color,
                      textAlign: component.props.alignment,
                      padding: `${component.props.paddingTop}px 20px ${component.props.paddingBottom}px 20px`,
                      lineHeight: component.props.lineHeight,
                    }}>
                    {component.props.content}
                  </div>
                )}
                {component.type === "button" && (
                  <div style={{ padding: "20px", textAlign: "center" }}>
                    <div
                      style={{
                        display: "inline-block",
                        padding: `${component.props.paddingY}px ${component.props.paddingX}px`,
                        backgroundColor: component.props.bgColor,
                        color: component.props.textColor,
                        borderRadius: `${component.props.borderRadius}px`,
                        cursor: "pointer",
                      }}>
                      {component.props.text}
                    </div>
                  </div>
                )}
                {component.type === "list" && (
                  <div
                    style={{
                      padding: `${component.props.paddingTop}px 20px ${component.props.paddingBottom}px 20px`,
                      textAlign: component.props.alignment || "left",
                    }}>
                    {component.props.listType === "unordered" ? (
                      <ul
                        style={{
                          fontFamily:
                            component.props.fontFamily || "Arial, sans-serif",
                          fontWeight: component.props.fontWeight || "normal",
                          fontSize: `${component.props.fontSize}px`,
                          color: component.props.textColor || "#101218",
                          listStyleType:
                            component.props.listStyleType || "disc",
                          paddingLeft:
                            component.props.alignment === "center"
                              ? "0"
                              : "20px",
                          lineHeight: component.props.lineHeight || "1.2",
                          letterSpacing: `${
                            component.props.letterSpacing || 0
                          }px`,
                          display:
                            component.props.alignment === "center"
                              ? "inline-block"
                              : "block",
                          textAlign: "left",
                        }}>
                        {component.props.items.map((item, idx) => (
                          <li
                            key={idx}
                            style={{
                              marginBottom: `${
                                component.props.itemSpacing || 0
                              }px`,
                            }}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <ol
                        style={{
                          fontFamily:
                            component.props.fontFamily || "Arial, sans-serif",
                          fontWeight: component.props.fontWeight || "normal",
                          fontSize: `${component.props.fontSize}px`,
                          color: component.props.textColor || "#101218",
                          listStyleType:
                            component.props.listStyleType || "decimal",
                          paddingLeft:
                            component.props.alignment === "center"
                              ? "0"
                              : "20px",
                          lineHeight: component.props.lineHeight || "1.2",
                          letterSpacing: `${
                            component.props.letterSpacing || 0
                          }px`,
                          display:
                            component.props.alignment === "center"
                              ? "inline-block"
                              : "block",
                          textAlign: "left",
                        }}>
                        {component.props.items.map((item, idx) => (
                          <li
                            key={idx}
                            style={{
                              marginBottom: `${
                                component.props.itemSpacing || 0
                              }px`,
                            }}>
                            {item}
                          </li>
                        ))}
                      </ol>
                    )}
                  </div>
                )}
                {component.type === "image" && (
                  <div
                    style={{
                      padding: "20px",
                      textAlign: component.props.alignment,
                      border: "2px dashed #ccc",
                      borderRadius: "8px",
                      minHeight: "100px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#f9f9f9",
                      cursor: "pointer",
                    }}
                    onDragOver={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    onDrop={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      const files = e.dataTransfer.files;
                      if (files.length > 0) {
                        handleFileUpload(files[0], component.id);
                      }
                    }}
                    onClick={() => fileInputRef.current?.click()}>
                    {component.props.url &&
                    component.props.url !==
                      "https://via.placeholder.com/600x200/e0e0e0/666?text=Drop+your+file+here" ? (
                      <img
                        src={component.props.url}
                        alt="Uploaded Image"
                        style={{
                          width: `${component.props.width}px`,
                          height: `${component.props.height}px`,

                          maxWidth: "100%",
                          borderRadius: "4px",
                        }}
                      />
                    ) : (
                      <>
                        <Image size={48} className="text-gray-400 mb-2" />
                        <p className="text-gray-500 text-sm">
                          Drop your file here or click to upload
                        </p>
                        <button
                          className="mt-2 px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
                          onClick={(e) => {
                            e.stopPropagation();
                            fileInputRef.current?.click();
                          }}>
                          Upload Image
                        </button>
                      </>
                    )}
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                          handleFileUpload(file, component.id);
                        }
                      }}
                    />
                  </div>
                )}

                {component.type === "table" && (
                  <div style={{ padding: "20px" }}>
                    <table
                      style={{
                        width: "100%",
                        borderCollapse: "collapse",
                        backgroundColor: component.props.backgroundColor,
                        border: component.props.border,
                        fontFamily: component.props.fontFamily,
                        fontSize: `${component.props.fontSize}px`,
                        fontWeight: component.props.fontWeight,
                        color: component.props.fontColor,
                        textAlign: component.props.align,
                      }}>
                      <thead>
                        <tr>
                          {Array(component.props.cols)
                            .fill(0)
                            .map((_, colIdx) => (
                              <th
                                key={colIdx}
                                style={{
                                  border: component.props.border,
                                  padding: "8px",
                                  backgroundColor: component.props.headerBg,
                                  color: component.props.headerText,
                                }}>
                                Header {colIdx + 1}
                              </th>
                            ))}
                        </tr>
                      </thead>
                      <tbody>
                        {Array(component.props.rows - 1)
                          .fill(0)
                          .map((_, rowIdx) => (
                            <tr key={rowIdx}>
                              {Array(component.props.cols)
                                .fill(0)
                                .map((_, colIdx) => (
                                  <td
                                    key={colIdx}
                                    style={{
                                      border: component.props.border,
                                      padding: "8px",
                                      backgroundColor: component.props.cellBg,
                                      color: component.props.cellText,
                                    }}>
                                    Cell {rowIdx + 1},{colIdx + 1}
                                  </td>
                                ))}
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {component.type === "social" && (
                  <div
                    style={{
                      padding: "20px",
                      display: "flex",
                      justifyContent: "center",
                      gap: `${component.props.spacing}px`,
                    }}>
                    {component.props.icons.map((icon, idx) => (
                      <div
                        key={idx}
                        style={{
                          fontSize: `${component.props.iconSize}px`,
                          color: "#333",
                        }}>
                        {icon}{" "}
                      </div>
                    ))}
                  </div>
                )}
                {component.type === "divider" && (
                  <div
                    style={{
                      padding: `${component.props.paddingTop}px 0 ${component.props.paddingBottom}px 0`,
                    }}>
                    <div
                      style={{
                        height: `${component.props.thickness}px`,
                        backgroundColor: component.props.color,
                        width: `${component.props.width}%`,
                        margin: "0 auto",
                      }}
                    />
                  </div>
                )}
                {component.type === "spacer" && (
                  <div
                    style={{
                      height: `${component.props.height}px`,
                      backgroundColor: "#f9fafb",
                    }}
                  />
                )}

                {/* {showBottomDropZone && (
          <div className="h-12 bg-purple-100 border-2 border-dashed border-purple-500 flex items-center justify-center text-purple-700 font-medium pointer-events-none mt-4">
            Drag it here
          </div>
        )} */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CenterCanvas;
