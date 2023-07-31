import { supabase } from "./supabaseClient";

export const getProduct = async () => {
  try {
    const { data, error } = await supabase.from('product').select()
    
    if (error) throw new Error(error.message)

    if (data){
      console.log(data)
      return data
    }

    return []
    
  } catch(error) {
    console.error('error while fetching data', error)
  }
} 
