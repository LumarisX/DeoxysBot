module.exports = {
	apps:[
		{
			name: 'Deoxys-Bot',
			script: 'ts-node',
			args: 'src/index.ts',
			interpreter: 'node',
			interpreter_args: '-r tsconfig-paths/register',
			watch: true,
			ignore_watch: ['node_modules', 'logs'],
			env: {
				NODE_ENV: 'development'
			},
			env_production: {
				NODE_ENV: 'production'
			}
		}
	]
};
