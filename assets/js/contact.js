document.addEventListener('DOMContentLoaded', () => {
    let dialog = document.querySelector('dialog');
    let form = document.querySelector('form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        dialog.showModal();

        document.body.addEventListener('click', (e) => {
            dialog.close('Clicked away');
        }, { once: true});

        form.reset();
    });
});