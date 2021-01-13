console.log('hello world');

let devourBtns = document.querySelectorAll('.devour-btn');
devourBtns.forEach(button => {
    button.addEventListener('click', handleDevourClick);
})

function handleDevourClick(event) {
    let id = this.dataset.burgerid;

    axios.put(`/devour/${id}`, {}).then(res => {
        console.log(res.status);
        if (res.status === 200) {
            location.reload();
        }
    }).catch(function (error) {
        console.log(error);
    });

}