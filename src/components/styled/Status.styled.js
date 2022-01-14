define(['styled-components'], function(styled) {  
  const StyledStatus = styled.div`
    background-color: ${({ theme }) => theme.colors.body || '#fff'};    
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.10);
    position: fixed;
    width: 100%;
    bottom: 0;
  `
  const StyledStatusNav = styled.nav`
    display: flex;
    max-width: ${({ theme }) => theme.mobile || '768px'};
    padding: 5px ;   
    justify-content: space-between;
  `
  const StyledStatusButton = styled.div`    
    text-align: center;
    color: #000333;
    
    & > p {
      font-size: 0.5em;
      margin: 0;
    };  
  `
  return { StyledStatus, StyledStatusNav, StyledStatusButton }

});