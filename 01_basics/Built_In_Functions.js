// | Function        | Example                      | Result         |
// | --------------- | ---------------------------- | -------------- |
// | `length`        | `str.length`                 | `10`           |
// | `toUpperCase()` | `str.toUpperCase()`          | `JAVASCRIPT`   |
// | `toLowerCase()` |                              |                |
// | `trim()`        | `" hi ".trim()`              | `"hi"`         |
// | `includes()`    | `str.includes("Script")`     | `true`         |
// | `startsWith()`  |                              |                |
// | `endsWith()`    |                              |                |
// | `indexOf()`     | `str.indexOf("a")`           | `1`            |
// | `slice()`       | `str.slice(0,4)`             | `"Java"`       |
// | `replace()`     | `str.replace("Java","Type")` | `"TypeScript"` |
// | `split()`       | `"a,b".split(",")`           | `["a","b"]`    |


// | Method              | Description                     | Example                       |
// | ------------------- | ------------------------------- | ----------------------------- |
// | `getFullYear()`     | Year (4 digits)                 | `d.getFullYear()` → 2026      |
// | `getMonth()`        | Month (0–11)                    | `d.getMonth()` → 1 (Feb)      |
// | `getDate()`         | Day of month (1–31)             | `d.getDate()` → 5             |
// | `getDay()`          | Day of week (0–6)               | `d.getDay()` → 3 (Wed)        |
// | `getHours()`        | Hours (0–23)                    | `d.getHours()` → 14           |
// | `getMinutes()`      | Minutes                         | `d.getMinutes()` → 30         |
// | `getSeconds()`      | Seconds                         | `d.getSeconds()` → 15         |
// | `getMilliseconds()` | Milliseconds                    | `d.getMilliseconds()` → 123   |
// | `getTime()`         | Timestamp (ms since Jan 1,1970) | `d.getTime()` → 1675564800000 |



// | Function               | Description         | Example                                     |
// | ---------------------- | ------------------- | ------------------------------------------- |
// | `toDateString()`       | Human-readable date | `d.toDateString()` → "Wed Feb 05 2026"      |
// | `toTimeString()`       | Human-readable time | `"14:30:15 GMT+0530 (India Standard Time)"` |
// | `toISOString()`        | ISO format          | `"2026-02-05T08:00:00.000Z"`                |
// | `toLocaleDateString()` | Localized date      | `"2/5/2026"`                                |
// | `toLocaleTimeString()` | Localized time      | `"2:30:15 PM"`                              |
// | `toUTCString()`        | UTC format          | `"Wed, 05 Feb 2026 08:00:00 GMT"`           |

// let arr = [1, 2, 3, 4];

// | Function    | Description          | Example               | Output        |
// | ----------- | -------------------- | --------------------- | ------------- |
// | `push()`    | Add element at end   | `arr.push(5)`         | `[1,2,3,4,5]` |
// | `pop()`     | Remove last element  | `arr.pop()`           | `[1,2,3,4]`   |
// | `unshift()` | Add element at start | `arr.unshift(0)`      | `[0,1,2,3,4]` |
// | `shift()`   | Remove first element | `arr.shift()`         | `[2,3,4]`     |
// | `length`    | Number of elements   | `arr.length`          | `4`           |
// | `concat()`  | Merge arrays         | `[1,2].concat([3,4])` | `[1,2,3,4]`   |
// | `join()`    | Convert to string    | `[1,2,3].join('-')`   | `'1-2-3'`     |

// const arr = [1, 2, 3, 4, 5];

// | Function        | Description          | Example                    | Output                                  |
// | --------------- | -------------------- | -------------------------- | --------------------------------------- |
// | `slice()`       | Copy portion         | `arr.slice(1,3)`           | `[2,3]`                                 |
// | `splice()`      | Add/remove items     | `arr.splice(1,2,5,6)`      | removes 2 elements at index 1, adds 5,6 |
// | `indexOf()`     | First index of value | `arr.indexOf(3)`           | `2`                                     |
// | `lastIndexOf()` | Last index of value  | `[1,2,3,2].lastIndexOf(2)` | `3`                                     |
// | `includes()`    | Check presence       | `arr.includes(2)`          | `true`                                  |
// | `reverse()`     | Reverse array        | `[1,2,3].reverse()`        | `[3,2,1]`                               |
// | `sort()`        | Sort array           | `[3,1,2].sort()`           | `[1,2,3]`                               |

