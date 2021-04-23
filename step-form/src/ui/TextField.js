import React from "react";
import PropTypes from "prop-types";

import { FormField } from "./FormField";

export function TextField({ label, name, ...props }) {
  return (
    <FormField label={label} name={name}>
      <textarea type="text" rows="10" cols="100" {...props} />
    </FormField>
  );
}

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};
