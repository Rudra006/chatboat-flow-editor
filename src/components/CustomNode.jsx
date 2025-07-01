
import { Handle, Position } from '@xyflow/react';
import { FaWhatsapp, FaRegCommentDots } from 'react-icons/fa';

export const CustomNode = ({ data }) => (
  <div className="relative p-10 w-80 h-24 bg-gradient-to-r  from-green-200 via-green-300 to-green-400 rounded-lg shadow-lg ">
    <div className="flex items-center justify-around p-10 bg-green-500 text-white rounded-full">
      <FaRegCommentDots className="text-xl p-5" />
      <span className="text-xl font-semibold">Send Message</span>
      <FaWhatsapp className="text-xl" />
    </div>
    <div className="text-center text-2xl text-gray-800">{data?.label}</div>


    <Handle
      type="source"
      position={Position.Left}
      id="source"
      className="absolute top-1/2 left-0 transform -translate-y-1/2 w-[200px] h-[200px] bg-gray-700 rounded-full"
      style={{width:"10px", height: "10px", borderRadius:"50%"}}
    />
    <Handle
      type="target"
      position={Position.Right}
      id="target"
      className="absolute top-1/2 right-0 transform -translate-y-1/2 w-[200px] h-[200px] bg-gray-700 rounded-full"
      style={{width:"10px", height: "10px", borderRadius:"50%"}}
    />
  </div>
);
