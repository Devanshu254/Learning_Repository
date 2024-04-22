#include<bits/stdc++.h>
using namespace std;
int main() {
    int N = 5;
    int M = 5;
    int mat[N][M];
    for(int i=0;i<N;i++) {
        for(int j=0;j<M;j++) {
            cin>>mat[i][j];
        }
    }
    int result = 0;
    for(int i=0;i<N;i++) {
        for(int j=0;j<M;j++) {
            if(mat[i][j] == 1) {
                result += abs(2-i) + abs(2-j);
            }
        }
    }
    cout<<result<<endl;
    return 0;
}
