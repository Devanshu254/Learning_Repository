// https://codeforces.com/problemset/problem/110/A

#include <bits/stdc++.h>
using namespace std;
int main()
{
    long long int n;
    cin >> n;
    int luckey = 0;
    while (n)
    {
        if (n % 10 == 7 || n % 10 == 4)
        {
            luckey++;
        }
        n = n / 10;
    }
    if (luckey == 7 || luckey == 4)
    {
        cout << "YES" << endl;
    }
    else
    {
        cout << "NO" << endl;
    }
    return 0;
}
