// @packages
import fs from 'fs';
import { exec } from 'child_process';

// @scripts
import { log } from '@app/utils';
import boilerplates from '../boilerplates/celerik-boilerplates.json';

/**
 * Function to create a project based on the rootPath and starter selected.
 * @param {string} rootPath The path where the project baseline will be created.
 * @param {string} starter The baseline selected to clone.
 */
export function createProject(rootPath, starter) {
    try {
        if (boilerplates[starter]) {
            log.DEBUG(boilerplates[starter]);
            const boilerplateRepo = boilerplates[starter];
            if (!fs.existsSync(rootPath)) {
                fs.mkdirSync(rootPath);
            }
            exec(`cd ${rootPath} && git clone ${boilerplateRepo}`, (error, stdout, stderr) => {
                if (error) {
                    log.ERROR(`exec error: ${error}`);
                    return;
                }
                log.INFO(`stdout: ${stdout}`);
                log.ERROR(`stderr: ${stderr}`);
            });
        } else {
            log.INFO('The starter selected is not valid');
        }
    } catch (error) {
        log.ERROR(`An error has occurred: ${error}`);
    }
}
