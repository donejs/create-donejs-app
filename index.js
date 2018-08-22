#!/usr/bin/env node
var meow = require("meow");
var mypkg = require("./package.json");
var utils = require("./utils");
var init = require("./init");

var cli = meow(`
	Usage
      $ create-donejs-app <folder>

    Options
      --skip-install, -S
      --type, -T
      --yes, -Y           Use only defaults and not prompt for any option
      --version           Show the version number and exit
      --help              Print this help message

    Examples
      $ create-donejs-app my-new-app --yes
`);

var f = cli.flags;
var options = {
	skipInstall: f.skipInstall || f.S,
	type: f.type || f.T,
	yes: f.yes || f.Y
};

var folder = cli.input[0] || ".";

utils.projectRoot()
.then(function(root) {
	utils.log(init(root, mypkg, folder, options));
})
.catch(function(err) {
	throw err;
});
