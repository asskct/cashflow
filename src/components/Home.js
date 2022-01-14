define([
	'react',
	'react-router-dom',
	'jsx!src/auth/AuthRoute',
	'jsx!src/auth/AuthContext'
],(React, { BrowserRouter, Switch, Link }, AuthRoute, { useAuth }) => function({ routes }) {
	const auth = useAuth()	
	return (
		<div>
			{/* <Link to="/">Home</Link>
			<Link to="/sobre">Sobre</Link>
			<Link to="/about">About</Link>	
			<button onClick={ async () => await auth.signOut() }	className="button is-success">LogOut</button> */}
			<BrowserRouter>
				<Switch>
					{
						routes.map((route, i) => (
							<AuthRoute
								key={i}
								{ ...route }/>
						))
					}
				</Switch>
			</BrowserRouter>
		</div>
	)
})