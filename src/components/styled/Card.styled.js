define(['styled-components'], function(styled) {

  const StyledCard = styled.div`
    display: flex;   
    align-items: flex-start;
    flex-direction: row;
    background-color: ${({ theme }) => theme.colors.body || '#fff'};
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    margin: 15px 0;
    flex-direction: ${({ layout }) => layout || 'row'};
    
    & > div {
      flex: 1;
    };

  `
  return StyledCard

})