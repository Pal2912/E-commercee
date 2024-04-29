
const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "SET_ERROR":
      return {
        ...state,
        isLoading:false,
        isError:true,
      };
     case "SET_API_DATA":
      const featuredata=action.payload.filter((currele)=>{
     return currele.featured===true;
      });
      return{
        ...state,
        isLoading:false,
        products:action.payload,
        featureProducts:featuredata,
    }; 
    case "SET_SINGLE_LOADING":
      return {
        ...state,
        issingleLoading: true,
      };
      case "SET_ERROR":
        return {
          ...state,
          issingleLoading:false,
          isError:true,
        };
        case "SET_SINGLE_DATA":
          return{
            ...state,
            issingleLoading:false,
            singleproducts:action.payload,
          }
      default:
        return state; 
  }
  return state;
};

export default Reducer;
