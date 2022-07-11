import { Content } from "./style";

function ButtonForm({ children, ...rest }) {
  return (
    <>
      <Content type="button" {...rest}>
        {children}
      </Content>
    </>
  );
}

export default ButtonForm;
