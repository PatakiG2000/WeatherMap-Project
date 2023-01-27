import { create } from "zustand";

const useMapData = create((set) => ({
  latLng: {
    lat: 0,
    lng: 0,
  },
  changeLatLng: (position) => set(() => ({ latLng: position })),
}));

export default useMapData;
