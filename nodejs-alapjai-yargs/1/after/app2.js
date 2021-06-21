const yargs = require('yargs');
const { id, producer, title } = require('./option');
const MovieService = require('./class/movies.service');
const movieService = new MovieService();

yargs
    .version('1.0.0')
    .usage('Usage: <command> [option]')
    .command({
        command: 'get',
        describe: 'Get all movies',
        handler: async () => console.log( await movieService.getAllMovies() )
    })
    .locale('en')
    .strict()
    .help()
    .parse();