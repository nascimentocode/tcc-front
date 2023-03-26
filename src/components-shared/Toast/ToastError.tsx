import { toast } from 'react-toastify';
import { IToastProps } from './interfaces';

export function ToastError({ message }: IToastProps) {
  return toast.error(message, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark'
  });
}
