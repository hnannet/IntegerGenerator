
import java.util.Random;
import java.util.HashSet;
import java.util.Set;

public class IntegerGenerator {

	public static void main(String[] args) {
		generateRandomNumbers(10);
	}
	
	public static void generateRandomNumbers(Integer n) {
		final Random r= new Random();
		final Set<Integer> s = new HashSet<>();
		  
		  for (int i = 0; i < n; i++){
		    while(true){
		    	int num = r.nextInt(n) + 1;
		    	if(s.contains(num)== false){
		    		s.add(num);
		    		System.out.println(num);
		    		break;
		    	}
		    }
		    
		}
	}

}
