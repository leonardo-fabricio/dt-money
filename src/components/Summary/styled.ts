import styled from "styled-components";

interface SummaryCardProps {
  variant?: "green";
}
export const SummaryContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: auto auto auto;
  gap: 2rem;

  margin-top: -5rem;
`;
export const SummaryCard = styled.div<SummaryCardProps>`
  background: ${(props) =>
    props.variant ? props.theme["green-700"] : props.theme["gray-600"]};
  border-radius: 6px;
  padding: 2rem;
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme["gray-300"]};
  }
  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }
`;
