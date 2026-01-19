import { useEffect, useRef } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

const PlayerProfileModal = ({ isOpen, onClose, title, children }: ModalProps) => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (isOpen) {
            dialog.showModal();
        } else {
            dialog.close();
        }
    }, [isOpen]);

    const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
        if (e.target === dialogRef.current) onClose();
    };

    return (
        <dialog
            ref={dialogRef}
            onClose={onClose}
            onClick={handleBackdropClick}
            className="rounded-lg p-0 backdrop:bg-black/50 backdrop:backdrop-blur-sm"
        >
            <div className="w-[400px] p-6 bg-white flex flex-col gap-4">
                <div className="flex justify-between items-center border-b pb-2">
                    <h2 className="text-xl font-bold">{title}</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-black">
                        ✕
                    </button>
                </div>
                <div>{children}</div>
                <div className="flex justify-end pt-2">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                        Close
                    </button>
                </div>
            </div>
        </dialog>
    );
};

export default PlayerProfileModal;