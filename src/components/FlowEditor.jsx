// src/components/FlowEditor.jsx
import { useState, useRef } from 'react';
import { ReactFlow, ReactFlowProvider, addEdge, useNodesState, useEdgesState, Handle, Position } from '@xyflow/react';
import { NodePanel } from './NodePanel';
import { SettingsPanel } from './SettingsPanel';
import { CustomNode } from './CustomNode';

const nodeTypes = {
    selectorNode: CustomNode,
  };

export const FlowEditor = ({setEdgesApp}) => {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [selectedNode, setSelectedNode] = useState(null);

  const onConnect = (params) => {setEdges((eds) => addEdge(params, eds));
    setEdgesApp((eds) => setEdgesApp(params, eds));
  }
  

  const handleSave = (id, label) => {
    setNodes((nds) =>
      nds.map((node) =>
        node.id === id ? { ...node, data: { label } } : node
      )
    );
    setSelectedNode(null);
  };

  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };

  const onDrop = (event) => {
    event.preventDefault();

    const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
    const type = event.dataTransfer.getData('application/reactflow');

    if (!type || !reactFlowWrapper.current) return;

    const position = {
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    };

    const newNode = {
      id: `dndnode_${nodes.length + 1}`,
      type: 'selectorNode',
      position,
      data: { label: `${type} node` },
    };

    setNodes((nds) => nds.concat(newNode));
  };

  return (
    <div className="flex h-[96vh]">
      <div
        className="flex-1 p-4 border-r border-gray-300 bg-gray-300" 
        ref={reactFlowWrapper}
        onDrop={onDrop}
        onDragOver={onDragOver}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onNodeClick={(event, node) => setSelectedNode(node)}
          nodeTypes={nodeTypes}
          className="h-full "
        />
      </div>
      <div className="w-80 p-4">
        {selectedNode ? (
          <SettingsPanel node={selectedNode} onSave={handleSave} setSelectedNode={setSelectedNode} />
        ) : (
          <NodePanel />
        )}
      </div>
    </div>
  );
};
