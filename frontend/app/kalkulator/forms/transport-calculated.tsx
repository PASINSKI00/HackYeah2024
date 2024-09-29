import {useEffect, useState} from 'react';
import {useFormContext} from 'react-hook-form';
import {TransportFormData} from './constants';
import Chips from '@/components/ui/chips';
import {calculateEmission} from './helpers';

function TransportCalculated() {
  const { watch } = useFormContext<TransportFormData>();
  const [totalEmission, setTotalEmission] = useState(350);

  useEffect(() => {
    const { unsubscribe } = watch((value) => {
      setTotalEmission(calculateEmission(value as TransportFormData))
    });

    return () => unsubscribe();
  }, [watch]);

  return (
    <div className=''>
      <span className='flex items-center gap-4'>
        <h3 className='text-2xl font-bold text-blue-700'>Twoja emisja</h3>{' '}
        <Chips className='cursor-default bg-red' label={`${totalEmission}g`} />
      </span>
      <p className='text-gray text-sm mt-4'>
        Twoja emisja CO<sub>2</sub> zostanie zneutralizowana przez równowartość absorpcji{' '}
        <span className='text-blue'>4</span> drzew rosnących przez rok.
      </p>
    </div>
  );
}

export default TransportCalculated;
