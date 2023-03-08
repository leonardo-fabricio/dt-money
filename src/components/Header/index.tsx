import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styled";
import logoimg from "../../assets/Logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoimg} alt="" />
        <NewTransactionButton>Nova Transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  );
}
