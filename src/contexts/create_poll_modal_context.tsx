import type BottomSheet from "@gorhom/bottom-sheet";
import type React from "react";
import { createContext, useContext, useRef, type RefObject } from "react";

type CreatePollModalContextType = {
  openModal: () => void;
  closeModal: () => void;
  createPollModalRef: RefObject<BottomSheet>;
};

interface Props {
  children: React.ReactNode;
}

const CreatePollModalContext = createContext<
  CreatePollModalContextType | undefined
>(undefined);

export const CreatePollModalProvider: React.FC<Props> = ({ children }) => {
  const createPollModalRef = useRef<BottomSheet>(null);

  const openModal = () => {
    createPollModalRef.current?.expand();
  };

  const closeModal = () => {
    createPollModalRef.current?.close();
  };

  return (
    <CreatePollModalContext.Provider
      value={{
        openModal,
        closeModal,
        createPollModalRef,
      }}
    >
      {children}
    </CreatePollModalContext.Provider>
  );
};

export const useCreatePollModal = (): CreatePollModalContextType => {
  const context = useContext(CreatePollModalContext);
  if (!context) {
    throw new Error(
      "useCreatePollModal must be used within a CreatePollModalProvider"
    );
  }
  return context;
};

export default CreatePollModalContext;
