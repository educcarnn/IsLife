import { Content } from "./style";

function Input({ label, icon, ...rest }) {
  return (
    <>
      <Content>
        <input {...rest} />
      </Content>
    </>
  );
}

export default Input;
