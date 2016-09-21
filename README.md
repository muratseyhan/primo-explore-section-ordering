
# Section Ordering Package

A simple Primo New UI customization package moving the 'details' section to the bottom of the Primo full view.

## Instructions

### Including as a dependency

- Declare `primo-explore-section-ordering` as a dependency in the 'package.json' file in your customization package folder root. 
For example, if you are developing a package for the 'Auto1' view, add the file under 'primo-explore-devenv/primo-explore/custom/Auto1'.

  The content of the file should lool like:
  
  ```
  {
    "name": "<your view code>",
    "version": "<your version>",
    "description": "",
    "author": "",
    "devDependencies": {
      "primo-explore-section-ordering": "git://github.com/muratseyhan/primo-explore-section-ordering.git"
    }
  }
  ```

- Navigate to your customization package folder containing the 'package.json' file.

   ```
      cd primo-explore-devenv/primo-explore/custom/Auto1
   ```
- Type `npm install`.
- A new folder named 'node_modules' should be created, which contains your dependended packages.
- Restart your server.

### Running as the primary package.

If you would like to run this package as your primary customization package do the following.
- Clone (or copy) this repository under 'primo-explore-devenv/primo-explore/custom/*YourViewCode*'.
- Uncomment the method call in `js/module.js`.

## Credits

  - https://github.com/noamamit92/primo-explore-linked-data-demo
  - https://github.com/ExLibrisGroup/primo-explore-package
  - https://github.com/ExLibrisGroup/primo-explore-devenv

