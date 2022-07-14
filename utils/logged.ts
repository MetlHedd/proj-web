import axios from "axios";

export const checkIfisLogged = async () => {
  try {
    const response = await axios.get("/api/auth/login");

    if (response.data.data.email) {
      return true;
    }
  } catch (e) {
    // just continue
  }

  return false;
};