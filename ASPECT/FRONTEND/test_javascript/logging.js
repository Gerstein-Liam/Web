function log_example(){

   //  1)
   const tom= {name: 'tom', age: 30};
   const pit= {name: 'pit', age: 33};
  
   console.log('%c My friend', 'color:orange;');
   console.log(tom,pit);

   console.table([tom,pit]);
   //  2)
   const DeleteMe= () => console.trace('ByeBye');
   DeleteMe();
   DeleteMe();



    
}