<!--                             
   UFO DATABASE   ufodb_banner.png
   http://localhost/webdev/SITES/UFO1_PHP/
   --> 
   <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<HTML>
   <head>
      <meta charset="utf-8" />
      <link rel="stylesheet"  type="text/css" href="style.css" />
      <script src="crud.js"></script>
      <title>UFO DATABASE</title>
   </head>
   <body onload="Load()">
     
        
      <header>
          <img src="./media/ufodb_banner.png" class="imgbanner" alt="Smiley face" >
      </header>


      <section>
         

      
         <div class="row" >
            <?php include "./person_views/PersonFormView.html" ?>
         </div>
         <div class="row">
            <?php include "./person_views/PersonListView.html" ?>
         </div>
         <div  id="section_content"></div>
      </section>
      <footer>
         <p class="footer">UFO-DATABASE</p>
      </footer>
   </body>
</html>