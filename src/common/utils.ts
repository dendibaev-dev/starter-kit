export const api = {
  get: async (url: string) => {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}${url}`);
    if (response.status >= 200 && response.status < 300) {
      return response.json();
    }
    const message = await response.text();
    throw new Error(message);
  },
};
