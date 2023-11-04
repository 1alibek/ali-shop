import { createContext, useState } from "react";
import axios from "axios";
export const Searchcontext = createContext(null);

const SearchProvider = ({ children }) => {
  
  const [store, setStore] = useState ([]);
  const setBasket = (data) => {
    setStore([...store, data]);
  };
//   const getData = () => {
//        axios
//         .get("http://localhost:5000/api/posts")
//         .then((result) => setStore(result.data));
    
//   };

//     getData()
const [inputData, setInputData] = useState("");
// const [state, setState] = useState([]);
// const { setProductToStorage } = useContext(BasketContext);
async function getSearch() {
  try {
    let res = await axios.get(
      `https://dummyjson.com/products/search?q=${inputData
        .trim()
        .toLowerCase()}`
    );
    console.log(res.data);
    return setStore(res.data.products);
  } catch (e) {
    console.log(e.target.value);
  }
}

const search = () => {
  getSearch();
};

  return (
    <Searchcontext.Provider value={{ setBasket,store,setStore ,setInputData,search}}>
      {children}
    </Searchcontext.Provider>
  );
};

export default SearchProvider;