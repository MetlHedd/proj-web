import axios from "axios";

export const checkIsAdmin = async () => {
  try {
    const response = await axios.get("/api/auth/login");

    if (response.data.data.admin) {
      return true;
    }
  } catch (e) {
    // just continue
  }

  return false;
};