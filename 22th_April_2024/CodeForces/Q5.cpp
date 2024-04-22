https://codeforces.com/problemset/problem/281/A?csrf_token=bb25a090796f19aab0697cce6f973f9b
// https://codeforces.com/problemset/problem/281/A?csrf_token=bb25a090796f19aab0697cce6f973f9b
#include<bits/stdc++.h>
using namespace std;
int main() {
    string str;
    cin>>str;
    if(str[0] >= 'a' && str[0] <= 'z') {
        str[0] = str[0] - 'a' + 'A';
    }
    cout<<str<<endl;
    return 0;
}
// We can also use toupper function.
// #include<bits/stdc++.h>
// using namespace std;
// int main() {
//     string str;
//     cin>>str;
//     str[0] = toupper(str[0]); // Assign the uppercase version back to str[0]
//     cout<<str<<endl;
//     return 0;
// }

