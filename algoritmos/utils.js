// procurar o fibonacci

let videoBoxes =Array.from(document.querySelectorAll("[data-video]"));




videoBoxes.forEach((elem)=>{
    let oldContent= elem.innerHTML;
    let videoAttr = elem.getAttribute("data-video")

    elem.addEventListener("mouseenter", ()=>{

        elem.innerHTML=`<div class="video animate pop">
        <video width="100%" height="100%" controls loop autoplay  >
            <source src="./videos/${videoAttr}.mp4" type="video/ogg">
          Your browser does not support the video tag.
          </video>
        </div>`;
    })

    elem.addEventListener("mouseleave", ()=>{
        elem.innerHTML=oldContent;
    })
})








