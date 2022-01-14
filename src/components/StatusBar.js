define([
  'react',
  'react-router-dom',
  'jsx!src/auth/AuthContext',
  'jsx!src/components/styled/Status.styled',
  'jsx!src/components/styled/Container.styled',
], (React, { Link }, { useAuth }, { StyledStatus, StyledStatusNav, StyledStatusButton }, Container) => function () {
  const auth = useAuth()

  if (!auth.user) return null

  return (
    <StyledStatus>
      <Container>
        <StyledStatusNav>
          <Link to="/"><StyledStatusButton><span className="icon"><i className="fas fa-home"></i></span><p>Inicio</p></StyledStatusButton></Link>
          <Link to="/sobre"><StyledStatusButton><span className="icon"><i className="fas fa-cog"></i></span><p>Config</p></StyledStatusButton> </Link>
          <Link to="/sobre"><StyledStatusButton><span className="icon"><i className="fas fa-book-open"></i></span><p>Agenda</p></StyledStatusButton></Link>
          <Link to="/sobre"><StyledStatusButton><span className="icon"><i className="fas fa-key"></i></span><p>Relatório</p></StyledStatusButton></Link>
          <Link to="/planejamento"><StyledStatusButton><span className="icon"><i className="fas fa-sitemap"></i></span><p>Planejamento</p></StyledStatusButton></Link>
        </StyledStatusNav>
      </Container>
    </StyledStatus>
  )
})
