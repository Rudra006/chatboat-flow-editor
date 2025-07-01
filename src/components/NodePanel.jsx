import { Handle, Position } from '@xyflow/react';
import { FaWhatsapp, FaRegCommentDots } from 'react-icons/fa';

export const NodePanel = () => {
  const onDragStart = (event) => {
    event.dataTransfer.setData('application/reactflow', 'custom');
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div className="flex flex-col items-center   m-11 h-24 justify-center p-4 space-y-4">
      <div
        className="relative w-60 p-6 bg-gradient-to-r from-green-200 via-green-300 to-green-400 rounded-lg shadow-lg cursor-pointer"
        draggable
        onDragStart={onDragStart}
      >
        <div className="flex items-center justify-around p-2 bg-green-500 text-white rounded-t-lg">
          <FaRegCommentDots className="text-xl" />
          <span className="text-sm font-semibold">Send Message</span>
          <FaWhatsapp className="text-xl" />
        </div>
        <div className="p-2 text-sm text-gray-800 text-center"> Message Node</div>

        <Handle
          type="source"
          position={Position.Left}
          id="source-1"
          className="absolute top-1/2 left-0 transform -translate-y-1/2 w-3 h-3 bg-gray-700 rounded-full"
        />
        <Handle
          type="target"
          position={Position.Right}
          id="target-1"
          className="absolute top-1/2 right-0 transform -translate-y-1/2 w-3 h-3 bg-gray-700 rounded-full"
        />
      </div>
    </div>
  );
};
