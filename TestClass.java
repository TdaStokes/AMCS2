import java.util.Scanner;

public class TestClass {

	public static void main(String[] args) {
		for (int i = 0; i <= 10; i++){		
		System.out.println( "Hello World " + i);
		}
		int[] numbers = new int[10];
		System.out.println(numbers[0]);
		
		for(int i = 0; i < 10; i++){
			numbers[i] = i;
			System.out.println(numbers[i]);
			
			Scanner scan = new Scanner(System.in);
			
			int input = -1;
			
			while(input != 10) {
			System.out.println("Input: ");
			try {
			input = scan.nextInt();
			}
			System.out.print("Done!");
			scan.close();
		}
	}

}
