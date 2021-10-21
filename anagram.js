//ANAGRAM EXAMPLE1 repeating code

function findAnagrams(word1, word2) {
  let wordA = word1.length;
  let wordB = word2.length;

  // if the length of both strings is not equal, they are not anagrams
  if (wordA !== wordB) {
    return false;
  }

  /* sort the both strings ===
    to lowercase() converts strings to lowcase letters,
    split() converts the strings into an array
    sort() orders the array
    join() converts that array to ordered string 
    */

  const sortedA = word1.toLowerCase().split('').sort().join('');
  const sortedB = word2.toLowerCase().split('').sort().join('');

  // compare the sorted strings again to see if they really are anagrams

  if (sortedA === sortedB) {
    console.log('True');
  } else {
    console.log('False');
  }
}

findAnagrams('listen', 'listen'); //true

//ANAGRAM EXAMPLE 2 using array methods

// function takes two strings
function checkAnagrams(str1, str2) {
  //extra function that helps to order the string
  function orderString(string) {
    // regex code removes non-alphabet characters (== leave only letters).
    return string.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
  }

  //if the strings are same, then it's an anagram
  return orderString(str1) === orderString(str2);
}

console.log(checkAnagrams('listen', 'lsiten')); //false
console.log(checkAnagrams('plaaa', 'plöö')); // false

//ANAGRAM EXAPLE 3 using loops & object

//function takes two strings
function getAnagrams(str1, str2) {
  // convert both strings to character maps. we'll use buildCharMap function below on both strings
  const charMap1 = buildCharMap(str1);
  const charMap2 = buildCharMap(str2);

  // check the length of the character maps. if the lenght of the keys is different, they are not anagrams
  if (Object.keys(charMap1).length !== Object.keys(charMap2).length) {
    return false;
  }

  // loop through each character and compare both character maps. If they're not equal, function returns falase.
  for (let char in charMap1) {
    if (charMap1[char] !== charMap2[char]) {
      return false;
    }
  }
  // if there is an anagram, return true
  return true;
}

// function that converts the string to an object and counts the times a certain letter
// is found in the string.
function buildCharMap(str) {
  //empty object
  const charMap = {};
  let checkString = str.replace(/[^\w]/g, '').toLowerCase();

  /* for of -loop iterates the characters one by one.
  it adds one if map already has this character. Otherwise (||) it _assigns value_ 1 if the character does not yet exist
  in the charMap */
  for (let char of checkString) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

console.log(getAnagrams(' Eleven plus two ', ' Twelve plus one')); //true
