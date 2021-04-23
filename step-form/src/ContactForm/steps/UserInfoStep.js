import React from "react";

import { useContactFormState } from "../ContactFormContext";
import { Form, TextField } from "../../ui";

export function UserInfoStep() {
  const {
    state: { firstText },
    dispatch
  } = useContactFormState();

  return (
    <>
      <h1>Step1</h1>
      <Form>
        {/* <TextField
          name="firstText"
          onChange={e =>
            dispatch({ type: "FIRST_TEXT", payload: e.target.value })
          }
          value={firstText}
        /> */}
      </Form>
    </>
  );
}

export default UserInfoStep;
