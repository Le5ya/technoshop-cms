import { form } from "./elems.js";
 import { hidePreview } from './previewController.js'
const openModal = (modal, classOpen) => {
	modal.classList.add(classOpen);
	
};
const closeModal = (modal, classOpen)  =>{
	modal.classList.remove(classOpen);
	form.reset();
	hidePreview();
};


export const modalController = ({ modal,
	btn = modalBtn,
	classOpen,
	classClose
}) => {
	btn.addEventListener('click', () => {
		openModal(modal, classOpen);
	});
	modal.addEventListener('click', ({ target }) => {
		if (target === modal || target.classList.contains(classClose)) {
			closeModal(modal, classOpen);
		}
	})
};