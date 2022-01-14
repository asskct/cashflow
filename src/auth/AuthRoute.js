define([
	'react',
	'react-router-dom',
  'jsx!src/auth/AuthContext'
], (React, RouterDOM, { useAuth } ) => ({component:Component, exact, path, ...rest}) => {
		const {Route, Redirect} = RouterDOM
		const auth = useAuth()
		if(auth.user === null) return null
		return (
			auth.user ? (
				<Route
					exact={exact}
					path={path}
					render={props => (<Component {...props} {...rest} />)}/>
			) : (
				<Redirect to={{ pathname: "/login", state: { from: rest.location } }}/>
			)
		)
	}
)