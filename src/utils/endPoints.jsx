import axios from 'axios'
import {useQuery} from '@tanstack/react-query'


const baseUrl = 'http://127.0.0.1:8000/api/'

export const fetchData = (key, fn)=>{
  const url = baseUrl + fn;
  const res = useQuery({
    queryKey: [key],
    queryFn: async ()=>{
      try{
        const res = await axios.get(url);
        return res;
      }catch(e){
        throw Error("Operation Failed!! Please try again.");
      }
    }
  });
  return res;
}