"use client";

import { useState } from "react";
import LeftPanel from "./LeftPanel";
import TopBar from "./TopBar";
import CenterCanvas from "./CenterCanvas";
import RightPanel from "./RightPanel";
import { getDefaultProps } from "../data";

const EmailTemplateBuilder = () => {
  const [components, setComponents] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [templateName, setTemplateName] = useState("My Email Template");
  const [draggedItem, setDraggedItem] = useState(null);
  const [dragOverIndex, setDragOverIndex] = useState(null);
  const [viewMode, setViewMode] = useState("desktop");
  const [history, setHistory] = useState([[]]);
  const [historyIndex, setHistoryIndex] = useState(0);

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragOverIndex(null);
  };

  const handleDrop = (e, dropIndex) => {
    e.preventDefault();
    e.stopPropagation();

    if (!draggedItem) return;

    const newComponents = [...components];

    if (draggedItem.source === "library") {
      let newComponent;
      if (draggedItem.item.type === "row") {
        newComponent = {
          id: Date.now(),
          type: "row",
          props: {
            ...getDefaultProps("row"),
            cols: draggedItem.item.cols,
            columns: Array(draggedItem.item.cols).fill([]),
          },
        };
      } else {
        newComponent = {
          id: Date.now(),
          type: draggedItem.item.type,
          props: getDefaultProps(draggedItem.item.type),
        };
      }
      newComponents.splice(dropIndex, 0, newComponent);
      setComponents(newComponents);
      saveToHistory(newComponents);
      setSelectedId(newComponent.id);
    } else if (draggedItem.source === "canvas") {
      const dragIndex = draggedItem.index;

      if (dragIndex !== dropIndex) {
        const [movedComponent] = newComponents.splice(dragIndex, 1);

        const adjustedDropIndex =
          dragIndex < dropIndex ? dropIndex - 1 : dropIndex;

        newComponents.splice(adjustedDropIndex, 0, movedComponent);

        setComponents(newComponents);
        saveToHistory(newComponents);
      }
    }

    setDraggedItem(null);
    setDragOverIndex(null);
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
    setDragOverIndex(null);
  };

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

  const handleCanvasDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!draggedItem || draggedItem.source !== "library") return;

    const newComponent = {
      id: Date.now(),
      type: draggedItem.item.type,
      props: getDefaultProps(draggedItem.item.type),
    };

    const newComponents = [...components, newComponent];
    setComponents(newComponents);
    saveToHistory(newComponents);
    setSelectedId(newComponent.id);
    setDraggedItem(null);
    setDragOverIndex(null);
  };

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
        props: { ...component.props },
      };
      const index = components.findIndex((c) => c.id === id);
      const newComponents = [...components];
      newComponents.splice(index + 1, 0, newComponent);
      setComponents(newComponents);
      saveToHistory(newComponents);
      setSelectedId(newComponent.id);
    }
  };

  const updateComponentProp = (id, prop, value) => {
    const newComponents = components.map((c) =>
      c.id === id ? { ...c, props: { ...c.props, [prop]: value } } : c
    );
    setComponents(newComponents);
    saveToHistory(newComponents);
  };
  const handleDragStart = (e, item, index) => {
    const source = index !== undefined ? "canvas" : "library";
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
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar
          templateName={templateName}
          setTemplateName={setTemplateName}
          exportHTML={exportHTML}
          historyIndex={historyIndex}
          history={history}
          setViewMode={setViewMode}
          undo={undo}
          redo={redo}
          viewMode={viewMode}
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
          history={history}
          historyIndex={historyIndex}
          viewMode={viewMode}
          handleCanvasDragOver={handleCanvasDragOver}
          handleCanvasDrop={handleCanvasDrop}
          duplicateComponent={duplicateComponent}
          deleteComponent={deleteComponent}
          updateComponentProp={updateComponentProp}
          handleDragEnd={handleDragEnd}
        />
      </div>

      <RightPanel
        selectedComponent={selectedComponent}
        selectedId={selectedId}
        updateComponentProp={updateComponentProp}
      />
    </div>
  );
};

export default EmailTemplateBuilder;
