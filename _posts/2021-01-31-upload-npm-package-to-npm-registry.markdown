---
layout: post
permalink: npm/upload-npm-package-to-npm-registry
title: Upload Npm file to Npm registry
excerpt: 'In this article, I will share with you how I have uploaded my first NPM package to NPM registry'
keywords: publish npm package
tags: npm
---

## Introduction

In this article, I will share with you the steps that I have followed to publish my first NPM package. I started by creating my npm project that I wanted to deploy. Then, I created my NPM account and finally I deployed my package using the `npm publish` command.

## 1. Create NPM projet to upload

Here is the example of npm project that I used for this article:

<p class="code-tabs"></p>

- package.json

  ```json
  {
    "name": "@ahenteti/hello-npm",
    "version": "1.0.0",
    "description": "Hello NPM from @ahenteti",
    "main": "index.js",
    "type": "module",
    "keywords": ["hello-npm"],
    "author": "Ahmed HENTETI (https://ahenteti.github.io)",
    "license": "MIT",
    "scripts": {},
    "repository": {
      "type": "git",
      "url": "https://github.com/ahenteti/hello-npm.git"
    }
  }
  ```

- index.js

  ```js
  const helloNpm = () => {
    console.log('hello npm!');
  };

  export default helloNpm;
  ```

- README.md

  ```md
  ## Hello NPM from @ahenteti

  ## Installation

  Run `npm install @ahenteti/hello-npm`

  ## Usage

  import hello from @ahenteti/hello-npm

  hello();
  ```

<div class="info">
  The <b>package.json</b> file is the entry point of our package where we define properties like the <b>name</b>, <b>description</b>, ... of the package. For instance, the <b>main</b> property points to the file <b>index.js</b> where we define the logic of our package.
</div>

## 2. Create NPM Account

<p style="margin-bottom: .4rem">For that, we need to go to the <a href="https://www.npmjs.com/signup">npm signup page</a> and type in the fields:</p>

- **Username**: The username that will be displayed when you publish packages or interact with other npm users on npmjs.com. Your username must be lower case, and can contain hyphens and numerals.
- **Email address**: Your public email address will be added to the metadata of your packages and will be visible to anyone who downloads your packages.
- **Password**: Your account password

Once is done, Read the [End User License Agreement](https://docs.npmjs.com/policies/terms) and [Privacy Policy](https://docs.npmjs.com/policies/privacy), and indicate that you agree to them. Then click the **Create An Account** button

## 3. Deploy to NPM Registry

When ready, run the command `npm publish --access=public` to publish your package and after a few moments, you can check your NPM account and verify your package
![npm-registry.png](/assets/upload-npm-package-to-npm-registry/npm-registry.png)
