export const initializeInterceptor = (logoutUser: Function) => {
  const { fetch: originalFetch } = window;
  window.fetch = async (...args) => {
    let [resource, config] = args;
    const response = await originalFetch(resource, config);

    if (!response.ok) {
      if (window.location.pathname !== "/") {
        logoutUser();
        window.location.replace("/");
        return Promise.reject();
      }
    }

    return response;
  };
};
