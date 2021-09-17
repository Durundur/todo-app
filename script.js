
const taskName = document.getElementById('input');
const bntAdd = document.getElementById('bnt-add');



bntAdd.addEventListener("click", ()=>
{

   let section = document.querySelector('section');

   const newTask = document.createElement('li');
   const span  = document.createElement('span');
   span.textContent = taskName.value;
   newTask.appendChild(span);
   newTask.classList.add('task');
   // const ul = document.createElement('ul');


   //icons div//
    const newIcons = document.createElement('div');
    newIcons.classList.add('icons');
   //done icon//
    const newIco = document.createElement('ion-icon');
    newIco.setAttribute('name','checkmark-circle');
    newIco.setAttribute('name','checkmark-circle');
    newIco.classList.add('done-ico');
   //undone icon//
   const newIco2 = document.createElement('ion-icon');
    newIco2.setAttribute('name','close-circle');
    newIco2.classList.add('unfinish-ico');
   //bin icon//
   const newIco3 = document.createElement('ion-icon');
    newIco3.setAttribute('name','trash-bin');
    newIco3.setAttribute('class', 'bin-ico');
    
   newIcons.appendChild(newIco);
   newIcons.appendChild(newIco2);
   newIcons.appendChild(newIco3);
   newTask.appendChild(newIcons);
   // ul.appendChild(newTask);
   section.appendChild(newTask);
   taskName.value = '';

   

   const restoreBnt = document.querySelectorAll('ion-icon[name=close-circle]');
   console.log(restoreBnt);
   
   for(let bntr of restoreBnt){
   bntr.addEventListener('click', function(){
      console.log(this.parentElement.parentElement);
      this.parentElement.parentElement.classList.remove('crossedTask');
      })}
   
   const doneBnt = document.querySelectorAll('ion-icon[name=checkmark-circle]');

   for (let bnt of doneBnt) {
      bnt.addEventListener('click', function(){
      console.log(this.parentElement.parentElement);
      this.parentElement.parentElement.classList.add('crossedTask')

   })}

   const removeBnt = document.querySelectorAll('ion-icon[name=trash-bin]');

   for(let bntd of removeBnt){
      bntd.addEventListener('click', function(){
      console.log(this.parentElement.parentElement);
      this.parentElement.parentElement.remove();
   })}
         
         
         
      
   

})


