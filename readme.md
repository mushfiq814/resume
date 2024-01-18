# Resume

Contains tools to generate a resume in pdf using [React PDF renderer](https://github.com/diegomura/react-pdf/tree/master/packages/renderer).

Note: The LaTeX version of this is located in the `latex` branch. Please use `git checkout latex`.

## Toolchain

This project uses the following tools:

* NodeJS: JavaScript engine
* TypeScript: provides type checking at compile time
* React: declarative UI to make resume
* ReactPDF: generate PDF files from React virtual tree
* eslint: linting and enforcing consistent code style

## Structure

All source files (TypeScript, TSX React) are located in `src`. The structure is as follows.

* all resume sections (Job Experience, Objective, Projects, etc.) are in `src/sections`.
* all UI components shared by the sections are located in `src/shared`.
* all content is centralized as json files. These are `src/content.json` (for specialized content) and `src/content-master.json` (for all historical content that can take more than a page). The UI components pull from these files to populate their content.

## Contributing

Have any criticisms about my resume? Please [submit an issue](https://github.com/mushfiq814/resume/issues/new/choose) and tell me about it. I would greatly appreciate it!

## Compiling

Make sure `nodejs` and `npm` (or `yarn`) are installed. Instructions for [node](https://nodejs.org/en) and [yarn](https://classic.yarnpkg.com/en/)

```sh
$ npm run compile
# or
$ yarn compile

# ...compiled pdf to /home/mushfiq/projects/resume/resume.pdf
```

The output pdf should be generated.

## Linting

```sh
# to check lint warnings/errors
$ npm run lint
# or
$ yarn lint

# to fix lint warnings/errors
$ npm run lint:fix
# or
$ yarn lint:fix
```

## Releases

Generated PDFs are available as part of releases. There is no release schedule. The releases are tagged with the date that the resume PDF was generated in. Steps to create a release are as follows.

* generate pdf
* create a tag

  ```sh
  # git tag <date>, e.g.
  $ git tag 2024-01-06

  # git push origin <tag>
  $ git push origin 2024-01-06
  ```

* create a release in GitHub
* attach generated pdf as part of release
* publish release

## Preview

![2024-01-06T14-33-23-606556935](https://github.com/mushfiq814/resume/assets/32845348/02cc16bb-a21e-4a67-a55f-a8f51a5de9a6)
