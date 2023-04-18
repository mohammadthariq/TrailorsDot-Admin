import axios from "axios";

// // get access token
// const getAthuToken = () => {
//   let token = sessionStorage?.getItem("access_token");
//   return token;
// };

// _axios(http method, api endpoint, data)

export const _axios = async (
  method,
  url,
  body,
  params
) => {
  const res = await axios({
    headers: {
      "Content-Type": "application/json",
    },
    method: method,
    url: `https://trailorsdot.onrender.com/api${url}`,
    data: body,
    params: params,
  })
    .then((res) => res?.data)
    .catch((err) => err);
  return res;
};