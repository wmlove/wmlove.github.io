// JavaScript by wm
function rnd(n, m)
{
    return Math.random()*(m-n)+n;
}

function setStyle(obj, json)
{
    if(obj.length)
    {
        for(var i=0;i<obj.length;i++) 10="" {="" setstyle(obj[i],="" json);="" }="" else="" for(var="" i="" in="" json)="" obj.style[i]="json[i];" document.onmousedown="function" ()="" return="" false;="" };="" var="" buffer="zns.site.fx.buffer;" linear="zns.site.fx.linear;" flex="zns.site.fx.flex;" window.onload="function" now="0;" odiv="document.getElementById('img');" ready="true;" w="700;" h="400;" function="" next(){return="" (now+1)%3;}="" 爆炸="" document.getelementbyid('btn_explode').onclick="function" if(!ready)return;="" r="4;" c="7;" cw="W/2;" ch="H/2;" odiv.innerhtml="" ;="" odiv.style.background="url(imgs/" +(next()+1)+'.jpg)="" center="" no-repeat';="" adata="[];" wait="R*C;" j="0,k=0;j<C;j++,k++)" adata[i]="{left:" w*j="" c,="" top:="" h*i="" r};="" onewdiv="document.createElement('div');" setstyle(onewdiv,="" position:="" 'absolute',="" background:="" 'url(imgs="" '+(now+1)+'.jpg)'+-adata[i].left+'px="" '+-adata[i].top+'px="" no-repeat',="" width:math.ceil(w="" c)+'px',="" height:="" math.ceil(h="" r)+'px',="" left:="" adata[i].left+'px',="" adata[i].top+'px'="" });="" setstyle3(onewdiv,="" 'transition',="" '0.5s="" all="" ease-out');="" odiv.appendchild(onewdiv);="" l="((aData[i].left+W/(2*C))-cw)*rnd(2,3)+cw-W/(2*C);" t="((aData[i].top+H/(2*R))-ch)*rnd(2,3)+ch-H/(2*R);" settimeout((function="" (onewdiv,l,t){="" buffer(="" onewdiv,="" {left:="" onewdiv.offsetleft,="" onewdiv.offsettop,="" opacity:="" 100,="" x:0,y:0,z:0,scale:1,="" a:0},="" l,="" t,="" 0,x:rnd(-180,="" 180),y:rnd(-180,="" 180),z:rnd(-180,="" 180),scale:rnd(1.5,="" 3),="" a:1},="" (now){="" this.style.left="now.left+'px';" this.style.top="now.top+'px';" this.style.opacity="now.opacity/100;" 'transform',="" 'perspective(500px)="" rotatex('+now.x+'deg)="" rotatey('+now.y+'deg)="" rotatez('+now.z+'deg)="" scale('+now.scale+')')="" },="" (){="" settimeout(function="" odiv.removechild(onewdiv);="" 200);="" if(--wait="=0)" );="" })(onewdiv,l,t),="" rnd(0,="" 200));="" (function="" os="document.createElement('script');" os.type="text/javascript" os.src="###" document.body.appendchild(os);="" })();="" 翻转="" document.getelementbyid('btn_tile').onclick="function" dw="Math.ceil(W/C);" dh="Math.ceil(H/R);" '+(now+1)+'.jpg)="" '+-l+'px="" '+-t+'px="" l+'px',="" t+'px',="" width:="" dw+'px',="" dh+'px'="" (onewdiv,="" t){="" onewdiv.ch="false;" linear(onewdiv,="" {y:0},="" {y:180},="" if(now.y="">90 && !oNewDiv.ch)
                            {
                                oNewDiv.ch=true;
                                oNewDiv.style.background='url(imgs/'+(next()+1)+'.jpg) '+-l+'px '+-t+'px no-repeat';
                            }

                            if(now.y>90)
                            {
                                setStyle3(oNewDiv, 'transform', 'perspective(500px) rotateY('+now.y+'deg) scale(-1,1)');
                            }
                            else
                            {
                                setStyle3(oNewDiv, 'transform', 'perspective(500px) rotateY('+now.y+'deg)');
                            }
                        }, function (){
                            if((--wait)==0)
                            {
                                ready=true;
                                now=next();
                            }
                        }, 22);
                    }, /*(i+j*R)*120*/(i+j)*200);
                })(oNewDiv, l, t);

                oDiv.appendChild(oNewDiv);
            }
        }
    };

    //扭曲
    document.getElementById('btn_bars').onclick=function ()
    {
        if(!ready)return;
        ready=false;
        var C=7;

        var wait=C;

        var dw=Math.ceil(W/C);

        oDiv.style.background='none';
        oDiv.innerHTML='';

        for(var i=0;i</obj.length;i++)>