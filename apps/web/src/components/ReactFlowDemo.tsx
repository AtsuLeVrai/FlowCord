"use client";

import {
	addEdge,
	Background,
	type Connection,
	ConnectionLineType,
	Controls,
	type Edge,
	type EdgeMarker,
	Handle,
	MarkerType,
	MiniMap,
	type Node,
	type NodeProps,
	type NodeTypes,
	Panel,
	Position,
	ReactFlow,
	type ReactFlowInstance,
	useEdgesState,
	useNodesState,
} from "@xyflow/react";
import type React from "react";
import {useRef, useState} from "react";

// Define type interfaces for node data
interface CommandNodeData {
	label: string;
	name: string;
	description: string;
	options?: Array<{
		name: string;
		type: string;
		required: boolean;
	}>;
}

interface MessageNodeData {
	label: string;
	content: string;
}

interface ResponseNodeData {
	label: string;
	visibility: "public" | "private" | "ephemeral";
	ephemeral: boolean;
}

interface ConditionNodeData {
	label: string;
	condition: string;
}

// Type for all possible node data
type NodeData =
	| CommandNodeData
	| MessageNodeData
	| ResponseNodeData
	| ConditionNodeData;

// Type guard functions to ensure type safety
function isCommandNodeData(data: unknown): data is CommandNodeData {
	const d = data as Partial<CommandNodeData>;
	return Boolean(d && d.label && d.name && d.description !== undefined);
}

function isMessageNodeData(data: unknown): data is MessageNodeData {
	const d = data as Partial<MessageNodeData>;
	return Boolean(d && d.label && d.content !== undefined);
}

function isResponseNodeData(data: unknown): data is ResponseNodeData {
	const d = data as Partial<ResponseNodeData>;
	return Boolean(
		d && d.label && d.visibility !== undefined && d.ephemeral !== undefined,
	);
}

function isConditionNodeData(data: unknown): data is ConditionNodeData {
	const d = data as Partial<ConditionNodeData>;
	return Boolean(d && d.label && d.condition !== undefined);
}

// Custom node components with proper typing
function CommandNode({ data }: NodeProps<CommandNodeData>): JSX.Element | null {
	if (!isCommandNodeData(data)) {
		console.error("Invalid data provided to CommandNode");
		return null;
	}

	return (
		<div className="rounded-md bg-blue-800/30 border border-blue-500/50 shadow-lg p-3 min-w-[200px]">
			<div className="bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded-sm mb-2">
				{data.label}
			</div>
			<div className="font-bold text-white mb-1">{data.name}</div>
			<div className="text-blue-200 text-xs mb-3">{data.description}</div>

			{data.options && data.options.length > 0 && (
				<div className="border-t border-blue-700/50 pt-2 mt-2">
					<div className="text-xs text-blue-300 font-medium mb-1">Options:</div>
					{data.options.map((option, index) => (
						<div key={index} className="flex justify-between text-xs mb-1">
							<span className="text-blue-200">{option.name}</span>
							<span className="text-blue-400">
								{option.type}
								{option.required && <span className="text-red-400">*</span>}
							</span>
						</div>
					))}
				</div>
			)}

			<Handle
				type="source"
				position={Position.Bottom}
				className="w-3 h-3 bg-blue-500 border-2 border-blue-800"
			/>
		</div>
	);
}

function MessageNode({ data }: NodeProps<MessageNodeData>): JSX.Element | null {
	if (!isMessageNodeData(data)) {
		console.error("Invalid data provided to MessageNode");
		return null;
	}

	return (
		<div className="rounded-md bg-purple-800/30 border border-purple-500/50 shadow-lg p-3 min-w-[200px]">
			<div className="bg-purple-600 text-white text-xs font-medium px-2 py-1 rounded-sm mb-2">
				{data.label}
			</div>
			<div className="text-purple-200 text-sm">
				<div className="bg-purple-900/50 p-2 rounded border border-purple-700 text-xs font-mono">
					{data.content}
				</div>
			</div>

			<Handle
				type="target"
				position={Position.Top}
				className="w-3 h-3 bg-purple-500 border-2 border-purple-800"
			/>
			<Handle
				type="source"
				position={Position.Bottom}
				className="w-3 h-3 bg-purple-500 border-2 border-purple-800"
			/>
		</div>
	);
}

