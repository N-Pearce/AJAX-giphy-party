console.log("Let's get this party started!");

const $form = $('#gif-form');
const $btn = $('#gif-button');
const $clear = $('#clear');

$form.on('submit', function(e){
    e.preventDefault();
    addGif();
});

$btn.on('click', function(e){
    e.preventDefault();
    addGif();
})

async function addGif(){
    const keyword = $('#search').val();
    $("#search").val('');
    const res = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
    const gifs = res.data.data;
    const rand = Math.round(Math.random() * gifs.length);
    const newGif = document.createElement('img');
    newGif.src = gifs[rand].images.downsized.url;
    newGif.style = 'width: 15%';
    $('#gifs').append(newGif);
}

$clear.on('click', function(){
    $('#gifs').html('');
})