export const initializeInterceptor = (logoutUser: Function) => {
  const { fetch: originalFetch } = window;
  window.fetch = async (...args) => {
    let [resource, config] = args;
    const response = await originalFetch(resource, config);

    if (!response.ok) {
      if (window.location.pathname !== "/") {
        logoutUser();
        localStorage.setItem("logged", "false");
        window.location.reload();
        return Promise.reject();
      }
    }

    return response;
  };
};
