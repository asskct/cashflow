define(['styled-components'], function({ createGlobalStyle }) {
  const GlobalStyles = createGlobalStyle`
    * {
      padding: 0;
      text-decoration: none;
      box-sizing: border-box;
    }
   
    body {
      margin: 0;
      font-size: 1.15em;
      list-style-type: none;
      color: hsl(192, 90%, 9%);
      text-shadow: #333 0px 0px 0px;
      font-family: 'Poppins', sans-serif;
      background: ${({ theme }) => theme.colors.body};
    }

    h2 {
      padding: 0;
      font-size: 0.9em;
    }

    h4 {      
      padding: 5px 5px 0 5px;
      margin: 0;
      font-size: 0.75em;
      & > a {
        color: coral;       
      }
    }
  
    p {
      opacity: 0.6;
      line-height: 1.5;
    }
 
    img {
      max-width: 100%;
    }

    i {
      color: ${({ theme }) => theme.colors.body}; 
    }
  `

  return GlobalStyles
})