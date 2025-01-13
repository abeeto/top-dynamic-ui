# gh-starter-TOP

Starter Kit for projects on The Odin Project - comes with configured Webpack, ESlint and Prettier
ESlint and Prettier work together and adhere to AriBnB style guide
Also uses husky and staged-lint packages to lint + format before pushing to git

## Set Up

To install all packages needed:

```
npm install
```

## Deploying website

To deploy webpage, you need to push the `/dist` to github. But dist is in `.gitignore`

So first switch to 'gh-pages' branch that's already created
`git switch gh-pages`

Then force add `dist` folder by using `-f` flag:

```
git add dist -f
```

Finally to push the dist folder to the repo:

```
npm run deploy
```

Then go to GH repo settings page and set the branch to be deployed as `gh-pages`
