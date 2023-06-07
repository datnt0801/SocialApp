import axios from "axios";

const baseURL = "http://localhost:5000/auth/login";

export default async function SignUpAPI(email: string, password: string) {
  const res = await axios
    .post(baseURL, {
      email: email,
      password: password
    });
  localStorage.setItem("accesstoken", res.data.accessToken);
  localStorage.setItem("refreshtoken", res.data.refreshToken);
  // console.log('res.data: ', res.data);
}
