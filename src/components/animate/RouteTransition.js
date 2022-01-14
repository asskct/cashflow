define([
  'react',
  'react-router-dom',
  'jsx!src/auth/AuthContext',
  'jsx!src/components/animate/MountTransition',

], (React, RouterDOM, { useAuth }, MountTransition) => {
  function RouteTransition({
    children,
    exact,
    path,
    slide = 0,
    slideUp = 0,
    ...rest
  }) {
    const { Route, Redirect } = RouterDOM
    const auth = useAuth()
    if (auth.user === null) return null

    return (
      (auth.user)
        ? (
          <Route exact={exact} path={path} {...rest}>
            <MountTransition slide={slide} slideUp={slideUp}>
              {children}
            </MountTransition>
          </Route>
        )
        : (
          <Redirect to={{ pathname: "/login", state: { from: rest.location } }} />
        )
    )
  }

  return RouteTransition
})