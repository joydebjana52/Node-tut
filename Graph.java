import java.util.ArrayList;
import java.util.Scanner;

public class Graph
{   
    public static void addEdge(int x,int y)
    {
        adj[x].push(y);
        adj[y].push(x);
    }
    public static void main(String[] args)
    {
        Scanner input = new Scanner(System.in);
        int vertex = input.nextInt();

        ArrayList<Integer>[] adj = new ArrayList[vertex];

        for(int i = 0;i < vertex;i++)
        {
            int x = input.nextInt();
            int y = input.nextInt();
            addEdge(x,y);
        }
        input.close();
    }
}