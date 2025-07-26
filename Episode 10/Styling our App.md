## Styling App with `Tailwind`


- In Industrial standards we don't use normal CSS, SASS, SCSS because these are not preffered for building the large scale applications.

- There we use the `Styled Components` or the frameworks and libraries avaible for CSS.

- `Tailwind`, `Material UI`,`BootStrap`,`Ant Design`,`Chakra UI` are the frameworks and libraries availble for making CSS more easy.



# About Tailwind:

- Tailwind provides us with different packages compatible with different set of Frameworks we use.

- For our project we will be setting up the `Tailwind for Parcel`. we can find the setiing up procedure available in its own documentation.

- with Tailwind we install `PostCSS`: It is a Tool used by the tailwind backend to transform our CSS to Javascript.

- TailwindCSS works differently then our normal CSS. In normal CSS we used to give the className and further that className is used to modify in the styling sheet. With TailwindCSS e can directly give our stylings inside ofthe className

- for eg: <className="w-72 bg-gray-200 p-4 rounded-lg hover:shadow hover:border-black cursor-pointer">
    w is the width, bg is background color with the color name and its intensity, p is for padding, rounded is used for edges lg is large and so on.

- If we have to use give our dynamic styling we can do that using square brackets `[]`. for eg: w-[200px] this gives very specific styling in pixels.


