 $(function(){
     //アコーディオンメニュー
    $('section h2').on("click",function(){
        // alert("rrr");
        // $('section').hide();
        $(this).next().slideToggle();
    });
});

const sliderNumber = 5
sliderElement= document.getElementById('slider')

sliderElement.setAttribute('src','img/works1.jpeg"')
for (let i =0; i < sliderNumber; i++){
    console.log("eee")
}