import { useEffect, useState } from "react"

export function GetAllFetch(url){

  const [dataApi, setDataApi] = useState(null)
  const [loading, setLoading] = useState(true);
  
  useEffect(()  => {
      setLoading(true);
      fetch(url)
      .then(response => response.json())
      .then(data => {setDataApi(data.results)
        console.log(data)
      })
      .catch((error) => console.log(error))
      .finally(()=>setLoading(false))
  }, [])

  return { dataApi, loading }
}