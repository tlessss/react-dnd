import React, { useState } from 'react'
import Container from './Container'
import CustomDragLayer from './CustomDragLayer'

export interface DragAroundCustomDragLayerState {
  snapToGridAfterDrop: boolean
  snapToGridWhileDragging: boolean
}

const DragAroundCustomDragLayer: React.FC = () => {
  const [snapToGridAfterDrop, setSnapToGridAfterDrop] = useState(false)
  const [snapToGridWhileDragging, setSnapToGridWhileDragging] = useState(false)

  const handleSnapToGridAfterDropChange = React.useCallback(() => {
    setSnapToGridAfterDrop(!snapToGridAfterDrop)
  }, [snapToGridAfterDrop])

  const handleSnapToGridWhileDraggingChange = React.useCallback(() => {
    setSnapToGridWhileDragging(!snapToGridWhileDragging)
  }, [snapToGridWhileDragging])

  return (
    <div>
      <Container snapToGrid={snapToGridAfterDrop} />
      <CustomDragLayer snapToGrid={snapToGridWhileDragging} />
      <p>
        <label htmlFor="snapToGridWhileDragging">
          <input
            id="snapToGridWhileDragging"
            type="checkbox"
            checked={snapToGridWhileDragging}
            onChange={handleSnapToGridWhileDraggingChange}
          />
          <small>Snap to grid while dragging</small>
        </label>
        <br />
        <label htmlFor="snapToGridAfterDrop">
          <input
            id="snapToGridAfterDrop"
            type="checkbox"
            checked={snapToGridAfterDrop}
            onChange={handleSnapToGridAfterDropChange}
          />
          <small>Snap to grid after drop</small>
        </label>
      </p>
    </div>
  )
}

export default DragAroundCustomDragLayer