function ResponseNode({
	data,
}: NodeProps<ResponseNodeData>): JSX.Element | null {
	if (!isResponseNodeData(data)) {
		console.error("Invalid data provided to ResponseNode");
		return null;
	}

	return (
		<div className="rounded-md bg-green-800/30 border border-green-500/50 shadow-lg p-3 min-w-[200px]">
			<div className="bg-green-600 text-white text-xs font-medium px-2 py-1 rounded-sm mb-2">
				{data.label}
			</div>

			<div className="flex justify-between text-xs mb-2">
				<span className="text-green-300">Visibility:</span>
				<span className="text-green-200 font-medium">{data.visibility}</span>
			</div>

			<div className="flex justify-between text-xs">
				<span className="text-green-300">Ephemeral:</span>
				<div
					className={`h-4 w-8 rounded-full flex items-center ${data.ephemeral ? "bg-green-600 justify-end" : "bg-gray-700 justify-start"}`}
				>
					<div className="h-3 w-3 bg-white rounded-full mx-0.5"></div>
				</div>
			</div>

			<Handle
				type="target"
				position={Position.Top}
				className="w-3 h-3 bg-green-500 border-2 border-green-800"
			/>
		</div>
	);
}

function ConditionNode({
	data,
}: NodeProps<ConditionNodeData>): JSX.Element | null {
	if (!isConditionNodeData(data)) {
		console.error("Invalid data provided to ConditionNode");
		return null;
	}

	return (
		<div className="rounded-md bg-amber-800/30 border border-amber-500/50 shadow-lg p-3 min-w-[200px]">
			<div className="bg-amber-600 text-white text-xs font-medium px-2 py-1 rounded-sm mb-2">
				{data.label}
			</div>

			<div className="bg-amber-900/50 p-2 rounded border border-amber-700 text-xs font-mono text-amber-200">
				{data.condition}
			</div>

			<div className="flex justify-between mt-2 text-xs">
				<div className="text-green-400 font-medium">True</div>
				<div className="text-red-400 font-medium">False</div>
			</div>

			<Handle
				type="target"
				position={Position.Top}
				className="w-3 h-3 bg-amber-500 border-2 border-amber-800"
			/>
			<Handle
				type="source"
				position={Position.Bottom}
				id="true"
				className="w-3 h-3 bg-green-500 border-2 border-amber-800 -ml-3"
			/>
			<Handle
				type="source"
				position={Position.Bottom}
				id="false"
				className="w-3 h-3 bg-red-500 border-2 border-amber-800 ml-3"
			/>
		</div>
	);
}

// Register custom node types
const nodeTypes: NodeTypes = {
	commandNode: CommandNode,
	messageNode: MessageNode,
	responseNode: ResponseNode,
	conditionNode: ConditionNode,
};

// Create edge marker type
function createMarker(color: string): EdgeMarker {
	return {
		type: MarkerType.ArrowClosed,
		color: color,
	};
}

// Initial nodes with proper typing
const initialNodes: Node<NodeData>[] = [
	{
		id: "command-1",
		type: "commandNode",
		position: { x: 250, y: 100 },
		data: {
			label: "Command",
			name: "/greet",
			description: "Greet a user with a customized message",
			options: [
				{ name: "user", type: "User", required: true },
				{ name: "tone", type: "String", required: false },
			],
		},
	},
	{
		id: "condition-1",
		type: "conditionNode",
		position: { x: 250, y: 250 },
		data: {
			label: "Condition",
			condition: 'options.tone === "formal"',
		},
	},
	{
		id: "message-1",
		type: "messageNode",
		position: { x: 100, y: 400 },
		data: {
			label: "Message",
			content: "Greetings, {options.user}. How may I assist you today?",
		},
	},
	{
		id: "message-2",
		type: "messageNode",
		position: { x: 400, y: 400 },
		data: {
			label: "Message",
			content: "Hey {options.user}! What's up?",
		},
	},
	{
		id: "response-1",
		type: "responseNode",
		position: { x: 250, y: 550 },
		data: {
			label: "Response",
			visibility: "public",
			ephemeral: true,
		},
	},
];

// Initial edges with proper typing
const initialEdges: Edge[] = [
	{
		id: "edge-command-condition",
		source: "command-1",
		target: "condition-1",
		animated: true,
		style: { stroke: "#3b82f6", strokeWidth: 2 },
		markerEnd: createMarker("#3b82f6"),
		type: "smoothstep",
	},
	{
		id: "edge-condition-formal",
		source: "condition-1",
		target: "message-1",
		sourceHandle: "true",
		animated: true,
		label: "True",
		labelBgStyle: { fill: "#0e1622" },
		labelStyle: { fill: "#22c55e", fontWeight: 700 },
		style: { stroke: "#22c55e", strokeWidth: 2 },
		markerEnd: createMarker("#22c55e"),
		type: "smoothstep",
	},
	{
		id: "edge-condition-casual",
		source: "condition-1",
		target: "message-2",
		sourceHandle: "false",
		animated: true,
		label: "False",
		labelBgStyle: { fill: "#0e1622" },
		labelStyle: { fill: "#ef4444", fontWeight: 700 },
		style: { stroke: "#ef4444", strokeWidth: 2 },
		markerEnd: createMarker("#ef4444"),
		type: "smoothstep",
	},
	{
		id: "edge-message1-response",
		source: "message-1",
		target: "response-1",
		animated: true,
		style: { stroke: "#8b5cf6", strokeWidth: 2 },
		markerEnd: createMarker("#8b5cf6"),
		type: "smoothstep",
	},
	{
		id: "edge-message2-response",
		source: "message-2",
		target: "response-1",
		animated: true,
		style: { stroke: "#8b5cf6", strokeWidth: 2 },
		markerEnd: createMarker("#8b5cf6"),
		type: "smoothstep",
	},
];

