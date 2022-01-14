define(['styled-components'], function(styled) {

  const IconStyled = styled.div`
    display: flex;   
    align-items: flex-start;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.body || '#fff'};
    border-radius: 5px;
    border: 1px solid #333333;
    margin-bottom: 5px;
    margin-left: 5px;
    width: 110px;
    height: 100px;

    p {
      margin: 5px 5px;
      font-size: 0.7em;
      color: #000000;
    }

    span {
      font-size: 1.3em;
      color: #333333;
      margin: 17px 20px; 
    }
  `
  return IconStyled

})