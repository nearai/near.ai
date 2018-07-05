# NEAR.AI Website

Install dependencies with `npm install` and also install CLI for gatsby `sudo npm install -g gatsby-cli`.

To develop: `gatsby develop`

To rebuild: `gatsby build`

To push the new version, build first and then replace docs folder and push that:

```
gatsby build
rm -rf docs
mv public docs
```

