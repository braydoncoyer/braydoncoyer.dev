---
title: "My VSCode Toolbox - 2020"
publishedAt: "2020-11-16"
summary: "Here's a list of my VSCode extensions in 2020."
image: "/static/images/my-vscode-toolbox-2020/banner.png"
---

There are a plethora of options when it comes to code editors, especially for front-end developers. I've tried Atom, Sublime Text, Webstorm - you name it. While each editor has its own strengths, I find myself coming back to VSCode purely for its level of customization.

As 2020 wraps up, I thought it would be interesting to cover my personal setup so you can take a look into how I work and so that I can look back in 2021 and see what's changed.

Let's dive in!

### Theme

Let's start with the big one. There's no lack of themes with VSCode. I prefer a dark theme and I've settled on [Sarah Drasner's Night Owl](https://marketplace.visualstudio.com/items?itemName=sdras.night-owl) . It is extremely pleasing to the eye and special thought was put into color selection and contrast in terms of reading comprehension.

If you're not a fan of dark themes, Sarah created a light option too.

![Screen Shot 2020-11-16 at 9.28.04 AM.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1605540495518/ya9W11tMV.png)

### Extensions

This is where functionality really comes into play. Extensions allow you to add features into VSCode to fit your productivity.

Here's a list of my installed extensions:

#### [VSCode Great Icons](https://marketplace.visualstudio.com/items?itemName=emmanuelbeziat.vscode-great-icons)

Just like the case with themes in VSCode, there are plenty of icon packs too. I use this icon pack and think it looks pretty good.

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1605540571985/r5w8MpjK_.png)

#### [Auto Close Tags](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)

This one is really handy and likely an extension that most people have. When you close the opening tag of an element, this extension automatically includes the closing tag.

![autoclose.gif](https://cdn.hashnode.com/res/hashnode/image/upload/v1605540638133/PpLiTwLxf.gif)

#### [Auto Rename Tags](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)

Made by the same developer as Auto Close Tags, this extensions allows you to rename a pair of HTML tags.

![autorename.gif](https://cdn.hashnode.com/res/hashnode/image/upload/v1605540676970/Deyo4A6Ef.gif)

#### [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2)

This amazing extension allows matching brackets to be identified with the same color and makes it way easier to find that rouge closing bracket.

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1605540690645/CjsG7crOf.png)

#### [Indent Rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow)

This is one of my favorites. This extension colorizes the indentation in front of your text so better see distinction in code-blocks.

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1605540705867/xP8CoBRVZ.png)

#### [iTunes & Apple Music Player](https://marketplace.visualstudio.com/items?itemName=PsykoSoldi3r.itunes-vscode)

Perhaps one of the crazier extensions out there, this one allows you to control your music inside of VSCode. Am I too lazy to simply open the Music app and pause the track? Yes. Yes I am.

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1605540716984/2Sn3cV8gH.png)

#### [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

I use Tailwind almost daily, and this extension brings autocomplete, syntax highlighting
and linting which saves you a lot of headache. It was made by Brad Cornes, who now works for Tailwind. Pretty neat!

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1605540734633/PRiW8lw_w.png)

#### [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

The classic option for formatting your code.

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1605540766316/CePT8BDZf.png)

#### [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

Another classic option for code linting.

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1605540790065/Vji8YJ6au.png)

#### [Docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)

If you use Docker, this official plugin from Microsoft allows you to easily build, manage, and deploy containerized applications from VSCode.

![docker.gif](https://cdn.hashnode.com/res/hashnode/image/upload/v1605540809607/_WwAXMZnB.gif)

### VSCode Settings

When I'm in the groove, I prefer to remove as many distractions as I can so I can focus on what is in front of me. Because of this, I've changed some minor things in the editor to aid in that endeavor, like moving the file editor panel to the right-hand side of the application, and utilizing shortcuts to quickly show/hide pieces of the editor.

```javascript
{
  ...
  "editor.fontSize": 16,
  "workbench.sideBar.location": "right",
  "editor.formatOnPaste": true,
  "editor.quickSuggestionsDelay": 0
}
```

After applying these settings, VSCode looks like this.

![Screen Shot 2020-11-16 at 9.36.00 AM.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1605540969759/qQEtbqFRR.png)

### Conclusion

What themes, extensions and settings do you use in VSCode? Feel free to drop your preferences in the comments below!

Thanks for reading! If you liked this article and want more content like this, read some of my [other articles](https://braydoncoyer.dev/blog), and make sure to follow me on [Twitter](https://twitter.com/BraydonCoyer)!
