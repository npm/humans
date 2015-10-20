# Contributing to `npm/humans`

Hi! We're so glad you've joined npm. To make it official, we'd like
you to add yourself to this npm module :)

## Up and Running

1. Fork and Clone this repository.
2. Navigate to the repository's root directory: `cd humans`
3. Install dependencies: `$ npm install`
4. Build the README: `$ npm run doc`

## Add yourself!

1. Edit `humans.json`, e.g.:

    ```
      {
        "name": "Ima Wombat",
        "twitter": "imawombat",
        "github": "imawombat",
        "user_name": "imawombat",
        "email": "imawombat@npmjs.com"
      },
    ```

    - `name`: your name!
    - `twitter`: your twitter handle, without the `@`
    - `github`: your github username
    - `user_name`: your npm username
    - `email`: your npm email

    __NOTE__: The picture used for you is from [Gravatar](https://gravatar.com).
    You'll need to add a picture through that service if you'd like to have a picture.
    Otherwise a stand-in default image will be used :)

2. Bump the number of npm humans in `test/index.js`:

    ```
      //test/index.js
      3
      4  test("humans", function (t) {
      5   t.ok((typeof humans === "object"), "humans are objects")
      6   t.equal(Object.keys(humans).length, 24, "there are 24 humans")
      //...
    ```

    You'll need to edit the number on line 6, as well as the text.

3. Build the `README.md` with the info you just added:
    ```
      $ npm run doc
    ```

4. Run the tests:
    ```
      $ npm test
    ``` 

5. Bump the version number of the module:
    ```
      $ npm version minor
    ```

    This will bump the `version` attribute in the `package.json`.
    For example: `1.2.3` => `1.3.0`

6. Branch, add, commit, and push your changes to Github.
    ```
      $ git checkout -b addme
      $ git add .
      $ git commit -m "add me!"
      $ git push origin addme
    ```

    You should see you changes on the [package's `README.md`][1]

7. Make a Pull Request on Github. Check out the documentation [here][3].

8. Publish the package!
    ```
      $ npm publish
    ```

    You should see your changes on the [package's page][2]

[1]: https://github.com/npm/humans/blob/master/README.md
[2]: https://www.npmjs.com/package/npm-humans
[3]: https://help.github.com/articles/creating-a-pull-request/
