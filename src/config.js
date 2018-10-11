const config = { welcomeScript: `
# Welcome to my Markdown Previewer!
As you can see, the above is a heading

## This is a sub-heading
### This is a sub-sub heading. They can get even smaller with more hashs

Heres some code, \`<p></p>\` between 2 backticks

\`\`\`
// this is multi-line code:
for( let i = 0; i < 10; i++) {
  console.log(i);
}
\`\`\`

You can also make text **bold** like this,
Or _italic_ if thats more your thing.
If your extra cool you can do **_both at the same time_**
If you mess up ~~crossing stuff out~~ is easy too.

You can also have [links](https://www.freecodecamp.com), and
> Block Quotes if you want.

There's even tables:

Header | Header 2 | Header 3
------------ | ------------- | -------------
content for header 1 | content for header 2 | content for header 3
more content for header 1 | more content for header 2 | more content for header 3

- There are lists too.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. You can do numbered lists as well.
1. You can number them anyway you like.
1. And make them as long as you like...
- Even if you use dashes or asterisks.
* let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`
}

module.exports = config;
