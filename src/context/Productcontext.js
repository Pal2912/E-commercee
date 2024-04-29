import { createContext, useContext, useEffect ,useReducer} from "react";
import axios from "axios"; 
import Reducer from "../reduers/Reducer";

const AppContext = createContext();

const initialState={
    isLoading:false,
    isError:false,
    products:[],
    featureProducts:[],
    issingleLoading:false,
    singleproducts:{},
}

const AppProvider = ({ children }) => {

const [state,dispatch] =useReducer(Reducer,initialState);

//-------------------------------------------
const getProducts=async(url)=>{
    dispatch({type:"SET_LOADING"})
    try{
        const response=await axios.get(url);
        const products = await response.data;
        dispatch({type:"SET_API_DATA",payload:products})
    }catch(error){
        dispatch({type:"SET_ERROR"});
    }
}
//---------------------------------------------
const getsingleProduct=async(url)=>{
    dispatch({type:"SET_SINGLE_LOADING"})
try{
    const response=await axios.get(url);
    const singleproducts = await response.data;
    dispatch({type:"SET_SINGLE_DATA",payload:singleproducts})
}
catch(error){
    dispatch({type:"SET_SINGLE_ERROR"});
}
}
// ----------------------------------------------





    useEffect(
        ()=>{
       getProducts("https://api.pujakaitem.com/api/products")
        }
    ,[]);



  return (
  <AppContext.Provider value={{...state,getsingleProduct}}>
    {children}
    </AppContext.Provider>);
};

const useProductContext=()=>{
    return useContext(AppContext);
}

export { AppProvider, AppContext ,useProductContext };
