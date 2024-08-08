Table of Content:
1. [Assumptions = הנחות יסוד](-=-assumptions#הנחות-יסוד)
2. [Snippets list](#snippets-list)
3. [Extenstions list](#extensions-list)
3. [Extensions list - with details & description](#extensions-list-with-details-and-description)
5. [Running this project (hint: don't)](#running-this-project)
6. [Want to add an extention?](#how-to-contribute)


# Assumptions = הנחות יסוד
1. The command pallette (opened with `ctrl`+`shift`+`p`) has all commands (command that are bind to keyboard shortcuts and commands that are not)
2. The extensions can be opened with `ctrl`+`shift`+`x`
3. Intellisense is vs-code's completion menu that tries to complete your sentence (- your line of code)

# Snippets List
Notice the [snippets.md](snippets.md) file for vscode user-configured snippets.

# Extensions List
  - [IntelliCode](#intellicode)
  - [Code Spell Checker](#code-spell-checker)
  - [Live Share](#live-share)
  - [TabOut](#tabout)
  - [To](#to)
  - [GitLens](#gitlens)
  - [Git Graph](#git-graph)
  - [GitHub Pull Requests and Issues](#github-pull-requests-and-issues)
  - [File Utils](#file-utils)
  - [javascript console utils](#javascript-console-utils)
  - [Auto Add Brackets in String Interpolation](#auto-add-brackets-in-string-interpolation)
  - [Auto rename tag](#auto-rename-tag)
  - [ES7 React/.../React-Native Snippet](#es7-reactreact-native-snippet)
  - [Better comments](#better-comments)
  - [Color Highlight](#color-highlight)
  - [Indent rainbow](#indent-rainbow)
  - [Bookmarks](#bookmarks)
  - [Split HTML attributes](#split-html-attributes)
  - [Copy Relative Path and Line Numbers](#copy-relative-path-and-line-numbers)
  - [Bracket Peek ](#bracket-peek)
  - [Svg Preview](#svg-preview)
  - [Theme by language](#theme-by-language)
  - [CSS peak](#css-peak)
  - [Inline Parameters for VSCode](#inline-parameters-for-vscode)
  - [Paste JSON as Code](#paste-json-as-code)
  - [Color Assist](#color-assist)
  - [JSON Trailing Comma Trimmer](#json-trailing-comma-trimmer)
  - [Bracketeer](#bracketeer)
  - [Azure Databases (for MongoDB)](#azure-databases-for-mongodb)
  - [Twoslash Query Comments](#twoslash-query-comments)
  - [Pretty TypeScript Errors](#pretty-typescript-errors)
  - [Error Lens](#error-lens)
  - [Quokka](#quokka)

## Extensions List with Details and Description

> The names here are the exact names of the extensions in the vscode's extensions marketplace (`ctrl`+`shift`+`x` in vscode)


---
### IntelliCode
Comes from **Microsoft**. 

Adds intellisense which is created from data of millions of users. it guesses good...

https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode

---
### Code Spell Checker
Will add a curly underline sign on words that are not spelled correctly. Helps prevent "typo"s

VERY SUGGESTED

> (even for english speakers)

> I once wrote a short doc about a certain function, and at the end I noticed (thanks to this extension) that I mis-spelled the word "function" three times, in THREE different ways in one paragraph.

https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker

---
### Live Share
To see other's vscode on your vscode.

Enables you to quickly collaborate with a friend on the same code without the need to sync code or to configure the same development tools, settings, or environment.

* Instead of looking at code from one computer on a small screen - share the code from the one computer to the other and view the **same** code on different screens/computers.
* If you have a different theme in vscode, while live-sharing: each person will see the files in the theme that's in their vscode

https://code.visualstudio.com/blogs/2017/11/15/live-share

---
### TabOut

Use the `tab` key to get out of quotes, brackets, etc.

e.g if this: `|` is your cursor and you're here: `someFunc(value|)`. Without the extension, you need to press the `right-arrow` key. With the extension you would also be able to press the `tab` key. It's very intuitive once you try it (:

https://marketplace.visualstudio.com/items?itemName=albert.TabOut

---
### To
Convert any text to camelCase, to UPPER_CASE, to snake_case, to kebab-case and more

https://marketplace.visualstudio.com/items?itemName=amih90.to

--- 
### GitLens
Description: Supercharge Git within VS Code — Visualize code authorship at a glance via Git blame annotations and CodeLens, seamlessly navigate and explore Git repositories, gain valuable insights via rich visualizations and powerful comparison commands, and so much more

https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens

--- 
### Git Graph
Adds a button at the bottom nav bar and on the Source Control top bar that opens the current git history (log) as a graph 

https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph


---
### GitHub Pull Requests and Issues
If  you go over Pull Requests in GitHub, this is a very suggested extension for PR review

https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github

---
### File Utils
delete / rename / ... current file via the command pallette!


https://marketplace.visualstudio.com/items?itemName=sleistner.vscode-fileutils

---
### javascript console utils
Adds a keyboard shortcut (default to `ctrl` + `shift` + `l`) which writes: `console.log()`. 
And when a variable is selected, writes `console.log(“var: “, var);`.

> There are several console.log extensions, you're welcome to find the one you prefer.

> You can also checkout how to do this on you own, using vscode's user configured keybindings and snippets

https://marketplace.visualstudio.com/items?itemName=whtouche.vscode-js-console-utils

---

### Auto Add Brackets in String Interpolation
If you type a dollar sign (`$`) inside backtick brackets (` `` `) it will add the curly brackets for you

i.e ``` `typingHere` ``` -> writing a `$`: `$typingHere` -> will turn into ``` `${typingHere...}` ```

https://marketplace.visualstudio.com/items?itemName=aliariff.auto-add-brackets


---
### Auto rename tag
When changing the _opening_ html/jsx tag, the _closing_ tag will automatically change in parallel (and vice-versa).

> vscode's F2 does this, check for yourself whether you need this extension

https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag

---
### ES7 React/.../React-Native Snippet
Words or a combination of letters which you can write in your code and the VSCode Intellisense (_the menu trying to complete your sentences_) will provide you with options from the React Snippet library, which, when selected, will open (surprisingly) a SNIPPET.

\> *many combinations*. Check the extension docs.

https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets

---
### Better comments
Colors your comment!

`!` = red, `?` = blue, `todo` = orange, `*` = green, `/` = strike & grey.

\> *this extension has interesting stuff in it's settings*

https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments

---
### Color Highlight
Colors the background of a color-code according to the color (e.g. #1464d4).

![example](./color-highlight-example.png)

https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight

---
### Indent rainbow
Colors indentations in your code. Can be limited to certain file types, for example it's nice to limit it to .scss files.


---
### Bookmarks
With keyboard shortcuts, can add/remove/go-to-next/go-to-previous/show all/... bookmarks (according to where your cursor currently is). Plus there's a list of all your bookmarks.

https://marketplace.visualstudio.com/items?itemName=alefragnani.Bookmarks


---
### Split HTML attributes
Splits html/jsx tags by attributes, so that each prop is on a new line (or the opposite: puts all attributes on the same line).

**There are two similar extensions for this, the suggested one is called: 'Split HTML Attributes (Vue, React, Angular)'**

https://marketplace.visualstudio.com/items?itemName=dannyconnell.split-html-attributes

---
### Copy Relative Path and Line Numbers
Adds a keyboard shortcut (or use via the command pallette) that copied your current relative path and line number

e.g `"./src/components/HomePageButton.tsx:28"`

https://marketplace.visualstudio.com/items?itemName=ezforo.copy-relative-path-and-line-numbers


---

### Bracket Peek 
(TRY THIS!!!)
When your cursor is on or is hovered on a closing bracket, this extension will show you what the opening bracket looks like. e.g if there's a big and scoped function and your working somewhere in the middle, it'll show you what's going on in the _opening bracket_ your cursor (or hover) is on.

https://marketplace.visualstudio.com/items?itemName=jomeinaster.bracket-peek

---

### Svg Preview
... svg preview ... (right when you open a .svg file, it'll load the svg in a tab on your right)

---

### Theme by language
If you want your vscode Color Theme to change per file language (e.g ```.js```, ```.py```).
- you'll need to set it to what you want


---
### CSS peak
With the `ctrl` button pressed, hovering over an html/jsx className/class/id, a peek of the CSS code will appear.

---
### Inline Parameters for VSCode
Adds an inline display of the parameter names in functions.

![example](inline-params-example.png)

https://marketplace.visualstudio.com/items?itemName=liamhammett.inline-parameters


---
### Paste JSON as Code

Description: Copy JSON, paste as Go, TypeScript, C#, C++ and more.

https://marketplace.visualstudio.com/items?itemName=quicktype.quicktype


---
### Color Assist
Using special comments, this extension will color the background of the selected scope (between the two comments).

\> *Opening comment: `//#green`, closing comment: `//#`*

---
### JSON Trailing Comma Trimmer
opening the command palette, this extension will give you a command which removed trailing commas (```,```) in JSON file (or in current JSON object)

https://marketplace.visualstudio.com/items?itemName=logerfo.json-trimmer

---
### Bracketeer
Change bracket type

> using a keyboard shortcut or via the command pallette

https://marketplace.visualstudio.com/items?itemName=pustelto.bracketeer

---

### Azure Databases (for MongoDB)
Update database very easily

---

### Twoslash Query Comments
Allows you to see the types of different things in TypeScript by leaving a comment with `^?` pointing to what you want to see

![image](https://user-images.githubusercontent.com/116496520/227895007-8007d4db-f077-4abe-81a2-cd771800c925.png)

https://marketplace.visualstudio.com/items?itemName=Orta.vscode-twoslash-queries

---

### Pretty TypeScript Errors
Make TypeScript errors prettier and more human-readable in VSCode

![image](https://user-images.githubusercontent.com/56911506/235635643-e97148c0-86b6-4ff5-8955-7a4f011396d3.png)

https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors

---

### Error Lens
See errors inline as they happen, in addition to in a popup on hover.

![image](https://github.com/shanike/vscode-extensions/assets/56911506/01b42ddb-8596-4776-b404-6c2e3c067311)

https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens

---

### Quokka
A developer productivity tool for rapid JavaScript / TypeScript prototyping. Runtime values are updated and displayed in your IDE next to your code, as you type.

![image](https://github.com/user-attachments/assets/f47648e6-0f0b-4b4d-a291-b8d523975631)

https://marketplace.visualstudio.com/items?itemName=WallabyJs.quokka-vscode


## Extra Extenstions Here
- shell formatter (- formats bash/shell files, bcos there's no default format-document (= ctrl+shift+i) for .sh files)
- DotENV (- colors .env file content)
- Polacode (- takes nice code pictures)
- VSCode Progressive Increment (- select lines of numbers to increment all by 1 or 10 I think)


# Running this Project

This is an example repository only, an example which will 100% crash if "npm start"ed. so don't.

It exists mainly and only for this readme.

# How To Contribute
clone/fork, make a PR from your branch into main.
### Make sure to:
1. Fill me in on the extension you're planning to add to the list. (shani kehati on Slack/Email)
2. The name of the extension will be identical to the extention-id.
3. Add the new extension name (according to 2. ^) and description under [Extensions list - with details & description](#extensions-list-with-details-and-description)
4. Make sure to add both a description and the link of the extension ^ (in 3.)
5. Add the new extension name (according to 2. ^) under [Extenstions list](#extensions-list)
6. Make sure the link you added in 5. works
7. Submit the PR (:




