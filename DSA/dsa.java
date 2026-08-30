public class MatrixPrint {
    public static void main(String[] args) {

        int[][] matrix = {
            {0, 1, 0, 0},
            {1, 1, 0, 1},
            {1, 1, 1, 1}
        };

        int maxCount = 0;
        int rowIndex = -1;

        for(int i = 0; i < matrix.length; i++) {
            int count = 0;  // Reset count for each row

            for(int j = 0; j < matrix[i].length; j++) {
                if(matrix[i][j] == 1){
                    count++;
                }
            }

            // Check if this row has more 1s
            if(count > maxCount){
                maxCount = count;
                rowIndex = i+1;
            }
        }

        System.out.println("Row with maximum 1s: " + rowIndex);
        System.out.println("Maximum number of 1s: " + maxCount);
    }
}

| Method          | Description        | Example                  |
| --------------- | ------------------ | ------------------------ |
| `length()`      | Returns length     | `str.length()`           |
| `toUpperCase()` | Uppercase          | `str.toUpperCase()`      |
| `toLowerCase()` | Lowercase          | `str.toLowerCase()`      |
| `charAt(i)`     | Character at index | `str.charAt(0)`          |
| `substring()`   | Extract part       | `str.substring(0,4)`     |
| `contains()`    | Check text         | `str.contains("Sha")`    |
| `equals()`      | Compare            | `str.equals("Shantanu")` |
| `trim()`        | Remove spaces      | `" hi ".trim()`          |
| `replace()`     | Replace text       | `str.replace("a","x")`   |
| `split()`       | Split string       | `str.split(" ")`         |


| Method          | Use            |
| --------------- | -------------- |
| `Math.abs()`    | Absolute value |
| `Math.max()`    | Maximum        |
| `Math.min()`    | Minimum        |
| `Math.sqrt()`   | Square root    |
| `Math.pow()`    | Power          |
| `Math.round()`  | Round value    |
| `Math.ceil()`   | Round up       |
| `Math.floor()`  | Round down     |
| `Math.random()` | Random number  |


| Method              | Use            |
| ------------------- | -------------- |
| `Arrays.sort()`     | Sort array     |
| `Arrays.toString()` | Print array    |
| `Arrays.equals()`   | Compare arrays |
| `Arrays.fill()`     | Fill array     |


| Method                 | Use             |
| ---------------------- | --------------- |
| `Integer.parseInt()`   | String → int    |
| `Double.parseDouble()` | String → double |
| `String.valueOf()`     | Any → String    |
| `Integer.toString()`   | int → String    |


| Method         | Use            |
| -------------- | -------------- |
| `nextInt()`    | Read int       |
| `nextDouble()` | Read double    |
| `nextLine()`   | Read full line |
| `next()`       | Read word      |


| Method                  | Use          |
| ----------------------- | ------------ |
| `Collections.sort()`    | Sort list    |
| `Collections.reverse()` | Reverse list |
| `Collections.max()`     | Max value    |
| `Collections.min()`     | Min value    |


| Class           | Common Methods  |
| --------------- | --------------- |
| `LocalDate`     | `now()`, `of()` |
| `LocalTime`     | `now()`         |
| `LocalDateTime` | `now()`         |


