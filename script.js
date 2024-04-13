let time = new Date().toDateString();
document.querySelector(".day").textContent = time

// window.scrollBy(0, window.innerHeight);



let inputvalue = document.querySelector(".inputtext")
let additem = document.querySelector(".searchsection")
let chatdiv = document.querySelector(".chatdiv")

window.addEventListener("keydown", () => { inputvalue.focus() });


inputvalue.addEventListener("change", function (e) {
    if (inputvalue.value === "help" || inputvalue.value === "Help") {
        console.log(inputvalue.value);
        helpSection();
        inputvalue.value = ""
        updateScroll()
    } else if (inputvalue.value === "Bio" || inputvalue.value === "bio") {
        bioSection();
        inputvalue.value = ""
        updateScroll()

    }
    else if (inputvalue.value === "Skills" || inputvalue.value === "skills") {
        skillsSection();
        inputvalue.value = ""
        updateScroll()

    }
    else if (inputvalue.value === "Project" || inputvalue.value === "project") {
        projectSection();
        inputvalue.value = ""
        updateScroll()

    }
    else if (inputvalue.value === "about" || inputvalue.value === "About") {
        aboutSection()
        inputvalue.value = ""
        updateScroll()

    }
    else {
        cmdNotfound();
        inputvalue.value = ""
        updateScroll()

    }
})



function updateScroll() {
    chatdiv.scrollTop = chatdiv.scrollHeight;
}


function helpSection() {
    const help = `
    <div class="content">
    <div class="root">
        <div class="root1">
            <h1><i class="ri-flower-fill"></i>anubhavjha</h1>
        </div>
        <div class="root2">
            <h1> <i class="ri-folder-3-fill"></i>/portfolio</h1>
        </div>
        <div class="root3">
            <i class="ri-git-fork-fill"></i>
            <h1>/Help</h1>
        </div>
    </div>

    <h1 class="my-2">$ Help</h1>
    <div class="innercontent">
        <div class="left flex flex-col gap-1">
            <h1>bio</h1>
            <h1>Skills</h1>
            <h1>Project</h1>
            <h1>About</h1>
        </div>
        <div class="right flex flex-col gap-1">
            <h1>Show My Bio Information</h1>
            <h1>List All Of My Skills</h1>
            <h1>Show My Projects</h1>
            <h1>To See What Is Terminal Portfolio</h1>
        </div>

    </div>
</div>
    `
    document.querySelector(".searchsection").innerHTML += help
}

function bioSection() {
    const bio = `
    <div class="biosection">
    <div class="root">
    <div class="root1">
    <h1><i class="ri-flower-fill"></i>anubhavjha</h1>
    </div>
    <div class="root2">
            <h1> <i class="ri-folder-3-fill"></i>/portfolio</h1>
        </div>
        <div class="root3">
        <i class="ri-git-fork-fill"></i>
        <h1>/Bio</h1>
        </div>
        </div>

        <h1 class="my-2 searchedvalue">$ Bio</h1>
        <div class="innercontent w-full flex my-2">
        <div class="imagesection">
        <div class="inagepart w-[200px] h-[200px]">
                <img src="https://images8.alphacoders.com/132/1321471.png" alt="">
            </div>
        </div>
        <div class="bio2div">
        <p class="text-[12px]">Experienced MERN developer passionate about crafting efficient, scalable, and user-friendly web applications. Proficient in MongoDB, Express.js, React.js, and Node.js, with a keen eye for front-end design and a dedication to creating seamless user experiences. Committed to continuous learning and staying updated with the latest technologies.</p>
        
        <div class="content flex flex-col max-w-min">
        <button class='bg-[#AF9B03] w-[150px] mt-3 text-[12px]' >This is not ME</button>
        <button href="./shivam kumar shah MERN.pdf" download class='bg-[#0481A1] text-[12px] w-[150px] mt-3'><a href="./shivam kumar shah MERN.pdf" class="text-[12px]" download>Download Resume</a></button>
          </div>
          </div>
          </div>
          </div>
          `

    document.querySelector(".searchsection").innerHTML += bio

}

