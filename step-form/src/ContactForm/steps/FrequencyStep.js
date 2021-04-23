import React from "react";

import { Form, TextField } from "../../ui";
import { useContactFormState } from "../ContactFormContext";

export function FrequencyStep() {
  const {
    state: {secondText},
    dispatch
  } = useContactFormState();

  return (
    <>
      <h1>Step2</h1>
      <Form>
        <TextField
            name="secondText"
            onChange={e =>
              dispatch({ type: "SECOND_TEXT", payload: e.target.value })
            }
            value={secondText}
          />
      </Form>
    </>
  );
}
