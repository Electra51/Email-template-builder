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

  // Default properties
  const getDefaultProps = (type) => {
    const defaults = {
      text: {
        content: "Enter your text here",
        fontSize: "16",
        color: "#000000",
        paddingTop: "10",
        paddingBottom: "10",
        alignment: "left",
      },
      image: {
        url: "https://via.placeholder.com/600x200",

        linkUrl: "",
        width: "500",
        height: "200",
      },
      button: {
        text: "Click Me",
        linkUrl: "#",
        bgColor: "#007bff",
        textColor: "#ffffff",
      },
    };
    return defaults[type] || {};
  };

  // Delete component
  const deleteComponent = (id) => {
    setComponents(components.filter((c) => c.id !== id));
    if (selectedId === id) setSelectedId(null);
  };

  // Duplicate component
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
    }
  };

  // Update component properties
  const updateComponentProp = (id, prop, value) => {
    setComponents(
      components.map((c) =>
        c.id === id ? { ...c, props: { ...c.props, [prop]: value } } : c
      )
    );
  };

  // Drag and drop handlers
  const handleDragStart = (e, item, index) => {
    const source = index !== undefined ? "canvas" : "library";
    const dragData = { item, index, source };
    setDraggedItem(dragData);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", JSON.stringify(dragData));
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    setDragOverIndex(index);
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
      const newComponent = {
        id: Date.now(),
        type: dragData.item.type,
        props: getDefaultProps(dragData.item.type),
      };
      const newComponents = [...components];
      newComponents.splice(dropIndex, 0, newComponent);
      setComponents(newComponents);
      setSelectedId(newComponent.id);
    } else {
      const newComponents = [...components];
      const [removed] = newComponents.splice(dragData.index, 1);
      newComponents.splice(dropIndex, 0, removed);
      setComponents(newComponents);
    }

    setDraggedItem(null);
    setDragOverIndex(null);
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

    const newComponent = {
      id: Date.now(),
      type: dragData.item.type,
      props: getDefaultProps(dragData.item.type),
    };
    setComponents([...components, newComponent]);
    setSelectedId(newComponent.id);
    setDraggedItem(null);
  };

  // Export HTML
  const exportHTML = () => {
    const generateComponentHTML = (component) => {
      const { type, props } = component;

      if (type === "text") {
        return `<tr>
          <td style="font-size: ${props.fontSize}px; color: ${props.color}; padding: ${props.paddingTop}px 20px ${props.paddingBottom}px 20px;">
            ${props.content}
          </td>
        </tr>`;
      }

      if (type === "image") {
        const img = `<img src="${props.url}" width="${props.width}" height="${props.height}" style="display: block; width: 100%; max-width: ${props.width}px; height: auto;" alt="Email Image">`;
        return `<tr>
          <td style="padding: 10px 0;">
            ${props.linkUrl ? `<a href="${props.linkUrl}">${img}</a>` : img}
          </td>
        </tr>`;
      }

      if (type === "button") {
        return `<tr>
          <td style="padding: 20px; text-align: center;">
            <a href="${props.linkUrl}" style="display: inline-block; padding: 12px 30px; background-color: ${props.bgColor}; color: ${props.textColor}; text-decoration: none; border-radius: 5px; font-size: 16px;">
              ${props.text}
            </a>
          </td>
        </tr>`;
      }

      return "";
    };

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${templateName}</title>
  <style>
    @media only screen and (max-width: 320px) {
      .email-container {
        width: 100% !important;
      }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f4f4f4;">
    <tr>
      <td style="padding: 20px 0;">
        <table class="email-container" role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="margin: 0 auto; background-color: #ffffff;">
          ${components.map((c) => generateComponentHTML(c)).join("\n")}
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${templateName.replace(/\s+/g, "-").toLowerCase()}.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const selectedComponent = components.find((c) => c.id === selectedId);

  return (
    <div className="flex h-screen bg-gray-100">
      <LeftPanel handleDragStart={handleDragStart} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar
          templateName={templateName}
          setTemplateName={setTemplateName}
          exportHTML={exportHTML}
        />
        <CenterCanvas
          components={components}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
          draggedItem={draggedItem}
          dragOverIndex={dragOverIndex}
          handleDragStart={handleDragStart}
          handleDragOver={handleDragOver}
          handleDragLeave={handleDragLeave}
          handleDrop={handleDrop}
          handleCanvasDragOver={handleCanvasDragOver}
          handleCanvasDrop={handleCanvasDrop}
          duplicateComponent={duplicateComponent}
          deleteComponent={deleteComponent}
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
