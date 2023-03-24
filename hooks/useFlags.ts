import { createUseFlags } from '@happykit/flags/client';

const envKey = process.env.NEXT_PUBLIC_HAPPYKIT_FLAGS_KEY;

if (!envKey) {
  throw new Error('NEXT_PUBLIC_HAPPYKIT_FLAGS_KEY を設定してください。');
}

const useFlags = createUseFlags({ envKey });

export { useFlags };
