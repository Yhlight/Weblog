(function (window) {
    const YhLightApp = {
        _pageInfo: {
            main: "./HTML/main.html",
            homework: "./HTML/homework.html",
            note: "./HTML/note.html",
            excerpt: "./HTML/excerpt.html",
            project: "./HTML/project.html",
            about: "./HTML/about.html",
        },

        _metaData: {
            noteMetaData: [],
            excerptMetaData: [],
            projectMetaData: []
        },

        _dataPath: {
            note: "./Data/notes-meta.json",
            excerpt: "./Data/excerpts-meta.json",
            project: "./Data/projects-meta.json"
        },

        _requestCompletedCount: 0,

        init: function () {
            YhLightApp.Chtholly();

            YhLightApp.utils.sendRequest(YhLightApp._dataPath.note, (data) => {
                YhLightApp._metaData.noteMetaData = data;
                YhLightApp.utils.requestCompleted(3, complete)
            });

            YhLightApp.utils.sendRequest(YhLightApp._dataPath.excerpt, (data) => {
                YhLightApp._metaData.excerptMetaData = data;
                YhLightApp.utils.requestCompleted(3, complete)
            });

            YhLightApp.utils.sendRequest(YhLightApp._dataPath.project, (data) => {
                YhLightApp._metaData.projectMetaData = data;
                YhLightApp.utils.requestCompleted(3, complete)
            });

            function complete() {
                YhLightApp.indexManager.init();
                YhLightApp.pageManager.loadPage("main");
                YhLightApp.pageManager.SelectorAllLinks("nav-links");
            }
        },

        Chtholly: function () {
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
        },

        utils: {
            sendRequest: function (href, takeAction) {
                const xmlhttp = new XMLHttpRequest();
                xmlhttp.open("GET", href, true);
                xmlhttp.onreadystatechange = function () {
                    if (xmlhttp.readyState == 4) {
                        if (xmlhttp.status.toString().startsWith("2")) {
                            let responseText;
                            if (href.toLowerCase().endsWith("json")) {
                                responseText = JSON.parse(xmlhttp.responseText)
                            } else if (href.toLowerCase().endsWith("md")) {
                                YhLightApp.markDown.setCodeBlockTemplate(
                                    `<pre class="code-block"><code>{{content}}</code></pre>`
                                );
                                responseText = YhLightApp.markDown.markDownToHtml(xmlhttp.responseText, true, false);
                            } else {
                                responseText = xmlhttp.responseText
                            }
                            takeAction(responseText);
                        } else {
                            document.body.innerHTML = "";
                            const error = document.createElement("div");
                            error.innerHTML = `<p style="color: red; font-size: 2rem;">请求失败: ${xmlhttp.status}，您可能访问了未完成的页面或是因为网络不稳定导致加载失败或异常</p>`;
                            document.body.appendChild(error);
                        }
                    }
                };
                xmlhttp.send();
            },

            requestCompleted: function (finishCount, CompletedAction) {
                YhLightApp._requestCompletedCount++;
                if (YhLightApp._requestCompletedCount == finishCount) {
                    CompletedAction();
                    YhLightApp.utils._clearCompletedCount();
                }
                return YhLightApp._requestCompletedCount;
            },

            _clearCompletedCount: function () {
                YhLightApp._requestCompletedCount = 0;
            },

            fade: function () {
                const fadeElements = document.querySelectorAll('.fade-in');
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.style.opacity = 1;
                            entry.target.style.transform = 'translateX(0)';
                        }
                    });
                }, { threshold: 0.1 });

                fadeElements.forEach(element => {
                    element.style.opacity = 0;
                    element.style.transform = 'translateX(20px)';
                    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    observer.observe(element);
                });
            },
        }
    };

    window.YhLightApp = YhLightApp;
})(window);