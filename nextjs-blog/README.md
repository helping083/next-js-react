# Pyramyd Air Client 

## Adding a Local Sibling Dependency to a Specific Package

For structure like this one

<pre>
system/
    packages/
        core/
        form/
        button/
</pre>

If we wanted to add the `button` as a dependency to our `form` 
and have Lerna symlink them, we can do so by cd into that package

`cd form `

and then running the following:

`lerna add @my-scope-name/button --scope=@my-scope-name/form`

This will update the package.json of `@my-scope-name/form`.

## Adding an External Dependency (NPM package) to a Specific Package

For structure like this one

<pre>
system/
    packages/
        core/
        form/
        button/
</pre>

If we wanted to add the `react` npm package as a dependency to our `form`, 
we can do so by running the following command in the root of the project:

`lerna add react --scope=@my-scope-name/form`

This will update the package.json of `@my-scope-name/form`.
For more information have a look ar [lerna add](https://github.com/lerna/lerna/tree/main/commands/add) docs.

## Environment Variables

- NEXT_PUBLIC_API_URL - Url of the API

## Running as a Docker Production Container

To run **marketplace** as a docker container consider next steps:

1. Run **yarn docker:create-builder** command in the root of the repo. For any details have a look at *package.json* scripts section.
2. Go to *packages/marketplace* dir.
3. Run **yarn docker:build** command in the terminal to build the prod marketplace image. For any details have a look at *package.json* scripts section.
4. Run **yarn docker:run** command in the terminal.

## Continious Integration

1. Run **yarn ci:lint** in the root.
2. Run **yarn ci:test** in the root.
3. To build docker images you can run **yarn ci:build** in the root. In this case default tag names and build arguments will be applied. For more info check **docker:build** script in each repo package. Right now 2 images will be built - *pyramydair/marketplace* and *pyramydair/storybook*.
4. You can also build docker images manually by yourself (if customisation is needed). To do so, firstly run **yarn docker:create-builder** in the root. It will create base monorepo image with all dependencies required for the packages. Afterwards go to any package dir and check available docker files. There you can build them as you wish with any args.