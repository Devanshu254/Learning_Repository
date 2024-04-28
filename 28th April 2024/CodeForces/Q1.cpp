#include<bits/stdc++.h>
using namespace std;
int main() {
    int Lage, Bage;
    cin>>Lage;
    cin>>Bage;
    int count = 0;
    for(int i=0;i<100;i++) {
        Lage = Lage * 3;
        Bage = Bage * 2;
        count++;
        if(Lage > Bage) {
            cout<<count<<endl;
            break;
        }
    }
    return 0;
}
