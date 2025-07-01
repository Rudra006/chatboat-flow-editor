import { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';

export const SettingsPanel = ({ node, onSave, setSelectedNode }) => {
  const [label, setLabel] = useState(node.data.label);

  const handleSave = () => {
    onSave(node.id, label);
  };

  const handleClose = () => {
    setSelectedNode(null);
  };

  return (
    <div className="relative p-4 space-y-4 bg-white border border-gray-300 rounded-lg shadow-lg">
      <button
        onClick={handleClose}
        className="absolute top-2 -left-7 text-gray-600 hover:text-gray-800"
      >
        <FaArrowLeft className="text-sm" />
      </button>
      <textarea
        value={label}
        onChange={(e) => setLabel(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-lg"
        placeholder="Edit node content"
      />
      <button
        onClick={handleSave}
        className="w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Save Changes
      </button>
    </div>
  );
};
