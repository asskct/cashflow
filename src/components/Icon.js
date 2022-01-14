define([
  'react',
  'jsx!src/components/styled/Icon.styled'
], (React, IconStyled) => function ({icon, label, style}) {
  return (
    <IconStyled>
      <span className="icon">
        <i className={`${icon}`} style={{...style}}></i>     
      </span>
      <p>{ label }</p>
    </IconStyled>    
  )
})