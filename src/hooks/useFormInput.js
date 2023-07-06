// /src/hooks/useFormInput.js

import { useState } from 'react';

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const handleChange = ({ target }) => {
    setValue(target.value);
  };

  return {
    value,
    setValue,
    onChange: handleChange,
  };
}

export default useFormInput;
