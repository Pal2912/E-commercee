import React from "react";
import styled from "styled-components";
import { IoGridSharp } from "react-icons/io5";
import { BsList } from "react-icons/bs";
import { useFilterContext } from "../context/Filtercontext";
const Sort = () => {
  const {filter_products,grid_view, setGridView, setListView,sorting } = useFilterContext();
  return (
    <Wrapper>
      <div className="simple-sorting">
        <div className="sorting-list--grid">
          <button
            className={grid_view ? " active sort-btn" : "sort-btn"}
            onClick={setGridView}
          >
            <IoGridSharp className="icon" />
          </button>

          <button
            className={grid_view ? "sort-btn" : "active sort-btn"}
            onClick={setListView}
          >
            <BsList className="icon" />
          </button>
        </div>
        <div className="product-data">
        <p>{`${filter_products.length} Product Available`}</p>
        </div>
        <div className="sort-selecton">
          <form action="#">
            <label htmlFor="sort"></label>
            <select name="sort" id="sort" className="sort-selection--style" onClick={sorting}>
              <option value="lowest">Price(lowest)</option>
              <option value="#" disabled></option>
              <option value="highest">Price(highest)</option>
              <option value="#" disabled></option>
              <option value="a-z">Price(a-z)</option>
              <option value="#" disabled></option>
              <option value="z-a">Price(z-a)</option>
              <option value="#" disabled></option>
            </select>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;

  .sorting-list--grid {
    display: flex;
    gap: 2rem;

    .sort-btn {
      padding: 0.8rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: poniter;
    }
    .icon {
      font-size: 1.6rem;
    }
    .active {
      background-color: ${({ theme }) => theme.colors.black_code};
      color: #fff;
    }
    .sort-selection .sort-selection--style {
      padding: 0.5rem;
      cursor: pointer;
    }

    .sort-select--option {
      padding: 0.5rem 0;
      cursor: pointer;
      height: 2rem;
      padding: 10rem;
    }
  }
`;

export default Sort;

// <div className="real-sorting">
// <div className="sorting-list--grid">
// <button
//   className={grid_view ? " active sort-btn" : "sort-btn"}
//   onClick={setGridView}
// >
//   <IoGridSharp className="icon" />
// </button>

// <button
//   className={grid_view ? "sort-btn" : "active sort-btn"}
//   onClick={setListView}
// >
//   <BsList className="icon" />
// </button>
// </div>
// <div className="product-data">
// Products Available
// </div>
// <div className="sort-selection">Dropdown</div>
// </div>
