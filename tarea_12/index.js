const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});
logger.error("probando el error con logger y winston")
module.exports = logger;
function suma(...parametros) {
    parametros.reduce((a,b) => a+b)
} 

try {
    const resultado = suma(2,3,4,5,6,8)
    console.log(resultado)
} catch (e) {
    throw new Error("Error!", {cause: e})
} finally {
    console.log("esto ocurre si o si")
}