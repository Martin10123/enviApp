import { useState } from "react";

type FormState = {
  [key: string]: any; // Forma general para permitir cualquier propiedad
};

export const useForm = <T extends FormState>(initialForm: T) => {
  const [formState, setFormState] = useState<T>(initialForm);

  const onInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState, // Retorna las propiedades desestructuradas del estado
    formState,
    onInputChange,
    onResetForm,
  };
};
