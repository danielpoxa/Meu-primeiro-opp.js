import { useState } from 'react';

function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggleValue = () => {
    setValue(prevValue => !prevValue);
  };

  return [value, toggleValue];
}

export default useToggle;
