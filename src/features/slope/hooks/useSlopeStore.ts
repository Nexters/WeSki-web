import { create } from 'zustand';

type SlopeId = string | null;
type CameraId = string | null | undefined;

interface SlopeState {
  selectedSlope: SlopeId;
  selectedCamera: { id: CameraId; isOpen: boolean };
  setSelectedSlope: (slopeId: SlopeId) => void;
  setSelectedCamera: (cameraId: CameraId) => void;
  setOpenCamera: () => void;
  setCloseCamera: () => void;
}

const useSlopeStore = create<SlopeState>((set) => ({
  selectedSlope: null,
  selectedCamera: {
    id: null,
    isOpen: false,
  },
  setSelectedSlope: (slopeId: SlopeId) => set(() => ({ selectedSlope: slopeId })),
  setSelectedCamera: (cameraId: CameraId) =>
    set((state) => ({ selectedCamera: { ...state.selectedCamera, id: cameraId } })),
  setOpenCamera: () =>
    set((state) => ({ selectedCamera: { ...state.selectedCamera, isOpen: true } })),
  setCloseCamera: () =>
    set((state) => ({ selectedCamera: { ...state.selectedCamera, isOpen: false } })),
}));

export default useSlopeStore;
