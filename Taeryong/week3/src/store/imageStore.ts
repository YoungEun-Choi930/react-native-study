import {create} from 'zustand';

interface ImageDataType {
  path: string;
  width: number;
  height: number;
  creationDate: Date;
}

interface ImageStore {
  images: ImageDataType[];
  addImages: (newImages: ImageDataType[]) => void;
}

const useImageStore = create<ImageStore>(set => ({
  images: [],
  addImages: newImages =>
    set(state => ({images: [...state.images, ...newImages]})),
}));

export default useImageStore;
