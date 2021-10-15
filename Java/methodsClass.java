import java.util.Scanner;
class methodsClass
{
    int revnum(int n)
    {
        int d; // to hold extracted digits
        int r = 0; //to store reversed number
        while (n > 0)
        {
            d = n % 10;
            r = r * 10 + d;
            n = n/10;
        }
        return r;
    }
    int factorial(int n)
    {
        {
            int fact = 1;
            for (int i = 1; i <= n; i++)
            {
                fact = fact * i;
            }
            return fact;
        }
    }
    boolean divisibiltyCheck(int num1, int num2)
    {
        if (num1 % num2 == 0)
        {
            return true;
        }
        else
            return false;
    }
    boolean palindromeCheck(int n)
    {
        int d, temp, r = 0;
        temp = n;
        while (temp > 0)
        {
            d = temp % 10;
            r = r * 10 + d;
            temp = temp/10;
        }
        if (r == n)
            return true;
        else
            return false;
    }
    int[] fibbonacci(int endLimit)
    {
        int[] output = new int[endLimit];
        output[0] = 1;
        output[1] = 1;
        for(int i=2; i < endLimit; i++)
        {
            output[i] = output[i-1] + output[i-2];
        }
        return output;
    }
}
