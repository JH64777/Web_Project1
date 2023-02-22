import axios from "axios";

export async function CountOfPost(){
    const result = await axios.post("/Board/Count",{ request : 123 });
    return result.data;
}

export function RequestTitle(){

    axios.get(`/Board/`,)
}
