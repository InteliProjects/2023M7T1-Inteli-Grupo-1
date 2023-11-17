import { toast } from "react-toastify";

/**
 * Exibe um toast de sucesso.
 *
 * @param {string} content - O conteúdo a ser exibido no toast.
 * @returns {React.ReactText} - Identificador do toast.
 */
export function successToast(content: string) {
  return toast.success(content, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
}

/**
 * Exibe um toast de erro.
 *
 * @param {string} content - O conteúdo a ser exibido no toast.
 * @returns {React.ReactText} - Identificador do toast.
 */
export function errorToast(content: string) {
  return toast.error(content, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
}
