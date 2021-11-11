import styled from "styled-components";

export const Wrapper = styled.section`
  max-width: 100%;
  padding: 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;

  @media (max-width:450px){
    flex-direction:column;
  }
`;

export const SideFilters = styled.aside`
  width: 20%;
  display: flex;
  flex-direction: column;

  @media(max-width:450px){
    width:100%;
  }
`;

export const CountryList = styled.div`
  width: 75%;

  @media(max-width:450px){
    width:100%;
  }
`;

export const SideBarInput = styled.input`
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #eee;
`;

export const SearchButton = styled.button`
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #eee;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const SelectField = styled.select`
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #eee;
`;
