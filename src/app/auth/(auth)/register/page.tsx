import { getNonce } from '@/utility/nonce';
import RegisterForm from './form';

export default async function LoginPage() {
  const nonce = await getNonce();
  return (
    <div>
      <h1>Register</h1>
      <RegisterForm nonce={nonce} />
    </div>
  );
}
