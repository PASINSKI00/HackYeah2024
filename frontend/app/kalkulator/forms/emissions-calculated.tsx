import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import Chips from '@/components/ui/chips';
import { calculateEmission } from './helpers';

interface EmissionsCalculatedProps<FormData> {
  calculateEmission?: (formData: FormData) => number;
}

function EmissionsCalculated<FormData extends Record<string, any>>({
  calculateEmission,
}: EmissionsCalculatedProps<FormData>) {
  const { watch, getValues } = useFormContext<FormData>();
  const [totalEmission, setTotalEmission] = useState(calculateEmission?.(getValues()) ?? 350);

  useEffect(() => {
    const { unsubscribe } = watch((value) => {
      if (!calculateEmission) return;
      setTotalEmission(calculateEmission(value as FormData));
    });

    return () => unsubscribe();
  }, [watch, calculateEmission]);

  return (
    <div>
      <span className='flex items-center gap-4'>
        <h3 className='text-2xl font-bold text-blue-700'>Twoja emisja</h3>{' '}
        <Chips className='cursor-default bg-red' label={`${totalEmission}g`} />
      </span>
      <p className='mt-4 text-sm text-gray'>
        Twoja emisja CO<sub>2</sub> zostanie zneutralizowana przez równowartość
        absorpcji <span className='text-blue'>4</span> drzew rosnących przez
        rok.
      </p>
    </div>
  );
}

export default EmissionsCalculated;
