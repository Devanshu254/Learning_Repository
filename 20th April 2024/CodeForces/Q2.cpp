// Below is the solution.
#include<bits/stdc++.h>
using namespace std;
int main() {
    int T;
    cin>>T;
    int result = 0;
    while(T--) {
        string str;
        cin>>str;
        if(str[0] == '+') {
            result++;
        }
        if(str[0] == '-') {
            result--;
        }
        if(str[2] == '+') {
            result++;
        }
        if(str[2] == '-') {
            result--;
        }
    }
    cout<<result<<endl;
    return 0;
}
