import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import {
  PriceHighLight,
  TransationsContainer,
  TransationsTable,
} from "./styled";

export function Trasactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransationsContainer>
        <SearchForm />
        <TransationsTable>
          <tbody>
            <tr>
              <td width={"50%"}>Desenvolvimento do Site</td>
              <td>
                <PriceHighLight variant="income">R$ 12.000,00</PriceHighLight>
              </td>
              <td>venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width={"50%"}>Hamburguer</td>
              <td>
                <PriceHighLight variant="outcome">- R$ 59,00</PriceHighLight>
              </td>
              <td>venda</td>
              <td>13/04/2022</td>
            </tr>
          </tbody>
        </TransationsTable>
      </TransationsContainer>
    </div>
  );
}
