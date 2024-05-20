// Problem Link -> https://codeforces.com/problemset/problem/231/A
// Current Status -> Solved.
// Below
#include<bits/stdc++.h>
using namespace std;
int main() {
    int T;
    cin>>T;
    int result = 0;
    while(T--) {
        int p, v, t;
        cin>>p>>v>>t;
        if(p+v+t >=2) {
            result++;
        }
    }
    cout<<result<<endl;
    return 0;
}
