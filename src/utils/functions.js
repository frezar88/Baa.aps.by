export function addSelect() {
    let blockForSelect = document.querySelector('.brand')
    let div = document.createElement('div')
    div.className = 'for-select d-flex align-items-center mt-2'
    let select = document.querySelector('select.selectBrand')
    let selectCopy = select.cloneNode(true)
    let btn = document.createElement('button')
    btn.className = 'ms-1 btn btn-danger'
    btn.setAttribute('variant', 'danger')
    btn.innerHTML = '-'
    btn.style.width = '38px'
    btn.style.height = '38px'
    btn.addEventListener('click', (e) => {
        e.currentTarget.parentNode.remove()
    })
    div.append(selectCopy)
    div.append(btn)
    blockForSelect.append(div)
}


export function addMaskFromInputCallBackForm(path, maskValue) {
    function setCursorPosition(pos, elem) {
        elem.focus();
        if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
        else if (elem.createTextRange) {
            let range = elem.createTextRange();
            range.collapse(true);
            range.moveEnd("character", pos);
            range.moveStart("character", pos);
            range.select();
        }
    }

    function mask(event) {
        let matrix = maskValue,
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, "");

        if (def.length >= val.length) val = def;

        this.value = matrix.replace(/./g, function (a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
        });

        if (event.type === "blur") {
            if (this.value.length === 2) this.value = "";
        } else setCursorPosition(this.value.length, this);
    }

    path.addEventListener("input", mask, false);

    path.addEventListener("focus", mask, false);

    path.addEventListener("blur", mask, false);
}


export function validateEmail(email) {
    const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regExp.test(String(email).toLowerCase());
}