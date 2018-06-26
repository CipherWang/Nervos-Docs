# Nervos Docs

[docs.nervos.org]() is the documententation website for all the Nervos Network related components.
This repository is working as both the front page of Nervos Docs and an example for building other Nervos related docs.

## Docsify
Nervos Documentents are using an easy generated document site framework [Docsify](https://docsify.js.org/#/). It's an awesome project and we really appreciate the the contributor of this project.

### Files
Document files are written in Markdown language. Generally speaking, they should be placed inside of a `zh-CN` folder for the purpose of localization.

`index.html` is the only necessary file for starting a Docsify site. All the needed JavaScript configuration files are dynamicly involved from this repo.

`_navbar.md` and `_sidebar.md` are configurations for navigation bar and side bar. Their effective range are their current folder and all the subfolders. They should be inside of the `zh-CN` or `en-US` folder as well as the root folder.   
The one in the root folder should use the default language (zh-CN in our case).

## How to make another Nervos related document
1. run this script.
```
wget https://raw.githubusercontent.com/cryptape/Nervos-Docs/master/index.html -O index.html -q —show-progress
mkdir ./script/
wget https://raw.githubusercontent.com/cryptape/Nervos-Docs/master/script/utils.js -O ./script/utils.js -q —show-progress
wget https://raw.githubusercontent.com/cryptape/Nervos-Docs/master/script/main.js -O ./script/main.js -q —show-progress
wget https://raw.githubusercontent.com/cryptape/Nervos-Docs/master/script/common-setting.js -O ./script/common-setting.js -q —show-progress
```
2. Do some minor customizations
By configuring this part of code you can make some minor configurations, for detail please refer docsify's document (https://docsify.js.org/#/).
```
var customization = {
    name: 'NAME-OF-YOUR-DOCS', // name of this document
    //          E.g.: name: 'Nervos Network',

    homepage: 'YOUR-HOMEPAGE', // the markdown file you wanna use for home page
    //          E.g.: homepage: 'zh-CN/nervos.md',
}
```

3. Give it a try!

Install docsify-cli first.
```
yarn global add docsify-cli
```
If you havn't use yarn before, please refer here (https://yarnpkg.com/lang/en/docs/install/).
Then run this command to start the document site service.
```
docsify serve
```
4. More...

You also need to add _navbar.md and _sidebar.md as mentioned above. You can take the files in this repo for an example.

## Localization (Translation)
