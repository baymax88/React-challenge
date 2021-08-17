# Readme

## Background
Welcome to our coding assessment! 

This code represents a basic prototype to be used as a starting point for the code you write.  We don't expect you to already be familiar with developing add-ons for Google Sheets.

[Google Apps Script](https://developers.google.com/apps-script/overview) is Google's Javascript-based development platform for building applications and add-ons for Google Sheets, Docs, Forms and other Google Apps. This starter code will make it easier to get started.

## Getting Started
> **Note:** If you use multiple Google accounts note that there is a bug where Google Sheets uses the default account (which may not be the account granted permission). See [here](https://issuetracker.google.com/issues/69270374?pli=1) for more info. If you click "Pull Data" the first time and nothing happens, this could be your issue.
> You can workaround this issue by either:\
> (a) logging in with an incognito window, or\
> (b) logging out of all Google accounts and then logging in with the desired account first.

**1.** Enable the Google Apps Script API by going [here](https://script.google.com/home/usersettings)

**2.** Install dependencies with 
```bash
npm install
```

**3.** This starter code makes use of [clasp](https://github.com/google/clasp), a tool developed by Google which lets us manage our Google Apps Script projects locally. Login with 
```bash
npm run login
```
<img width="100%" src="https://i.imgur.com/zKCgkMl.gif">

**4.** Initialize a new spreadsheet (My Aleph Project) with Clasp
```bash
npm run setup
```
<img width="100%" src="https://imgur.com/Zk2eHFV.gif">

**5.** Deploy the app to the Google Spreadsheet. If you skip step 6 you will need to run this line every time you want to see your updates in the Google Sheets sidebar.

**Note**: on the first run you may get a message like "Manifest file has been updated. Do you want to push and overwrite" which is perfectly normal. You will just need to reply 'yes'
```bash
npm run deploy
```
<img width="100%" src="https://i.imgur.com/W7UkEpv.gif" />


**6.** *(Optional)* Develop with live reloading. This will let you see your client updates without needing to re-run `npm run deploy` after each change (server updates may require you to restart the npm command).
   1. Generating a certificate for local development: Install the mkcert package:
        ```bash
        # mac:
        $ brew install mkcert

        # windows:
        $ choco install mkcert
        ```

        [More install options here.](https://github.com/FiloSottile/mkcert#installation)

        Then run the mkcert install script:

        ```bash
        $ mkcert -install
        ```

        Create the certs in your repo:

        ```
        npm run setup:https
        ```

2. Now you're ready to start:
    ```bash
    npm run start
    ```

    The start command will create and deploy a development build, and serve your local files.

    <img width="100%" src="https://imgur.com/uD4uZZK.gif">

**7.** See your code by navigating to your sheet. You should now see a menu option "Aleph" along the top, which has the option to "launch Aleph" in the sidebar. You can use the "Pull Data" button to create a new sheet with the full set of data.  Implementation for the rest of the sidebar UI is up to you.

## Code Overview
Most of the code is infrastructure in order for it to be possible for React to run in the sidebar. Some files are specific to our purpose that you may need to be more aware of. In particular we only expect you to edit `explore.js` and `pullData.js` but here is an overview of the most relevant files:
* `client`
    * **`Explore.js`** - the primary component for the sidebar, containing all the UI elements, and binds a button to `pullData`
* `server`
    * **`pullData.js`** - this method is what will pull from our dataset and create a new Sheet in our Spreadsheet. For this assessment we are just pulling hard-coded JSON from `data` to simulate what would be an API call in a real application.
    * `data.js` - contains the full set of data and the data dimensions. You can use this to be more familiar with the shape of the data. 
    * `ui.js` - creates our menu option and adds it to the toolbar upon opening the document
    * `sheets.js` - handles the interaction with the sheet itself: creating a new sheet and inserting the data

## Submission
1. Populate `discussion.md` with responses to any discussion questions
2. Create a zip file with your code (things will run smoother if you can leave out `node_modules/`, `dist/` and `certs/`)
3. Submit your zip file and your personal details 


## Relevant Documentation
* [Ant Components](https://ant.design/components/overview/)
* [Google Sheets App Script Overview](https://developers.google.com/apps-script/guides/sheets)
* see the `Boilerpalte_README.md` file for information on the boilerplate this code is built on
