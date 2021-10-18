document.querySelector('.sort__btn-price_down').onclick = () => mySortUp('data-price');
document.querySelector('.sort__btn-price_up').onclick = () => mySortDown('data-price');
document.querySelector('.sort__btn-years_down').onclick = () => mySortUp('data-years');
document.querySelector('.sort__btn-years_up').onclick = () => mySortDown('data-years');

function mySortUp(sortType) {
    let wrapCards = document.querySelector('.content__list');

    for (let i = 0; i < wrapCards.children.length; i++) {
        for (let j = i; j < wrapCards.children.length; j++) {
            if (+wrapCards.children[i].getAttribute(sortType) < +wrapCards.children[j].getAttribute(sortType)) {
                let replacedNode = wrapCards.replaceChild(wrapCards.children[j], wrapCards.children[i]);
                insertAfter(replacedNode, wrapCards.children[i]);
            }
        }
    }
}

function mySortDown(sortType) {
    let wrapCards = document.querySelector('.content__list');

    for (let i = 0; i < wrapCards.children.length; i++) {
        for (let j = i; j < wrapCards.children.length; j++) {
            if (+wrapCards.children[i].getAttribute(sortType) > +wrapCards.children[j].getAttribute(sortType)) {
                let replacedNode = wrapCards.replaceChild(wrapCards.children[j], wrapCards.children[i]);
                insertAfter(replacedNode, wrapCards.children[i]);
            }
        }
    }
}

function insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

function openSortList(openListClass, listClass, sortBtnClass, sortListActiveClass) {
    let openList = document.querySelector(openListClass);
    let list = document.querySelector(listClass);
    let sortBtn = document.querySelectorAll(sortBtnClass);

    const toggleList = () => {
        list.classList.toggle(sortListActiveClass);
    }

    openList.addEventListener('click', e => {
        e.stopPropagation();

        toggleList();
    });

    sortBtn.forEach((e) => {
        e.addEventListener('click', e => {
            e.stopPropagation();
        
            toggleList();
        });
    })

    document.addEventListener('click', e => {
        let target = e.target;
        let its_list = target == list || list.contains(target);
        let its_openList = target == openList;
        let its_btn = target == sortBtn;
        let list_is_active = list.classList.contains('sort__list_active');

        if (!its_list && !its_openList && !its_btn && list_is_active) {
            toggleList();
        }
    })
}

openSortList('.open-price', '.sort__list-price', '.sort__btn-price', 'sort__list_active');
openSortList('.open-years', '.sort__list-years', '.sort__btn-years', 'sort__list_active');