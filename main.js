const array = [1,2,3,true,78,55,`olena`,89,45];

const generateList = (arr) => {
    const ul = document.createElement('ul');
    arr.forEach(item => {
        let li = document.createElement('li');
        if(Array.isArray(item)) {
           li.append(generateList(item));
        } else {
            li.textContent = item;
        }

        ul.append(li);
    });

    return ul;
}

document.body.prepend(generateList(array));