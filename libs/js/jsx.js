define(() => {
	'use strict'
	
	const buildMap = {}
	return {
		version: '1.0.0',
		options: {
			plugins: [
				['transform-react-jsx', { useBuiltIns: true }],
				["transform-object-rest-spread",{ useBuiltIns: true }]
			]
		},
		load: function(name, parentRequire, { fromText, error }, { isBuild }) {
			const url = parentRequire.toUrl(`${name}.js`)
			if(isBuild) {
				try {
					const text = require.nodeRequire('fs').readFileSync(url, 'utf8')
					const code = require.nodeRequire('babel-core').transform(text, this.options).code
					if(isBuild) buildMap[name] = code
					fromText(code)
				} catch(err) {
					error(err)
				}
			} else {
				parentRequire([
					'babel'
				],Babel => {
					fetch(url).then(resp => resp.text())
					.then(text => Babel.transform(text, this.options).code)
					.then(code => fromText(code))
					.catch(err => error(err))
				})
			}
		},
		write: function(pluginName, moduleName, { asModule }) {
			if(moduleName in buildMap) {
				asModule(`${pluginName}!${moduleName}`, buildMap[moduleName])
			}
		}
	}
})