'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
const semver = require('semver');
var constant = require('./constant');

module.exports = class extends yeoman{
    constructor(args, opts) {
        super(args, opts);
        this.log('Initializing...');
      }
    
    promptUser(){
        const done = this.async();
 
        // have Yeoman greet the user
        console.log(this.yeoman);
 
        this.prompt([
            {
                type    : 'list',
                name    : 'typePage',
                message : 'Which page would you generate?',
                choices : [
                    {
                        name    : 'About Us',
                        value   : constant.PAGE_TYPE.ABOUT_US
                    },
                    {
                        name    : 'home page',
                        value   : constant.PAGE_TYPE.DEFAULT
                    }
                ]
            }
        ]).then( (answer) => {
            this.typePage = answer.typePage;
            done();
        })
        
 
    }
    // const s = generator.homepage.trim().replace(' ', '-').replace('_', '-');
    // const componentName = _.kebabCase(s).toLowerCase();
    // const componentDirName = _.kebabCase(s).toLowerCase();

    // const ng2TemplateDir = `angular/${generator.templateDir}`;

    scaffoldFolders (){
        this.destinationRoot("app/src/home");
        // // HTML TEMPLATE
        // generator.template(
        //     `${ng2TemplateDir}src/main/webapp/app/element/element.component.html`,
        //     `${webappDir}app/${componentDirName}/${componentName}.component.html`
        // );


        // // COMPONENT
        // generator.template(
        //     `${ng2TemplateDir}src/main/webapp/app/element/element.component.ts`,
        //     `${webappDir}app/${componentDirName}/${componentName}.component.ts`
        // );


        
    }

    copyMainFiles (){
        if(this.typePage == constant.PAGE_TYPE.DEFAULT){
            this.fs.copyTpl(
                this.templatePath('home/index.html'),
                this.destinationPath('home.html'),
                {
                // {`<div>
                //     <img src="ttd.png">
                //     <div>
                //       <p>${message}" saya "${answers.name}" karakter favorite saya adalah "${answer.like}"</p>
                //     <div>
                //   <div>`
                   message : `<div>
                                <img src="ttd.png">
                                    <div>
                                        <p>`+ this.typePage+`</p>
                                    </div>
                                </div>` +"<h1> sadjsjai </h1>",
                                typene : "HI"
                },
                this.destinationPath('home.html')
                {
                    // MODULE
                    'home'.template(
                        `${ng2TemplateDir}src/main/webapp/app/element/element.module.ts`,
                        `${webappDir}app/${componentDirName}/${componentName}.module.ts`
                    );
                }
              );
        }
        
        // this.copyTpl("home/_footer.html", "app/footer.html");
        // this.copyTpl("home/_gruntfile.js", "Gruntfile.js");
        // this.copyTpl("home/_package.json", "package.json");
        // this.copyTpl("home/_main.css", "app/css/main.css");    
     
        // var context = { 
        //     site_name: this.typePage 
        // };
     
        // this.template("home/_header.html", "app/header.html", context);
    }
    // generateMenu (){
    //     var menu = this.read("home/_menu.html");
     
    //     var t = '<a><%= name %></a>';
    //     var files = this.expand("app/sections/*.html");
     
    //     for (var i = 0; i < files.length; i++) {
    //         var name = this._.chain(files[i]).strRight("_").strLeftBack(".html").humanize().value();
       
    //         var context = {
    //             name: name,
    //             id: this._.classify(name)
    //         };
       
    //         var link = this.engine(t, context);
    //         menu = this.append(menu, "div.menu", link);
    //     }
     
    //     this.write("app/menu.html", menu);
    // }
    // runNpm () {
    //     var done = this.async();
    //     this.npmInstall("", function(){
    //         console.log("\nEverything Setup !!!\n");
    //         done();
    //     });
    // }
    
}
