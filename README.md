# Go to <https://ModuloJS.org> for the latest Modulo version and documentation

This is a Modulo.js website created with `create-modulo`

-----------


## One-click Deploy

### Netlify Host

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/modulo/modulo-jamstack-deploy)

----

# Template Details

This template has Netlify's Decap CMS ready to go. This allows you and your
teammates to upload content and commit changes with a rich text editor, without
any coding or git knowledge. More info: <https://decapcms.org/>


## Usage

### Relevant files to edit

- You will mostly work in the `src/` directory

- Edit the Markdown files in `src/articles/` to add article or blog-style
  content (also editable by CMS, see below)

- Edit the files in `src/static/` to work on the CSS, JS, and HTML Templates
  that create Modulo Components (including the "x-Page" layout template)

- Edit the files in `src/static/data/links/` to change the ordering or content
  of the page navigation or article link list (also editable by CMS, see below)


### Using local server and CMS

Use the following commands:

- `npm start`
    - Starts a simple HTTP server for testing: <http://127.0.0.1:3334/>
- `npm run startcms`
    - Runs proxy for Decap CMS: <http://127.0.0.1:3334/static/cms/admin/>
    - This is intended for local content editing (it is NOT a live, public site)
    - Note: Run this at the same time as `npm start` (e.g. in another terminal)
- `npm run build`
    - Generates static site build locally in `build/` directory
    - Useful for testing server-side rendering
    - Note: This requires dependencies. It runs `npm install modulocli` first.


## Publishing checklist

Launch your site on any web server that can host static sites, ideally one that
can run a "build step" before serving for "server-side rendering".

* [X] netlify.toml is already specified!

* [ ] To publish, make sure your web-host is configured to run `npm run build`
  when code is updated, and serve the `build` directory. Some might work with
  minimal configuration, otherwise you may have to manually build locally.

* [ ] To enable the CMS on the remote server, you will need to reconfigure
  Decap CMS to work with whatever authentication system you want to use. The
  Decap CMS is by the Netlify web-hosting service, which recommends use of
  GitHub (among others) as an authenticator. Read more on configuring this:
  <https://decapcms.org/docs/github-backend/>

* [ ] **Replace this README with one specific to your project!**

