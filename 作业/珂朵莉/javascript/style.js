document.addEventListener("DOMContentLoaded", () => {
    console.log(
        `
                        &  K&&&&&&&&  lM                  
                       & #&&F&&&&&&F&&  M                 
                     M. K&F&&&&KRRK&&&&K@M                
                    l M&&F&&&&&&&# KF&&K l                
                   @ F&F&K&&K&&&&FKXE#Y l                 
                  l RR&KF*&XY&XKKK&#.\`'                    
                 WMMFl}~':;\`\`~,++l}'\`,\`,'Y +..             
          Ml&##&l  ';..........:\`'~,\`\`:\`'+   ...          
       &#l       l~,~"++1+/>!!':\`:,\`',\`\`\`,\/\`:\`             
    M&    R#######FXI*YYXFFFKRKYY1/+';;::\`\`..\`:\~+~/       
   M   #####RRRR#K]}1}}}}}/"+]IFKRRKl;>]!.......   #lM    
  M $###RR#######*}}}}//i+/,!1+//lX&#XIRKFl+"!"!~~\`   &   
 MM##RR#########Y1}+""i/}1},'11YI*]l*FR&&&R###R&XII&&M    
 # #R##########R}>1/>ilX&I";\`''XXl*]"]RYF&FFF&&&KKKF&&RM@ 
 & ##R#########RX~F&1}>'l+:\`,\`\`"":i1"1R]X#RKK&&&&&&K&FY Y 
  M ###RRR######EXKR"+/\`,\`,,,,,\`:\~1]!>#R########RKFl]i' " 
   M  #####RRRRRR##&!il}",\`\`,,\`,\!]}]i~XE#####RKFY*l~;~YlM 
    &@   ########R#X~1}/*}i~;;!/ll>i}~+RK&FXI*ll]!,\`'W .  
      M#&      E#R$/i]>/&K&i*+"1XYl~/li]*lllll*1\`,i1 ..   
         Ml##&M   I*X+"IY&]~Fi>IXYI1"XXY*lllll*}lKW 1M    
               &MXIX1~lXYY*~>>IXYYY*/XYYY*llll&##R."M     
              MlKYYX"}FYYYXYlYXYYXXIYYXFKXl*lYRKKR &      
              l XIYYlYYXFXXX&FF&FXYYF&FYIX+1*RRKREM       
             & YYIYXFF&&KRKKKKKR&XX&&YIY&FI+X#RKR #       
            l&$&X&KK&&FXXFF&R&KXXYXXIYXKFIYFRRK#M+M       
           F MKKK&XYYYXXYYIF$FXKFX&YYX&YIXRRRR#I! >       
          l NIYXYYIYXYKXYYY#$RIXKRFYYFYIX#RRRRR"!+ \`      
         > i1IYYYYF&YFFIYYXRRKYIYYYYXYIXERKRK#]~~!i >     
        > +!}XYYXKKYY&YYYYYXYYKYYYYYYYYKERRR#X!">~!i \`    
       > i"+YYYY&KYIFXYYYYX&XYXYXYYYYYKKKRRR#}~~>>~!i +   
      + i"ii*YYXKXYYFYYYYXFI*lY+IXXYY&RKKKKKR*~!!/!~"1!l  
     , +~i+;lYYKXYYFXYYYYYYFFX*~ilII]&RRKKK&K&>!'ii~~i >  
    M.X"" ">XI&FYYXFYYYYY&XIXYY\`~>>>"FRKKKKFFF]!~>}i~> >  
    \` i"#,"]YX&YYY&XYYYYY]1]l}/\`,\`~>>>+&R&R&YFYYi'>I/"" \`  
    > >> M}IY&YYYX&YYYYYY,.....;\`\`;~"!!lKKYXXXX]'iNl"" ,  
    ! /}. XIFYYYYKXYYYYX]..:::.\`;\`\`\`\`/iXXIXYFYYi+KE>> \`  
        MFIXXYYI&KYYYYYX+.:...:.,,\`\`,:i+XIYYYKYIY FMii i  
      .l YIXYYYXRXYYYYYX>.:.....';\`\`,:i/FIYYXRXIYFlI1M!   
      & XYYYYYYKKYYYYYYI;\`...:;",';,\`\`,i/*YYYXRFYIX X      
      & XIYYYYKRFYYYYYX].,\`;!"":,;,,,\`+11IYYFRKYYYF 1     
     l.&YYYYY&RKYYYYYYX+...:\`:.,":\`':~+]ilYY&KRXYIY &     
     l XIYYY&KRFYYYYYYX~:!':\`,'"'\`:,;+il!/XXKKRFYYIX &    
    & XYYYYFRKKYYYYYYYY,\`i~.:;!,:',\`!i}~>"lKRKK&YYIY l    
   M&&YIYYFRKRFYYYYYYXl\`,,,,"i>,,,\`\`:+>.\~"i}I&RRYIYYF &   
   l XIYYXKKKRXYYYYYYX/:,\`\`,i>"\`\`\`\`\`\`\`,,'!!!"+lF&YIY &   
  & XIYYXKKKR&YYYYYYYX":,,,\`i>",,,,\`\`\`:,;i}**]1]R&YX l  
 Nl&YYYYKKKKRXYYYYYXFI;::::,>">,:::\`\`,;~"11>i>>+l&RK&& #  
 I XIYYKKKKR&YYYYYYKXIi>>""i}}]1>i++++i>!;!1+}YR$E#RKKXMM 
& XIYY&KKKKRXYYYYY&KX+\`;;;,~++/}~;;,,,;~>}&E###KR#K&K&X l 
&&YIY&RKKKKKYYYYYXRFYXI*l**XK#EKY*IYF&R###RRKKKKK&XI&&Y&NM
 XIYFRKKKKRFYYYYY&RXX&YR]*EIlEEIYEX/IKFKKKKRKKK&XYYYX&IX l
XYIXRKKKKKKYYYYYXRKY&&>i">+!]RRY!+>>>>lRKKKKKRFIYYYYYXXYEl
YIXKKKKKKRFYYYYY&R&YKR"~>ii>*RRFiiii";*RKKKRKRFYYYYYYYXYX 
XIXRKKKKKKYYYYYXKKXYK#+:,;''*RKRi~',\`:IRKKKRKRFYYYYYYYYYXK
 XYFKKKKKKXYYYI&RKYFKR*\`,\`\`:*#K#}:,\`\`,:l#KKKKKKXYYYYYYYYYIX
&  Y&KKKKRRK&&FKR&Y&KRI\`,\`,\`I#KR&'\`,\`,:>RKKKKKKXYYYYYIIIIYX
 &# RKRKKKKKKRRKKKKKKR*\`,\`,\`YRKKR>:,\`\`\`XRKKKRKYIIYYYYYYYE 
  #&R&KKKKRRKKKKRRKKKR*:,\`,\`:]#KK#1:,\`\`,:1#KKKKKYYXXXF     &
  l RKKKKKKKKKKKKKKKK#*:,\`,\`:/#KK#l:,\`,\`!R&&KKR      .ll&M 
       MKKKRRRKKKKKK&RI\`,\`,\`:>#KKRF,\`,\`,\`&RKKK#&l&&lM      
    &&l           KKK#l,\`\`,\`!R&K&R"\`,\`\`\`"                 
       MM&#######&    .,\`,\`\`;KRK&E":,\`,\`:!&l&lM            
                  l&&+M':,\`,\`.    ",\`,\`,:\~ .               
                     . ~:\`,\`,\`+#*#+M;:,,:\~ .               
                     l /,\`,\`\`" + . ':,,:' .               
                      . ;:,\`\`> + : !:\`\`:' .               
                      ..~:,,\`> + . /;,,:\~ .               
                      + ",,,\`! . . },:\`:, .               
                      . !:...; .  .&\`..., .               
                       . \`.:.; .  . ,.:., .               
                       . ;.:., .  . ;.:.; .               
                       . ~.:.,..  " ~.:.; .               
                       l >...:  M .l\`..., .               
                       l.E>ii"+ . l ]i1"!..               
                       + l!;,"F +& *",,'1% &              
                      & #";~!"F%  $&1}]/*$ #              
                     MNM#&E$$%WW %$EW$$#EE #              
                      @MEEEEE$WWMWWE###E#EMM
    `
    );

    const links = document.querySelectorAll(".catalogue a");
    window.addEventListener("scroll", () => {
        for (let link of links)
            link.classList.remove("bgc_add");

        for (let link = 0; link < links.length - 1; link++) {
            const targetId = links[link].getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            const nextTargetId = links[link + 1].getAttribute("href").substring(1);
            const nextTargetElement = document.getElementById(nextTargetId);
            if (window.pageYOffset > targetElement.offsetTop - 150 && window.pageYOffset < nextTargetElement.offsetTop - 150)
                links[link].classList.add("bgc_add");
        }

        const lastLink = links[links.length - 1];
        const lastTargetId = lastLink.getAttribute("href").substring(1);
        const lastTargetElement = document.getElementById(lastTargetId);

        if (lastTargetElement && window.pageYOffset > lastTargetElement.offsetTop - 150)
            lastLink.classList.add("bgc_add");
    });

    for (let link of links) {
        link.addEventListener("click", event => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);  // getAttribute()获取href返回的字符串带有#，使用substring()截取字符串
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        })
    }
})