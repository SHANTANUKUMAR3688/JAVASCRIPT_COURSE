// string format array
given array without size in string format
//eg=12345...

public class Main{
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        String line=sc.nextLine();
        String parts[]=line.split("");
        int arr[]=new int[parts.length];
        for(int i=0;i<parts.length;i++){
            arr[i]=Integer.parseInt(parts[i]);
        }
        System.out.println(Arrays.toString(arr));
    }
}

comma seprated array
eg=1,2,3,4,...

public class Main{
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        String line=sc.nextLine();
        String parts[]=line.split(",");
        int arr[]=new int[parts.length];
        for(int i=0;i<parts.length;i++){
            arr[i]=Integer.parseInt(parts[i]);
            System.out.println(Arrays.toString(arr))
        }
    }
}


bracket input
eg=["[1,2,3,4]"]

public class Main{
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        String line=sc.nextLine().trim();
        line=line.replace("\\[|\\]","");
        String parts[]=line.split(",");
        int arr[]=new int[parts.length];
        for(int i=0;i<parts.length;i++){
            arr[i]=Integer.parseInt(parts[i]);
            System.out.println(Arrays.toString(arr))
        }
    }
}

eg=apple banana orange

public class Main{
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        String line=sc.nextLine();
        String word[]=line.split(" ");
        System.out.println(Arrays.toString(word))
    }
}


eg=12.3456

public class Main{
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        double num=sc.nextDouble();
        System.out.printf("%.2f",num);
    }
}

rows=3 cols=2
input="1,2,3,4,5,6"

public class Main{
    public static void main(String[] args){
        int rows=3;
        int cols=2;
        Scanner sc=new Scanner(System.in);
        String line=sc.nextLine();
        String parts[]=line.split(",");
        int matrix[][]=new int[rows][cols];
        int k=0;
        for(int i=0;i<rows;i++){
            for(int j=0;j<cols;j++){
                matrix[i][j]=Integer.parseInt(parts[k].trim());
                k++;
            }
        }
    }
}
