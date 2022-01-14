define(['react', 'recharts', 'jsx!src/services/data', 'jsx!src/auth/AuthContext'], (
  React,
  {
    AreaChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Area,
    ResponsiveContainer,
  }, { sortByKey, getDadosCollection }, { useAuth }) => function () {

    const auth = useAuth()

    
    const { useState, useEffect } = React
    
    const [users, setUsers] = useState([])
    
    const [data, setData] = useState([])
    
    useEffect(() => {
      async function getData() {
        const doc = await getDadosCollection(`control${auth.ano}`)
        const dados = doc.docs.map(doc => {
          const name = doc.id
          const { mes, rep, dep } = doc.data()
          return { mes, name, rep, dep }
        })
        console.log(auth.ano)
        setData(dados.sort(sortByKey(["mes"])))
      }

      getData()

    }, [])

    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart width={768} height={350} data={data}
          margin={{ top: 10, right: 10, left: -5, bottom: 0 }}>
          <defs>
            <linearGradient id="colorRep" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorDep" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area type="monotone" dataKey="rep" stroke="#8884d8" fillOpacity={1} fill="url(#colorRep)" />
          <Area type="monotone" dataKey="dep" stroke="#82ca9d" fillOpacity={1} fill="url(#colorDep)" />
        </AreaChart>
      </ResponsiveContainer>
    )
  })