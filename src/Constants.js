const API_ENDPOINT = process.env["REACT_APP_API_ENDPOINT"];

export const apiEndpoints = {
  auth: {
    register: `${API_ENDPOINT}/api/register`,
  },
  dashboard: {},
};
