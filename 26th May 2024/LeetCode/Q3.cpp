class Solution {
public:
    int minOperations(vector<int>& nums, int k) {
        int n = 0;
        int count = 0;
        for(int i=0;i<nums.size();++i) {
            n++;
            if(nums[i] >= k) {
                count++;
            }
        }
        int result = n-count;
        return result;
    }
};
