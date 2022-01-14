define(['styled-components'],function(styled) {
  const Container = styled.div`
    width: 100%;
    max-width: ${({ theme })=>theme.mobile};
    padding: 0 10px;
    margin: 0 auto;
  `
  return Container
})