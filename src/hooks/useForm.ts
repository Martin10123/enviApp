import { FormElement } from "@/interfaces/interfaces";
import { useState } from "react";

type FormState = {
  [key: string]: any;
};

export const useForm = <T extends FormState>(initialForm: T) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }: { target: FormElement }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
