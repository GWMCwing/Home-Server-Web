import { PanelResizeHandle } from 'react-resizable-panels';

export default function WrappedPanelResizeHandle({ width }: { width: number }) {
  return (
    <div style={{ position: 'relative' }}>
      <PanelResizeHandle style={{ width: `${width}px`, position: 'absolute', height: '100%', left: `-${width / 2}px` }} />
    </div>
  );
}
