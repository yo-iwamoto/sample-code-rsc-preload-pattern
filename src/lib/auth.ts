export async function getIsAuthenticated() {
  await new Promise<void>((r) => setTimeout(r, 1000));

  return true;
}