/**
 * Main ReactFlow Demo Component
 * Displays an interactive blueprint editor with custom nodes and connections
 */
function ReactFlowDemo(): JSX.Element {
	const reactFlowWrapper = useRef<HTMLDivElement>(null);
	const [nodes, setNodes, onNodesChange] =
		useNodesState<NodeData>(initialNodes);
	const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
	const [reactFlowInstance, setReactFlowInstance] =
		useState<ReactFlowInstance | null>(null);

	/**
	 * Handle connections between nodes
	 */
	function onConnect(params: Connection): void {
		try {
			// Determine color based on source node type
			let color = "#3b82f6"; // Default blue
			const sourceNode = nodes.find((node) => node.id === params.source);

			if (sourceNode) {
				if (sourceNode.type === "messageNode") {
					color = "#8b5cf6"; // Purple for message nodes
				} else if (sourceNode.type === "conditionNode") {
					// Green for true, red for false
					color = params.sourceHandle === "true" ? "#22c55e" : "#ef4444";
				}
			}

			const newEdge: Edge = {
				...params,
				id: `edge-${params.source}-${params.target}`,
				animated: true,
				style: { stroke: color, strokeWidth: 2 },
				markerEnd: createMarker(color),
				type: "smoothstep",
			};

			setEdges((prev) => addEdge(newEdge, prev));
		} catch (error) {
			console.error("Error connecting nodes:", error);
		}
	}

	/**
	 * Handle dropping new nodes onto the canvas
	 */
	function onDragOver(event: React.DragEvent<HTMLDivElement>): void {
		event.preventDefault();
		event.dataTransfer.dropEffect = "move";
	}

	// Default edge options
	const defaultEdgeOptions = {
		animated: true,
		type: "smoothstep" as const,
		style: { stroke: "#3b82f6", strokeWidth: 2 },
		markerEnd: createMarker("#3b82f6"),
	};

	return (
		<div className="w-full h-full" ref={reactFlowWrapper}>
			<ReactFlow
				nodes={nodes}
				edges={edges}
				onNodesChange={onNodesChange}
				onEdgesChange={onEdgesChange}
				onConnect={onConnect}
				onDragOver={onDragOver}
				nodeTypes={nodeTypes}
				defaultEdgeOptions={defaultEdgeOptions}
				connectionLineType={ConnectionLineType.SmoothStep}
				connectionLineStyle={{ stroke: "#3b82f6", strokeWidth: 2 }}
				onInit={setReactFlowInstance}
				fitView
				attributionPosition="bottom-left"
				minZoom={0.5}
				maxZoom={1.5}
				snapToGrid={true}
				snapGrid={[15, 15]}
			>
				<Background
					variant="dots"
					gap={20}
					size={1}
					color="rgba(255, 255, 255, 0.05)"
				/>
				<Controls
					position="bottom-right"
					style={{
						background: "rgba(10, 16, 24, 0.8)",
						borderRadius: "8px",
						border: "1px solid rgba(59, 130, 246, 0.3)",
					}}
				/>
				<MiniMap
					style={{
						height: 120,
						width: 200,
						background: "rgba(10, 16, 24, 0.8)",
						borderRadius: "8px",
						border: "1px solid rgba(59, 130, 246, 0.3)",
					}}
					nodeColor={(node) => {
						switch (node.type) {
							case "commandNode":
								return "#3b82f6";
							case "messageNode":
								return "#8b5cf6";
							case "responseNode":
								return "#22c55e";
							case "conditionNode":
								return "#f59e0b";
							default:
								return "#3b82f6";
						}
					}}
					maskColor="rgba(10, 16, 24, 0.7)"
				/>
				<Panel
					position="top-right"
					className="bg-gray-800/60 border border-gray-700 rounded p-2 text-xs text-blue-300"
				>
					Interactive Demo - Drag to pan, Scroll to zoom
				</Panel>
			</ReactFlow>
		</div>
	);
}

export default ReactFlowDemo;
