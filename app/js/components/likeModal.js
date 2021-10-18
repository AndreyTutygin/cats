const addOrDelete = () => {
    const likeBtn = document.querySelectorAll('.card-product__like');
    const likeModalAdd = document.querySelector('.like-modal_add');
    const likeModalDelete = document.querySelector('.like-modal_delete');

    likeBtn.forEach((e) => {
        if (e.classList.contains('like_liked')) {
            e.addEventListener('click', () => {
                likeModalDelete.classList.toggle('like-modal_active');
        
                setTimeout(() => {
                    likeModalDelete.classList.remove('like-modal_active');
                }, 1000);
        
                e.classList.toggle('like_liked');
            })
        } else {
            e.addEventListener('click', () => {
                likeModalAdd.classList.toggle('like-modal_active');
        
                setTimeout(() => {
                    likeModalAdd.classList.remove('like-modal_active');
                }, 1000);
        
                e.classList.toggle('like_liked');
            })
        }
    })
}

addOrDelete();

