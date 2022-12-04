---
layout: post
permalink: git/getting-started-with-git
title: 'Getting Started with Git'
excerpt: 'In this article, we are going to discover the Git tool and how we can use it in software development phase'
tags: git
---

## Introduction

Git is a free open source version control system, created by Linus Torvalds in 2005. Unlike older centralized version control systems like SVN and CVS, Git is distributed: each developer has the full history of the code source locally. This slows down the initial repository clone, but significantly speeds up subsequent operations like commit, blame, diff, merge and log.

Git also has great support for branches, merges, and rewriting repo history. Pull requests are one of those popular tools that allow teams to collaborate on Git branches and review each other's code efficiently. Today Git is very popular, and lots of open source code is hosted in Git repositories on GitHub, BitBucket and Google code. These are all services that host version control repositories for developers.

## Installation

Git is available on Windows, Unix/Linux, and MacOS. All you need to do, is to go to the official Git [website](https://git-scm.com/downloads), download the latest stable version available for your operation system and follow the instructions to install Git. Once installed, open a terminal and verify the installation was successful by entering `git --version` and it should show something like this :

{:.wln}

```
git version 2.27.0
```

Now let Git know who you are. This is important as each Git commit contains the author's username and email. Here is the commands that we can use to configure Git our username and email : (_change the user name and email address to your own and remove the **--global** option on the following commands if you want to set the username and email only for a specific repository and not for every repository on your machine_):

{:.wln}

```sh
$ git config --global user.name "username"
$ git config --global user.email "firstname.lastname@mail.com"
```

## Create a GitHub account

The easiest way to get started is to create an account on [GitHub](https://github.com/). GitHub offers personal accounts for individuals and organizations for teams of people working together.

![](/assets/getting-started-with-git/github-sigh-up.PNG)

## Creating a Github repository

A repository is usually used to organize a single project. Repositories can contain folders and files, images, videos, spreadsheets, and data sets -- anything your project needs. In the upper-right corner of GitHub home page, use the + drop-down menu, and select New repository.

![](/assets/getting-started-with-git/new-repository.png)

In the Repository name and description boxes, enter the repository name and a short description. Select whether your repository will be Public or Private and click Create Repository

![](/assets/getting-started-with-git/create-repository-form.PNG)

## Creating a local repository and connect it to Github

The **git init** command creates a new local Git repository. It can be used to convert an existing, unversioned project to a Git repository or initialize a new, empty repository. Most other Git commands are not available outside of an initialized repository, so this is usually the first command you'll run in a new project.

Executing git init creates a **.git** subdirectory in the current working directory, which contains all of the necessary Git metadata for the new repository. This metadata includes subdirectories for objects, refs, and template files. A **HEAD** file is also created which points to the currently checked out commit.

{:.shell-commands}

```shell
$ pwd
/user/ahenteti/projects
$ git init helloworld
Initialized empty Git repository in /user/ahenteti/projects/helloworld/.git/
$ ls     -al helloworld/
total 720
drwxr-xr-x 1 ahenteti 197121 0 Aug 23 20:38 .
drwxr-xr-x 1 ahenteti 197121 0 Aug 23 20:38 ..
drwxr-xr-x 1 ahenteti 197121 0 Aug 23 20:38 .git
$ ls  -al helloworld/.git/
total 11
drwxr-xr-x 1 ahenteti 197121   0 Aug 23 20:38 .
drwxr-xr-x 1 ahenteti 197121   0 Aug 23 20:38 ..
-rw-r--r-- 1 ahenteti 197121 130 Aug 23 20:38 config
-rw-r--r-- 1 ahenteti 197121  73 Aug 23 20:38 description
-rw-r--r-- 1 ahenteti 197121  23 Aug 23 20:38 HEAD
drwxr-xr-x 1 ahenteti 197121   0 Aug 23 20:38 hooks
drwxr-xr-x 1 ahenteti 197121   0 Aug 23 20:38 info
drwxr-xr-x 1 ahenteti 197121   0 Aug 23 20:38 objects
drwxr-xr-x 1 ahenteti 197121   0 Aug 23 20:38 refs
```

Now, let's add a README.md file to the project and create our first commit

{:.shell-commands}

```shell
$ pwd
/user/ahenteti/projects/helloworld
$ echo "Hello Git" >> README.md
$ git add README.md
$ git commit -m "first commit"
[master (root-commit) 4529b52] first commit
 1 file changed, 1 insertion(+)
 create mode 100644 README.md
```

To connect your local repository to Github, we should add the Github repository as a remote repository on our local repository:

{:.wln}

```shell
git remote add origin https://github.com/<username>/<project-name>.git
```

This command tells Git to add a **remote** repository that we called **origin** with the address https://github.com/username/project-name.git. Now, we can push our first commit using the following command:

{:.wln}

```shell
git push -u origin master
```

And we can verify that our README.md file is now available on Github

![](/assets/getting-started-with-git/git-push.PNG)

## Conclusion

In this article, we have discovered the Git tool and we hope you find it useful :)
