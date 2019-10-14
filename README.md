# React + TailwindCSS + Okta

## High Level Goals

* Create a layout with TailwindCSS
* Create a better AuthContext with Okta

## Gotcha's So Far

* When setting up TailwindCSS, could not name the `tailwind.config.js` file as `tailwind.js` there is a bug with that name on windows.

## TODO

* Access or ID token?  Both?
* Create custom styles files (components/utilities/base);
* Create a DropdownLink, DropdownButton, DropdownDivider
* Dropdown should be something else when < 640px

## Remember

* Enable purgecss in postcss.config.js if we need tailwind.css to become only used classes rather than everything.