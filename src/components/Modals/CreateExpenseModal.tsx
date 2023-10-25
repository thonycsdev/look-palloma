import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import Button from "../Buttons/Button";
import { useForm } from "react-hook-form";
import parseDateToYYYYMMDD from "@/functions/parseDateToYYYYMMDD";
import { Expense } from "@prisma/client";
import { ExpenseContext } from "@/contexts/expenseContext";
import { useLoading } from "@/hooks/useLoading";

type CreateExpenseModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

function CreateExpenseModal({ isOpen, onClose }: CreateExpenseModalProps) {
    const { isLoading, handleSwitchLoading } = useLoading();
    const { register, handleSubmit } = useForm<Expense>();
    const { createExpense } = useContext(ExpenseContext);
    const handleCreateExpense = async (data: Expense) => {
        try {
            handleSwitchLoading();
            await createExpense({
                ...data,
                userId: 1,
                description: "A",
                price: +data.price,
                date: new Date(data.date),
            });
        } catch (error) {
            console.log(error);
        } finally {
            handleSwitchLoading();
        }
    };
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Create Expense</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <form
                        className="flex flex-col gap-5"
                        id="expense-form"
                        onSubmit={handleSubmit(handleCreateExpense)}
                    >
                        <div className="flex flex-col items-start w-full">
                            <label htmlFor="expense-name">Expense name:</label>
                            <input
                                className="border-gray-300 bg-slate-200 w-full rounded-sm focus:shadow-lg text-center"
                                id="expense-name"
                                {...register("name")}
                            />
                        </div>
                        <div className="flex flex-col items-start w-full">
                            <label htmlFor="expense-price">Price:</label>
                            <input
                                className="border-gray-300 bg-slate-200 w-full rounded-sm focus:shadow-lg text-center"
                                type="number"
                                id="expense-price"
                                {...register("price")}
                            />
                        </div>
                        <div className="flex flex-col items-start w-full">
                            <label htmlFor="expense-date">Purchase date:</label>
                            <input
                                className="border-gray-300 bg-slate-200 w-full rounded-sm focus:shadow-lg text-center"
                                type="date"
                                id="expense-date"
                                {...register("date")}
                                data-testid="expense-date"
                                defaultValue={parseDateToYYYYMMDD(new Date())}
                            />
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter className="flex gap-5 justify-center">
                    <Button
                        isLoading={isLoading}
                        form="expense-form"
                        type="submit"
                        className="h-auto py-2 w-24"
                    >
                        Create
                    </Button>
                    <Button onClick={onClose} className="h-auto py-2 w-24">
                        Cancel
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default CreateExpenseModal;
