import {
    Modal,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
} from "@chakra-ui/react";
import React from "react";

type CreateExpenseModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

function CreateExpenseModal({ isOpen, onClose }: CreateExpenseModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Create Expense</ModalHeader>
                <ModalCloseButton />
            </ModalContent>
        </Modal>
    );
}

export default CreateExpenseModal;
