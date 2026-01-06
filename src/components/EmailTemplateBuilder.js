"use client";

import React, { useState } from "react";
import LeftPanel from "./LeftPanel";
import TopBar from "./TopBar";
import CenterCanvas from "./CenterCanvas";
import RightPanel from "./RightPanel";

const EmailTemplateBuilder = () => {
  const [components, setComponents] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [templateName, setTemplateName] = useState("My Email Template");
  const [draggedItem, setDraggedItem] = useState(null);
  const [dragOverIndex, setDragOverIndex] = useState(null);

  const [viewMode, setViewMode] = useState("desktop");
  const [history, setHistory] = useState([[]]);
  const [historyIndex, setHistoryIndex] = useState(0);

  // Default properties
  const getDefaultProps = (type) => {
    const defaults = {
      title: {
        content: "I'm a new title block",
        fontSize: "32",
        color: "#1a1a5e",
        fontWeight: "bold",
        alignment: "center",
        paddingTop: "20",
        paddingBottom: "20",
      },
      paragraph: {
        content:
          "I'm a new paragraph block. Click to edit this text and customize the styling.",
        fontSize: "16",
        color: "#333333",
        alignment: "left",
        paddingTop: "10",
        paddingBottom: "10",
        lineHeight: "1.6",
      },
      list: {
        items: ["List item 1", "List item 2", "List item 3"],
        fontSize: "16",
        color: "#333333",
        paddingTop: "10",
        paddingBottom: "10",
      },
      image: {
        url: "https://via.placeholder.com/600x200/e0e0e0/666?text=Drop+your+file+here",
        linkUrl: "",
        width: "600",
        height: "200",
        alignment: "center",
      },
      button: {
        text: "Button",
        linkUrl: "#",
        bgColor: "#7c3aed",
        textColor: "#ffffff",
        borderRadius: "4",
        paddingX: "30",
        paddingY: "12",
      },
      table: {
        rows: 3,
        cols: 3,
        headerBg: "#7c3aed",
        headerText: "#ffffff",
        cellBg: "#ffffff",
        cellText: "#333333",
        border: "1px solid #ddd", // New: Border style
        backgroundColor: "#ffffff", // New: Overall background
        fontFamily: "Arial, sans-serif", // New: Font family
        fontColor: "#333333", // New: Font color (alias for cellText)
        fontWeight: "normal", // New: Font weight
        fontSize: "14", // New: Font size
        align: "left", // New: Text alignment
      },
      divider: {
        color: "#e5e7eb",
        thickness: "1",
        width: "100",
        paddingTop: "20",
        paddingBottom: "20",
      },
      spacer: {
        height: "40",
      },
      social: {
        icons: ["facebook", "twitter", "instagram", "linkedin"],
        iconSize: "32",
        spacing: "10",
      },
      row: {
        cols: 2,
        bgColor: "#ffffff",
        columns: [],
      },
    };
    return defaults[type] || {};
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragOverIndex(null);
  };

  const handleDrop = (e, dropIndex) => {
    e.preventDefault();
    e.stopPropagation();

    let dragData = draggedItem;

    if (!dragData) {
      try {
        dragData = JSON.parse(e.dataTransfer.getData("text/plain"));
      } catch (err) {
        return;
      }
    }

    if (!dragData) return;
    if (dragData.source === "library") {
      let newComponent;
      if (dragData.item.type === "row") {
        newComponent = {
          id: Date.now(),
          type: "row",
          props: {
            ...getDefaultProps("row"),
            cols: dragData.item.cols,
            columns: Array(dragData.item.cols).fill([]),
          },
        };
      } else {
        newComponent = {
          id: Date.now(),
          type: dragData.item.type,
          props: getDefaultProps(dragData.item.type),
        };
      }
      const newComponents = [...components];
      newComponents.splice(dropIndex, 0, newComponent);
      setComponents(newComponents);
      saveToHistory(newComponents); // Save to history
      setSelectedId(newComponent.id);
    }

    setDraggedItem(null);
    setDragOverIndex(null);
  };

  // History management
  const saveToHistory = (newComponents) => {
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(newComponents);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  const undo = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
      setComponents(history[historyIndex - 1]);
    }
  };

  const redo = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1);
      setComponents(history[historyIndex + 1]);
    }
  };

  // Component operations
  const deleteComponent = (id) => {
    const newComponents = components.filter((c) => c.id !== id);
    setComponents(newComponents);
    saveToHistory(newComponents);
    if (selectedId === id) setSelectedId(null);
  };

  const duplicateComponent = (id) => {
    const component = components.find((c) => c.id === id);
    if (component) {
      const newComponent = {
        ...component,
        id: Date.now(),
      };
      const index = components.findIndex((c) => c.id === id);
      const newComponents = [...components];
      newComponents.splice(index + 1, 0, newComponent);
      setComponents(newComponents);
      saveToHistory(newComponents);
    }
  };

  const updateComponentProp = (id, prop, value) => {
    const newComponents = components.map((c) =>
      c.id === id ? { ...c, props: { ...c.props, [prop]: value } } : c
    );
    setComponents(newComponents);
  };

  // Drag and drop handlers
  const handleDragStart = (e, item, index) => {
    const source = index !== undefined ? "canvas" : "library"; //fixed syntax
    const dragData = { item, index, source };
    setDraggedItem(dragData);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    setDragOverIndex(index);
  };

  const handleCanvasDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleCanvasDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    let dragData = draggedItem;

    if (!dragData) {
      try {
        dragData = JSON.parse(e.dataTransfer.getData("text/plain"));
      } catch (err) {
        return;
      }
    }

    if (!dragData || dragData.source !== "library") return;

    if (dragData.source === "library") {
      let newComponent;
      if (dragData.item.type === "row") {
        newComponent = {
          id: Date.now(),
          type: "row",
          props: {
            ...getDefaultProps("row"),
            cols: dragData.item.cols,
            columns: Array(dragData.item.cols).fill([]),
          },
        };
      } else {
        newComponent = {
          id: Date.now(),
          type: dragData.item.type,
          props: getDefaultProps(dragData.item.type),
        };
      }
      setComponents([...components, newComponent]);
      saveToHistory([...components, newComponent]);
      setSelectedId(newComponent.id);
    }
  };

  // Add row layout
  const addRowLayout = (cols) => {
    const newComponent = {
      id: Date.now(),
      type: "row",
      props: {
        ...getDefaultProps("row"),
        cols,
        columns: Array(cols).fill([]),
      },
    };
    const newComponents = [...components, newComponent];
    setComponents(newComponents);
    saveToHistory(newComponents);
  };

  const exportHTML = () => {
    const generateHTML = (component) => {
      const { type, props } = component;

      if (type === "title") {
        return `<tr><td style="font-size: ${props.fontSize}px; color: ${props.color}; font-weight: ${props.fontWeight}; text-align: ${props.alignment}; padding: ${props.paddingTop}px 20px ${props.paddingBottom}px 20px;">${props.content}</td></tr>`;
      }
      if (type === "paragraph") {
        return `<tr><td style="font-size: ${props.fontSize}px; color: ${props.color}; text-align: ${props.alignment}; padding: ${props.paddingTop}px 20px ${props.paddingBottom}px 20px; line-height: ${props.lineHeight};">${props.content}</td></tr>`;
      }
      if (type === "button") {
        return `<tr><td style="padding: 20px; text-align: center;"><a href="${props.linkUrl}" style="display: inline-block; padding: ${props.paddingY}px ${props.paddingX}px; background-color: ${props.bgColor}; color: ${props.textColor}; text-decoration: none; border-radius: ${props.borderRadius}px;">${props.text}</a></td></tr>`;
      }
      if (type === "divider") {
        return `<tr><td style="padding: ${props.paddingTop}px 0 ${props.paddingBottom}px 0;"><div style="height: ${props.thickness}px; background-color: ${props.color}; width: ${props.width}%; margin: 0 auto;"></div></td></tr>`;
      }
      if (type === "table") {
        const tableHTML = `
    <table style="width: 100%; border-collapse: collapse; background-color: ${
      props.backgroundColor
    }; border: ${props.border}; font-family: ${props.fontFamily}; font-size: ${
          props.fontSize
        }px; font-weight: ${props.fontWeight}; color: ${
          props.fontColor
        }; text-align: ${props.align};">
      <thead>
        <tr>
          ${Array(props.cols)
            .fill(0)
            .map(
              (_, colIdx) =>
                `<th style="border: ${
                  props.border
                }; padding: 8px; background-color: ${props.headerBg}; color: ${
                  props.headerText
                };">Header ${colIdx + 1}</th>`
            )
            .join("")}
        </tr>
      </thead>
      <tbody>
        ${Array(props.rows - 1)
          .fill(0)
          .map(
            (_, rowIdx) => `
          <tr>
            ${Array(props.cols)
              .fill(0)
              .map(
                (_, colIdx) =>
                  `<td style="border: ${
                    props.border
                  }; padding: 8px; background-color: ${props.cellBg}; color: ${
                    props.cellText
                  };">Cell ${rowIdx + 1},${colIdx + 1}</td>`
              )
              .join("")}
          </tr>
        `
          )
          .join("")}
      </tbody>
    </table>
  `;
        return `<tr><td style="padding: 20px;">${tableHTML}</td></tr>`;
      }
      if (type === "spacer") {
        return `<tr><td style="height: ${props.height}px;"></td></tr>`;
      }
      return "";
    };

    const html = `<!DOCTYPE html>
<html><head><meta charset="UTF-8"><title>${templateName}</title></head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif;">
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f4f4f4;">
<tr><td style="padding: 20px 0;">
<table role="presentation" width="600" cellspacing="0" cellpadding="0" style="margin: 0 auto; background-color: #ffffff;">
${components.map(generateHTML).join("\n")}
</table></td></tr></table></body></html>`;

    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${templateName.replace(/\s+/g, "-").toLowerCase()}.html`;
    a.click();
  };

  const selectedComponent = components.find((c) => c.id === selectedId);

  return (
    <div className="flex h-screen bg-gray-50">
      <LeftPanel
        handleDragStart={handleDragStart}
        addRowLayout={addRowLayout}
      />

      <CenterCanvas
        components={components}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
        draggedItem={draggedItem}
        dragOverIndex={dragOverIndex}
        handleDragStart={handleDragStart}
        handleDragOver={handleDragOver}
        templateName={templateName}
        handleDragLeave={handleDragLeave}
        handleDrop={handleDrop}
        undo={undo}
        redo={redo}
        exportHTML={exportHTML}
        historyIndex={historyIndex}
        viewMode={viewMode}
        handleCanvasDragOver={handleCanvasDragOver}
        handleCanvasDrop={handleCanvasDrop}
        duplicateComponent={duplicateComponent}
        deleteComponent={deleteComponent}
        updateComponentProp={updateComponentProp}
      />

      <RightPanel
        selectedComponent={selectedComponent}
        selectedId={selectedId}
        updateComponentProp={updateComponentProp}
      />
    </div>
  );
};

export default EmailTemplateBuilder;
