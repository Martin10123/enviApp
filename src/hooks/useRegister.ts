import { AuthContext } from "@/context/AuthContext";
import {
  Country,
  IdCoumentType,
  UserFormInterface,
} from "@/interfaces/interfaces";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "./useForm";
import { enviAppApi } from "@/api";
import validator from "validator";

export const useRegister = () => {
  const { fetchUserData } = useContext(AuthContext);
  const [tabs, setTabs] = useState(1);
  const [alertMessage, setAlertMessage] = useState(false);
  const [isCompleteForm, setIsCompleteForm] = useState(false);
  const [countries, setCountries] = useState<Country[]>([]);
  const [idDocumentType, setIdDocumentTypes] = useState<IdCoumentType[]>([]);
  const [loadingDocument, setLoadingDocument] = useState(false);
  const [loadingSaveForm, setLoadingSaveForm] = useState(false);
  const [error, setError] = useState("");

  const { formState, onInputChange } = useForm<UserFormInterface>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    idDocumentType: "",
    idNumber: "",
    phone: "",
    codeCountry: "",
    termsConditions: false,
    status: true,
  });

  const fetchData = async <T>(
    endpoint: string,
    setState: (data: T) => void,
    loadingKey?: boolean
  ) => {
    if (loadingKey) setLoadingDocument(true);

    try {
      const response = await enviAppApi.get(endpoint);
      setState(response.data);
    } catch (error) {
      console.error(`Error fetching ${endpoint}:`, error);
    } finally {
      if (loadingKey) setLoadingDocument(false);
    }
  };

  useEffect(() => {
    fetchData<Country[]>("/countries", setCountries);
  }, []);

  useEffect(() => {
    if (!formState.codeCountry) return;

    fetchData<IdCoumentType[]>(
      `/document-type/country/${formState.codeCountry}`,
      setIdDocumentTypes,
      true
    );
  }, [formState.codeCountry]);

  const countryPhoneFormats: { [key: string]: string } = {
    CO: "es-CO",
    US: "en-US",
  };

  const nameLocales: { [key: string]: string } = {
    CO: "es-ES",
    US: "en-US",
  };

  const onValidForm = () => {
    const {
      firstName,
      lastName,
      idDocumentType,
      idNumber,
      phone,
      codeCountry,
    } = formState;

    setError("");

    const phoneLocale = countryPhoneFormats[codeCountry];
    const nameLocale = nameLocales[codeCountry];

    // Validación de nombres
    if (
      !validator.isAlpha(firstName, nameLocale as validator.AlphaLocale) ||
      firstName.length < 2
    ) {
      setError(
        "El nombre debe contener solo letras y tener al menos 2 caracteres."
      );
      return;
    }

    if (
      !validator.isAlpha(lastName, nameLocale as validator.AlphaLocale) ||
      lastName.length < 2
    ) {
      setError(
        "El apellido debe contener solo letras y tener al menos 2 caracteres."
      );
      return;
    }

    if (!codeCountry) {
      setError("El código del país no es válido.");
      return;
    }

    // Validación de teléfono
    if (
      !validator.isMobilePhone(
        phone,
        phoneLocale as validator.MobilePhoneLocale
      )
    ) {
      setError(
        `El número de teléfono no es válido para el país ${codeCountry}.`
      );
      return;
    }

    // Validación de tipo de documento
    if (idDocumentType === "") {
      setError("El tipo de documento no es válido.");
      return;
    }

    // Validación de número de identificación
    if (codeCountry === "CO") {
      if (
        !validator.isNumeric(idNumber) ||
        idNumber.length < 6 ||
        idNumber.length > 10
      ) {
        setError(
          "El número de identificación debe contener entre 6 y 10 dígitos para Colombia."
        );
        return;
      }
    } else if (codeCountry === "US") {
      if (!validator.isNumeric(idNumber) || idNumber.length !== 9) {
        setError(
          "El número de identificación debe contener exactamente 9 dígitos para Estados Unidos."
        );
        return;
      }
    } else {
      setError(
        "El código del país no es compatible para validar el número de identificación."
      );
      return;
    }

    setError("");
    return true;
  };

  const onValidForm2 = () => {
    setError("");

    const { email, password } = formState;

    if (!validator.isEmail(email)) {
      setError("El correo electrónico no es válido.");
      return;
    }

    if (
      !validator.isStrongPassword(password, {
        minLength: 6,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 0,
      })
    ) {
      setError(
        "La contraseña debe tener al menos 6 caracteres, por lo menos una mayúscula, una minúscula y un número."
      );
      return;
    }

    if (!formState.termsConditions) {
      setError("Debes aceptar los términos y condiciones.");
      return;
    }

    setError("");
    return true;
  };

  const handleTabs = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    tab: number
  ) => {
    e.preventDefault();

    if (!onValidForm()) return;

    if (!isCompleteForm && tabs === 1) {
      setAlertMessage(true);
      return;
    }

    if (!isCompleteForm && tabs === 3) {
      setTabs(1);
      return;
    }

    if (isCompleteForm && tab === 1) {
      setIsCompleteForm(false);
    }

    setTabs(tab);
  };

  const handleCompleteForm = (isCompleteForm: boolean) => {
    setIsCompleteForm(isCompleteForm);

    if (isCompleteForm) {
      setTabs(2);
      setAlertMessage(false);
    } else {
      setTabs(3);
      setAlertMessage(false);
    }
  };

  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!onValidForm2()) return;

    setLoadingSaveForm(true);

    try {
      const { termsConditions, ...formSave } = formState;

      const resp = await enviAppApi.post("/auth/register", formSave);

      localStorage.setItem("token", resp.data.token);
      localStorage.setItem("token-init", `${new Date().getTime()}`);
      localStorage.setItem("userState", JSON.stringify(resp.data));

      fetchUserData(resp.data);
    } catch (error) {
      console.log("Error al enviar el formulario:", error);
    } finally {
      setLoadingSaveForm(false);
    }
  };

  return {
    tabs,
    alertMessage,
    isCompleteForm,
    countries,
    idDocumentType,
    loadingDocument,
    loadingSaveForm,
    error,
    formState,
    onInputChange,
    handleTabs,
    handleCompleteForm,
    onSubmitForm,
    setAlertMessage,
  };
};
