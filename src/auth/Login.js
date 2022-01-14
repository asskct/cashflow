define([
	'react',
	'react-router-dom',
	'jsx!src/auth/AuthContext',
	'jsx!src/components/Input',
	'jsx!src/components/styled/Form.styled',
], (React, routerDOM, { useAuth }, Input, { FieldSetStyled, ButtonStyled, LoginStyled, FormStyled }) => function Login() {

	const { useState, useEffect } = React
	const { useHistory, useLocation } = routerDOM

	const history = useHistory()
	const location = useLocation()

	const [creds, setCreds] = useState({
		ano: String(new Date().getFullYear()),
		email: "",
		password: "",
	})

	const [visible, setVisible] = useState(null)

	const [loading, setLoading] = useState(false)

	const [error, setError] = useState(null)

	const auth = useAuth()

	useEffect(() => {
		if (auth.user) history.replace(location.state ? location.state.from : '/')
	}, [auth.user])

	const onChange = (e) => {
		setCreds((prevCreds) => ({
			...prevCreds,
			[e.target.name]: e.target.value,
		}))
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			await auth.signIn(creds.email, creds.password, creds.ano)
		} catch (e) {
			console.error(e)
			setError(e.message)
			setLoading(false)
		}
	}

	return (
		<div style={{
			display: "flex",
			padding: "30px",
			margin: "50% auto",
			borderRadius: "20px",
			flexDirection: "column",
			boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)",
			backgroundColor: "#ebfbff",
		}}>
			<FormStyled onSubmit={handleSubmit}>
				<FieldSetStyled>
					<Input name="ano" textAlign="center" size="30" placeholder="Ano" value={creds.ano} onChange={onChange} />
				</FieldSetStyled>
				<FieldSetStyled>
					<Input name="email" type="email" label="Email" size="30" placeholder="Email" value={creds.email} onChange={onChange} icon="fas fa-envelope" />
				</FieldSetStyled>
				<FieldSetStyled>
					{
						(visible === null)
							? (
								<Input name="password" type="password" label="Senha" size="30" icon="fas fa-eye" placeholder="Senha" onClick={() => setVisible(false)} onChange={onChange} value={creds.password} />
							)
							: (
								<Input name="password" label="Senha" size="30" icon="fas fa-eye-slash" placeholder="Senha" onClick={() => setVisible(null)} onChange={onChange} value={creds.password} />
							)
					}
				</FieldSetStyled>
				<FieldSetStyled>
					<ButtonStyled>Entrar</ButtonStyled>
				</FieldSetStyled>
			</FormStyled>
		</div>
	)
})