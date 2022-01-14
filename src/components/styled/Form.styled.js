define([
  'styled-components'
], function (styled) {
  const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
  `
  const LoginStyled = styled.form`
    display: flex;
    padding: 30px;
    margin: 50% auto;
    border-radius: 20px;
    flex-direction: column;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    background-color: ${({ theme }) => theme.colors.header};
  `

  const FieldSetStyled = styled.fieldset`
    flex: 1;
    display:flex;
    border: none;
    margin-top: 5px;
    flex-wrap: wrap;
    justify-content: space-around;

    & > div { 
      display: block;

      & > label {
        flex: 1;
        padding:0;
        display:flex;
        font-size: 0.7em;
      };

      & > span {
        font-size: 0.9em;
        border-radius: 3px;
        padding-right: 3px;
        border: 1px solid #000033;

        & > input {
          outline: none;          
          border: none;
          padding-left: 5px;
          margin-right: 5px;
          background: transparent;
        };

        & > span {
          cursor: pointer;
        }
      }
    }    
  `
    
  const InputStyled = styled.span`

    margin: 2px;
    display: flex;    
    flex-direction: column;

    & > label {
      font-size: 0.7em;
      padding-left: 5px;
      text-align: left;      
    }
    
    & > span {
      padding: 5px;
      display: flex;
      border-radius: 5px;
      border: 1px solid ${({ theme }) => theme.colors.border.input};
      
      & > input {
        outline: none;
        background: transparent;
        border: none;
      }

      & > span {
        margin-left: 5px;
      }
    }
  `
  const ButtonStyled = styled.button`
    border-radius: 50px;
    border: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    padding: 15px 60px;
    background-color: ${({ bg }) => bg || '#fff'};
    color: ${({ theme }) => theme.colors.color || '#333'};

    &:hover {
      opacity: 0.9;
      transform: scale(0.98);
    }      
  `
  return { FormStyled, FieldSetStyled, LoginStyled, InputStyled, ButtonStyled }
})