const Filter_reducer=(state,action)=>{
if(action.type==="filter_products"){
    return {
        ...state,
        filter_products:[...action.payload],
        all_products:[...action.payload],
    }
}
else if(action.type==="grid_view"){
    return {
        ...state,
        grid_view:true,
    }
}
else if(action.type==="list_view"){
    return {
        ...state,
        grid_view:false,
    }
}
else if(action.type==="get-sort-value"){
    let userSortValue=document.getElementById("sort");
    let sort_value=userSortValue.options[userSortValue.selectedIndex].value;
   console.log(sort_value);
    return{
        ...state,
        sorting_value:sort_value,
    }
}

// else if(action.type==="SORTING_PRODUCTS"){
//     let newSortData;
//     let tempSortProduct=[...action.payload];
//     if(state.sorting_value==="a-z")
// return{
//     ...state,
//     filter_products,
// }
// }
else {
    return state
}
}
export default Filter_reducer