#include <stdio.h>
#include <math.h>
int main()
{
    double a, b, c;
    double disc, root1, root2, rp, ip;
    printf("Enter the values of a,b,c : ");
    scanf("%lf,%lf,%lf", &a, &b, &c);

    disc = b * b - 4 * a * c;
    if (disc > 0)
    {
        root1 = (-b + sqrt(disc)) / (2 * a);
        root2 = (-b - sqrt(disc)) / (2 * a);
        printf("root1 = %.2lf and root2 = %.2lf", root1, root2);
    }
    else if (disc == 0)
    {
        root1 = root2 = -b / (2 * a);
        printf("root1 = root2 = %.2lf;", root1);
    }
    else if (disc < 0)
    {
        rp = -b / (2 * a);
        ip = sqrt(-disc) / (2 * a);
        printf("root1 = %.2lf+%.2lfi and root2 = %.2f-%.2fi", rp, ip, rp, ip);
    }

    return 0;
}
