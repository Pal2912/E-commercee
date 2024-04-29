import { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";
import {useProductContext} from "./Productcontext"
import Filter_reducer from "../reduers/Filter_reducer";

const Filtercontext=createContext();

const initialState={
    filter_products_loading:false,
    filter_products_error:false,
    filter_products:[],
    all_products:[],
    grid_view:true,
    sorting_value:"lowest",
}

const Filtercontext_provider=({children})=>{

    const {products}=useProductContext();

    const [state,dispatch]=useReducer(Filter_reducer,initialState);
 
// useEffect(()=>{
//     dispatch({type:"SORTING_PRODUCTS",payload:products});
// },[state.sorting_value]);

    useEffect(()=>{
    dispatch({type:"filter_products",payload:products })
    },[products]);

    const setGridView=()=>{
        return dispatch({type:"grid_view"})
    }

    const setListView=()=>{
        return dispatch({type:"list_view"})
    }

    const sorting=()=>{
        return dispatch({type:"get-sort-value"})
    }

    return <Filtercontext.Provider value={{...state,setGridView,setListView,sorting}}>
    {children}
    </Filtercontext.Provider>
};

const useFilterContext=()=>{
    return useContext(Filtercontext);
}

 export {Filtercontext_provider,useFilterContext,Filtercontext}
 