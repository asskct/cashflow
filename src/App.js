define([
	'react',
	'react-dom',
	'jsx!src/Routes',
	'react-router-dom',
	'styled-components',
	'jsx!src/auth/Login',
	'jsx!src/auth/AuthRoute',
	'jsx!src/auth/AuthContext',
	'jsx!src/components/Header',
	'jsx!src/components/StatusBar',
	'jsx!src/components/styled/Global',
	'jsx!src/components/styled/Container.styled'
], (React, ReactDOM, Routes, { BrowserRouter, Switch, Route }, { ThemeProvider }, Login, AuthRoute, { AuthProvider }, Header, StatusBar, GlobalStyles, Container) => {

	const theme = {
		colors: {
			color: "coral",
			body: "#fff",
			footer: "#003333",
			header: "#ebfbff",
			border: {
				input: "#003333"
			}
		},

		mobile: "768px"
	}

	ReactDOM.render(
		<AuthProvider>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<BrowserRouter history={history}>
					<Header />
					<Container>
						<Switch>
							{Routes.map((route, i) => (<AuthRoute key={i} {...route} />))}
							<Route path="/login" component={Login} />
						</Switch>
					</Container>
					<StatusBar />
				</BrowserRouter>
			</ThemeProvider>
		</AuthProvider>, document.getElementById('root')
	)
})
