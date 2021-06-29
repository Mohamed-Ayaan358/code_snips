#include <stdio.h>
#include <time.h>
#include <stdlib.h>
int power(int num, int pow)
{
    int final = num;
    for (int i = 0; i < pow - 1; i++)
    {
        final = final * 10;
    }
    return final;
}
int main()
{
    int range;
    srand(time(0));
    printf("How large do you want the random value to be?\n");
    scanf("%d", &range);
    int random = (rand() % (power(9, range))) + (power(1, range));
    printf("%d", random);
    return 0;
}
