'use strict';

const fs = require('fs');
const fsExtra = require('fs-extra');
const path = require('path');
const compare = require('compare-versions');

module.exports = {
    load()
    {
        const project_path = Editor.Project.path;
        const assets_dir = path.join(project_path, "assets");
        const api_dir = "wortal-api";
        const build_dir = "build-templates";
        const demo_dir = "wortal-demo";

        let PACKAGE_NAME = "Wortal Cocos 2x";
        let version = "";
        let editor = Editor.App.version;
        log("Detected editor version: " + editor);

        if (compare.compare(editor, "2.3.2", ">=") && compare.compare(editor, "2.3.4", "<="))
        {
            version = "2.3";
        } else if (compare.compare(editor, "2.4.0", ">=") && compare.compare(editor, "2.4.10", "<="))
        {
            version = "2.4";
        } else
        {
            error("Version not supported: " + editor);
        }

        if (!fs.existsSync(path.join(project_path, "packages/" + PACKAGE_NAME)))
        {
            log("Package not downloaded from Cocos Store, changing extension directory..");
            PACKAGE_NAME = "Wortal Cocos 2x";
        }

        const static_templates = path.join(project_path, "packages/" + PACKAGE_NAME + "/templates/");
        const versioned_templates = path.join(static_templates + version + "/");

        const assets = [
            {
                src: path.join(versioned_templates, build_dir),
                dest: path.join(project_path, build_dir)
            },
            {
                src: path.join(static_templates, api_dir),
                dest: path.join(assets_dir, api_dir)
            },
            {
                src: path.join(static_templates, demo_dir),
                dest: path.join(assets_dir, demo_dir)
            },
        ];

        log("Copying assets..");
        assets.forEach(value =>
        {
            if (fsExtra.pathExistsSync(value.dest) === true)
            {
                log("Overwriting asset: ", value.dest);
            }
            fsExtra.copySync(value.src, value.dest);
        });
        log("Asset copying complete.");

        function log(msg)
        {
            return console.log(`[${PACKAGE_NAME}] ` + msg);
        }

        function error(msg)
        {
            return console.error(`[${PACKAGE_NAME}] ` + msg);
        }
    },

    unload()
    {
        console.log("[Wortal] Extension disabled.");
    },
};
