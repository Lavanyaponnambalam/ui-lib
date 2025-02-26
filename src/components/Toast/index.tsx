import React, { useEffect, useState } from 'react';
import { Info, Warning, CheckCircle, XCircle, FileText, ArrowCounterClockwise, ArrowCircleDown, CircleNotch } from 'phosphor-react';

type ToastStatus = 'info' | 'warning' | 'success' | 'error' | 'neutral' | 'saving' | 'updated' | 'loading';

interface ToastProps {
  status: ToastStatus;
  message: string;
  onUndo: () => void; // Undo action
  onClose: () => void; // Close the toast after the timer
}

const Toast: React.FC<ToastProps> = ({ status, message, onUndo, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000); // Close after 3 seconds
    return () => clearTimeout(timer);
  }, [onClose]);

  const renderIcon = () => {
    switch (status) {
      case 'info':
        return <Info size={24} className="mr-2" />;
      case 'warning':
        return <Warning size={24} className="mr-2" />;
      case 'success':
        return <CheckCircle size={24} className="mr-2" />;
      case 'error':
        return <XCircle size={24} className="mr-2" />;
      case 'saving':
        return <CheckCircle size={24} className="mr-2" />;
      //case 'updated':
        //return <CheckCircle size={24} className="mr-2" />;
      case 'updated':
        return <CircleNotch size={24} className="mr-2 animate-spin" />;
      default:
        return <Info size={24} className="mr-2" />;
    }
  };

  return (
    <div className={`toast ${status} p-4 rounded-md shadow-lg flex items-center justify-between fixed top-4 right-4`}>
      {renderIcon()}
      <span>{message}</span>
      {(status === 'updated' || status === 'saving') && (
        <button className="ml-4 text-sm text-blue-500" onClick={onUndo}>
          Undo
        </button>
      )}
    </div>
  );
};

export default Toast;
