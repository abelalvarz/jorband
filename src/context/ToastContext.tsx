import { Toast } from "primereact/toast";
import { createContext, useContext, useRef } from "react";

interface ContextType {
    toast: (
        messageType: MessageType,
        messageTitle: string,
        message: string
    ) => void;
}
type MessageType = 'error' | 'warn' | 'info' | 'success';

const ToastContext = createContext<ContextType | undefined>(undefined);

interface Props {
    children: React.ReactNode
}
export const ToastProvider = ({ children }: Props) => {

    const toastRef = useRef<any>(null);
    const toast = (type: MessageType, title: string, message: string) => {
        toastRef.current?.show({ severity: type, summary: title, detail: message, life: 2000 })
    }

    return (
        <ToastContext.Provider value={{ toast }}>
            <Toast ref={toastRef} position="top-center" className="toast" />
            {children}
        </ToastContext.Provider>
    )
}

export const useToast = () => {
    return useContext(ToastContext)
}
