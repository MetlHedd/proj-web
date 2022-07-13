import { useRouter } from "next/router";
import { checkIsAdmin } from "./isAdmin";
import { checkIfisLogged } from "./logged";

export default async function onlyAccesIfLoggedIn(needToBeAdmin?: boolean) {
  const router = useRouter();
  
  if (needToBeAdmin && !(await checkIsAdmin())) {
    router.push("/404");
  } else if (!needToBeAdmin && !(await checkIfisLogged())) {
    router.push("/login");
  }
}