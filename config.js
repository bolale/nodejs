

var environments = {};

environments.staging = {
	'port' : 3002,
	'envName' : 'staging'
};

environments.production = {
	'port' : 5002,
	'envName' : 'production'
};

var currentEnvironment = typeof(process.env.NODE_ENV) == 'staging' ? process.env.NODE_ENV.toLowerCase() : '';
environmentExport = typeof(environments[currentEnvironment]) == 'object' ? environments[currentEnvironment] : environments.staging;

module.exports = environmentExport;
