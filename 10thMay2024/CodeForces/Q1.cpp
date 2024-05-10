#include<bits/stdc++.h>
using namespace std;
int main() {
    string s;
    cin>>s;
    int isUpper = 0, isLower = 0;
    for(char c: s) {
        if(isupper(c)) {
            isUpper++;
        } else {
            isLower++;
        }
    }
    if(isUpper > isLower) {
        for(int i=0;i<s.size();i++) {
            s[i] = toupper(s[i]);
        }
        cout<<s<<endl;
    }else {
        for(int i=0;i<s.size();i++) {
            s[i] = tolower(s[i]);
        }
        cout<<s<<endl;
    }
    return 0;
}
