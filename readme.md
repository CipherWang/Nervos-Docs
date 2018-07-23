# Nervos Docs

[docs.nervos.org](https://docs.nervos.org/) is the documentation website for all the Nervos Network related components.
This repository is working as both the front page of Nervos Docs and an example for building other Nervos related docs.

## How to Make Another Nervos Document Website in Your Project Repo

### We use Docsify & Github Page
Nervos Documentents are using an easy generated document site framework [Docsify](https://docsify.js.org/#/). It's an awesome project and we really appreciate the the contributor of this project.

Document files are written in Markdown language.

We use github page for hosting our document sites. On the one hand it enables the realtime updating, version control and online editing; on the other hand, their server are much more relible than ours. After all they are actually Microsoft now.


### How to Orgnize the Files

#### Necessary Files for Docsify
`index.html` is the only HTML file needed. It includes the settings for version and language features, but right now they are NOT official feature, so if you need to use these two features you might need to find me in person.

`script/` folder has the configuration files.

`.nojekyll` prevents GitHub Pages from ignoring files that begin with an underscore '_'.

`_sidebar.md` are configurations for side bar. Its effective range are their current folder and all the subfolders.

#### Your Document Files
All the doc files should be along with the project codes and files, inside of the project repo. You can choose either the `repo-name/docs` folder for storing your docs, or the `gh-pages branch`, due to the setting limitation of GitHub Page.

> Docs go with codes can make sure two things: every version of codes have the corresponding version of doc; reviewer can know if one changed code without chaging the doc.

The `repo-name/docs` or `gh-pages branch` should be organized in a structure like this:
```
.
├── zh-CN (language)
    ├── V0.0.1 (version)
        ├── first.md
        ├── second.md
        └── third.md
    └── V0.0.2 (version)
        ├── first.md
        ├── second.md
        └── third.md
```

If you want to link to one of the markdown files, the path would be something like: `[First Markdown](first)`

#### Sidebar Files
You can learn how do it by just simply refering the `_sidebar.md` file in this repo(Nervos-Docs) as an example. I don really wanna explain it and I believe you can figure it out yourself. ;)

### How to make the website
Install docsify-cli.
```
yarn global add docsify-cli
```
If you havn't use yarn before, please refer here (https://yarnpkg.com/lang/en/docs/install/).

Get the necessary site files.
```
git clone https://github.com/cryptape/Nervos-Docs.git
```
Do some customizations by configuring the `script/customization-seting.js` and `script/customization-value.js`.

Then run this command to start the document site service.
```
docsify serve
```
Open your browser and enter `http://localhost:3000/` to preview your document site.


### How to put it on Github Page
Upgrade it to your project repo, in the `repo-name/docs` folder on master branch or `gh-pages` branch. 

Enable the GitHub page in your repo setting.

Done and check it out!

### Localization (Translation)
We are still experimenting how to do the localization for all project effectively. 
