(function(){
var dialog=document.getElementById('case-lock');
if(!dialog||!dialog.showModal)return;
var opener=null;
document.querySelectorAll('a[data-lock]').forEach(function(a){
a.addEventListener('click',function(e){
e.preventDefault();
opener=a;
dialog.showModal();
});
});
dialog.addEventListener('click',function(e){
if(e.target===dialog)dialog.close();
});
dialog.addEventListener('close',function(){
if(opener)opener.focus();
});
})();
