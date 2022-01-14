define([
  'react',
  'react-router-dom',
  'framer-motion'
], (React, { Switch, useLocation }, { AnimatePresence }) => {
  function AnimateRoutes({
    children,
    exitBeforeEnter = true,
    initial = false,
  }) {
    const location = useLocation()
    return (
      <AnimatePresence exitBeforeEnter={exitBeforeEnter} initial={initial}>
        <Switch location={location} key={location.pathname}>
          {children}
        </Switch>
      </AnimatePresence>
    )
  }

  return AnimateRoutes
})