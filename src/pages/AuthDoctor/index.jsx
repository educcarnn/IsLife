

function AuthDoctor() {
  return (
    <div>
      <div>
        <div>
          <label>Nome</label>
          <input placeholder="Digite aqui sua senha"></input>
        </div>
        <div>
          <label>CPF</label>
          <input placeholder="Digite aqui seu CPF"></input>
        </div>
        <div>
          <label>E-mail</label>
          <input placeholder="Digite aqui seu e-mail"></input>
        </div>
        <div>
          <label>Senha</label>
          <input placeholder="Digite aqui sua senha"></input>
        </div>
        <div>
          <label>Confirmar sua senha</label>
          <input placeholder="Confirme sua senha"></input>
        </div>
        <label>Telefone</label>
        <input placeholder="Digite seu telefone"></input>

        <div>
          <label>CNPJ</label>
          <input placeholder="Digite seu CNPJ"></input>
        </div>
        <div>
          <label>CEP</label>
          <input placeholder="Digite seu CEP"></input>
        </div>
      </div>
      {/* ------- */}
      <div>
        <div>
          <label>Bairro</label>
          <input placeholder="Digite o nome do seu bairro" />
        </div>
        <div>
          <label>Rua</label>
          <input placeholder="Digite o nome do seu bairro" />
        </div>
        <div>
          <label>Complemento</label>
          <input placeholder="Digite o nome do seu bairro" />
        </div>
        <div>
          <label>Nº</label>
          <input placeholder="Digite o nome do seu bairro" />
        </div>
        <div>
          <label>Escolha sua profissão</label>
          <select>
            <option value="psicóloga">Psicóloga(o)</option>
            <option value="psiquiatra">Psiquiatra</option>
            <option value="outros">Outros</option>
          </select>
        </div>
        <div>
            <label>CRM</label>
            <input placeholder='Digite seu CRM'></input>
        </div>
      </div>

      <button type="submit">Cadastrar</button>
    </div>
  );
}
export default AuthDoctor;
