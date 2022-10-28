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
// 
const doble = val => {
  if(typeof val === "number") {
    return 2 * val;
  }
  throw new Error("el tipo de valor tiene que ser un numero")
}


  try {
    const resultado = doble("d")
    console.log(resultado)
  }
 catch (error) {
  console.error(error)
} finally {
  console.log("se ejecuta si o si")
}