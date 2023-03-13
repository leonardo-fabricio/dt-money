import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { CloseButton, Content, Overlay } from "./styled";

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <CloseButton>
            <X />
        </CloseButton>

        <form>
            <input type={"text"} placeholder={"Descrição"} required/>
            <input type={"number"} placeholder={"Preç0"} required/>
            <input type={"text"} placeholder={"Categoria"} required/>

            <button type="submit">Cadastrar</button>
        </form>
        
      </Content>
    </Dialog.Portal>
  );
}
