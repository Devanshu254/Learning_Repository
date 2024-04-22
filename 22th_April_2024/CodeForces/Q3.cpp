#include <bits/stdc++.h>
using namespace std;
string toLowerCase(string str)
{
    for (int i = 0; i < str.size(); i++)
    {
        str[i] = tolower(str[i]);
    }
    return str;
}
int main()
{
    string str1, str2;
    cin >> str1;
    cin >> str2;
    str1 = toLowerCase(str1);
    str2 = toLowerCase(str2);
    // compare strings.
    if (str1 > str2)
    {
        cout << 1 << endl;
    }
    else if (str1 < str2)
    {
        cout << -1 << endl;
    }
    else
    {
        cout << 0 << endl;
    }
    return 0;
}
