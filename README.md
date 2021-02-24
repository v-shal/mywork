# js-insider
JavaScript explanation based on my understanding...

# What is JavaScript ??
  In simple words JS is programming language with the following functionality: 
  
  * **High-Level**: JS is a high level programming language. Unlike other languages, JS don't have to manage the memory
    or explicitly command the CPU. SO, JS do not have to manage resources.
    
  * **Prototype-based Object-Oriented**: Everything in Js is object except primitive datatypes like string and numbers. 
    And when we are using array.push method  
  
  * **Multy-paradigm**: JS supports all the type of programming approch so it is Multy paradigm language.
    i.e. 1) Functional programming 2) Object oriented programming 3) Procedural programming
  
  * **Interpreted (just-in-time compiled)**: Computer understand only machine code (0s and 1s). So we have to first compile 
    the code and after that convert code into machine code. In JS there is JS Engine which do this both task for us. 
    In other languages compilation and execution both process are done one by one but in JS, JS engine first compiles 
    program and then imideatly executes the code so we called JS as interpreted or Just-in-time compiled language. 
    
  * **Dynamic**: Unlike to other languages in Js we do not need to define type when we are declaring variables. JS finds
    type of variable dynamically at run time.
    
  * **Single-threaded with Non blocking Event loop**: JS is single threaded means there is only one single thread which 
    executes JS code in CPU, so JS can do only one thing at a time. But what is we have some task which is taking time
    longer time??, In Js there is special functionality called Event loop which takes this time taking code and runs in
    the background. And once they are finished it put it back in the main stack. 
    
  * **Garbage-collected**: When we write a code it's possible that some variables are taking space in the memory while we don't 
    require them at all. So, with this functionallity JS automaticly clear the spaces in the memory which is not currently in use.
 
  
  
# How JS works behind the scene ??
  ![JS Execution Context](https://www.google.com/url?sa=i&url=http%3A%2F%2Fdannyzhang.run%2F2017%2F04%2F03%2FHow-JavaScript-works-Behind-the-   Scenes%2F&psig=AOvVaw0AUjS809IrwCaxqf3ONXOJ&ust=1612872318086000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMCR4uif2u4CFQAAAAAdAAAAABAD)
  
  ## Execution stack:
  This mechanizm is normal stack in which last pushed item poped first i.e(LIFO). All the executable task are pushed into execution 
  stack and when time comes they are poped after the execution.
  ## Global Execution Context:
  Js engine puts all top level code into global execution context and the code in global execution context runs very first.
  ## Function Execution Context
  Js engine puts the code of each function in saperate execution context assigned to that function.
  
  Execution context generally stores the variables and other stuff to execute perticular code.
  
  Very first Js engine reads the javascript program and takes the top level code to global execution context, and other function code to
  their seprate execution context.
  After that execution stack first runs the code which inside the global execution context and then function code when function call arrives. 
  
  
# JS variables
  Variables are one kind of box with the name and we can use them to store whatever we won't. Suppose we have to store our age then first we 
  give a name "age" to one box and then stores our age i.e. 20 in that box.
  
  While we declare a variable we have to follow some rules for naming them like other programming language.
  Most recommended approch is to use camelCase notation in variable nameing.
  like my_age is written as myAge and
  your_name is written as yourName etc.
  
# JS datatypes
  * Number 
  * String: Orderd collection of character
  * Boolean
  * Objects
  * null: It is special type of value and the value itself is "null". 
  * undefined: Meaning of undefined is "the value is no assigned or defined".

  
# JS type conversion
# JS operator
# Loops: for and while
# function: function declaration, function expression and arrow function
 
 # JS old name
  * Mocha
 # Not always JS
  * alert() and console.* is not in JS specification. But they are supported by browsers.
  * console is just a tool(dev. tool) to make it easy to run and to use js for developers. It is not pure JS Environment.
  
 # Backward compatibility
  * Don't break the web.
  * If somthing added to Js spec. than in future it can't be removed.
  * Modern js code may be not run in older browser but old js code always run on modern browsers.
  * HTML & CSS is forward compatible.
  * If we run 2019 css in 2010 browser than it doesn't break,browser just skip unrecognized css.
  * Forward compatibility is impractical for programming language.
  
# Transpiling 
 * Tool to convert one from another.
 * If we want to run 2019 Js code into 2016 Browser than we can use babeljs transpiler
 
# Is js is compiled?
 * Yes
 * First js engine parse the code and then it will be converted to byte code and then execution happens.
 * Js gives eroor before execution
 
# 'use strict'
 * Like a parents strict mode tell us what to do and what no to.
 * strict mode tell us that by following this way you can optimize your code and get best chance at performence.
 
 
 
 
 

# JS DOM

### JS platforms :
* Web browser, web-server, any host etc.
* Each one provides specification functionality, Js called that Js **Host environment**

### What we have when JS runs :
* Window -> DOM 
*        -> BOM -> navigator, screen, location
*        -> JS -> Array, Function, Events
* Window : global object for Js and it represents browser window also.

## DOM
* It represents content of whole page and provide objects to modifie it.
* **There is CSSOM also, which can be used with DOM to read and write css style, but we rarely use it, we just add/remove css classes.

## BOM
* It represents additional objects provided by browser to working with everything excepts document.
* alert, prompt, confirm are also part of BOM

## DOM tree
* every HTML element is an object.
* New line and Space in #text node. (check DOM tree on JavaScript.info)
* Space-only #text node for spaces and new lines.
* **Autocorrection** If HTML file containes only "HELLO WORLD" browser creats whole DOM tree automaticly.
* Browser automaticly process eroors : closing tag
* **Special case**: <table> must have tbody node, and it comes from no-where
* <!DOCTYPE html> it is also node (Special one)
* #comment node (see following rule)
* Document object also a DOM node.
* There are 12 node types, we usually works with 4.(document, html, tree building nodes, text node, comments)
* (Select + Esc key and Computed in Elements)

## IF SOMTHING IS IN HTML THEN IT ALSO MUST BE IN DOM TREE

## Walking the DOM
* document.body
* document.head
* document.documentElement
* In DOM null means doesn't exist.
* 









  

