import axios from "axios";

const urlStart = (url) => `https://shopeazy-server.onrender.com/api${url}`;

export const getData = async (url, token) => {
  const res = await axios.get(urlStart(url), {
    headers: { Authorization: `Bearer:${token}` },
    withCredentials: true,
  });

  return res;
};

export const postData = async (url, data, token) => {
  const res = await axios.post(urlStart(url), data, {
    headers: { Authorization: `Bearer:${token}` },
    withCredentials: true,
  });

  return res;
};

export const putData = async (url, data, token) => {
  const res = await axios.put(urlStart(url), data, {
    headers: { Authorization: `Bearer:${token}` },
    withCredentials: true,
  });

  return res;
};

export const deleteData = async (url, token) => {
  const res = await axios.delete(urlStart(url), {
    headers: { Authorization: `Bearer:${token}` },
    withCredentials: true,
  });

  return res;
};
