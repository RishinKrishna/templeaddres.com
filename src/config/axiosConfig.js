import axios from "axios";
import { toast } from "react-toastify";
import router from "next/router";
const axiosInstance = axios.create();

axiosInstance.interceptors.request.use((config) => {
  config.baseURL = "https://staging.templeaddress.com/api/v1";
  config.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
  )}`;
  return config;
});

const handleResponse = (error) => {
  let status = error.response?.status;
  let errorStatusCode = [400, 500, 404, 403];
  let unAuthorizedStatusCode = [401];

  if (unAuthorizedStatusCode.includes(status)) {
    router.push("/login");
  }
};

const get = ({ api, config, toastConfig }) => {
  if (toastConfig && toastConfig.messages) {
    return toast.promise(
      new Promise((resolve, reject) => {
        axiosInstance
          .get(api, config)
          .then((response) => {
            resolve(response);
          })
          .catch((error) => {
            console.log(error);
            handleResponse(error);
            reject();
          });
      }),
      toastConfig.messages
    );
  }
  return new Promise((resolve, reject) => {
    axiosInstance
      .get(api, config)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        console.log(error);
        handleResponse(error);
        reject();
      });
  });
};

const post = ({ api, data, config, toastConfig }) => {
  if (toastConfig && toastConfig.messages) {
    return toast.promise(
      new Promise((resolve, reject) => {
        axiosInstance
          .post(api, data, config)
          .then((response) => {
            resolve(response);
          })
          .catch((error) => {
            console.log(error);
            handleResponse(error);
            reject();
          });
      }),
      toastConfig.messages
    );
  }
  return new Promise((resolve, reject) => {
    axiosInstance
      .post(api, data, config)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        console.log(error);
        handleResponse(error);
        reject();
      });
  });
};

const put = ({ api, data, config, toastConfig }) => {
  if (toastConfig && toastConfig.messages) {
    return toast.promise(
      new Promise((resolve, reject) => {
        axiosInstance
          .put(api, data, config)
          .then((response) => {
            resolve(response);
          })
          .catch((error) => {
            console.log(error);
            handleResponse(error);
            reject();
          });
      }),
      toastConfig.messages
    );
  }
  return new Promise((resolve, reject) => {
    axiosInstance
      .put(api, data, config)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        console.log(error);
        handleResponse(error);
        reject();
      });
  });
};
const deleteData = ({ api, data, config, toastConfig }) => {
  if (toastConfig && toastConfig.messages) {
    return toast.promise(
      new Promise((resolve, reject) => {
        axiosInstance
          .delete(api, { data, ...config })
          .then((response) => {
            resolve(response);
          })
          .catch((error) => {
            console.log(error);
            handleResponse(error);
            reject();
          });
      }),
      toastConfig.messages
    );
  }
  return new Promise((resolve, reject) => {
    axiosInstance
      .delete(api, { data, ...config })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        console.log(error);
        handleResponse(error);
        reject();
      });
  });
};

export { get, post, put, deleteData };
