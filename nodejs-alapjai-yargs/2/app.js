const yargs = require('yargs');
const { count } = require('./option');
const { dbFilePath, propName } = require('./config');
const ProductsAPI = require('./product.api');
const ProductsService = require('./product.service');

const productApi = ProductsAPI(dbFilePath, propName);
const { 
    sum, 
    avg, 
    lessthan } = ProductsService(productApi);

yargs
  .version('1.0.0')
  .usage('Usage: $0 <command> [options]')
  .command({
    command: 'sum',
    describe: 'Adds up all the prices of the products',
    handler: async () => console.log(await sum())
  })
  .command({
    command: 'avg',
    describe: 'Calculates the average price of the products',
    handler: async () => console.log(await avg())
  })
  .command({
    command: 'lessthan',
    describe: 'Lists the products of which \'count\' is less than the number given',
    builder: { count },
    handler: async (args) => console.log(await lessthan(args.count))
  })
  .locale('en')
  .strict()
  .help()
  .parse()