/*==========================================================
    script.js
    PORTAFOLIO ULTRAKILL
==========================================================*/

/*==========================================================
    MENÚ RESPONSIVE
==========================================================*/

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

        menuBtn.classList.toggle("active");

    });

}

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

        menuBtn.classList.remove("active");

    });

});

/*==========================================================
    SCROLL SUAVE
==========================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/*==========================================================
    ANIMACIONES AL HACER SCROLL
==========================================================*/

const observer=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{

    threshold:.2

});

document.querySelectorAll(

".fade-up,.fade-left,.fade-right,.zoom"

).forEach(el=>{

    observer.observe(el);

});

/*==========================================================
    BARRA SUPERIOR DE PROGRESO
==========================================================*/

const progress=document.createElement("div");

progress.style.position="fixed";

progress.style.top="0";

progress.style.left="0";

progress.style.height="4px";

progress.style.width="0%";

progress.style.background="#d10000";

progress.style.zIndex="999999";

progress.style.boxShadow="0 0 20px red";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

    const total=document.documentElement.scrollHeight-window.innerHeight;

    const percent=(window.scrollY/total)*100;

    progress.style.width=percent+"%";

});

/*==========================================================
    BOTÓN VOLVER ARRIBA
==========================================================*/

const topButton=document.createElement("button");

topButton.innerHTML="▲";

topButton.className="top-button";

document.body.appendChild(topButton);

topButton.style.position="fixed";

topButton.style.right="30px";

topButton.style.bottom="30px";

topButton.style.width="55px";

topButton.style.height="55px";

topButton.style.border="none";

topButton.style.borderRadius="50%";

topButton.style.background="#d10000";

topButton.style.color="white";

topButton.style.cursor="pointer";

topButton.style.display="none";

topButton.style.fontSize="22px";

topButton.style.boxShadow="0 0 20px rgba(255,0,0,.4)";

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topButton.style.display="block";

    }else{

        topButton.style.display="none";

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/*==========================================================
    CONTADORES ANIMADOS

    Coloca class="counter"
    y data-target="100"
==========================================================*/

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

    const update=()=>{

        const target=+counter.dataset.target;

        const current=+counter.innerText;

        const increment=target/80;

        if(current<target){

            counter.innerText=Math.ceil(current+increment);

            setTimeout(update,20);

        }else{

            counter.innerText=target;

        }

    };

    update();

});

/*==========================================================
    EFECTO ESCRITURA

    Coloca id="typing"
==========================================================*/

const typing=document.getElementById("typing");

if(typing){

    const words=[

        "Full Stack Developer",

        "Frontend Developer",

        "Backend Developer",

        "Java Developer",

        "Python Developer"

    ];

    let word=0;

    let char=0;

    let deleting=false;

    function type(){

        const current=words[word];

        if(!deleting){

            typing.textContent=current.substring(0,char++);

            if(char>current.length){

                deleting=true;

                setTimeout(type,1200);

                return;

            }

        }else{

            typing.textContent=current.substring(0,char--);

            if(char<0){

                deleting=false;

                word=(word+1)%words.length;

            }

        }

        setTimeout(type,deleting?50:100);

    }

    type();

}
/*==========================================================
    CURSOR PERSONALIZADO
==========================================================*/

/*
    Para usarlo agrega en el HTML:

    <div class="cursor"></div>

    Luego agrega los estilos en style.css
*/

const cursor = document.querySelector(".cursor");

if(cursor){

    document.addEventListener("mousemove",(e)=>{

        cursor.style.left=e.clientX+"px";

        cursor.style.top=e.clientY+"px";

    });

}

/*==========================================================
    NAVBAR EFECTO SCROLL
==========================================================*/

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        header.style.background="rgba(5,5,5,.95)";

        header.style.boxShadow="0 0 25px rgba(255,0,0,.20)";

    }

    else{

        header.style.background="rgba(0,0,0,.45)";

        header.style.boxShadow="none";

    }

});

/*==========================================================
    EFECTO PARALLAX
==========================================================*/

const heroImage=document.querySelector(".hero-image");

window.addEventListener("mousemove",(e)=>{

    if(!heroImage) return;

    const x=(window.innerWidth/2-e.clientX)/35;

    const y=(window.innerHeight/2-e.clientY)/35;

    heroImage.style.transform=

    `rotateY(${x}deg) rotateX(${y}deg)`;

});

/*==========================================================
    APARICIÓN ESCALONADA
==========================================================*/

const cards=document.querySelectorAll(

".project-card,.service-card,.tech-card,.certificate-card"

);

cards.forEach((card,index)=>{

    card.style.opacity="0";

    card.style.transform="translateY(60px)";

    card.style.transition=".8s";

    card.style.transitionDelay=(index*.1)+"s";

});

const observerCards=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";

        }

    });

});

cards.forEach(card=>observerCards.observe(card));

/*==========================================================
    GLITCH ALEATORIO
==========================================================*/

const glitch=document.querySelectorAll(".glitch");

setInterval(()=>{

    glitch.forEach(title=>{

        title.classList.add("active");

        setTimeout(()=>{

            title.classList.remove("active");

        },180);

    });

},6000);

/*==========================================================
    EFECTO TERMINAL
==========================================================*/

const terminal=document.querySelector(".small-text");

if(terminal){

    setInterval(()=>{

        terminal.style.opacity=".3";

        setTimeout(()=>{

            terminal.style.opacity="1";

        },120);

    },1500);

}

/*==========================================================
    VALIDACIÓN FORMULARIO
==========================================================*/

const form=document.querySelector(".contact-form");

if(form){

    form.addEventListener("submit",(e)=>{

        e.preventDefault();

        const inputs=form.querySelectorAll(

            "input,textarea"

        );

        let valid=true;

        inputs.forEach(input=>{

            if(input.value.trim()===""){

                valid=false;

                input.style.borderColor="red";

            }

            else{

                input.style.borderColor="#333";

            }

        });

        if(valid){

            alert("Mensaje enviado correctamente.");

            form.reset();

        }

    });

}

/*==========================================================
    EFECTO BRILLO EN BOTONES
==========================================================*/

document.querySelectorAll(

".btn-red,.btn-outline"

).forEach(button=>{

    button.addEventListener("mousemove",(e)=>{

        const rect=button.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        button.style.backgroundPosition=

        `${x}px ${y}px`;

    });

});

/*==========================================================
    REVELAR TIMELINE
==========================================================*/

document.querySelectorAll(

".timeline-item"

).forEach(item=>{

    observer.observe(item);

});

/*==========================================================
    PRELOADER (OPCIONAL)

    Si agregas en el HTML:

    <div id="loader">
        <h1>SYSTEM BOOTING...</h1>
    </div>

==========================================================*/

const loader=document.getElementById("loader");

if(loader){

    window.addEventListener("load",()=>{

        setTimeout(()=>{

            loader.style.opacity="0";

            loader.style.pointerEvents="none";

            setTimeout(()=>{

                loader.remove();

            },1000);

        },1400);

    });

}

/*==========================================================
    EFECTO DE ENTRADA HERO
==========================================================*/

window.addEventListener("load",()=>{

    const hero=document.querySelector(".hero");

    if(hero){

        hero.animate([

            {

                opacity:0,

                transform:"translateY(50px)"

            },

            {

                opacity:1,

                transform:"translateY(0)"

            }

        ],{

            duration:1000,

            easing:"ease-out"

        });

    }

});

/*==========================================================
    FIN script.js
==========================================================*/