export function validatorLocalStorage(value: any) {
  if (typeof value == 'object' && Object.keys(value).length < 1) {
    return undefined;
  }
  return value;
}
