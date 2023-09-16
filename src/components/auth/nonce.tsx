import { getNonce } from '@/utility/nonce';

export default async function NonceInput() {
  const nonce = await getNonce();
  return <input type="hidden" name="nonce" value={nonce} />;
}
