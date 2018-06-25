# Nervos Docs

[docs.nervos.org]() is the documententation website for all the Nervos Network related components.

This repository has two functions:
* Storing the Nervos introduction documents
* working as a CDN for site configuration files

## Docsify
Nervos Documentents are using an easy generated document site framework [Docsify](https://docsify.js.org/#/). It's an awesome project and we really appreciate the the contributor of this project.

### Files
`index.html` is the only necessary file for starting a Docsify site. All the needed JavaScript configuration files are dynamicly involved from this repo.

Document files are written in Markdown language. Generally speaking, they should be placed inside of a `zh-CN` folder for the purpose of localization.

`_navbar.md` and `_sidebar.md` are configurations for navigation bar and side bar. Their effective range are their current folder and all the subfolders. They should be inside of the `zh-CN` or `en-US` folder as well as the root folder.   
The one in the root folder should use the default language (zh-CN in our case).

## To make another Nervos related document
1. Get the `index.html`.
You can get it from Gist. Or from this repo directly.
https://gist.github.com/Mine77/7ce611b4afbd24b83737dafe75bb0b03
Put it in your root folder.

2. Do some minor customization
By configuring this part of code you can make some minor configurations, for detail please refer [docsify's document](https://docsify.js.org/#/).
```
var customization = {
    name: 'NAME-OF-YOUR-DOCS', // name of this document
    //          E.g.: name: 'Nervos Network',

    homepage: 'YOUR-HOMEPAGE', // the markdown file you wanna use for home page
    //          E.g.: homepage: 'zh-CN/nervos.md',
}
```

3. Try!
Install docsify-cli first.
```
yarn global add docsify-cli
```
If you havn't use yarn before, please refer [here](https://yarnpkg.com/lang/en/docs/install/).

run this command to give it a try
```
docsify serve
```

4. More...
You also need to add `_navbar.md` and `_sidebar.md` as mentioned above. You can take the files in this repo for an example.

## Localization (Translation)
To write.