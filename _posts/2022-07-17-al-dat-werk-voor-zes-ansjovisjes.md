---
title: "Al dat werk voor zes ansjovisjes"
subtitle: Eerst de auto, dan de boot, daarna de Noorse natuur... 
layout: post
author: "Arthur van Kruining"
backgrim: cloud_sx.jpg
lang: ned
caption: J.C.C. Dahl, Cloud Study with Horizon (1832)
bandkleur: rgba(237,200,172,1)
categories: opinion 
---

>When one considers that Mr. Sherlock Holmes was in active practice for twenty-three years, and that during seventeen of these I was allowed to cooperate with him and to keep notes of his doings, it will be clear that I have a mass of material at my command. The problem has always been not to find but to choose. There is the long row of year-books which fill a shelf, and there are the dispatch-cases filled with 

documents, a perfect quarry for the student not only of crime but of the social and official scandals of the late Victorian era. Concerning these latter, I may say that the writers of agonized letters, who beg that the honour of their families or the reputation of famous forebears may not be touched, have nothing to fear. The discretion and high sense of professional honour which have always distinguished my friend are still at work in the choice of these memoirs, and no confidence will be abused. I deprecate, however, in the strongest way the attempts which have been made lately to get at and to destroy these papers. The source of these outrages is known, and if they are repeated I have Mr. Holmes's authority for saying that the whole story concerning the politician, the lighthouse, and the trained cormorant will be given to the public. There is at least one reader who will understand.

This⋅para⋅line⋅starts⋅at⋅the⋅first⋅column.⋅However,
⋅⋅⋅⋅⋅⋅the⋅following⋅lines⋅can⋅be⋅indented⋅any⋅number⋅of⋅spaces/tabs.
⋅⋅⋅The⋅para⋅continues⋅here.

⋅⋅This⋅is⋅another⋅paragraph,⋅not⋅connected⋅to⋅the⋅above⋅one.⋅But⋅⋅
with⋅a⋅hard⋅line⋅break.⋅\\
And⋅another⋅one.

First level header
==================

Second level header
------

   Other first level header
=

This is a normal
paragraph.

And A Header
------------
And a paragraph

> This is a blockquote.

And A Header
------------

header
---
para

# First level header

### Third level header    ###

## Second level header ######

Hello        {#id}
-----

# Hello      {#hoi}

# Hello #    {#id}


> This is a blockquote.
>     on multiple lines
that may be lazy.
>
> This is the second paragraph.

> This is a paragraph inside
a blockquote.
>
> > This is a nested paragraph
that continues here
> and here
> > and here


    Here comes some code

    This text belongs to the same code block.


    Here comes some code
^
    This one is separate.

~~~~~~~~
Here comes some code.
~~~~~~~~    

~~~~~~~~~~~~
~~~~~~~
code with tildes
~~~~~~~~
~~~~~~~~~~~~~~~~~~

* kram
+ down
- now

1. kram
2. down
3. now

* list 1 item 1
 * list 1 item 2 (indent 1 space)
  * list 1 item 3 (indent 2 spaces)
   * list 1 item 4  (indent 3 spaces)
    * lazy text belonging to above item 4

1984\. It was great
\- others say that, too!

1984. It was great
- others say that, too! (zonder escapes)

| First cell|Second cell|Third cell
| First | Second | Third |

First | Second | 3rd | Fourth |

separator lines:

|----+----|
+----|----+
|---------|
|-
| :-----: |
-|-

|====+====|
+====|====+
|=========|
|=

tabel:

|-----------------+------------+-----------------+----------------|
| Default aligned |Left aligned| Center aligned  | Right aligned  |
|-----------------|:-----------|:---------------:|---------------:|
| First body part |Second cell | Third cell      | fourth cell    |
| Second line     |foo         | **strong**      | baz            |
| Third line      |quux        | baz             | bar            |
|-----------------+------------+-----------------+----------------|
| Second body     |            |                 |                |
| 2 line          |            |                 |                |
|=================+============+=================+================|
| Footer row      |            |                 |                |
|-----------------+------------+-----------------+----------------|


eenvoudige versie:

|---
| Default aligned | Left aligned | Center aligned | Right aligned
|-|:-|:-:|-:
| First body part | Second cell | Third cell | fourth cell
| Second line |foo | **strong** | baz
| Third line |quux | baz | bar
|---
| Second body
| 2 line
|===
| Footer row


horizontale regels:

* * *

---

  _  _  _  _

---------------

This is a para.
<div>
Something in here.
</div>
Other para.

This is a para.
<!-- a *comment* -->
<!-- a `comment`
   spanning multiple lines
--> First part of para,
continues here.

Information can be found on the <http://example.com> homepage.
You can also mail me: <arthurvk@xs4all.nl>

> This is a paragraph.
>
> > A nested blockquote.
>
> ## Headers work
>
> * lists too
>
> and all other block-level elements

> A code block:
>
>     ruby -e 'puts :works'

This is [a link](http://rubyforge.org) to a page.
A [link](../test "local URI") can also have a title.
And [spaces](link with spaces.html)!

Klik [hier](http://localhost:4000/hitchens/projecten.html) om naar Projecten te gaan.

This is a [reference style link][linkid] to a page. And [this]
[linkid] is also a link. As is [this][] and [THIS].

[linkid]: http://www.arthurvankruining.nl/ "Optional Title"

The next paragraph contains a link and some text.

[Room 100]\: There you should find everything you need!

[Room 100]: link_to_room_100.html

Here comes a ![logo](../../../../assets/images/next.png)! And here
![too](../images/other.png 'Title text'). Or ![here].
With empty alt text ![](see.jpg)

Hier is een priorij te zien: 

![smiley](../../../../assets/images/priory.jpg){:width="300px"}
*De Priorij van Sorrento*


{% include image.html
            img="/assets/images/priory.jpg"
            title="afbeelding laadt niet!"
            caption="caption voor image" 
            width="300px" %}

<!-- And here is a referenced image ![smile]

[smile]: ../../../../assets/images/priory.jpg
{: width="200px"} -->

*some text*
_some text_
**some text**
__some text__

This is un*believe*able! This d_oe_s not work!

This is a ***text with light and strong emphasis***.
This **is _emphasized_ as well**.
This *does _not_ work*.
This **does __not__ work either**.

This is a * literal asterisk.
These are ** two literal asterisk.
As \*are\* these!

Use `<html>bla bla </html>` tags for this.


This is some text.[^1]. Other text.[^footnote]. En nog een.[^other-note] Dit is de[^codeblock-note].

[^1]: Some *crazy* footnote definition.

[^footnote]:
    > Blockquotes can be in a footnote.

        as well as code blocks

    or, naturally, simple paragraphs.

[^other-note]:       no code block here (spaces are stripped away)

[^codeblock-note]:
        this is now a code block (8 spaces indentation)


This is some <<text>> not written in HTML but in another language!

*[another language]: It's called Markdown

*[HTML]: HyperTextMarkupLanguage
{:.mega-big}



* list item one

* list item two


* list one
^
* list two

A simple paragraph with an ID attribute.
{: #para-one}

> A blockquote with a title
{:title="The blockquote title"}
{: #myid}

{:.ruby}
    Some code here

This *is*{:.underline} some `code`{:#id}{:.class}.
A [link](test.html){:rel='something'} and some **tools**{:.tools}.

This *is italic*{::}*marked*{:.special} text




