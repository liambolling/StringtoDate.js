<h1>Welcome to StringToDate.js</h1>

I ran into an issue where my latest project needed to extract a date object from a wide range of strings that contained dates. From what I could find, there wasn’t a library that could take a string such as <i>"The event is at July 23rd @ around 10:00”</i>, so I created one that relies on patterns and individual pieces of information, as opposed to a large library of formats. This library will try its best to figure out the date you throw at it and I’ll be adding more natural language soon. 


<h3>Example strings that StringToDate.js can take:</h3>

<ul>
<li>"The event is at July 23rd @ around 10:00" returns <i>Thu Jul 23 2015 10:00:54 GMT-0400 (EDT),Thu Jul 23 2015 10:00:54 GMT-0400 (EDT)</i></li>
<li>"I’ll meet you at Johns house at around 10:00PM on the 20th" returns <i>Wed May 20 2015 22:00:20 GMT-0400 (EDT),Wed May 20 2015 22:00:20 GMT-0400 (EDT)</i></li>
<li>"01.02.2016" returns <i>Wed May 20 2015 22:00:20 GMT-0400 (EDT),Wed May 20 2015 22:00:20 GMT-0400 (EDT)</i></li>
<li>"Jul 17th at 7:00PM to July 19th @ 6:30AM" returns <i>Fri Jul 17 2015 19:00:16 GMT-0400 (EDT),Sun Jul 19 2015 06:30:16 GMT-0400 (EDT)</i></li>
</ul>

<hr />

If you decide to use this, or build off of it, just give me some credit 😀
<br>
Twitter - <a href="http://twitter.com/liambolling">@liambolling</a>
<br>
LinkedIn - <a href="https://www.linkedin.com/in/liambolling">https://www.linkedin.com/in/liambolling</a>
<br>
Website - <a href="https://www.liambolling.com">https://www.liambolling.com</a>
