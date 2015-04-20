<h1>Welcome to StringToDate.js</h1>

I ran into an issue where my latest project needed to extract a date object from a wide range of strings that contained dates. From what I could find, there wasn’t a library that could take a string such as "The event is at July 23rd @ around 10:00”, so I created one that relies on patterns and individual pieces of information, as opposed to a large library of formats. This library will try its best to figure out the date you throw at it and I’ll be adding more natural language soon. 


Example strings that StringToDate.js can take: 

The event is at July 23rd @ around 10:00 - Thu Jul 23 2015 10:00:53 GMT-0400 (EDT)

I’ll meet you at Johns house at around 10:00PM on the 20th - Mon Apr 20 2015 22:00:58 GMT-0400 (EDT)

01.02.2016 - Sat Jan 02 2016 17:58:15 GMT-0500 (EST)

If you decide to use this, or build off of it, just give me some credit 😀