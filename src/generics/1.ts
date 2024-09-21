import axios from "axios";

type Data = { 
  userId: 1, 
  id: 1,
  title: "Welcome"; 
  completed: false 
};

async function fetchData<D>(url: string): Promise<D> {
  try {
    const response = await axios.get<D>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

fetchData<Data>("url");