If someone says to us to create 3 boxes and change the content of box2 first, then box1 and then box3. So, We can also do it using simple HTML and CSS. But react says us to make a variable for box1 and then update it, so that all the properties will get updated.
So, If we are making a navbar, we do not need to make navbar again and again, In react we will make the component of navbar and we can use it across the pages.
Props -> React has a concept of props. Means within navbar you can customize the color, font-color etc.

# Why React ?
Answer -> We can use states which means once we update the variable, it changes across the page.
Means if you have created an script of named box1 so whereever there is box1 in page, it will get changed.
It was developed by facebook. They said that we are again and again writing inner html codes so it will becomes very big.
It is better to create a variable and automatically update that through library. Within JavaScript We can not do such things.

<nav class="bg-black">
        <ul class = "red">
            <li>Home</li>
            <li>About</li>
            <li>Home</li>
        </ul>
    </nav>

Suppose that the code which is writtern above, in that code we want's the color to be blue or some different color. How we will do customization.
We will say that we will create a component navbar (we can give it any name).
We will say that bg-black is a prop. Prop means a variable which is a variable within the component. So we will give the background color property as a prop.
<NavBar color = "red" background="blue"/> -> These are props.
