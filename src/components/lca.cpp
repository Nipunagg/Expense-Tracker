#include <bits/stdc++.h>
using namespace std;
int n;
vector<vector<int>> edges(200000);
vector<int> l(200000,0);
vector<int> p(200000);
int lca[30][200000];
void dfs(int u,int pr){
    p[u]=pr;
    for(int i=0;i<edges[u].size();i++){
        if(edges[u][i]==pr) continue;
        l[edges[u][i]]=l[u]+1;
        dfs(edges[u][i],u);
    }
}
int findans(int a,int b){
 
  int k=(l[a]>l[b] ? 0:1);
  int diff=abs(l[a]-l[b]);
  if(k){
      swap(a,b);
  }
  for(int i=29;i>=0;i--){
      if((diff>>i)&1){
          a=lca[i][a];
      }
  }
   if(a==b){
      return a;
  }
for(int i=29;i>=0;i--){
    if(lca[i][a]==lca[i][b]){
        continue;
    }
    a=lca[i][a];
    b=lca[i][b];
}
 
return lca[0][a];
 
}
int main() {
    int q;
    cin>>n>>q;
    for(int i=1;i<n;i++){
        int x;
        cin>>x;
        edges[x-1].push_back(i);
        edges[i].push_back(x-1);
    }
    dfs(0,-1);
    for(int i=0;i<30;i++){
        for(int j=0;j<n;j++){
            if(i==0){
                lca[i][j]=p[j];
                continue;
            }
            lca[i][j]=lca[i-1][lca[i-1][j]];
        }
    }
    /*for(int i=0;i<5;i++){
        for(int j=0;j<n;j++){
            cout<<lca[i][j]<<" ";
        }
        cout<<endl;
    }*/
    while(q--){
        int a,b;
        cin>>a>>b;
        int x=0;
         x=findans(a-1,b-1);
        cout<<x+1<<endl;
    }
 
}