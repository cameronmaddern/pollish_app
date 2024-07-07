import type BottomSheet from "@gorhom/bottom-sheet";
import type React from "react";
import { createContext, useContext, useRef, useState } from "react";
import MoreBottomSheet from "./more_bottom_sheet";

type ModalContextType = {
  openModal: (postId: string, postTitle: string, postTopics: string[]) => void;
  closeModal: () => void;
  openModalId: string | null;
};

interface Props {
  children: React.ReactNode;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<Props> = ({ children }) => {
  const [openModalId, setOpenModalId] = useState<string | null>(null);
  const [openModalTitle, setOpenModalTitle] = useState<string | null>(null);
  const [openModalTopics, setOpenModalTopics] = useState<string[] | null>(null);
  const moreModalRef = useRef<BottomSheet>(null);

  const openModal = (
    postId: string,
    postTitle: string,
    postTopics: string[]
  ) => {
    setOpenModalId(postId);
    setOpenModalTitle(postTitle);
    setOpenModalTopics(postTopics);
    moreModalRef.current?.expand();
  };

  const closeModal = () => {
    moreModalRef.current?.close();
    setOpenModalId(null);
    setOpenModalTitle(null);
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal, openModalId }}>
      {children}
      <MoreBottomSheet
        openModalId={openModalId}
        openModalTitle={openModalTitle}
        openModalTopics={openModalTopics}
        ref={moreModalRef}
      />
    </ModalContext.Provider>
  );
};

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

export default ModalContext;
