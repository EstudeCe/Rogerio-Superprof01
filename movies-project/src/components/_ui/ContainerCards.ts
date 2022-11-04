import styled from "styled-components";

export const ContainerCards = styled.section`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
   column-gap: 48px;
   row-gap: 64px;

   padding: 56px;
`;
