define(['styled-components'],function(styled) {
   const StyledHeader = styled.header`
    background-color: ${({ theme })=>theme.colors.header};
    padding: 5px 0; 
  `
  const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
  
  `
  const StyledButton = styled.button`
    border-radius: 50px;
    border: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    padding: 15px 60px;
    background-color: ${({ bg }) => bg || '#fff'};
    color: ${({ color }) => color || '#333'};

    &:hover {
      opacity: 0.9;
      transform: scale(0.98);
    };
  `

  return {
    StyledNav,
    StyledHeader,
    StyledButton,
  }
});