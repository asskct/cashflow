define([
	'react',
	'jsx!src/services/data',
	'jsx!src/components/Input',
	'jsx!src/auth/AuthContext',
	'jsx!src/components/styled/Form.styled',
], (React, { sortByKey, formatCurrency, getDadosCollection, addDataBatch }, Input, { useAuth }, { FieldSetStyled, FormStyled, ButtonStyled }) => function AberturaInicial() {

	const auth = useAuth()

	const { useState, useEffect } = React

	const [error, setError] = useState("")
	
	const [struct, setStruct] = useState(null)
	
	const [loading, setLoading] = useState(false)
	
	const [collection, setCollection] = useState(auth.ano)
	
	const [document, setDocument] = useState(["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"])
	
	const getData = async () => {
		const doc = await getDadosCollection(`control${collection}`)
		setStruct(doc.docs.map(doc => {
			const id = doc.id
			return { id, ...doc.data() }
		}))
	}

	const insertData = async () => {
		try {
			const estrutura = document.map((doc, i) => {
				return { collection: `control${collection}`, doc, mes: ++i, rep: 0, ref: 0, dep: 0, def: 0, inp: 0, inf: 0, }
			})
			await addDataBatch(estrutura)
			getData()

		} catch (e) {
			console.error(e)
			setError(e.message)
			setLoading(false)
		}
	}
	
	useEffect(() => {
		getData()
	}, [])

	const onChange = (e) => {
		setCollection(e.target.value)
		setStruct([])
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			getData()
		} catch (e) {
			console.error(e)
			setError(e.message)
			setLoading(false)
		}
	}

	if (struct === null) return null

	return (
		<React.Fragment>
			<hr />
			<h2>Planejamento da Estrutura de Dados</h2>
			<FormStyled onSubmit={handleSubmit}>
				<FieldSetStyled>
					<Input
						size="10"
						name="collection"
						textAlign="center"
						value={collection}
						onChange={onChange}
						label="Ano Financeiro"
						placeholder="Ano Financeiro"
					/>
				</FieldSetStyled>
			</FormStyled>
			{
				struct.length === 0
					? (
						<FieldSetStyled>
							<ButtonStyled onClick={insertData} style={{ padding: "5px 8px", marginTop: "10px", color: "coral" }}>Enviar</ButtonStyled>
							<hr width="100%" />
						</FieldSetStyled>
					)
					: (
						null
					)
			}
			<table width="100%" style={{ borderSpacing: "0", fontSize: "0.7em" }}>
				<thead>
					<tr style={{ textAlign: "right", background: "#fcfcfc" }}>
						<th style={{ textAlign: "center" }}>Id</th>
						<th>Receita Prevista</th>
						<th>Despesa Prevista</th>
						<th>Investimento</th>
					</tr>
				</thead>
				<tbody>
					{
						struct.sort(sortByKey(["mes"])).map((plano, i) => {
							return (
								<tr key={i} style={{ textAlign: "right" }}>
									<td style={{ textAlign: "center" }}>{plano.id}</td>
									<td>{formatCurrency(plano.rep, 2, ",", ".")}</td>
									<td>{formatCurrency(plano.dep, 2, ",", ".")}</td>
									<td>{formatCurrency(plano.inp, 2, ",", ".")}</td>
								</tr>
							)
						})
					}
				</tbody>
			</table><br />&nbsp;
		</React.Fragment>
	)
})