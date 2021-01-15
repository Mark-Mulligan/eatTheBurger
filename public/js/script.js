checkForBurgers();

let devourBtns = document.querySelectorAll('.devour-btn');
devourBtns.forEach(button => {
    button.addEventListener('click', handleDevourClick);
});

let removeBtns = document.querySelectorAll('.remove-btn');
removeBtns.forEach(button => {
    button.addEventListener('click', handleDeleteClick);
});

function seeIfValueExists(objArr, key, targetValue) {
    for (let i = 0; i < objArr.length; i++) {
        if (objArr[i][key] === targetValue) {
            return true;
        }
    }

    return false;
}

function checkForBurgers() {
    axios.get('/api/burgerdata', {}).then(res => {
        if (res.status === 200) {
            let uneatenBurgers = seeIfValueExists(res.data, 'devoured', 0);
            let devouredBurgers = seeIfValueExists(res.data, 'devoured', 1);

            if (!uneatenBurgers) {
                document.querySelector('.created-burgers-placeholder').classList.remove('hidden');
            } 
            
            if (!devouredBurgers) {
                document.querySelector('.devoured-burgers-placeholder').classList.remove('hidden');
            }

            console.log(uneatenBurgers);
            console.log(devouredBurgers);
        }
    }).catch(function (error) {
        console.log(error);
    })
}

function handleDevourClick(event) {
    let id = this.dataset.burgerid;

    axios.put(`/devour/${id}`, {}).then(res => {
        if (res.status === 200) {
            location.reload();
        }
    }).catch(function (error) {
        console.log(error);
    });
}

function handleDeleteClick() {
    let id = this.dataset.burgerid;

    axios.delete(`/remove/${id}`, {}).then(res => {
        if (res.status === 200) {
            location.reload();
        }
    }).catch(function (err) {
        console.log(err);
    })

}