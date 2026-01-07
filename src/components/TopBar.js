import { Monitor, Redo, Smartphone, Undo } from "lucide-react";

const TopBar = ({
  templateName,
  setTemplateName,
  exportHTML,
  historyIndex,
  history,
  setViewMode,
  undo,
  redo,
  viewMode,
}) => {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
      <input
        type="text"
        value={templateName}
        onChange={(e) => setTemplateName(e.target.value)}
        className="text-lg font-semibold border-none outline-none text-gray-800"
      />
      <div className="flex items-center gap-2">
        <button
          onClick={undo}
          disabled={historyIndex === 0}
          className="p-2 hover:bg-gray-100 rounded disabled:opacity-30"
        >
          <Undo size={18} />
        </button>
        <button
          onClick={redo}
          disabled={historyIndex === history.length - 1}
          className="p-2 hover:bg-gray-100 rounded disabled:opacity-30"
        >
          <Redo size={18} />
        </button>
        <div className="w-px h-6 bg-gray-300 mx-2" />
        <button
          onClick={() => setViewMode("desktop")}
          className={`p-2 rounded ${
            viewMode === "desktop" ? "bg-purple-100" : "hover:bg-gray-100"
          }`}
        >
          <Monitor size={18} />
        </button>
        <button
          onClick={() => setViewMode("mobile")}
          className={`p-2 rounded ${
            viewMode === "mobile" ? "bg-purple-100" : "hover:bg-gray-100"
          }`}
        >
          <Smartphone size={18} />
        </button>
        <button
          onClick={exportHTML}
          className="ml-4 px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium"
        >
          Export HTML
        </button>
      </div>
    </div>
  );
};

export default TopBar;
