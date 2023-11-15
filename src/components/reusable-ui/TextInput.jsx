import styled from "styled-components";

export default function TextInput({ value, onChange, Icon, ...extraProps }) {
  //   console.log("extraProps", extraProps.placeholder);

  return (
    <InputStyled>
      {Icon}
      <input
        onChange={onChange}
        type="text"
        {...extraProps}
      />
    </InputStyled>
  );
}

const InputStyled = styled.div`
  // Style pour la div Input with icon

  background-color: white;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 18px 24px;
  margin: 18px 0;

  .icon {
    color: #93a2b1;
    font-size: 15px;
    margin-right: 8px;
  }

  input {
    border: none;
    font-size: 15px;
    color: #17161a;
    /* width: 100%; */
  }

  &::placeholder {
    background: yellow;
    color: blue;
  }
`;
