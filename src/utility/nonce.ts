export async function getNonce(): Promise<string> {
  const response = await fetch(`${process.env.API_ADDRESS}/auth/nonce/get`, {
    cache: 'no-cache',
  });
  const data = await response.json();
  return data.nonce;
}
