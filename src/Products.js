import React from "react";
import styled from "styled-components";
import FilterSection from "./components/FilterSection";
import ProductList from "./components/ProductList";
import { useFilterContext } from "./context/Filtercontext";
import Sort from "./components/Sort";

const Products = () => {
  return (
    <Wrapper>
      <div>
        <div>
          <FilterSection />
        </div>
        <section>
          <div>
            <Sort></Sort>
          </div>
          <div>
            <ProductList/>
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;
