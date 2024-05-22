// Below is the
#include<bits/stdc++.h>
using namespace std;
int main() {
    int k, n, w;
    int sum = 0;
    cin>>k>>n>>w;
    for(int i=1;i<=w;i++) {
        sum += (i*k);
    }
    if(sum <= n) {
        cout<<0<<endl;
    }else {
        cout<<sum-n<<endl;
    }
    return 0;
}
