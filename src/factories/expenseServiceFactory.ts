import expenseService from "@/services/expenseService";

function expenseServiceFactory() {
    const service = expenseService();
    return { service };
}
export default expenseServiceFactory;
