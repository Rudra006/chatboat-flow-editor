// import { FlowBuilder } from "./components/FlowBuilder";
// import FlowChart from "./assets/FlowChart";
// import TaskTodo from "./Demo/TaskTodo";
import { ReactFlowProvider } from '@xyflow/react';
import { FlowEditor } from './components/FlowEditor';
import { FaSave } from 'react-icons/fa';
import { useState } from 'react';

export const App = () =>{ 
  const [edgesApp, setEdgesApp] = useState([]);
   const handleSave = () => {
    console.log("edges are",edgesApp);
    // const emptyTargetHandles = edgesApp.filter(
    //   (edge) => edge.targetHandle === null || edge.targetHandle === undefined
    // );

    // if (emptyTargetHandles.length > 1) {
    //   alert('Warning: More than one empty target handle detected!');
    // } else {
    //   // Proceed with saving logic
    //   alert('Flow saved:', );
    // }
  };
  
  
  return(
  <ReactFlowProvider>
    <div className="min-h-screen min-w-screen bg-gray-50">
    <header className="p-4 bg-gradient-to-r from-green-500 via-green-900 to-green-400 text-white text-center">
        <h1 className="text-2xl font-semibold">Chatbot Flow Editor</h1>
        <button
          onClick={handleSave}
          className="absolute top-4 right-4 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
        >
          <FaSave />
        </button>
      </header>
      <main className="p-4">
        <FlowEditor setEdgesApp={setEdgesApp} />
      </main>
    </div>
  </ReactFlowProvider>
);
}
export default App;
// src/App.js
// src/App.jsx
// src/App.jsx
// src/App.tsx
// import { useState } from 'react';
// import FlowEditor from './components/FlowEditor';
// import NodePanel from './components/NodePanel';
// import SettingsPanel from './components/SettingsPanel';
// import SaveButton from './components/SaveButton';

// const App = () => {
//   const [nodes, setNodes] = useState([]);
//   const [edges, setEdges] = useState([]);
//   const [selectedNode, setSelectedNode] = useState(null);

//   const addNode = (type) => {
//     const newNode = {
//       id: `${nodes.length + 1}`,
//       position: { x: 100, y: 100 },
//       data: { label: `${type} Node` },
//     };
//     setNodes([...nodes, newNode]);
//   };

//   const updateNode = (id, label) => {
//     const updatedNodes = nodes.map((node) =>
//       node.id === id ? { ...node, data: { label } } : node
//     );
//     setNodes(updatedNodes);
//   };

//   const saveFlow = () => {
//     // Implement save logic
//   };

//   return (
//     <div className="flex">
//       <NodePanel onAddNode={addNode} />
//       <div className="flex-1">
//         <FlowEditor nodes={nodes} edges={edges} />
//         {selectedNode && (
//           <SettingsPanel
//             selectedNode={selectedNode}
//             onUpdateNode={updateNode}
//           />
//         )}
//         <SaveButton onSave={saveFlow} />
//       </div>
//     </div>
//   );
// };

// export default App;




