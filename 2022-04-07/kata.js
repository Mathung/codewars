// Who likes it?

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.

function likes(names) {
    if (!names.length) return "no one likes this";
    return names.reduce((acc, next, index) => {
      if (index===0) {
        if (names.length === 1) return acc + `${next} likes this`;
        return acc + next;
      }
      if (names.length === 2) {
        return acc + ` and ${next} like this`;
      }
      if (names.length < 4) {
        if (index < 2) return acc + ", " + next;
        return acc + ` and ${next} like this`;
        };
      if (index < 2) {
        return acc + ", " + next
      }
      if (index === 2) {
        return acc + ` and ${names.length - 2} others like this`
      }
      return acc
    }, "")
  }