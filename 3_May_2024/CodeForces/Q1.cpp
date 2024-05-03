#include<bits/stdc++.h>
using namespace std;
int main() {
    int n;
    cin>>n;
    int result = INT_MIN;
    if(n <= 5) {
        cout<<1<<endl;
    }else {
        if(n % 5 == 0) {
            result = abs(n/5);
            cout<<result<<endl;
        }
        else {
            result = (abs(n/5))+1;
            cout<<result<<endl;
        }
    }
    return 0;
}
