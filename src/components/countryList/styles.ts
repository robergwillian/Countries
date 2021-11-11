import styled from 'styled-components'


export const Wrapper = styled.section`
    max-width:100%;
    padding:50px;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-between;
    gap:10px;

`;

export const SideFilters = styled.aside`
    width:20%;
    display:flex;
    flex-direction:column;
`;

export const List = styled.div`
    width:75%;
    max-height:75vh;
    overflow-y:scroll;

    
  @media(max-width:450px){
    width:100%;
  }
`;