//九宫格生成
class sudo{
    sudoarr = [[],[],[],[],[],[],[],[],[]];
      constructor(){
            this.sudoarr = this.Init();
      }
    Mount(){
        
        for(let i=0;i<9;i++){
            for(let j=0;j<9;j++){
                let  p = Math.floor((i)/3);
                let  q = Math.floor((j)/3);
                let  t = p+q*3+1;
             document.getElementsByClassName("sudoku-cell-small-" +t.toString() )[j%3+(i%3)*3].innerHTML = this.sudoarr[i][j];
             console.log(this.sudoarr[i][j]);
            }
        }
    }
    Checkcolumn(arr,n, col){
        var result = true;
        for(let i=0;i<9;i++)
        {
            if(arr[i][col] == n){
                result = false;
                break;
            }
        }
        return result;
    }
    Checkrow(arr,n, row){
        var result = true;
        for(let i=0;i<9;i++)
        {
            if(arr[row][i] == n){
                result = false;
                break;
            }
        }
        return result;
    }
     Checkninecells(arr,n,p,q){
        var result = true;
        var sp = p*3;
        var sq = q*3;
        for(let i=sp;i<sp+3;i++){
            for(let j=sq;j<sq+3;j++)
            {
                if(arr[i][j] == n){
                    result = false;
                    break;
                }
            }
        if(!result)break;   
        }
        return result;
    }
     Init()
    {
        var sudo = [[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]
        var n = Math.floor(Math.random()*9)+1;
        for(let i=0;i<9;i++){
            for(let j=0;j<9;j++){
                let p =Math.floor(i/3);
                let q = Math.floor(j/3);
                for(let k=0;k<9;k++){
                    if(this.Checkcolumn(sudo,n,j)&&this.Checkrow(sudo,n,i)&&this.Checkninecells(sudo,n,p,q)){
                        sudo[i][j] = n;
                        break;
                    }
                    else{
                        n = n%9 +1;
                    }
                }       
        }  
        n = n%9 +1;
        }
         this.upset(sudo); 
         this.makehole(sudo);
        return sudo;
    }
     upset(arr) {
                
                 //按行交换
                 for(let i=0;i<9;i++) {
                     let n = Math.floor(Math.random()*3);
                     let p =Math.floor(Math.random()*3)*3+n;
                     for(let j=0;j<9;j++) {
                         let tmp = arr[i][j];
                         let t = (Math.floor(i/3)*3)+((i+p)%3);
                         arr[i][j] = arr[t][j];
                         arr[t][j] = tmp;
                     }
                 }
                 //按列交换
                 for(let i=0;i<9;i++) {
                     let n = Math.floor(Math.random()*3);
                     let p = Math.floor(Math.random()*3)*3+n;
                     let t = (Math.floor(i/3)*3)+((i+p)%3);
                     for(let j=0;j<9;j++) {
                         let tmp = arr[j][i];
                         arr[j][i] = arr[j][t];
                         arr[j][t] = tmp;
                     }
                 }
                 
             }
    makehole(arr){
        for(let i=0;i<40;i++) {
            let n = Math.floor(Math.random()*9);
             let m = Math.floor(Math.random()*9);
                if(arr[n][m] > 0) {
                     arr[n][m] = " ";
                     
                             }
    }
    
}
}



