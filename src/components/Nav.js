define([
  'react',
  'jsx!src/components/styled/Status.styled'
], (React, { StyledStatusNav }) => function ({ children }) {
  return (
    <StyledStatusNav>
      {children}
    </StyledStatusNav>
  )
})