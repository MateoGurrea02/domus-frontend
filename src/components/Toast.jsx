import { useState, useEffect } from 'react';

const Toast = ({ type, message, onClose }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Ocultar el Toast automáticamente después de 3 segundos
    const timer = setTimeout(() => {
      setShow(false);
      onClose();
    }, 3000);

    // Limpiar el timer si el componente se desmonta
    return () => clearTimeout(timer);
  }, [onClose]);

  // Estilos para diferentes tipos de toast
  const toastStyles = {
    base: 'fixed bottom-5 right-5 p-4 rounded-md shadow-lg transition-opacity duration-300',
    success: 'bg-green-500 text-white',
    error: 'bg-red-500 text-white',
  };

  if (!show) return null;

  return (
    <div
      className={`${toastStyles.base} ${type === 'success' ? toastStyles.success : toastStyles.error}`}
    >
      {message}
    </div>
  );
};

export default Toast;

// EJEMPLO DE USO DEL COMPONENTE TOAST

// const [toast, setToast] = useState({ show: false, type: '', message: '' });
//   const handleAction = (actionType) => {
//     try {
//       setToast({ show: true, type: 'success', message: 'Acción realizada con éxito' });
//     } catch (error) {
//       setToast({ show: true, type: 'error', message: 'Ocurrió un error al realizar la acción' });
//     }
//   };

//   const closeToast = () => {
//     setToast({ ...toast, show: false });
//   };

//   return (
//     <div>
//       
//AL FINAL DE CADA COMPONENTE SE PUEDE AGREGAR
//       {toast.show && (
//         <Toast type={toast.type} message={toast.message} onClose={closeToast} />
//       )}
//     </div>
//   );
// };
