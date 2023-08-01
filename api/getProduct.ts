import { supabase } from "./supabaseClient";

export const getProduct = async () => {
  try {
    const { data : product, error } = await supabase.from('products').select('*')
    if (error) throw new Error(error.message)
    if (product) { 
      console.log(product)
      return product 
    }
    return []
  } catch(error) {
    console.error('error while fetching data', error)
  }
}

