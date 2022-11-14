import styled from "styled-components";

export const CardContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;

   padding: 16px;
   gap: 24px;

   border: solid 1px #000;
   border-radius: 8px;
   background: rgba(203, 213, 224, 0.35);
   backdrop-filter: blur(40px);

   h1 {
      font-size: 16px;
      font-weight: 600;
      text-align: center;
   }

   img {
      width: 100%;
   }

   button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;

      background: #805ad5;
      color: #fff;

      font-size: 16px;
      font-weight: 600;

      border: none;
      border-radius: 8px;
      padding: 4px 8px;
   }
`;
