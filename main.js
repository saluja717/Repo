   	var a=0;
   	  const fun =  () =>
   	  {
         
          if(a%2==0)
          {
            document.getElementById("menu").style.display="block"; a++;
             document.getElementById("btn").style.display="none";
          } 

          else
          {
          	document.getElementById("btn").style.display="block";
   	        document.getElementById("menu").style.display="none";
             a++;
          }

        
   	  }

   	  const show = ()=>
   	  {
            document.getElementById("btn").style.display="block";
   	        document.getElementById("menu").style.display="none";
   	        a++;
   	  }

      let date = new Date().getFullYear();
   	  document.getElementById('footer').innerHTML=`&copy; CopyRight ${date}`;

   