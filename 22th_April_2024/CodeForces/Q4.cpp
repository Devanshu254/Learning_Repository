// https://codeforces.com/problemset/problem/339/A
#include<bits/stdc++.h>
using namespace std;
int main() {
    string str;
    cin>>str;
    vector<int> arr;
    for(char c: str) {
        if(c == '1' || c=='2'|| c=='3') {
            // convert into integer in order to store within array.
            int a = c-'0';
            arr.push_back(a);
        }
    }
    sort(arr.begin(), arr.end());
    // new string.
    string str1;
    // add value within new string using + sign in between.
    for(int i=0;i<arr.size();i++) {
        str1 += to_string(arr[i]);
        if(i != arr.size()-1) {
            str1 += "+";
        }
    }   
    cout<<str1<<endl;
    return 0;
}
