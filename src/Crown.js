
export default function AddCrown(CrownImg) {
    const CrownField = document.querySelector('.for_image')
    const img = new Image()
    img.src = CrownImg;
    img.width = 150;
    img.height = 150;
    CrownField.append(img)
}

