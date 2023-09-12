import axios from "axios";
import { toast } from "react-toastify";

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
};
const get = ({ api, data, config, toastConfig }) => {
  if (toastConfig && toastConfig.messages) {
    return toast.promise(
      new Promise((resolve, reject) => {
        axiosInstance
          .get(api, data, config)
          .then((response) => {
            resolve(response);
          })
          .catch((error) => {
            reject();
          });
      }),
      toastConfig.messages
    );
  }
  return new Promise((resolve, reject) => {
    axiosInstance
      .get(api, data, config)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
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
        reject();
      });
  });
};

const put = ({ api, data, config }) => {
  return toast.promise(
    new Promise((resolve, reject) => {
      axiosInstance
        .put(api, data, config)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          // handleResponse(error);
          reject();
        });
    }),
    {
      pending: "Promise is pending",
      success: "Promise resolved 👌",
      error: "Promise rejected 🤯",
    }
  );
};
export { get, post, put };
