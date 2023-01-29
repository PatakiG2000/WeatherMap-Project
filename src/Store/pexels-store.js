import { create } from "zustand";

const useBackgroundImage = create((set) => ({
  imageUrl: null,
  changeUrl: (url) => set(() => ({ imageUrl: url })),
}));

export default useBackgroundImage;
