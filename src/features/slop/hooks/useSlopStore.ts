import { create } from 'zustand';

type SlopId = string | null;
type CameraId = string | null | undefined;

interface SlopState {
  selectedSlop: SlopId;
  selectedCamera: { id: CameraId; isOpen: boolean };
  setSelectedSlop: (slopId: SlopId) => void;
  setSelectedCamera: (cameraId: CameraId) => void;
  setOpenCamera: () => void;
  setCloseCamera: () => void;
}

const useSlopStore = create<SlopState>((set) => ({
  selectedSlop: null,
  selectedCamera: {
    id: null,
    isOpen: false,
  },
  setSelectedSlop: (slopId: SlopId) => set(() => ({ selectedSlop: slopId })),
  setSelectedCamera: (cameraId: CameraId) =>
    set((state) => ({ selectedCamera: { ...state.selectedCamera, id: cameraId } })),
  setOpenCamera: () =>
    set((state) => ({ selectedCamera: { ...state.selectedCamera, isOpen: true } })),
  setCloseCamera: () =>
    set((state) => ({ selectedCamera: { ...state.selectedCamera, isOpen: false } })),
}));

export default useSlopStore;
