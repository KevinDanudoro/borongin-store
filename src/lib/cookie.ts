import { cookies } from "next/headers";

const cookieParser = () => {
  const auth = cookies().get("Authorization");
  const isAuthExist = auth?.value ? true : false;
  if (isAuthExist)
    return `${cookies().get("Authorization")?.name}=${
      cookies().get("Authorization")?.value
    }`;

  return undefined;
};

export default cookieParser;
