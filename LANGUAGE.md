=The Language
The language is intended to be fairly simple and easy to learn, while still retaining enough power not to frustrate programmers.

==Literals
There are a few built-in data types:
- Numbers
- Strings
- Lists
- Blocks

===Numbers
Numbers can be whole numbers (integers), or can have a decimal point (float). They are treated the same way, and automatically convert between as needed. They look like this:
- `23`
- `-42`
- `12.34`

===Strings
Strings are bits of text. They look like this:
- `'some text'`
These strings are is pretty simple, what you see is what you get. If you want a special character, just type it in. if you want multiple lines, hit enter. Everything from the first single-quote to the next single-quote is put in the string. If you need a single-quote in your string, you can escape it by doubling it, (ie, `'this ''string'' has quotes'`) but no other escapes are performed.

===Lists
Lists (in other languages called arrays) are 0 or more items in an order. they look like this:
- `[1,2]`
- `["words, "to", "remember"]`
- `[3:10]`
- `[0:0.1:2]`
The last couple are sparse lists, which are really a way to list a bunch of numbers that have a simple sequence. `[3:10]` is all the whole numbers from 3 to 10, including the 3 and 10. `[0:0.1:2]` is a list of all the numbers from 1 to 2, counting by tenths.

===Blocks
Blocks have two main uses. They can act like functions, holding parts of the script to evaluate later, and they can be a container for the constants inside their context, which makes them like a hash or map, or a javascript object. A colon (:) separates the declaration of arguments and constants from the code that should be executed when called. They look like this:
- `{n:n*2}`
- `{n=10,m=20}`
- `{:42}`
- `{r=radius,cx=center_x=0,cy=center_y=0: circle(r=r,cx=cx,cy=cy)}`
For larger blocks, you may want to split them over lines, like this:
```
{ a,b,c:
  // do something with those arguments
  foo(a) + blah(b) * 23 +
  c^1.971 }
```

==Operators
Operators are defined for many combinations of types. Here's a table to show what they do in each case:
|     | Num/Num | Num/Str | Num/List | Num/Block |
| --- | ------- | ------- | -------- | --------- |
| `+` | add | x | joins Num copies of list | x |
| `-` | subtract | x | x | x |
| `*` | mult |
| `/` | div |
| `%` | modulo |
| `^` | power |
| `\` | root |

