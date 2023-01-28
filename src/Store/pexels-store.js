import { create } from "zustand";

const useBackgroundImage = create((set) => ({
  imageUrl:
    "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  changeUrl: (url) => set(() => ({ imageUrl: url })),
}));

export default useBackgroundImage;