// difference between `slice` and `splice`:
// - `slice` does not modify the original array, while `splice` does.
// - `slice` takes start and end indices, while `splice` takes start index, delete count, and optional items to add.

// | Method / Property | Description          | Example             | Output             |
// | ----------------- | -------------------- | ------------------- | ------------------ |
// | `length`          | Number of characters | `str.length`        | `14`               |
// | `toUpperCase()`   | Uppercase            | `str.toUpperCase()` | `"  JAVASCRIPT  "` |
// | `toLowerCase()`   | Lowercase            | `str.toLowerCase()` | `"  javascript  "` |
// | `trim()`          | Remove whitespace    | `str.trim()`        | `"JavaScript"`     |
// | `trimStart()`     | Remove start space   | `str.trimStart()`   | `"JavaScript  "`   |
// | `trimEnd()`       | Remove end space     | `str.trimEnd()`     | `"  JavaScript"`   |



// | Method               | Description        | Example               | Output   |
// | -------------------- | ------------------ | --------------------- | -------- |
// | `charAt(index)`      | Character at index | `str.charAt(2)`       | `"J"`    |
// | `charCodeAt(index)`  | UTF-16 code        | `str.charCodeAt(0)`   | `32`     |
// | `codePointAt(index)` | Full Unicode code  | `"😊".codePointAt(0)` | `128522` |
// | Bracket access       | Same as `charAt`   | `str[2]`              | `"J"`    |



// | Method             | Description      | Example                   | Output |
// | ------------------ | ---------------- | ------------------------- | ------ |
// | `indexOf(sub)`     | First occurrence | `str.indexOf("Script")`   | `5`    |
// | `lastIndexOf(sub)` | Last occurrence  | `str2.lastIndexOf("aa")`  | `6`    |
// | `includes(sub)`    | True/False       | `str.includes("Java")`    | `true` |
// | `startsWith(sub)`  | Check start      | `str.startsWith("Ja")`    | `true` |
// | `endsWith(sub)`    | Check end        | `str.endsWith("pt")`      | `true` |
// | `search(regex)`    | Regex search     | `"Hello123".search(/\d/)` | `5`    |



// | Method                  | Description      | Example              | Output           |
// | ----------------------- | ---------------- | -------------------- | ---------------- |
// | `slice(start, end)`     | Extract portion  | `str.slice(2,8)`     | `"JavaSc"`       |
// | `slice(start)`          | Till end         | `str.slice(2)`       | `"JavaScript  "` |
// | `slice(-3)`             | Last 3 chars     | `str.slice(-3)`      | `"ipt"`          |
// | `substring(start, end)` | Similar to slice | `str.substring(2,8)` | `"JavaSc"`       |
// | `substr(start, length)` | Start + length   | `str.substr(2,4)`    | `"Java"`         |

// Difference between `slice` and `substring`:
// - `slice` can take negative indices, while `substring` treats them as 0.
// - If start > end, `substring` swaps them, but `slice` does not.

// | Method                 | Description           | Example                      | Output       |
// | ---------------------- | --------------------- | ---------------------------- | ------------ |
// | `replace(old, new)`    | First match only      | `str2.replace("aa","XX")`    | `"XX bb aa"` |
// | `replaceAll(old, new)` | All matches           | `str2.replaceAll("aa","XX")` | `"XX bb XX"` |
// | `repeat(n)`            | Repeat string n times | `"Hi".repeat(3)`             | `"HiHiHi"`   |


// let words = "I love JS";
// | Method             | Description    | Example                       | Output              |
// | ------------------ | -------------- | ----------------------------- | ------------------- |
// | `split(separator)` | String → Array | `words.split(" ")`            | `["I","love","JS"]` |
// | `join(separator)`  | Array → String | `["I","love","JS"].join("-")` | `"I-love-JS"`       |
