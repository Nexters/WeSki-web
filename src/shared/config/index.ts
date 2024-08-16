const ensureEnvVar = (value: string | undefined): string => {
  if (value === undefined) {
    throw new Error(`Environment variable is not set`);
  }
  return value;
};

export const API_URL = ensureEnvVar(process.env.NEXT_PUBLIC_API_URL);
