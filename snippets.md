For vscode snippet docs: [what are snippets](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_builtin-snippets), [create a snippet](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_create-your-own-snippets), [syntax](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_snippet-syntax)

# Table of Content:
- [VSCode doc](#vscode-doc)
- [Snippets in This Repo](#this-adds-the-following-snippets)
- [How to add user configured snippets to your vscode](#how-to-add-user-configured-snippets-to-your-vscode)

## VSCode doc
For vscode snippet docs: [what are snippets](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_builtin-snippets), [create a snippet](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_create-your-own-snippets), [syntax](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_snippet-syntax)

## This adds the following snippets:

### "comp"
> ! Creates a template for a React Functional Component! (TS-> with props, JS-> without)
> 
> With the name of the file as the component name!
### "hook"
> ! Simliar to comp, this creates a React hook
>
> With the name of the file! (a hook file should of course be useMyHook, i.e the same name as the hoook)
### "useEffect"
> ! creates a more neat useEffect snippet, without a built-in cleanup
### "imp"
> ! Lets you first write the **path** from which you want to import, and only afterwards the content you're importing! (that way you should have vscode's intelisense for completion)
### "async() anonymous"
> Creates the snippet `(()=>{$cursor_is_here})();`
> Note: lately anonymous async functions are (happily) not useful, so you may not understand why.

For more info about each one, go see [./snippets.jsonc](snippets.jsonc)!

## How to add user configured snippets to your vscode
- press `ctrl`+`shift`+`p`
- write "configure user snippets"
- select the relevant option to create a new global snippets file


### About my-console.log
It's a console log snippet that is also [keybinded](keybindings.jsonc) to ctrl+shift+c
