import React from "react";

import { Form, TextField } from "../../ui";
import { useContactFormState } from "../ContactFormContext";

export function CategoriesStep() {
  const {
    state: {thirdText},
    dispatch
  } = useContactFormState();

  return (
    <>
      <h1>Step3</h1>
      <Form>
        <TextField
            name="thirdText"
            onChange={e =>
              dispatch({ type: "THIRD_TEXT", payload: e.target.value })
            }
            value={thirdText}
          />
      </Form>
    </>
  );
}
