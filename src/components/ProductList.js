import GridView from './GridView';
import ListView from './ListView';
import { useFilterContext } from '../context/Filtercontext';

const ProductList = () => {
  const {filter_products,grid_view}=useFilterContext();
  if(grid_view===true){
    return <GridView filter_products={filter_products}/>
  }
  if(grid_view===false){
    return <ListView filter_products={filter_products}/>
  }
}

export default ProductList