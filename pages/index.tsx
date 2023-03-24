import clsx from 'clsx';
import { useFlags } from 'hooks/useFlags';

const Index = () => {
  const { flags } = useFlags();

  return (
    <button
      className={clsx(
        (!flags || flags?.buttonColor === 'red') && 'bg-red-600',
        flags?.buttonColor === 'green' && 'bg-green-600',
        'rounded-md px-3 py-2 text-white shadow lg:hover:shadow-md lg:active:shadow-inner',
      )}
      type="button"
    >
      ボタン
    </button>
  );
};

export default Index;
