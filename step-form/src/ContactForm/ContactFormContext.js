import React, { createContext, useReducer, useContext } from "react";

function formReducer(state, action) {
  switch (action.type) {
    case "FIRST_TEXT":
      return { ...state, firstText: action.payload };
    case "SECOND_TEXT":
      return { ...state, secondText: action.payload };
    case "THIRD_TEXT":
      return { ...state, thirdText: action.payload };
    case "FREQUENCY_CHANGE":
      return { ...state, frequency: action.payload };
    case "CATEGORIES_CHANGE":
      return { ...state, categories: action.payload };
    case "SUBMIT":
      return { ...state, isSubmitLoading: true };
    case "SUBMISSION_RECEIVED":
      return { ...state, isSubmitLoading: false, isSubmissionReceived: true };
    default:
      throw new Error();
  }
}

const ContactFormContext = createContext();

const initialState = {
  firstName: "",
  lastName: "",
  email: "",

  frequency: "",
  categories: [],

  isSubmitLoading: false,
  isSubmissionReceived: false
};

export const ContactFormProvider = function({ children }) {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <ContactFormContext.Provider value={{ state, dispatch }}>
      {children}
    </ContactFormContext.Provider>
  );
};

export function useContactFormState() {
  const context = useContext(ContactFormContext);

  if (context === undefined) {
    throw new Error(
      "useContactFormState must be used within a ContactFormProvider"
    );
  }

  return context;
}
