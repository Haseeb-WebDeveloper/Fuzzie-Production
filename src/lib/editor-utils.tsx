import { EditorCanvasCardType } from "./types"

// Commit: Define onDragStart function with event and nodeType parameters
export const onDragStart = (
  event: any,
  nodeType: EditorCanvasCardType['type']
) => {
  // Commit: Set data transfer with nodeType for react flow
  event.dataTransfer.setData('application/reactflow', nodeType)
  // Commit: Set effect allowed to 'move' for drag operation
  event.dataTransfer.effectAllowed = 'move'
}