# 상황에 다른 this 값들

console.log(this); // window

function func(){
    console.log(this); // window
}

const obj = {
  data : {
    func : function(){ console.log(this) }
  }
}
obj.data.func(); // obj.data

document.getElementById('btn').addEventListener('click', function(e){
  console.log(this) // e.currentTarget
});
