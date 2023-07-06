// /src/hooks/useFormInput.js

import { useState } from 'react';

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const handleChange = ({ target }) => {
    setValue(target.value);
  };

  return {
    value,
    onChange: handleChange,
  };
}

export default useFormInput;
