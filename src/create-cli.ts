// @packages
import yargs from 'yargs';
import fs from 'fs';
import { exec } from 'child_process';

// @scripts
import boilerplates from './boilerplates/celerik-boilerplates.json';

// @types
type ObjectType = {
    rootPath: string;
    starter: string;
};

type BoilerplateType = {
    [key: string]: string;
};

export function createCli(argv: Array<string>): yargs.Arguments {
    const boilerplatesObject = <BoilerplateType>boilerplates;

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
            handler: ({ rootPath, starter }: ObjectType) => {
                try {
                    console.log(rootPath);
                    console.log(starter);
                    console.log(boilerplatesObject[starter]);
                    const boilerplateRepo = boilerplatesObject[starter];
                    if (!fs.existsSync(rootPath)) {
                        fs.mkdirSync(rootPath);
                        exec(`cd ${rootPath} && git clone ${boilerplateRepo}`, (error, stdout, stderr) => {
                            if (error) {
                                console.log(`exec error: ${error}`);
                                return;
                            }
                            console.log(`stdout: ${stdout}`);
                            console.error(`stderr: ${stderr}`);
                        });
                    } else {
                        console.log('This directory has already been created.');
                    }
                } catch (error) {
                    console.log(`${error}: An error has occurred`);
                }
            },
        })
        .demandCommand(1, 'Pass --help to see all available commands')
        .strict()
        .parse(argv.slice(2));
}
