define([
	'react',
	'react-router-dom',
	'jsx!src/components/Nav',
	'jsx!src/components/animate/AnimateRoutes',
	'jsx!src/components/animate/RouteTransition',

], (React, { Link }, Nav, AnimateRoutes, RouteTransition) => function ({ routes }) {	
	return (
		<React.Fragment>
			<Nav>
				<h4><Link to="/planejamento"> Estrutura</Link></h4>
				<h4><Link to="/planejamento/receitas">Reitas</Link></h4>
				<h4><Link to="/planejamento/despesas">Despesas</Link></h4>
				<h4><Link to="/planejamento/investimentos">Investimento</Link></h4>
			</Nav>
			<AnimateRoutes exitBeforeEnter initial={false}>
				{
					routes.map(({ Component, ...route }, i) => (
						<RouteTransition key={i} {...route}>
							<Component />
						</RouteTransition>
					))
				}
			</AnimateRoutes>
		</React.Fragment>
	)
})