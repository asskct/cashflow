define([
  'react',
  'styled-components'
], function (React, styled) {
  const ImageStyled = styled.div`
    background-color: ${({ theme }) => theme.colors.body || '#fff'};
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    margin: 5px;
    img {
      width: 100%;
      height: 100%;
    }
  `
  return ImageStyled
})