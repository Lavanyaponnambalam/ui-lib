import React from 'react';

type AlertStatus = 'info' | 'warning' | 'success' | 'error' | 'neutral';
type AlertVariant = 'subtle' | 'surface' | 'outline' | 'solid';
type AlertSize = 'sm' | 'md' | 'lg';

interface AlertProps {
  status: AlertStatus;
  variant: AlertVariant;
  size: AlertSize;
  message: string;  // The message to display in the alert
}

const Alert: React.FC<AlertProps> = ({ status, variant, size, message }) => {
  const alertClasses = `${getStatusClass(status)} ${getVariantClass(variant)} ${getSizeClass(size)} p-4 rounded-md`;

  return (
    <div className={alertClasses}>
      {message}
    </div>
  );
};

const getStatusClass = (status: AlertStatus) => {
  switch (status) {
    case 'info':
      return 'bg-blue-500 text-white';
    case 'warning':
      return 'bg-yellow-500 text-black';
    case 'success':
      return 'bg-green-500 text-white';
    case 'error':
      return 'bg-red-500 text-white';
    case 'neutral':
      return 'bg-gray-500 text-white';
    default:
      return '';
  }
};

const getVariantClass = (variant: AlertVariant) => {
  switch (variant) {
    case 'solid':
      return 'bg-opacity-100';
    case 'outline':
      return 'border-2 border-current bg-transparent';
    case 'subtle':
      return 'bg-opacity-50';
    case 'surface':
      return 'bg-opacity-20';
    default:
      return '';
  }
};

const getSizeClass = (size: AlertSize) => {
  switch (size) {
    case 'sm':
      return 'text-sm';
    case 'md':
      return 'text-base';
    case 'lg':
      return 'text-lg';
    default:
      return '';
  }
};

export default Alert;
