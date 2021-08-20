
# building blocks

## recursion
why use it?
it's good for code interviews

## data immutability
a dataset a copy of previous

## pure function
even logging is a side effect :)

like mathematical functions

## high order func
function accepts a function as its argument

f.e. `map` and `filter`

# use cases

## data

why is data imutability cool?

pics from https://towardsdatascience.com/the-ultimate-guide-to-functional-programming-for-big-data-1e57b0d225a3
- you can do parallelism!
- engine knows better


procedural vs declarative
    you don't declare, you say: just do it
    SQL

cloud computing
you can't anticipate the order of results coming back

## fullstack JS
what uses it already:
- react
- redux
`const` is default
`const` does not mean we cannot mutate internals!, freezing is hacking

## IoT
https://www.athensjournals.gr/technology/2016-3-1-2-Haenisch.pdf


# some real use cases
### Facebook
uses Haskell in spam filtering
https://engineering.fb.com/2015/06/26/security/fighting-spam-with-haskell/

### Pandoc
written in Haskell

### Whatsapp 
written in Erlang

# don't follow the hype blindly!
- sometimes it's translated to loops!
- not every language works faster
- some problems are perfect for OOP

# languages
Pure functional:
- Haskell

Favor of FP
- Python
- Scala

# code samples
## Python
- `loop_vs_mapreduce.py`
- `buildingblocks.py`
- `compose_functions.py`
## Javascript
https://www.telerik.com/blogs/functional-programming-javascript

# read more
https://www.freecodecamp.org/news/how-and-why-to-use-functional-programming-in-modern-javascript-fda2df86ad1b/

interesting discussion on 
https://stackoverflow.com/questions/36504/why-functional-languages
https://towardsdatascience.com/why-developers-are-falling-in-love-with-functional-programming-13514df4048e
https://docs.python.org/3.9/howto/functional.html
https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0

https://isaaccomputerscience.org/concepts/data_big_func
https://towardsdatascience.com/the-ultimate-guide-to-functional-programming-for-big-data-1e57b0d225a3
https://medium.com/@jorgeehrhardt123/why-you-should-learn-functional-programming-for-big-data-a85bd429bf49

