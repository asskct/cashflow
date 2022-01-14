requirejs.config({
  paths: {
    'scr': './src',
    'jsx': '/libs/js/jsx',
    'font-awesome': './libs/js/font-awesome.5.11.2',
    'recharts': 'https://unpkg.com/recharts/umd/Recharts',
    'react': 'https://unpkg.com/react@17/umd/react.development',
    'react-dom': 'https://unpkg.com/react-dom@17/umd/react-dom.development',
    'babel': 'https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min',
    'framer-motion': 'https://cdn.jsdelivr.net/npm/framer-motion@5.5.6/dist/framer-motion',
    'prop-types': 'https://cdnjs.cloudflare.com/ajax/libs/prop-types/15.7.2/prop-types.min',
    'react-router-dom': 'https://unpkg.com/react-router-dom@5.2.0/umd/react-router-dom.min',
    'styled-components': 'https://cdnjs.cloudflare.com/ajax/libs/styled-components/5.3.3/styled-components.min',
    'react-is': 'https://cdnjs.cloudflare.com/ajax/libs/react-is/0.0.0-experimental-3dc41d8a2-20211223/umd/react-is.development',
  }
})

require(['jsx!src/App', 'font-awesome'])