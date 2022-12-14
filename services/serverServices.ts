
import { SignIn, SignUp } from "@/models/auth.model";
import { UserData } from "@/models/user.model";
import httpClient from "@/utils/httpClient";
import axios from "axios";

type signProps = {
  username: string;
  password: string;
};

// export const signUp = async (user: signProps): Promise<SignUp> => {
//   const { data: response } = await httpClient.post<SignUp>(
//     `/authen/register`,
//     user
//   );
//   return response;
// };

export const signUp = async (user: signProps): Promise<SignUp> => {
  const response = await httpClient.post<SignUp>(
    "/authen/register",user
  );
  return response.data;
};

export const signIn = async (user: signProps): Promise<SignIn> => {
  const { data: response } = await httpClient.post<SignIn>(
    `/auth/signin`,
    user,
    {
      baseURL: process.env.NEXT_PUBLIC_BASE_URL_LOCAL_API,
    }
  );
  return response;
};