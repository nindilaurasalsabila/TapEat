// Custom async delay utility wrapped in a Promise resolve[cite: 9, 19]
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
