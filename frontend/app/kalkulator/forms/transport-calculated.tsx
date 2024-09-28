import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { TransportFormData } from './constants';

function TransportCalculated() {
  const { watch } = useFormContext<TransportFormData>();

  useEffect(() => {
    const { unsubscribe } = watch((value) => {
      console.log(value);
    });

    return () => unsubscribe();
  }, [watch]);

  return <div></div>;
}

export default TransportCalculated;
