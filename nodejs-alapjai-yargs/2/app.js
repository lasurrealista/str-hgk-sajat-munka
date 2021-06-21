const yargs = require('yargs');
const { count } = require('./option');
const { dbFilePath, propName } = require('./config');
const ProductAPI = require('./product.api');
const ProductService = require('./product.service');

const productApi = ProductAPI(dbFilePath, propName);
( async () => {
  
  const { 
    sum, 
    avg, 
    lessthan } = await ProductService(productApi);

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
})();