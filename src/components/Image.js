define([
  'react',
  'jsx!src/components/styled/Image.styled'
],(React, StyledImage) => function({image, alt, style }) {
  return (
    <StyledImage> 
     <img src={`/images/${image}`} alt={`${alt}`} style={{ ...style }} /> 
    </StyledImage> 
  )
})