define([
  'react',
  'jsx!src/components/styled/Card.styled'
],(React, StyledCard) => function({children, style}) {
  return (
    <StyledCard style={{ ...style }}> 
      {children}   
    </StyledCard> 
  )
})