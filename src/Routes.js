define([
	'react',
	'jsx!src/pages/Inicio',
	'jsx!src/pages/Sobre',
	'jsx!src/pages/Estrutura',
	'jsx!src/components/Planejamento',
	'jsx!src/pages/ReceitasPrevistas',
	'jsx!src/pages/DespesasPrevistas',
], (React, Inicio, Sobre, Estrutura, Planejamento, ReceitasPrevistas, DespesasPrevistas) => [
	{
		exact: true,
		path: "/",
		component: Inicio,
	},
	{
		path: "/planejamento",
		component: Planejamento,
		routes: [
			{
				exact: true,
				path: "/planejamento",
				Component: Estrutura,

			},
			{
				exact: true,
				path: "/planejamento/despesas",
				Component: DespesasPrevistas,
			},
			{
				exact: true,
				path: "/planejamento/receitas",
				Component: ReceitasPrevistas,
			},
			{
				exact: true,
				path: "/planejamento/investimentos",
				Component: Sobre,
			},
		]
	},
	{
		path: "/sobre",
		component: Sobre,
	},
])