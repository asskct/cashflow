define([
	'react',
	'jsx!src/services/data',
	'jsx!src/auth/AuthContext',
	'jsx!src/components/Input',
	'jsx!src/components/styled/Form.styled',
], (
	React,
	{
		sortByKey,
		queryDados,
		formatCurrency,
		setControleBatch,
	},
	{
		useAuth,
	},
	Input,
	{
		FieldSetStyled,
		FormStyled,
		ButtonStyled
	}
) => function Receitas() {

	const auth = useAuth()

	const { useState, useEffect } = React

	const [error, setError] = useState("")

	const [loading, setLoading] = useState(false)

	const [dados, setDados] = useState(null);

	const [struct, setStruct] = useState({
		docIni: "",
		docFin: "",
		ano: auth.ano,
		value: "",
		descrit: "",
	})

	const [document, setDocument] = useState(["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"])

	const getData = async () => {
		const doc = await queryDados(`releases${auth.ano}`, "type", "dep")
		setDados(doc.docs.map(doc => {
			return { ...doc.data() }
		}))
	}

	const insertData = async () => {
		try {
			const { docIni, docFin, ...rest } = struct
			for (var ini, fin, i = 0; i < document.length; ((docIni === document[i]) ? (ini = i) : (docFin === document[i]) ? (fin = i) : null), ++i);
			for (var strut = [], i = ini; i <= fin; strut.push({
				type: "dep",
				doc: document[i],
				controle: `control${auth.ano}`,
				collection: `releases${auth.ano}`,
				dados: {
					name: document[i],
					type: "dep",
					mes: ++i,
					...rest
				}
			}));

			if (docIni === docFin)
				strut.push({
					type: "dep",
					doc: docIni,
					controle: `control${auth.ano}`,
					collection: `releases${auth.ano}`,
					dados: {
						name: document[i],
						type: "dep",
						mes: ++i,
						...rest
					}
				})

			await setControleBatch(strut)
			
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
		setStruct((prevStruct) => ({
			...prevStruct,
			[e.target.name]: e.target.value,
		}))
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

	if (dados === null) return null

	return (
		<React.Fragment>
			<hr />
			<h2>Planejamento das Despesas - {auth.ano}</h2>
			<FormStyled onSubmit={handleSubmit}>
				<FieldSetStyled>
					<Input
						size="7"
						textAlign="center"
						label="Mês Inicial"
						name="docIni"
						placeholder="Inicial"
						value={struct.docIni}
						onChange={onChange}
					/>
					<Input
						size="7"
						textAlign="center"
						label="Mês Final"
						name="docFin"
						placeholder="Final"
						value={struct.docFin}
						onChange={onChange}
					/>
					<Input
						size="15"
						textAlign="right"
						label="Valor"
						name="value"
						placeholder="Valor"
						value={struct.value}
						onChange={onChange}
					/>
					<Input
						size="42"
						label="Descrição da Receita"
						name="descrit"
						placeholder="Descrição da Receita"
						value={struct.descrit}
						onChange={onChange}
					/>
				</FieldSetStyled>
			</FormStyled>
			<FieldSetStyled>
				<ButtonStyled onClick={insertData} style={{ padding: "5px 8px", marginTop: "10px", color: "coral" }}>Enviar</ButtonStyled>
				<hr width="100%" />
			</FieldSetStyled>

			<table width="100%" style={{ borderSpacing: "1", fontSize: "0.7em" }}>
				<thead>
					<tr style={{ textAlign: "right", background: "#fcfcfc" }}>
						<th style={{ textAlign: "center" }}>Id</th>
						<th style={{ textAlign: "left" }}>Descrição</th>
						<th>Valor</th>
					</tr>
				</thead>
				<tbody>
					{
						dados.sort(sortByKey(["mes"])).map((plano, i) => {
							return (
								<tr key={i} style={{ textAlign: "right", borderBottom: "1px solid #000" }}>
									<td style={{ textAlign: "center" }}>{plano.name}</td>
									<td style={{ textAlign: "left" }}>{plano.descrit}</td>
									<td>{formatCurrency(plano.value, 2, ",", ".")}</td>
								</tr>
							)
						})
					}
				</tbody>
			</table>
			<br />&nbsp;
			<br />&nbsp;
		</React.Fragment>
	)
})