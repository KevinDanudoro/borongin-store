import { cookies } from "next/headers";

const cookieParser = () =>
  `${cookies().get("Authorization")?.name}=${
    cookies().get("Authorization")?.value
  }`;

export default cookieParser;
