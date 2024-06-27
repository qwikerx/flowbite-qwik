function safeResJson<T>(res: Response) {
  if (res.ok) return res.json() as Promise<T>

  throw new Error('Internal server error!')
}

export async function fetchSafe<T>(endpoint: string): Promise<T> {
  return safeResJson(await fetch(endpoint))
}
