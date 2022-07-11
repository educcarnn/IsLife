import { Content, ContainerInput } from "./style";

export const Input = ({ label, icon, register, name, ...rest }) => {
  return (
    <>
      <ContainerInput>
        <div>{label}</div>
        <Content>
          <input {...register(name)} {...rest} />
        </Content>
      </ContainerInput>
    </>
  );
};

export const Select = ({ label, icon, options, register, name, ...rest }) => {
  return (
    <>
      <ContainerInput>
        <div>{label}</div>
        <Content>
          <select {...register(name)} {...rest} />
        </Content>
      </ContainerInput>
    </>
  );
};

// export default Input;
