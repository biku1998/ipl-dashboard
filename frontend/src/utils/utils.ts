import api from "../apis/dev";

interface response {
  data: any;
  success: boolean;
  reason: string | null;
}

export const dataFetcher = async (
  route: string,
  method: string,
  data = {}
): Promise<response> => {
  try {
    if (method === "get") {
      const resp = await api.get(route);
      return { data: resp.data, success: true, reason: null };
    }
    return { data: {}, success: false, reason: null };
  } catch (err) {
    console.log(err);
    return { data: null, success: false, reason: "data fetching failed" };
  }
};
