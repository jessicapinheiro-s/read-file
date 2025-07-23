// src/store/usePDFStore.ts
import { create } from 'zustand';

type PDFState = {
  fileName: string | null;
  pdfText: string;
  setFileName: (name: string) => void;
  setPdfText: (text: string) => void;
  clear: () => void;
};

export const usePDFStore = create<PDFState>((set) => ({
  fileName: null,
  pdfText: '',
  setFileName: (name) => set({ fileName: name }),
  setPdfText: (text) => set({ pdfText: text }),
  clear: () => set({ fileName: null, pdfText: '' }),
}));