function skillsSection() {
    const skilld = `
    <div class="skillssection">
    <div class="root">
        <div class="root1">
            <h1><i class="ri-flower-fill"></i>anubhavjha</h1>
        </div>
        <div class="root2">
            <h1> <i class="ri-folder-3-fill"></i>/portfolio</h1>
        </div>
        <div class="root3">
            <i class="ri-git-fork-fill"></i>
            <h1>/Skills</h1>
        </div>
    </div>

    <h1 class="my-2 searchedvalue">$ Skills</h1>
    <div class="skills flex flex-col">
        <a class="text-[12px]" href=""> -->  html , css, javascript , React.Js , Bootstrap , tailwind</a>
        <a class="text-[12px]" href=""> -->  Mongodb , Node.js, Express , Socket.io , Axios </a>
        <a class="text-[12px]" href=""> -->  Java , Python</a>
        <a class="text-[12px]" href=""> -->  DS & Algorithm (Basic)</a>
    </div>
</div>
    `
    document.querySelector(".searchsection").innerHTML += skilld
}

function projectSection() {
    const project = `
    <div class="Projectssection">
    <div class="root">
        <div class="root1">
            <h1><i class="ri-flower-fill"></i>anubhavjha</h1>
            </div>
            <div class="root2">
            <h1> <i class="ri-folder-3-fill"></i>/portfolio</h1>
        </div>
        <div class="root3">
            <i class="ri-git-fork-fill"></i>
            <h1>/Projects</h1>
        </div>
        </div>
        
        <h1 class="my-2 searchedvalue">$ Projects</h1>
        <div class="projects  ">
        <div class="frot-projects flex gap-3">
            <div class="name-proj">
            <p class="text-[12px]">--> WeElasstic</p>
            <p class="text-[12px]">--> Youbo</p>
            <p class="text-[12px]">--> Hotel-Odisej</p>
            <p class="text-[12px]">--> Instagram (MERN)</p>
            <p class="text-[12px]">--> Discord (MERN)</p>
            <p class="text-[12px]">--> Whatsapp (MERN)</p>
            <p class="text-[12px]">--> VS Code editor (MERN)</p>
            </div>
            <div class="dis-proj flex flex-col">
            <a href="https://github.com/anubhavjha893">Link</a>
            <a href="https://shivam12shah.github.io/yubo-clone/">Link</a>
            <a href="https://shivam12shah.github.io/Hotel-Odisej/">Link</a>
            <a href="https://instagram-pan1.onrender.com">Link</a>
            <a href="https://discord-deployment.onrender.com">Link</a>
            <a href="">Link</a>
            <a href="https://vs-code-fxk8.onrender.com">Link</a>
            </div>
        </div>
        </div>
        </div>
        `
    document.querySelector(".searchsection").innerHTML += project
}

function aboutSection() {
    const about = `
        
        <div class="aboutsection">
        <div class="root">
        <div class="root1">
        <h1><i class="ri-flower-fill"></i>anubhavjha</h1>
        </div>
                            <div class="root2">
                                <h1> <i class="ri-folder-3-fill"></i>/portfolio</h1>
                            </div>
                            <div class="root3">
                            <i class="ri-git-fork-fill"></i>
                            <h1>/About</h1>
                            </div>
                            </div>
                            
                            <h1 class="my-2 searchedvalue">$ About</h1>
                            <p>This portfolio project is a creative rendition of a terminal interface, presenting my bio, skills, projects, and assistance in a command-line style. It offers a unique and interactive way to showcase my MERN development expertise, allowing visitors to navigate through information using familiar terminal commands in a minimalist and engaging manner.</p>
                            </div>
                            
                            `
    document.querySelector(".searchsection").innerHTML += about
}

function cmdNotfound() {

    const smd = `
    
    <div class="cmdnotfoundsection">
                        <div class="root">
                            <div class="root1">
                                <h1><i class="ri-flower-fill"></i>anubhavjha</h1>
                            </div>
                            <div class="root2">
                                <h1> <i class="ri-folder-3-fill"></i>/portfolio</h1>
                            </div>
                            <div class="root3">
                                <i class="ri-git-fork-fill"></i>
                                <h1>/Error</h1>
                            </div>
                        </div>

                        <h1 class="my-2 bg-red">$ Command Not Found </h1>
                        <p class="text-[12px] text-red"  >Try Help</p>
                    </div>
                    `
                    document.querySelector(".searchsection").innerHTML +=  smd;
}