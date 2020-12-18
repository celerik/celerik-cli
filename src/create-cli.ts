// @packages
import yargs from 'yargs';

// @scripts
import { log } from '@app/utils';

export function createCli(argv: Array<string>): yargs.Arguments {
    const cli = yargs(argv).parserConfiguration({
        'boolean-negation': false,
    });

    cli.scriptName('celerik')
        .usage('Usage: $0 <command> [options]')
        .alias('h', 'help')
        .alias('v', 'version')
        .option('verbose', {
            default: false,
            type: 'boolean',
            describe: 'Turn on verbose output',
            global: true,
        });

    return cli
        .command({
            command: 'create [rootPath] [starter]',
            describe: 'Create a new project with @celerik/cli',
            aliases: ['c'],
            handler: ({ rootPath, starter }) => {
                log.DEBUG(rootPath);
                log.DEBUG(starter);
            },
        })
        .demandCommand(1, 'Pass --help to see all available commands')
        .strict()
        .parse(argv.slice(2));
}
