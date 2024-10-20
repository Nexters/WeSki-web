export class ApiClient {
  private baseUrl: string;

  constructor(url: string) {
    this.baseUrl = url;
  }

  async handleResponse<TResult>(response: Response): Promise<TResult> {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    try {
      return await response.json();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      throw new Error('Error parsing JSON response');
    }
  }

  public async get<TResult = unknown>(
    endpoint: string,
    queryParams?: Record<string, string | number | boolean>
  ): Promise<TResult> {
    const url = new URL('/api/weski' + endpoint, window.location.origin);

    if (queryParams) {
      Object.entries(queryParams).forEach(([key, value]) => {
        url.searchParams.append(key, value.toString());
      });
    }

    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return this.handleResponse<TResult>(response);
  }

  public async post<TResult = unknown, TData = Record<string, unknown>>(
    endpoint: string,
    queryParams?: Record<string, string | number | boolean>,
    body?: TData
  ): Promise<TResult> {
    const url = new URL('/api/weski' + endpoint, window.location.origin);

    if (queryParams) {
      Object.entries(queryParams).forEach(([key, value]) => {
        url.searchParams.append(key, value.toString());
      });
    }
  

    const response = await fetch(url.toString(), {
      method: 'POST',
      body: body ? JSON.stringify(body) : undefined,
    });

    return this.handleResponse<TResult>(response);
  }
}

export const apiClient = new ApiClient('');
