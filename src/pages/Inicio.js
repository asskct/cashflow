
define([
	'react',
	'react-router-dom',
	'jsx!src/components/Icon',
	'jsx!src/components/Card',
	'jsx!src/components/Image',
	'jsx!src/components/chart/index',
	'jsx!src/components/styled/Flex.styled',
	'jsx!src/components/styled/Form.styled',
	'jsx!src/components/Input'
], (React, { Link }, IconSyled, StyledCard, ImageStyled, BarChart, FlexStyled, { FormStyled, FieldSetStyled }, Input) => function () { //class Sobre extends React.Component {=

	return (
		<React.Fragment>
			<StyledCard style={{ fontSize: "0.7em", height: "150px", }}>
				<BarChart />
			</StyledCard>

			<StyledCard style={{ fontSize: "0.7em", height: "70px", }}>
				<FlexStyled>
					<ImageStyled style={{ width: "50px" }} image="bbrasil.jpeg" />
					<ImageStyled style={{ width: "50px" }} image="bitau.png" />
					<ImageStyled style={{ width: "50px" }} image="bsantander.png" />
					<ImageStyled style={{ width: "50px" }} image="nubank.png" />
					<ImageStyled style={{ width: "50px" }} image="bbradesco.jpeg" />
				</FlexStyled>
			</StyledCard>

			<FlexStyled>
				<Link to="/sobre">
					<IconSyled icon="fas fa-exchange-alt" label="Transferências" style={{ color: "#000033" }} />
				</Link>
				<Link to="/sobre">
					<IconSyled icon="fas fa-barcode" label="Pagamentos" style={{ color: "#000033" }} />
				</Link>
				<Link to="/sobre">
					<IconSyled icon="fas fa-hand-holding-usd" label="Recebimentos" style={{ color: "#000033" }} />
				</Link>
				<Link to="/sobre">
					<IconSyled icon="fas fa-chart-line" label="Investimentos" style={{ color: "#000033" }} />
				</Link>
				<Link to="/sobre">
					<IconSyled icon="fas fa-comments-dollar" label="Resgates" style={{ color: "#000033" }} />
				</Link>
				<Link to="/sobre">
					<IconSyled icon="fas fa-book-open" label="Agenda" style={{ color: "#000033" }} />
				</Link>
			</FlexStyled>

       <br/>&nbsp;
	


		</React.Fragment >
	)

})