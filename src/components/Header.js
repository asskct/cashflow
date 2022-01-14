define([
  'react',
	'jsx!src/components/Logo',
	'jsx!src/auth/AuthContext',
	'jsx!src/components/styled/Header.styled',
	'jsx!src/components/styled/Container.styled',
],(React, Logo, { useAuth }, { StyledHeader, StyledNav, StyledButton }, Container) => function() { 
		const auth = useAuth()
		return (
			<StyledHeader>
				<Container>
					<StyledNav>
						<Logo color="coral" fontSize="30px" icon="fas fa-chart-line"/>
						{
							(!auth.user)
							? null 
							: <StyledButton color="coral" onClick={ async () => await auth.signOut() }>Sair</StyledButton>
						}
					</StyledNav>
				</Container>
			</StyledHeader>
		)

})