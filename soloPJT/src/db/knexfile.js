// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
	// client: "postgresql",
	development: {
		client: "postgresql",
		connection: process.env.DB_URL || {
			database: "childapp",
			user: "user",
			// port: 8080,
			// password: "password",
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: "knex_migrations",
			directory: "./migrations",
		},
		seeds: { directory: "./seeds" },
	},

	production: {
		client: "postgresql",
		connection: {
			database: "my_db",
			user: "username",
			password: "password",
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: "knex_migrations",
			directory: "./migrations",
		},
		seeds: { directory: "./seeds" },
	},
};
