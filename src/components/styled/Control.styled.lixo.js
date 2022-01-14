define(['styled-components'],function(styled) {
  const ControlStyled = styled.div`
    display: flex;
    margin-bottom: 5px;
    flex-direction: column; 
    
    & > label {
      font-size: 0.7em;
      padding-left: 5px;
      text-align: left; 
    }
    
    & > span {
      display: flex;   
      border: 1px solid coral;
      border-radius: 5px;
      padding: 5px;
      
      & > input {
        flex: 1;
        padding-left: 5px;
        outline: none;
        background: transparent;
        border: none;
      }
    }
  
  `
  return ControlStyled
})