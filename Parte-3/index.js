function commentForm() {

    let form = $('#formComment');

    $(form).on("submit", (event)=> {
        event.preventDefault();


        let name = $(form).children('label').children('.userName').attr('value');
        let comment = $(form).children('label').children('#userComment').text();

        console.log(name);
        console.log(comment);

        
        if( name != undefined && comment != "") {
            $('.seccionComments').append(`<div><h3>`+ name + `</h3><p>` + comment + `</p></div>`);
        }
        
    })
}

function init() {
    commentForm();
}

init();